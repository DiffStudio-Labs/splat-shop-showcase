import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
const demoProducts = [{
  id: "product1",
  name: "Designer Chair",
  description: "Explore our ergonomic designer chair from every angle with our interactive 3D model."
}, {
  id: "product2",
  name: "Smart Watch",
  description: "Examine the details of our latest smartwatch with interactive controls and animations."
}, {
  id: "product3",
  name: "Running Shoes",
  description: "See these performance running shoes from all angles and explore their features."
}];
const DemoSection = () => {
  const [activeTab, setActiveTab] = useState("product1");
  return <section id="demo" className="py-20 relative hero-gradient">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 z-0">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-diffstudio-teal blur-[80px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-diffstudio-orange blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">See It In Action</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Experience the power of our 3D product visualization technology with these interactive demos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="product1" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              {demoProducts.map(product => <TabsTrigger key={product.id} value={product.id} className="data-[state=active]:bg-white/10 data-[state=active]:text-white">
                  {product.name}
                </TabsTrigger>)}
            </TabsList>
            
            {demoProducts.map(product => <TabsContent key={product.id} value={product.id}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <div className="aspect-square rounded-xl overflow-hidden glass-card">
                      {/* This would be your 3D product viewer in production */}
                      <div className="w-full h-full bg-gradient-to-br from-diffstudio-purple/70 to-diffstudio-blue/70 flex items-center justify-center p-6">
                        <div className="text-center">
                          <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="animate-spin-slow">
                              <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c-4.97 0-9-4.03-9-9m9 9a9 9 0 0 0 0-18"></path>
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-white">{product.name}</h3>
                          <p className="text-gray-200 mb-4">Interactive 3D Model</p>
                          <p className="text-sm text-white/60">
                            (Demo visualization - in the live product your 3D model would appear here)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">{product.name}</h3>
                    <p className="text-gray-200 mb-6">{product.description}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 text-white">Key Benefits:</h4>
                      <ul className="space-y-2 text-gray-200">
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          360° view of the product
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          Zoom in to see details
                        </li>
                        <li className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-diffstudio-teal">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          Interactive features
                        </li>
                      </ul>
                    </div>
                    <Button className="bg-white hover:bg-white/90 text-diffstudio-purple">
                      Learn More
                    </Button>
                  </div>
                </div>
              </TabsContent>)}
          </Tabs>
        </div>
      </div>
    </section>;
};
export default DemoSection;