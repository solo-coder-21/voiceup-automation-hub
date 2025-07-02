
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUp, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-voiceup-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={scrollToTop}>
              <img 
                src="/lovable-uploads/771100c5-8633-4c2a-adc9-43008ea382e0.png" 
                alt="VoiceUp Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold">VoiceUp</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Innovative voice solutions for contact centers with AI-powered automation, 
              speech recognition, and analytics.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-voiceup-skyblue" />
                <span>contact@voiceup.ai</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-voiceup-skyblue" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-voiceup-skyblue" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-voiceup-skyblue">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">VoiceUp Bridge</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Recording & Transcription</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Speech Recognition</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Analytics & Insights</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Agent Desktop Plugin</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">VoiceBot & ChatBot</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-voiceup-skyblue">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/brochure" className="text-gray-300 hover:text-white transition-colors">Brochure</Link></li>
              <li><Link to="/flyer" className="text-gray-300 hover:text-white transition-colors">Flyers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              <li><Link to="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-voiceup-skyblue">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-voiceup-skyblue transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-voiceup-skyblue transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-voiceup-skyblue transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-voiceup-skyblue transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-voiceup-skyblue hover:text-white transition-colors group"
            >
              <ArrowUp className="h-4 w-4 group-hover:animate-bounce" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 VoiceUp. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
