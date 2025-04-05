
import { Card, CardContent } from "@/components/ui/card";

const integrations = [
  {
    name: "Shopify",
    logo: "https://cdn.shopify.com/s/files/1/0070/7032/files/shopify_logo_whitebg.png",
  },
  {
    name: "WooCommerce",
    logo: "https://woocommerce.com/wp-content/uploads/2023/02/woo-logo-portrait.svg",
  },
  {
    name: "Adobe Commerce",
    logo: "https://business.adobe.com/content/dam/dx/us/en/products/commerce/magento-commerce/magento-commerce-product-full-demo-video-posterframe.jpg.img.jpg",
  },
  {
    name: "Wix",
    logo: "https://static.wixstatic.com/media/178327_eb89e759b4b84ce6adcf2ef69a509ff8~mv2.png/v1/fill/w_1864,h_1064,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Wix%20logo%20for%20social.png",
  },
  {
    name: "Salesforce Commerce",
    logo: "https://www.salesforce.com/content/dam/web/en_us/www/images/sales-cloud/lightning-for-outlook-sales-cloud-grow-business.png",
  },
  {
    name: "BigCommerce",
    logo: "https://www.bigcommerce.com/assets/logos/bc-logo-dark.svg",
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
          <p className="text-gray-600 text-sm">More integrations coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
