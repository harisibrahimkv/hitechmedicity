// === OUR SERVICES images ===
import serviceAllopathy from "@/assets/service-allopathy.jpg";
import ayurvedaRoom1 from "@/assets/ayurveda-room-1.jpg";
import ayurvedaRoom2 from "@/assets/ayurveda-room-2.jpg";
import ayurvedaRoom3 from "@/assets/ayurveda-room-3.jpg";
import ayurvedaRoom4 from "@/assets/ayurveda-room-4.jpg";
import ayurvedaSupplies from "@/assets/ayurveda-supplies.jpg";
import ayurvedaSupplies2 from "@/assets/ayurveda-supplies-2.jpg";
import spaMassage from "@/assets/spa-massage.jpg";
import spaMassage2 from "@/assets/spa-massage-2.jpg";
import serviceNaturopathy from "@/assets/service-naturopathy.jpg";
import serviceYoga from "@/assets/service-yoga.jpg";
import servicePhysiotherapy from "@/assets/service-physiotherapy.jpg";
import servicePhysioGaitLab from "@/assets/service-physio-gait-lab.jpg";
import dentalImg from "@/assets/discipline-dental.jpg";
import serviceDental2 from "@/assets/service-dental-2.jpg";
import serviceCosmetology from "@/assets/service-cosmetology.jpg";

// === SPECIALIZATIONS images ===
import specStrokeRehab from "@/assets/spec-stroke-rehab.jpg";
import specBackPain from "@/assets/spec-back-pain.jpg";
import specKneePain from "@/assets/spec-knee-pain.jpg";
import specParkinsons from "@/assets/spec-parkinsons.jpg";
import specPostAccident from "@/assets/spec-post-accident.jpg";
import specLifestyleDisorder from "@/assets/spec-lifestyle-disorder.jpg";
import specCerebralPalsy from "@/assets/spec-cerebral-palsy.jpg";
import specAutism from "@/assets/spec-autism.jpg";
import specDiabetes from "@/assets/spec-diabetes.jpg";
import specGlaucoma from "@/assets/spec-glaucoma.jpg";
import specInfertility from "@/assets/spec-infertility.jpg";

// === FACILITIES images (kept as-is) ===
import physioEquipment from "@/assets/physio-equipment.jpg";
import physioRoom from "@/assets/physio-room.jpg";
import physioGaitBars from "@/assets/physio-gait-bars.jpg";
import physioWide from "@/assets/physio-wide.jpg";
import physioWide2 from "@/assets/physio-wide-2.jpg";
import physioArthritis from "@/assets/physio-arthritis.jpg";
import physioHandTherapy from "@/assets/physio-hand-therapy.jpg";
import physioBed from "@/assets/physio-bed.jpg";
import physioTreatment from "@/assets/physio-treatment.jpg";
import rooftopPlayWide from "@/assets/rooftop-play-wide.jpg";
import rooftopPlayCenter from "@/assets/rooftop-play-center.jpg";
import rooftopSandTrack from "@/assets/rooftop-sand-track.jpg";
import rooftopBridge from "@/assets/rooftop-bridge.jpg";
import rooftopLounge from "@/assets/rooftop-lounge.jpg";
import rooftopSeating from "@/assets/rooftop-seating.jpg";
import rooftopTreadmills from "@/assets/rooftop-treadmills.jpg";
import rooftopGym from "@/assets/rooftop-gym.jpg";
import aestheticImg from "@/assets/discipline-aesthetic.jpg";
import serviceAestheticClinic from "@/assets/service-aesthetic-clinic.jpg";
import pharmacyImg from "@/assets/discipline-pharmacy.jpg";

export interface ServiceItem {
  name: string;
  description: string;
  images: string[];
  alt: string;
}

export const services: ServiceItem[] = [
  {
    name: "Allopathy",
    description: "Evidence-based modern medicine with advanced diagnostics and treatment protocols.",
    images: [serviceAllopathy],
    alt: "Allopathy consultation and modern medicine",
  },
  {
    name: "Ayurveda",
    description: "Traditional Ayurvedic therapies, Panchakarma, and dedicated wellness suites for holistic recovery.",
    images: [ayurvedaRoom1, ayurvedaRoom3, ayurvedaRoom4, ayurvedaRoom2, ayurvedaSupplies, ayurvedaSupplies2],
    alt: "Ayurveda and wellness treatments at Hitech Medicity",
  },
  {
    name: "Naturopathy",
    description: "Nature-based healing using herbal remedies, restorative routines, and lifestyle therapies.",
    images: [serviceNaturopathy],
    alt: "Naturopathy treatment and natural healing",
  },
  {
    name: "Yoga and Meditation",
    description: "Guided therapeutic yoga and mindfulness practices for flexibility, strength, breathing, and mental wellness.",
    images: [serviceYoga],
    alt: "Therapeutic yoga session at Hitech Medicity",
  },
  {
    name: "Physiotherapy & Orthoneuro Rehabilitation",
    description: "Advanced rehabilitation services for orthopedic and neurological conditions with specialized equipment.",
    images: [servicePhysiotherapy],
    alt: "Physiotherapy and orthoneuro rehabilitation",
  },
  {
    name: "Dental",
    description: "Comprehensive dental care with modern chair-side equipment and advanced treatment protocols.",
    images: [dentalImg],
    alt: "Dental treatment at Hitech Medicity",
  },
  {
    name: "Cosmetology",
    description: "Aesthetic and cosmetic care services for beauty, grooming, and skin wellness.",
    images: [serviceCosmetology],
    alt: "Cosmetology and skin care treatment",
  },
];

