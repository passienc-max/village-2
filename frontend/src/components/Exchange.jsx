import { useState } from "react";
import { ShoppingBasket, WashingMachine, GraduationCap, HeartHandshake, Sparkles, Repeat } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Reveal";

const STEPS = [
  {
    icon: ShoppingBasket,
    title: "Help",
    body: "A parent helps another family with a grocery trip — and earns Village Points.",
  },
  {
    icon: WashingMachine,
    title: "Share",
    body: "A parent shares their laundry facilities for a few hours — and earns points.",
  },
  {
    icon: GraduationCap,
    title: "Teach",
    body: "A parent teaches computer skills or resume writing — and earns points.",
  },
  {
    icon: HeartHandshake,
    title: "Receive",
    body: "Later, that parent needs laundry, transportation, or tutoring — and uses points. No shame, no hoops.",
  },
];

const ACTIVITIES = [
  { key: "carpool", label: "Drive a carpool", pts: 20 },
  { key: "laundry", label: "Host a laundry session", pts: 10 },
  { key: "tutor", label: "Tutor a student", pts: 20 },
];

export default function Exchange() {
  const [activity, setActivity] = useState(ACTIVITIES[0]);
  const [perWeek, setPerWeek] = useState(2);

  const points = activity.pts * perWeek;
  const loads = Math.floor(points / 10);
  const hours = Math.floor(points / 20);

  return (
    <section id="exchange" className="py-24 lg:py-32 bg-cream" data-testid="exchange-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          eyebrow="The Village Exchange"
          title="Give what you can. Receive what you need."
          sub="A points-and-credit economy at the heart of the village — parents who volunteer time or provide approved help earn Village Points, and spend them on the support they need."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div
                  className="h-full rounded-2xl border border-ink/10 bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-warm"
                  data-testid={`exchange-step-${s.title.toLowerCase()}`}
                >
                  <div className="flex items-center justify-between">
                    <s.icon size={22} className="text-terra" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/40">
                      Step {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A5C50]">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-ink/10 bg-ink text-paper p-7 sm:p-9 shadow-warm" data-testid="exchange-calculator">
              <div className="flex items-center gap-2.5">
                <Repeat size={18} className="text-ochre" />
                <h3 className="font-display text-2xl" data-testid="exchange-calculator-title">
                  Points math, live
                </h3>
              </div>

              <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                Pick how you'd pitch in
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ACTIVITIES.map((a) => (
                  <button
                    key={a.key}
                    onClick={() => setActivity(a)}
                    data-testid={`exchange-activity-chip-${a.key}`}
                    className={`rounded-full px-4 py-2 text-sm border transition-all duration-200 active:scale-[0.97] ${
                      activity.key === a.key
                        ? "bg-ochre text-ink border-ochre font-medium"
                        : "border-paper/25 text-paper/80 hover:border-paper/60"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>

              <label className="mt-8 block font-mono text-[10px] uppercase tracking-[0.22em] text-paper/60">
                Times per week: <span className="text-ochre">{perWeek}</span>
              </label>
              <input
                type="range"
                min="1"
                max="5"
                value={perWeek}
                onChange={(e) => setPerWeek(Number(e.target.value))}
                className="mt-3 w-full accent-[#D68C32] cursor-pointer"
                data-testid="exchange-calculator-slider"
              />

              <div className="mt-8 border-t border-paper/10 pt-7" data-testid="exchange-points-output">
                <p className="font-display text-5xl sm:text-6xl text-ochre">
                  +{points} <span className="text-xl sm:text-2xl text-paper/80">Village Points / week</span>
                </p>
                <p className="mt-4 text-sm sm:text-base text-paper/75 flex items-start gap-2">
                  <Sparkles size={16} className="mt-0.5 shrink-0 text-ochre" />
                  That could cover {loads} free laundry load{loads !== 1 ? "s" : ""} and {hours} hour
                  {hours !== 1 ? "s" : ""} of math tutoring when you need them.
                </p>
              </div>

              <p className="mt-7 text-xs leading-relaxed text-paper/50">
                Illustrative rates — the community sets final values. And if you can't volunteer right
                now — because of disability, work, or an emergency — donated credits, sponsors, and
                grants cover you too.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
