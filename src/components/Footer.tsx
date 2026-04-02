import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-foreground/5 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-display text-2xl text-foreground mb-1">{t("brand")}</p>
            <p className="text-display italic text-sm text-foreground/60 mb-3">{t("tagline")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{t("footer.description")}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">{t("footer.navigate")}</p>
            <div className="space-y-2">
              <a href="#philosophy" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">{t("nav.philosophy")}</a>
              <a href="#services" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">{t("nav.services")}</a>
              <a href="#facility" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">{t("nav.theStay")}</a>
              <a href="#calicut" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">{t("nav.calicut")}</a>
              <Link to="/about" className="block text-sm text-foreground/70 hover:text-foreground transition-colors">{t("hero.doctorName")}</Link>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-4">{t("footer.contact")}</p>
            <div className="space-y-2 text-sm text-foreground/70" dir="ltr">
              <p>Arayidathupalam, Mavoor Road,<br />Calicut, Kerala - 673004, India</p>
              <p>info@hitechmedicity.com · www.hitechmedicity.com</p>
              <p>+91 9207 559 977, +91 9207 551 177</p>
              <a href="https://wa.me/919207551177" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">
                WhatsApp: +91 9207 551 177
              </a>
              <div className="flex gap-4 pt-2">
                <a href="https://www.instagram.com/hitechmedicity_calicut" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
                <a href="https://www.youtube.com/@HitechMedicity" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">YouTube</a>
                <a href="https://www.facebook.com/profile.php?id=61555609833793" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-foreground/5 text-center">
          <p className="text-xs text-muted-foreground">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
