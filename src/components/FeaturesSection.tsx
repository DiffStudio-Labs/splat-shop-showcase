
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Check, Layers, Palette, BarChart3, Smartphone, Lightbulb } from "lucide-react";

const features = [
  {
    icon: <Lightbulb />,
    title: "Advanced 3D Rendering",
    description: "State-of-the-art technology that creates high-quality digital twins of your products with photorealistic details."
  },
  {
    icon: <Check />,
    title: "One-Click Integration",
    description: "Seamlessly integrate with your existing e-commerce platform with our simple plugins and APIs."
  },
  {
    icon: <Layers />,
    title: "Interactive Product Experiences",
    description: "Let customers interact with products in real-time, zooming, rotating, and exploring every detail."
  },
  {
    icon: <Palette />,
    title: "Customizable Display Options",
    description: "Tailor the viewer to match your brand's aesthetic with flexible customization options."
  },
  {
    icon: <BarChart3 />,
    title: "Analytics Dashboard",
    description: "Get comprehensive insights to understand customer behavior and optimize your 3D product presentations."
  },
  {
    icon: <Smartphone />,
    title: "Multi-Platform Support",
    description: "Your 3D products work flawlessly across all devices - desktop, mobile, and tablets."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DiffStudio?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform offers cutting-edge features designed to revolutionize how your customers experience products online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-diffstudio-teal/30 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-diffstudio-red to-diffstudio-orange flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
