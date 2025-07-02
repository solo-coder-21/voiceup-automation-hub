
import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Share2, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Flyer = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            VoiceUp Flyer
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Quick overview of our AI-powered voice automation solutions
          </p>
        </div>
      </section>

      {/* Flyer Display */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <Button className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Download</span>
            </Button>
            <Button variant="outline" className="border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full flex items-center space-x-2">
              <Printer className="h-5 w-5" />
              <span>Print</span>
            </Button>
            <Button variant="outline" className="border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full flex items-center space-x-2">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>

          {/* Flyer Content */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-voiceup-navy to-voiceup-skyblue text-white p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/771100c5-8633-4c2a-adc9-43008ea382e0.png" 
                    alt="VoiceUp Logo" 
                    className="h-12 w-12"
                  />
                  <div>
                    <h1 className="text-3xl font-bold">VoiceUp</h1>
                    <p className="text-lg opacity-90">AI-Powered Voice Automation</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm opacity-75">Transform Your</p>
                  <p className="text-xl font-semibold">Contact Center</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-8 space-y-8">
              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-voiceup-navy mb-6">Why Choose VoiceUp?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-voiceup-skyblue rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-voiceup-navy">99.5% Accuracy</h3>
                      <p className="text-gray-600 text-sm">Industry-leading speech recognition accuracy across 20+ languages</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-voiceup-periwinkle rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-voiceup-navy">Real-time Processing</h3>
                      <p className="text-gray-600 text-sm">Instant transcription and AI-powered insights during live calls</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-voiceup-navy rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-voiceup-navy">Easy Integration</h3>
                      <p className="text-gray-600 text-sm">Seamless integration with existing contact center platforms</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-voiceup-lavender rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-voiceup-navy">Enterprise Security</h3>
                      <p className="text-gray-600 text-sm">Bank-grade security with full compliance certifications</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions Grid */}
              <div>
                <h2 className="text-2xl font-bold text-voiceup-navy mb-6">Complete Solution Suite</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Speech Recognition",
                    "Call Recording",
                    "Analytics & Insights",
                    "Agent Desktop Plugin",
                    "VoiceBot & ChatBot",
                    "VoiceUp Bridge"
                  ].map((solution, index) => (
                    <div key={index} className="bg-voiceup-blush rounded-xl p-4 text-center">
                      <p className="font-medium text-voiceup-navy">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Stats */}
              <div className="bg-gradient-to-r from-voiceup-blush to-white rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-voiceup-navy mb-4">Proven ROI</h2>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-voiceup-skyblue">40%</p>
                    <p className="text-sm text-gray-600">Cost Reduction</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-voiceup-periwinkle">60%</p>
                    <p className="text-sm text-gray-600">Faster Training</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-voiceup-navy">25%</p>
                    <p className="text-sm text-gray-600">Better CSAT</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="bg-voiceup-navy text-white p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Contact Center?</h2>
              <p className="mb-6 opacity-90">Book a personalized demo and see VoiceUp in action</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild
                  size="lg"
                  className="bg-white text-voiceup-navy hover:bg-gray-100 rounded-full"
                >
                  <Link to="/contact">Book Demo</Link>
                </Button>
                <Button 
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-voiceup-navy rounded-full"
                >
                  <Link to="/solutions">View Solutions</Link>
                </Button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20 text-sm opacity-75">
                <p>contact@voiceup.ai | +1 (555) 123-4567 | voiceup.ai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flyer;
