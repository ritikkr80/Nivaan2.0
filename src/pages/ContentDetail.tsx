
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Play, Clock, Bookmark } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const ContentDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const contentDetails = {
    '1': {
      title: "5-Minute Morning Meditation",
      type: "Video",
      duration: "5 min",
      category: "Mindfulness",
      description: "Start your day with intention and calm through this guided morning meditation.",
      content: "This gentle morning meditation will help you center yourself before starting your day. Find a comfortable position, close your eyes, and let's begin with some deep, cleansing breaths...",
      emoji: "🧘‍♀️"
    },
    '2': {
      title: "Dealing with Exam Anxiety",
      type: "Article",
      duration: "3 min read",
      category: "Study Tips",
      description: "Practical strategies that actually work for managing exam stress.",
      content: "Exam anxiety is completely normal and affects most students at some point. Here are evidence-based strategies to help you manage stress and perform your best:\n\n1. **Breathing Techniques**: When you feel overwhelmed, try the 4-7-8 technique...\n\n2. **Study Schedule**: Break your study sessions into manageable chunks...\n\n3. **Self-Care**: Don't forget to eat well, sleep enough, and take breaks...",
      emoji: "📝"
    },
    '3': {
      title: "Quick Stress Relief Techniques",
      type: "Interactive",
      duration: "2 min",
      category: "Coping Skills",
      description: "Try these breathing exercises anywhere, anytime.",
      content: "These quick techniques can be used anywhere when you're feeling stressed:\n\n**Box Breathing**: Inhale for 4, hold for 4, exhale for 4, hold for 4. Repeat 5 times.\n\n**5-4-3-2-1 Grounding**: Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.\n\n**Progressive Muscle Relaxation**: Tense and release each muscle group for 5 seconds.",
      emoji: "🌬️"
    },
    '4': {
      title: "Building Social Connections",
      type: "Guide",
      duration: "4 min read",
      category: "Social",
      description: "Making meaningful friendships in college can feel challenging, but it's totally achievable.",
      content: "Building genuine connections in college takes time and effort, but it's one of the most rewarding aspects of your university experience:\n\n**Start Small**: Join clubs or activities that interest you...\n\n**Be Authentic**: Don't try to be someone you're not...\n\n**Take Initiative**: Invite classmates for coffee or study sessions...",
      emoji: "🤝"
    }
  };

  const content = contentDetails[id as keyof typeof contentDetails];

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-calm-50 via-support-50 to-wellness-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <Card className="p-6 text-center">
          <h2 className="text-xl font-bold mb-2">Content Not Found</h2>
          <Button onClick={() => navigate('/')}>Go Back Home</Button>
        </Card>
      </div>
    );
  }

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
          <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100 truncate">
            {content.title}
          </h1>
        </div>

        <div className="p-4 space-y-6">
          {/* Content Header */}
          <Card className="p-6 bg-white/60 dark:bg-gray-800/60">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-wellness-100 to-wellness-200 dark:from-wellness-800 dark:to-wellness-700 rounded-xl flex items-center justify-center text-2xl">
                {content.emoji}
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {content.title}
                </h1>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-wellness-100 dark:bg-wellness-900/30 text-wellness-700 dark:text-wellness-300">
                    {content.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {content.duration}
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {content.description}
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              {content.type === 'Video' && (
                <Button className="flex-1 bg-wellness-500 hover:bg-wellness-600 text-white">
                  <Play className="w-4 h-4 mr-2" />
                  Play Video
                </Button>
              )}
              <Button variant="outline" size="sm" className="px-3">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </Card>

          {/* Content Body */}
          <Card className="p-6 bg-white/60 dark:bg-gray-800/60">
            <div className="prose prose-sm max-w-none text-gray-700 dark:text-gray-300">
              {content.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={() => navigate('/challenge')}
              className="w-full bg-calm-500 hover:bg-calm-600 text-white"
            >
              Try Related Challenge
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="w-full"
            >
              Back to Hub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDetail;
