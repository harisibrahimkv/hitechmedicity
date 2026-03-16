import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Hitech%20Medicity.";

const ease = [0.4, 0, 0.2, 1] as const;

const CTASection = () => {
  return (
    <section className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="bg-primary text-primary-foreground rounded-[2rem] p-12 md:p-16 lg:p-24 text-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-medium mb-6 opacity-60">Begin Your Journey</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6 max-w-3xl mx-auto">
            Your health deserves <em className="text-display italic">rigorous care</em>
          </h2>
          <p className="text-lg opacity-70 max-w-xl mx-auto mb-10 leading-relaxed">
            Connect with Dr. Febina Sulthana's team to discuss your treatment plan and explore our facility.
          </p>
          <Button
            size="lg"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full px-10 text-base hover:-translate-y-0.5 transition-all duration-250"
            asChild
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">Book via WhatsApp</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
