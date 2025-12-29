
import Navbar from "@/components/Navbar";
import ShutdownBanner from "@/components/ShutdownBanner";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DemoSection from "@/components/DemoSection";
import FeaturesSection from "@/components/FeaturesSection";
import PreLaunchSection from "@/components/PreLaunchSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
// import WaitlistSection from "@/components/WaitlistSection";  // SHUTDOWN 2026
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <ShutdownBanner />
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
      {/* SHUTDOWN 2026: Pre-launch section removed */}
      {/* <PreLaunchSection /> */}
      <div id="integrations">
        <IntegrationsSection />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      {/* SHUTDOWN 2026: Waitlist section removed */}
      {/* <WaitlistSection /> */}
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
