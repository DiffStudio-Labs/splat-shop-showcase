
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 z-0">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-diffstudio-red blur-[80px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 rounded-full bg-diffstudio-blue blur-[100px]"></div>
      </div>
      
      <div className="text-center z-10 px-4">
        <h1 className="text-7xl font-bold mb-6 gradient-text">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
        <p className="text-xl text-gray-200 mb-8 max-w-md mx-auto">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
