import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Home, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, floatIn } from '@/lib/animations';
import videographyService from '@/assets/videography-service.jpg';

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Home className="w-4 h-4" />
            <Link to="/" className="text-studio-navy hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">Why Choose Us</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <motion.h1
            className="text-4xl lg:text-5xl font-extrabold text-studio-navy mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Why choose FRAME AND TUNES STUDIO
          </motion.h1>

          {/* Intro */}
          <motion.div className="mb-16 grid md:grid-cols-2 gap-8 items-center" variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Frame and Tune Studio brings together a diverse team of creatives to deliver custom multimedia solutions. 
                We emphasize quality, creativity, and client collaboration to ensure every project is uniquely tailored 
                and professionally executed.
              </p>
            </motion.div>
            <motion.div variants={floatIn} className="rounded-2xl overflow-hidden shadow-card">
              <img src={videographyService} alt="Why choose us" className="w-full h-64 object-cover" />
            </motion.div>
          </motion.div>

          {/* Highlights */}
          <motion.div variants={staggerContainer(0.12, 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-6">
            <motion.div variants={fadeInUp} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Customized Solutions for Every Client</h3>
                <p className="text-gray-600 leading-relaxed">
                  We create packages and workflows that match client goals and budgets. Every project is tailored 
                  to meet your specific requirements and deliver results that exceed expectations.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Experienced & Skilled Team</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our multidisciplinary team includes photographers, videographers, editors, sound engineers and designers. 
                  Each team member brings years of experience and specialized expertise to your project.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">High-Quality Results</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on craft, color, audio fidelity, and storytelling. Our commitment to quality ensures 
                  that every deliverable meets professional standards and serves your creative vision.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Affordable & Transparent Pricing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear pricing with packages and add-ons to suit needs. No hidden fees or surprise costs - 
                  we believe in transparent, fair pricing that provides excellent value for professional services.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">End-to-End Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  From concept to delivery, we support every step. Our comprehensive approach means you have 
                  a dedicated team guiding your project from initial planning through final delivery.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start space-x-4 bg-white p-6 rounded-2xl shadow-card">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-studio-navy mb-3">Proven Track Record</h3>
                <p className="text-gray-600 leading-relaxed">
                  Successful projects across events, businesses, and artists. Our portfolio demonstrates 
                  consistent quality and client satisfaction across diverse industries and project types.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Call to Action */}
          <motion.div className="mt-16 text-center" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Get Started Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;