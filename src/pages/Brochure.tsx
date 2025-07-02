
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FileText, Share2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Brochure = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            VoiceUp Brochure
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Comprehensive overview of our AI-powered voice automation solutions
          </p>
        </div>
      </section>

      {/* Brochure Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Brochure Preview */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="aspect-[3/4] bg-gradient-to-br from-voiceup-navy to-voiceup-skyblue p-12 text-white">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-8">
                        <img 
                          src="/lovable-uploads/771100c5-8633-4c2a-adc9-43008ea382e0.png" 
                          alt="VoiceUp Logo" 
                          className="h-10 w-10"
                        />
                        <span className="text-2xl font-bold">VoiceUp</span>
                      </div>
                      
                      <h2 className="text-4xl font-bold mb-4">
                        AI-Powered Voice Automation
                      </h2>
                      <p className="text-lg opacity-90">
                        Transform Your Contact Center Operations
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-white/50 pl-4">
                        <p className="text-sm opacity-75">Key Features</p>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>• Speech Recognition</li>
                          <li>• Real-time Analytics</li>
                          <li>• AI-Powered Insights</li>
                          <li>• Multi-language Support</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons Overlay */}
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-voiceup-navy mb-6">
                  Download Our Comprehensive Brochure
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Get detailed information about VoiceUp's complete suite of voice automation solutions, 
                  including technical specifications, use cases, and implementation guides.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-voiceup-navy">What's Inside:</h3>
                <ul className="space-y-3">
                  {[
                    "Complete product overview and specifications",
                    "Real-world use cases and success stories",
                    "Technical architecture and integration guides",
                    "Pricing models and ROI calculations",
                    "Implementation timeline and support options",
                    "Compliance and security certifications"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-voiceup-skyblue rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full flex items-center space-x-2"
                >
                  <Download className="h-5 w-5" />
                  <span>Download PDF</span>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full flex items-center space-x-2"
                >
                  <Link to="/contact">
                    <FileText className="h-5 w-5" />
                    <span>Request Print Copy</span>
                  </Link>
                </Button>
              </div>

              {/* Additional Info */}
              <div className="bg-voiceup-blush rounded-2xl p-6">
                <h4 className="font-semibold text-voiceup-navy mb-2">Need a Custom Proposal?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our team can create a tailored proposal specific to your organization's needs and requirements.
                </p>
                <Button 
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-voiceup-navy text-voiceup-navy hover:bg-voiceup-navy hover:text-white"
                >
                  <Link to="/contact">Contact Sales Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-voiceup-navy mb-4">
              Related Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore more materials to help you understand VoiceUp's capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-voiceup-skyblue rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-voiceup-navy mb-3">Product Flyer</h3>
              <p className="text-gray-600 mb-4">Quick overview of key features and benefits</p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link to="/flyer">View Flyer</Link>
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-voiceup-periwinkle rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-voiceup-navy mb-3">Case Studies</h3>
              <p className="text-gray-600 mb-4">Real-world success stories from our clients</p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link to="/case-studies">Read Stories</Link>
              </Button>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-voiceup-navy rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-voiceup-navy mb-3">Blog Articles</h3>
              <p className="text-gray-600 mb-4">Industry insights and thought leadership</p>
              <Button asChild variant="outline" size="sm" className="rounded-full">
                <Link to="/blog">Read Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Brochure;
