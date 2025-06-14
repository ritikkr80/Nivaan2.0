
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Challenge = () => {
  const navigate = useNavigate();
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);

  const challenges = [
    {
      id: 1,
      title: "5-Minute Breathing Exercise",
      description: "Take a moment to focus on your breath. Inhale for 4 counts, hold for 4, exhale for 4.",
      duration: "5 min",
      participants: 234,
      emoji: "🌬️"
    },
    {
      id: 2,
      title: "Gratitude List",
      description: "Write down 3 things you're grateful for today, no matter how small they might seem.",
      duration: "3 min",
      participants: 189,
      emoji: "✨"
    },
    {
      id: 3,
      title: "Nature Walk",
      description: "Step outside and take a mindful walk. Notice the sounds, smells, and sights around you.",
      duration: "10 min",
      participants: 156,
      emoji: "🌿"
    },
    {
      id: 4,
      title: "Digital Detox Hour",
      description: "Put your phone away for one hour and engage in a non-digital activity you enjoy.",
      duration: "60 min",
      participants: 78,
      emoji: "📱"
    },
    {
      id: 5,
      title: "Kind Message",
      description: "Send a thoughtful message to someone you care about. Let them know you're thinking of them.",
      duration: "2 min",
      participants: 267,
      emoji: "💝"
    },
    {
      id: 6,
      title: "Mindful Tea/Coffee",
      description: "Prepare and drink your beverage slowly, focusing on the taste, temperature, and aroma.",
      duration: "8 min",
      participants: 145,
      emoji: "☕"
    }
  ];

  const handleCompleteChallenge = (challengeId: number) => {
    setCompletedChallenges(prev => [...prev, challengeId]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-calm-50 via-support-50 to-wellness-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="w-9 h-9 p-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Today's Challenges
          </h1>
        </div>

        <div className="p-4 space-y-4">
          <Card className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-700/50">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                🌟 Mind Relaxing Challenges
              </h2>
              <p className="text-sm text-yellow-700 dark:text-yellow-300">
                Choose a challenge that resonates with you today. Small steps lead to big changes!
              </p>
            </div>
          </Card>

          {challenges.map((challenge) => (
            <Card key={challenge.id} className="p-4 bg-white/60 dark:bg-gray-800/60">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-12 h-12 bg-calm-100 dark:bg-calm-900/30 rounded-xl flex items-center justify-center text-2xl">
                  {challenge.emoji}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {challenge.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {challenge.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 dark:text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {challenge.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {challenge.participants} joined
                    </div>
                  </div>
                  
                  {completedChallenges.includes(challenge.id) ? (
                    <Button 
                      disabled 
                      className="w-full bg-green-500 hover:bg-green-500 text-white"
                    >
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Completed! ✨
                    </Button>
                  ) : (
                    <Button 
                      onClick={() => handleCompleteChallenge(challenge.id)}
                      className="w-full bg-calm-500 hover:bg-calm-600 text-white"
                    >
                      Start Challenge
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}

          <Card className="p-4 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <div className="text-center">
              <p className="text-sm text-green-800 dark:text-green-200 mb-2">
                🎉 You've completed {completedChallenges.length} challenge{completedChallenges.length !== 1 ? 's' : ''} today!
              </p>
              {completedChallenges.length > 0 && (
                <p className="text-xs text-green-600 dark:text-green-300">
                  Great job taking care of your mental well-being!
                </p>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
