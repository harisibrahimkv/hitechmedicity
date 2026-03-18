import { motion } from "framer-motion";
import { useRef, useState } from "react";

const ease = [0.4, 0, 0.2, 1] as const;

const pillars = [
  { title: "Rigorous Diagnosis", description: "Evidence-based modern medicine with advanced diagnostics, ensuring every treatment plan is precise and personalized." },
  { title: "Restorative Traditions", description: "Ayurveda, Naturopathy, and Yoga woven into clinical pathways — honouring Kerala's 3,000-year healing legacy." },
  { title: "Holistic Recovery", description: "From physiotherapy to post-trauma care, recovery is designed as a complete experience — not an afterthought." },
  { title: "A Place to Heal", description: "3-star stay facilities where patients recover in comfort, steps from Calicut's coast and cultural heart." },
];

interface PhilosophySectionProps {
  videoSrc?: string;
}

const PhilosophySection = ({ videoSrc }: PhilosophySectionProps) => {
  return (
    <section id="philosophy" className="relative py-32 lg:py-40 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="mb-12"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Our Philosophy</p>
              <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
                Where science meets <em className="text-display italic">the art of healing</em>
              </h2>
            </motion.div>

            <div className="grid gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease, delay: i * 0.1 }}
                  className="group bg-champagne/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-accent hover:scale-[1.02] hover:shadow-soft"
                >
                  <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">0{i + 1}</span>
                  <h3 className="text-display text-xl lg:text-2xl text-foreground mt-2 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: video player */}
          {videoSrc && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="sticky top-24 rounded-3xl overflow-hidden shadow-soft"
            >
              <video
                src={videoSrc}
                controls
                playsInline
                className="w-full h-auto aspect-[9/16] object-cover bg-foreground/5"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
