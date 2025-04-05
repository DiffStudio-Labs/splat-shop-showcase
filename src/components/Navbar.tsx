
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
            <a href="#features" className="text-sm hover:text-diffstudio-orange transition-colors">Features</a>
            <a href="#integrations" className="text-sm hover:text-diffstudio-orange transition-colors">Integrations</a>
            <a href="#demo" className="text-sm hover:text-diffstudio-orange transition-colors">Demo</a>
            <a href="#faq" className="text-sm hover:text-diffstudio-orange transition-colors">FAQ</a>
            <a href="#waitlist" className="text-sm hover:text-diffstudio-orange transition-colors">Join Waitlist</a>
            <a href="#contact" className="text-sm hover:text-diffstudio-orange transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center justify-center h-8 w-8 rounded-md hover:bg-white/10 transition-colors"
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
        <div className="md:hidden fixed inset-0 z-50 bg-black/95 pt-16">
          <button 
            className="absolute top-3 right-4 p-2 rounded-md"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
            </svg>
          </button>
          
          <div className="container mx-auto p-4">
            <div className="flex flex-col items-center space-y-6 text-center pt-8">
              <Link 
                to="/" 
                className="flex flex-col items-center mb-8"
                onClick={() => setIsMenuOpen(false)}
              >
                <img 
                  src="/lovable-uploads/5e1d0c7d-49ba-4cbb-9b5a-3864ed85e994.png" 
                  alt="DiffStudio Logo" 
                  className="h-12 w-auto mb-2"
                />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-diffstudio-red via-diffstudio-orange to-diffstudio-teal">
                  DiffStudio
                </span>
              </Link>

              <a 
                href="#features" 
                className="text-lg font-medium py-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#integrations" 
                className="text-lg font-medium py-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </a>
              <a 
                href="#demo" 
                className="text-lg font-medium py-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#faq" 
                className="text-lg font-medium py-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#waitlist" 
                className="text-lg font-medium py-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
              <a 
                href="#contact" 
                className="text-lg font-medium py-2 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>

              <Button 
                className="mt-6 w-full max-w-xs bg-gradient-to-r from-diffstudio-red via-diffstudio-orange to-diffstudio-teal hover:opacity-90 text-white"
                onClick={() => {
                  window.location.href = "#waitlist";
                  setIsMenuOpen(false);
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
