import { motion } from "framer-motion";
import calicutImg from "@/assets/calicut-coast.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

const CalicutSection = () => {
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
            <img src={calicutImg} alt="Calicut coastline at golden hour" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease, delay: 0.15 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">Heart of Calicut</p>
            <h2 className="text-display text-4xl md:text-5xl tracking-tight text-foreground leading-[1.1] mb-6">
              Heal where history <em className="text-display italic">meets the sea</em>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Calicut — the city of spices, trade, and timeless hospitality. A prosperous port city with roots stretching back millennia, where Zamorin kings once welcomed the world.</p>
              <p>Today, it's a vibrant blend of traditional Kerala architecture and modern energy. World-class cuisines — from Malabar biryani to fresh-caught seafood — sit alongside heritage temples, mosques, and colonial architecture.</p>
              <p>Steps from the beach, surrounded by local delights and cultural richness, Hitech Medicity is perfectly positioned for healing that extends beyond the clinical.</p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { stat: "3 min", label: "to the Beach" },
                { stat: "Rich", label: "Heritage & Culture" },
                { stat: "World", label: "Class Cuisine" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-display text-2xl text-foreground">{item.stat}</p>
                  <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Google Maps Embed - compact */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mt-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <div className="rounded-2xl overflow-hidden shadow-soft w-full md:w-1/2 aspect-[16/10]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.174!2d75.7873088!3d11.2741312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6597840bb9749%3A0x5c178bf99fa4deaf!2sHitech%20Medicity!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              title="Hitech Medicity Location"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-2">Find Us</p>
            <p className="text-display text-2xl text-foreground mb-2">Visit Hitech Medicity</p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-4">
              Located in the heart of Calicut, just minutes from the beach and easily accessible from the airport and railway station.
            </p>
            <a
              href="https://maps.app.goo.gl/uggRR6MxydQdSot97"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground hover:text-primary transition-colors underline underline-offset-4 font-medium"
            >
              Get Directions →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalicutSection;
