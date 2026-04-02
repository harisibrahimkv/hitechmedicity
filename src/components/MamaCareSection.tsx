import { Instagram, Heart, Baby, Flower2, Weight } from "lucide-react";
import { useTranslation } from "react-i18next";
import mamaCareImg from "@/assets/mama-care-hero.webp";
import mamaCareLogoImg from "@/assets/mamacare-logo.jpg";

const MamaCareSection = () => {
  const { t } = useTranslation();

  const offerings = t("mamaCare.offerings", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  const icons = [Baby, Heart, Flower2, Weight];

  return (
    <section className="py-24 md:py-32 bg-[hsl(330_100%_45%)]">
      <div className="container mx-auto px-6 md:px-8 max-w-6xl">
        <div className="rounded-3xl bg-white/10 backdrop-blur-sm overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image side */}
            <div className="relative overflow-hidden bg-white/5 flex items-center justify-center p-8 md:p-12">
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
              <div className="mb-6">
                <img src={mamaCareLogoImg} alt="Hitech Medicity Mama Care" className="h-16 md:h-20 w-auto" />
              </div>

              <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-2 text-white">
                {t("mamaCare.heading")}
              </h2>
              <p className="text-white/75 leading-relaxed mb-8">
                {t("mamaCare.subtitle")}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {offerings.map((item, i) => {
                  const Icon = icons[i] || Heart;
                  return (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-white/80" />
                        <span className="text-sm font-medium text-white">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-xs text-white/65 leading-relaxed">
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
                className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors font-medium"
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
