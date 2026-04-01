import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import stayPremiumDouble from "@/assets/stay-premium-double.webp";
import staySingleRoom from "@/assets/stay-single-room.webp";
import staySingleModern from "@/assets/stay-single-modern.webp";
import stayBathroom from "@/assets/stay-bathroom.webp";
import stayAccessibleBath from "@/assets/stay-accessible-bath.webp";
import suitePrimaryImg from "@/assets/hitech-suite-1.webp";
import suiteSecondaryImg from "@/assets/hitech-suite-2.webp";
import suiteDoubleImg from "@/assets/hitech-suite-double.webp";
import kitchenetteImg from "@/assets/hitech-suite-kitchenette.webp";
import receptionWaiting from "@/assets/reception-waiting.webp";
import cafe2 from "@/assets/cafe-2.webp";

const ease = [0.4, 0, 0.2, 1] as const;

interface RoomCategory {
  label: string;
  description: string;
  images: { src: string; alt: string }[];
}

const roomCategoriesData: { images: { src: string; alt: string }[] }[] = [
  {
    images: [
      { src: stayPremiumDouble, alt: "Premium double suite" },
      { src: suitePrimaryImg, alt: "Premium patient suite" },
      { src: suiteSecondaryImg, alt: "Suite living area" },
      { src: suiteDoubleImg, alt: "Double-bed premium stay room" },
    ],
  },
  {
    images: [
      { src: staySingleRoom, alt: "Single room with attached vanity" },
      { src: staySingleModern, alt: "Modern single room with wardrobe" },
    ],
  },
  {
    images: [
      { src: stayBathroom, alt: "Premium bathroom" },
      { src: stayAccessibleBath, alt: "Accessible bathroom with grab rails" },
    ],
  },
  {
    images: [
      { src: kitchenetteImg, alt: "In-room kitchenette" },
    ],
  },
  {
    images: [
      { src: receptionWaiting, alt: "Reception lounge area" },
    ],
  },
  {
    images: [
      { src: cafe2, alt: "In-house café" },
    ],
  },
];

const RoomCategoryCard = ({ category, index }: { category: RoomCategory; index: number }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const hasMultiple = category.images.length > 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease, delay: index * 0.08 }}
      className="group"
    >
      <div className="rounded-3xl overflow-hidden shadow-soft relative aspect-[4/3]">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIdx}
            src={category.images[activeIdx].src}
            alt={category.images[activeIdx].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-cover absolute inset-0"
            loading="lazy"
          />
        </AnimatePresence>

        {hasMultiple && (
          <>
            <button
              onClick={() => setActiveIdx((p) => (p - 1 + category.images.length) % category.images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >‹</button>
            <button
              onClick={() => setActiveIdx((p) => (p + 1) % category.images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >›</button>
          </>
        )}

        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {category.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === activeIdx ? "bg-white w-4" : "bg-white/40"}`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {hasMultiple && (
          <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
            {activeIdx + 1}/{category.images.length}
          </div>
        )}
      </div>

      <div className="mt-5">
        <h3 className="text-display text-xl text-foreground mb-2">{category.label}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{category.description}</p>
      </div>
    </motion.div>
  );
};

const FacilitySection = () => {
  const { t } = useTranslation();
  const categories = t("stay.categories", { returnObjects: true }) as { label: string; description: string }[];

  const roomCategories: RoomCategory[] = categories.map((cat, i) => ({
    label: cat.label,
    description: cat.description,
    images: roomCategoriesData[i]?.images ?? [],
  }));

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
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">{t("stay.label")}</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1]">
            {t("stay.heading")} <em className="text-display italic">{t("stay.headingItalic")}</em>
          </h2>
          <p className="text-muted-foreground leading-relaxed mt-6 text-lg">{t("stay.subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {roomCategories.map((category, i) => (
            <RoomCategoryCard key={i} category={category} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-6 text-center">
            {t("stay.virtualTour")}
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
          <p className="text-sm text-muted-foreground mt-4 text-center">{t("stay.virtualTourDesc")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitySection;
