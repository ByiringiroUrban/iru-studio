import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4" />
            <Link to="/" className="text-studio-navy hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Who We Are</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-8">Who We Are</h1>

          {/* Intro Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-studio-navy mb-6">Welcome to Frame and Tune Studio!</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p>
                Frame and Tune Studio is a creative powerhouse dedicated to delivering world-class multimedia services. 
                From breathtaking visuals to immersive audio experiences, we bring ideas to life with innovation, passion, and precision.
              </p>
              <p>
                At Frame & Tune Studio, we specialize in designing visual and sonic masterpieces through innovative photography, 
                videography, and audio production services. From capturing precious moments through photography and videography to 
                designing your dream website, we offer a full range of services for all your creative endeavors. Our talented team 
                of creatives is dedicated to capturing moments that resonate deeply with our clients.
              </p>
              <p className="font-semibold text-studio-navy">
                Welcome to Frame and Tune Studio!
              </p>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-studio-navy mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the multimedia industry by blending creativity and technology to craft exceptional 
                visual, auditory, and design experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold text-studio-navy mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Rwanda's premier creative studio, known for elevating the art of visual storytelling and 
                delivering unforgettable creative experiences.
              </p>
            </div>
          </div>

          {/* What Makes Us Different */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-studio-navy mb-8">What Makes Us Different</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Expertise & Passion</h3>
                <p className="text-gray-600">
                  Our team combines technical skills with artistic passion to produce professional results.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Tailored to Your Needs</h3>
                <p className="text-gray-600">
                  We listen to your goals and craft solutions that fit your brand and budget.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-bold text-studio-navy mb-3">High-Quality Production</h3>
                <p className="text-gray-600">
                  We use proven workflows and quality control to deliver outstanding final assets.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Comprehensive Services</h3>
                <p className="text-gray-600">
                  From pre-production to post-production, we cover the whole creative process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Professional Studio Spaces</h3>
                <p className="text-gray-600">
                  Our facilities are equipped for photography, video, audio, and creative workshops.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link to="/contact">
              <Button className="bg-studio-navy text-white hover:bg-studio-navy/90 px-8 py-3 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;