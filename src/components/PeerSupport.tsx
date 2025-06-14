
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users, Heart } from 'lucide-react';

const PeerSupport = () => {
  const [activeTab, setActiveTab] = useState<'groups' | 'chat'>('groups');

  const supportGroups = [
    {
      id: 1,
      name: 'Exam Stress Support',
      members: 47,
      description: 'A safe space to share exam worries and coping strategies',
      isActive: true,
      emoji: '📚'
    },
    {
      id: 2,
      name: 'Social Circle',
      members: 32,
      description: 'Connect with others who understand social anxiety',
      isActive: true,
      emoji: '🤝'
    },
    {
      id: 3,
      name: 'Homesick Hearts',
      members: 28,
      description: 'For those missing home and family',
      isActive: false,
      emoji: '🏠'
    },
    {
      id: 4,
      name: 'Late Night Thoughts',
      members: 54,
      description: 'When your mind won\'t quiet down at 2 AM',
      isActive: true,
      emoji: '🌙'
    }
  ];

  const recentMessages = [
    {
      id: 1,
      group: 'Exam Stress Support',
      message: 'Just finished my midterms! The breathing exercises really helped 🌬️',
      time: '2 min ago',
      reactions: 5
    },
    {
      id: 2,
      group: 'Social Circle',
      message: 'Anyone else find it hard to make friends in big lecture halls?',
      time: '15 min ago',
      reactions: 8
    },
    {
      id: 3,
      group: 'Late Night Thoughts',
      message: 'Grateful for this community. You all make me feel less alone 💜',
      time: '1 hour ago',
      reactions: 12
    }
  ];

  return (
    <div className="support-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-support-800 dark:text-support-200">
          Peer Support 🤗
        </h3>
        <div className="flex gap-2">
          <Button
            variant={activeTab === 'groups' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('groups')}
            className="text-xs"
          >
            <Users className="w-4 h-4 mr-1" />
            Groups
          </Button>
          <Button
            variant={activeTab === 'chat' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('chat')}
            className="text-xs"
          >
            <MessageCircle className="w-4 h-4 mr-1" />
            Chat
          </Button>
        </div>
      </div>

      {activeTab === 'groups' && (
        <div className="space-y-4">
          <p className="text-sm text-support-600 dark:text-support-300 mb-3">
            Join a supportive community that gets it 💙
          </p>
          
          <div className="space-y-3">
            {supportGroups.map((group) => (
              <Card key={group.id} className="p-4 bg-white/60 dark:bg-gray-800/60 border-support-200/50 dark:border-support-700/50 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{group.emoji}</span>
                      <h4 className="font-medium text-support-800 dark:text-support-200">
                        {group.name}
                      </h4>
                      {group.isActive && (
                        <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                          Active
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-support-600 dark:text-support-300 mb-2">
                      {group.description}
                    </p>
                    <p className="text-xs text-support-500 dark:text-support-400">
                      {group.members} members
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    className="bg-support-500 hover:bg-support-600 text-white"
                  >
                    Join
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'chat' && (
        <div className="space-y-4">
          <p className="text-sm text-support-600 dark:text-support-300 mb-3">
            Recent conversations in your groups
          </p>
          
          <div className="space-y-3">
            {recentMessages.map((msg) => (
              <Card key={msg.id} className="p-4 bg-white/60 dark:bg-gray-800/60 border-support-200/50 dark:border-support-700/50">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {msg.group}
                    </Badge>
                    <span className="text-xs text-support-500 dark:text-support-400">
                      {msg.time}
                    </span>
                  </div>
                  <p className="text-sm text-support-700 dark:text-support-300">
                    {msg.message}
                  </p>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-400" />
                    <span className="text-xs text-support-500 dark:text-support-400">
                      {msg.reactions} reactions
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Button className="w-full bg-gradient-to-r from-support-500 to-support-600 hover:from-support-600 hover:to-support-700 text-white rounded-xl">
            Start Anonymous Chat 💬
          </Button>
        </div>
      )}
    </div>
  );
};

export default PeerSupport;
