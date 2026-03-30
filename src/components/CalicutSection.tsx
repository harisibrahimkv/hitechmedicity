import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import calicutImg from "@/assets/calicut-coast.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

const CalicutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="calicut" className="py-32 lg:py-40 bg-champagne">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3]"
          >
            <img src={calicutImg} alt="Calicut coastline" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">{t("calicut.label")}</p>
            <h2 className="text-display text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              {t("calicut.heading")} <em className="text-display italic">{t("calicut.headingItalic")}</em>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("calicut.p1")}</p>
              <p>{t("calicut.p2")}</p>
              <p>{t("calicut.p3")}</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { stat: t("calicut.stat1"), label: t("calicut.stat1Label") },
                { stat: t("calicut.stat2"), label: t("calicut.stat2Label") },
                { stat: t("calicut.stat3"), label: t("calicut.stat3Label") },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-display text-2xl text-foreground">{item.stat}</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="rounded-2xl overflow-hidden shadow-soft w-full md:w-1/2 aspect-[16/10]">
            <iframe
              src="https://maps.google.com/maps?q=Hitech+Medicity+Physiotherapy+Rehabilitation+Centre+Calicut&t=&z=16&ie=UTF8&iwloc=&output=embed"
              title="Hitech Medicity Location"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center md:text-left rtl:md:text-right">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-2">{t("calicut.findUs")}</p>
            <p className="text-display text-2xl text-foreground mb-2">{t("calicut.visitTitle")}</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-4">{t("calicut.visitDesc")}</p>
            <a
              href="https://maps.app.goo.gl/2836LqwG81s7X4yk6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary transition-colors underline underline-offset-4 font-medium"
            >
              {t("calicut.getDirections")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalicutSection;
