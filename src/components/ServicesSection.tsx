import { motion } from "framer-motion";
import ayurvedaImg from "@/assets/discipline-ayurveda.jpg";
import physioImg from "@/assets/discipline-physio.jpg";
import dentalImg from "@/assets/discipline-dental.jpg";
import aestheticImg from "@/assets/discipline-aesthetic.jpg";
import pharmacyImg from "@/assets/discipline-pharmacy.jpg";
import consultationImg from "@/assets/discipline-consultation.jpg";
import receptionImg from "@/assets/discipline-reception.jpg";
import teamImg from "@/assets/discipline-team.jpg";
import cafeImg from "@/assets/discipline-cafe.jpg";
import exteriorImg from "@/assets/discipline-exterior.jpg";

const ease = [0.4, 0, 0.2, 1] as const;

const disciplineShowcase = [
  {
    name: "Ayurveda & Panchakarma",
    description: "Traditional therapies delivered in modern treatment suites.",
    image: ayurvedaImg,
    alt: "Ayurvedic treatment setup at Hitech Medicity",
  },
  {
    name: "Physiotherapy & Gait Lab",
    description: "Specialized rehab, balance training, and movement restoration.",
    image: physioImg,
    alt: "Physiotherapy gait training area",
  },
  {
    name: "Dental Clinic",
    description: "Comprehensive dental care with modern chair-side equipment.",
    image: dentalImg,
    alt: "Dental treatment room with clinicians and patient",
  },
  {
    name: "Aesthetic & Hair Studio",
    description: "Dedicated beauty, grooming, and cosmetic care space.",
    image: aestheticImg,
    alt: "Aesthetic and hair treatment studio",
  },
  {
    name: "In-house Pharmacy",
    description: "Integrated medicine and wellness products under one roof.",
    image: pharmacyImg,
    alt: "In-house pharmacy shelves and service counter",
  },
  {
    name: "Doctor Consultation",
    description: "Patient-centred consultations with family-focused care.",
    image: consultationImg,
    alt: "Doctor consultation with patient and child",
  },
  {
    name: "Reception Lounge",
    description: "Warm waiting lounge designed for comfort and privacy.",
    image: receptionImg,
    alt: "Reception waiting lounge with sofas",
  },
  {
    name: "Clinical Team",
    description: "Experienced multidisciplinary team supporting every journey.",
    image: teamImg,
    alt: "Medical team group photo at Hitech Medicity",
  },
  {
    name: "Healthy Café",
    description: "On-site café for fresh, recovery-friendly nourishment.",
    image: cafeImg,
    alt: "In-house café seating and counter",
  },
  {
    name: "City-Centre Campus",
    description: "A landmark Calicut facility blending care and accessibility.",
    image: exteriorImg,
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
            Real spaces behind every <em className="text-display italic">specialty</em>
          </h2>
          <p className="text-sm md:text-base opacity-70 max-w-2xl leading-relaxed">
            A section-by-section look at your actual facilities, mapped to the services patients experience.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {disciplineShowcase.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.03 }}
              className="rounded-3xl overflow-hidden bg-primary-foreground/5 border border-primary-foreground/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-display text-2xl mb-2">{item.name}</h3>
                <p className="text-sm leading-relaxed opacity-70">{item.description}</p>
              </div>
            </motion.article>
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
