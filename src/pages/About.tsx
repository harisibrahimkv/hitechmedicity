import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import drFebina from "@/assets/dr-febina.jpg";

const WHATSAPP_LINK = "https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20Dr.%20Febina%20Sulthana.";
const ease = [0.4, 0, 0.2, 1] as const;

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease }}
              className="sticky top-24"
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

              <div className="mt-12 pt-12 border-t border-foreground/5">
                <h2 className="text-display text-2xl text-foreground mb-4">The Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  Hitech Medicity is more than a hospital — it's a destination for healing. 
                  With 3-star stay facilities, a team of specialists across 14+ disciplines, 
                  and a location in the cultural heart of Calicut, Dr. Febina has created a 
                  space where patients don't just recover — they are restored.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="hero" size="lg" asChild>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      Consult with Dr. Febina
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/">Explore the Facility</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
