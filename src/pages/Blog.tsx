
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Contact Centers: 2024 Trends and Predictions",
      excerpt: "Explore the latest developments in AI technology and how they're reshaping the contact center industry. From advanced speech recognition to predictive analytics...",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI Technology",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Implementing Voice Analytics: A Step-by-Step Guide",
      excerpt: "Learn how to successfully implement voice analytics in your contact center with our comprehensive guide covering planning, deployment, and optimization...",
      author: "Michael Chen",
      date: "March 10, 2024",
      readTime: "12 min read",
      category: "Implementation",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "ROI Calculator: Measuring the Impact of Voice Automation",
      excerpt: "Discover how to calculate the return on investment for voice automation solutions and understand the key metrics that matter most for your business...",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Business Value",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Multi-language Support: Breaking Down Communication Barriers",
      excerpt: "How advanced speech recognition technology is enabling global businesses to serve customers in their native languages with unprecedented accuracy...",
      author: "David Park",
      date: "February 28, 2024",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Compliance and Security in Voice-Enabled Contact Centers",
      excerpt: "Understanding the regulatory requirements and security considerations when implementing voice automation solutions in highly regulated industries...",
      author: "Lisa Thompson",
      date: "February 20, 2024",
      readTime: "9 min read",
      category: "Compliance",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Agent Training in the Age of AI: Best Practices",
      excerpt: "How to effectively train contact center agents to work alongside AI-powered tools and maximize the benefits of voice automation technology...",
      author: "Robert Kim",
      date: "February 15, 2024",
      readTime: "7 min read",
      category: "Training",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["All", "AI Technology", "Implementation", "Business Value", "Technology", "Compliance", "Training"];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-voiceup-navy via-voiceup-periwinkle to-voiceup-skyblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            VoiceUp Blog
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto font-light animate-fade-in" style={{animationDelay: '0.2s'}}>
            Insights, trends, and best practices in voice automation and AI technology
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`rounded-full ${
                  category === "All" 
                    ? "bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white" 
                    : "border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="mb-16">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover min-h-[400px]"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="bg-voiceup-skyblue text-white px-4 py-2 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-4">
                      <span className="text-voiceup-skyblue font-medium text-sm bg-voiceup-blush px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold text-voiceup-navy mb-4 leading-tight">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full flex items-center space-x-2 self-start">
                      <span>Read Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-voiceup-navy px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-voiceup-navy mb-3 line-clamp-2 group-hover:text-voiceup-skyblue transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt.substring(0, 120)}...
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    className="w-full text-voiceup-skyblue hover:text-white hover:bg-voiceup-skyblue rounded-full flex items-center justify-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              variant="outline"
              className="border-voiceup-skyblue text-voiceup-skyblue hover:bg-voiceup-skyblue hover:text-white rounded-full px-8"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-voiceup-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest insights in voice automation and AI technology
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-voiceup-navy focus:outline-none focus:ring-2 focus:ring-voiceup-skyblue"
            />
            <Button className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white rounded-full px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
