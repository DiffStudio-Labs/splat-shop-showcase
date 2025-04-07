
type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

/**
 * Validates contact form data
 * @param formState Form data to validate
 * @returns Error message if validation fails, null if validation passes
 */
export const validateContactForm = (formState: FormState): string | null => {
  // Check required fields
  if (!formState.name || !formState.email || !formState.message) {
    return "Please fill out all required fields";
  }

  // Validate email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(formState.email)) {
    return "Please enter a valid email address";
  }

  // Validate message length
  if (formState.message.length < 10) {
    return "Message must be at least 10 characters long";
  }

  // Validation passed
  return null;
};
