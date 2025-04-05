
import { ArrowRight, Camera, Workflow, PuzzlePiece } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white relative">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 z-0">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-diffstudio-blue blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-diffstudio-orange blur-[70px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your product catalog into immersive 3D experiences in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1: Capture */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-diffstudio-red to-diffstudio-orange flex items-center justify-center text-white mb-4">
              <Camera size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Capture</h3>
            <p className="text-gray-600 mb-4">
              Simply send us your products or upload photos from multiple angles. Our technology handles the rest, no specialized equipment needed.
            </p>
            <div className="mt-auto pt-4">
              <ArrowRight className="text-diffstudio-teal mx-auto hidden md:block" />
            </div>
          </div>

          {/* Step 2: Process */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-diffstudio-blue to-diffstudio-purple flex items-center justify-center text-white mb-4">
              <Workflow size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">2. Process</h3>
            <p className="text-gray-600 mb-4">
              Our advanced technology transforms your product into a high-quality interactive 3D model, preserving every detail with photorealistic accuracy.
            </p>
            <div className="mt-auto pt-4">
              <ArrowRight className="text-diffstudio-teal mx-auto hidden md:block" />
            </div>
          </div>

          {/* Step 3: Integrate */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-diffstudio-teal to-diffstudio-blue flex items-center justify-center text-white mb-4">
              <PuzzlePiece size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Integrate</h3>
            <p className="text-gray-600 mb-4">
              Add the 3D models to your e-commerce store, mobile app, or website with our simple plugins and APIs – no coding required.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gray-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Our Platform?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Increase conversion rates by up to 40%</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Reduce product returns by showing accurate details</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Enhance customer engagement with interactive experiences</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Stand out from competitors with cutting-edge technology</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Easy integration with major e-commerce platforms</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Support for web, mobile, and in-store experiences</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#waitlist">
              <Button size="lg" className="bg-gradient-to-r from-diffstudio-blue to-diffstudio-purple hover:opacity-90 text-white">
                Get Started Today
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
