import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Camera, Users, Package, Shirt, Heart } from 'lucide-react';
import photographyService from '@/assets/photography-service.jpg';
import PricingModal from '@/components/PricingModal';
import { pricingData, type ServiceCategory } from '@/data/pricing';

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const photographyData = pricingData.find(service => service.service === 'photography');
  
  const openPricingModal = (categoryId: string) => {
    const category = photographyData?.categories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Event Photography",
      description: "Corporate Events / Private Celebrations / Festivals",
      categoryId: "event-photography"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Portraits & Headshots",
      description: "Professional portraits, headshots for businesses, actors, creatives",
      categoryId: "portraits-headshots"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Product & Commercial Photography",
      description: "Showcase your products with crisp, studio-quality images",
      categoryId: "product-commercial"
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Fashion & Editorial Photography",
      description: "Editorial shoots and lookbooks",
      categoryId: "fashion-editorial"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Weddings & Special Occasions",
      description: "Full coverage and highlight reels",
      categoryId: "weddings-special"
    }
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
            <span className="text-gray-600">Photography</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-6">Photography Services</h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Frame and Tune Studio, your go-to photography partner in Rwanda. Capture life's unforgettable moments 
            with professional portraiture, event coverage, commercial photography and more.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={photographyService} 
            alt="Professional photography services"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
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

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Capture Your Moments?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a session with our professional photographers or learn more about our packages.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Book a Session
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
          service="photography"
        />
      )}
    </div>
  );
};

export default Photography;