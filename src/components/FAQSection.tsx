
import React, { useEffect, useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
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
              }, index * 150);
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

  const faqs = [
    {
      question: "How secure is my data with Cloudryze?",
      answer: "Your data is protected with enterprise-grade AES-256 encryption both in transit and at rest. We use zero-knowledge architecture, meaning even we can't access your files. All data centers are SOC 2 Type II certified and regularly audited."
    },
    {
      question: "Can I access my files offline?",
      answer: "Yes! Our desktop and mobile apps allow you to sync files for offline access. Any changes made offline will automatically sync when you reconnect to the internet. You can choose which files and folders to keep available offline."
    },
    {
      question: "What happens if I exceed my storage limit?",
      answer: "We'll notify you when you approach your storage limit. You can either upgrade your plan or free up space by deleting unnecessary files. We provide a 30-day grace period for paid plans, so your files remain accessible while you decide."
    },
    {
      question: "How does file versioning work?",
      answer: "Cloudryze automatically saves previous versions of your files for 30 days (Pro) or 90 days (Business). You can easily restore any previous version with just a few clicks. Version history doesn't count against your storage quota."
    },
    {
      question: "Can I integrate Cloudryze with other tools?",
      answer: "Absolutely! We offer integrations with popular tools like Slack, Microsoft Office, Google Workspace, Zoom, and many more. Our REST API also allows custom integrations for Business plan users."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Free users get email support with 24-48 hour response times. Pro users receive priority email support, while Business users get 24/7 phone support, dedicated account managers, and priority onboarding assistance."
    },
    {
      question: "Is there a file size limit?",
      answer: "Free accounts can upload files up to 2GB each. Pro accounts support files up to 10GB, and Business accounts have no file size limits. All plans support unlimited file types and formats."
    },
    {
      question: "How easy is it to migrate from other cloud storage services?",
      answer: "Very easy! We provide free migration tools and support to help you transfer files from services like Dropbox, Google Drive, OneDrive, and Box. Our team can assist with large migrations for Business customers."
    }
  ];

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="animate-on-scroll">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-to-r from-white to-cloudryze-gray-light/30 rounded-lg border border-gray-200 px-6 hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-cloudryze-blue py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-gradient-to-r from-cloudryze-blue/10 to-cloudryze-purple/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help you get the most out of Cloudryze.
            </p>
            <button className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple hover:from-cloudryze-blue-dark hover:to-cloudryze-purple-dark text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
