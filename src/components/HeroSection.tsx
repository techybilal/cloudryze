
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cloudryze-gray-light via-white to-blue-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cloudryze-blue/20 to-cloudryze-purple/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-cloudryze-purple/20 to-cloudryze-cyan/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple bg-clip-text text-transparent">
                Secure, Fast,
              </span>
              <br />
              and Easy File Sharing
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Experience the future of cloud storage and file sharing. Cloudryze delivers enterprise-grade security with consumer-friendly simplicity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => navigate('/get-started')}
                className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple hover:from-cloudryze-blue-dark hover:to-cloudryze-purple-dark text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('features')}
                className="border-2 border-cloudryze-blue text-cloudryze-blue hover:bg-cloudryze-blue hover:text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-cloudryze-blue">1M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cloudryze-purple">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cloudryze-cyan">5PB+</div>
                <div className="text-sm text-gray-600">Data Stored</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* Main Cloud Illustration */}
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-cloudryze-blue/10 to-cloudryze-purple/10 rounded-full flex items-center justify-center animate-float">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-white to-blue-50 rounded-full shadow-2xl flex items-center justify-center relative">
                  {/* Cloud Icon */}
                  <svg className="w-32 h-32 lg:w-40 lg:h-40 text-cloudryze-blue" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                  </svg>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-cloudryze-purple rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cloudryze-cyan rounded-full animate-pulse delay-300"></div>
                  <div className="absolute top-8 -left-8 w-4 h-4 bg-cloudryze-blue rounded-full animate-pulse delay-700"></div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className="w-3 h-3 bg-cloudryze-blue rounded-full"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                  <div className="w-3 h-3 bg-cloudryze-purple rounded-full"></div>
                </div>
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4">
                  <div className="w-3 h-3 bg-cloudryze-cyan rounded-full"></div>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
