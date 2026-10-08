import { WashingMachine, ShoppingBasket, Scissors, Stethoscope, Building2, Users, TrendingUp } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";

const SPONSORS = [
  { icon: WashingMachine, who: "A laundromat", gives: "sponsors 500 loads of laundry" },
  { icon: ShoppingBasket, who: "A grocery store", gives: "sponsors grocery trips and family food" },
  { icon: Scissors, who: "A salon", gives: "sponsors haircuts before interviews" },
  { icon: Stethoscope, who: "A dentist", gives: "sponsors children's appointments" },
  { icon: Building2, who: "A company", gives: "sponsors Village Points" },
  { icon: Users, who: "An employer", gives: "sponsors memberships for employees' families" },
];

const IMPACT = ["Families helped", "Services provided", "Volunteer hours supported", "Credits funded"];

export default function Sponsors() {
  return (
    <section id="business" className="py-24 lg:py-32 bg-sage-light" data-testid="sponsors-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="For businesses & sponsors"
          title="Businesses become part of the village."
          sub="Local businesses contribute more than advertising — they sponsor specific services that directly help families, and see the measurable impact of every dollar."
        />

        <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {SPONSORS.map((s, i) => (
              <Reveal key={s.who} delay={i * 0.06} className="h-full">
                <div
                  className="h-full rounded-2xl border border-ink/10 bg-white p-6 flex items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
                  data-testid={`sponsor-example-${i + 1}`}
                >
                  <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center shrink-0">
                    <s.icon size={18} className="text-sage" />
                  </div>
                  <p className="text-sm leading-relaxed text-ink/85">
                    <span className="font-medium">{s.who}</span> {s.gives}.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="rounded-2xl bg-ink text-paper p-8 sm:p-9 shadow-warm" data-testid="sponsor-impact-card">
              <TrendingUp size={22} className="text-ochre" />
              <h3 className="mt-4 font-display text-2xl sm:text-3xl leading-snug">
                Measurable impact, not just ad space.
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-paper/70">
                Instead of "your logo here," sponsors see real numbers: families helped, services
                provided, volunteer hours supported, credits funded.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {IMPACT.map((m) => (
                  <div key={m} className="rounded-xl border border-paper/15 px-4 py-3.5" data-testid="sponsor-impact-metric">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ochre">Impact</p>
                    <p className="mt-1 text-sm text-paper/90">{m}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollToId("join")}
                data-testid="sponsor-cta-button"
                className="mt-8 w-full rounded-full bg-ochre text-ink font-medium py-3.5 transition-all duration-200 hover:brightness-105 active:scale-[0.98]"
              >
                Become a sponsor
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
