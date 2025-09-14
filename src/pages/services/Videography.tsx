import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Video, Building, Calendar, Film, Smartphone, CheckCircle } from 'lucide-react';
import videographyService from '@/assets/videography-service.jpg';
import PricingModal from '@/components/PricingModal';
import { pricingData, type ServiceCategory } from '@/data/pricing';

const Videography = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videographyData = pricingData.find(service => service.service === 'videography');
  
  const openPricingModal = (categoryId: string) => {
    const category = videographyData?.categories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const services = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Corporate Videos",
      description: "Professional corporate video production",
      categoryId: "corporate-videos"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Coverage",
      description: "Comprehensive event videography",
      categoryId: "event-coverage"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Promotional Videos",
      description: "Marketing and promotional content",
      categoryId: "promotional-videos"
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Documentaries",
      description: "Documentary film production",
      categoryId: "documentaries"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Social Media Content Creation",
      description: "Content optimized for social platforms",
      categoryId: "social-media"
    }
  ];

  const whyChooseUs = [
    "Expert team",
    "High-quality equipment",
    "Customized approach",
    "Versatility across formats",
    "Commitment to quality"
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4" />
            <Link to="/" className="text-studio-navy hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link to="/services" className="text-studio-navy hover:text-primary">Services</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Videography</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-6">Videography Services</h1>
          <p className="text-2xl text-primary font-semibold mb-4">Bringing Your Vision to Life with Cinematic Excellence</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into compelling visual stories with our professional videography services. 
            From corporate communications to creative documentaries, we craft videos that captivate and inspire.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={videographyService} 
            alt="Professional videography services"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">Our Videography Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-card">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <Button
                  onClick={() => openPricingModal(service.categoryId)}
                  variant="outline"
                  className="w-full"
                >
                  View Pricing
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16 bg-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">
            Why choose Frame & Tune for Videography?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Tell Your Story?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you create compelling video content that resonates with your audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Contact Us Today
              </Button>
            </Link>
            <Link to="/pricing">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3">
                View All Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Pricing Modal */}
      {selectedCategory && (
        <PricingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          category={selectedCategory}
          service="videography"
        />
      )}
    </div>
  );
};

export default Videography;