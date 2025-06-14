
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [journalEntry, setJournalEntry] = useState('');

  const moods = [
    { emoji: '😊', label: 'Great', value: 'great', color: 'text-green-500' },
    { emoji: '🙂', label: 'Good', value: 'good', color: 'text-blue-500' },
    { emoji: '😐', label: 'Okay', value: 'okay', color: 'text-yellow-500' },
    { emoji: '😔', label: 'Low', value: 'low', color: 'text-orange-500' },
    { emoji: '😢', label: 'Tough', value: 'tough', color: 'text-red-500' },
  ];

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    console.log('Mood selected:', mood);
  };

  const handleSaveEntry = () => {
    if (selectedMood || journalEntry) {
      console.log('Saving mood entry:', { mood: selectedMood, journal: journalEntry });
      // Here we would typically save to backend/localStorage
    }
  };

  return (
    <div className="mood-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-calm-800 dark:text-calm-200">
          How are you feeling today? 🌟
        </h3>
      </div>
      
      <div className="space-y-6">
        {/* Mood Selection */}
        <div>
          <p className="text-sm text-calm-600 dark:text-calm-300 mb-3">
            Select your current mood:
          </p>
          <div className="flex justify-center gap-3">
            {moods.map((mood) => (
              <button
                key={mood.value}
                onClick={() => handleMoodSelect(mood.value)}
                className={`emoji-button ${
                  selectedMood === mood.value 
                    ? 'border-calm-400 shadow-lg transform scale-110' 
                    : ''
                }`}
                title={mood.label}
              >
                <span className="text-2xl">{mood.emoji}</span>
              </button>
            ))}
          </div>
          {selectedMood && (
            <p className="text-center mt-2 text-sm text-calm-600 dark:text-calm-300 animate-fade-in">
              You're feeling {moods.find(m => m.value === selectedMood)?.label.toLowerCase()} today
            </p>
          )}
        </div>

        {/* Journal Entry */}
        <div>
          <label className="block text-sm text-calm-600 dark:text-calm-300 mb-2">
            Want to share what's on your mind? (Optional)
          </label>
          <Textarea
            value={journalEntry}
            onChange={(e) => setJournalEntry(e.target.value)}
            placeholder="Sometimes it helps to write it down... 💭"
            className="min-h-[100px] bg-white/50 dark:bg-gray-800/50 border-calm-200 dark:border-calm-700 focus:border-calm-400 dark:focus:border-calm-500 resize-none"
          />
        </div>

        {/* Save Button */}
        <Button 
          onClick={handleSaveEntry}
          className="w-full bg-gradient-to-r from-calm-500 to-calm-600 hover:from-calm-600 hover:to-calm-700 text-white font-medium rounded-xl py-3 transition-all duration-300 transform hover:scale-105"
          disabled={!selectedMood && !journalEntry}
        >
          Save Today's Check-in ✨
        </Button>

        {/* Encouragement */}
        {(selectedMood || journalEntry) && (
          <div className="text-center p-3 bg-white/40 dark:bg-gray-800/40 rounded-xl animate-fade-in">
            <p className="text-sm text-calm-700 dark:text-calm-200">
              Thank you for taking a moment to check in with yourself 💚
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoodTracker;
