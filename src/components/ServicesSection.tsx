import { motion } from "framer-motion";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";

import physioRoom from "@/assets/physio-room.jpg";
import physioEquipment from "@/assets/physio-equipment.jpg";
import physioTreatment from "@/assets/physio-treatment.jpg";
import physioWide from "@/assets/physio-wide.jpg";
import physioWide2 from "@/assets/physio-wide-2.jpg";
import physioArthritis from "@/assets/physio-arthritis.jpg";
import physioHandTherapy from "@/assets/physio-hand-therapy.jpg";
import physioGaitBars from "@/assets/physio-gait-bars.jpg";
import physioBed from "@/assets/physio-bed.jpg";

import ayurvedaRoom1 from "@/assets/ayurveda-room-1.jpg";
import ayurvedaRoom2 from "@/assets/ayurveda-room-2.jpg";
import ayurvedaRoom3 from "@/assets/ayurveda-room-3.jpg";
import ayurvedaRoom4 from "@/assets/ayurveda-room-4.jpg";
import ayurvedaSupplies from "@/assets/ayurveda-supplies.jpg";
import ayurvedaSupplies2 from "@/assets/ayurveda-supplies-2.jpg";
import spaMassage from "@/assets/spa-massage.jpg";

import dentalImg from "@/assets/discipline-dental.jpg";
import aestheticImg from "@/assets/discipline-aesthetic.jpg";
import pharmacyImg from "@/assets/discipline-pharmacy.jpg";
import consultationImg from "@/assets/discipline-consultation.jpg";
import disciplineAyurvedaImg from "@/assets/discipline-ayurveda.jpg";
import disciplinePhysioImg from "@/assets/discipline-physio.jpg";
import medicalStaffTeamImg from "@/assets/medical-staff-team-2.jpg";

import rooftopPlayWide from "@/assets/rooftop-play-wide.jpg";
import rooftopPlayCenter from "@/assets/rooftop-play-center.jpg";
import rooftopSandTrack from "@/assets/rooftop-sand-track.jpg";
import rooftopBridge from "@/assets/rooftop-bridge.jpg";
import rooftopLounge from "@/assets/rooftop-lounge.jpg";
import rooftopSeating from "@/assets/rooftop-seating.jpg";
import rooftopTreadmills from "@/assets/rooftop-treadmills.jpg";
import rooftopGym from "@/assets/rooftop-gym.jpg";

import yogaNaturopathyImg from "@/assets/specialty-yoga-naturopathy.jpg";
import neuroClinicImg from "@/assets/specialty-neuro-clinic.jpg";
import hijamaImg from "@/assets/specialty-hijama.jpg";
import ozoneImg from "@/assets/specialty-ozone.jpg";
import postTraumaImg from "@/assets/specialty-post-trauma.jpg";
import geriatricImg from "@/assets/specialty-geriatric.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

interface Discipline {
  name: string;
  description: string;
  images: string[];
  alt: string;
}

const services: Discipline[] = [
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
    name: "Ayurveda",
    description: "Traditional Ayurvedic therapies, Panchakarma, and dedicated wellness suites for holistic recovery.",
    images: [ayurvedaRoom1, ayurvedaRoom3, ayurvedaRoom4, ayurvedaRoom2, spaMassage, ayurvedaSupplies, ayurvedaSupplies2],
    alt: "Ayurveda and wellness treatments at Hitech Medicity",
  },
  {
    name: "Yoga",
    description: "Guided therapeutic yoga for flexibility, strength, breathing, and holistic healing.",
    images: [yogaNaturopathyImg, disciplineAyurvedaImg, ayurvedaRoom1],
    alt: "Therapeutic yoga and wellness session",
  },
  {
    name: "Naturopathy",
    description: "Nature-based healing using herbal remedies, restorative routines, and lifestyle therapies.",
    images: [yogaNaturopathyImg, ayurvedaSupplies, disciplineAyurvedaImg],
    alt: "Naturopathy treatment and wellness care",
  },
  {
    name: "Dental Clinic",
    description: "Comprehensive dental care with modern chair-side equipment.",
    images: [dentalImg],
    alt: "Dental treatment room",
  },
  {
    name: "Aesthetic & Hair Clinic",
    description: "Dedicated beauty, grooming, and cosmetic care space.",
    images: [aestheticImg],
    alt: "Aesthetic and hair treatment studio",
  },
  {
    name: "In-house Pharmacy",
    description: "Integrated medicine and wellness products under one roof.",
    images: [pharmacyImg],
    alt: "In-house pharmacy",
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
    images: [physioTreatment, disciplinePhysioImg],
    alt: "Osteopathy treatment session",
  },
  {
    name: "Chiropractic Adjustment",
    description: "Spinal and joint adjustments to relieve pain, improve mobility, and restore alignment.",
    images: [disciplinePhysioImg, physioTreatment, neuroClinicImg],
    alt: "Chiropractic and spinal rehabilitation care",
  },
  {
    name: "Acupuncture",
    description: "Precise needle therapy for pain management, stress relief, and neurological conditions.",
    images: [consultationImg, disciplinePhysioImg],
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
    images: [neuroClinicImg, medicalStaffTeamImg, physioGaitBars],
    alt: "Multiple sclerosis rehabilitation and neurological clinic",
  },
  {
    name: "Alzheimer's Clinic",
    description: "Specialised care and cognitive support for Alzheimer's patients and their families.",
    images: [consultationImg, medicalStaffTeamImg],
    alt: "Alzheimer's clinic consultation and support",
  },
  {
    name: "Parkinson's Clinic",
    description: "Targeted treatment and rehabilitation for Parkinson's disease management.",
    images: [neuroClinicImg, medicalStaffTeamImg, physioWide2],
    alt: "Parkinson's disease clinic and rehabilitation care",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-primary py-32 text-primary-foreground lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] opacity-60">Our Disciplines</p>
          <h2 className="text-display mb-6 text-4xl leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Every facility, <em className="text-display italic">purposefully built</em>
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed opacity-70 md:text-base">
            From physiotherapy and Ayurveda to specialised neurology clinics — every discipline under one roof, designed around you.
          </p>
        </motion.div>

        <AutoScrollCarousel items={services} speed={40} />
      </div>
    </section>
  );
};

export default ServicesSection;
