
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Clock, DollarSign, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      company: "MegaCorp Financial Services",
      industry: "Financial Services",
      challenge: "High call volumes during tax season with complex compliance requirements",
      solution: "Implemented VoiceUp's complete suite with advanced analytics and compliance monitoring",
      results: {
        callReduction: "65%",
        costSavings: "$2.4M",
        satisfaction: "92%",
        efficiency: "78%"
      },
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      featured: true,
      testimonial: "VoiceUp transformed our customer service during our busiest season. The AI-powered insights helped us identify trends we never saw before.",
      contactPerson: "Sarah Mitchell, VP of Customer Operations"
    },
    {
      id: 2,
      company: "HealthFirst Medical Group",
      industry: "Healthcare",
      challenge: "Managing patient calls across 15 locations with HIPAA compliance requirements",
      solution: "Deployed VoiceUp's healthcare-specific solution with medical transcription capabilities",
      results: {
        callReduction: "45%",
        costSavings: "$800K",
        satisfaction: "88%",
        efficiency: "65%"
      },
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      testimonial: "The HIPAA-compliant voice automation has streamlined our patient communications significantly.",
      contactPerson: "Dr. James Rodriguez, Chief Technology Officer"
    },
    {
      id: 3,
      company: "TechShop E-commerce",
      industry: "Retail",
      challenge: "Scaling customer support for rapid business growth during holiday seasons",
      solution: "Integrated VoiceUp's retail-focused AI with existing CRM and order management systems",
      results: {
        callReduction: "55%",
        costSavings: "$1.2M",
        satisfaction: "90%",
        efficiency: "72%"
      },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      testimonial: "VoiceUp helped us handle 3x more customer inquiries during Black Friday without adding staff.",
      contactPerson: "Mike Chen, Customer Experience Director"
    },
    {
      id: 4,
      company: "Global University System",
      industry: "Education",
      challenge: "Supporting international students with multilingual communication needs",
      solution: "Implemented VoiceUp's multilingual platform with student-specific workflows",
      results: {
        callReduction: "40%",
        costSavings: "$600K",
        satisfaction: "85%",
        efficiency: "60%"
      },
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop",
      testimonial: "Supporting students in 20+ languages is now seamless thanks to VoiceUp's technology.",
      contactPerson: "Prof. Lisa Zhang, Director of Student Services"
    },
    {
      id: 5,
      company: "AutoService Pro",
      industry: "Automotive",
      challenge: "Complex service scheduling and parts ordering across dealership network",
      solution: "Deployed VoiceUp's automotive solution with integrated service scheduling",
      results: {
        callReduction: "50%",
        costSavings: "$900K",
        satisfaction: "87%",
        efficiency: "68%"
      },
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      testimonial: "Service appointments are now scheduled automatically, and our technicians are more productive.",
      contactPerson: "Robert Johnson, Operations Manager"
    },
    {
      id: 6,
      company: "Metro Travel Agency",
      industry: "Travel",
      challenge: "24/7 customer support for international travelers across time zones",
      solution: "Implemented VoiceUp's travel-specific AI with real-time booking capabilities",
      results: {
        callReduction: "60%",
        costSavings: "$1.1M",
        satisfaction: "93%",
        efficiency: "75%"
      },
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      testimonial: "Our customers can now get assistance anytime, anywhere, in their preferred language.",
      contactPerson: "Amanda Foster, Customer Relations Manager"
    }
  ];

  const featuredCase = caseStudies.find(cs => cs.featured);
  const regularCases = caseStudies.filter(cs => !cs.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Success Stories
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Real results from organizations that transformed their operations with VoiceUp
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCase && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="bg-voiceup-skyblue text-white px-4 py-2 rounded-full text-sm font-medium">
                Featured Case Study
              </span>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredCase.image} 
                    alt={featuredCase.company}
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 text-white max-w-sm">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-2xl font-bold mb-2">{featuredCase.company}</h3>
                      <p className="text-lg opacity-90">{featuredCase.industry}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-voiceup-navy mb-2">Challenge</h4>
                    <p className="text-gray-600">{featuredCase.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-voiceup-navy mb-2">Solution</h4>
                    <p className="text-gray-600">{featuredCase.solution}</p>
                  </div>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-voiceup-blush rounded-xl">
                      <div className="text-2xl font-bold text-voiceup-skyblue">{featuredCase.results.callReduction}</div>
                      <div className="text-sm text-gray-600">Call Reduction</div>
                    </div>
                    <div className="text-center p-4 bg-voiceup-blush rounded-xl">
                      <div className="text-2xl font-bold text-voiceup-periwinkle">{featuredCase.results.costSavings}</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                    <div className="text-center p-4 bg-voiceup-blush rounded-xl">
                      <div className="text-2xl font-bold text-voiceup-navy">{featuredCase.results.satisfaction}</div>
                      <div className="text-sm text-gray-600">Customer Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-voiceup-blush rounded-xl">
                      <div className="text-2xl font-bold text-voiceup-lavender">{featuredCase.results.efficiency}</div>
                      <div className="text-sm text-gray-600">Efficiency Gain</div>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-voiceup-skyblue pl-4 mb-4">
                    <p className="text-gray-600 italic">"{featuredCase.testimonial}"</p>
                    <footer className="text-sm text-gray-500 mt-2">— {featuredCase.contactPerson}</footer>
                  </blockquote>

                  <Button className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full flex items-center space-x-2">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Case Studies Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-voiceup-navy mb-4">
              More Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how organizations across different industries achieved remarkable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCases.map((caseStudy) => (
              <div key={caseStudy.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={caseStudy.image} 
                    alt={caseStudy.company}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-voiceup-navy/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-semibold">{caseStudy.company}</h3>
                    <p className="text-sm opacity-90">{caseStudy.industry}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {caseStudy.challenge}
                  </p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-voiceup-skyblue">{caseStudy.results.callReduction}</div>
                      <div className="text-xs text-gray-500">Call Reduction</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-lg font-bold text-voiceup-periwinkle">{caseStudy.results.costSavings}</div>
                      <div className="text-xs text-gray-500">Savings</div>
                    </div>
                  </div>

                  <blockquote className="text-sm text-gray-600 italic mb-4 line-clamp-2">
                    "{caseStudy.testimonial}"
                  </blockquote>

                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full"
                  >
                    Read Case Study
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Impact Stats */}
      <section className="py-20 bg-voiceup-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Collective Impact Across All Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The combined results from our client implementations demonstrate VoiceUp's transformative power
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp className="h-8 w-8" />,
                value: "55%",
                label: "Average Call Reduction",
                description: "Across all implementations"
              },
              {
                icon: <DollarSign className="h-8 w-8" />,
                value: "$8.2M",
                label: "Total Cost Savings",
                description: "Annual savings achieved"
              },
              {
                icon: <Users className="h-8 w-8" />,
                value: "89%",
                label: "Customer Satisfaction",
                description: "Average improvement"
              },
              {
                icon: <Award className="h-8 w-8" />,
                value: "98%",
                label: "Client Retention",
                description: "Customer success rate"
              }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-voiceup-skyblue rounded-full mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-voiceup-blush to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-voiceup-navy mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing number of organizations that have transformed their operations with VoiceUp's AI-powered voice automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full px-8"
            >
              <Link to="/contact">Start Your Transformation</Link>
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full px-8"
            >
              <Link to="/solutions">Explore Solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudies;
