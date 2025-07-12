import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Mic, BarChart3, Bot, PhoneCall, BrainCircuit, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [videoInView, setVideoInView] = useState(false);
  const [videoScale, setVideoScale] = useState(0.6);
  const [platformCapabilitiesInView, setPlatformCapabilitiesInView] = useState(false);
  const [expandedCards, setExpandedCards] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredMenuId, setHoveredMenuId] = useState<number | null>(null);
  const [circularMenuInView, setCircularMenuInView] = useState(false);
  const dynamicSectionRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const platformCapabilitiesRef = useRef<HTMLDivElement>(null);
  const circularMenuRef = useRef<HTMLDivElement>(null);

  const capabilities = [
    {
      id: 1,
      title: "VoiceUp Bridge",
      icon: <BrainCircuit className="h-8 w-8" />,
      content: "A platform for seamless, flexible and user-friendly communication integration with AI platforms with robust and advanced services.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      color: "from-purple-500 to-blue-600",
      iconColor: "text-purple-400",
      bgGradient: "from-purple-50 to-blue-50",
      backgroundImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Speech Recognition", 
      icon: <Mic className="h-8 w-8" />,
      content: "Unlock the power of voice. Our advanced speech recognition technology transforms spoken words into accurate text, effortlessly. Streamline workflows, enhance accessibility, and connect with your audience like never before.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
      color: "from-cyan-500 to-blue-600",
      iconColor: "text-cyan-400",
      bgGradient: "from-cyan-50 to-blue-50",
      backgroundImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Call Recording & Transcription",
      icon: <PhoneCall className="h-8 w-8" />,
      content: "Capture Every Conversation. Our seamless call recording and accurate transcription services ensure you never miss a detail. Effortlessly record, transcribe, and access your important calls.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      color: "from-green-500 to-emerald-600",
      iconColor: "text-green-400",
      bgGradient: "from-green-50 to-emerald-50",
      backgroundImage: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Analytics & Insights",
      icon: <BarChart3 className="h-8 w-8" />,
      content: "True Call Intelligence. Our solution goes beyond simple transcription, providing deep analytics on every call. Identify patterns, track compliance, and gain unparalleled insights to enhance your sales, support, and operations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      color: "from-orange-500 to-red-600",
      iconColor: "text-orange-400",
      bgGradient: "from-orange-50 to-red-50",
      backgroundImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Agent Desktop Plugin",
      icon: <Headphones className="h-8 w-8" />,
      content: "Transcribe & Translate Live. Integrate our powerful desktop plugin to give your agents immediate access to call transcripts and translated text. Improve accuracy, accelerate training, and elevate customer satisfaction.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      color: "from-indigo-500 to-purple-600",
      iconColor: "text-indigo-400",
      bgGradient: "from-indigo-50 to-purple-50",
      backgroundImage: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "VoiceBot, ChatBot",
      icon: <Bot className="h-8 w-8" />,
      content: "Voice & Chat. Smart Automation. Deploy our AI-driven voicebots and chatbots to handle inquiries, resolve issues, and enhance customer service around the clock. Effortless, intelligent interactions. Scale your support with AI.",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop",
      color: "from-pink-500 to-rose-600",
      iconColor: "text-pink-400",
      bgGradient: "from-pink-50 to-rose-50",
      backgroundImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
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
      { threshold: 0.1 }
    );

    const platformCapabilitiesObserver = new IntersectionObserver(
      ([entry]) => {
        setPlatformCapabilitiesInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setTimeout(() => setExpandedCards(true), 500);
        } else {
          setExpandedCards(false);
        }
      },
      { threshold: 0.2 }
    );

    const circularMenuObserver = new IntersectionObserver(
      ([entry]) => {
        setCircularMenuInView(entry.isIntersecting);
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

    if (circularMenuRef.current) {
      circularMenuObserver.observe(circularMenuRef.current);
    }

    return () => {
      observer.disconnect();
      videoObserver.disconnect();
      platformCapabilitiesObserver.disconnect();
      circularMenuObserver.disconnect();
    };
  }, []);

  // Enhanced video scaling effect based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!videoSectionRef.current) return;
      
      const section = videoSectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      
      if (sectionTop <= windowHeight && sectionBottom >= 0) {
        const sectionCenter = sectionTop + sectionHeight / 2;
        const viewportCenter = windowHeight / 2;
        const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);
        const maxDistance = windowHeight / 2 + sectionHeight / 2;
        
        const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
        const scale = 0.5 + (progress * 0.5); // Scale from 0.5 to 1.0
        
        setVideoScale(Math.min(1, Math.max(0.5, scale)));
      }
    };

    // Advanced scroll progress for platform capabilities
    const handlePlatformScroll = () => {
      if (!platformCapabilitiesRef.current) return;
      
      const section = platformCapabilitiesRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
        setScrollProgress(progress);
      }
    };

    const combinedScrollHandler = () => {
      handleScroll();
      handlePlatformScroll();
    };

    window.addEventListener('scroll', combinedScrollHandler);
    combinedScrollHandler();
    
    return () => window.removeEventListener('scroll', combinedScrollHandler);
  }, []);

  // Get circular position for menu items
  const getCircularPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 360) / total - 90; // Start from top
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    };
  };

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
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/lovable-uploads/bghr.mp4" type="video/mp4" />
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

      {/* Platform Capabilities with Background Images */}
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
            {/* Left Side - Interactive Cards with Background Images */}
            <div className="space-y-4">
              {capabilities.map((capability) => (
                <div
                  key={capability.id}
                  className={`relative p-6 rounded-2xl border-2 cursor-pointer transition-all duration-500 overflow-hidden ${
                    hoveredCapability === capability.id || (!hoveredCapability && capability.id === 1)
                      ? 'border-voiceup-skyblue bg-voiceup-skyblue text-white shadow-xl scale-105'
                      : 'border-gray-200 bg-white text-voiceup-navy hover:border-voiceup-periwinkle hover:scale-102'
                  }`}
                  onMouseEnter={() => setHoveredCapability(capability.id)}
                >
                  {/* Background Image with Blue Tint and Zoom Effect */}
                  <div 
                    className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
                      hoveredCapability === capability.id || (!hoveredCapability && capability.id === 1)
                        ? 'scale-110 animate-slow-zoom' : 'scale-100'
                    }`}
                    style={{
                      backgroundImage: `url(${capability.backgroundImage})`,
                      opacity: 0.15
                    }}
                  />
                  
                  {/* Blue Tint Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 transition-opacity duration-500 ${
                      hoveredCapability === capability.id || (!hoveredCapability && capability.id === 1)
                        ? 'opacity-100' : 'opacity-60'
                    }`}
                  />
                  
                  {/* Content Overlay */}
                  <div className="relative z-10 flex items-center space-x-4">
                    <div className={`p-3 rounded-lg transition-all duration-300 ${
                      hoveredCapability === capability.id || (!hoveredCapability && capability.id === 1)
                        ? 'bg-white/20 scale-110'
                        : 'bg-voiceup-skyblue text-white'
                    }`}>
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{capability.title}</h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Content Display with Zoom Animation */}
            <div className="lg:sticky lg:top-24">
              {selectedCapability && (
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-in-right">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={selectedCapability.image} 
                      alt={selectedCapability.title}
                      className="w-full h-full object-cover transition-transform duration-700 scale-105 animate-slow-zoom"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm inline-block mb-2">
                        {selectedCapability.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{selectedCapability.title}</h3>
                    </div>
                  </div>
                  <div className="p-8 animate-slow-zoom">
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

      {/* Simplified Interactive Platform Experience */}
      <section ref={circularMenuRef} className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Interactive Platform Experience
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Experience our AI-powered voice technology through an immersive interactive journey
            </p>
          </div>

          {/* Interactive Tech Showcase */}
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.slice(0, 3).map((capability, index) => (
              <div
                key={capability.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{
                  animation: `fade-up 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Background Image with Blue Tint and Zoom Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-all duration-1000 animate-slow-zoom"
                  style={{
                    backgroundImage: `url(${capability.backgroundImage})`
                  }}
                />
                
                {/* Blue Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${capability.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {capability.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {capability.content.slice(0, 120)}...
                  </p>
                  
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore Feature</span>
                    <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
            
            {capabilities.slice(3).map((capability, index) => (
              <div
                key={capability.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{
                  animation: `fade-up 0.8s ease-out ${(index + 3) * 0.2}s both`
                }}
              >
                {/* Background Image with Blue Tint and Zoom Effect */}
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-all duration-1000 animate-slow-zoom"
                  style={{
                    backgroundImage: `url(${capability.backgroundImage})`
                  }}
                />
                
                {/* Blue Tint Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${capability.color} text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    {capability.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {capability.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {capability.content.slice(0, 120)}...
                  </p>
                  
                  <div className="mt-6 flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    <span className="text-sm font-medium">Explore Feature</span>
                    <ArrowDown className="ml-2 h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Central Tech Hub */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 animate-pulse">
              <div className="text-white text-center">
                <BrainCircuit className="h-12 w-12 mx-auto mb-2" />
                <div className="text-sm font-bold">AI Core</div>
              </div>
            </div>
            
            <p className="mt-8 text-lg text-gray-300 max-w-2xl mx-auto">
              All capabilities seamlessly integrated through our unified AI platform
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Demo Video Section with Better Background Coverage */}
      <section ref={videoSectionRef} className="py-20 bg-voiceup-navy relative overflow-hidden min-h-screen flex items-center">
        {/* Enhanced Moving Background with Complete Coverage */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Primary Layer - Larger Coverage */}
          <div 
            className="absolute -inset-[600px] opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2360A5FA' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              animation: 'float 25s ease-in-out infinite reverse',
              transform: 'rotate(45deg) scale(8)'
            }}
          />
          {/* Secondary Layer - Different Pattern */}
          <div 
            className="absolute -inset-[700px] opacity-15"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2360A5FA' fill-opacity='0.3'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='20' r='1'/%3E%3Ccircle cx='20' cy='60' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'float 30s ease-in-out infinite',
              transform: 'rotate(-30deg) scale(9)'
            }}
          />
          {/* Tertiary Layer - Largest Coverage */}
          <div 
            className="absolute -inset-[800px] opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2360A5FA' fill-opacity='0.2'%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3Ccircle cx='90' cy='30' r='1.5'/%3E%3Ccircle cx='30' cy='90' r='1.5'/%3E%3Ccircle cx='90' cy='90' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'float 35s ease-in-out infinite reverse',
              transform: 'rotate(15deg) scale(10)'
            }}
          />
          {/* Fourth Layer - Maximum Coverage */}
          <div 
            className="absolute -inset-[900px] opacity-8"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h5v5h-5zm30 0h5v5h-5zm30 0h5v5h-5zm30 0h5v5h-5zm30 0h5v5h-5zm30 0h5v5h-5z' fill='%2360A5FA' fill-opacity='0.1'/%3E%3C/svg%3E")`,
              animation: 'float 40s ease-in-out infinite',
              transform: 'rotate(-45deg) scale(11)'
            }}
          />
          {/* Fifth Layer - Ultra Coverage */}
          <div 
            className="absolute -inset-[1000px] opacity-6"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='150' height='150' viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2360A5FA' fill-opacity='0.15'%3E%3Ccircle cx='75' cy='75' r='2'/%3E%3Ccircle cx='25' cy='25' r='1'/%3E%3Ccircle cx='125' cy='25' r='1'/%3E%3Ccircle cx='25' cy='125' r='1'/%3E%3Ccircle cx='125' cy='125' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              animation: 'float 45s ease-in-out infinite reverse',
              transform: 'rotate(60deg) scale(12)'
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <div className={`transition-all duration-1000 mb-12 ${videoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              See How Enterprises Use VoiceUp
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Watch real-world implementations and discover the transformative impact of our voice automation platform
            </p>
          </div>
          
          <div 
            className="relative transition-all duration-700 ease-out mx-auto"
            style={{ 
              transform: `scale(${videoScale})`,
              maxWidth: '900px'
            }}
          >
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
                    {/* Dynamic Moving Thumbnail - AI Related */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                      {/* Moving Network Visualization */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Central AI Brain */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                              <Bot className="h-12 w-12 text-white" />
                            </div>
                          </div>
                          
                          {/* Orbiting Data Points */}
                          {[...Array(8)].map((_, i) => (
                            <div
                              key={`orbit-${i}`}
                              className="absolute w-4 h-4 bg-cyan-400 rounded-full animate-pulse"
                              style={{
                                left: `calc(50% + ${Math.cos((i * 45 * Math.PI) / 180) * 120}px - 8px)`,
                                top: `calc(50% + ${Math.sin((i * 45 * Math.PI) / 180) * 120}px - 8px)`,
                                animation: `orbit ${8 + i}s linear infinite`,
                                animationDelay: `${i * 0.5}s`
                              }}
                            />
                          ))}
                          
                          {/* Floating Data Streams */}
                          {[...Array(12)].map((_, i) => (
                            <div
                              key={`stream-${i}`}
                              className="absolute w-1 h-12 bg-gradient-to-b from-green-400 to-transparent rounded-full"
                              style={{
                                left: `${10 + i * 7}%`,
                                top: `${20 + (i % 3) * 25}%`,
                                animation: `float ${2 + Math.random() * 2}s ease-in-out infinite`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                          
                          {/* Pulsing Connection Lines */}
                          <svg className="absolute inset-0 w-full h-full opacity-60">
                            {[...Array(6)].map((_, i) => (
                              <line
                                key={`line-${i}`}
                                x1="50%"
                                y1="50%"
                                x2={`${50 + Math.cos((i * 60 * Math.PI) / 180) * 30}%`}
                                y2={`${50 + Math.sin((i * 60 * Math.PI) / 180) * 30}%`}
                                stroke="rgba(99, 102, 241, 0.6)"
                                strokeWidth="2"
                                strokeDasharray="5,5"
                                className="animate-pulse"
                                style={{ animationDelay: `${i * 0.3}s` }}
                              />
                            ))}
                          </svg>
                        </div>
                      </div>
                      
                      {/* Voice Waveform Animation */}
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
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes float-tech {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(5px) translateX(-3px); }
          75% { transform: translateY(-5px) translateX(3px); }
        }
        
        @keyframes fade-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1.05); }
          50% { transform: scale(1.1); }
        }
        
        .animate-bounce-down {
          animation: bounce-down 2s infinite;
        }
        
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
