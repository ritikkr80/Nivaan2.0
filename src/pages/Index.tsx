
import React from 'react';
import { useTheme } from 'next-themes';
import Header from '@/components/Header';
import MoodTracker from '@/components/MoodTracker';
import PeerSupport from '@/components/PeerSupport';
import ContentHub from '@/components/ContentHub';
import SOSButton from '@/components/SOSButton';

const Index = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-calm-50 via-support-50 to-wellness-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      <main className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Welcome Message */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Your Mental Health Hub 🏠
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Talk, track, and tackle your well-being with a supportive community
          </p>
        </div>

        {/* SOS Button - Always visible at top */}
        <SOSButton />

        {/* Main Content Grid */}
        <div className="space-y-6">
          {/* Mood Tracker */}
          <MoodTracker />

          {/* Peer Support */}
          <PeerSupport />

          {/* Content Hub */}
          <ContentHub />
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mt-8">
          <button className="p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <span className="text-2xl mb-2 block">📞</span>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Book Session
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                15-min peer chat
              </p>
            </div>
          </button>

          <button className="p-4 bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 transform hover:scale-105">
            <div className="text-center">
              <span className="text-2xl mb-2 block">📊</span>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Mood Insights
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                View your trends
              </p>
            </div>
          </button>
        </div>

        {/* Footer encouragement */}
        <div className="text-center mt-8 p-4 bg-white/40 dark:bg-gray-800/40 rounded-2xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
            Remember: It's okay to not be okay 💙
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            Small steps, big changes. You've got this!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
