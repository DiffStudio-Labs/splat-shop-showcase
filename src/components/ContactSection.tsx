
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
    subject: "pre-launch",
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

  const handleUnavailableLink = (e: React.MouseEvent, linkName: string) => {
    e.preventDefault();
    toast({
      title: "Coming Soon",
      description: `Our ${linkName} page is coming soon! We're just getting started.`,
      duration: 3000,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Error",
        description: "Please fill out all required fields",
        variant: "destructive",
        duration: 3000
      });
      return;
    }

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

    emailjs.init("yXW6dOUMMhBYkTH05");

    const templateParams = {
      from_name: formState.name,
      email: formState.email,
      company: formState.company,
      subject: formState.subject,
      message: formState.message,
      to_name: "DiffStudio"
    };

    emailjs.send("service_5jj1zzu", "template_2g033mt", templateParams)
      .then(() => {
        setIsLoading(false);
        toast({
          title: "Message sent!",
          description: `Thank you ${formState.name} for contacting us! We'll get back to you soon.`,
          duration: 5000
        });
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

        <div className="mt-16 text-center mx-auto max-w-md">
          <div className="p-6">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
            <p className="text-gray-300">contact@diffstudio.co</p>
          </div>
        </div>
      </div>
    </section>;
};

export default ContactSection;
