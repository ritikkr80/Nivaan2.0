
import { useState, useEffect } from 'react';

export const useAppInitialization = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if user has seen onboarding before
    const hasSeenOnboarding = localStorage.getItem('nivaan_onboarding_completed');
    
    if (hasSeenOnboarding) {
      // Skip onboarding for returning users
      setShowOnboarding(false);
    } else {
      // Show onboarding for new users
      setShowOnboarding(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    if (!showOnboarding) {
      setIsInitialized(true);
    }
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem('nivaan_onboarding_completed', 'true');
    setShowOnboarding(false);
    setIsInitialized(true);
  };

  return {
    showSplash,
    showOnboarding,
    isInitialized,
    handleSplashComplete,
    handleOnboardingComplete
  };
};
