import { Reveal, Eyebrow } from "@/components/Reveal";
import { LogoMark } from "@/components/Logo";

const KITCHEN_IMG =
  "https://images.unsplash.com/photo-1628191012047-e789922abfdf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODF8MHwxfHNlYXJjaHwxfHxjb3p5JTIwd2FybSUyMGZhbWlseSUyMGtpdGNoZW58ZW58MHx8fHwxNzkxNDI0NTAwfDA&ixlib=rb-4.1.0&q=85";

const LETTER = [
  "I am a single mother of three beautiful girls. Two of them are nearly grown — my oldest is in her first year of college, my middle girl is a senior in high school. When I turned 40, the village I had at 26 — when I was a mother of two in diapers — had changed drastically. That's when I found myself pregnant with my third, pretty much alone. My mom lives states away, and the family I do have close by don't help much, or at all.",
  "I was struggling financially, juggling my own studies while my two older girls got their licenses, went to their proms, and got ready for college — all while chasing a toddler whose energy level is through the roof. Then, before she turned three, my life really took a hit: my youngest started having seizures. My relationship ended on top of it. I was doing everything for everyone, and it felt impossible. I felt so alone.",
  "The only person who really helped me with my youngest was my oldest daughter — and she was leaving for college. Her sister loves her dearly, but she's not a kid person, and it stressed her too much to step in. Suddenly I had this wild three-year-old, and I was raising her pretty much by myself. Most people don't want to watch her, or they try and can't handle her meltdowns. I started to feel broken down and hopeless. I couldn't get away, even to the grocery store — every time I leave the house, I'm getting calls from one of the kids. Andi had doctor appointments out of town, and for a while both our cars were broken down. I was desperate for a change.",
  "I had the idea for something like this a few years back, and I kept praying on it. Then one day it hit me: why isn't there a better community program for people like me? Sure, there are medical rides through insurance — but where is the community for the parent who needs to do laundry and has no ride, no money, no fallback? There isn't much of a community anywhere anymore.",
  "I remember when I was a kid — we'd go to barbecues, or to my mom's friends' houses to watch football. There was a community, a family of sorts, with kids and parents, where the older kids watched the younger ones. We've kind of lost that. But the old saying is true: it takes a village to raise a child. That's when I finally fine-tuned this idea. My village, and yours.",
  "You shouldn't have to stress so much. Stress takes too much away from you and your kids — and as single parents, we don't get much time as it is. If you're reading this, I want you to feel hope. Light at the end of the day, the week, the month. Maybe you don't have to stress about the laundry. Or something to wear to a job interview. Or the resume your job coach says you have to turn in before your cash assistance is terminated.",
];

export default function FounderLetter() {
  return (
    <section id="story" className="py-24 lg:py-32 bg-cream" data-testid="story-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <Eyebrow>Why I started this</Eyebrow>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink">
                A letter from our founder
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 overflow-hidden rounded-t-[8rem] rounded-b-2xl shadow-warm" data-testid="story-photo-frame">
                <img
                  src={KITCHEN_IMG}
                  alt="A mother and child together in a warm kitchen"
                  className="w-full h-[380px] sm:h-[440px] object-cover"
                  data-testid="story-photo"
                />
              </div>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                Christina — founder, single mom of three
              </p>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7" data-testid="founder-letter">
          {LETTER.map((p, i) => (
            <Reveal key={i} delay={0.05}>
              <p className={`font-display text-lg sm:text-xl leading-relaxed text-ink/85 mt-7 ${i === 0 ? "dropcap" : ""}`}>
                {p}
              </p>
            </Reveal>
          ))}
          <Reveal delay={0.05}>
            <p className="font-display text-lg sm:text-xl leading-relaxed text-ink/85 mt-7">
              So help me build a village — a network for every single mom, dad, and child. Let's keep
              our sanity, and help one another.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex items-center gap-4" data-testid="founder-signature">
              <LogoMark size={40} />
              <div>
                <p className="font-display italic text-2xl text-ink">With love, Christina</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40 mt-1">
                  Founder, The Village
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