export const specializations: ServiceItem[] = [
  {
    name: "Stroke Rehabilitation",
    description: "Comprehensive post-stroke recovery programs for regaining mobility, speech, and independence.",
    images: [specStrokeRehab],
    alt: "Stroke rehabilitation program",
  },
  {
    name: "Back/Knee/Joint Pain",
    description: "Specialized treatment for chronic and acute musculoskeletal pain management.",
    images: [specKneePain],
    alt: "Back knee and joint pain treatment",
  },
  {
    name: "Spine, Disc & Spinal Cord Issues",
    description: "Comprehensive spinal care including disc problems, scoliosis, stenosis, and spinal cord injury rehabilitation.",
    images: [specBackPain],
    alt: "Spine disc and spinal cord treatment",
  },
  {
    name: "Parkinson's & Movement Disorders",
    description: "Dedicated clinic for Parkinson's disease, tremors, dystonia, and other neurological movement abnormalities.",
    images: [specParkinsons],
    alt: "Parkinson's disease and movement disorder care",
  },
  {
    name: "Post Accidental Rehabilitation",
    description: "Complete recovery programs for road traffic accident victims and trauma patients.",
    images: [specPostAccident],
    alt: "Post accidental rehabilitation care",
  },
  {
    name: "Lifestyle Disorders",
    description: "Holistic management of lifestyle-related conditions including obesity, hypertension, and metabolic syndrome.",
    images: [specLifestyleDisorder],
    alt: "Lifestyle disorder management",
  },
  {
    name: "Cerebral Palsy",
    description: "Specialized pediatric care and therapeutic interventions for cerebral palsy management.",
    images: [specCerebralPalsy],
    alt: "Cerebral palsy care and therapy",
  },
  {
    name: "Autism",
    description: "Evidence-based autism spectrum disorder interventions and developmental support programs.",
    images: [specAutism],
    alt: "Autism spectrum disorder support",
  },
  {
    name: "Diabetic Clinic",
    description: "Comprehensive diabetes management including dietary counseling, medication, and complication prevention.",
    images: [specDiabetes],
    alt: "Diabetic clinic and diabetes management",
  },
  {
    name: "Glaucoma Clinic",
    description: "Specialized glaucoma screening, monitoring, and treatment to preserve vision.",
    images: [specGlaucoma],
    alt: "Glaucoma clinic eye care",
  },
  {
    name: "Infertility Clinic",
    description: "Holistic infertility management combining modern medicine with traditional therapies.",
    images: [specInfertility],
    alt: "Infertility clinic and fertility care",
  },
];

export const facilities: ServiceItem[] = [
  {
    name: "Physiotherapy & Gait Lab",
    description: "Comprehensive rehab with parallel bars, balance training, hand therapy, and advanced gait analysis.",
    images: [physioEquipment, physioRoom, physioGaitBars, physioWide, physioWide2, physioArthritis, physioHandTherapy, physioBed, physioTreatment],
    alt: "Physiotherapy and gait lab facility",
  },
  {
    name: "Rooftop Rehab & Play Therapy",
    description: "Open-air therapeutic play centre with sensory tracks, trampolines, and terrace fitness equipment.",
    images: [rooftopPlayWide, rooftopPlayCenter, rooftopSandTrack, rooftopBridge, rooftopLounge, rooftopSeating, rooftopTreadmills, rooftopGym],
    alt: "Rooftop rehabilitation and play therapy area",
  },
  {
    name: "Aesthetic & Hair Clinic",
    description: "Dedicated beauty, grooming, and cosmetic care space.",
    images: [serviceAestheticClinic],
    alt: "Aesthetic and hair treatment studio",
  },
  {
    name: "In-house Pharmacy",
    description: "Integrated medicine and wellness products under one roof.",
    images: [pharmacyImg],
    alt: "In-house pharmacy",
  },
  {
    name: "Spa & Massage Room",
    description: "Relaxing spa and massage therapy rooms for rejuvenation and holistic wellness.",
    images: [spaMassage, spaMassage2],
    alt: "Spa and massage therapy room",
  },
];
