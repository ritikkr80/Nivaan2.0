
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, Edit, Award, Calendar, Heart, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Days Active', value: '45', icon: Calendar },
    { label: 'Mood Entries', value: '89', icon: Heart },
    { label: 'Challenges Completed', value: '12', icon: Award },
    { label: 'Wellness Streak', value: '7', icon: TrendingUp }
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
            Profile
          </h1>
        </div>

        <div className="p-4 space-y-6">
          {/* Profile Info */}
          <Card className="p-6 bg-white/60 dark:bg-gray-800/60 text-center">
            <Avatar className="w-20 h-20 mx-auto mb-4 border-4 border-calm-200 dark:border-calm-700">
              <AvatarFallback className="bg-gradient-to-br from-calm-400 to-calm-500 text-white text-2xl font-bold">
                A
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              Alex
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Computer Science Student
            </p>
            <Button variant="outline" className="w-full">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-4 bg-white/60 dark:bg-gray-800/60 text-center">
                <div className="w-12 h-12 bg-calm-100 dark:bg-calm-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-6 h-6 text-calm-600 dark:text-calm-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <Card className="p-4 bg-white/60 dark:bg-gray-800/60">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Recent Achievements
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <Award className="w-8 h-8 text-yellow-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Week Warrior
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Completed daily check-ins for 7 days
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Heart className="w-8 h-8 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">
                    Mood Master
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tracked mood for 30 days
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
