
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Heart, Bookmark } from 'lucide-react';

const ContentHub = () => {
  const wellnessContent = [
    {
      id: 1,
      title: "5-Minute Morning Meditation",
      type: "Video",
      duration: "5 min",
      category: "Mindfulness",
      description: "Start your day with intention and calm",
      emoji: "🧘‍♀️",
      isFavorited: false
    },
    {
      id: 2,
      title: "Dealing with Exam Anxiety",
      type: "Article",
      duration: "3 min read",
      category: "Study Tips",
      description: "Practical strategies that actually work",
      emoji: "📝",
      isFavorited: true
    },
    {
      id: 3,
      title: "Quick Stress Relief Techniques",
      type: "Interactive",
      duration: "2 min",
      category: "Coping Skills",
      description: "Try these breathing exercises anywhere",
      emoji: "🌬️",
      isFavorited: false
    },
    {
      id: 4,
      title: "Building Social Connections",
      type: "Guide",
      duration: "4 min read",
      category: "Social",
      description: "Making meaningful friendships in college",
      emoji: "🤝",
      isFavorited: false
    }
  ];

  const dailyChallenge = {
    title: "Gratitude Moment",
    description: "Share one thing you're grateful for today",
    emoji: "✨",
    participants: 89
  };

  return (
    <div className="wellness-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-wellness-800 dark:text-wellness-200">
          Wellness Hub 🌱
        </h3>
      </div>

      <div className="space-y-6">
        {/* Daily Challenge */}
        <Card className="p-4 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-700/50">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{dailyChallenge.emoji}</span>
            <div>
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200">
                Today's Challenge
              </h4>
              <p className="text-sm text-yellow-600 dark:text-yellow-300">
                {dailyChallenge.participants} people joined today
              </p>
            </div>
          </div>
          <p className="text-sm text-yellow-700 dark:text-yellow-200 mb-3">
            {dailyChallenge.description}
          </p>
          <Button size="sm" className="bg-yellow-500 hover:bg-yellow-600 text-white">
            Join Challenge
          </Button>
        </Card>

        {/* Content List */}
        <div>
          <h4 className="font-medium text-wellness-800 dark:text-wellness-200 mb-3">
            Recommended for You 💚
          </h4>
          
          <div className="space-y-3">
            {wellnessContent.map((content) => (
              <Card key={content.id} className="p-4 bg-white/60 dark:bg-gray-800/60 border-wellness-200/50 dark:border-wellness-700/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-wellness-100 to-wellness-200 dark:from-wellness-800 dark:to-wellness-700 rounded-xl flex items-center justify-center text-lg">
                    {content.emoji}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h5 className="font-medium text-wellness-800 dark:text-wellness-200 text-sm leading-tight">
                        {content.title}
                      </h5>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-shrink-0 p-1 h-auto"
                      >
                        <Bookmark className={`w-4 h-4 ${content.isFavorited ? 'fill-current text-wellness-500' : 'text-wellness-400'}`} />
                      </Button>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary" className="text-xs bg-wellness-100 dark:bg-wellness-900/30 text-wellness-700 dark:text-wellness-300">
                        {content.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-wellness-500 dark:text-wellness-400">
                        <Clock className="w-3 h-3" />
                        {content.duration}
                      </div>
                    </div>
                    
                    <p className="text-sm text-wellness-600 dark:text-wellness-300 mb-3">
                      {content.description}
                    </p>
                    
                    <Button 
                      size="sm" 
                      className="bg-wellness-500 hover:bg-wellness-600 text-white text-xs"
                    >
                      {content.type === 'Video' ? 'Watch' : content.type === 'Article' ? 'Read' : 'Try'}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* View More */}
        <Button 
          variant="outline" 
          className="w-full border-wellness-300 dark:border-wellness-700 text-wellness-700 dark:text-wellness-300 hover:bg-wellness-50 dark:hover:bg-wellness-900/20"
        >
          Explore More Content 🔍
        </Button>
      </div>
    </div>
  );
};

export default ContentHub;
