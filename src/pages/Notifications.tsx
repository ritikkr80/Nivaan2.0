
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Heart, MessageCircle, Calendar, Bell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: 'mood',
      title: 'Time for your evening check-in',
      message: 'How are you feeling today? Let\'s track your mood.',
      time: '2 hours ago',
      icon: Heart,
      unread: true
    },
    {
      id: 2,
      type: 'peer',
      title: 'New message in Study Stress group',
      message: 'Sarah shared a helpful tip about exam preparation.',
      time: '4 hours ago',
      icon: MessageCircle,
      unread: true
    },
    {
      id: 3,
      type: 'session',
      title: 'Upcoming peer session',
      message: 'Your 15-min session with Alex is scheduled for tomorrow at 3 PM.',
      time: '1 day ago',
      icon: Calendar,
      unread: false
    },
    {
      id: 4,
      type: 'wellness',
      title: 'Daily Challenge Complete!',
      message: 'Great job completing your gratitude challenge today.',
      time: '2 days ago',
      icon: Bell,
      unread: false
    }
  ];

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
            Notifications
          </h1>
        </div>

        <div className="p-4 space-y-4">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`p-4 bg-white/60 dark:bg-gray-800/60 border-l-4 ${
                notification.unread 
                  ? 'border-l-calm-500 bg-calm-50/50 dark:bg-calm-900/20' 
                  : 'border-l-gray-300 dark:border-l-gray-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-calm-100 dark:bg-calm-900/30 rounded-full flex items-center justify-center">
                  <notification.icon className="w-5 h-5 text-calm-600 dark:text-calm-400" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                      {notification.title}
                    </h3>
                    {notification.unread && (
                      <Badge variant="secondary" className="bg-calm-500 text-white">
                        New
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {notification.message}
                  </p>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {notification.time}
                  </p>
                </div>
              </div>
            </Card>
          ))}

          {/* Clear All Button */}
          <div className="pt-4">
            <Button variant="outline" className="w-full">
              Mark All as Read
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
