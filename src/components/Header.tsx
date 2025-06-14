
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell, Settings, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-md mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-calm-500 to-calm-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                MindSpace
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                You're not alone 💙
              </p>
            </div>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9 p-0"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0 relative">
              <Bell className="w-4 h-4" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-xs text-white font-bold">2</span>
              </div>
            </Button>

            {/* Settings */}
            <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
              <Settings className="w-4 h-4" />
            </Button>

            {/* Avatar */}
            <Avatar className="w-8 h-8 border-2 border-calm-200 dark:border-calm-700">
              <AvatarFallback className="bg-gradient-to-br from-calm-400 to-calm-500 text-white text-sm font-bold">
                A
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Greeting */}
        <div className="mt-3">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Good {new Date().getHours() < 12 ? 'morning' : new Date().getHours() < 17 ? 'afternoon' : 'evening'}, Alex! 
            <span className="ml-1">
              {new Date().getHours() < 12 ? '🌅' : new Date().getHours() < 17 ? '☀️' : '🌙'}
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
