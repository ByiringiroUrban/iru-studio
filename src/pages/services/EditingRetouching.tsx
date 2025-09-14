import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Image, Video, Palette, CheckCircle } from 'lucide-react';
import editingService from '@/assets/editing-service.jpg';
import PricingModal from '@/components/PricingModal';
import { pricingData, type ServiceCategory } from '@/data/pricing';

const EditingRetouching = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editingData = pricingData.find(service => service.service === 'editing');
  
  const openPricingModal = (categoryId: string) => {
    const category = editingData?.categories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const services = [
    {
      icon: <Image className="w-6 h-6" />,
      title: "Photo Retouching & Enhancement",
      description: "Portrait, Product, Event photo enhancement",
      categoryId: "photo-retouching"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Editing",
      description: "Sequencing, sound mixing, color, effects",
      categoryId: "video-editing"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Color Grading",
      description: "Professional color correction and grading",
      categoryId: "color-grading"
    }
  ];

  const whyChooseUs = [
    "Expert technicians",
    "State-of-art software",
    "Customized services",
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
            <span className="text-gray-600">Editing & Retouching</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-6">Editing & Retouching</h1>
          <p className="text-2xl text-primary font-semibold mb-4">Transforming Your Visuals to Unleash Their True Potential</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our professional editing and retouching services enhance your images and videos, bringing out their best 
            qualities while maintaining natural authenticity. From subtle enhancements to dramatic transformations, 
            we have the skills to make your visuals shine.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={editingService} 
            alt="Professional editing and retouching services"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">Our Editing & Retouching Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-card">
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

        {/* Process Section */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-studio-navy mb-2">Analysis</h3>
              <p className="text-gray-600">We carefully analyze your raw materials to identify enhancement opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-studio-navy mb-2">Enhancement</h3>
              <p className="text-gray-600">Using professional tools and techniques to bring out the best in your visuals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-studio-navy mb-2">Delivery</h3>
              <p className="text-gray-600">Final delivery in your preferred formats, ready for immediate use.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">
            Why Choose Frame & Tune for Editing & Retouching?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-card">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Your Visuals Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the Power of Professional Editing & Retouching
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Get Started
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
          service="editing"
        />
      )}
    </div>
  );
};

export default EditingRetouching;