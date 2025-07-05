
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
  const [videoScrollProgress, setVideoScrollProgress] = useState(0);
  const [hoveredPlatformCapability, setHoveredPlatformCapability] = useState<number | null>(null);
  const [scrollCapabilityIndex, setScrollCapabilityIndex] = useState(0);
  const [scrollCapabilityInView, setScrollCapabilityInView] = useState(false);
  const [bloomingCapabilitiesProgress, setBloomingCapabilitiesProgress] = useState(0);
  const [bloomingInView, setBloomingInView] = useState(false);
  const dynamicSectionRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const scrollCapabilitiesRef = useRef<HTMLDivElement>(null);
  const bloomingCapabilitiesRef = useRef<HTMLDivElement>(null);

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

  const bloomingCapabilities = [
    {
      id: 1,
      title: "Multiple channels",
      description: "Use voice, SMS, email and chat in sync to boost engagement and maximize collections.",
      icon: "🔗",
      position: "top-left"
    },
    {
      id: 2,
      title: "Compliance", 
      description: "The only compliance-first Omnichannel Conversational AI solution.",
      icon: "🛡️",
      position: "top-right"
    },
    {
      id: 3,
      title: "Analytics",
      description: "Single dashboard view of every campaign outcome featuring trends and actionable insights.",
      icon: "📊",
      position: "bottom-left"
    },
    {
      id: 4,
      title: "Integrations",
      description: "A vast array of out-of-the-box integrations with CRMs, payment gateways, telephony, and SMS solutions.",
      icon: "⚙️",
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
      },
      { threshold: 0.1 }
    );

    const scrollCapabilitiesObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollCapabilityInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const bloomingObserver = new IntersectionObserver(
      ([entry]) => {
        setBloomingInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (dynamicSectionRef.current) {
      observer.observe(dynamicSectionRef.current);
    }

    if (videoSectionRef.current) {
      videoObserver.observe(videoSectionRef.current);
    }

    if (scrollCapabilitiesRef.current) {
      scrollCapabilitiesObserver.observe(scrollCapabilitiesRef.current);
    }

    if (bloomingCapabilitiesRef.current) {
      bloomingObserver.observe(bloomingCapabilitiesRef.current);
    }

    return () => {
      observer.disconnect();
      videoObserver.disconnect();
      scrollCapabilitiesObserver.disconnect();
      bloomingObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollCapabilitiesRef.current && scrollCapabilityInView) {
        const rect = scrollCapabilitiesRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + sectionHeight)));
        const newIndex = Math.floor(scrollProgress * capabilities.length);
        setScrollCapabilityIndex(Math.min(newIndex, capabilities.length - 1));
      }

      if (bloomingCapabilitiesRef.current && bloomingInView) {
        const rect = bloomingCapabilitiesRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + sectionHeight)));
        setBloomingCapabilitiesProgress(progress);
      }

      if (videoSectionRef.current && videoInView) {
        const rect = videoSectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setVideoScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollCapabilityInView, capabilities.length, bloomingInView, videoInView]);

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

      {/* New Blooming Platform Capabilities */}
      <section ref={bloomingCapabilitiesRef} className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden min-h-[200vh]">
        {/* Moving background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
          {/* Tech circuit pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <defs>
              <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 0 25 L 50 25 M 25 0 L 25 50" stroke="rgba(99, 255, 255, 0.3)" strokeWidth="1"/>
                <circle cx="25" cy="25" r="3" fill="rgba(99, 255, 255, 0.5)"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Platform Capabilities
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experience our comprehensive AI-powered platform
              </p>
            </div>

            <div className="relative h-[600px] flex items-center justify-center">
              {/* Central AI Circle */}
              <div className="relative z-20 w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center animate-pulse shadow-2xl">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                  <div className="text-6xl font-bold text-white z-10">AI</div>
                  {/* Circuit lines emanating from center */}
                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px h-16 bg-gradient-to-t from-cyan-400 to-transparent"
                        style={{
                          transform: `rotate(${i * 45}deg)`,
                          transformOrigin: '50% 100%',
                          bottom: '50%',
                          left: '50%'
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 animate-ping"></div>
                </div>
              </div>

              {/* Blooming Cards */}
              {bloomingCapabilities.map((capability, index) => {
                const progress = Math.max(0, Math.min(1, (bloomingCapabilitiesProgress - index * 0.2) * 2));
                const scale = progress;
                const opacity = progress;
                
                let position = {};
                switch(capability.position) {
                  case 'top-left':
                    position = { top: '10%', left: '5%' };
                    break;
                  case 'top-right':
                    position = { top: '10%', right: '5%' };
                    break;
                  case 'bottom-left':
                    position = { bottom: '10%', left: '5%' };
                    break;
                  case 'bottom-right':
                    position = { bottom: '10%', right: '5%' };
                    break;
                }

                return (
                  <div
                    key={capability.id}
                    className="absolute w-80 transition-all duration-1000 ease-out"
                    style={{
                      ...position,
                      transform: `scale(${scale})`,
                      opacity: opacity
                    }}
                  >
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-2xl">{capability.icon}</div>
                        <h3 className="text-xl font-bold text-voiceup-navy">
                          {capability.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {capability.description}
                      </p>
                      <Button 
                        asChild
                        className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full text-sm"
                      >
                        <Link to="/solutions">Read More →</Link>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-triggered Platform Capabilities */}
      <section ref={scrollCapabilitiesRef} className="py-20 bg-gradient-to-br from-voiceup-navy via-indigo-900 to-purple-900 relative overflow-hidden min-h-[300vh]">
        {/* Enhanced Moving Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
          {/* Floating geometric shapes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rotate-45"
              style={{
                width: `${20 + i * 5}px`,
                height: `${20 + i * 5}px`,
                left: `${5 + i * 6}%`,
                top: `${10 + (i % 4) * 20}%`,
                animation: `float ${8 + i * 2}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
          {/* Wave lines */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1000 1000">
            <path
              d="M0,400 Q250,300 500,400 T1000,400 V1000 H0 Z"
              fill="url(#wave1)"
              className="animate-pulse"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0;50,0;0,0"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 0.2)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="sticky top-0 h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Platform Capabilities
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experience our dynamic AI-powered platform capabilities
              </p>
            </div>

            <div className="flex items-center justify-center min-h-[600px] relative">
              {/* AI Circle - moves left/right based on scroll */}
              <div 
                className={`relative z-20 transition-all duration-1000 ease-out ${
                  scrollCapabilityIndex % 2 === 0 ? 'translate-x-0' : 'translate-x-96'
                }`}
              >
                <div className="w-64 h-64 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center animate-pulse shadow-2xl">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                    <div className="text-6xl font-bold text-white z-10">AI</div>
                    {/* Blooming effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30 animate-ping"></div>
                  </div>
                </div>
              </div>

              {/* Content Cards - appear on left/right alternately */}
              {scrollCapabilityInView && (
                <div 
                  className={`absolute transition-all duration-1000 ease-out ${
                    scrollCapabilityIndex % 2 === 0 ? 'left-0 translate-x-0' : 'right-0 -translate-x-0'
                  } w-96`}
                >
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 bg-voiceup-skyblue rounded-lg text-white">
                        {capabilities[scrollCapabilityIndex]?.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-voiceup-navy">
                        {capabilities[scrollCapabilityIndex]?.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {capabilities[scrollCapabilityIndex]?.content}
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

      {/* Enhanced Demo Video Section */}
      <section ref={videoSectionRef} className="py-20 bg-voiceup-navy relative overflow-hidden">
        {/* Moving background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-indigo-900/30 animate-pulse"></div>
          
          {/* Floating tech elements */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`tech-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/60 to-blue-500/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
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
          
          <div 
            className={`relative transition-all duration-1000 ${videoInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} 
            style={{ 
              transitionDelay: '300ms',
              transform: `scale(${0.6 + videoScrollProgress * 0.4})`,
              width: videoScrollProgress > 0.5 ? '100vw' : 'auto',
              height: videoScrollProgress > 0.5 ? '100vh' : 'auto',
              position: videoScrollProgress > 0.5 ? 'fixed' : 'relative',
              top: videoScrollProgress > 0.5 ? '0' : 'auto',
              left: videoScrollProgress > 0.5 ? '0' : 'auto',
              zIndex: videoScrollProgress > 0.5 ? 50 : 10
            }}
          >
            {/* Enhanced Animated Border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-lavender p-2 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-r from-voiceup-skyblue via-voiceup-periwinkle to-voiceup-lavender rounded-3xl" style={{ animation: 'spin 10s linear infinite' }}></div>
                <div className="bg-voiceup-navy rounded-2xl h-full relative z-10"></div>
              </div>
              
              {/* Video Container */}
              <div className="relative bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle p-3 rounded-3xl">
                <div className="bg-gradient-to-br from-gray-900 to-voiceup-navy rounded-2xl overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    {/* Moving GIF-like Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 overflow-hidden">
                      {/* Animated data streams */}
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={`stream-${i}`}
                          className="absolute h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent"
                          style={{
                            width: '2px',
                            left: `${15 + i * 15}%`,
                            animation: `moveUp ${2 + i * 0.5}s ease-in-out infinite`,
                            animationDelay: `${i * 0.3}s`
                          }}
                        />
                      ))}
                      
                      {/* Rotating radar sweep */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-green-400/50 rounded-full">
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-green-400/80 to-transparent rounded-full"
                          style={{
                            clipPath: 'polygon(50% 50%, 50% 0%, 100% 50%)',
                            animation: 'spin 3s linear infinite'
                          }}
                        />
                      </div>
                      
                      {/* Pulsing nodes */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={`node-${i}`}
                          className="absolute w-3 h-3 bg-cyan-400 rounded-full animate-pulse"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${30 + (i % 3) * 20}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      ))}
                      
                      {/* Moving waveform */}
                      <div className="absolute bottom-1/3 left-1/4 right-1/4 flex items-end space-x-1">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={`wave-${i}`}
                            className="bg-gradient-to-t from-green-400 to-cyan-400 rounded-t-sm"
                            style={{
                              width: '3px',
                              height: `${10 + Math.sin(Date.now() * 0.005 + i * 0.5) * 20}px`,
                              animation: `waveMove ${1 + Math.random()}s ease-in-out infinite`,
                              animationDelay: `${i * 0.1}s`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Floating UI elements */}
                      <div className="absolute top-6 left-6 bg-black/60 rounded-lg p-2 backdrop-blur-sm animate-fade-in">
                        <div className="text-green-400 text-xs font-mono">REAL-TIME AI</div>
                      </div>
                      <div className="absolute top-6 right-6 bg-black/60 rounded-lg p-2 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1s' }}>
                        <div className="text-cyan-400 text-xs font-mono">PROCESSING</div>
                      </div>
                      <div className="absolute bottom-16 left-6 bg-black/60 rounded-lg p-2 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '2s' }}>
                        <div className="text-purple-400 text-xs font-mono">VOICE ANALYTICS</div>
                      </div>
                    </div>
                    
                    {/* Enhanced Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer group">
                      <div className="relative">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                          <svg className="w-8 h-8 text-voiceup-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        {/* Multiple ripple effects */}
                        <div className="absolute inset-0 w-20 h-20 border-2 border-white/50 rounded-full animate-ping"></div>
                        <div className="absolute inset-0 w-20 h-20 border-2 border-white/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Architecture Overview - Flowchart */}
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
                  <div className="w-0.5 h-12 bg-gray-400"></div>
                  <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIP</span>
                  <div className="w-0.5 h-12 bg-gray-400"></div>
                </div>

                {/* Second Row - SBC, VoiceUp Service, AI Service */}
                <div className="w-full max-w-6xl">
                  <div className="grid grid-cols-3 gap-16 items-center">
                    <div className="flex flex-col items-center">
                      <div className="group relative">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl shadow-lg cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-blue-500">
                          <span className="font-bold text-lg">SBC</span>
                        </div>
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
                    </div>
                  </div>

                  {/* Connection lines between components */}
                  <div className="grid grid-cols-3 gap-16 mt-6">
                    <div className="flex justify-center">
                      <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIPREC/SIP</span>
                    </div>
                    <div></div>
                    <div className="flex justify-center">
                      <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">API</span>
                    </div>
                  </div>
                </div>

                {/* Connection from SBC to PBX */}
                <div className="flex justify-start w-full max-w-6xl">
                  <div className="flex flex-col items-center" style={{ marginLeft: '16.67%' }}>
                    <div className="w-0.5 h-12 bg-gray-400"></div>
                    <span className="text-xs bg-gray-200 px-3 py-1 rounded-full font-semibold border">SIP</span>
                    <div className="w-0.5 h-12 bg-gray-400"></div>
                  </div>
                </div>

                {/* PBX Row */}
                <div className="flex justify-start w-full max-w-6xl">
                  <div className="group relative" style={{ marginLeft: '16.67%' }}>
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
                    </div>
                  ))}
                </div>

                {/* Customer Premise Label */}
                <div className="mt-12 text-center">
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
        
        @keyframes moveUp {
          0% { transform: translateY(100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        
        @keyframes waveMove {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
        
        .animate-bounce-down {
          animation: bounce-down 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
