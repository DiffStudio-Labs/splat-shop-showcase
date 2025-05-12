import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { addToWaitlist } from "@/lib/supabase";
import { trackEvent } from "@/lib/analytics";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Define form validation schema
const waitlistSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(1, "Company is required"),
  message: z.string().optional(),
});

type WaitlistFormValues = z.infer<typeof waitlistSchema>;

const WaitlistSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: WaitlistFormValues) => {
    setIsLoading(true);

    try {
      const result = await addToWaitlist(
        values.email,
        values.name,
        values.company,
        values.message || undefined,
        "main_section"
      );

      if (result.success) {
        // Track successful waitlist signup
        trackEvent("signup", "waitlist", values.email);

        const message =
          result.message ||
          "You've been added to our waitlist. We'll notify you when we launch!";

        toast({
          title: "Success!",
          description: message,
          duration: 5000,
        });

        form.reset();
      } else {
        console.error("Waitlist error:", result.error);
        throw new Error("Failed to add to waitlist");
      }
    } catch (error) {
      console.error("Waitlist submission error:", error);

      // Track failed waitlist attempt
      trackEvent("signup_error", "waitlist", "submission_error");

      toast({
        title: "Something went wrong",
        description:
          "Unable to add you to the waitlist. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 waitlist-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-diffstudio-orange">
              Join Our Waitlist
            </h2>
            <p className="text-lg text-gray-800 max-w-2xl mx-auto font-medium">
              Be among the first to access our platform when we launch. Sign up
              to receive updates and early access opportunities.
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="max-w-md mx-auto space-y-6"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your full name"
                        {...field}
                        className="bg-white/50 border-white/50 text-gray-800 placeholder:text-gray-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your work email"
                        {...field}
                        className="bg-white/50 border-white/50 text-gray-800 placeholder:text-gray-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Company</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your company name"
                        {...field}
                        className="bg-white/50 border-white/50 text-gray-800 placeholder:text-gray-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">
                      Message (Optional)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us how we can help your business"
                        {...field}
                        className="bg-white/50 border-white/50 text-gray-800 placeholder:text-gray-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-diffstudio-red to-diffstudio-orange hover:opacity-90 text-white"
              >
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </Form>

          {/* Benefits Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Early Access */}
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-diffstudio-blue/30 flex items-center justify-center text-diffstudio-blue mx-auto mb-4">
                {/* SVG icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-diffstudio-purple">
                Early Access
              </h3>
              <p className="text-gray-800">
                Get priority access to our platform before public release.
              </p>
            </div>
            {/* Special Pricing */}
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-diffstudio-orange/30 flex items-center justify-center text-diffstudio-orange mx-auto mb-4">
                {/* SVG icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-diffstudio-orange">
                Special Pricing
              </h3>
              <p className="text-gray-800">
                Exclusive founding member pricing and benefits for early adopters.
              </p>
            </div>
            {/* Product Updates */}
            <div className="p-4">
              <div className="w-12 h-12 rounded-full bg-diffstudio-teal/30 flex items-center justify-center text-diffstudio-teal mx-auto mb-4">
                {/* SVG icon */}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-diffstudio-teal">
                Product Updates
              </h3>
              <p className="text-gray-800">
                Stay informed about our latest features and development progress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
