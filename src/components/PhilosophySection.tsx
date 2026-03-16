import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
};

const pillars = [
  {
    title: "Rigorous Diagnosis",
    description: "Evidence-based modern medicine with advanced diagnostics, ensuring every treatment plan is precise and personalized.",
  },
  {
    title: "Restorative Traditions",
    description: "Ayurveda, Naturopathy, and Yoga woven into clinical pathways — honouring Kerala's 3,000-year healing legacy.",
  },
  {
    title: "Holistic Recovery",
    description: "From physiotherapy to post-trauma care, recovery is designed as a complete experience — not an afterthought.",
  },
  {
    title: "A Place to Heal",
    description: "3-star stay facilities where patients recover in comfort, steps from Calicut's coast and cultural heart.",
  },
];

const PhilosophySection = () => {
  return (
    <section id="philosophy" className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-2xl mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
            Our Philosophy
          </p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            Where science meets <em className="text-display italic">the art of healing</em>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
              className="group bg-champagne/50 rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-soft"
            >
              <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">
                0{i + 1}
              </span>
              <h3 className="text-display text-2xl lg:text-3xl text-foreground mt-3 mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
