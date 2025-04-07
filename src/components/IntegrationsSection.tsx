
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    name: "Shopify",
    logo: "https://img.logo.dev/shopify.com?token=pk_IR12mFdQQs66gkIq4rYHqQ&retina=true",
  },
  {
    name: "WooCommerce",
    logo: "https://img.logo.dev/woocommerce.com?token=pk_IR12mFdQQs66gkIq4rYHqQ&retina=true",
  },
  {
    name: "Adobe Commerce",
    logo: "https://img.logo.dev/adobe.com?token=pk_IR12mFdQQs66gkIq4rYHqQ&retina=true",
  },
  {
    name: "Wix",
    logo: "https://img.logo.dev/wix.com?token=pk_IR12mFdQQs66gkIq4rYHqQ&retina=true",
  },
  {
    name: "Salesforce",
    logo: "https://img.logo.dev/salesforce.com?token=pk_IR12mFdQQs66gkIq4rYHqQ&retina=true",
  },
  {
    name: "BigCommerce",
    logo: "https://img.logo.dev/bigcommerce.com?token=pk_IR12mFdQQs66gkIq4rYHqQ&retina=true",
  }
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">E-Commerce Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DiffStudio seamlessly connects with your favorite e-commerce platforms, making implementation quick and easy.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square flex items-center justify-center mb-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-2">
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`} 
                  className="w-4/5 h-4/5 object-contain" 
                />
              </div>
              <p className="text-sm font-medium text-gray-700">{integration.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            These integrations will be released progressively during our beta phase. We're also working on additional analytics integrations (Klaviyo, Google Analytics) and marketing tools to enhance your 3D product experience. Join the waitlist for early access.
          </p>
          <Button 
            variant="outline" 
            className="bg-white hover:bg-gray-100" 
            onClick={() => {
              const waitlistSection = document.getElementById('waitlist');
              if (waitlistSection) {
                waitlistSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
