
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Mic, BarChart3, Users, Bot, PhoneCall, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [hoveredPlatformCapability, setHoveredPlatformCapability] = useState<number | null>(null);
  const dynamicSectionRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      id: 1,
      title: "VoiceUp Bridge",
      icon: <Zap className="h-8 w-8" />,
      content: "A platform for seamless, flexible and user-friendly communication integration with AI platforms with robust and advanced services. Transform your contact center with intelligent automation.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      color: "from-voiceup-skyblue to-voiceup-periwinkle"
    },
    {
      id: 2,
      title: "Speech Recognition", 
      icon: <Mic className="h-8 w-8" />,
      content: "Unlock the power of voice. Our advanced speech recognition technology transforms spoken words into accurate text, effortlessly. Streamline workflows, enhance accessibility, and connect with your audience like never before.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      color: "from-voiceup-periwinkle to-voiceup-navy"
    },
    {
      id: 3,
      title: "Call Recording and Transcription",
      icon: <PhoneCall className="h-8 w-8" />,
      content: "Capture Every Conversation. Our seamless call recording and accurate transcription services ensure you never miss a detail. Effortlessly record, transcribe, and access your important calls.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      color: "from-voiceup-navy to-voiceup-skyblue"
    },
    {
      id: 4,
      title: "Analytics and Insights",
      icon: <BarChart3 className="h-8 w-8" />,
      content: "True Call Intelligence. Our solution goes beyond simple transcription, providing deep analytics on every call. Identify patterns, track compliance, and gain unparalleled insights to enhance your sales, support, and operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-voiceup-skyblue to-voiceup-lavender"
    },
    {
      id: 5,
      title: "Agent Desktop Plugin",
      icon: <Users className="h-8 w-8" />,
      content: "Transcribe & Translate Live. Integrate our powerful desktop plugin to give your agents immediate access to call transcripts and translated text. Improve accuracy, accelerate training, and elevate customer satisfaction.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      color: "from-voiceup-lavender to-voiceup-periwinkle"
    },
    {
      id: 6,
      title: "VoiceBot, ChatBot",
      icon: <Bot className="h-8 w-8" />,
      content: "Voice & Chat. Smart Automation. Deploy our AI-driven voicebots and chatbots to handle inquiries, resolve issues, and enhance customer service around the clock. Effortless, intelligent interactions. Scale your support with AI.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      color: "from-voiceup-periwinkle to-voiceup-navy"
    }
  ];

  const selectedCapability = hoveredCapability ? capabilities.find(c => c.id === hoveredCapability) : capabilities[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const videoObserver = new IntersectionObserver(
      ([entry]) => {
        setVideoInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (dynamicSectionRef.current) {
      observer.observe(dynamicSectionRef.current);
    }

    if (videoSectionRef.current) {
      videoObserver.observe(videoSectionRef.current);
    }

    return () => {
      observer.disconnect();
      videoObserver.disconnect();
    };
  }, []);

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

      {/* Original Platform Capabilities */}
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

      {/* Platform Capabilities with AI Circle */}
      <section ref={dynamicSectionRef} className="py-20 bg-gradient-to-br from-voiceup-navy via-indigo-900 to-purple-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-voiceup-skyblue rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Explore our intelligent AI-powered platform capabilities
            </p>
          </div>

          <div className="relative flex items-center justify-center min-h-[700px]">
            {/* Central AI Hub */}
            <div className="relative z-20">
              {/* Main AI Circle */}
              <div className={`w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center transition-all duration-1000 ${
                isInView ? 'animate-pulse scale-110' : 'scale-100'
              } shadow-2xl`}>
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  {/* Circuit pattern inside */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 animate-pulse"></div>
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-0.5 h-8 bg-cyan-300 animate-pulse"
                        style={{
                          left: `${30 + i * 10}%`,
                          top: `${20 + (i % 3) * 20}%`,
                          animationDelay: `${i * 0.3}s`,
                          transform: `rotate(${i * 45}deg)`
                        }}
                      />
                    ))}
                  </div>
                  <div className="text-6xl font-bold text-white z-10">AI</div>
                </div>
              </div>
              
              {/* Outer rings */}
              <div className={`absolute inset-0 border-2 border-cyan-400/50 rounded-full animate-spin transition-opacity duration-1000 ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`} style={{ width: '320px', height: '320px', top: '-28px', left: '-28px', animationDuration: '20s' }}></div>
              <div className={`absolute inset-0 border border-purple-400/30 rounded-full animate-spin transition-opacity duration-1000 ${
                isInView ? 'opacity-100' : 'opacity-0'
              }`} style={{ width: '380px', height: '380px', top: '-58px', left: '-58px', animationDuration: '30s', animationDirection: 'reverse' }}></div>
            </div>

            {/* Capability Cards positioned around the circle */}
            {capabilities.map((capability, index) => {
              const angle = (index * 60) - 90; // 60 degrees apart, starting from top
              const radius = 300;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;
              
              return (
                <div
                  key={capability.id}
                  className={`absolute transition-all duration-1000 cursor-pointer ${
                    isInView 
                      ? 'opacity-100 translate-x-0 translate-y-0' 
                      : 'opacity-0 translate-x-0 translate-y-0'
                  }`}
                  style={{
                    transform: isInView 
                      ? `translate(${x}px, ${y}px) scale(1)` 
                      : 'translate(0px, 0px) scale(0.3)',
                    transitionDelay: `${index * 300}ms`
                  }}
                  onMouseEnter={() => setHoveredPlatformCapability(capability.id)}
                  onMouseLeave={() => setHoveredPlatformCapability(null)}
                >
                  <div className={`w-40 h-40 rounded-2xl bg-gradient-to-br ${capability.color} p-6 flex flex-col items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-300 relative`}>
                    <div className="mb-3">
                      {capability.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-center leading-tight">
                      {capability.title}
                    </h4>
                    
                    {/* Hover Content */}
                    {hoveredPlatformCapability === capability.id && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-white rounded-xl shadow-2xl p-6 text-voiceup-navy z-30 animate-fade-in">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="p-2 bg-voiceup-skyblue rounded-lg text-white">
                            {capability.icon}
                          </div>
                          <h3 className="font-bold text-lg">{capability.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {capability.content}
                        </p>
                        <Button 
                          asChild
                          className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full text-sm px-4 py-2"
                        >
                          <Link to="/solutions">Learn More</Link>
                        </Button>
                        {/* Arrow pointing to card */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Connection lines to center */}
                  <svg className="absolute inset-0 pointer-events-none w-full h-full">
                    <line
                      x1="50%"
                      y1="50%"
                      x2={`${50 - (x / (radius * 2)) * 100}%`}
                      y2={`${50 - (y / (radius * 2)) * 100}%`}
                      stroke="rgba(99, 102, 241, 0.4)"
                      strokeWidth="2"
                      className={`transition-opacity duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
                      style={{ transitionDelay: `${index * 300 + 800}ms` }}
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Demo Video Section */}
      <section ref={videoSectionRef} className="py-20 bg-voiceup-navy relative overflow-hidden">
        {/* Enhanced Moving Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            {/* Floating orbs */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-voiceup-skyblue to-voiceup-periwinkle rounded-full animate-pulse"
                style={{
                  width: `${60 + i * 20}px`,
                  height: `${60 + i * 20}px`,
                  left: `${5 + i * 8}%`,
                  top: `${5 + (i % 4) * 20}%`,
                  animation: `float ${6 + i * 1.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`
                }}
              />
            ))}
            
            {/* Moving particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-voiceup-skyblue rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          {/* Gradient waves */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-voiceup-skyblue/5 to-transparent animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className={`transition-all duration-1000 ${videoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              See How Enterprises Use VoiceUp
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Watch real-world implementations and discover the transformative impact of our voice automation platform
            </p>
          </div>
          
          <div className={`relative transition-all duration-1000 ${videoInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '300ms' }}>
            {/* Multi-layered Animated Border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-lavender p-2 rounded-3xl animate-pulse">
                <div className="bg-voiceup-navy rounded-2xl h-full"></div>
              </div>
              
              {/* Video Container */}
              <div className="relative bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle p-3 rounded-3xl">
                <div className="bg-gradient-to-br from-gray-900 to-voiceup-navy rounded-2xl overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    {/* Animated GIF-like Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                      {/* Central video area with animated elements */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        {/* Multichannel communication visual */}
                        <div className="relative w-80 h-80">
                          {/* Central AI core */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center animate-pulse">
                            <div className="text-white font-bold text-sm">AI</div>
                          </div>
                          
                          {/* Orbiting communication channels */}
                          {[
                            { icon: '📞', label: 'Voice', angle: 0, color: 'from-green-400 to-green-500' },
                            { icon: '✉️', label: 'Email', angle: 60, color: 'from-blue-400 to-blue-500' },
                            { icon: '💬', label: 'Chat', angle: 120, color: 'from-purple-400 to-purple-500' },
                            { icon: '📱', label: 'SMS', angle: 180, color: 'from-pink-400 to-pink-500' },
                            { icon: '👥', label: 'Social', angle: 240, color: 'from-yellow-400 to-yellow-500' },
                            { icon: '🤖', label: 'Bot', angle: 300, color: 'from-cyan-400 to-cyan-500' }
                          ].map((channel, i) => {
                            const radius = 120;
                            const x = Math.cos((channel.angle - 90) * Math.PI / 180) * radius;
                            const y = Math.sin((channel.angle - 90) * Math.PI / 180) * radius;
                            
                            return (
                              <div
                                key={i}
                                className={`absolute w-16 h-16 bg-gradient-to-r ${channel.color} rounded-full flex items-center justify-center text-white font-semibold text-xs shadow-lg animate-bounce`}
                                style={{
                                  left: `calc(50% + ${x}px - 32px)`,
                                  top: `calc(50% + ${y}px - 32px)`,
                                  animationDelay: `${i * 0.3}s`,
                                  animationDuration: '2s'
                                }}
                              >
                                <div className="text-center">
                                  <div className="text-lg">{channel.icon}</div>
                                  <div className="text-[10px]">{channel.label}</div>
                                </div>
                              </div>
                            );
                          })}
                          
                          {/* Connecting lines */}
                          <svg className="absolute inset-0 w-full h-full pointer-events-none">
                            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                              const radius = 120;
                              const x1 = Math.cos((angle - 90) * Math.PI / 180) * 48;
                              const y1 = Math.sin((angle - 90) * Math.PI / 180) * 48;
                              const x2 = Math.cos((angle - 90) * Math.PI / 180) * radius;
                              const y2 = Math.sin((angle - 90) * Math.PI / 180) * radius;
                              
                              return (
                                <line
                                  key={i}
                                  x1={`calc(50% + ${x1}px)`}
                                  y1={`calc(50% + ${y1}px)`}
                                  x2={`calc(50% + ${x2}px)`}
                                  y2={`calc(50% + ${y2}px)`}
                                  stroke="rgba(99, 102, 241, 0.6)"
                                  strokeWidth="2"
                                  className="animate-pulse"
                                  style={{ animationDelay: `${i * 0.2}s` }}
                                />
                              );
                            })}
                          </svg>
                        </div>
                      </div>
                      
                      {/* Floating text elements */}
                      <div className="absolute top-8 left-8 text-white text-sm animate-fade-in">
                        GenAI-Powered Multichannel
                      </div>
                      <div className="absolute top-12 left-8 text-cyan-300 text-xs animate-fade-in" style={{ animationDelay: '0.5s' }}>
                        Collections and Customer Support
                      </div>
                    </div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer group">
                      <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-voiceup-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Video progress bar mockup */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/40 rounded-lg p-2">
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span>2:05</span>
                        <div className="flex-1 bg-gray-600 rounded-full h-1">
                          <div className="bg-voiceup-skyblue h-1 rounded-full w-1/3 animate-pulse"></div>
                        </div>
                        <span>5:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Diagram Section - Fixed positioning */}
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

          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-3xl shadow-2xl p-8 lg:p-12 relative border-4 border-yellow-200">
            {/* Floating Signal Graphics */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-voiceup-skyblue rounded-full animate-pulse"
                  style={{
                    left: `${10 + i * 12}%`,
                    top: `${15 + (i % 3) * 25}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}
            </div>

            <div className="relative">
              {/* Architecture Layout - Fixed positioning */}
              <div className="flex flex-col items-center space-y-12">
                
                {/* Top Row - PSTN */}
                <div className="relative">
                  <div className="group relative">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-400">
                      <span className="font-bold text-lg">PSTN</span>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-12 bg-gray-400"></div>
                  <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIP</span>
                  <div className="w-0.5 h-12 bg-gray-400"></div>
                </div>

                {/* Second Row - SBC, VoiceUp Service, AI Service */}
                <div className="flex items-center justify-center space-x-20 relative w-full">
                  <div className="group relative">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-500">
                      <span className="font-bold text-lg">SBC</span>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  {/* Horizontal connections */}
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-0.5 bg-gray-400"></div>
                    <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border whitespace-nowrap">SIPREC/SIP</span>
                    <div className="w-16 h-0.5 bg-gray-400"></div>
                  </div>

                  <div className="group relative">
                    <div className="bg-gradient-to-r from-voiceup-skyblue to-voiceup-periwinkle text-white px-10 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-voiceup-navy">
                      <div className="flex flex-col items-center">
                        <Mic className="h-6 w-6 mb-2" />
                        <span className="font-bold text-lg">VoiceUp Service</span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-0.5 bg-gray-400"></div>
                    <div className="w-16 h-0.5 bg-gray-400"></div>
                  </div>

                  <div className="group relative">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-10 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-400">
                      <div className="flex flex-col items-center">
                        <Bot className="h-6 w-6 mb-2" />
                        <span className="font-bold text-lg">AI Service</span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Connection from SBC to PBX - Positioned correctly */}
                <div className="flex justify-start w-full">
                  <div className="flex flex-col items-center ml-8">
                    <div className="w-0.5 h-12 bg-gray-400"></div>
                    <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIP</span>
                    <div className="w-0.5 h-12 bg-gray-400"></div>
                  </div>
                </div>

                {/* PBX Row - Positioned under SBC */}
                <div className="flex justify-start w-full">
                  <div className="group relative ml-8">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-500">
                      <div className="flex items-center space-x-3">
                        <PhoneCall className="h-6 w-6" />
                        <span className="font-bold text-lg">PBX</span>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>

                {/* Vertical connection from VoiceUp Service to Agent Desktops */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-16 bg-gray-400"></div>
                    <div className="w-4 h-4 bg-voiceup-skyblue rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-12 bg-gray-400"></div>
                  </div>
                </div>

                {/* Agent Desktop Level */}
                <div className="flex items-center justify-center space-x-12 relative">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative">
                      <div className="bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle text-white px-6 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-voiceup-navy">
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
                <div className="mt-8 text-center">
                  <div className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full shadow-lg border-2 border-yellow-300">
                    <span className="text-yellow-900 font-bold text-lg">Customer Premise</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce-down {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(10px); }
          60% { transform: translateY(5px); }
        }
        
        .animate-bounce-down {
          animation: bounce-down 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
