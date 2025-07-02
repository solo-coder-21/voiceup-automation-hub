
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Mic, BarChart3, Users, Bot, PhoneCall, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  const capabilities = [
    {
      id: 1,
      title: "VoiceUp Bridge",
      icon: <Zap className="h-8 w-8" />,
      content: "A platform for seamless, flexible and user-friendly communication integration with AI platforms with robust and advanced services. Transform your contact center with intelligent automation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Speech Recognition",
      icon: <Mic className="h-8 w-8" />,
      content: "Unlock the power of voice. Our advanced speech recognition technology transforms spoken words into accurate text, effortlessly. Streamline workflows, enhance accessibility, and connect with your audience like never before.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Call Recording and Transcription",
      icon: <PhoneCall className="h-8 w-8" />,
      content: "Capture Every Conversation. Our seamless call recording and accurate transcription services ensure you never miss a detail. Effortlessly record, transcribe, and access your important calls.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Analytics and Insights",
      icon: <BarChart3 className="h-8 w-8" />,
      content: "True Call Intelligence. Our solution goes beyond simple transcription, providing deep analytics on every call. Identify patterns, track compliance, and gain unparalleled insights to enhance your sales, support, and operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Agent Desktop Plugin",
      icon: <Users className="h-8 w-8" />,
      content: "Transcribe & Translate Live. Integrate our powerful desktop plugin to give your agents immediate access to call transcripts and translated text. Improve accuracy, accelerate training, and elevate customer satisfaction.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "VoiceBot, ChatBot",
      icon: <Bot className="h-8 w-8" />,
      content: "Voice & Chat. Smart Automation. Deploy our AI-driven voicebots and chatbots to handle inquiries, resolve issues, and enhance customer service around the clock. Effortless, intelligent interactions. Scale your support with AI.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    }
  ];

  const selectedCapability = hoveredCapability ? capabilities.find(c => c.id === hoveredCapability) : capabilities[0];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop"
          >
            <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69fab9f11d2a28e83cb8d6f6a1c6be17b&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-voiceup-navy/80 via-voiceup-navy/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            VoiceUp: Innovative <span className="gradient-text text-transparent bg-gradient-to-r from-voiceup-skyblue to-white bg-clip-text">Voice Solutions</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 text-gray-200 font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Explore the cutting-edge advancements in voice technology and how VoiceUp is redefining communication and interaction in today's AI landscape.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white px-8 py-4 text-lg rounded-full animate-fade-in"
            style={{animationDelay: '0.4s'}}
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-down">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* Platform Capabilities */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-voiceup-navy mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive voice automation platform transforms contact center operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Interactive Cards */}
            <div className="space-y-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.id}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    hoveredCapability === capability.id || (!hoveredCapability && capability.id === 1)
                      ? 'border-voiceup-skyblue bg-voiceup-skyblue text-white shadow-xl'
                      : 'border-gray-200 bg-white text-voiceup-navy hover:border-voiceup-periwinkle'
                  }`}
                  onMouseEnter={() => setHoveredCapability(capability.id)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${
                      hoveredCapability === capability.id || (!hoveredCapability && capability.id === 1)
                        ? 'bg-white/20'
                        : 'bg-voiceup-skyblue text-white'
                    }`}>
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{capability.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Content Display */}
            <div className="lg:sticky lg:top-24">
              {selectedCapability && (
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-in-right">
                  <div className="relative h-64">
                    <img 
                      src={selectedCapability.image} 
                      alt={selectedCapability.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm inline-block mb-2">
                        {selectedCapability.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{selectedCapability.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {selectedCapability.content}
                    </p>
                    <Button 
                      asChild
                      className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full"
                    >
                      <Link to="/solutions">Learn More</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 bg-voiceup-navy">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            See How Enterprises Use VoiceUp
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Watch real-world implementations and discover the transformative impact of our voice automation platform
          </p>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle p-1">
            <div className="bg-white rounded-xl">
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-voiceup-skyblue rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 text-lg">Video Demo Coming Soon</p>
                  <p className="text-gray-500 text-sm mt-2">Click here when you have a video URL to replace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Diagram Section */}
      <section className="py-20 bg-gradient-to-br from-voiceup-blush to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-voiceup-navy mb-4">
              Architecture Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand how VoiceUp integrates seamlessly with your existing contact center infrastructure
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 relative">
            {/* Floating Signal Graphics */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute top-1/4 left-0 w-3 h-3 bg-voiceup-skyblue rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-0 w-2 h-2 bg-voiceup-periwinkle rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-voiceup-lavender rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-voiceup-skyblue rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>

            <div className="relative">
              {/* Interactive diagram inspired by the uploaded image */}
              <div className="flex flex-col items-center space-y-8">
                {/* PSTN & SBC Level */}
                <div className="flex items-center justify-center space-x-12 relative">
                  <div className="group relative">
                    <div className="bg-gradient-to-r from-voiceup-skyblue to-voiceup-periwinkle text-white px-8 py-6 rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-voiceup-skyblue">
                      <span className="font-bold text-lg">PSTN</span>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* SIP Connection */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-voiceup-skyblue"></div>
                    <span className="text-xs text-voiceup-navy font-semibold bg-voiceup-blush px-2 py-1 rounded">SIP</span>
                    <div className="w-8 h-0.5 bg-voiceup-skyblue"></div>
                  </div>

                  <div className="group relative">
                    <div className="bg-gradient-to-r from-voiceup-periwinkle to-voiceup-navy text-white px-8 py-6 rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-voiceup-periwinkle">
                      <span className="font-bold text-lg">SBC</span>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Vertical Connection */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-voiceup-skyblue to-voiceup-periwinkle rounded-full"></div>
                  <div className="w-3 h-3 bg-voiceup-skyblue rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-voiceup-periwinkle to-voiceup-navy rounded-full"></div>
                </div>

                {/* VoiceUp Service & AI Service Level */}
                <div className="flex items-center justify-center space-x-16 relative">
                  <div className="group relative">
                    <div className="bg-gradient-to-r from-voiceup-navy to-voiceup-periwinkle text-white px-10 py-8 rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-voiceup-navy">
                      <div className="flex items-center space-x-3">
                        <Mic className="h-6 w-6" />
                        <span className="font-bold text-lg">VoiceUp Service</span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* SIPREC/SIP Connection */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-0.5 bg-voiceup-periwinkle"></div>
                    <span className="text-xs text-voiceup-navy font-semibold bg-voiceup-blush px-2 py-1 rounded">SIPREC/SIP</span>
                    <div className="w-8 h-0.5 bg-voiceup-periwinkle"></div>
                  </div>

                  <div className="group relative">
                    <div className="bg-gradient-to-r from-voiceup-skyblue to-voiceup-lavender text-white px-10 py-8 rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-voiceup-skyblue">
                      <div className="flex items-center space-x-3">
                        <Bot className="h-6 w-6" />
                        <span className="font-bold text-lg">AI Service</span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Vertical Connection */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-voiceup-navy to-voiceup-skyblue rounded-full"></div>
                  <div className="w-3 h-3 bg-voiceup-periwinkle rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-voiceup-skyblue to-voiceup-navy rounded-full"></div>
                </div>

                {/* PBX Level */}
                <div className="group relative">
                  <div className="bg-gradient-to-r from-voiceup-navy to-voiceup-skyblue text-white px-12 py-8 rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-voiceup-navy">
                    <div className="flex items-center space-x-3">
                      <PhoneCall className="h-6 w-6" />
                      <span className="font-bold text-lg">PBX</span>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                {/* Vertical Connection */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-0.5 h-12 bg-gradient-to-b from-voiceup-navy to-voiceup-skyblue rounded-full"></div>
                  <div className="w-3 h-3 bg-voiceup-skyblue rounded-full animate-pulse"></div>
                  <div className="w-0.5 h-12 bg-gradient-to-b from-voiceup-skyblue to-voiceup-periwinkle rounded-full"></div>
                </div>

                {/* Agent Desktop Level */}
                <div className="flex items-center justify-center space-x-8 relative">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative">
                      <div className="bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle text-white px-6 py-6 rounded-3xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-voiceup-skyblue">
                        <div className="text-center">
                          <Users className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-bold">VoiceUp</div>
                          <div className="text-xs">Agent Desktop</div>
                        </div>
                      </div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  ))}
                </div>

                {/* Customer Premise Label */}
                <div className="mt-8 p-6 bg-gradient-to-r from-voiceup-blush to-voiceup-lavender rounded-3xl shadow-lg border-2 border-voiceup-blush">
                  <span className="text-voiceup-navy font-bold text-lg">Customer Premise</span>
                </div>
              </div>

              {/* Animated connecting lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C8CC0" stopOpacity="0.6"/>
                    <stop offset="50%" stopColor="#667BAB" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#232E4A" stopOpacity="0.2"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
