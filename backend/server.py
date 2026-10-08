from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo.errors import DuplicateKeyError
import os
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, BeforeValidator
from typing import Optional, List, Annotated
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


def coerce_oid(v):
    return str(v)


PyObjectId = Annotated[str, BeforeValidator(coerce_oid)]


class BaseDocument(BaseModel):
    model_config = ConfigDict(extra="ignore", populate_by_name=True)

    id: PyObjectId = Field(default_factory=lambda: str(uuid.uuid4()), alias="_id")

    def to_mongo(self):
        return self.model_dump(by_alias=True)

    @classmethod
    def from_mongo(cls, doc):
        doc = dict(doc)
        if "_id" in doc:
            doc["_id"] = str(doc["_id"])
        return cls(**doc)


class WaitlistEntry(BaseDocument):
    name: str
    email: str
    role: str
    city: str = ""
    offering: str = ""
    needs: str = ""
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class WaitlistCreate(BaseModel):
    name: str
    email: str
    role: str
    city: str = ""
    offering: str = ""
    needs: str = ""


class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


@api_router.get("/")
async def root():
    return {"message": "The Village API is up. It takes a village."}


@api_router.post("/waitlist")
async def join_waitlist(input: WaitlistCreate):
    role = input.role if input.role in ("parent", "business") else "parent"
    entry = WaitlistEntry(
        name=input.name.strip()[:120],
        email=input.email.strip().lower(),
        role=role,
        city=input.city.strip()[:120],
        offering=input.offering.strip()[:600],
        needs=input.needs.strip()[:600],
    )
    try:
        await db.waitlist.insert_one(entry.to_mongo())
    except DuplicateKeyError:
        total = await db.waitlist.count_documents({})
        return {
            "already": True,
            "total": total,
            "id": None,
            "message": "You're already on the list — we saved your spot the first time.",
        }
    total = await db.waitlist.count_documents({})
    return {"already": False, "total": total, "id": entry.id, "message": "Welcome to the village."}


@api_router.get("/waitlist/count")
async def waitlist_count():
    total = await db.waitlist.count_documents({})
    parents = await db.waitlist.count_documents({"role": "parent"})
    businesses = await db.waitlist.count_documents({"role": "business"})
    return {"total": total, "parents": parents, "businesses": businesses}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(client_name=input.client_name)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_indexes():
    await db.waitlist.create_index("email", unique=True)


logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
