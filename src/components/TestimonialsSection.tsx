
import React, { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animations = entry.target.querySelectorAll('.animate-on-scroll');
            animations.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate');
              }, index * 200);
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

  const testimonials = [
    {
      quote: "Cloudryze has transformed how our team collaborates. The security features give us peace of mind, and the speed is incredible.",
      author: "Sarah Chen",
      position: "CTO",
      company: "TechFlow Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "We switched from three different file sharing tools to just Cloudryze. It's everything we needed in one beautiful package.",
      author: "Marcus Rodriguez",
      position: "Creative Director",
      company: "Design Studio Pro",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The automatic backup saved our project when our laptop crashed. Cloudryze is now essential to our workflow.",
      author: "Emily Watson",
      position: "Project Manager",
      company: "Startup Labs",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Enterprise-grade security with consumer-level simplicity. Our clients love how easy it is to access shared files.",
      author: "David Kim",
      position: "Managing Partner",
      company: "Legal Associates",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The analytics dashboard helps us understand how our content is being used. It's insights we never had before.",
      author: "Lisa Thompson",
      position: "Marketing Lead",
      company: "Growth Hackers",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Cloudryze scales with our business. From 5 to 500 employees, it just works seamlessly.",
      author: "Alex Johnson",
      position: "Operations Director",
      company: "Scale Corp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-gradient-to-br from-cloudryze-gray-light to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Loved by Teams Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies that trust Cloudryze with their most important files and data.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cloudryze-blue/10 to-cloudryze-purple/10 rounded-full transform translate-x-16 -translate-y-16"></div>
            
            <div className="relative z-10">
              {/* Quote Icon */}
              <div className="text-center mb-8">
                <svg className="w-12 h-12 text-cloudryze-blue mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>

              {/* Testimonial Content */}
              <div className="text-center transition-all duration-500">
                <blockquote className="text-xl md:text-2xl text-gray-700 font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonials[currentIndex].author}</div>
                    <div className="text-cloudryze-blue">{testimonials[currentIndex].position}</div>
                    <div className="text-gray-600 text-sm">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cloudryze-blue w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 animate-on-scroll">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cloudryze-blue mb-2">99.9%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cloudryze-purple mb-2">10,000+</div>
            <div className="text-gray-600">Companies Trust Us</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cloudryze-cyan mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
