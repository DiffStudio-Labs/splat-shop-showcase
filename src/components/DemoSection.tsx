
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const demoProducts = [
  {
    id: "product1",
    name: "Designer Chair",
    description: "Explore our ergonomic designer chair from every angle with our interactive 3D model.",
    viewerUrl: "https://d2g4atlfg3j0t6.cloudfront.net/landing-page/dist/index.html?settings=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/sofa-chair/settings.json&content=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/sofa-chair/scene.compressed.ply"
  }, 
  {
    id: "product2",
    name: "Levi's Jacket",
    description: "Experience our premium denim jacket in stunning detail with our interactive 3D mannequin display.",
    viewerUrl: "https://d2g4atlfg3j0t6.cloudfront.net/landing-page/dist/index.html?settings=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/levis_jacket_macy_newport/settings.json&content=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/levis_jacket_macy_newport/scene.compressed.ply"
  }, 
  {
    id: "product3",
    name: "Elegant Dress",
    description: "View every detail of this elegant dress with our immersive 3D visualization technology.",
    viewerUrl: "https://d2g4atlfg3j0t6.cloudfront.net/landing-page/dist/index.html?settings=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/mfit4-viewer/settings.json&content=https://d2g4atlfg3j0t6.cloudfront.net/landing-page/assets/mfit4-viewer/scene.compressed.ply"
  }
];

const DemoSection = () => {
  const [activeTab, setActiveTab] = useState("product1");
  
  useEffect(() => {
    const handleFullscreen = (event: MessageEvent) => {
      if (event.data === 'requestFullscreen') {
        document.documentElement.classList.add('fullscreen');
      } else if (event.data === 'exitFullscreen') {
        document.documentElement.classList.remove('fullscreen');
      }
    };

    window.addEventListener('message', handleFullscreen);
    return () => window.removeEventListener('message', handleFullscreen);
  }, []);

  return <section id="demo" className="py-20 relative hero-gradient">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 z-0">
        <div className="absolute top-[10%] right-[5%] w-72 h-72 rounded-full bg-diffstudio-teal blur-[80px]"></div>
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 rounded-full bg-diffstudio-orange blur-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Interactive Showcase</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Experience the power of our 3D product visualization technology with these interactive demos.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="product1" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-8 bg-black/20 rounded-md p-1">
              {demoProducts.map(product => (
                <TabsTrigger 
                  key={product.id} 
                  value={product.id} 
                  className="text-gray-300 data-[state=active]:bg-diffstudio-teal data-[state=active]:text-white"
                >
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {demoProducts.map(product => <TabsContent key={product.id} value={product.id}>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                  <div className="lg:col-span-3">
                    <div id="view-experience" className="aspect-square rounded-xl overflow-hidden">
                      <div className="viewer-container w-full h-full">
                        <iframe 
                          id="viewer" 
                          allow="fullscreen"
                          allowFullScreen={true}
                          style={{ 
                            width: '100%', 
                            height: '100%',
                            border: 'none'
                          }}
                          src={product.viewerUrl}
                        />
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
                          Multi-angle view within captured perspectives
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
                          Interactive viewing experience
                        </li>
                      </ul>
                    </div>
                    <a href="#waitlist">
                      <Button className="bg-white hover:bg-white/90 text-diffstudio-purple">
                        Join Waitlist
                      </Button>
                    </a>
                  </div>
                </div>
              </TabsContent>)}
          </Tabs>
        </div>
      </div>
    </section>;
};

export default DemoSection;
