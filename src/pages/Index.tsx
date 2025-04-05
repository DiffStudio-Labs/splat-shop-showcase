
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import DemoSection from "@/components/DemoSection";
import FAQSection from "@/components/FAQSection";
import WaitlistSection from "@/components/WaitlistSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <IntegrationsSection />
      <DemoSection />
      <FAQSection />
      <WaitlistSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
