import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { label: "The Exchange", id: "exchange" },
  { label: "Services", id: "services" },
  { label: "Our Story", id: "story" },
  { label: "Safety", id: "safety" },
  { label: "For Business", id: "business" },
  { label: "Vision", id: "vision" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 50 : 0);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-xl border-b border-ink/10" : "bg-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <button onClick={() => go("top")} data-testid="navbar-logo-button" aria-label="Back to top">
          <Logo />
        </button>
        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`navbar-link-${l.id}`}
              className="link-underline text-sm text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => go("join")}
            data-testid="navbar-join-button"
            className="hidden sm:inline-flex items-center rounded-full bg-terra hover:bg-terra-dark text-paper text-sm font-medium px-5 py-2.5 transition-all duration-200 active:scale-[0.97]"
          >
            Join the Village
          </button>
          <button
            className="lg:hidden p-2"
            onClick={() => setOpen(!open)}
            data-testid="navbar-mobile-toggle"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-paper border-b border-ink/10 px-5 pb-6 pt-2" data-testid="navbar-mobile-menu">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              data-testid={`navbar-mobile-link-${l.id}`}
              className="block w-full text-left py-3 border-b border-ink/5 text-ink/80"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("join")}
            data-testid="navbar-mobile-join-button"
            className="mt-4 w-full rounded-full bg-terra text-paper font-medium py-3"
          >
            Join the Village
          </button>
        </div>
      )}
    </header>
  );
}
