import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import stayPremiumDouble from "@/assets/stay-premium-double.jpg";
import stayDoubleBlue from "@/assets/stay-double-blue.jpg";
import staySingleRoom from "@/assets/stay-single-room.jpg";
import staySingleModern from "@/assets/stay-single-modern.jpg";
import stayBathroom from "@/assets/stay-bathroom.jpg";
import stayAccessibleBath from "@/assets/stay-accessible-bath.jpg";
import suitePrimaryImg from "@/assets/hitech-suite-1.jpg";
import suiteSecondaryImg from "@/assets/hitech-suite-2.jpg";
import suiteSingleImg from "@/assets/hitech-suite-single.jpg";
import suiteDoubleImg from "@/assets/hitech-suite-double.jpg";
import kitchenetteImg from "@/assets/hitech-suite-kitchenette.jpg";
import bathroomImg from "@/assets/hitech-suite-bathroom.jpg";
import accessibleBathImg from "@/assets/hitech-suite-accessible-bath.jpg";
import receptionWaiting from "@/assets/reception-waiting.jpg";
import cafe2 from "@/assets/cafe-2.jpg";

import physioRoom from "@/assets/physio-room.jpg";
import physioEquipment from "@/assets/physio-equipment.jpg";
import physioTreatment from "@/assets/physio-treatment.jpg";
import physioWide from "@/assets/physio-wide.jpg";
import physioWide2 from "@/assets/physio-wide-2.jpg";
import physioArthritis from "@/assets/physio-arthritis.jpg";
import physioHandTherapy from "@/assets/physio-hand-therapy.jpg";
import physioGaitBars from "@/assets/physio-gait-bars.jpg";
import physioBed from "@/assets/physio-bed.jpg";

import rooftopPlayWide from "@/assets/rooftop-play-wide.jpg";
import rooftopPlayCenter from "@/assets/rooftop-play-center.jpg";
import rooftopSandTrack from "@/assets/rooftop-sand-track.jpg";
import rooftopBridge from "@/assets/rooftop-bridge.jpg";
import rooftopLounge from "@/assets/rooftop-lounge.jpg";
import rooftopSeating from "@/assets/rooftop-seating.jpg";
import rooftopTreadmills from "@/assets/rooftop-treadmills.jpg";
import rooftopGym from "@/assets/rooftop-gym.jpg";

import aestheticImg from "@/assets/discipline-aesthetic.jpg";
import pharmacyImg from "@/assets/discipline-pharmacy.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

interface RoomCategory {
  label: string;
  description: string;
  images: { src: string; alt: string }[];
}

const roomCategories: RoomCategory[] = [
  {
    label: "Premium Suites",
    description: "Spacious double-occupancy rooms with designer interiors, ambient lighting, and attached amenities for extended recovery stays.",
    images: [
      { src: stayPremiumDouble, alt: "Premium double suite with green accent bedding" },
      { src: suitePrimaryImg, alt: "Premium patient suite at Hitech Medicity" },
      { src: suiteSecondaryImg, alt: "Suite living area" },
      { src: suiteDoubleImg, alt: "Double-bed premium stay room" },
    ],
  },
  {
    label: "Single Rooms",
    description: "Comfortable single-occupancy rooms with vanity, storage, and a private, restful atmosphere.",
    images: [
      { src: staySingleRoom, alt: "Single room with attached vanity" },
      { src: staySingleModern, alt: "Modern single room with wardrobe" },
      { src: suiteSingleImg, alt: "Single bed patient room" },
    ],
  },
  {
    label: "Bathrooms & Accessibility",
    description: "Thoughtfully designed washrooms with grab bars, spacious layouts, and safety-first fixtures for all patients.",
    images: [
      { src: stayBathroom, alt: "Premium bathroom with mosaic tile accent" },
      { src: stayAccessibleBath, alt: "Accessible bathroom with grab rails" },
      { src: bathroomImg, alt: "Bathroom interior" },
      { src: accessibleBathImg, alt: "Wheelchair-accessible bathroom" },
    ],
  },
  {
    label: "In-room Amenities",
    description: "Kitchenette access, utility spaces, and practical storage — everything for a comfortable extended stay.",
    images: [
      { src: kitchenetteImg, alt: "In-room kitchenette and utility area" },
    ],
  },
  {
    label: "Reception & Lounge",
    description: "Warm waiting spaces designed for comfort and privacy.",
    images: [
      { src: receptionWaiting, alt: "Reception lounge area" },
    ],
  },
  {
    label: "Healthy Café",
    description: "On-site café for fresh, recovery-friendly nourishment.",
    images: [
      { src: cafe2, alt: "In-house café" },
    ],
  },
  {
    label: "Physiotherapy & Gait Lab",
    description: "Comprehensive rehab with parallel bars, balance training, hand therapy, and advanced gait analysis.",
    images: [
      { src: physioEquipment, alt: "Physiotherapy equipment" },
      { src: physioRoom, alt: "Physiotherapy room" },
      { src: physioGaitBars, alt: "Gait training bars" },
      { src: physioWide, alt: "Wide view of physio facility" },
      { src: physioWide2, alt: "Physio facility overview" },
      { src: physioArthritis, alt: "Arthritis treatment area" },
      { src: physioHandTherapy, alt: "Hand therapy station" },
      { src: physioBed, alt: "Physiotherapy bed" },
      { src: physioTreatment, alt: "Treatment in progress" },
    ],
  },
  {
    label: "Rooftop Rehab & Play Therapy",
    description: "Open-air therapeutic play centre with sensory tracks, trampolines, and terrace fitness equipment.",
    images: [
      { src: rooftopPlayWide, alt: "Rooftop play therapy wide view" },
      { src: rooftopPlayCenter, alt: "Play therapy centre" },
      { src: rooftopSandTrack, alt: "Sensory sand track" },
      { src: rooftopBridge, alt: "Therapy bridge" },
      { src: rooftopLounge, alt: "Rooftop lounge area" },
      { src: rooftopSeating, alt: "Rooftop seating" },
      { src: rooftopTreadmills, alt: "Rooftop treadmills" },
      { src: rooftopGym, alt: "Rooftop gym equipment" },
    ],
  },
  {
    label: "Aesthetic & Hair Clinic",
    description: "Dedicated beauty, grooming, and cosmetic care space.",
    images: [
      { src: aestheticImg, alt: "Aesthetic and hair treatment studio" },
    ],
  },
  {
    label: "In-house Pharmacy",
    description: "Integrated medicine and wellness products under one roof.",
    images: [
      { src: pharmacyImg, alt: "In-house pharmacy" },
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

        {/* Navigation arrows */}
        {hasMultiple && (
          <>
            <button
              onClick={() => setActiveIdx((p) => (p - 1 + category.images.length) % category.images.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={() => setActiveIdx((p) => (p + 1) % category.images.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Dots */}
        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {category.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIdx ? "bg-white w-4" : "bg-white/40"
                }`}
                aria-label={`View image ${i + 1}`}
              />
            ))}
          </div>
        )}

        {/* Counter */}
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
            Every room is designed around patient comfort — premium interiors, accessible amenities, and a home-like environment for long and short stays.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {roomCategories.map((category, i) => (
            <RoomCategoryCard key={category.label} category={category} index={i} />
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
