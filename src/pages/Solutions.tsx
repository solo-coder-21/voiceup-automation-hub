
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mic, PhoneCall, BarChart3, Users, Bot, Zap, ChevronLeft, ChevronRight, DollarSign, Shield, TrendingUp, Target, Globe, Database, Clock, CheckCircle, ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Solutions = () => {
  const [activeAnalyticsCard, setActiveAnalyticsCard] = useState(0);
  
  const bridgeFeatures = [
    {
      title: "Seamless AI Connection",
      description: "Connect your traditional Voice Contact Center to preferred AI providers for enhanced services.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop"
    },
    {
      title: "Flexible Integration Options",
      description: "Choose between on-premise integrations or utilize our cloud services for convenience.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop"
    },
    {
      title: "User-Friendly Setup",
      description: "Experience easy and secure setup with just a few simple steps and standard security measures.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      title: "Robust Security Features",
      description: "All integrations come with standard encryption and authentication models to ensure data safety.",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=500&h=300&fit=crop"
    },
    {
      title: "Real-Time Transcription Services",
      description: "Leverage real-time transcription services from AI providers like Open AI or Google.",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500&h=300&fit=crop"
    },
    {
      title: "Advanced BOT Services",
      description: "Integrate with Cloud Based Bot services such as OpenAI RealTime and Google Gemini.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop"
    }
  ];

  const recordingFeatures = [
    {
      title: "Scalable Recording Solutions",
      description: "VoiceUp offers a low-cost call recording solution scalable from 20 to over 3000 calls, available on-premise and cloud.",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Controlled Access to Recordings",
      description: "Role-Based access allows users to playback and download recordings securely.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Cost-Effective Option",
      description: "VoiceUp provides a fraction of the cost compared to leading vendors in the call recording market.",
      icon: <DollarSign className="h-8 w-8" />
    },
    {
      title: "Individual Stream Recording",
      description: "Ability to record individual audio streams separately for enhanced clarity and analysis.",
      icon: <Mic className="h-8 w-8" />
    },
    {
      title: "Diverse Integration Options",
      description: "Supports SIPREC and CTI based integrations with major vendors like Avaya, Cisco, and more for contact centers.",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Flexible Deployment Options",
      description: "VoiceUp supports both SaaS and on-premises deployments to suit various business needs.",
      icon: <Database className="h-8 w-8" />
    },
    {
      title: "Multilingual Transcription",
      description: "Transcribe recorded calls in any language, catering to diverse user needs.",
      icon: <Globe className="h-8 w-8" />
    },
    {
      title: "AI Options",
      description: "Use VoiceUp's cost effective AI for transcription or bring your own.",
      icon: <Bot className="h-8 w-8" />
    }
  ];

  const analyticsFeatures = [
    {
      title: "AI Powered Analytics",
      description: "Based on Recordings and Transcriptions: Sentiments, Customer Satisfaction, Trends, Compliance phrases, etc.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
    },
    {
      title: "Operational Metrics",
      description: "Agent Performance and Productivity, Key Focus Areas, Resolution Rates, New Leads.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
    },
    {
      title: "Roles Based Representation",
      description: "Customized Dashboards for agents, supervisors and executives.",
      image: "https://images.unsplash.com/photo-1553028826-f4804151e596?w=500&h=300&fit=crop"
    },
    {
      title: "Flexibility",
      description: "Upload your recordings from other platforms or work with VoiceUp Recording Transcription solution.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop"
    }
  ];

  const agentDesktopFeatures = [
    {
      title: "SDK for Agent Desktop",
      description: "Get Real-Time Transcriptions and Assists to your existing Agent Desktop",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
    },
    {
      title: "Reinforced Learning",
      description: "Continuous Learning from Desktop interactions for Bots.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&h=1080&fit=crop" 
            alt="Solutions Hero" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
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

      {/* VoiceUp Bridge Section */}
      <section className="py-20 bg-gradient-to-br from-voiceup-blush to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-voiceup-skyblue mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-voiceup-navy">
                VoiceUp Bridge
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A platform for seamless communication integration with AI platforms
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {bridgeFeatures.map((feature, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/80 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-voiceup-navy mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white border-0" />
              <CarouselNext className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white border-0" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Speech Recognition Section */}
      <section className="py-20 bg-voiceup-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Mic className="h-12 w-12 text-voiceup-skyblue mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Speech Recognition
            </h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-3xl p-12">
            <p className="text-xl text-gray-200 leading-relaxed">
              Advanced speech recognition technology for various applications.
            </p>
          </div>
        </div>
      </section>

      {/* Call Recording and Transcription Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-voiceup-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <PhoneCall className="h-12 w-12 text-voiceup-skyblue mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-voiceup-navy">
                Call Recording and Transcription
              </h2>
            </div>
          </div>

          {/* Flowchart Style Layout */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recordingFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  onMouseEnter={() => setActiveAnalyticsCard(index)}
                >
                  <div className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    activeAnalyticsCard === index 
                      ? 'border-voiceup-skyblue bg-voiceup-skyblue text-white shadow-xl scale-105' 
                      : 'border-gray-200 bg-white hover:border-voiceup-periwinkle hover:shadow-lg'
                  }`}>
                    <div className={`p-3 rounded-xl mb-4 ${
                      activeAnalyticsCard === index 
                        ? 'bg-white/20' 
                        : 'bg-voiceup-skyblue text-white'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                    <p className={`text-sm leading-relaxed ${
                      activeAnalyticsCard === index ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Connecting lines for flowchart effect */}
                  {index < recordingFeatures.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="h-6 w-6 text-voiceup-skyblue" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Analytics and Insights Section */}
      <section className="py-20 bg-voiceup-periwinkle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="h-12 w-12 text-white mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Analytics and Insights
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Desktop Plugin Section */}
      <section className="py-20 bg-gradient-to-br from-voiceup-navy to-voiceup-periwinkle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-white mr-4" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Agent Desktop Plugin
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {agentDesktopFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/90 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VoiceBot, ChatBot Section */}
      <section className="py-20 bg-gradient-to-br from-voiceup-blush to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Bot className="h-12 w-12 text-voiceup-skyblue mr-4" />
            <h2 className="text-4xl lg:text-5xl font-bold text-voiceup-navy">
              VoiceBot, ChatBot
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-voiceup-skyblue to-voiceup-periwinkle"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-voiceup-navy mb-6">
                  Multi Lingual Voice Bot
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Pre-Trained model on large CRM and other Enterprise Integration for Effective resolution and Management.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-voiceup-skyblue/20 to-transparent rounded-full transform translate-x-16 translate-y-16"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
