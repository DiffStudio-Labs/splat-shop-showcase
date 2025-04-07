
import ContactForm from "./contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative hero-gradient">
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
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
