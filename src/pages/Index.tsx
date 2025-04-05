
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoSection from "@/components/DemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import PreLaunchSection from "@/components/PreLaunchSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import WaitlistSection from "@/components/WaitlistSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PersistentWaitlist from "@/components/PersistentWaitlist";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <HeroSection />
      <div id="how-it-works">
        <HowItWorksSection />
      </div>
      <div id="showcase">
        <DemoSection />
      </div>
      <div id="features">
        <FeaturesSection />
      </div>
      <PreLaunchSection />
      <div id="integrations">
        <IntegrationsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <WaitlistSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <PersistentWaitlist />
    </div>
  );
};

export default Index;
