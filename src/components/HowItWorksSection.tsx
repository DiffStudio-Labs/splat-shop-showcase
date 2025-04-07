
import { ArrowRight, Camera, Workflow, Puzzle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10 z-0">
        <div className="absolute top-[20%] right-[10%] w-72 h-72 rounded-full bg-diffstudio-blue blur-[80px]"></div>
        <div className="absolute bottom-[10%] left-[5%] w-64 h-64 rounded-full bg-diffstudio-orange blur-[70px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started in 3 Simple Steps</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Easily transform your physical products into interactive digital assets for your customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1: Capture */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-diffstudio-red to-diffstudio-orange flex items-center justify-center text-white mb-4">
              <Camera size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">1. Capture Your Product</h3>
            <p className="text-gray-600 mb-4">
              Use your smartphone or digital camera to take photos or video following our simple guidelines. No specialized hardware needed – just clear shots from multiple angles.
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
            <h3 className="text-xl font-bold mb-3">2. Upload & Process</h3>
            <p className="text-gray-600 mb-4">
              Upload your media to the DiffStudio platform. Our AI-powered engine analyzes the images/video and automatically generates a high-fidelity, web-optimized 3D model.
            </p>
            <div className="mt-auto pt-4">
              <ArrowRight className="text-diffstudio-teal mx-auto hidden md:block" />
            </div>
          </div>

          {/* Step 3: Integrate */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-diffstudio-teal to-diffstudio-blue flex items-center justify-center text-white mb-4">
              <Puzzle size={28} />
            </div>
            <h3 className="text-xl font-bold mb-3">3. Integrate Seamlessly</h3>
            <p className="text-gray-600 mb-4">
              Embed the interactive 3D viewer directly into your website or e-commerce platform using our simple code snippets or no-code plugins for popular systems.
            </p>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 p-8 md:p-12 rounded-xl shadow-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">Unlock Key Benefits</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-gray-700">
            <div className="flex items-start">
              <Check className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0" size={20} />
              <span><strong>Boost Conversion Potential:</strong> Interactive 3D products can increase conversion rates by up to 90%.</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0" size={20} />
              <span><strong>Reduce Returns:</strong> Minimize surprises by letting customers virtually inspect products in detail.</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0" size={20} />
              <span><strong>Increase Engagement:</strong> Keep visitors captivated with interactive, hands-on product experiences.</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0" size={20} />
              <span><strong>Enhance Brand Image:</strong> Stand out with innovative technology that signals quality and modernity.</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0" size={20} />
              <span><strong>Effortless Integration:</strong> Connect easily with major e-commerce platforms.</span>
            </div>
            <div className="flex items-start">
              <Check className="mr-2 text-diffstudio-teal mt-1 flex-shrink-0" size={20} />
              <span><strong>Cross-Platform Ready:</strong> Ensure seamless viewing on desktop, mobile, and tablets.</span>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href="#waitlist">
              <Button size="lg" className="bg-gradient-to-r from-diffstudio-blue to-diffstudio-purple hover:opacity-90 text-white px-4 py-2 max-w-full whitespace-normal h-auto">
                Join the Waitlist & Transform Your Catalog
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
