import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Info, X } from "lucide-react";

const ShutdownBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem("shutdownBannerDismissed");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("shutdownBannerDismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-diffstudio-orange to-diffstudio-red shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-white">
            <Info className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm md:text-base font-medium text-center sm:text-left">
              DiffStudio has closed. Thank you for your support.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/announcement">
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 bg-white/10 hover:bg-white/20 text-white hover:text-white"
              >
                Read More
              </Button>
            </Link>
            <button
              onClick={handleDismiss}
              className="p-1 rounded-full hover:bg-white/20 transition-colors text-white"
              aria-label="Dismiss banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShutdownBanner;
