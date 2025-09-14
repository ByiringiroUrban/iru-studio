import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsConditions = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-studio-navy mb-6">Terms and Conditions</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        These Terms and Conditions govern your use of Frame & Tune Studio's website and services. By accessing or using our services, you agree to be bound by these terms.
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-4 mb-8">
        <li>All content and media are the property of Frame & Tune Studio unless otherwise stated.</li>
        <li>Users must not misuse the website or attempt to access restricted areas.</li>
        <li>We reserve the right to suspend or terminate accounts for violations.</li>
        <li>For more details, please <Link to="/contact" className="text-primary underline">contact us</Link>.</li>
      </ul>
      <Button as={Link} to="/" className="bg-primary text-primary-foreground">Back to Home</Button>
    </div>
  </div>
);

export default TermsConditions;
