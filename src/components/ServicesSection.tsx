import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import { services, specializations, facilities } from "@/data/servicesData";

const ease = [0.4, 0, 0.2, 1] as const;

interface SectionHeaderProps {
  label: string;
  heading: React.ReactNode;
  subtitle: string;
  className?: string;
}

const SectionHeader = ({ label, heading, subtitle, className = "" }: SectionHeaderProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease }}
    className={`mb-16 max-w-3xl ${className}`}
  >
    <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] opacity-60">{label}</p>
    <h2 className="text-display mb-6 text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
      {heading}
    </h2>
    <p className="max-w-2xl text-sm leading-relaxed opacity-70 md:text-base">{subtitle}</p>
  </motion.div>
);

const ServicesSection = () => {
  const { t } = useTranslation();

  const servicesTranslated = t("services.items", { returnObjects: true }) as { name: string; description: string }[];
  const specsTranslated = t("specializations.items", { returnObjects: true }) as { name: string; description: string }[];
  const facilitiesTranslated = t("facilities.items", { returnObjects: true }) as { name: string; description: string }[];

  const localizedServices = services.map((s, i) => ({
    ...s,
    name: servicesTranslated[i]?.name ?? s.name,
    description: servicesTranslated[i]?.description ?? s.description,
  }));

  const localizedSpecs = specializations.map((s, i) => ({
    ...s,
    name: specsTranslated[i]?.name ?? s.name,
    description: specsTranslated[i]?.description ?? s.description,
  }));

  const localizedFacilities = facilities.map((s, i) => ({
    ...s,
    name: facilitiesTranslated[i]?.name ?? s.name,
    description: facilitiesTranslated[i]?.description ?? s.description,
  }));

  return (
    <section id="services" className="bg-primary py-32 text-primary-foreground lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <SectionHeader
          label={t("services.label")}
          heading={<>{t("services.heading")} <em className="text-display italic">{t("services.headingItalic")}</em></>}
          subtitle={t("services.subtitle")}
        />
        <AutoScrollCarousel items={localizedServices} speed={40} />

        <SectionHeader
          label={t("specializations.label")}
          heading={<>{t("specializations.heading")} <em className="text-display italic">{t("specializations.headingItalic")}</em></>}
          subtitle={t("specializations.subtitle")}
          className="mt-32"
        />
        <AutoScrollCarousel items={localizedSpecs} speed={35} />

        <SectionHeader
          label={t("facilities.label")}
          heading={<>{t("facilities.heading")} <em className="text-display italic">{t("facilities.headingItalic")}</em></>}
          subtitle={t("facilities.subtitle")}
          className="mt-32"
        />
        <AutoScrollCarousel items={localizedFacilities} speed={30} />
      </div>
    </section>
  );
};

export default ServicesSection;
