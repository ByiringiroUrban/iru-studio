import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PoliciesTerms = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-studio-navy mb-6">Policies & Terms</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        Welcome to our Policies & Terms page. Here you will find information about our company policies, user agreements, and terms of service. Please read carefully to understand your rights and responsibilities when using our services.
      </p>
      <ul className="list-disc pl-6 text-gray-700 space-y-4 mb-8">
        <li>All users must comply with our code of conduct and respect other members.</li>
        <li>Services are provided as described on our website and may be updated at any time.</li>
        <li>We reserve the right to modify our policies and terms as needed.</li>
        <li>For any questions, please <Link to="/contact" className="text-primary underline">contact us</Link>.</li>
      </ul>
      <Button as={Link} to="/" className="bg-primary text-primary-foreground">Back to Home</Button>
    </div>
  </div>
);

export default PoliciesTerms;
