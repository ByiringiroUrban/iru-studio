import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4" />
            <Link to="/" className="text-studio-navy hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Why Choose Us</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-8">
            Why choose FRAME AND TUNES STUDIO
          </h1>

          {/* Intro */}
          <div className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              Frame and Tune Studio brings together a diverse team of creatives to deliver custom multimedia solutions. 
              We emphasize quality, creativity, and client collaboration to ensure every project is uniquely tailored 
              and professionally executed.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Customized Solutions for Every Client</h3>
                <p className="text-gray-600 leading-relaxed">
                  We create packages and workflows that match client goals and budgets. Every project is tailored 
                  to meet your specific requirements and deliver results that exceed expectations.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Experienced & Skilled Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our multidisciplinary team includes photographers, videographers, editors, sound engineers and designers. 
                  Each team member brings years of experience and specialized expertise to your project.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">High-Quality Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on craft, color, audio fidelity, and storytelling. Our commitment to quality ensures 
                  that every deliverable meets professional standards and serves your creative vision.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Affordable & Transparent Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear pricing with packages and add-ons to suit needs. No hidden fees or surprise costs - 
                  we believe in transparent, fair pricing that provides excellent value for professional services.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">End-to-End Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  From concept to delivery, we support every step. Our comprehensive approach means you have 
                  a dedicated team guiding your project from initial planning through final delivery.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  Successful projects across events, businesses, and artists. Our portfolio demonstrates 
                  consistent quality and client satisfaction across diverse industries and project types.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;