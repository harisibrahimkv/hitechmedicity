import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import VirtualTourModal from "@/components/VirtualTourModal";
import facilityImg from "@/assets/facility-interior.jpg";
import recoveryImg from "@/assets/recovery-room.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

const FacilitySection = () => {
  return (
    <section id="facility" className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">The Stay</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            Recovery, <em className="text-display italic">redefined</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-6 text-lg">
            Our 3-star stay facilities transform the healing journey. Premium rooms, attentive
            hospitality, and a restorative environment — so recovery feels like a retreat.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3]"
          >
            <img src={facilityImg} alt="Hitech Medicity modern facility interior" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
            className="rounded-3xl overflow-hidden shadow-soft aspect-[4/3]"
          >
            <img src={recoveryImg} alt="Premium recovery room at Hitech Medicity" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { label: "Premium Rooms", detail: "Spacious, hotel-grade suites with attentive care" },
            { label: "In-house Kitchen", detail: "Nutritionist-designed Kerala cuisine for recovery" },
            { label: "24/7 Support", detail: "Round-the-clock medical and concierge assistance" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease, delay: 0.1 * i }}
              className="bg-champagne/50 rounded-3xl p-8"
            >
              <h3 className="text-display text-xl text-foreground mb-2">{item.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
