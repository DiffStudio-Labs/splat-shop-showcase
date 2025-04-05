
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer services to create 3D models before the platform launch?",
    answer: "Yes! We offer a Pre-Launch 3D Modeling Service. Our team can create models for you either remotely (you provide videos following our guides) or via in-person scanning if you're located in the NY, NJ, PA, or surrounding East Coast areas. Please see the dedicated section above for details or contact us and select 'Pre-launch Services' as the subject to discuss your project."
  },
  {
    question: "What is DiffStudio and how does it work?",
    answer: "DiffStudio is a platform that enables e-commerce sellers to create interactive 3D digital twins of their products. Our workflow is simple: upload your product images to our web app, use our editor to refine and enhance the 3D scan, and then publish directly to your e-commerce platform. We transform standard product images into photorealistic 3D models that customers can interact with, explore from any angle, and zoom in to see fine details."
  },
  {
    question: "What e-commerce platforms do you integrate with?",
    answer: "We offer seamless integration with major e-commerce platforms including Shopify, WooCommerce, Adobe Commerce (Magento), Wix, Salesforce Commerce, and BigCommerce. Our platform connects directly with these systems, allowing you to publish your 3D models with just a few clicks without leaving DiffStudio."
  },
  {
    question: "How does the DiffStudio workflow process work?",
    answer: "Our process is straightforward: 1) Upload your product images to our web application, 2) Use our intuitive editor to refine and enhance the 3D scan to ensure perfect accuracy, 3) Publish directly to your connected e-commerce platform with one click. The entire process is designed to be simple and efficient, requiring no technical expertise."
  },
  {
    question: "How long does it take to create a 3D model of my product?",
    answer: "The creation time depends on the complexity of your product. Our advanced GPU-powered processing systems work to create your 3D models efficiently, and once processed, you can access them through our platform to edit and publish to your store."
  },
  {
    question: "What kind of products work best with your platform?",
    answer: "Our technology works exceptionally well with most physical products including furniture, fashion items, electronics, toys, jewelry, and more. Products with complex textures, intricate details, or interactive elements benefit the most from 3D visualization."
  },
  {
    question: "Do I need special equipment or technical skills to use DiffStudio?",
    answer: "No special equipment or technical skills are required. All you need are standard product photos. Our platform handles the complex 3D modeling process, and our editor is designed to be intuitive even for users with no 3D design experience."
  },
  {
    question: "Will my 3D models work on all devices?",
    answer: "Yes! Our 3D viewers are optimized to perform well across all devices including desktop computers, tablets, and mobile phones. We ensure a smooth and responsive experience regardless of screen size or device type."
  },
  {
    question: "Can I customize how the 3D models appear on my store?",
    answer: "Absolutely. Our editor allows you to customize various aspects of how your 3D models appear, including background settings, lighting, initial viewing angle, and interactive controls for your customers."
  },
  {
    question: "When is DiffStudio launching?",
    answer: "We're currently in development and plan to launch in Q3/Q4 of 2025. However, we'll be rolling out beta access earlier for select partners. Join our waitlist to be considered for early beta access and receive exclusive founding member benefits when we launch."
  },
  {
    question: "How much does DiffStudio cost?",
    answer: "We'll offer several pricing tiers to accommodate businesses of different sizes. Pricing details will be announced closer to launch, but waitlist members will receive special founding member rates and benefits."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our platform and services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Have more questions? <a href="#contact" className="text-diffstudio-blue hover:underline">Contact us</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
