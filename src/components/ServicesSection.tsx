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
import aestheticImg from "@/assets/discipline-aesthetic.jpg";
import salonStudio from "@/assets/salon-studio.jpg";

// Pharmacy
import pharmacyImg from "@/assets/discipline-pharmacy.jpg";

// Consultation (reused for Alzheimer's Clinic)
import consultationImg from "@/assets/discipline-consultation.jpg";

// Chiropractic
import chiropracticImg from "@/assets/specialty-chiropractic.jpg";

// Rooftop Rehab & Play Therapy
import rooftopPlayWide from "@/assets/rooftop-play-wide.jpg";
import rooftopPlayCenter from "@/assets/rooftop-play-center.jpg";
import rooftopSandTrack from "@/assets/rooftop-sand-track.jpg";
import rooftopBridge from "@/assets/rooftop-bridge.jpg";
import rooftopLounge from "@/assets/rooftop-lounge.jpg";
import rooftopSeating from "@/assets/rooftop-seating.jpg";
import rooftopTreadmills from "@/assets/rooftop-treadmills.jpg";
import rooftopGym from "@/assets/rooftop-gym.jpg";

// Specialty images
import yogaImg from "@/assets/specialty-yoga.jpg";
import naturopathyImg from "@/assets/specialty-naturopathy.jpg";
import hijamaImg from "@/assets/specialty-hijama.jpg";
import ozoneImg from "@/assets/specialty-ozone.jpg";
import osteopathyImg from "@/assets/specialty-osteopathy.jpg";
import acupunctureImg from "@/assets/specialty-acupuncture.jpg";
import postTraumaImg from "@/assets/specialty-post-trauma.jpg";
import geriatricImg from "@/assets/specialty-geriatric.jpg";
import msClinicImg from "@/assets/specialty-ms-clinic.jpg";
import parkinsonsImg from "@/assets/specialty-parkinsons.jpg";

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
    name: "In-house Pharmacy",
    description: "Integrated medicine and wellness products under one roof.",
    images: [pharmacyImg],
    alt: "In-house pharmacy",
  },
];

const otherServices: Discipline[] = [
  {
    name: "Ayurveda",
    description: "Traditional Ayurvedic therapies and Panchakarma for holistic recovery and wellness.",
    images: [ayurvedaRoom1],
    alt: "Ayurveda treatment room",
  },
  {
    name: "Yoga",
    description: "Guided therapeutic yoga for flexibility, strength, and holistic healing.",
    images: [yogaImg],
    alt: "Therapeutic yoga session",
  },
  {
    name: "Naturopathy",
    description: "Nature-based healing using herbal remedies, nutrition, and lifestyle therapies.",
    images: [naturopathyImg],
    alt: "Naturopathy treatment clinic",
  },
  {
    name: "Physiotherapy",
    description: "Comprehensive rehabilitation with advanced equipment and personalised treatment plans.",
    images: [physioRoom],
    alt: "Physiotherapy treatment session",
  },
  {
    name: "Aesthetic & Hair Clinic",
    description: "Dedicated beauty, grooming, and cosmetic care space.",
    images: [aestheticImg],
    alt: "Aesthetic and hair treatment studio",
  },
  {
    name: "Hijama",
    description: "Traditional cupping therapy for pain relief, detoxification, and improved circulation.",
    images: [hijamaImg],
    alt: "Hijama cupping therapy",
  },
  {
    name: "Ozone Therapy",
    description: "Advanced ozone-based treatments for immune support and tissue repair.",
    images: [ozoneImg],
    alt: "Ozone therapy treatment",
  },
  {
    name: "Osteopathy",
    description: "Manual therapy targeting musculoskeletal conditions through hands-on techniques.",
    images: [osteopathyImg],
    alt: "Osteopathy treatment session",
  },
  {
    name: "Chiropractic Adjustment",
    description: "Spinal and joint adjustments to relieve pain, improve mobility, and restore alignment.",
    images: [chiropracticImg],
    alt: "Chiropractic adjustment session",
  },
  {
    name: "Acupuncture",
    description: "Precise needle therapy for pain management, stress relief, and neurological conditions.",
    images: [acupunctureImg],
    alt: "Acupuncture treatment",
  },
  {
    name: "Post Trauma Care",
    description: "Structured rehabilitation programmes for recovery after injury or surgery.",
    images: [postTraumaImg],
    alt: "Post trauma rehabilitation care",
  },
  {
    name: "Geriatric Care",
    description: "Compassionate, specialised care tailored for elderly patients and age-related conditions.",
    images: [geriatricImg],
    alt: "Geriatric care with nurse and patient",
  },
  {
    name: "Multiple Sclerosis",
    description: "Dedicated clinic for MS management, rehabilitation, and ongoing neurological support.",
    images: [msClinicImg],
    alt: "Multiple sclerosis rehabilitation clinic",
  },
  {
    name: "Alzheimer's Clinic",
    description: "Specialised care and cognitive support for Alzheimer's patients and their families.",
    images: [consultationImg],
    alt: "Alzheimer's clinic consultation",
  },
  {
    name: "Parkinson's Clinic",
    description: "Targeted treatment and rehabilitation for Parkinson's disease management.",
    images: [parkinsonsImg],
    alt: "Parkinson's disease clinic",
  },
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

/* ── Smaller card for additional specialties ── */
const SpecialtyCard = ({ item, index }: { item: Discipline; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.04 }}
    className="group rounded-2xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10"
  >
    <div className="aspect-[3/2] overflow-hidden relative">
      <img
        src={item.images[0]}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h3 className="text-display text-lg mb-1.5">{item.name}</h3>
      <p className="text-xs leading-relaxed opacity-60">{item.description}</p>
    </div>
  </motion.article>
);

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

        {/* Other Services */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
          className="mt-20"
        >
          <p className="text-xs uppercase tracking-[0.2em] font-medium mb-4 opacity-60">Other Services</p>
          <h2 className="text-display text-3xl md:text-4xl tracking-tight leading-[1.1] mb-10">
            Specialised care, <em className="text-display italic">across every need</em>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {otherServices.map((item, i) => (
              <SpecialtyCard key={item.name} item={item} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
