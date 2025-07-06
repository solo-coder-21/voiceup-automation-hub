
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
  const [videoExpanded, setVideoExpanded] = useState(false);
  const [platformCapabilitiesInView, setPlatformCapabilitiesInView] = useState(false);
  const dynamicSectionRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const platformCapabilitiesRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      id: 1,
      title: "Multiple channels",
      icon: <Zap className="h-8 w-8" />,
      content: "Use voice, SMS, email and chat in sync to boost engagement and maximize collections.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      color: "from-voiceup-skyblue to-voiceup-periwinkle",
      position: "top-left"
    },
    {
      id: 2,
      title: "Compliance", 
      icon: <Mic className="h-8 w-8" />,
      content: "The only compliance-first Omnichannel Conversational AI solution.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      color: "from-voiceup-periwinkle to-voiceup-navy",
      position: "top-right"
    },
    {
      id: 3,
      title: "Analytics",
      icon: <BarChart3 className="h-8 w-8" />,
      content: "Single dashboard view of every campaign outcome featuring trends and actionable insights.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      color: "from-voiceup-navy to-voiceup-skyblue",
      position: "bottom-left"
    },
    {
      id: 4,
      title: "Integrations",
      icon: <Users className="h-8 w-8" />,
      content: "A vast array of out-of-the-box integrations with CRMs, payment gateways, telephony, and SMS solutions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-voiceup-skyblue to-voiceup-lavender",
      position: "bottom-right"
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
        setVideoExpanded(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const platformCapabilitiesObserver = new IntersectionObserver(
      ([entry]) => {
        setPlatformCapabilitiesInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (dynamicSectionRef.current) {
      observer.observe(dynamicSectionRef.current);
    }

    if (videoSectionRef.current) {
      videoObserver.observe(videoSectionRef.current);
    }

    if (platformCapabilitiesRef.current) {
      platformCapabilitiesObserver.observe(platformCapabilitiesRef.current);
    }

    return () => {
      observer.disconnect();
      videoObserver.disconnect();
      platformCapabilitiesObserver.disconnect();
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

      {/* New Platform Capabilities Section - Redesigned */}
      <section ref={platformCapabilitiesRef} className="py-20 bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 relative overflow-hidden min-h-screen">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-indigo-900/30"></div>
          
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                <stop offset="100%" stopColor="rgba(139, 92, 246, 0.3)" />
              </linearGradient>
            </defs>
            {/* Radial lines emanating from center */}
            {[...Array(12)].map((_, i) => (
              <line
                key={i}
                x1="500"
                y1="500"
                x2={500 + Math.cos((i * 30 * Math.PI) / 180) * 300}
                y2={500 + Math.sin((i * 30 * Math.PI) / 180) * 300}
                stroke="url(#line-gradient)"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Platform Capabilities
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience our dynamic AI-powered platform capabilities
            </p>
          </div>

          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Central AI Circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Outer rotating ring */}
                <div className="w-80 h-80 border-4 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute inset-2 border-2 border-purple-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                </div>
                
                {/* Inner AI core */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="text-3xl font-bold text-white z-10">AI</div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Small capability icons around the circle */}
                {!platformCapabilitiesInView && (
                  <div className="absolute inset-0">
                    {capabilities.map((capability, index) => {
                      const angle = (index * 90) - 45; // Distribute in 4 corners
                      const radius = 150;
                      const x = Math.cos((angle * Math.PI) / 180) * radius;
                      const y = Math.sin((angle * Math.PI) / 180) * radius;
                      
                      return (
                        <div
                          key={capability.id}
                          className="absolute w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-cyan-400/30 animate-pulse"
                          style={{
                            left: `calc(50% + ${x}px - 24px)`,
                            top: `calc(50% + ${y}px - 24px)`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          <div className="text-cyan-300 scale-75">
                            {capability.icon}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Expanded capability cards */}
                {platformCapabilitiesInView && (
                  <div className="absolute inset-0">
                    {capabilities.map((capability, index) => {
                      const positions = {
                        0: { x: -300, y: -200 }, // top-left
                        1: { x: 300, y: -200 },  // top-right
                        2: { x: -300, y: 200 },  // bottom-left
                        3: { x: 300, y: 200 }    // bottom-right
                      };
                      
                      const pos = positions[index as keyof typeof positions];
                      
                      return (
                        <div
                          key={capability.id}
                          className="absolute animate-scale-in"
                          style={{
                            left: `calc(50% + ${pos.x}px - 150px)`,
                            top: `calc(50% + ${pos.y}px - 125px)`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        >
                          <div className="w-80 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className="p-3 bg-voiceup-skyblue rounded-lg text-white">
                                {capability.icon}
                              </div>
                              <h3 className="text-xl font-bold text-voiceup-navy">
                                {capability.title}
                              </h3>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed mb-4">
                              {capability.content}
                            </p>
                            <Button 
                              size="sm"
                              className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full"
                            >
                              Read More →
                            </Button>
                          </div>
                          
                          {/* Connection line to center */}
                          <svg 
                            className="absolute inset-0 pointer-events-none"
                            style={{
                              left: pos.x > 0 ? '-150px' : '150px',
                              top: pos.y > 0 ? '-125px' : '125px',
                              width: Math.abs(pos.x),
                              height: Math.abs(pos.y)
                            }}
                          >
                            <line
                              x1={pos.x > 0 ? 0 : Math.abs(pos.x)}
                              y1={pos.y > 0 ? 0 : Math.abs(pos.y)}
                              x2={pos.x > 0 ? Math.abs(pos.x) : 0}
                              y2={pos.y > 0 ? Math.abs(pos.y) : 0}
                              stroke="rgba(99, 102, 241, 0.4)"
                              strokeWidth="2"
                              strokeDasharray="5,5"
                              className="animate-pulse"
                            />
                          </svg>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Demo Video Section */}
      <section ref={videoSectionRef} className="py-20 bg-voiceup-navy relative overflow-hidden">
        {/* Enhanced Moving Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated mesh gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 animate-pulse"></div>
          
          {/* Floating data streams */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`stream-${i}`}
              className="absolute w-px h-24 bg-gradient-to-b from-transparent via-voiceup-skyblue/60 to-transparent"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
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
          
          <div className={`relative transition-all duration-1000 ${
            videoExpanded ? 'scale-100 opacity-100' : 'scale-75 opacity-80'
          }`} style={{ transitionDelay: '300ms' }}>
            {/* Enhanced Animated Border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-lavender p-2 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-lavender rounded-3xl animate-spin" style={{ animationDuration: '10s' }}></div>
                <div className="bg-voiceup-navy rounded-2xl h-full relative z-10"></div>
              </div>
              
              {/* Video Container */}
              <div className="relative bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle p-3 rounded-3xl">
                <div className="bg-gradient-to-br from-gray-900 to-voiceup-navy rounded-2xl overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    {/* Dynamic Animated Thumbnail - AI Related */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                      {/* AI Brain Visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative">
                          {/* Neural network nodes */}
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`node-${i}`}
                              className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                              style={{
                                left: `${40 + Math.cos((i * 45 * Math.PI) / 180) * 60}px`,
                                top: `${40 + Math.sin((i * 45 * Math.PI) / 180) * 60}px`,
                                animationDelay: `${i * 0.2}s`
                              }}
                            />
                          ))}
                          
                          {/* Central AI core */}
                          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                            <Bot className="h-10 w-10 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Moving data streams */}
                      <div className="absolute inset-0">
                        {[...Array(15)].map((_, i) => (
                          <div
                            key={`data-${i}`}
                            className="absolute w-1 h-8 bg-gradient-to-b from-green-400 to-transparent rounded-full"
                            style={{
                              left: `${5 + i * 6}%`,
                              top: `${20 + (i % 4) * 20}%`,
                              animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Voice waveform */}
                      <div className="absolute bottom-20 left-8 right-8 flex items-end justify-center space-x-1">
                        {[...Array(25)].map((_, i) => (
                          <div
                            key={`wave-${i}`}
                            className="bg-gradient-to-t from-voiceup-skyblue to-cyan-400 rounded-t-sm"
                            style={{
                              width: '3px',
                              height: `${8 + Math.sin(i * 0.5) * 20 + Math.random() * 15}px`,
                              animation: `pulse ${0.8 + Math.random() * 0.4}s ease-in-out infinite`,
                              animationDelay: `${i * 0.05}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Floating AI indicators */}
                      <div className="absolute top-6 left-6 animate-fade-in">
                        <div className="bg-black/60 rounded-lg p-2 backdrop-blur-sm text-cyan-300 text-xs">
                          <Mic className="h-4 w-4 inline mr-1" />
                          Real-time Processing
                        </div>
                      </div>
                      
                      <div className="absolute top-6 right-6 animate-fade-in" style={{ animationDelay: '1s' }}>
                        <div className="bg-black/60 rounded-lg p-2 backdrop-blur-sm text-green-300 text-xs">
                          <BarChart3 className="h-4 w-4 inline mr-1" />
                          AI Analytics
                        </div>
                      </div>
                      
                      <div className="absolute bottom-32 right-6 animate-fade-in" style={{ animationDelay: '2s' }}>
                        <div className="bg-black/60 rounded-lg p-2 backdrop-blur-sm text-purple-300 text-xs">
                          <Bot className="h-4 w-4 inline mr-1" />
                          Neural Network
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer group">
                      <div className="relative">
                        <div className="w-24 h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                          <svg className="w-10 h-10 text-voiceup-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        {/* Multiple ripple effects */}
                        <div className="absolute inset-0 w-24 h-24 border-4 border-white/50 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 w-24 h-24 border-2 border-cyan-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                    
                    {/* Enhanced progress bar mockup */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 rounded-lg p-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-3 text-white text-sm">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-mono">2:05</span>
                        <div className="flex-1 bg-gray-600 rounded-full h-2 relative overflow-hidden">
                          <div className="bg-gradient-to-r from-voiceup-skyblue to-green-400 h-2 rounded-full w-1/3 relative">
                            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <span className="font-mono">5:30</span>
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview - Flowchart */}
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
            <div className="relative max-w-5xl mx-auto">
              {/* Architecture Layout */}
              <div className="flex flex-col items-center space-y-12">
                
                {/* Top Row - PSTN */}
                <div className="relative">
                  <div className="group relative">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-400">
                      <span className="font-bold text-lg">PSTN</span>
                    </div>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-8 bg-gray-400"></div>
                  <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIP</span>
                  <div className="w-0.5 h-8 bg-gray-400"></div>
                </div>

                {/* Second Row - SBC, VoiceUp Service, AI Service */}
                <div className="flex items-center justify-center space-x-16 w-full">
                  <div className="flex flex-col items-center">
                    <div className="group relative">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-500">
                        <span className="font-bold text-lg">SBC</span>
                      </div>
                    </div>
                    {/* Connection to VoiceUp */}
                    <div className="mt-4">
                      <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIPREC/SIP</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="group relative">
                      <div className="bg-gradient-to-r from-voiceup-skyblue to-voiceup-periwinkle text-white px-10 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-voiceup-navy">
                        <div className="flex flex-col items-center">
                          <Mic className="h-6 w-6 mb-2" />
                          <span className="font-bold text-lg">VoiceUp Service</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="group relative">
                      <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-10 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-purple-400">
                        <div className="flex flex-col items-center">
                          <Bot className="h-6 w-6 mb-2" />
                          <span className="font-bold text-lg">AI Service</span>
                        </div>
                      </div>
                    </div>
                    {/* Connection from VoiceUp */}
                    <div className="mt-4">
                      <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">API</span>
                    </div>
                  </div>
                </div>

                {/* Connection from SBC to PBX */}
                <div className="flex justify-start w-full">
                  <div className="flex flex-col items-center ml-12">
                    <div className="w-0.5 h-8 bg-gray-400"></div>
                    <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIP</span>
                    <div className="w-0.5 h-8 bg-gray-400"></div>
                  </div>
                </div>

                {/* PBX Row */}
                <div className="flex justify-start w-full">
                  <div className="group relative ml-12">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-500">
                      <div className="flex items-center space-x-3">
                        <PhoneCall className="h-6 w-6" />
                        <span className="font-bold text-lg">PBX</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical connection from VoiceUp Service to Agent Desktops */}
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-12 bg-gray-400"></div>
                    <div className="w-4 h-4 bg-voiceup-skyblue rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-8 bg-gray-400"></div>
                  </div>
                </div>

                {/* Agent Desktop Level */}
                <div className="flex items-center justify-center space-x-8 relative">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="group relative">
                      <div className="bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle text-white px-6 py-6 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-voiceup-navy">
                        <div className="text-center">
                          <Users className="h-6 w-6 mx-auto mb-2" />
                          <div className="text-sm font-bold">VoiceUp</div>
                          <div className="text-xs">Agent Desktop</div>
                        </div>
                      </div>
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
        
        @keyframes scale-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          50% { transform: scale(0.5) rotate(-90deg); opacity: 0.5; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        .animate-bounce-down {
          animation: bounce-down 2s infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Index;
