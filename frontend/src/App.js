import { useEffect, Component } from "react";
import "@/App.css";
import "@/index.css";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Exchange from "@/components/Exchange";
import Services from "@/components/Services";
import FounderLetter from "@/components/FounderLetter";
import Safety from "@/components/Safety";
import Sponsors from "@/components/Sponsors";
import Transformation from "@/components/Transformation";
import Vision from "@/components/Vision";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-paper">
          <p className="font-display text-2xl text-ink">Something went wrong. Please refresh.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    window.__lenis = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="bg-paper text-ink">
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Exchange />
            <Services />
            <FounderLetter />
            <Safety />
            <Sponsors />
            <Transformation />
            <Vision />
            <Waitlist />
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
