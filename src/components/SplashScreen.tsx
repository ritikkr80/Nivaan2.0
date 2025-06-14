
import React, { useEffect } from 'react';

interface SplashScreenProps {
  onFinish: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2500); // Show splash for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mild-blue-50 via-mild-blue-100 to-mild-blue-200 flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden animate-pulse-calm">
          <img 
            src="/lovable-uploads/662c93ff-fa45-4284-a3f8-ef41f825ae54.png" 
            alt="Nivaan Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-mild-blue-800 mb-2">
          Nivaan
        </h1>
        <p className="text-mild-blue-600 text-lg">
          Your Mental Health Hub
        </p>
        <div className="mt-8">
          <div className="w-8 h-8 border-4 border-mild-blue-300 border-t-mild-blue-600 rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
