import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drFebina from "@/assets/dr-febina.jpg";
import medicalStaffTeam from "@/assets/medical-staff-team-2.jpg";
import medicalStaffTeam2 from "@/assets/medical-staff-team-3.jpg";
import { useEffect, useState } from "react";

const WHATSAPP_LINK = "https://wa.me/919207551177?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Febina%20Sulthana.";
const ease = [0.4, 0, 0.2, 1] as const;
const teamImages = [medicalStaffTeam, medicalStaffTeam2];

const TeamCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % teamImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-soft mb-6 aspect-[16/9]">
      {teamImages.map((src, i) => (
        <img
          key={i}
          src={src}
          alt="The clinical team at Hitech Medicity"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Doctor intro — 2-column */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="lg:sticky top-24"
            >
              <div className="rounded-[2rem] overflow-hidden shadow-soft aspect-[3/4]">
                <img
                  src={drFebina}
                  alt="Dr. Febina Sulthana"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
                The Doctor
              </p>
              <h1 className="text-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground leading-[1.1] mb-8">
                Dr. Febina{" "}
                <em className="text-display italic">Sulthana</em>
              </h1>

              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                <p>
                  A physician who believes that healing is not simply the absence of disease, but 
                  the presence of vitality. Dr. Febina Sulthana founded Hitech Medicity with a 
                  singular vision: to create a space where clinical rigour and human compassion 
                  are inseparable.
                </p>
                <p>
                  Trained in modern medicine and deeply rooted in Kerala's healing traditions, 
                  she has built a practice that bridges the precision of evidence-based diagnostics 
                  with the wisdom of Ayurveda, physiotherapy, and holistic wellness.
                </p>
                <p>
                  Her approach is personal. Every patient receives a treatment plan that considers 
                  not just their condition, but their life — their routines, their stress, their 
                  goals. This is medicine that sees the whole person.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                {[
                  { label: "Philosophy", value: "Integrative Medicine" },
                  { label: "Specialisation", value: "Multi-disciplinary Care" },
                  { label: "Location", value: "Calicut, Kerala" },
                  { label: "Approach", value: "Patient-Centred" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-medium mb-1">{item.label}</p>
                    <p className="text-display text-lg text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* The Vision — full width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-24 pt-12 border-t border-foreground/5 text-center"
          >
            <h2 className="text-display text-3xl md:text-4xl text-foreground mb-6">The Vision</h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10 max-w-3xl mx-auto">
              Hitech Medicity is more than a hospital — it's a destination for healing. 
              With 3-star stay facilities, a team of specialists across 14+ disciplines, 
              and a location in the cultural heart of Calicut, Dr. Febina has created a 
              space where patients don't just recover — they are restored.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-soft mb-10 aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/A2_KjoeuLX4"
                title="Hitech Medicity — A tour of the facility"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Consult with Dr. Febina
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/">Explore the Facility</Link>
              </Button>
            </div>
          </motion.div>

          {/* The Clinical Team — full width */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="mt-24 pt-12 border-t border-foreground/5 text-center"
          >
            <h2 className="text-display text-3xl md:text-4xl text-foreground mb-6">The Clinical Team</h2>
            <TeamCarousel />
            <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
              Behind every treatment is a team of dedicated specialists — physiotherapists, 
              Ayurvedic practitioners, dentists, neurologists, and support staff — all working 
              under Dr. Febina's integrated care philosophy. Together, they bring expertise 
              across 14+ disciplines to deliver compassionate, coordinated care.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
