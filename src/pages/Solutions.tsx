
import React from 'react';
import { Link } from 'react-router-dom';
import { Mic, PhoneCall, BarChart3, Users, Bot, Zap, DollarSign, Shield, TrendingUp, Target, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Solutions = () => {
  const solutions = [
    {
      title: "VoiceUp Bridge",
      description: "A platform for seamless communication integration with AI platforms",
      icon: <Zap className="h-12 w-12" />,
      features: ["Real-time integration", "Multi-platform support", "Scalable architecture"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop"
    },
    {
      title: "Recording, Transcription and Auditing",
      description: "High-quality audio recording with transcription services. Auditing for compliance.",
      icon: <PhoneCall className="h-12 w-12" />,
      features: ["HD recording quality", "99.5% transcription accuracy", "Compliance tracking"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      title: "Speech Recognition",
      description: "Advanced speech recognition technology for various applications.",
      icon: <Mic className="h-12 w-12" />,
      features: ["20+ languages", "Noise cancellation", "Custom vocabulary"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=400&h=300&fit=crop"
    },
    {
      title: "Analytics and Insights",
      description: "Data analytics tools for actionable insights.",
      icon: <BarChart3 className="h-12 w-12" />,
      features: ["Real-time dashboards", "Predictive analytics", "Custom reports"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    },
    {
      title: "Agent Desktop Plugin",
      description: "Software Development Kit for easy integration in Agent Desktop.",
      icon: <Users className="h-12 w-12" />,
      features: ["Easy integration", "Real-time assistance", "Multi-language display"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
    },
    {
      title: "VoiceBot & ChatBot",
      description: "AI-driven conversational bot feature for voice and chat.",
      icon: <Bot className="h-12 w-12" />,
      features: ["24/7 availability", "Natural conversations", "Intent recognition"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
    }
  ];

  const analyticsFeatures = [
    {
      title: "Operational Metrics",
      description: "Tracks agent performance and resolution rates for efficiency.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      isImageLeft: true
    },
    {
      title: "Roles-Based Representation",
      description: "Provides customized dashboards for different user roles.",
      image: "https://images.unsplash.com/photo-1553028826-f4804151e596?w=500&h=300&fit=crop",
      isImageLeft: false
    },
    {
      title: "AI-Powered Analytics",
      description: "Utilizes AI to analyze sentiments and trends from recordings.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      isImageLeft: true
    },
    {
      title: "Flexibility",
      description: "Allows integration with various recording platforms.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
      isImageLeft: false
    }
  ];

  const valueProps = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Rapid Implementation",
      description: "Quick setup and deployment with minimal disruption."
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Cost Effective",
      description: "Reduce operational costs while improving service quality."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-grade security with compliance to standards."
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Solution",
      description: "Grows from small teams to enterprise scale."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Improved Accuracy",
      description: "AI-powered transcription and analysis with 99.5% accuracy rates."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Support",
      description: "Multi-language support and 24/7 customer service."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            VoiceUp Solutions
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Comprehensive voice automation solutions designed to transform your contact center operations
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-voiceup-navy hover:bg-gray-100 px-8 py-4 text-lg rounded-full animate-fade-in"
            style={{animationDelay: '0.4s'}}
          >
            <Link to="/contact">Book a Demo</Link>
          </Button>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-voiceup-navy mb-4">
              Overview of VoiceUp Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six comprehensive solutions to meet all your voice automation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm inline-block">
                      {solution.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-voiceup-navy mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-voiceup-skyblue rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full"
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics & Insights Section */}
      <section className="py-20 bg-gradient-to-br from-voiceup-blush to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-voiceup-navy mb-4">
              Analytics & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your data into actionable insights with our comprehensive analytics platform
            </p>
          </div>

          <div className="space-y-16">
            {analyticsFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  !feature.isImageLeft ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-voiceup-navy/20 to-voiceup-skyblue/20"></div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold text-voiceup-navy">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button 
                    asChild
                    className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full"
                  >
                    <Link to="/contact">Explore Feature</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-voiceup-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              VoiceUp: Value Proposition
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Why enterprises choose VoiceUp for their voice automation needs
            </p>
          </div>

          {/* Flowchart-style layout */}
          <div className="relative">
            {/* Central Hub */}
            <div className="flex justify-center mb-12">
              <div className="bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle p-8 rounded-full shadow-2xl">
                <div className="text-center text-white">
                  <img 
                    src="/lovable-uploads/771100c5-8633-4c2a-adc9-43008ea382e0.png" 
                    alt="VoiceUp" 
                    className="h-12 w-12 mx-auto mb-2"
                  />
                  <span className="text-lg font-bold">VoiceUp</span>
                </div>
              </div>
            </div>

            {/* Value Props in circular arrangement */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="text-center">
                    <div className="p-4 bg-gradient-to-br from-voiceup-skyblue to-voiceup-periwinkle rounded-2xl text-white inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                      {prop.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-voiceup-navy mb-3">
                      {prop.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Connection lines (decorative) */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" style={{zIndex: -1}}>
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4C8CC0" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#667BAB" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                {/* Decorative connecting lines */}
                <path d="M 50% 20% Q 25% 40% 16.66% 60%" stroke="url(#connectionGradient)" strokeWidth="2" fill="none"/>
                <path d="M 50% 20% Q 75% 40% 83.33% 60%" stroke="url(#connectionGradient)" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
