
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, Heart, Users, Target } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const onboardingData = [
  {
    id: 1,
    title: "Track Your Mood Daily",
    description: "Monitor your emotional well-being with our intuitive mood tracker. Understand patterns and celebrate your progress.",
    icon: Heart,
    illustration: "🧠💙",
    color: "from-mild-blue-400 to-mild-blue-600"
  },
  {
    id: 2,
    title: "Connect with Peers",
    description: "Join a supportive community of college students. Share experiences and get help when you need it most.",
    icon: Users,
    illustration: "🤝✨",
    color: "from-mild-blue-500 to-mild-blue-700"
  },
  {
    id: 3,
    title: "Take on Wellness Challenges",
    description: "Participate in mindful activities and challenges designed to boost your mental health and build resilience.",
    icon: Target,
    illustration: "🎯🌟",
    color: "from-mild-blue-600 to-mild-blue-800"
  }
];

const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNext = () => {
    if (currentScreen < onboardingData.length - 1) {
      setCurrentScreen(currentScreen + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const currentData = onboardingData[currentScreen];
  const IconComponent = currentData.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-mild-blue-50 via-mild-blue-100 to-mild-blue-200 flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-4">
        <Button 
          variant="ghost" 
          onClick={handleSkip}
          className="text-mild-blue-600 hover:text-mild-blue-800"
        >
          Skip
        </Button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center animate-fade-in">
          {/* Illustration */}
          <div className={`w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br ${currentData.color} flex items-center justify-center shadow-2xl`}>
            <div className="text-6xl">{currentData.illustration}</div>
          </div>

          {/* Icon */}
          <div className="mb-6">
            <IconComponent className="w-12 h-12 mx-auto text-mild-blue-600" />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {currentData.title}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {currentData.description}
          </p>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {onboardingData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentScreen 
                    ? 'bg-mild-blue-600 w-8' 
                    : 'bg-mild-blue-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-6">
        <div className="max-w-md mx-auto flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentScreen === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            className="bg-mild-blue-600 hover:bg-mild-blue-700 text-white flex items-center gap-2"
          >
            {currentScreen === onboardingData.length - 1 ? 'Get Started' : 'Next'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
