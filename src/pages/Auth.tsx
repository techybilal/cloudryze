
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AuthForm from '@/components/AuthForm';
import { useAuth } from '@/contexts/AuthContext';

const Auth = () => {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const { user, loading } = useAuth();

  useEffect(() => {
    if (user && !loading) {
      window.location.href = '/dashboard';
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cloudryze-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple bg-clip-text text-transparent">
                {mode === 'signup' ? 'Get Started with Cloudryze' : 'Welcome Back'}
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              {mode === 'signup' 
                ? 'Join thousands of users who trust Cloudryze for their file sharing needs.'
                : 'Sign in to your Cloudryze account to continue sharing files securely.'
              }
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              {mode === 'signup' ? 'Create Your Account' : 'Sign In'}
            </h2>
            
            <AuthForm mode={mode} onToggle={() => setMode(mode === 'signin' ? 'signup' : 'signin')} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
