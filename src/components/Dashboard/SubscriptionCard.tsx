
import React from 'react';
import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/useSubscription';
import { Crown, Star, Briefcase } from 'lucide-react';

const SubscriptionCard = () => {
  const { data: subscription } = useSubscription();

  const handleUpgrade = (plan: 'pro' | 'business') => {
    const urls = {
      pro: 'https://buy.stripe.com/test_aFaaEX6NmemR6FC8cOg7e00',
      business: 'https://buy.stripe.com/test_7sY8wP8VufqVe84fFgg7e01'
    };
    
    window.open(urls[plan], '_blank');
  };

  const getPlanIcon = (planType: string) => {
    switch (planType) {
      case 'pro':
        return <Star className="w-6 h-6 text-yellow-500" />;
      case 'business':
        return <Briefcase className="w-6 h-6 text-purple-500" />;
      default:
        return <Crown className="w-6 h-6 text-gray-500" />;
    }
  };

  const getPlanName = (planType: string) => {
    switch (planType) {
      case 'pro':
        return 'Pro Plan';
      case 'business':
        return 'Business Plan';
      default:
        return 'Free Plan';
    }
  };

  const getPlanDescription = (planType: string) => {
    switch (planType) {
      case 'pro':
        return '100GB Storage, Advanced Features';
      case 'business':
        return 'Unlimited Storage, Enterprise Features';
      default:
        return '5GB Storage, Basic Features';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Subscription</h3>
      
      <div className="flex items-center space-x-3 mb-4">
        {getPlanIcon(subscription?.plan_type || 'free')}
        <div>
          <h4 className="text-lg font-medium text-gray-900">
            {getPlanName(subscription?.plan_type || 'free')}
          </h4>
          <p className="text-sm text-gray-600">
            {getPlanDescription(subscription?.plan_type || 'free')}
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          subscription?.status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {subscription?.status || 'active'}
        </span>
      </div>

      {subscription?.plan_type === 'free' && (
        <div className="space-y-3">
          <Button
            onClick={() => handleUpgrade('pro')}
            className="w-full bg-gradient-to-r from-cloudryze-blue to-cloudryze-purple hover:from-cloudryze-blue-dark hover:to-cloudryze-purple-dark text-white"
          >
            Upgrade to Pro - $9/month
          </Button>
          <Button
            onClick={() => handleUpgrade('business')}
            variant="outline"
            className="w-full"
          >
            Upgrade to Business - $29/month
          </Button>
        </div>
      )}

      {subscription?.plan_type === 'pro' && (
        <Button
          onClick={() => handleUpgrade('business')}
          className="w-full bg-gradient-to-r from-cloudryze-purple to-cloudryze-cyan hover:shadow-lg text-white"
        >
          Upgrade to Business - $29/month
        </Button>
      )}
    </div>
  );
};

export default SubscriptionCard;
