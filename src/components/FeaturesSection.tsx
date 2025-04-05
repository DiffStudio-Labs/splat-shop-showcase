
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Link, Image, BarChart3, Smartphone, Layers } from "lucide-react";

const features = [
  {
    icon: <Image />,
    title: "Photorealistic 3D Displays",
    description: "Create stunning, high-fidelity product visualizations that look indistinguishable from professional photography."
  },
  {
    icon: <Link />,
    title: "Seamless Platform Integration",
    description: "Effortlessly connect with your existing e-commerce platform through our simple plugins and robust APIs."
  },
  {
    icon: <Layers />,
    title: "Interactive Shopping Experience",
    description: "Enable customers to interact with products in real-time, exploring every detail from any angle."
  },
  {
    icon: <Globe />,
    title: "Cross-Platform Consistency",
    description: "Deliver the same exceptional product experience across web, mobile apps, and in-store displays."
  },
  {
    icon: <BarChart3 />,
    title: "Analytics Dashboard",
    description: "Comprehensive insights dashboard with support for popular analytics platforms like Klaviyo, allowing you to understand customer behavior and optimize your 3D product presentations."
  },
  {
    icon: <Smartphone />,
    title: "Native Apps & Mobile Support",
    description: "Reach customers everywhere with dedicated mobile applications and responsive web experiences that work across all devices."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Complete Product Visualization Platform</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform how customers experience your products with our comprehensive visualization platform for web, mobile, and e-commerce.
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
