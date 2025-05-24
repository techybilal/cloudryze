
import React, { useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const GetStarted = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    // Redirect to auth page for sign up
    window.location.href = '/auth';
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cloudryze-blue mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting...</p>
        </div>
      </div>
    );
  }

  return null;
};

export default GetStarted;
