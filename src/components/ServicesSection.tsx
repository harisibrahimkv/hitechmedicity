import { motion } from "framer-motion";
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
  return (
    <section id="services" className="bg-primary py-32 text-primary-foreground lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Our Services */}
        <SectionHeader
          label="Our Services"
          heading={<>Every discipline, <em className="text-display italic">under one roof</em></>}
          subtitle="From modern medicine and Ayurveda to physiotherapy and dental care — a comprehensive range of treatments, designed around you."
        />
        <AutoScrollCarousel items={services} speed={40} />

        {/* Specializations */}
        <SectionHeader
          label="Specializations"
          heading={<>What we <em className="text-display italic">focus on</em></>}
          subtitle="Dedicated clinics and rehabilitation programmes for specific conditions — each backed by expert teams and proven protocols."
          className="mt-32"
        />
        <AutoScrollCarousel items={specializations} speed={35} />

        {/* Our Facilities */}
        <SectionHeader
          label="Our Facilities"
          heading={<>Every facility, <em className="text-display italic">purposefully built</em></>}
          subtitle="Purpose-built spaces equipped for advanced rehabilitation, therapy, and patient care."
          className="mt-32"
        />
        <AutoScrollCarousel items={facilities} speed={30} />
      </div>
    </section>
  );
};

export default ServicesSection;
