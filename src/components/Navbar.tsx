import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-tree.png";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Hitech%20Medicity.";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-foreground/5">
      <nav className="container mx-auto flex items-center justify-between h-16 px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="Hitech Medicity" className="h-10 w-10 object-contain" />
          <div className="flex flex-col">
            <span className="text-display text-xl tracking-tight text-foreground leading-tight">
              Hitech Medicity
            </span>
            <span className="text-[10px] tracking-[0.08em] text-muted-foreground italic leading-tight">
              Care is ours, Cure is divine
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#philosophy" onClick={(e) => scrollTo(e, "philosophy")} className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">Philosophy</a>
          <a href="#services" onClick={(e) => scrollTo(e, "services")} className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">Services</a>
          <a href="#facility" onClick={(e) => scrollTo(e, "facility")} className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">The Stay</a>
          <a href="#calicut" onClick={(e) => scrollTo(e, "calicut")} className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">Calicut</a>
          <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase">Dr. Febina</Link>
        </div>

        <div className="hidden md:block">
          <Button variant="hero" size="lg" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Book Consultation
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-foreground/5 px-6 pb-6 pt-2 space-y-4">
          <a href="#philosophy" onClick={(e) => scrollTo(e, "philosophy")} className="block text-sm text-muted-foreground uppercase tracking-wide">Philosophy</a>
          <a href="#services" onClick={(e) => scrollTo(e, "services")} className="block text-sm text-muted-foreground uppercase tracking-wide">Services</a>
          <a href="#facility" onClick={(e) => scrollTo(e, "facility")} className="block text-sm text-muted-foreground uppercase tracking-wide">The Stay</a>
          <a href="#calicut" onClick={(e) => scrollTo(e, "calicut")} className="block text-sm text-muted-foreground uppercase tracking-wide">Calicut</a>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground uppercase tracking-wide">Dr. Febina</Link>
          <Button variant="hero" size="lg" className="w-full" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Book Consultation
            </a>
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
