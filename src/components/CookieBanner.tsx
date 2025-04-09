
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      // If no choice has been made, show the banner
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    // Allow analytics to run
    window.gtag?.("consent", "update", {
      analytics_storage: "granted",
    });
    trackEvent("cookie_consent", "accept");
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
    // Disable analytics
    window.gtag?.("consent", "update", {
      analytics_storage: "denied",
    });
    // We still track this specific event
    trackEvent("cookie_consent", "decline");
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-lg md:flex md:items-center md:justify-between">
      <div className="mb-4 md:mb-0 md:mr-4 md:max-w-[70%]">
        <p className="text-sm text-gray-700">
          We use cookies to analyze our website traffic and optimize your website experience. 
          By accepting our use of cookies, your data will be collected for analytics purposes only.
          See our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a> for more information.
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <Button
          variant="outline"
          size="sm"
          onClick={declineCookies}
          className="border-gray-300 text-gray-700 hover:bg-gray-100"
        >
          Decline
        </Button>
        <Button
          size="sm"
          onClick={acceptCookies}
          className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white"
        >
          Accept
        </Button>
        <button
          onClick={declineCookies}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close cookie banner"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
