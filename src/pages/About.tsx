import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drFebina from "@/assets/dr-febina.webp";
import medicalStaffTeam from "@/assets/medical-staff-team-2.webp";
import medicalStaffTeam2 from "@/assets/medical-staff-team-3.webp";
import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/919207551177?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Febina%20Sulthana.";
const ease = [0.4, 0, 0.2, 1] as const;
const teamImages = [medicalStaffTeam, medicalStaffTeam2];

const TeamCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((i) => (i + 1) % teamImages.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-soft mb-6 aspect-[16/9]">
      {teamImages.map((src, i) => (
        <img key={i} src={src} alt="The clinical team at Hitech Medicity" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`} />
      ))}
    </div>
  );
};

const AboutPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease }} className="lg:sticky top-24">
              <div className="rounded-[2rem] overflow-hidden shadow-soft aspect-[3/4]">
                <img src={drFebina} alt={t("hero.doctorName")} className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.2 }}>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">{t("about.label")}</p>
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] mb-8">
                {t("about.name")} <em className="text-display italic">{t("about.nameItalic")}</em>
              </h1>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>{t("about.bio1")}</p>
                <p>{t("about.bio2")}</p>
                <p>{t("about.bio3")}</p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                {[
                  { label: t("about.credPhilosophy"), value: t("about.credPhilosophyVal") },
                  { label: t("about.credSpecialisation"), value: t("about.credSpecialisationVal") },
                  { label: t("about.credLocation"), value: t("about.credLocationVal") },
                  { label: t("about.credApproach"), value: t("about.credApproachVal") },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-1">{item.label}</p>
                    <p className="text-display text-lg text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="mt-24 pt-12 border-t border-foreground/5 text-center">
            <h2 className="text-display text-3xl md:text-4xl text-foreground mb-6">{t("about.visionTitle")}</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-3xl mx-auto">{t("about.visionText")}</p>
            <div className="rounded-2xl overflow-hidden shadow-soft mb-10 aspect-video">
              <iframe src="https://www.youtube-nocookie.com/embed/A2_KjoeuLX4" title="Hitech Medicity — A tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">{t("about.consultBtn")}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">{t("about.exploreBtn")}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease }} className="mt-24 pt-12 border-t border-foreground/5 text-center">
            <h2 className="text-display text-3xl md:text-4xl text-foreground mb-6">{t("about.teamTitle")}</h2>
            <TeamCarousel />
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">{t("about.teamText")}</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutPage;
