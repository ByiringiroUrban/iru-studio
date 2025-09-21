import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import dancingService from '@/assets/projects-graphic-design.jpg';

const Dancing = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-6 flex items-center space-x-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-primary">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-studio-navy font-medium">Dancing</span>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={dancingService} alt="Dancing Services" className="w-full h-auto object-cover" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-studio-navy mb-4">Dancing Services</h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Capture the rhythm and energy of dance through our professional dance photography and videography services. From studio sessions to live performances, we bring out the passion and artistry in every movement.
              </p>
              <ul className="list-disc ml-6 text-gray-700 space-y-2 mb-8">
                <li>Dance studio photography sessions</li>
                <li>Live performance documentation</li>
                <li>Choreography video production</li>
                <li>Dance competition coverage</li>
                <li>Portfolio and promotional content</li>
                <li>Behind-the-scenes dance videos</li>
              </ul>
              <Link to="/contact" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dancing;
