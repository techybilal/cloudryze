import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AuthFormProps {
  mode: 'signin' | 'signup';
  onToggle: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onToggle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'signup') {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) throw error;

        if (data.user) {
          toast({
            title: "Account created successfully!",
            description: "Please check your email to verify your account.",
          });
          window.location.href = '/sign-in';
        }
      } else {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        if (data.user) {
          toast({
            title: "Welcome back!",
            description: "You have successfully signed in.",
          });
          window.location.href = '/dashboard';
        }
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {mode === 'signup' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
          <Input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
            className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:shadow-md focus:shadow-black hover:shadow hover:shadow-black"
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:shadow-md focus:shadow-black hover:shadow hover:shadow-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={mode === 'signup' ? 'Create a password' : 'Enter your password'}
          required
          className="bg-white text-gray-900 placeholder-gray-400 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:shadow-md focus:shadow-black hover:shadow hover:shadow-black"
        />
      </div>

      {/* New toggle button */}
      <Button
        type="button"
        onClick={onToggle}
        variant="link"
        className="text-cloudryze-blue hover:underline mb-4 px-0 py-0"
      >
        {mode === 'signup' ? 'Go to Sign In' : 'Go to Sign Up'}
      </Button>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple hover:from-cloudryze-blue-dark hover:to-cloudryze-purple-dark text-white py-3 text-lg font-semibold rounded-lg mt-6"
      >
        {loading ? 'Please wait...' : mode === 'signup' ? 'Create Account' : 'Sign In'}
      </Button>

      <p className="text-center text-sm text-gray-600 mt-6">
        {mode === 'signup' ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          onClick={onToggle}
          className="text-cloudryze-blue hover:underline"
        >
          {mode === 'signup' ? 'Sign in' : 'Sign up'}
        </button>
      </p>
    </form>
  );
};

export default AuthForm;