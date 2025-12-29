import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Announcement = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              An Important Update About <span className="gradient-text">DiffStudio</span>
            </h1>
            <p className="text-gray-600">December 2024</p>
          </div>

          <Separator className="my-6" />

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4 bg-gradient-to-r from-diffstudio-red to-diffstudio-orange bg-clip-text text-transparent">
              Closure Announcement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              After careful consideration, we have made the difficult decision to close DiffStudio.
              This landing page will remain online as a showcase of the technology we built and the vision we pursued.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 bg-gradient-to-r from-diffstudio-blue to-diffstudio-teal bg-clip-text text-transparent">
              Our Journey
            </h2>
            <p className="text-gray-700 leading-relaxed">
              DiffStudio was born from a vision to revolutionize e-commerce through interactive 3D product visualization.
              We set out to make it easy for any business to create stunning digital twins of their products using cutting-edge
              Gaussian Splatting and NeRF technology.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Throughout our journey, we built a sophisticated 3D visualization platform that could transform ordinary product
              photos into immersive, interactive experiences. We developed integrations with major e-commerce platforms,
              created a seamless upload and processing pipeline, and proved that this technology could truly enhance the
              online shopping experience.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              While we achieved significant technical milestones and validated the potential of 3D product visualization,
              various factors including market timing, resource constraints, and strategic considerations led us to make
              this difficult decision.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 bg-gradient-to-r from-diffstudio-purple to-diffstudio-blue bg-clip-text text-transparent">
              For Our Community
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To everyone who joined our waitlist, shared feedback, or showed interest in DiffStudio: <strong>thank you</strong>.
              Your enthusiasm and support validated our vision and motivated us throughout this journey.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              While DiffStudio has closed and will not be launching as a commercial product, the technology we developed and the lessons
              we learned represent valuable progress in making 3D visualization more accessible to businesses.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 bg-gradient-to-r from-diffstudio-teal to-diffstudio-purple bg-clip-text text-transparent">
              Moving Forward
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This website will remain online as a portfolio piece and technology showcase. The interactive demos,
              feature descriptions, and technical capabilities displayed here represent the culmination of our work
              and serve as documentation of what we accomplished.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We believe in the future of 3D e-commerce and hope that the work we've done contributes in some way
              to the broader ecosystem of immersive shopping experiences.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 bg-gradient-to-r from-diffstudio-orange to-diffstudio-red bg-clip-text text-transparent">
              Thank You
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To our supporters, early adopters, advisors, and everyone who believed in our vision: we are deeply grateful.
              Building DiffStudio has been an incredible learning experience, and your encouragement made it meaningful.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              While this chapter is closing, the innovations in 3D visualization technology continue to advance,
              and we're excited to see how the industry evolves.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions or would like to discuss our technology, please feel free to reach out:
            </p>
            <p className="font-medium my-4 text-gray-900">
              Email: <a href="mailto:contact@diffstudio.co" className="text-diffstudio-blue hover:underline">contact@diffstudio.co</a>
            </p>

            <Separator className="my-8" />

            <p className="text-center text-gray-600 italic">
              Thank you for being part of the DiffStudio story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
