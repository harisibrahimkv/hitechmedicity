import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import drFebina from "@/assets/dr-febina.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const WHATSAPP_LINK = "https://wa.me/919207551177?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Hitech%20Medicity.";

const ease = [0.4, 0, 0.2, 1] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease },
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <motion.p {...fadeInUp} className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6">
              Calicut, Kerala
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
              className="text-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1.1] mb-6"
            >
              Care is ours.{" "}
              <em className="text-display italic">Cure is divine.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              className="text-lg leading-relaxed text-muted-foreground max-w-lg mb-10"
            >
              Led by Dr. Febina Sulthana, Hitech Medicity blends advanced clinical
              precision with the restorative heritage of Kerala's coast.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Book a Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#philosophy">Our Philosophy</a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[480px] lg:w-[420px] lg:h-[540px] rounded-[2rem] overflow-hidden shadow-soft">
                <img
                  src={drFebina}
                  alt="Dr. Febina Sulthana at Hitech Medicity"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-background shadow-soft rounded-2xl px-5 py-3">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium">Led by</p>
                <p className="text-display text-lg text-foreground">Dr. Febina Sulthana</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
