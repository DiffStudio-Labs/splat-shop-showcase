
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { addToWaitlist } from "@/lib/supabase";

const PersistentWaitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Email validation
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (!emailRegex.test(email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address",
          variant: "destructive",
          duration: 3000
        });
        setIsLoading(false);
        return;
      }
      
      // Add to waitlist with source identifier
      const source = window.innerWidth <= 768 ? 'persistent_mobile' : 'persistent_desktop';
      const result = await addToWaitlist(email, source);
      
      if (result.success) {
        toast({
          title: "Success!",
          description: "You've been added to our waitlist. We'll notify you when we launch!",
          duration: 5000,
        });
        setEmail("");
        // On mobile, collapse the form after successful submission
        if (window.innerWidth <= 768) {
          setIsExpanded(false);
        }
      } else {
        throw new Error('Failed to add to waitlist');
      }
    } catch (error) {
      console.error('Waitlist submission error:', error);
      toast({
        title: "Something went wrong",
        description: "Unable to add you to the waitlist. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // For mobile: toggle the expanded state
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Desktop version - fixed sidebar */}
      <div className="hidden md:block fixed right-0 top-1/2 transform -translate-y-1/2 w-[300px] z-40 mr-4">
        <div className="bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-lg">
          <h4 className="text-xl font-bold mb-2 text-white">Join the Waitlist</h4>
          <p className="text-sm mb-4 text-white/80">Get early access & exclusive pricing.</p>
          
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="your.email@example.com"
              name="waitlist_email_sticky"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-3 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Joining..." : "Join Now"}
            </Button>
          </form>
        </div>
      </div>
      
      {/* Mobile version - fixed bottom with toggle */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40">
        {isExpanded ? (
          <div className="bg-black/90 backdrop-blur-lg p-4 shadow-lg border-t border-white/10 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-bold text-white">Join the Waitlist</h4>
              <button 
                onClick={toggleExpanded}
                className="text-white/70 hover:text-white"
                aria-label="Close waitlist form"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 6-12 12"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            <p className="text-xs mb-3 text-white/80">Get early access & exclusive pricing.</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="your.email@example.com"
                name="waitlist_email_sticky_mobile"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
              />
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Joining..." : "Join Now"}
              </Button>
            </form>
          </div>
        ) : (
          <button
            onClick={toggleExpanded}
            className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange text-white p-3 rounded-t-lg ml-auto mr-4 flex items-center shadow-lg"
            aria-label="Open waitlist form"
          >
            <span>Join Waitlist</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        )}
      </div>
    </>
  );
};

export default PersistentWaitlist;
