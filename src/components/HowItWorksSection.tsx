
import React, { useEffect, useRef } from 'react';

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animations = entry.target.querySelectorAll('.animate-on-scroll');
            animations.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Upload & Organize",
      description: "Drag and drop your files or folders. Our AI automatically organizes and categorizes your content for easy retrieval.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Secure & Share",
      description: "Set permissions, expiration dates, and passwords. Share with individuals or teams using secure links that you control.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Collaborate & Track",
      description: "Real-time collaboration with version control. Track who accessed what and when with detailed analytics and insights.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" ref={sectionRef} className="py-20 bg-gradient-to-br from-cloudryze-gray-light to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our intuitive three-step process designed for teams of all sizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="animate-on-scroll relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple transform translate-x-6 z-0"></div>
              )}

              <div className="relative z-10 text-center lg:text-left">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple text-white font-bold text-xl rounded-full mb-6 mx-auto lg:mx-0">
                  {step.number}
                </div>

                {/* Icon Container */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 mb-6">
                  <div className="flex justify-center lg:justify-start mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cloudryze-blue/10 to-cloudryze-purple/10 rounded-lg flex items-center justify-center text-cloudryze-blue">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <button className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple hover:from-cloudryze-blue-dark hover:to-cloudryze-purple-dark text-white px-8 py-4 text-lg font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
