import { Globe, Instagram, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";

const MediaCoverageSection = () => {
  const { t } = useTranslation();

  return (
    <section id="media" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-4">{t("media.label")}</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">{t("media.heading")}</h2>
        </div>

        <div className="rounded-3xl border border-primary/10 bg-primary/[0.03] overflow-hidden mb-12">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative overflow-hidden bg-foreground/5">
              <video src="/videos/mona_iraqi.mp4" controls preload="metadata" className="w-full h-full object-cover" />
            </div>
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{t("media.featuredVisit")}</p>
              </div>
              <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">{t("media.monaName")}</h3>
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">{t("media.monaTitle")}</p>
              <p className="text-foreground/80 leading-relaxed mb-6">{t("media.monaDesc")}</p>
              <a href="https://www.youtube.com/@HitechMedicity" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium">
                <Youtube className="h-5 w-5" />
                {t("media.watchReport")}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium mb-6">{t("media.watchReel")}</p>
          <div className="w-full max-w-md rounded-3xl overflow-hidden border border-primary/10 bg-primary/[0.03] shadow-lg">
            <video src="/videos/mona_reel.mp4" controls preload="metadata" className="w-full" />
          </div>
          <a href="https://www.instagram.com/hitechmedicity_calicut" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-4 text-primary hover:text-primary/80 transition-colors font-medium">
            <Instagram className="h-5 w-5" />
            {t("media.viewInstagram")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverageSection;
