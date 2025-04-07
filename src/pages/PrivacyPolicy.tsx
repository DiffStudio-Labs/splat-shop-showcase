
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  const currentDate = "April 7, 2025";

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-md">
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="mb-4">
                ← Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: {currentDate}</p>
          </div>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p>
              DiffStudio Labs LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>
                <strong>Personal Information:</strong> Information that identifies you such as your name, email address, and company name when you contact us or join our waitlist.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including your IP address, browser type, pages viewed, and time spent on our site.
              </li>
              <li>
                <strong>Marketing Information:</strong> Your preferences in receiving marketing communications from us.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p>We may use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To send you waitlist notifications and product updates</li>
              <li>To respond to your inquiries and communicate with you</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-8 my-4 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to rectify inaccurate personal information</li>
              <li>The right to delete your personal information</li>
              <li>The right to restrict processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal information</li>
            </ul>
            <p>
              To exercise these rights, please contact us at contact@diffstudio.co.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Third-Party Services</h2>
            <p>
              We may use third-party services, such as analytics providers and email service providers, to assist us in operating our website and services. These third parties may have access to your personal information only to perform these tasks on our behalf.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "last updated" date at the top of this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="font-medium my-4">
              Email: contact@diffstudio.co
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
