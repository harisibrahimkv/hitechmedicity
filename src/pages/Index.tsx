import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ServicesSection from "@/components/ServicesSection";
import FacilitySection from "@/components/FacilitySection";
import CalicutSection from "@/components/CalicutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <FacilitySection />
      <CalicutSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
