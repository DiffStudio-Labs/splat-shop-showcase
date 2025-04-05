
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

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
              src="/lovable-uploads/5e1d0c7d-49ba-4cbb-9b5a-3864ed85e994.png" 
              alt="DiffStudio Logo" 
              className="h-8 w-auto"
            />
            <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-diffstudio-red via-diffstudio-orange to-diffstudio-teal">
              DiffStudio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Features</a>
            <a href="#integrations" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Integrations</a>
            <a href="#demo" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Demo</a>
            <a href="#faq" className="text-sm text-white hover:text-diffstudio-orange transition-colors">FAQ</a>
            <a href="#waitlist" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Join Waitlist</a>
            <a href="#contact" className="text-sm text-white hover:text-diffstudio-orange transition-colors">Contact</a>
          </nav>

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
        <div className="md:hidden fixed inset-0 top-14 z-50 flex flex-col text-white mobile-nav">
          <nav className="flex flex-col p-4">
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
              href="#demo" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              Demo
            </a>
            <a 
              href="#faq" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              FAQ
            </a>
            <a 
              href="#waitlist" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              Join Waitlist
            </a>
            <a 
              href="#contact" 
              className="py-3 px-4 text-lg text-white hover:bg-white/10"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </nav>
          
          <div className="p-4 mt-auto">
            <Button 
              className="w-full bg-gradient-to-r from-diffstudio-red via-diffstudio-orange to-diffstudio-teal hover:opacity-90 text-white py-3"
              onClick={() => {
                window.location.href = "#waitlist";
                handleLinkClick();
              }}
            >
              Join Waitlist
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
