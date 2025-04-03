
import { Card, CardContent } from "@/components/ui/card";

const integrations = [
  {
    name: "Shopify",
    logo: "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify_logo_whitebg.png",
    description: "Seamlessly integrate with your Shopify store to enhance product listings with interactive 3D models."
  },
  {
    name: "WooCommerce",
    logo: "https://woocommerce.com/wp-content/uploads/2023/02/woo-logo-portrait.svg",
    description: "Add immersive 3D product experiences to your WordPress WooCommerce store with our plugin."
  },
  {
    name: "Adobe Commerce",
    logo: "https://business.adobe.com/content/dam/dx/us/en/products/commerce/magento-commerce/magento-commerce-product-full-demo-video-posterframe.jpg.img.jpg",
    description: "Enhance your Adobe Commerce (Magento) platform with interactive 3D product visualizations."
  }
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">E-Commerce Integrations</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            DiffStudio seamlessly connects with your favorite e-commerce platforms, making implementation quick and easy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-16 flex items-center justify-center mb-6">
                  <img 
                    src={integration.logo} 
                    alt={`${integration.name} logo`} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{integration.name}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">More integrations coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
