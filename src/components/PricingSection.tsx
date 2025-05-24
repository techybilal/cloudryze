
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
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

  const handleGetStarted = () => {
    window.location.href = '/auth';
  };

  const handleUpgrade = (plan: 'pro' | 'business') => {
    const urls = {
      pro: 'https://buy.stripe.com/test_aFaaEX6NmemR6FC8cOg7e00',
      business: 'https://buy.stripe.com/test_7sY8wP8VufqVe84fFgg7e01'
    };
    
    window.open(urls[plan], '_blank');
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for personal use and small projects",
      features: [
        "5GB Storage",
        "Basic File Sharing",
        "Mobile App Access",
        "Email Support",
        "Basic Security"
      ],
      cta: "Get Started",
      popular: false,
      color: "from-gray-500 to-gray-600",
      action: handleGetStarted
    },
    {
      name: "Pro",
      price: "$9",
      period: "per month",
      description: "Ideal for professionals and growing teams",
      features: [
        "100GB Storage",
        "Advanced Sharing Controls",
        "Priority Support",
        "Team Collaboration",
        "Advanced Security",
        "Version History",
        "Custom Branding"
      ],
      cta: "Start Pro Trial",
      popular: true,
      color: "from-cloudryze-blue to-cloudryze-purple",
      action: () => handleUpgrade('pro')
    },
    {
      name: "Business",
      price: "$29",
      period: "per month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited Storage",
        "Enterprise Security",
        "24/7 Phone Support",
        "Advanced Analytics",
        "API Access",
        "SSO Integration",
        "Custom Integrations",
        "Dedicated Manager"
      ],
      cta: "Contact Sales",
      popular: false,
      color: "from-cloudryze-purple to-cloudryze-cyan",
      action: () => handleUpgrade('business')
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your needs. Upgrade or downgrade at any time with no long-term commitments.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="animate-on-scroll">
              <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                plan.popular ? 'border-cloudryze-blue ring-4 ring-cloudryze-blue/20' : 'border-gray-200'
              } overflow-hidden`}>
                
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl md:text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    </div>

                    <Button 
                      onClick={plan.action}
                      className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-white py-3 rounded-lg transform hover:scale-105 transition-all duration-200`}
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 text-center mb-4">What's included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-cloudryze-blue/10 to-cloudryze-purple/10 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">30-Day Money-Back Guarantee</h3>
            <p className="text-gray-600 text-lg">
              Try Cloudryze risk-free. If you're not completely satisfied, we'll refund your money within 30 days.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
