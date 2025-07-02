
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Heart, GraduationCap, Shield, ShoppingCart, Car, Plane, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Industries = () => {
  const industries = [
    {
      name: "Healthcare",
      icon: <Heart className="h-12 w-12" />,
      description: "Enhance patient communication with HIPAA-compliant voice automation, reducing wait times and improving care coordination.",
      benefits: ["HIPAA Compliance", "Appointment Scheduling", "Medical Transcription", "Emergency Response"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      stats: { improvement: "45%", metric: "Patient Satisfaction" }
    },
    {
      name: "Financial Services", 
      icon: <Building2 className="h-12 w-12" />,
      description: "Secure, compliant voice solutions for banking and financial institutions with advanced fraud detection and customer verification.",
      benefits: ["PCI DSS Compliance", "Fraud Detection", "Account Verification", "Investment Advisory"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
      stats: { improvement: "60%", metric: "Compliance Efficiency" }
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-12 w-12" />,
      description: "Support student services and administrative functions with multilingual voice automation for educational institutions.",
      benefits: ["Student Support", "Enrollment Assistance", "Multi-language Support", "Administrative Automation"],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=500&h=300&fit=crop",
      stats: { improvement: "35%", metric: "Response Time" }
    },
    {
      name: "Government",
      icon: <Shield className="h-12 w-12" />,
      description: "Streamline citizen services with secure, accessible voice automation that meets government compliance standards.",
      benefits: ["Citizen Services", "Security Clearance", "Public Information", "Emergency Services"],
      image: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=500&h=300&fit=crop",
      stats: { improvement: "50%", metric: "Service Efficiency" }
    },
    {
      name: "Retail & E-commerce",
      icon: <ShoppingCart className="h-12 w-12" />,
      description: "Transform customer support with AI-powered voice solutions that handle orders, returns, and product inquiries seamlessly.",
      benefits: ["Order Processing", "Return Management", "Product Support", "Personalized Service"],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      stats: { improvement: "40%", metric: "Order Accuracy" }
    },
    {
      name: "Automotive",
      icon: <Car className="h-12 w-12" />,
      description: "Support vehicle services, warranty claims, and customer inquiries with specialized automotive voice automation.",
      benefits: ["Service Scheduling", "Warranty Claims", "Roadside Assistance", "Parts Ordering"],
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      stats: { improvement: "55%", metric: "Service Resolution" }
    },
    {
      name: "Travel & Hospitality",
      icon: <Plane className="h-12 w-12" />,
      description: "Enhance guest experiences with multilingual voice support for bookings, concierge services, and travel assistance.",
      benefits: ["Booking Management", "Concierge Services", "Travel Assistance", "Guest Relations"],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=300&fit=crop",
      stats: { improvement: "65%", metric: "Guest Satisfaction" }
    },
    {
      name: "Telecommunications",
      icon: <Phone className="h-12 w-12" />,
      description: "Optimize telecom operations with advanced voice automation for technical support, billing, and service provisioning.",
      benefits: ["Technical Support", "Billing Inquiries", "Service Activation", "Network Monitoring"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop",
      stats: { improvement: "70%", metric: "Call Resolution" }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Industries We Serve
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Tailored voice automation solutions designed for the unique needs of every industry
          </p>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-voiceup-navy mb-4">
              Specialized Solutions for Every Sector
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our voice automation platform adapts to the specific requirements, compliance needs, and workflows of your industry
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative">
                    <img 
                      src={industry.image} 
                      alt={industry.name}
                      className="w-full h-full object-cover min-h-[250px] group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-voiceup-navy/80 to-transparent"></div>
                    <div className="absolute top-6 left-6 text-white">
                      <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm inline-block mb-3">
                        {industry.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{industry.name}</h3>
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                        <p className="text-2xl font-bold">{industry.stats.improvement}</p>
                        <p className="text-sm opacity-90">{industry.stats.metric}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                      
                      <h4 className="font-semibold text-voiceup-navy mb-4">Key Benefits:</h4>
                      <ul className="space-y-2 mb-6">
                        {industry.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-voiceup-skyblue rounded-full mr-3 flex-shrink-0"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      asChild
                      className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full w-full"
                    >
                      <Link to="/contact">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Benefits */}
      <section className="py-20 bg-gradient-to-br from-voiceup-blush to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-voiceup-navy mb-4">
              Universal Benefits Across All Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While each industry has unique needs, VoiceUp delivers consistent value across all sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Cost Reduction",
                value: "40%",
                description: "Average operational cost reduction across all industries"
              },
              {
                title: "Accuracy Improvement",
                value: "99.5%",
                description: "Speech recognition accuracy in multi-language environments"
              },
              {
                title: "Implementation Speed",
                value: "30 days",
                description: "Average time from deployment to full operation"
              },
              {
                title: "Customer Satisfaction",
                value: "85%",
                description: "Average improvement in customer satisfaction scores"
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl font-bold text-voiceup-skyblue mb-2">{stat.value}</div>
                <h3 className="text-xl font-semibold text-voiceup-navy mb-3">{stat.title}</h3>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-voiceup-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Industry Operations?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover how VoiceUp can be customized for your specific industry requirements and compliance needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full px-8"
            >
              <Link to="/contact">Schedule Industry Consultation</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-voiceup-navy rounded-full px-8"
            >
              <Link to="/case-studies">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Industries;
