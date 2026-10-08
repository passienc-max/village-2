import { BadgeCheck, ShieldCheck, FileCheck2, Baby, HeartHandshake } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";

const PILLARS = [
  {
    icon: BadgeCheck,
    title: "Identity verification",
    body: "Every volunteer and driver is a verified, real, identified person.",
    testid: "safety-pillar-id-check",
  },
  {
    icon: ShieldCheck,
    title: "Background screening",
    body: "Appropriate criminal background checks for anyone offering help.",
    testid: "safety-pillar-background-check",
  },
  {
    icon: FileCheck2,
    title: "License & insurance",
    body: "Driver's-license verification, insurance checks, and vehicle requirements for transportation.",
    testid: "safety-pillar-driver-check",
  },
  {
    icon: Baby,
    title: "Child-facing clearance",
    body: "Additional screening and training for anyone involved with children.",
    testid: "safety-pillar-child-clearance",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-24 lg:py-32 bg-paper" data-testid="safety-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="Safety & verification"
          title="Safety is foundational, not a feature."
          sub="Especially where transportation, children, homes, and vulnerable families are involved — trust is earned through layers of verification, never assumed."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="h-full">
              <div
                className="h-full rounded-2xl border border-ink/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
                data-testid={p.testid}
              >
                <div className="w-11 h-11 rounded-full bg-sage-light flex items-center justify-center">
                  <p.icon size={20} className="text-sage" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A5C50]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div
            className="mt-4 rounded-2xl border border-ink/10 bg-cream p-6 sm:p-7 flex items-start gap-4"
            data-testid="safety-trust-note"
          >
            <HeartHandshake size={22} className="text-terra shrink-0 mt-0.5" />
            <p className="text-sm sm:text-base leading-relaxed text-ink/80">
              <span className="font-medium">Community trust signals.</span> Parents give feedback and
              vouch for one another — but ratings are never the only safety mechanism. Verification
              comes first, always.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
