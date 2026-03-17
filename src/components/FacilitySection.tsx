import { motion } from "framer-motion";
import suitePrimaryImg from "@/assets/hitech-suite-1.jpg";
import suiteSecondaryImg from "@/assets/hitech-suite-2.jpg";
import suiteSingleImg from "@/assets/hitech-suite-single.jpg";
import suiteDoubleImg from "@/assets/hitech-suite-double.jpg";
import kitchenetteImg from "@/assets/hitech-suite-kitchenette.jpg";
import bathroomImg from "@/assets/hitech-suite-bathroom.jpg";
import accessibleBathImg from "@/assets/hitech-suite-accessible-bath.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

const stayHighlights = [
  {
    image: suitePrimaryImg,
    alt: "Premium patient suite at Hitech Medicity",
    className: "lg:col-span-2 lg:row-span-2 aspect-[16/10] lg:aspect-auto",
  },
  {
    image: suiteSecondaryImg,
    alt: "Modern patient suite interior with connected living area",
    className: "aspect-[4/3]",
  },
  {
    image: suiteSingleImg,
    alt: "Single-bed stay room with attached vanity",
    className: "aspect-[4/3]",
  },
  {
    image: suiteDoubleImg,
    alt: "Double-bed premium stay room",
    className: "aspect-[4/3]",
  },
  {
    image: kitchenetteImg,
    alt: "In-room kitchenette and utility area",
    className: "aspect-[4/3]",
  },
  {
    image: bathroomImg,
    alt: "Premium room bathroom interior",
    className: "aspect-[4/3]",
  },
  {
    image: accessibleBathImg,
    alt: "Accessible bathroom designed for patient safety",
    className: "aspect-[4/3]",
  },
];

const FacilitySection = () => {
  return (
    <section id="facility" className="py-32 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="max-w-3xl mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">The Stay</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            Recovery, <em className="text-display italic">redefined</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-6 text-lg">
            Real room photos from Hitech Medicity: premium suites, attached amenities, and patient-friendly design for long and short stays.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
          {stayHighlights.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease, delay: i * 0.05 }}
              className={`rounded-3xl overflow-hidden shadow-soft ${item.className}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { label: "Premium Suites", detail: "Single and double occupancy rooms with quality interiors" },
            { label: "In-room Convenience", detail: "Kitchenette access, vanity spaces, and practical storage" },
            { label: "Patient Safety", detail: "Accessible washrooms and recovery-first room planning" },
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

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mt-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 text-center">
            360° Virtual Tour
          </p>
          <div className="rounded-3xl overflow-hidden shadow-soft aspect-video">
            <iframe
              src="https://cybozom.com/360/hitechmedicity/"
              title="Hitech Medicity 360° Virtual Tour"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Explore every corner of our facility — drag to look around
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitySection;
