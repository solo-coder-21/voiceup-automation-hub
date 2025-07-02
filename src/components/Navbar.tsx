
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !isHomepage 
      ? 'navbar-blur border-b border-gray-200 shadow-sm' 
      : 'bg-transparent'
  }`;

  const textClasses = `transition-colors duration-300 ${
    isScrolled || !isHomepage 
      ? 'text-voiceup-navy' 
      : 'text-white'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={scrollToTop}
          >
            <img 
              src="/lovable-uploads/771100c5-8633-4c2a-adc9-43008ea382e0.png" 
              alt="VoiceUp Logo" 
              className="h-8 w-8"
            />
            <span className={`text-xl font-bold ${textClasses}`}>VoiceUp</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/solutions" 
              className={`hover:text-voiceup-skyblue transition-colors ${textClasses}`}
            >
              Solutions
            </Link>

            {/* Partners Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('partners')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center space-x-1 hover:text-voiceup-skyblue transition-colors ${textClasses}`}>
                <span>Partners</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'partners' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border p-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-voiceup-navy mb-3">Channel Partners</h3>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">Channel Partners Program</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">How to Become a Partner?</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">Partner Application Form</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">Partner Portal Login</a></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-voiceup-navy mb-3">Solution Partners</h3>
                      <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">Solution Partners Program</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">How to Become a Partner?</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">Partner Tools</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-voiceup-skyblue">Technical Documents</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center space-x-1 hover:text-voiceup-skyblue transition-colors ${textClasses}`}>
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border p-4 animate-fade-in">
                  <ul className="space-y-2">
                    <li><Link to="/brochure" className="block text-gray-600 hover:text-voiceup-skyblue">Brochure</Link></li>
                    <li><Link to="/flyer" className="block text-gray-600 hover:text-voiceup-skyblue">Flyer</Link></li>
                    <li><Link to="/blog" className="block text-gray-600 hover:text-voiceup-skyblue">Blogs</Link></li>
                  </ul>
                </div>
              )}
            </div>

            {/* Clients Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('clients')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center space-x-1 hover:text-voiceup-skyblue transition-colors ${textClasses}`}>
                <span>Clients</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {activeDropdown === 'clients' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border p-4 animate-fade-in">
                  <ul className="space-y-2">
                    <li><Link to="/industries" className="block text-gray-600 hover:text-voiceup-skyblue">Industries</Link></li>
                    <li><Link to="/case-studies" className="block text-gray-600 hover:text-voiceup-skyblue">Case Studies</Link></li>
                  </ul>
                </div>
              )}
            </div>

            <Button 
              asChild
              className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white px-6 py-2 rounded-full"
            >
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 ${textClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <Link to="/solutions" className="block text-voiceup-navy hover:text-voiceup-skyblue">Solutions</Link>
              <div className="space-y-2">
                <span className="block text-voiceup-navy font-semibold">Partners</span>
                <Link to="#" className="block text-gray-600 hover:text-voiceup-skyblue ml-4">Channel Partners</Link>
                <Link to="#" className="block text-gray-600 hover:text-voiceup-skyblue ml-4">Solution Partners</Link>
              </div>
              <div className="space-y-2">
                <span className="block text-voiceup-navy font-semibold">Resources</span>
                <Link to="/brochure" className="block text-gray-600 hover:text-voiceup-skyblue ml-4">Brochure</Link>
                <Link to="/flyer" className="block text-gray-600 hover:text-voiceup-skyblue ml-4">Flyer</Link>
                <Link to="/blog" className="block text-gray-600 hover:text-voiceup-skyblue ml-4">Blogs</Link>
              </div>
              <div className="space-y-2">
                <span className="block text-voiceup-navy font-semibold">Clients</span>
                <Link to="/industries" className="block text-gray-600 hover:text-voiceup-skyblue ml-4">Industries</Link>
                <Link to="/case-studies" className="block text-gray-600 hover:text-voiceup-skyblue ml-4">Case Studies</Link>
              </div>
              <Button asChild className="w-full bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white">
                <Link to="/contact">Book a Demo</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
