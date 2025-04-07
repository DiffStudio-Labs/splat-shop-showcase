
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { sendContactEmail } from "./contactService";
import { validateContactForm } from "./formValidation";

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const [formState, setFormState] = useState<FormState>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateContactForm(formState);
    if (validationError) {
      toast({
        title: "Error",
        description: validationError,
        variant: "destructive",
        duration: 3000
      });
      return;
    }

    setIsLoading(true);

    try {
      await sendContactEmail(formState);
      
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
    } catch (error) {
      console.error('Email sending error:', error);
      setIsLoading(false);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm text-gray-200">Full Name</label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Your name" 
            value={formState.name} 
            onChange={handleChange} 
            required 
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-gray-200">Email Address</label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="your.email@example.com" 
            value={formState.email} 
            onChange={handleChange} 
            required 
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" 
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm text-gray-200">Company Name</label>
          <Input 
            id="company" 
            name="company" 
            placeholder="Your company" 
            value={formState.company} 
            onChange={handleChange} 
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" 
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm text-gray-200">Subject</label>
          <Select 
            defaultValue="pre-launch" 
            value={formState.subject} 
            onValueChange={handleSelectChange}
          >
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
        <Textarea 
          id="message" 
          name="message" 
          placeholder="How can we help you?" 
          rows={6} 
          value={formState.message} 
          onChange={handleChange} 
          required 
          className="bg-white/10 border-white/20 text-white placeholder:text-gray-300" 
        />
      </div>

      <div className="text-center">
        <Button 
          type="submit" 
          disabled={isLoading} 
          className="bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white px-8 py-6" 
          size="lg"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
