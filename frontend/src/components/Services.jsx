import { CarFront, WashingMachine, ShoppingBasket, GraduationCap, MonitorSmartphone, Briefcase, PhoneCall, Smile } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";

const LAUNDRY_IMG =
  "https://images.unsplash.com/photo-1689588035701-b1a59512a192?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwzfHxsYXVuZHJvbWF0JTIwaW50ZXJpb3IlMjB3YXJtJTIwbGlnaHQlMjBub3N0YWxpY3xlbnB8fHx8MTc5MTQyNjIxNnww&ixlib=rb-4.1.0&q=85";
const GROCERY_IMG =
  "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjB2b2x1bnRlZXJpbmclMjBzaGFyaW5nfGVufDB8fHx8MTc5MTQyNDQ5Nnww&ixlib=rb-4.1.0&q=85";

const SERVICES = [
  {
    icon: CarFront,
    title: "Transportation",
    body: "Grocery trips, school activities, soccer practice, appointments — vetted drivers for approved needs.",
    testid: "service-card-transportation",
  },
  {
    icon: WashingMachine,
    title: "Laundry",
    body: "Parent-to-parent laundry help, plus donated laundromat loads sponsored by local businesses.",
    img: LAUNDRY_IMG,
    testid: "service-card-laundry",
  },
  {
    icon: ShoppingBasket,
    title: "Food & household resources",
    body: "Connections to donated goods and community resources for your table and your home.",
    img: GROCERY_IMG,
    testid: "service-card-food",
  },
  {
    icon: GraduationCap,
    title: "School & activity support",
    body: "Tutoring, transportation, and participation support so kids never miss out.",
    testid: "service-card-school",
  },
  {
    icon: MonitorSmartphone,
    title: "Technology",
    body: "Computer help, digital literacy, applications, and online services.",
    testid: "service-card-technology",
  },
  {
    icon: Briefcase,
    title: "Employment support",
    body: "Resumes, job applications, interview prep, professional clothing, hair, and makeup.",
    testid: "service-card-employment",
  },
  {
    icon: PhoneCall,
    title: "Emotional support",
    body: "Parent phone trees for moments of stress and anxiety — plus a line for the kids, and connections to professional resources.",
    testid: "service-card-emotional",
  },
  {
    icon: Smile,
    title: "Children's life skills",
    body: "Confidence, communication, greeting people, respect, and everyday social skills for the kids.",
    testid: "service-card-life-skills",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-paper" data-testid="services-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="What the village coordinates"
          title="Practical help for real, everyday life."
          sub="Not vague promises — specific, coordinated services that take real weight off a parent's shoulders."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.07} className="h-full">
              <div
                className={`h-full rounded-2xl border border-ink/10 bg-white overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-warm ${s.img ? "sm:col-span-1 lg:col-span-2" : ""}`}
                data-testid={s.testid}
              >
                {s.img && (
                  <div className="overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-40 object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col grow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center shrink-0">
                      <s.icon size={19} className="text-terra" />
                    </div>
                    <h3 className="font-display text-xl text-ink leading-tight">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#5A5C50]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
