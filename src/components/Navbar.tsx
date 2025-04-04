
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-white/5 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/32039f7f-9674-49b4-8ef3-7f5a43ccd2b3.png" 
              alt="DiffStudio Logo" 
              className="h-10 w-auto"
            />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-diffstudio-red via-diffstudio-orange to-diffstudio-teal">
              DiffStudio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-sm font-medium hover:text-diffstudio-orange transition-colors">Features</a>
            <a href="#integrations" className="text-sm font-medium hover:text-diffstudio-orange transition-colors">Integrations</a>
            <a href="#demo" className="text-sm font-medium hover:text-diffstudio-orange transition-colors">Demo</a>
            <a href="#faq" className="text-sm font-medium hover:text-diffstudio-orange transition-colors">FAQ</a>
            <a href="#waitlist" className="text-sm font-medium hover:text-diffstudio-orange transition-colors">Join Waitlist</a>
            <a href="#contact" className="text-sm font-medium hover:text-diffstudio-orange transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="px-4 py-2 font-medium rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#integrations" 
                className="px-4 py-2 font-medium rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Integrations
              </a>
              <a 
                href="#demo" 
                className="px-4 py-2 font-medium rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#faq" 
                className="px-4 py-2 font-medium rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#waitlist" 
                className="px-4 py-2 font-medium rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Waitlist
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 font-medium rounded-md hover:bg-white/10 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
