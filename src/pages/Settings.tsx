
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Bell, Moon, Shield, HelpCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'next-themes';

const Settings = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

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
            Settings
          </h1>
        </div>

        <div className="p-4 space-y-6">
          {/* Account Settings */}
          <Card className="p-4 bg-white/60 dark:bg-gray-800/60">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Account
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-calm-600" />
                  <span className="text-gray-700 dark:text-gray-300">Notifications</span>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Moon className="w-5 h-5 text-calm-600" />
                  <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                </div>
                <Switch 
                  checked={theme === 'dark'} 
                  onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
              </div>
            </div>
          </Card>

          {/* Privacy & Security */}
          <Card className="p-4 bg-white/60 dark:bg-gray-800/60">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Privacy & Security
            </h2>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start p-0">
                <Shield className="w-5 h-5 text-calm-600 mr-3" />
                Privacy Policy
              </Button>
              <Button variant="ghost" className="w-full justify-start p-0">
                <Shield className="w-5 h-5 text-calm-600 mr-3" />
                Data Management
              </Button>
            </div>
          </Card>

          {/* Support */}
          <Card className="p-4 bg-white/60 dark:bg-gray-800/60">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Support
            </h2>
            <div className="space-y-3">
              <Button variant="ghost" className="w-full justify-start p-0">
                <HelpCircle className="w-5 h-5 text-calm-600 mr-3" />
                Help Center
              </Button>
              <Button variant="ghost" className="w-full justify-start p-0">
                <HelpCircle className="w-5 h-5 text-calm-600 mr-3" />
                Contact Support
              </Button>
            </div>
          </Card>

          {/* Account Actions */}
          <Card className="p-4 bg-white/60 dark:bg-gray-800/60">
            <Button variant="destructive" className="w-full">
              <LogOut className="w-5 h-5 mr-2" />
              Sign Out
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
