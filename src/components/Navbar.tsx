
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const basePath = import.meta.env.BASE_URL;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={`${basePath}lovable-uploads/diffstudio-logo.svg`} 
              alt="DiffStudio Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-diffstudio-red via-diffstudio-orange to-diffstudio-teal">
              DiffStudio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-6 mr-6">
              <a href="#how-it-works" className="text-sm text-white hover:text-diffstudio-orange transition-colors">How it Works</a>
              <a href="#showcase" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Showcase</a>
              <a href="#features" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Features</a>
              <a href="#integrations" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Integrations</a>
              <a href="#faq" className="text-sm text-white hover:text-diffstudio-orange transition-colors">FAQ</a>
              <a href="#contact" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Contact</a>
            </nav>
            <a href="#waitlist">
              <Button className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white">
                Join Waitlist
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center h-8 w-8 rounded-md hover:bg-white/10 transition-colors text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed left-0 right-0 top-[60px] min-h-screen z-[100] bg-black/80 backdrop-blur-lg">
          <nav className="flex flex-col p-4 text-white">
            <a 
              href="#how-it-works" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              How it Works
            </a>
            <a 
              href="#showcase" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              Showcase
            </a>
            <a 
              href="#features" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              Features
            </a>
            <a 
              href="#integrations" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              Integrations
            </a>
            <a 
              href="#faq" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              FAQ
            </a>
            <a 
              href="#contact" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              Contact
            </a>
            <a 
              href="#waitlist" 
              className="py-3 px-4 my-2 text-lg text-white bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 rounded-md"
              onClick={handleLinkClick}
            >
              Join Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
