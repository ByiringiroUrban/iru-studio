import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { ServiceIconTile } from '@/components/icons';
import photographyService from '@/assets/photography-service.jpg';
import videographyService from '@/assets/videography-service.jpg';
import editingService from '@/assets/editing-service.jpg';
import audioService from '@/assets/audio-service.jpg';
import projectsGraphicDesign from '@/assets/projects-graphic-design.jpg';

const ServicesLanding = () => {
  const services = [
    {
      title: "Arts & Creative Design",
      excerpt: "Innovative designs that push the boundaries of artistic expression.",
      image: projectsGraphicDesign,
      link: "/services/arts-creative-design"
    },
    {
      title: "Editing & Retouching",
      excerpt: "Transforming your visuals to unleash their true potential.",
      image: editingService,
      link: "/services/editing-retouching"
    },
    {
      title: "Photography",
      excerpt: "Capture life's unforgettable moments with Frame and Tune Studio. From professional portraits and event photography...",
      image: photographyService,
      link: "/services/photography"
    },
    {
      title: "Videography",
      excerpt: "Bringing your vision to life with cinematic excellence and storytelling.",
      image: videographyService,
      link: "/services/videography"
    },
    {
      title: "Audio Production",
      excerpt: "Crafting exceptional soundscapes to amplify your vision.",
      image: audioService,
      link: "/services/audio-production"
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
            <span className="text-gray-600">Services</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-6">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of creative services designed to bring your vision to life. 
            From photography and videography to audio production and artistic design, we have the expertise 
            to handle all your multimedia needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <img src={editingService} alt="Arts & Creative Design" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-3">Arts & Creative Design</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Innovative designs that push the boundaries of artistic expression and bring your creative concepts to life.
              </p>
              <Link to="/services" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Read More →
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md">
              <ServiceIconTile icon="creative" size={32} />
            </div>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <img src={editingService} alt="Editing and Retouching Services" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-3">Editing and Retouching Services</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Professional editing and retouching services that bring out the very best in your content.
              </p>
              <Link to="/services/editing-retouching" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Read More →
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md">
              <ServiceIconTile icon="editing" size={32} />
            </div>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <img src={photographyService} alt="Photography Services" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-3">Photography Services</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Frame and Tune Studio, your go-to photography partner in Rwanda. Professional portraits and event photography.
              </p>
              <Link to="/services/photography" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Read More →
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md">
              <ServiceIconTile icon="photography" size={32} />
            </div>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <img src={videographyService} alt="Videography Services" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-3">Videography Services</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Transform memorable events into cinematic productions with frames and tunes studio.
              </p>
              <Link to="/services/videography" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Read More →
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md">
              <ServiceIconTile icon="videography" size={32} />
            </div>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
            <img src={audioService} alt="Audio Production" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-studio-navy mb-3">Audio Production</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Frame and Tune Studio, we specialize in delivering professional audio production services that elevate.
              </p>
              <Link to="/services/audio-production" className="text-primary font-medium hover:text-primary/80 transition-colors">
                Read More →
              </Link>
            </div>
            <div className="absolute bottom-4 right-4 bg-white rounded-lg p-3 shadow-md">
              <ServiceIconTile icon="audio" size={32} />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary to-purple-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can bring your creative vision to life with our professional services.
          </p>
          <Link 
            to="/contact"
            className="inline-block bg-white text-primary px-8 py-3 rounded-2xl font-medium hover:bg-gray-100 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesLanding;