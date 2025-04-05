
import { Card, CardContent } from "@/components/ui/card";

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
    name: "Salesforce Commerce",
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {integrations.map((integration, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="h-16 w-full flex items-center justify-center mb-4 bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition-all">
                <img 
                  src={integration.logo} 
                  alt={`${integration.name} logo`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              <p className="text-sm font-medium text-gray-700">{integration.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">These integrations will be released progressively during our beta phase. Join the waitlist for early access.</p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
