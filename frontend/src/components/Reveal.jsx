import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export const Eyebrow = ({ children, light = false }) => (
  <p
    className={`font-mono text-xs uppercase tracking-[0.24em] ${
      light ? "text-ochre" : "text-terra"
    }`}
    data-testid="section-eyebrow"
  >
    {children}
  </p>
);

export const SectionHead = ({ eyebrow, title, sub, light = false }) => (
  <Reveal className="max-w-3xl">
    <Eyebrow light={light}>{eyebrow}</Eyebrow>
    <h2
      className={`mt-5 font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight ${
        light ? "text-paper" : "text-ink"
      }`}
    >
      {title}
    </h2>
    {sub ? (
      <p className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? "text-paper/70" : "text-[#5A5C50]"}`}>
        {sub}
      </p>
    ) : null}
  </Reveal>
);
