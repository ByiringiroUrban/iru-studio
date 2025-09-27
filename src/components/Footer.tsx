import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Linkedin, Calendar, ArrowRight, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import frameTuneLogo from '/assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-studio-navy text-studio-navy-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src={frameTuneLogo} 
                alt="Frame & Tune Studio logo" 
                className="h-12 w-auto"
              />
              <div>
                <h2 className="text-xl font-bold text-white">Frame & Tune Studio</h2>
                <p className="text-xs text-gray-300">Creative Excellence</p>
              </div>
            </Link>
            <p className="text-sm leading-relaxed">
              We specialize in professional photography, cinematic videography, expert audio production, and immersive art experiences.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/profile.php?id=61572664807980" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.facebook.com/frame.tune/" target="_blank" rel="noreferrer" aria-label="Facebook Page" className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.instagram.com/frame_tunestudio/" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/frame-and-tune-studio-037b43340/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.pinterest.com/frameandtunestudio/" target="_blank" rel="noreferrer" aria-label="Pinterest" className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <FaPinterest className="w-4 h-4 text-white" />
              </a>
              <a href="https://www.tiktok.com/@frameandtunestudio1?lang=en" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
                <AiFillTikTok className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about/who-we-are" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  About Us
                </Link>
              </li>
              
              {/* Internship link removed from footer quick links */}
              <li>
                <Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors flex items-center">
                  <ArrowRight className="w-3 h-3 mr-2" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Latest Post */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Latest Post</h3>
            <div className="space-y-4">
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-gray-600 rounded flex-shrink-0">
                  <img src="/src/assets/projects-graphic-design.jpg" alt="Blog post" className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>January 01, 2025</span>
                  </div>
                  <Link to="/insights/art-passion" className="text-sm text-gray-300 hover:text-white transition-colors line-clamp-2">
                    Do you have a passion for art but don't know where to...
                  </Link>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <div className="w-12 h-12 bg-gray-600 rounded flex-shrink-0">
                  <img src="/src/assets/projects-graphic-design.jpg" alt="Blog post" className="w-full h-full object-cover rounded" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
                    <Calendar className="w-3 h-3" />
                    <span>January 01, 2025</span>
                  </div>
                  <Link to="/insights/business-photography" className="text-sm text-gray-300 hover:text-white transition-colors line-clamp-2">
                    How To Make Your Business Stand Out With Professional Photography
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="text-sm text-gray-300">
              Sign Up For News & Get 30% Off in New User.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                SUBSCRIBE NOW
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            Copyright © 2025 Frame and Tune | Designed by <a href="/">IRU BUSINESS GROUP Ltd</a>
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Our Services</Link>
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;