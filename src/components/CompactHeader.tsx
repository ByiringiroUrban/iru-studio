import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

interface CompactHeaderProps {
  isVisible: boolean;
}

const CompactHeader: React.FC<CompactHeaderProps> = ({ isVisible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  useEffect(() => {
    if (!isVisible) {
      setIsMenuOpen(false);
      setOpenSubmenu(null);
    }
  }, [isVisible]);

  return (
    <div 
      className={`fixed top-0 left-0 right-0 z-40 bg-white shadow-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      aria-hidden={!isVisible}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/assets/logo.jpg" 
              alt="Frame & Tune Studio logo" 
              className="h-8 container w-auto x"
            />
            <div>
              <h1 className="text-lg font-bold text-studio-navy"></h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-studio-navy hover:text-primary transition-colors text-sm">
              Home
            </Link>
            
             {/* About Dropdown */}
                          <div className="relative group">
                            <button className="flex items-center space-x-1 text-studio-navy hover:text-primary transition-colors text-sm">
                              <span>About</span>
                              <ChevronDown className="w-3 h-3" />
                            </button>
                            <div
                              className="absolute top-full left-0 mt-1 w-44 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100"
                              role="menu"
                              aria-label="About submenu"
                            >
                              <Link
                                to="/about/who-we-are"
                                className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50"
                              >
                                Who We Are
                              </Link>
                              <Link
                                to="/about/why-choose-us"
                                className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50"
                              >
                                Why Choose Us
                              </Link>
                              <Link
                                to="/about/our-team"
                                className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50"
                              >
                                Our Team
                              </Link>
                              <Link
                                to="/internships"
                                className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50"
                              >
                                Internships
                              </Link>
                            </div>
                          </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-studio-navy hover:text-primary transition-colors text-sm">
                <span>Services</span>
                <ChevronDown className="w-3 h-3" />
              </button>
                    <div className="absolute top-full left-0 mt-1 w-44 bg-white/95 backdrop-blur-md shadow-2xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[9999] border border-gray-100"
                         role="menu" aria-label="Services submenu">
                <Link to="/services/photography" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">
                  Photography
                </Link>
                <Link to="/services/videography" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">
                  Videography
                </Link>
                <Link to="/services/editing-retouching" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">
                  Editing & Retouching
                </Link>
                <Link to="/services/audio-production" className="block px-3 py-2 text-xs text-studio-navy hover:bg-gray-50">
                  Audio Production
                </Link>
              </div>
            </div>

            <Link to="/pricing" className="text-studio-navy hover:text-primary transition-colors text-sm">
              Pricing
            </Link>
            <Link to="/contact" className="text-studio-navy hover:text-primary transition-colors text-sm">
              Contact
            </Link>
              <Link
                                to="/internships"
                                className="text-studio-navy hover:text-primary transition-colors text-sm">
                                Internships
             </Link>
          </div>

          {/* No Book Now here; moved to main header top bar */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-studio-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-3">
              <Link to="/" className="block text-studio-navy hover:text-primary text-sm">
                Home
              </Link>
              
              <div>
                <button
                  onClick={() => toggleSubmenu('about')}
                  className="flex items-center justify-between w-full text-studio-navy hover:text-primary text-sm"
                >
                  <span>About</span>
                  <ChevronDown className={`w-3 h-3 transform transition-transform ${openSubmenu === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {openSubmenu === 'about' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/about/who-we-are" className="block text-xs text-studio-navy hover:text-primary">
                      Who We Are
                    </Link>
                    <Link to="/about/why-choose-us" className="block text-xs text-studio-navy hover:text-primary">
                      Why Choose Us
                    </Link>
                    <Link to="/about/our-team" className="block text-xs text-studio-navy hover:text-primary">
                      Our Team
                    </Link>
                    <Link to="/internships" className="block text-xs text-studio-navy hover:text-primary">
                      Internships
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => toggleSubmenu('services')}
                  className="flex items-center justify-between w-full text-studio-navy hover:text-primary text-sm"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3 h-3 transform transition-transform ${openSubmenu === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {openSubmenu === 'services' && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/services/photography" className="block text-xs text-studio-navy hover:text-primary">
                      Photography
                    </Link>
                    <Link to="/services/videography" className="block text-xs text-studio-navy hover:text-primary">
                      Videography
                    </Link>
                    <Link to="/services/editing-retouching" className="block text-xs text-studio-navy hover:text-primary">
                      Editing & Retouching
                    </Link>
                    <Link to="/services/audio-production" className="block text-xs text-studio-navy hover:text-primary">
                      Audio Production
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/pricing" className="block text-studio-navy hover:text-primary text-sm">
                Pricing
              </Link>
              <Link to="/contact" className="block text-studio-navy hover:text-primary text-sm">
                Contact
              </Link>
              
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                <Link to="/book-now">BOOK NOW</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompactHeader;