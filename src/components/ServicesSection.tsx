import { useState } from "react";
import { motion } from "framer-motion";
import { Images } from "lucide-react";
import GalleryModal from "@/components/GalleryModal";

// Physiotherapy & Gait Lab
import physioRoom from "@/assets/physio-room.jpg";
import physioEquipment from "@/assets/physio-equipment.jpg";
import physioTreatment from "@/assets/physio-treatment.jpg";
import physioWide from "@/assets/physio-wide.jpg";
import physioWide2 from "@/assets/physio-wide-2.jpg";
import physioArthritis from "@/assets/physio-arthritis.jpg";
import physioHandTherapy from "@/assets/physio-hand-therapy.jpg";
import physioGaitBars from "@/assets/physio-gait-bars.jpg";
import physioBed from "@/assets/physio-bed.jpg";

// Ayurveda
import ayurvedaRoom1 from "@/assets/ayurveda-room-1.jpg";
import ayurvedaRoom2 from "@/assets/ayurveda-room-2.jpg";
import ayurvedaRoom3 from "@/assets/ayurveda-room-3.jpg";
import ayurvedaRoom4 from "@/assets/ayurveda-room-4.jpg";
import ayurvedaSupplies from "@/assets/ayurveda-supplies.jpg";
import ayurvedaSupplies2 from "@/assets/ayurveda-supplies-2.jpg";
import spaMassage from "@/assets/spa-massage.jpg";

// Dental
import dentalImg from "@/assets/discipline-dental.jpg";

// Aesthetic & Salon
import salonStudio from "@/assets/salon-studio.jpg";

// Pharmacy
import pharmacyImg from "@/assets/discipline-pharmacy.jpg";

// Consultation
import consultationImg from "@/assets/discipline-consultation.jpg";

// Reception
import receptionWaiting from "@/assets/reception-waiting.jpg";

// Team
import teamImg from "@/assets/discipline-team.jpg";
import teamImg2 from "@/assets/medical-staff-team-2.jpg";

// Café
import cafe2 from "@/assets/cafe-2.jpg";

// Rooftop Rehab & Play Therapy
import rooftopPlayWide from "@/assets/rooftop-play-wide.jpg";
import rooftopPlayCenter from "@/assets/rooftop-play-center.jpg";
import rooftopSandTrack from "@/assets/rooftop-sand-track.jpg";
import rooftopBridge from "@/assets/rooftop-bridge.jpg";
import rooftopLounge from "@/assets/rooftop-lounge.jpg";
import rooftopSeating from "@/assets/rooftop-seating.jpg";
import rooftopTreadmills from "@/assets/rooftop-treadmills.jpg";
import rooftopGym from "@/assets/rooftop-gym.jpg";

// Exterior
import exteriorImg from "@/assets/discipline-exterior.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

interface Discipline {
  name: string;
  description: string;
  images: string[];
  alt: string;
}

