import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const LINES = ["A parent should", "not have to do", "everything alone."];

const HERO_IMG =
  "https://images.unsplash.com/photo-1679108853755-10a20562ec61?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHw0fHxzaW5nbGUlMjBtb3RoZXIlMjBjaGlsZCUyMHNtaWxpbmd8ZW58MHx8fHwxNzkxNDI0NDk2fDA&ixlib=rb-4.1.0&q=85";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  return (
    <section id="top" ref={ref} className="relative min-h-screen pt-28 pb-16 lg:pt-36 overflow-hidden" data-testid="hero-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <motion.div style={{ opacity: fade }} className="lg:col-span-7 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="font-mono text-xs uppercase tracking-[0.24em] text-terra"
            data-testid="hero-eyebrow"
          >
            A single-parent &amp; family support network
          </motion.p>

          <h1 className="mt-6 font-display tracking-tight text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[4.6rem] text-ink">
            {LINES.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-1">
                <motion.span
                  className="block"
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.12 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`hero-headline-line-${i + 1}`}
                >
                  {i === LINES.length - 1 ? (
                    <>
                      everything <em className="italic text-terra">alone.</em>
                    </>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-[#5A5C50]"
            data-testid="hero-subline"
          >
            <span className="font-display italic text-ink text-lg sm:text-xl">It takes a village.</span>{" "}
            Give what you can. Receive what you need. A coordinated network of parents, volunteers,
            businesses, and neighbors — so no one raises a family alone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToId("join")}
              data-testid="hero-join-button"
              className="group inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-dark text-paper font-medium px-7 py-3.5 transition-all duration-200 active:scale-[0.97]"
            >
              Join the Village
              <ArrowUpRight size={18} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToId("business")}
              data-testid="hero-sponsor-button"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 hover:border-ink/50 px-7 py-3.5 text-sm font-medium transition-all duration-200 active:scale-[0.97]"
            >
              For Businesses &amp; Sponsors
            </button>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.4 }}
            animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div style={{ y: imgY }} className="overflow-hidden rounded-t-[10rem] rounded-b-[1.5rem] shadow-warm" data-testid="hero-image-frame">
              <img
                src={HERO_IMG}
                alt="A mother holding her child in warm evening light"
                className="w-full h-[420px] sm:h-[520px] lg:h-[560px] object-cover"
                data-testid="hero-image"
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="absolute -bottom-7 -left-2 sm:-left-10 bg-ink text-paper rounded-2xl px-6 py-5 shadow-warm max-w-[240px] z-10"
            data-testid="hero-principle-card"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ochre">Village principle</p>
            <p className="mt-2 font-display italic text-lg leading-snug">
              Give what you can. Receive what you need.
            </p>
          </motion.div>
        </div>
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        onClick={() => scrollToId("exchange")}
        data-testid="hero-scroll-cue"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-ink/50 hover:text-ink transition-colors"
        aria-label="Scroll to explore"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
