import { Instagram, Heart, Baby, Flower2, Weight } from "lucide-react";
import { useTranslation } from "react-i18next";
import mamaCareImg from "@/assets/mama-care-hero.jpg";

const MamaCareSection = () => {
  const { t } = useTranslation();

  const offerings = t("mamaCare.offerings", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const icons = [Baby, Heart, Flower2, Weight];

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="rounded-3xl border border-primary/10 bg-primary/[0.03] overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative overflow-hidden bg-foreground/5 flex items-center justify-center p-8 md:p-12">
              <img
                src={mamaCareImg}
                alt="Mama Care — prenatal and postnatal care"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full max-w-sm rounded-2xl object-cover"
              />
            </div>

            {/* Content side */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                  {t("mamaCare.label")}
                </p>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-2">
                {t("mamaCare.heading")}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("mamaCare.subtitle")}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {offerings.map((item, i) => {
                  const Icon = icons[i] || Heart;
                  return (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-primary/70" />
                        <span className="text-sm font-medium text-foreground">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <a
                href="https://www.instagram.com/hitechmamacare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              >
                <Instagram className="h-5 w-5" />
                {t("mamaCare.followInstagram")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MamaCareSection;
