
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the amazing features that make Cloudryze the perfect file sharing solution for your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">End-to-End Encryption</h3>
              <p className="text-gray-600">Your files are protected with military-grade encryption from upload to download.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-cloudryze-purple to-cloudryze-cyan rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Collaboration</h3>
              <p className="text-gray-600">Share files seamlessly with your team and manage permissions effortlessly.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-cloudryze-cyan to-cloudryze-blue rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Upload</h3>
              <p className="text-gray-600">Lightning-fast upload speeds with smart compression and optimization.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
