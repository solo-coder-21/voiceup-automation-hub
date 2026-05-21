import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Mic, BarChart3, Bot, PhoneCall, BrainCircuit, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);
  const [videoInView, setVideoInView] = useState(false);
  const [platformCapabilitiesInView, setPlatformCapabilitiesInView] = useState(false);
  const [circularMenuInView, setCircularMenuInView] = useState(false);

  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const platformCapabilitiesRef = useRef<HTMLDivElement>(null);
  const circularMenuRef = useRef<HTMLDivElement>(null);
  const videoFrameRef = useRef<HTMLDivElement>(null);

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

  // IntersectionObservers — used to gate the heaviest animations to when their section is on-screen.
  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      ([entry]) => setVideoInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const platformCapabilitiesObserver = new IntersectionObserver(
      ([entry]) => setPlatformCapabilitiesInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const circularMenuObserver = new IntersectionObserver(
      ([entry]) => setCircularMenuInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (videoSectionRef.current) videoObserver.observe(videoSectionRef.current);
    if (platformCapabilitiesRef.current) platformCapabilitiesObserver.observe(platformCapabilitiesRef.current);
    if (circularMenuRef.current) circularMenuObserver.observe(circularMenuRef.current);

    return () => {
      videoObserver.disconnect();
      platformCapabilitiesObserver.disconnect();
      circularMenuObserver.disconnect();
    };
  }, []);

  // Pause the hero background <video> when the hero leaves the viewport so it doesn't keep
  // decoding frames while the user scrolls deeper into the page.
  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );
    heroObserver.observe(video);
    return () => heroObserver.disconnect();
  }, []);

  // Scroll-linked styles driven via CSS variables + rAF, instead of React state. This keeps
  // the scroll handler from re-rendering the whole page on every frame, which was the main
  // source of scroll-jacking lag.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;

      const frame = videoFrameRef.current;
      if (frame && videoSectionRef.current) {
        const rect = videoSectionRef.current.getBoundingClientRect();
        const wh = window.innerHeight;
        if (rect.top <= wh && rect.bottom >= 0) {
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - wh / 2);
          const maxDistance = wh / 2 + rect.height / 2;
          const progress = Math.max(0, 1 - distance / maxDistance);
          const scale = Math.min(1, Math.max(0.5, 0.5 + progress * 0.5));
          frame.style.setProperty('--video-scale', scale.toFixed(3));
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            ref={heroVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/voiceup-logo.png"
            className="w-full h-full object-cover"
          >
            <source src="/lovable-uploads/bghr.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-voiceup-navy/80 via-voiceup-navy/60 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 animate-fade-in">
            VoiceUp: Innovative <span className="gradient-text text-transparent bg-gradient-to-r from-voiceup-skyblue to-white bg-clip-text">Voice Solutions</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl mb-8 text-gray-200 font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore the cutting-edge advancements in voice technology and how VoiceUp is redefining communication and interaction in today's AI landscape.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white px-8 py-4 text-lg rounded-full animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-down">
          <ArrowDown className="h-6 w-6" />
        </div>
      </section>

      {/* Platform Capabilities */}
      <section ref={platformCapabilitiesRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-voiceup-navy mb-4">
              Platform Capabilities
            </h2>
            <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our comprehensive voice automation platform transforms contact center operations
            </p>
          </div>

          <div
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
            data-active={platformCapabilitiesInView ? 'true' : 'false'}
          >
            {/* Left Side - Interactive Cards */}
            <div className="space-y-4">
              {capabilities.map((capability) => {
                const isActive = hoveredCapability === capability.id || (!hoveredCapability && capability.id === 1);
                return (
                  <div
                    key={capability.id}
                    className={`relative p-5 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'border-voiceup-skyblue bg-voiceup-skyblue text-white shadow-xl scale-[1.02]'
                        : 'border-gray-200 bg-white text-voiceup-navy hover:border-voiceup-periwinkle'
                    }`}
                    onMouseEnter={() => setHoveredCapability(capability.id)}
                    onFocus={() => setHoveredCapability(capability.id)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                  >
                    <div
                      className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ${
                        isActive && platformCapabilitiesInView ? 'animate-slow-zoom' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${capability.backgroundImage})`,
                        opacity: 0.15
                      }}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 transition-opacity duration-300 ${
                        isActive ? 'opacity-100' : 'opacity-60'
                      }`}
                    />
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className={`p-3 rounded-lg transition-transform duration-300 ${
                        isActive ? 'bg-white/20 scale-110' : 'bg-voiceup-skyblue text-white'
                      }`}>
                        {capability.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold">{capability.title}</h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side - Content Display */}
            <div className="lg:sticky lg:top-24">
              {selectedCapability && (
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-in-right">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <img
                      src={selectedCapability.image}
                      alt={selectedCapability.title}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover ${platformCapabilitiesInView ? 'animate-slow-zoom' : ''}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-6 text-white">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm inline-block mb-2">
                        {selectedCapability.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold">{selectedCapability.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
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

      {/* Interactive Platform Experience */}
      <section
        ref={circularMenuRef}
        className="py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden"
        data-active={circularMenuInView ? 'true' : 'false'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
              Interactive Platform Experience
            </h2>
            <p className="text-base sm:text-xl text-white/90 max-w-3xl mx-auto">
              Experience our AI-powered voice technology through an immersive interactive journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={capability.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-white/20 hover:border-cyan-400/50 transition-colors duration-300 overflow-hidden"
                style={{
                  animation: circularMenuInView ? `fade-up 0.8s ease-out ${Math.min(index, 5) * 0.15}s both` : undefined
                }}
              >
                <div
                  className={`absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500 ${circularMenuInView ? 'animate-slow-zoom' : ''}`}
                  style={{ backgroundImage: `url(${capability.backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${capability.color} text-white mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    {capability.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {capability.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
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
          <div className="mt-16 sm:mt-20 text-center">
            <div className={`inline-flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-2xl shadow-cyan-500/25 ${circularMenuInView ? 'animate-pulse' : ''}`}>
              <div className="text-white text-center">
                <BrainCircuit className="h-10 w-10 sm:h-12 sm:w-12 mx-auto mb-2" />
                <div className="text-sm font-bold">AI Core</div>
              </div>
            </div>

            <p className="mt-8 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
              All capabilities seamlessly integrated through our unified AI platform
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section
        ref={videoSectionRef}
        className="py-16 sm:py-20 bg-voiceup-navy relative overflow-hidden flex items-center"
        data-active={videoInView ? 'true' : 'false'}
      >
        {/* Two lightweight pattern layers (was five) — kept conditional on view to save GPU */}
        {videoInView && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            <div
              className="absolute -inset-[400px] opacity-15 animate-bg-float-slow"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%2360A5FA' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                transform: 'rotate(45deg) scale(6)'
              }}
            />
            <div
              className="absolute -inset-[500px] opacity-10 animate-bg-float-slower"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2360A5FA' fill-opacity='0.3'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='20' r='1'/%3E%3Ccircle cx='20' cy='60' r='1'/%3E%3Ccircle cx='60' cy='60' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                transform: 'rotate(-30deg) scale(7)'
              }}
            />
          </div>
        )}

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <div className={`transition-all duration-700 mb-12 ${videoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              See How Enterprises Use VoiceUp
            </h2>
            <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch real-world implementations and discover the transformative impact of our voice automation platform
            </p>
          </div>

          <div
            ref={videoFrameRef}
            className="relative mx-auto will-change-transform video-scaler"
            style={{ maxWidth: '900px' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle p-2 sm:p-3 rounded-3xl">
                <div className="bg-gradient-to-br from-gray-900 to-voiceup-navy rounded-2xl overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          {/* Central AI Brain */}
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className={`w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg ${videoInView ? 'animate-pulse' : ''}`}>
                              <Bot className="h-10 w-10 sm:h-12 sm:w-12 text-white" />
                            </div>
                          </div>

                          {/* Orbiting Data Points (6, was 8). Pause when section off-screen. */}
                          {videoInView && [...Array(6)].map((_, i) => {
                            const angle = (i * 60 * Math.PI) / 180;
                            return (
                              <div
                                key={`orbit-${i}`}
                                className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full"
                                style={{
                                  left: `calc(50% + ${Math.cos(angle) * 100}px - 8px)`,
                                  top: `calc(50% + ${Math.sin(angle) * 100}px - 8px)`,
                                  animation: `orbit ${10 + i}s linear infinite`,
                                  animationDelay: `${i * 0.4}s`
                                }}
                              />
                            );
                          })}

                          {/* Data Streams (8, was 12). Deterministic delays — no Math.random. */}
                          {videoInView && [...Array(8)].map((_, i) => (
                            <div
                              key={`stream-${i}`}
                              className="absolute w-1 h-10 bg-gradient-to-b from-green-400 to-transparent rounded-full"
                              style={{
                                left: `${12 + i * 10}%`,
                                top: `${22 + (i % 3) * 22}%`,
                                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                                animationDelay: `${i * 0.15}s`
                              }}
                            />
                          ))}

                          {/* Pulsing Connection Lines (4, was 6) */}
                          {videoInView && (
                            <svg className="absolute inset-0 w-full h-full opacity-60" aria-hidden="true">
                              {[...Array(4)].map((_, i) => (
                                <line
                                  key={`line-${i}`}
                                  x1="50%"
                                  y1="50%"
                                  x2={`${50 + Math.cos((i * 90 * Math.PI) / 180) * 30}%`}
                                  y2={`${50 + Math.sin((i * 90 * Math.PI) / 180) * 30}%`}
                                  stroke="rgba(99, 102, 241, 0.6)"
                                  strokeWidth="2"
                                  strokeDasharray="5,5"
                                  className="animate-pulse"
                                  style={{ animationDelay: `${i * 0.4}s` }}
                                />
                              ))}
                            </svg>
                          )}
                        </div>
                      </div>

                      {/* Voice Waveform — 16 bars (was 25), deterministic heights */}
                      {videoInView && (
                        <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 right-4 sm:right-8 flex items-end justify-center space-x-1">
                          {[...Array(16)].map((_, i) => {
                            const h = 10 + Math.abs(Math.sin(i * 0.6)) * 22;
                            return (
                              <div
                                key={`wave-${i}`}
                                className="bg-gradient-to-t from-voiceup-skyblue to-cyan-400 rounded-t-sm"
                                style={{
                                  width: '3px',
                                  height: `${h}px`,
                                  animation: `pulse ${1 + (i % 4) * 0.2}s ease-in-out infinite`,
                                  animationDelay: `${i * 0.06}s`
                                }}
                              />
                            );
                          })}
                        </div>
                      )}

                      {/* Floating AI indicators */}
                      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 animate-fade-in">
                        <div className="bg-black/60 rounded-lg p-2 backdrop-blur-sm text-cyan-300 text-xs">
                          <Mic className="h-4 w-4 inline mr-1" />
                          Real-time Processing
                        </div>
                      </div>

                      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                        <div className="bg-black/60 rounded-lg p-2 backdrop-blur-sm text-green-300 text-xs">
                          <BarChart3 className="h-4 w-4 inline mr-1" />
                          AI Analytics
                        </div>
                      </div>

                      <div className="absolute bottom-24 sm:bottom-32 right-4 sm:right-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                        <div className="bg-black/60 rounded-lg p-2 backdrop-blur-sm text-purple-300 text-xs">
                          <Bot className="h-4 w-4 inline mr-1" />
                          Neural Network
                        </div>
                      </div>
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300 cursor-pointer group">
                      <div className="relative">
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                          <svg className="w-9 h-9 sm:w-10 sm:h-10 text-voiceup-navy ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        {videoInView && (
                          <>
                            <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 border-4 border-white/50 rounded-full animate-ping"></div>
                            <div className="absolute inset-0 w-20 h-20 sm:w-24 sm:h-24 border-2 border-cyan-400/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Progress bar mockup */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-black/60 rounded-lg p-2 sm:p-3 backdrop-blur-sm">
                      <div className="flex items-center space-x-2 sm:space-x-3 text-white text-xs sm:text-sm">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="font-mono">2:05</span>
                        <div className="flex-1 bg-gray-600 rounded-full h-1.5 sm:h-2 relative overflow-hidden">
                          <div className="bg-gradient-to-r from-voiceup-skyblue to-green-400 h-full rounded-full w-1/3 relative">
                            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <span className="font-mono">5:30</span>
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
    </div>
  );
};

export default Index;
