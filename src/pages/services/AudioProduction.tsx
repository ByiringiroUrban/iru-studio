import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, Music, Mic, Volume2, Headphones, Settings, CheckCircle } from 'lucide-react';
import audioService from '@/assets/audio-service.jpg';
import PricingModal from '@/components/PricingModal';
import { pricingData, type ServiceCategory } from '@/data/pricing';

const AudioProduction = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const audioData = pricingData.find(service => service.service === 'audio');
  
  const openPricingModal = (categoryId: string) => {
    const category = audioData?.categories.find(cat => cat.id === categoryId);
    if (category) {
      setSelectedCategory(category);
      setIsModalOpen(true);
    }
  };

  const services = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music Production",
      description: "Complete music production services",
      categoryId: "music-production"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Podcast Recording",
      description: "Professional podcast production",
      categoryId: "podcast-recording"
    },
    {
      icon: <Volume2 className="w-6 h-6" />,
      title: "Voiceover Services",
      description: "Professional voiceover recording",
      categoryId: "voiceover-services"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Sound Design for Video",
      description: "Custom sound design and audio effects",
      categoryId: "sound-design"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Mixing and Mastering",
      description: "Professional audio mixing and mastering",
      categoryId: "mixing-mastering"
    }
  ];

  const whyChooseUs = [
    "Experienced team",
    "State-of-art equipment",
    "Customized solutions",
    "Versatile services",
    "Commitment to excellence"
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
            <span className="text-gray-600">Audio Production</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-6">Audio Production</h1>
          <p className="text-2xl text-primary font-semibold mb-4">Crafting Exceptional Soundscapes to Amplify Your Vision</p>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our state-of-the-art audio production facility offers comprehensive sound services for music, 
            podcasts, voiceovers, and multimedia projects. From recording to final mastering, we deliver 
            crystal-clear audio that enhances your creative vision.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-xl">
          <img 
            src={audioService} 
            alt="Professional audio production services"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Services Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">Our Audio Production Services</h2>
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

        {/* Studio Features */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">Our Studio Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-studio-navy mb-2">Acoustically Treated</h3>
              <p className="text-gray-600">Professional acoustic treatment ensures pristine recording conditions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Settings className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-studio-navy mb-2">Pro Equipment</h3>
              <p className="text-gray-600">Industry-standard microphones, preamps, and monitoring systems.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Music className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-studio-navy mb-2">Versatile Setup</h3>
              <p className="text-gray-600">Flexible studio configuration for solo artists, bands, and voice recordings.</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-studio-navy mb-8 text-center">
            Why Choose Frame and Tune Studio for Audio Production?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing Audio?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get Started on Your Audio Project Today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3">
                Book Your Session
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
          service="audio"
        />
      )}
    </div>
  );
};

export default AudioProduction;