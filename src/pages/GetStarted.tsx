
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple bg-clip-text text-transparent">
                Get Started with Cloudryze
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of users who trust Cloudryze for their file sharing and storage needs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Create Your Account</h2>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cloudryze-blue focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cloudryze-blue focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cloudryze-blue focus:border-transparent"
                  placeholder="Create a password"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple hover:from-cloudryze-blue-dark hover:to-cloudryze-purple-dark text-white py-3 text-lg font-semibold rounded-lg mt-6">
                Create Account
              </Button>
            </form>
            
            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account? <a href="#" className="text-cloudryze-blue hover:underline">Sign in</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStarted;
