
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Function to handle smooth scrolling to the demo section
  const handleScrollToDemo = () => {
    // Looking for the demo section by id "showcase" instead of "demo"
    const demoSection = document.getElementById('showcase');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
      console.log("Scrolling to demo section:", demoSection);
    } else {
      console.error("Demo section not found");
    }
  };

  return <section className="relative min-h-screen w-full overflow-hidden pt-24 pb-16 flex items-center hero-gradient">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 z-0">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-diffstudio-red blur-[80px]"></div>
        <div className="absolute top-[30%] right-[10%] w-96 h-96 rounded-full bg-diffstudio-blue blur-[100px]"></div>
        <div className="absolute bottom-[10%] left-[20%] w-80 h-80 rounded-full bg-diffstudio-teal blur-[90px]"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Bring Products to Life with <span className="gradient-text">Interactive 3D</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl mx-auto lg:mx-0">
              Create stunning digital twins for your e-commerce products with our 3D visualization platform. 
              <span className="block mt-2 text-white font-medium">Launching Soon — Join the Waitlist for Early Access!</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white">
                <a href="#waitlist">Join the Waitlist</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white"
                onClick={handleScrollToDemo}
              >
                See Demo
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden z-20">
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                  <iframe 
                    ref={iframeRef}
                    id="viewer" 
                    allow="fullscreen"
                    allowFullScreen={true}
                    style={{ 
                      width: '100%', 
                      height: '100%',
                      position: 'relative',
                    }}
                    loading="eager"
                    src="https://d2g4atlfg3j0t6.cloudfront.net/landing-page/dist/index.html?settings=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/calvin-klien-mannequin/settings.json&content=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/calvin-klien-mannequin/scene.compressed.ply"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full bg-diffstudio-teal/30 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-diffstudio-orange/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
