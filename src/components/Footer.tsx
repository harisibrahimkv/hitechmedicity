import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-foreground/5 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-display text-2xl text-foreground mb-1">Hitech Medicity</p>
            <p className="text-display italic text-sm text-foreground/60 mb-3">Care is ours, Cure is divine</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Science-led healing in the heart of Calicut, Kerala. Led by Dr. Febina Sulthana.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">Navigate</p>
            <div className="space-y-2">
              <a href="#philosophy" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Philosophy</a>
              <a href="#services" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Services</a>
              <a href="#facility" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">The Stay</a>
              <a href="#calicut" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Calicut</a>
              <Link to="/about" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">Dr. Febina Sulthana</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">Contact</p>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>Calicut, Kerala, India</p>
              <p>info@hitechmedicity.com</p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">
                WhatsApp: +91 98765 43210
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-foreground/5 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hitech Medicity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
