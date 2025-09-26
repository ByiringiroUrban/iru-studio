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
import { 
  fadeInUp, 
  staggerContainer, 
  heroText, 
  heroSubtext, 
  heroButtons,
  cardHover,
  scaleHover,
  iconBounce,
  textReveal,
  imageZoom,
  buttonHover,
  scrollReveal,
  scrollSlideLeft,
  scrollSlideRight,
  floating,
  morphing,
  staggerFadeIn,
  slideInFromLeft,
  slideInFromRight,
  scaleIn,
  rotateIn
} from '@/lib/animations';

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
      <section className="relative h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="absolute inset-0 bg-gradient-overlay"></div>
        
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-primary/20 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-studio-orange/30 rounded-full"
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.h1 
              key={currentSlide}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              variants={heroText}
              initial="hidden"
              animate="visible"
            >
              {heroSlides[currentSlide].title}
            </motion.h1>
            <motion.p 
              key={`subtitle-${currentSlide}`}
              className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed"
              variants={heroSubtext}
              initial="hidden"
              animate="visible"
            >
              {heroSlides[currentSlide].subtitle}
            </motion.p>
            <motion.div
              key={`button-${currentSlide}`}
              variants={heroButtons}
              initial="hidden"
              animate="visible"
            >
            <Link to={heroSlides[currentSlide].buttonLink}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-white/10 text-white border border-white/20 hover:bg-white/20 px-8 py-3 text-lg backdrop-blur-sm">
                {heroSlides[currentSlide].buttonText}
              </Button>
                </motion.div>
            </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <motion.button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white z-20 bg-black/20 rounded-full p-2 backdrop-blur-sm"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>
        <motion.button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white z-20 bg-black/20 rounded-full p-2 backdrop-blur-sm"
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              animate={index === currentSlide ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5, repeat: Infinity }}
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
      <motion.section 
        className="bg-primary text-primary-foreground py-16 relative overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          animate={{ 
            background: [
              "linear-gradient(45deg, rgba(79,117,255,0.1) 0%, rgba(255,165,0,0.1) 100%)",
              "linear-gradient(45deg, rgba(255,165,0,0.1) 0%, rgba(79,117,255,0.1) 100%)",
              "linear-gradient(45deg, rgba(79,117,255,0.1) 0%, rgba(255,165,0,0.1) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="text-2xl font-bold"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                5
              </motion.span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">Years Working Experience</h2>
          </motion.div>
          <motion.p 
            className="text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
          >
            Your Creative Studio for Photography, Videography, and Art in Rwanda
          </motion.p>
          </div>
      </motion.section>

      {/* Mission and Vision - Matching the uploaded image design */}
      <motion.section 
        className="py-20 bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Decorative background elements */}
        <motion.div 
          className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-24 h-24 bg-studio-orange/5 rounded-full"
          animate={{ 
            scale: [1, 0.8, 1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header Badge */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-medium mb-6"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              YOUR CREATIVE STUDIO FOR PHOTOGRAPHY, VIDEOGRAPHY AND ART IN RWANDA
            </motion.div>
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-studio-navy mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Crafting Memories, One Frame at a Time
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Frame and Tune Studio, we are passionate about capturing and creating beautiful moments. 
              Based in Rwanda, our studio specializes in professional photography, cinematic videography, 
              expert audio production, and immersive art experiences.
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-start"
            variants={staggerContainer(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Left Side - Image with Experience Badge */}
            <motion.div 
              className="relative"
              variants={scrollSlideLeft}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img 
                  src={videographyService} 
                  alt="Professional video equipment" 
                  className="w-full h-80 object-cover"
                  variants={imageZoom}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute top-6 left-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center space-x-3">
                      <motion.div 
                        className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.span 
                          className="text-white font-bold text-lg"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          5
                        </motion.span>
                      </motion.div>
                      <div>
                        <div className="text-xl font-bold text-studio-navy">Years</div>
                        <div className="text-sm text-gray-600">Working Experience</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Mission and Vision */}
            <motion.div 
              className="space-y-8"
              variants={scrollSlideRight}
            >
              {/* Our Mission */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={staggerFadeIn}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </motion.svg>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-studio-navy mb-3"
                    whileHover={{ color: "#4F75FF" }}
                    transition={{ duration: 0.2 }}
                  >
                    Our Mission
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Empowering creators in the middle of the Live Learn Studio experience as the Internal regional production Sound Amplifier for your Projects and Services.
                  </motion.p>
                </div>
              </motion.div>

              {/* Our Vision */}
              <motion.div 
                className="flex items-start space-x-4"
                variants={staggerFadeIn}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </motion.svg>
                </motion.div>
                <div>
                  <motion.h3 
                    className="text-xl font-bold text-studio-navy mb-3"
                    whileHover={{ color: "#10B981" }}
                    transition={{ duration: 0.2 }}
                  >
                    Our Vision
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 leading-relaxed"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    To be Rwanda's premier creative studio, known for elevating the art of visual storytelling. From. We aim to set the standard for quality and innovation in the industry, becoming a trusted partner for clients seeking exceptional multimedia and artistic experiences.
                  </motion.p>
                </div>
              </motion.div>

              {/* Read More Button */}
              <motion.div 
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3">
                  READ MORE →
                </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
              </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section 
        className="py-20 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-16 h-16 bg-studio-orange/10 rounded-full"
          animate={{ 
            y: [0, 15, 0],
            x: [0, 10, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl font-bold text-studio-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              Why choose us
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              At Frame and Tune Studio, we offer more than just creative services—we 
              provide a holistic and personalized experience designed to bring your unique 
              vision to life. Here's what makes us your ideal creative partner:
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.15, 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div 
              variants={scrollReveal} 
              className="text-center bg-white p-6 rounded-2xl shadow-card relative overflow-hidden group"
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Animated background gradient */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-studio-orange/5 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 360,
                  boxShadow: "0 8px 25px rgba(79,117,255,0.3)"
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                <Palette className="w-8 h-8 text-white" aria-hidden="true" />
                </motion.div>
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold text-studio-navy mb-3 relative z-10"
                whileHover={{ color: "#4F75FF" }}
                transition={{ duration: 0.2 }}
              >
                Comprehensive Creative Services
              </motion.h3>
              <motion.p 
                className="text-gray-600 text-sm relative z-10"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                We offer a full spectrum of creative services including photography, videography, 
                audio production, and art creation, all under one roof.
              </motion.p>
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
      </motion.section>

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
                <img src="/src/assets/projects-graphic-design.jpg" alt="Arts & Creative Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
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
                <Link to="/services/arts-creative-design" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
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
                <Link to="/services/editing-retouching" className="inline-flex items-center text-green-600 hover:text-green-700 text-sm font-medium transition-colors">
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
                <div className="text-2xl font-bold">Call: 0795 381 733 / 0736 318 111</div>
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
                      src="/src/assets/projects-graphic-design.jpg" 
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
                      src="/src/assets/frame-tune-logo.jpg" 
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
                      src="/src/assets/frame-tune-logo.jpg" 
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
     

      {/* Testimonials */}
      <section className="py-20 bg-studio-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(/src/assets/hero-bg.jpg)' }}></div>
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
                <img src="/src/assets/projects-graphic-design.jpg" alt="Art passion blog" className="w-full h-full object-cover" />
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
                <img src="/src/assets/photography-service.jpg" alt="Business photography blog" className="w-full h-full object-cover" />
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
                <img src="/src/assets/editing-service.jpg" alt="Home decor art blog" className="w-full h-full object-cover" />
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
                <img src="/src/assets/videography-service.jpg" alt="Photography brand story blog" className="w-full h-full object-cover" />
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
            <h2 className="text-4xl font-bold text-studio-navy mb-4">
              Photography <span className="text-studio-orange">pricing packages</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect photography package for your needs. All packages include professional editing and high-quality delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Basic Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-orange-400 to-orange-600 text-white flex flex-col h-full">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 text-xs rounded">
                NEW!
              </div>
              <CardContent className="p-8 text-center flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6">Basic Photography Package</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 500,000</div>
                  <div className="text-4xl font-bold">500,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm flex-1">
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
                <div className="mt-auto">
                  <Button className="w-full bg-white text-orange-600 hover:bg-gray-100">
                    Order now
                  </Button>
                  <p className="text-xs mt-2 opacity-75">Order now and enjoy promo</p>
                </div>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 text-white flex flex-col h-full">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs rounded">
                HOT!
              </div>
              <CardContent className="p-8 text-center flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6">Standard Photography Plan</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 1,500,000</div>
                  <div className="text-4xl font-bold">1,000,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm flex-1">
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
                <div className="mt-auto">
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    Click Here
                  </Button>
                  <p className="text-xs mt-2 opacity-75">Order now</p>
                </div>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500 to-purple-700 text-white flex flex-col h-full">
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-2 py-1 text-xs rounded">
                BEST!
              </div>
              <CardContent className="p-8 text-center flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6">Premium Photography Plan</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 2,000,000</div>
                  <div className="text-4xl font-bold">1,800,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm flex-1">
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
                <div className="mt-auto">
                  <Button className="w-full bg-white text-purple-600 hover:bg-gray-100">
                    Order now
                  </Button>
                  <p className="text-xs mt-2 opacity-75">Enjoy the promo</p>
                </div>
              </CardContent>
            </Card>

            {/* Ultimate Package */}
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-500 to-green-700 text-white flex flex-col h-full">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs rounded">
                POPULAR!
              </div>
              <CardContent className="p-8 text-center flex flex-col h-full">
                <h3 className="text-xl font-bold mb-6">Ultimate Photography Plan</h3>
                <div className="mb-6">
                  <div className="text-sm line-through opacity-75">FRW 3,500,000</div>
                  <div className="text-4xl font-bold">3,000,000</div>
                  <div className="text-sm">FRW</div>
                  <div className="text-xs opacity-75">Lifetime</div>
                </div>
                <ul className="text-left space-y-3 mb-8 text-sm flex-1">
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
                <div className="mt-auto">
                  <Button className="w-full bg-white text-green-600 hover:bg-gray-100">
                    Order now
                  </Button>
                  <p className="text-xs mt-2 opacity-75">Best value for money</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;