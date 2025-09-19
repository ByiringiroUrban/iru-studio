import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Pin,
  MessageCircle,
  ShoppingCart,
} from "lucide-react";
import CompactHeader from "./CompactHeader";
import frameTuneLogo from "/assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [showCompact, setShowCompact] = useState(false);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu((previouslyOpen) => (previouslyOpen === menu ? null : menu));
  };

  return (
    <>
      <CompactHeader isVisible={showCompact} />
      <header className={`w-full z-50 sticky top-0 transition-transform duration-300 ${showCompact ? "-translate-y-full" : "translate-y-0"}`}>
        {/* Top Bar */}
        <div className="bg-studio-navy text-studio-navy-foreground py-2 px-4">
          <div className="container mx-auto flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@frameandtunestudio.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Hours: Mon - Sun: 08:00 AM - 8:00 PM</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-6 h-6 bg-primary rounded flex items-center justify-center hover:bg-primary/80 cursor-pointer">
                <Facebook className="w-3 h-3 text-white" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-6 h-6 bg-primary rounded flex items-center justify-center hover:bg-primary/80 cursor-pointer">
                <Twitter className="w-3 h-3 text-white" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-6 h-6 bg-primary rounded flex items-center justify-center hover:bg-primary/80 cursor-pointer">
                <Linkedin className="w-3 h-3 text-white" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-6 h-6 bg-primary rounded flex items-center justify-center hover:bg-primary/80 cursor-pointer">
                <Pin className="w-3 h-3 text-white" />
              </a>
              <a href="https://wa.me/250795381733" target="_blank" rel="noreferrer" className="w-6 h-6 bg-primary rounded flex items-center justify-center hover:bg-primary/80 cursor-pointer">
                <MessageCircle className="w-3 h-3 text-white" />
              </a>
              <Button asChild className="ml-3 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 text-xs">
                <Link to="/book-now">BOOK NOW</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={frameTuneLogo} alt="Frame & Tune Studio logo" className="h-10 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-6">
              <Link to="/" className="text-studio-navy hover:text-primary transition-colors text-sm">Home</Link>
              {/* About Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-studio-navy hover:text-primary transition-colors text-sm">
                  <span>About</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100" role="menu" aria-label="About submenu">
                  <Link to="/about/who-we-are" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Who We Are</Link>
                  <Link to="/about/why-choose-us" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Why Choose Us</Link>
                  <Link to="/about/our-team" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Our Team</Link>
                </div>
              </div>
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-studio-navy hover:text-primary transition-colors text-sm">
                  <span>Services</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100" role="menu" aria-label="Services submenu">
                  <Link to="/services/photography" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Photography</Link>
                  <Link to="/services/videography" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Videography</Link>
                  <Link to="/services/editing-retouching" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Editing & Retouching</Link>
                  <Link to="/services/audio-production" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Audio Production</Link>
                  <Link to="/internships" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Internships</Link>
                </div>
              </div>
              <Link to="/gallery" className="text-studio-navy hover:text-primary transition-colors text-sm">Gallery</Link>
              {/* Pricing Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-studio-navy hover:text-primary transition-colors text-sm">
                  <span>Pricing</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100" role="menu" aria-label="Pricing submenu">
                  <Link to="/pricing" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Packages & Services</Link>
                  <Link to="/pricing/frames" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">Frames</Link>
                </div>
              </div>
              <Link to="/contact" className="text-studio-navy hover:text-primary transition-colors text-sm">Contact</Link>
            </div>
            {/* Right actions */}
            <div className="hidden lg:flex items-center ml-auto pl-6 space-x-3 mr-4">
              <form action="/search" method="GET" className="hidden md:block">
                <input
                  type="text"
                  name="q"
                  placeholder="Search..."
                  className="border border-gray-200 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </form>
              <button className="text-studio-navy hover:text-primary transition-colors p-2" aria-label="Add to cart">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
            {/* Mobile Search + Cart */}
            <div className="lg:hidden flex items-center space-x-2 mr-2">
              <form action="/search" method="GET">
                <input
                  type="text"
                  name="q"
                  placeholder="Search..."
                  className="border border-gray-200 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </form>
              <button className="p-2 text-studio-navy" aria-label="Add to cart">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-studio-navy" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t relative z-50 bg-white">
              <div className="space-y-3">
                <Link to="/" className="block text-studio-navy hover:text-primary text-sm">Home</Link>
                {/* Mobile About Submenu */}
                <div>
                  <button onClick={() => toggleSubmenu("about")} className="flex items-center justify-between w-full text-studio-navy hover:text-primary text-sm">
                    <span>About</span>
                    <ChevronDown className={`w-3 h-3 transform transition-transform ${openSubmenu === "about" ? "rotate-180" : ""}`} />
                  </button>
                  {openSubmenu === "about" && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link to="/about/who-we-are" className="block text-xs text-studio-navy hover:text-primary">Who We Are</Link>
                      <Link to="/about/why-choose-us" className="block text-xs text-studio-navy hover:text-primary">Why Choose Us</Link>
                      <Link to="/about/our-team" className="block text-xs text-studio-navy hover:text-primary">Our Team</Link>
                    </div>
                  )}
                </div>
                {/* Mobile Services Submenu */}
                <div>
                  <button onClick={() => toggleSubmenu("services")} className="flex items-center justify-between w-full text-studio-navy hover:text-primary text-sm">
                    <span>Services</span>
                    <ChevronDown className={`w-3 h-3 transform transition-transform ${openSubmenu === "services" ? "rotate-180" : ""}`} />
                  </button>
                  {openSubmenu === "services" && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link to="/services/photography" className="block text-xs text-studio-navy hover:text-primary">Photography</Link>
                      <Link to="/services/videography" className="block text-xs text-studio-navy hover:text-primary">Videography</Link>
                      <Link to="/services/editing-retouching" className="block text-xs text-studio-navy hover:text-primary">Editing & Retouching</Link>
                      <Link to="/services/audio-production" className="block text-xs text-studio-navy hover:text-primary">Audio Production</Link>
                      <Link to="/internships" className="block text-xs text-studio-navy hover:text-primary">Internships</Link>
                    </div>
                  )}
                </div>
                <Link to="/gallery" className="block text-studio-navy hover:text-primary text-sm">Gallery</Link>
                {/* Mobile Pricing Submenu */}
                <div>
                  <button onClick={() => toggleSubmenu("pricing")} className="flex items-center justify-between w-full text-studio-navy hover:text-primary text-sm">
                    <span>Pricing</span>
                    <ChevronDown className={`w-3 h-3 transform transition-transform ${openSubmenu === "pricing" ? "rotate-180" : ""}`} />
                  </button>
                  {openSubmenu === "pricing" && (
                    <div className="mt-2 ml-4 space-y-2">
                      <Link to="/pricing" className="block text-xs text-studio-navy hover:text-primary">Packages & Services</Link>
                      <Link to="/pricing/frames" className="block text-xs text-studio-navy hover:text-primary">Frames</Link>
                    </div>
                  )}
                </div>
                <Link to="/contact" className="block text-studio-navy hover:text-primary text-sm">Contact</Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

  export default Header;
