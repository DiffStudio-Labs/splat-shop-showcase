
import { Button } from "@/components/ui/button";

const PreLaunchSection = () => {
  return (
    <section id="pre-launch" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need 3D Models Now? Get Started Early!</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            While our platform is preparing for launch, our expert team can create stunning, interactive 3D models <em>for</em> you. Get a head start on transforming your product listings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Remote Service */}
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Remote 3D Modeling (Available Anywhere)
            </h3>
            <p className="text-gray-600">
              Simply follow our straightforward video capture guidelines using your smartphone or camera. Send us the footage, and we'll handle the 3D model creation process remotely. Ideal for businesses located anywhere.
            </p>
          </div>

          {/* In-Person Service */}
          <div className="rounded-xl bg-white p-8 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              In-Person Scanning (NY, NJ, PA & East Coast Focus)
            </h3>
            <p className="text-gray-600">
              For businesses primarily in the New York, New Jersey, Pennsylvania, and surrounding East Coast areas, our team can arrange to visit your location for professional, hands-on 3D scanning of your products.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to bring your products to life before the official launch?
          </p>
          <a href="#contact">
            <Button size="lg" className="bg-gradient-to-r from-diffstudio-blue to-diffstudio-purple hover:opacity-90 text-white px-4 py-2 max-w-full whitespace-normal h-auto">
              Contact Us About Pre-Launch Services
            </Button>
          </a>
          <p className="text-sm text-gray-500 mt-3">
            (Please select 'Pre-launch Services' as the subject)
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16">
        <hr className="border-gray-200" />
      </div>
    </section>
  );
};

export default PreLaunchSection;
