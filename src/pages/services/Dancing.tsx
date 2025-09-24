import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Check, PlayCircle } from 'lucide-react';
import dancingService from '@/assets/photography-service.jpg';
import videographyService from '@/assets/videography-service.jpg';
import audioService from '@/assets/audio-service.jpg';

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

      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={videographyService} alt="Dance Hero" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">Dancing Services</h1>
          <p className="text-white/90 max-w-2xl mt-2">Cinematic dance videography, expressive photography, and performance coverage that highlight movement, rhythm, and artistry.</p>
          <div className="mt-4">
            <Link to="/contact" className="inline-flex items-center bg-primary text-primary-foreground px-5 py-2 rounded-md hover:bg-primary/90 transition-colors">
              Book a Session
              <PlayCircle className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Photography */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <img src={dancingService} alt="Dance Photography" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-2">Dance Photography</h3>
                <p className="text-gray-600 text-sm">Striking stills that freeze motion with perfect timing, lighting, and expression.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Studio portrait sessions</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Live performance captures</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Creative editorial concepts</li>
                </ul>
              </div>
            </div>
            {/* Videography */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <img src={videographyService} alt="Dance Videography" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-2">Dance Videography</h3>
                <p className="text-gray-600 text-sm">Cinematic storytelling that elevates choreography and movement.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Choreography video production</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Performance highlights</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Behind-the-scenes edits</li>
                </ul>
              </div>
            </div>
            {/* Audio/Studio */}
            <div className="bg-white rounded-2xl shadow-card overflow-hidden">
              <img src={audioService} alt="Audio Production" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-2">Audio & Sound Design</h3>
                <p className="text-gray-600 text-sm">Original scores, clean audio, and impactful soundscapes for dance videos.</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Music selection & licensing</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Sound design & mix</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Voice-over recording</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to bring your choreography to life?</h2>
          <p className="opacity-90 mb-6">Book a dance-focused photo or video session with Frame & Tune Studio.</p>
          <Link to="/contact" className="inline-block bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-100">Get a Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Dancing;
