
import emailjs from "emailjs-com";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

/**
 * Sends contact form data using EmailJS
 * @param formData Form data to send
 * @returns Promise resolving when email is sent
 */
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  emailjs.init("yXW6dOUMMhBYkTH05");

  const templateParams = {
    from_name: formData.name,
    email: formData.email,
    company: formData.company,
    subject: formData.subject,
    message: formData.message,
    to_name: "DiffStudio"
  };

  return emailjs.send("service_5jj1zzu", "template_2g033mt", templateParams);
};