const disciplines: Discipline[] = [
  {
    name: "Physiotherapy & Gait Lab",
    description: "Comprehensive rehab with parallel bars, balance training, hand therapy, and advanced gait analysis.",
    images: [physioEquipment, physioRoom, physioGaitBars, physioWide, physioWide2, physioArthritis, physioHandTherapy, physioBed, physioTreatment],
    alt: "Physiotherapy and gait training at Hitech Medicity",
  },
  {
    name: "Rooftop Rehab & Play Therapy",
    description: "Open-air therapeutic play centre with sensory tracks, trampolines, and terrace fitness equipment.",
    images: [rooftopPlayWide, rooftopPlayCenter, rooftopSandTrack, rooftopBridge, rooftopLounge, rooftopSeating, rooftopTreadmills, rooftopGym],
    alt: "Rooftop rehabilitation and play therapy area",
  },
  {
    name: "Ayurveda, Spa & Wellness",
    description: "Traditional Ayurvedic therapies, Panchakarma, and dedicated massage suites for holistic recovery.",
    images: [ayurvedaRoom1, ayurvedaRoom3, ayurvedaRoom4, ayurvedaRoom2, spaMassage, ayurvedaSupplies, ayurvedaSupplies2],
    alt: "Ayurveda and spa treatments at Hitech Medicity",
  },
  {
    name: "Dental Clinic",
    description: "Comprehensive dental care with modern chair-side equipment.",
    images: [dentalImg],
    alt: "Dental treatment room",
  },
  {
    name: "Aesthetic & Hair Studio",
    description: "Dedicated beauty, grooming, and cosmetic care space.",
    images: [salonStudio],
    alt: "Aesthetic and hair treatment studio",
  },
  {
    name: "In-house Pharmacy",
    description: "Integrated medicine and wellness products under one roof.",
    images: [pharmacyImg],
    alt: "In-house pharmacy",
  },
  {
    name: "Doctor Consultation",
    description: "Patient-centred consultations with family-focused care.",
    images: [consultationImg],
    alt: "Doctor consultation with patient",
  },
  {
    name: "Reception & Lounge",
    description: "Warm waiting spaces designed for comfort and privacy.",
    images: [receptionWaiting],
    alt: "Reception lounge area",
  },
  {
    name: "Healthy Café",
    description: "On-site café for fresh, recovery-friendly nourishment.",
    images: [cafe2],
    alt: "In-house café",
  },
  {
    name: "Clinical Team",
    description: "Experienced multidisciplinary team supporting every recovery journey.",
    images: [teamImg, teamImg2],
    alt: "Medical team at Hitech Medicity",
  },
  {
    name: "City-Centre Campus",
    description: "A landmark Calicut facility blending care and accessibility.",
    images: [exteriorImg],
    alt: "Hitech Medicity building exterior",
  },
];

const additionalSpecialties = [
  "Yoga & Naturopathy",
  "Hijama Therapy",
  "Ozone Therapy",
  "Osteopathy",
  "Acupuncture",
  "Post Trauma Care",
  "Geriatric Care",
  "Multiple Sclerosis",
  "Alzheimer's Clinic",
  "Parkinson's Clinic",
];

/* ── Individual discipline card ── */
const DisciplineCard = ({ item, index }: { item: Discipline; index: number }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const hasMultiple = item.images.length > 1;

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: index * 0.03 }}
        className="group rounded-3xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10"
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={item.images[0]}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Gallery button overlay */}
          {hasMultiple && (
            <button
              onClick={() => setGalleryOpen(true)}
              className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium pl-2.5 pr-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-black/70 transition-colors"
            >
              <Images className="w-3.5 h-3.5" />
              {item.images.length} photos
            </button>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-display text-2xl mb-2">{item.name}</h3>
          <p className="text-sm leading-relaxed opacity-70">{item.description}</p>
          {hasMultiple && (
            <button
              onClick={() => setGalleryOpen(true)}
              className="text-xs uppercase tracking-wider opacity-50 mt-3 hover:opacity-80 transition-opacity underline underline-offset-2"
            >
              View all photos →
            </button>
          )}
        </div>
      </motion.article>

      <GalleryModal
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
        images={item.images}
        title={item.name}
        alt={item.alt}
      />
    </>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-32 lg:py-40 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="max-w-3xl mb-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4 opacity-60">Our Disciplines</p>
          <h2 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-6">
            Every facility, <em className="text-display italic">purposefully built</em>
          </h2>
          <p className="text-sm md:text-base opacity-70 max-w-2xl leading-relaxed">
            Walk through our departments — each designed for a specific discipline, equipped to the highest clinical standards.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {disciplines.map((item, i) => (
            <DisciplineCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="mt-12"
        >
          <p className="text-xs uppercase tracking-[0.16em] font-medium mb-4 opacity-60">Also Available</p>
          <div className="flex flex-wrap gap-3">
            {additionalSpecialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-primary-foreground/20 px-4 py-2 text-xs md:text-sm opacity-80"
              >
                {specialty}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
