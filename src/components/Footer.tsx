
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const basePath = import.meta.env.BASE_URL;
  const { toast } = useToast();
  
  const handleUnavailableLink = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: `Our ${linkName} page is coming soon! We're just getting started.`,
      duration: 3000,
    });
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img 
                src={`${basePath}lovable-uploads/diffstudio-logo.svg`} 
                alt="DiffStudio Logo" 
                className="h-12 w-auto"
              />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-diffstudio-red via-diffstudio-orange to-diffstudio-teal">
                DiffStudio
              </span>
            </Link>
            <p className="text-gray-400 mb-4">
              Transforming e-commerce with interactive 3D product experiences.
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <Mail className="text-gray-400 h-5 w-5" />
              <a href="mailto:contact@diffstudio.co" className="text-gray-400 hover:text-white">
                contact@diffstudio.co
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" onClick={(e) => handleUnavailableLink(e, "Facebook")} className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" onClick={(e) => handleUnavailableLink(e, "Twitter")} className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" onClick={(e) => handleUnavailableLink(e, "Instagram")} className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" onClick={(e) => handleUnavailableLink(e, "LinkedIn")} className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
              <li><a href="#integrations" className="text-gray-400 hover:text-white">Integrations</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-white">Demo</a></li>
              <li><a href="#" onClick={(e) => handleUnavailableLink(e, "Pricing")} className="text-gray-400 hover:text-white">Pricing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#faq" className="text-gray-400 hover:text-white">FAQ</a></li>
              <li><a href="#" onClick={(e) => handleUnavailableLink(e, "Documentation")} className="text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" onClick={(e) => handleUnavailableLink(e, "Blog")} className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="#" onClick={(e) => handleUnavailableLink(e, "Tutorials")} className="text-gray-400 hover:text-white">Tutorials</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" onClick={(e) => handleUnavailableLink(e, "About Us")} className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><a href="#" onClick={(e) => handleUnavailableLink(e, "Terms of Service")} className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2025 DiffStudio Labs LLC. All rights reserved.</p>
          <div>
            <a href="#waitlist" className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
