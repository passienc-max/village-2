import { MapPin } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";

const ROOMS = [
  { name: "Parent Resource Room", desc: "Computers, printers, resumes, job applications, resource navigation.", span: "lg:col-span-2", testid: "vision-room-resource" },
  { name: "Kids' Learning Room", desc: "Homework, reading, confidence, and life skills.", span: "", testid: "vision-room-kids" },
  { name: "Community Classroom", desc: "Cooking, budgeting, technology, career skills.", span: "", testid: "vision-room-classroom" },
  { name: "Professional Prep Room", desc: "Hair, makeup, interview prep, professional clothing.", span: "", testid: "vision-room-prep" },
  { name: "Laundry & Resource Hub", desc: "Donated laundry credits, hygiene supplies, clothing, diapers.", span: "lg:col-span-2", testid: "vision-room-laundry" },
  { name: "Quiet / Support Room", desc: "A place to decompress and connect with trained support.", span: "lg:col-span-3", testid: "vision-room-quiet" },
];

export default function Vision() {
  return (
    <section id="vision" className="py-24 lg:py-32 bg-paper" data-testid="vision-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Long-term vision"
          title="First the network. Then the four walls."
          sub="The physical community center is a later-stage goal — the platform proves what families actually need, then the building grows around those needs."
        />

        <Reveal delay={0.1}>
          <div className="mt-14 rounded-2xl border border-ink/10 bg-ink p-6 sm:p-10" data-testid="vision-blueprint">
            <div className="flex items-center justify-between mb-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ochre" data-testid="vision-blueprint-label">
                Site plan — community center
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/40 flex items-center gap-1.5">
                <MapPin size={12} /> Concept
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {ROOMS.map((r) => (
                <div
                  key={r.name}
                  className={`rounded-xl border border-dashed border-paper/25 hover:border-ochre/70 transition-colors duration-300 p-5 ${r.span}`}
                  data-testid={r.testid}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ochre">Room</p>
                  <h3 className="mt-2 font-display text-lg text-paper">{r.name}</h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-paper/60">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
