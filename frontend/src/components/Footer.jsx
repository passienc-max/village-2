import Logo from "@/components/Logo";
import { Reveal } from "@/components/Reveal";
import { scrollToId } from "@/lib/scroll";

const NAV = [
  { label: "The Exchange", id: "exchange" },
  { label: "Services", id: "services" },
  { label: "Our Story", id: "story" },
  { label: "Safety", id: "safety" },
  { label: "For Business", id: "business" },
  { label: "Vision", id: "vision" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-24 pb-10 overflow-hidden" data-testid="footer">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display tracking-tight leading-[0.95] text-[13vw] lg:text-[7.5rem] uppercase" data-testid="footer-headline">
            Nobody has to
            <br />
            <em className="italic outline-text">do it alone.</em>
          </h2>
        </Reveal>

        <div className="mt-16 pt-10 border-t border-paper/10 grid sm:grid-cols-3 gap-10">
          <div>
            <Logo dark />
            <p className="mt-4 text-sm leading-relaxed text-paper/60 max-w-xs">
              It takes a village. Give what you can. Receive what you need.
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ochre">Explore</p>
            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToId(l.id)}
                  data-testid={`footer-link-${l.id}`}
                  className="link-underline text-sm text-paper/70 hover:text-paper text-left w-fit transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ochre">The charter</p>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              The parent who needs help should not be the primary source of profit. The ecosystem is
              funded by businesses, sponsors, institutions, and grants.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-paper/10 flex flex-col sm:flex-row justify-between gap-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/40" data-testid="footer-copyright">
            © {new Date().getFullYear()} The Village — founded by Christina
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/40">
            Early-stage concept · Built with love
          </p>
        </div>
      </div>
    </footer>
  );
}
