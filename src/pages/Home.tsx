import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Star, Play, Phone, Camera, Video, Folder, Settings, Palette, Users, Target, Cog, Gem, Handshake, DollarSign, Trophy, Edit3 } from 'lucide-react';
import { ServiceIconTile } from '@/components/icons';
import heroBg from '@/assets/hero-bg.jpg';
import photographyService from '@/assets/photography-service.jpg';
import editingService from '@/assets/editing-service.jpg';
import videographyService from '@/assets/videography-service.jpg';
import audioService from '@/assets/audio-service.jpg';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleHover } from '@/lib/animations';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Welcome to Frame and Tunes Studio, we are dedicated to bringing your creative visions to life...",
      subtitle: "Your Creative Studio for Photography, Videography, and Art in Rwanda",
      buttonText: "Start Your Journey",
      buttonLink: "/about/who-we-are"
    },
    {
      title: "Comprehensive Creative Services",
      subtitle: "From photography and videography to audio production and art creation, we offer a full spectrum of creative services under one roof.",
      buttonText: "Explore Our Services",
      buttonLink: "/services"
    },
    {
      title: "Expert Team of Professionals",
      subtitle: "Our team consists of highly skilled professionals in various fields of creativity. Whether you need a photographer, videographer, music producer, or designer, we bring specialized skills and a collaborative mindset to every project, ensuring you get the best results.",
      buttonText: "Meet Our Team",
      buttonLink: "/about/our-team"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Link to={heroSlides[currentSlide].buttonLink}>
              <Button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-3 text-lg">
                {heroSlides[currentSlide].buttonText}
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white z-20"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white z-20"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Control Panel */}
        <div className="absolute top-4 right-4 flex space-x-2 z-20">
          <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center text-white cursor-pointer hover:bg-black/70">
            <Camera className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center text-white cursor-pointer hover:bg-black/70">
            <Video className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center text-white cursor-pointer hover:bg-black/70">
            <Folder className="w-4 h-4" />
          </div>
          <div className="w-8 h-8 bg-black/50 rounded flex items-center justify-center text-white cursor-pointer hover:bg-black/70">
            <Settings className="w-4 h-4" />
          </div>
        </div>
      </section>

      {/* Experience Banner */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold">5</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Years Working Experience</h2>
          </div>
          <p className="text-xl">Your Creative Studio for Photography, Videography, and Art in Rwanda</p>
        </div>
      </section>

      {/* Mission and Vision - Matching the uploaded image design */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header Badge */}
          <div className="text-center mb-8">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium mb-6">
              YOUR CREATIVE STUDIO FOR PHOTOGRAPHY, VIDEOGRAPHY AND ART IN RWANDA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-studio-navy mb-6">
              Crafting Memories, One Frame at a Time
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Frame and Tune Studio, we are passionate about capturing and creating beautiful moments. 
              Based in Rwanda, our studio specializes in professional photography, cinematic videography, 
              expert audio production, and immersive art experiences.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Image with Experience Badge */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={videographyService} 
                  alt="Professional video equipment" 
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-6 left-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">5</span>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-studio-navy">Years</div>
                        <div className="text-sm text-gray-600">Working Experience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Mission and Vision */}
            <div className="space-y-8">
              {/* Our Mission */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-studio-navy mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Empowering creators in the middle of the Live Learn Studio experience as the Internal regional production Sound Amplifier for your Projects and Services.
                  </p>
                </div>
              </div>

              {/* Our Vision */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-studio-navy mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be Rwanda's premier creative studio, known for elevating the art of visual storytelling. From. We aim to set the standard for quality and innovation in the industry, becoming a trusted partner for clients seeking exceptional multimedia and artistic experiences.
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                  READ MORE →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Why choose us</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              At Frame and Tune Studio, we offer more than just creative services—we 
              provide a holistic and personalized experience designed to bring your unique 
              vision to life. Here's what makes us your ideal creative partner:
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.12, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">Comprehensive Creative Services</h3>
              <p className="text-gray-600 text-sm">
                We offer a full spectrum of creative services including photography, videography, 
                audio production, and art creation, all under one roof.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">Expert Team of Professionals</h3>
              <p className="text-gray-600 text-sm">
                Our team consists of highly skilled and passionate professionals who are experienced 
                about their craft. Whether you need a photographer, videographer, music producer.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">Tailored Solutions for Every Client</h3>
              <p className="text-gray-600 text-sm">
                We believe that every project is unique. That's why we take the time to 
                listen to your specific needs and goals.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">State-of-the-Art Equipment</h3>
              <p className="text-gray-600 text-sm">
                At Frame and Tune Studio, we use only the latest and most advanced 
                equipment in the industry. From high-end cameras and professional audio gear.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">Passion for Quality and Creativity</h3>
              <p className="text-gray-600 text-sm">
                We believe that creativity and quality go hand in hand. Our clients trust us to deliver 
                not just technically excellent results, but also creative and unique results.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">Collaborative Approach</h3>
              <p className="text-gray-600 text-sm">
                We believe in true collaborative approach. Throughout the creative journey, we keep you 
                involved and informed, ensuring that your vision is reflected at every step.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">Affordable & Flexible</h3>
              <p className="text-gray-600 text-sm">
                High-quality creative services shouldn't break the bank. We offer flexible pricing options 
                that make our expertise accessible to companies of all sizes.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center bg-white p-6 rounded-2xl shadow-card" whileHover="hover" initial="rest" animate="rest">
              <motion.div variants={scaleHover} className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" aria-hidden="true" />
              </motion.div>
              <h3 className="text-xl font-bold text-studio-navy mb-3">Proven Track Record</h3>
              <p className="text-gray-600 text-sm">
                With years of experience and a diverse portfolio of successful projects, we have 
                built a reputation for excellence in the creative industry.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-studio-navy mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do. They shape our creative process and our client experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Creativity</h3>
              <p className="text-gray-600 text-sm">
                We believe that creativity is the heart of everything we do. We encourage innovative 
                thinking and creative exploration to produce content that stands out.
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">Quality</h3>
              <p className="text-gray-600 text-sm">
                Our aim is to provide the highest quality service. We pay meticulous attention 
                to the fine graded professional and ensure that our results meet and exceed expectations.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-purple-600 mb-3">Integrity</h3>
              <p className="text-gray-600 text-sm">
                We conduct every aspect with honesty and transparency. Our clients can trust 
                us to deliver what we promise, on time and within budget.
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-bold text-orange-600 mb-3">Collaboration</h3>
              <p className="text-gray-600 text-sm">
                We believe in the power of collaboration. We work closely with our clients, 
                bringing together different perspectives to create something truly special.
              </p>
            </div>

            <div className="text-center p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-3">Passion</h3>
              <p className="text-gray-600 text-sm">
                Passion drives us to push boundaries and explore new possibilities. 
                We're passionate about our craft and this enthusiasm shows in our work.
              </p>
            </div>

            <div className="text-center p-6 bg-teal-50 rounded-lg">
              <h3 className="text-xl font-bold text-teal-600 mb-3">Innovation</h3>
              <p className="text-gray-600 text-sm">
                We stay at the cutting edge of technology and trends in the industry. 
                We are always looking for new ways to adapt to new trends and technologies.
              </p>
            </div>

            <div className="text-center p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-xl font-bold text-indigo-600 mb-3">Customer Focus</h3>
              <p className="text-gray-600 text-sm">
                Our clients are at the centre of everything we do. Understanding their 
                needs, values and expectations means we deliver personalized service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of creative services to bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-md">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src="/api/placeholder/400/300" alt="Arts & Creative Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 left-4">
                  <ServiceIconTile icon="creative" size={48} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Arts & Creative Design</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Brand Story As Frame and Tune Studio, we understand 
                  that visuals are crucial for effective communication.
                </p>
                <Link to="/services/design" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-md">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src={editingService} alt="Editing and Retouching Services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 left-4">
                  <ServiceIconTile icon="editing" size={48} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Editing and Retouching Services</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Transform your photos and videos into professional works of art with Frame and 
                  Tune Studio.
                </p>
                <Link to="/services/editing" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-md">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src={photographyService} alt="Photography Services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 left-4">
                  <ServiceIconTile icon="photography" size={48} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Photography Services</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Capture life's unforgettable moments with 
                  Frame and Tune Studio. From professional portraits and event photography
                </p>
                <Link to="/services/photography" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-md">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src={videographyService} alt="Videography Services" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 left-4">
                  <ServiceIconTile icon="videography" size={48} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Videography Services</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Transform moments into cinematic stories 
                  with Frame and Tune Studio. Our videography services cover everything
                </p>
                <Link to="/services/videography" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-md">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src={audioService} alt="Audio Production" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute bottom-4 left-4">
                  <ServiceIconTile icon="audio" size={48} />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-studio-navy mb-3">Audio Production</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  At Frame and Tune Studio, we specialize in 
                  delivering professional audio production services that elevate
                </p>
                <Link to="/services/audio" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
                  Read More 
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA - Redesigned to match reference */}
      <section className="py-16 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-700"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">+250 788 894 032</div>
                <div className="text-xl opacity-90">Don't hesitate to reach out to us</div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-2xl font-bold mb-2">Need our Services?</div>
              </div>
              <Button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 font-semibold">
                Read More →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-studio-navy">COMPLETED PROJECTS</h2>
            <div className="flex space-x-2">
              <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-300 via-yellow-300 to-orange-400 h-80 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="absolute top-4 right-12 w-6 h-6 bg-orange-600 rounded-full"></div>
              <div className="absolute top-4 right-20 w-4 h-4 bg-red-500 rounded-full"></div>
              <div className="absolute top-12 right-4 w-6 h-6 bg-orange-600 rounded-full"></div>
              <div className="absolute top-12 right-12 w-6 h-6 bg-red-500 rounded-full"></div>
              <div className="absolute top-12 right-20 w-6 h-6 bg-orange-500 rounded-full"></div>
              <div className="absolute top-20 right-4 w-4 h-4 bg-red-500 rounded-full"></div>

              {/* Laptop mockup */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-64 h-40 bg-gray-800 rounded-lg p-2 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full bg-white rounded overflow-hidden">
                    <img 
                      src="/api/placeholder/300/200" 
                      alt="Graphic Design Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project info overlay */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <div className="text-primary text-sm font-medium mb-1">Graphic Design</div>
                <h3 className="text-lg font-bold text-studio-navy mb-2">Graphic Design</h3>
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors group-hover:rotate-45 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-300 via-purple-300 to-blue-400 h-80 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full"></div>
              <div className="absolute top-4 right-12 w-6 h-6 bg-purple-600 rounded-full"></div>
              <div className="absolute top-4 right-20 w-4 h-4 bg-blue-600 rounded-full"></div>

              {/* Content placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-64 h-40 bg-gray-800 rounded-lg p-2 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full bg-white rounded overflow-hidden">
                    <img 
                      src="/api/placeholder/300/200" 
                      alt="Web Development Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project info overlay */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <div className="text-primary text-sm font-medium mb-1">Web Development</div>
                <h3 className="text-lg font-bold text-studio-navy mb-2">Web Design</h3>
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors group-hover:rotate-45 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-300 via-teal-300 to-green-400 h-80 hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Decorative circles */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-green-500 rounded-full"></div>
              <div className="absolute top-4 right-12 w-6 h-6 bg-teal-600 rounded-full"></div>
              <div className="absolute top-4 right-20 w-4 h-4 bg-green-600 rounded-full"></div>

              {/* Content placeholder */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="w-64 h-40 bg-gray-800 rounded-lg p-2 shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full bg-white rounded overflow-hidden">
                    <img 
                      src="/api/placeholder/300/200" 
                      alt="Branding Project" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Project info overlay */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl p-4 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <div className="text-primary text-sm font-medium mb-1">Brand Identity</div>
                <h3 className="text-lg font-bold text-studio-navy mb-2">Branding</h3>
                <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors group-hover:rotate-45 duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Team members</h2>
            <p className="text-lg text-gray-600">
              Meet the best of our team members ready to serve your team daily
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Manirakiza Augustin" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Social Icons - appear on hover */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-xs font-bold">in</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary text-white text-center">
                <h3 className="font-bold text-lg">MANIRAKIZA Augustin</h3>
                <p className="text-sm text-blue-200">Managing Director</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Anselme Mugisha" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Social Icons - appear on hover */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-xs font-bold">in</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary text-white text-center">
                <h3 className="font-bold text-lg">Anselme MUGISHA</h3>
                <p className="text-sm text-blue-200">Assistant Photographer</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Kanyanzige Pacique" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Social Icons - appear on hover */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-xs font-bold">in</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary text-white text-center">
                <h3 className="font-bold text-lg">KANYANZIGE Pacique</h3>
                <p className="text-sm text-blue-200">Lead Photographer</p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img 
                  src="/api/placeholder/300/400" 
                  alt="Hakizimana Fabrice" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Social Icons - appear on hover */}
                <div className="absolute bottom-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">f</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-sm font-bold">t</span>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                    <span className="text-primary text-xs font-bold">in</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary text-white text-center">
                <h3 className="font-bold text-lg">HAKIZIMANA Fabrice</h3>
                <p className="text-sm text-blue-200">Lead Videographer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-studio-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/api/placeholder/1920/1080)' }}></div>
        <div className="relative z-10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-2">TESTIMONIALS</Badge>
              <h2 className="text-4xl font-bold mb-4">Our Client Feedback</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Samuel NSENGIYUMVA</h3>
                      <p className="text-sm text-gray-300">Marketing Manager, Kigali Innovations</p>
                    </div>
                    <div className="ml-auto text-4xl text-primary opacity-50">"</div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    "We've collaborated with Frame and Tune Studio on multiple projects, and they consistently deliver exceptional results. Their attention to detail and creative vision have elevated our brand significantly."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <h3 className="font-bold">Peter Habimana</h3>
                      <p className="text-sm text-gray-300">Event Coordinator, Rwanda Events Ltd.</p>
                    </div>
                    <div className="ml-auto text-4xl text-primary opacity-50">"</div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-200 leading-relaxed">
                    "Frame and Tune Studio truly stands out in the industry. They covered all our event photography and videography needs with professionalism and creativity that exceeded our expectations."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Publication */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Insights & Publication</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img src="/api/placeholder/400/300" alt="Art passion blog" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-studio-navy mb-3 line-clamp-2">
                  Do you have a passion for art but don't know
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  In the competitive world of business, standing out is crucial.
                </p>
                <Link to="/insights/art-passion" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img src="/api/placeholder/400/300" alt="Business photography blog" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-studio-navy mb-3 line-clamp-2">
                  How to Make Your Business Stand Out with Professional Photography
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  In the competitive world of business, standing out is crucial.
                </p>
                <Link to="/insights/business-photography" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img src="/api/placeholder/400/300" alt="Home decor art blog" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-studio-navy mb-3 line-clamp-2">
                  Creative Ways to Incorporate Art into Your Home Decor
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  Art isn't just for galleries – it's a fantastic way
                </p>
                <Link to="/insights/home-decor-art" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img src="/api/placeholder/400/300" alt="Photography brand story blog" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-studio-navy mb-3 line-clamp-2">
                  The Power of Photography in Telling Your Brand Story
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  In today's digital age, photography has become one of the
                </p>
                <Link to="/insights/photography-brand-story" className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Read More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photography Pricing Packages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-primary">Photography</span>
              <span className="text-studio-orange"> pricing packages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 text-white">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-xs rounded">
                NEW!
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6">Basic Photography Package</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 500,000</div>
                  <div className="text-4xl font-bold">500,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Up to 2 types of photography (choose from Portrait, Event, Product, Business, Corporate, Fashion, Headshots, or Real Estate)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    1 hour session per type
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    20 edited photos in total
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Basic photo editing (color correction, cropping, etc.)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    1 location
                  </li>
                </ul>
                <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">
                  Order now
                </Button>
                <p className="text-xs mt-2 opacity-75">Order now and enjoy promo</p>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-xs rounded">
                HOT!
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6">Standard Photography Plan</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 1,500,000</div>
                  <div className="text-4xl font-bold">1,000,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Up to 4 types of photography (choose from Portrait, Event, Product, Business, Corporate, Fashion, Headshots, or Real Estate)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    2-3 hours session per type
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    50 edited photos in total
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Advanced photo editing (blemish removal, light retouching)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    2 locations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Basic video clips for events (up to 2 minutes)
                  </li>
                </ul>
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                  Click Here
                </Button>
                <p className="text-xs mt-2 opacity-75">Order now</p>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 text-white">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-xs rounded">
                BEST!
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6">Premium Photography Plan</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 2,000,000</div>
                  <div className="text-4xl font-bold">1,800,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Up to 6 types of photography (choose from Portrait, Event, Product, Business, Corporate, Fashion, Headshots, or Real Estate)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    4-5 hours session per type
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    100 edited photos in total
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    High-end photo editing (advanced retouching, background removal, shadow effects)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    3 locations
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Event highlight video (up to 5 minutes)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    High-quality print options for selected photos (e.g., canvas or album)
                  </li>
                </ul>
                <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                  Order now
                </Button>
                <p className="text-xs mt-2 opacity-75">Enjoy the promo</p>
              </CardContent>
            </Card>

            {/* Ultimate Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-500 to-green-700 text-white">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs rounded">
                POPULAR!
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold mb-6">Ultimate Photography Plan</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 3,500,000</div>
                  <div className="text-4xl font-bold">3,000,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Unlimited types of photography (choose as many as needed from Portrait, Event, Product, Business, Corporate, Fashion, Headshots, or Real Estate)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Full-day sessions (up to 8 hours per type)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Unlimited edited photos
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Advanced editing (skin smoothing, high-fashion retouching, detailed color grading)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Unlimited locations (multiple indoor/outdoor setups)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Full video coverage (up to 10 minutes highlight video)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    2 professionally designed photo albums or portfolios
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-300 mr-2">✓</span>
                    Online gallery for sharing and downloading
                  </li>
                </ul>
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                  Order now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;