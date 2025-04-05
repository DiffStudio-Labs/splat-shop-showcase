
import { Button } from "@/components/ui/button";
const HeroSection = () => {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
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
              <Button size="lg" variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20 text-white">
                <a href="#demo">See Demo</a>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden">
                {/* This would be your 3D product viewer/demo in production */}
                <div className="bg-gradient-to-br from-diffstudio-purple to-diffstudio-blue w-full h-full flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-pulse-slow">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                        <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                        <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Interactive 3D View</h3>
                    <p className="text-white/80">Our 3D product visualizations let customers explore every angle and detail.</p>
                  </div>
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
