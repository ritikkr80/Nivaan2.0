
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, MessageCircle, Calendar, AlertTriangle } from 'lucide-react';

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const emergencyContacts = [
    {
      name: "Crisis Text Line",
      contact: "Text HOME to 741741",
      type: "text",
      description: "24/7 crisis support via text"
    },
    {
      name: "Campus Counseling",
      contact: "(555) 123-HELP",
      type: "call",
      description: "Your campus mental health center"
    },
    {
      name: "National Suicide Prevention",
      contact: "988",
      type: "call",
      description: "24/7 confidential support"
    }
  ];

  const handleEmergencyAction = (action: string) => {
    console.log(`Emergency action taken: ${action}`);
    // In a real app, this would trigger the appropriate emergency protocol
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="sos-button w-full">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <div className="text-left">
            <div className="font-bold">Need Help Now?</div>
            <div className="text-sm opacity-90">Crisis Support Available 24/7</div>
          </div>
        </Button>
      </DialogTrigger>
      
      <DialogContent className="max-w-md mx-auto bg-white dark:bg-gray-900 border border-red-200 dark:border-red-800">
        <DialogHeader>
          <DialogTitle className="text-center text-red-700 dark:text-red-300 flex items-center justify-center gap-2">
            <AlertTriangle className="w-6 h-6" />
            Crisis Support
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Immediate message */}
          <Card className="p-4 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
            <div className="text-center">
              <h3 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                You're not alone 💙
              </h3>
              <p className="text-sm text-red-700 dark:text-red-300">
                Help is available right now. Choose the option that feels most comfortable for you.
              </p>
            </div>
          </Card>

          {/* Emergency contacts */}
          <div className="space-y-3">
            {emergencyContacts.map((contact, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    {contact.type === 'call' ? (
                      <Phone className="w-6 h-6 text-red-600 dark:text-red-400" />
                    ) : (
                      <MessageCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {contact.description}
                    </p>
                    <p className="font-mono text-sm text-red-600 dark:text-red-400 mt-1">
                      {contact.contact}
                    </p>
                  </div>
                  
                  <Button
                    size="sm"
                    onClick={() => handleEmergencyAction(contact.name)}
                    className="bg-red-600 hover:bg-red-700 text-white flex-shrink-0"
                  >
                    {contact.type === 'call' ? 'Call' : 'Text'}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional options */}
          <div className="border-t pt-4">
            <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
              Other Support Options
            </h4>
            
            <div className="space-y-2">
              <Button
                variant="outline"
                onClick={() => handleEmergencyAction('Schedule Emergency Session')}
                className="w-full justify-start border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-300 hover:bg-orange-50 dark:hover:bg-orange-900/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Emergency Session
              </Button>
              
              <Button
                variant="outline"
                onClick={() => handleEmergencyAction('Share Mood Data')}
                className="w-full justify-start border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Share My Mood Data with Counselor
              </Button>
            </div>
          </div>

          {/* Safety reminder */}
          <Card className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
            <p className="text-xs text-yellow-800 dark:text-yellow-200 text-center">
              If this is a life-threatening emergency, please call 911 or go to your nearest emergency room immediately.
            </p>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SOSButton;
