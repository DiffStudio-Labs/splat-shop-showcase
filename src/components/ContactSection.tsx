
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "pre-launch", // Set default subject to pre-launch
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormState({
      ...formState,
      subject: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formState.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    // Message length validation
    if (formState.message.length < 10) {
      toast({
        title: "Error",
        description: "Message must be at least 10 characters long",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    setIsLoading(true);

    // Initialize EmailJS
    emailjs.init("yXW6dOUMMhBYkTH05");

    // Prepare template parameters
    const templateParams = {
      from_name: formState.name,
      email: formState.email,
      company: formState.company,
      subject: formState.subject,
      message: formState.message,
      to_name: "DiffStudio"
    };

    // Send email
    emailjs.send("service_5jj1zzu", "template_2g033mt", templateParams)
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Message sent!",
          description: `Thank you ${formState.name} for contacting us! We'll get back to you soon.`,
          duration: 5000
        });
        // Reset form
        setFormState({
          name: "",
          email: "",
          company: "",
          subject: "pre-launch",
          message: ""
        });
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsLoading(false);
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
          duration: 5000
        });
      });
  };

  return <section id="contact" className="py-20 relative hero-gradient">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-30 z-0">
        <div className="absolute top-[30%] right-[15%] w-80 h-80 rounded-full bg-diffstudio-red blur-[100px]"></div>
        <div className="absolute bottom-[20%] left-[5%] w-64 h-64 rounded-full bg-diffstudio-purple blur-[80px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Have questions about our platform, interested in our hands-on <strong>Pre-Launch 3D Modeling Services</strong>, or need to get in touch with our team? Fill out the form below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm text-gray-200">Full Name</label>
                <Input id="name" name="name" placeholder="Your name" value={formState.name} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-gray-200">Email Address</label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" value={formState.email} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="company" className="text-sm text-gray-200">Company Name</label>
                <Input id="company" name="company" placeholder="Your company" value={formState.company} onChange={handleChange} className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm text-gray-200">Subject</label>
                <Select defaultValue="pre-launch" value={formState.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pre-launch">Pre-launch Services</SelectItem>
                    <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                    <SelectItem value="pricing">Pricing Information</SelectItem>
                    <SelectItem value="technical">Technical Questions</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm text-gray-200">Message</label>
              <Textarea id="message" name="message" placeholder="How can we help you?" rows={6} value={formState.message} onChange={handleChange} required className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" />
            </div>

            <div className="text-center">
              <Button type="submit" disabled={isLoading} className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white px-8 py-6" size="lg">
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md mx-auto">
          <div className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-300">contact@diffstudio.co</p>
          </div>
          <div className="p-6 text-center">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.5 12H16c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-1.5"></path>
                <path d="M16 14h-2"></path>
                <path d="M16 18h-2"></path>
                <rect width="8" height="10" x="2" y="2" rx="2"></rect>
                <path d="M6 6h.01"></path>
                <path d="M6 10h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
