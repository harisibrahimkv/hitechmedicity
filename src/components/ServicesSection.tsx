import { motion } from "framer-motion";

const ease = [0.4, 0, 0.2, 1] as const;

const services = [
  { name: "Ayurveda", description: "Ancient Keralan protocols refined for modern recovery" },
  { name: "Yoga & Naturopathy", description: "Mind-body alignment through guided practice" },
  { name: "Physiotherapy", description: "Advanced rehabilitation and movement restoration" },
  { name: "Aesthetic & Hair Clinic", description: "Precision cosmetic and trichology treatments" },
  { name: "Hijama Therapy", description: "Traditional cupping for detoxification and healing" },
  { name: "Ozone Therapy", description: "Cellular regeneration through medical ozone" },
  { name: "Osteopathy", description: "Structural alignment through manual medicine" },
  { name: "Chiropractic Adjustment", description: "Spinal health and neuromusculoskeletal care" },
  { name: "Acupuncture", description: "Meridian-based pain relief and wellness restoration" },
  { name: "Post Trauma Care", description: "Comprehensive recovery from injury and surgery" },
  { name: "Geriatric Care", description: "Dignified, specialised elder health management" },
  { name: "Multiple Sclerosis", description: "Integrated neurological management and support" },
  { name: "Alzheimer's Clinic", description: "Compassionate cognitive decline care pathways" },
  { name: "Parkinson's Clinic", description: "Movement disorder expertise and rehabilitation" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4 opacity-60">Our Disciplines</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
            An integrated spectrum <em className="text-display italic">of care</em>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-primary-foreground/10 rounded-3xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="bg-primary p-8 lg:p-10 group hover:bg-primary-foreground/5 transition-colors duration-300"
            >
              <h3 className="text-display text-xl lg:text-2xl mb-2">{service.name}</h3>
              <p className="text-sm leading-relaxed opacity-60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
