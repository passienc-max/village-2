import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Reveal, SectionHead } from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Needing help",
    body: "A parent can't do it all — no car for the laundry, no suit for the interview, no break, ever.",
  },
  {
    n: "02",
    title: "Receiving without stigma",
    body: "Points, donated credits, and sponsors cover the gap. No shame, no endless applications.",
  },
  {
    n: "03",
    title: "Gaining ground",
    body: "Skills, resumes, breathing room — maybe even a home bakery or cleaning business of their own.",
  },
  {
    n: "04",
    title: "Paying it forward",
    body: "The parent who first needed free laundry later sponsors it for the next family. The village grows.",
  },
];

export default function Transformation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 65%"] });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <section id="transformation" ref={ref} className="py-24 lg:py-32 bg-ink text-paper relative overflow-hidden" data-testid="transformation-section">
      <div className="blueprint-bg absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          light
          eyebrow="The transformation"
          title="From needing help to giving it."
          sub="The goal is not permanent dependence. It's a living community — not a one-direction charity."
        />

        <div className="mt-16 relative max-w-3xl">
          <div className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-paper/15" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute left-[19px] sm:left-[23px] top-2 bottom-2 w-px bg-ochre origin-top"
            data-testid="transformation-progress-line"
          />
          <div className="space-y-12">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="flex gap-6 sm:gap-9" data-testid={`transformation-step-${s.n}`}>
                  <div className="relative shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-ochre/50 bg-ink flex items-center justify-center font-mono text-xs text-ochre z-10">
                    {s.n}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-display text-2xl sm:text-3xl text-paper">{s.title}</h3>
                    <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-paper/65 max-w-xl">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
