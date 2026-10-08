const ITEMS = [
  "Give what you can",
  "Receive what you need",
  "Nobody has to do it alone",
  "It takes a village",
  "Reciprocal dignity",
  "Vetted neighbors",
  "Zero stigma",
];

export default function Marquee() {
  return (
    <section className="bg-ink text-paper py-5 overflow-hidden border-y border-ink" data-testid="editorial-marquee">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0" aria-hidden={copy === 1}>
            {ITEMS.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center shrink-0">
                <span className="font-display italic text-xl sm:text-2xl px-6 whitespace-nowrap">{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-ochre shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
