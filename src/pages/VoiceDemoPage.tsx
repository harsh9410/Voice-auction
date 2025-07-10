import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff, Volume2, Brain, Zap } from 'lucide-react';
import { VoiceButton } from '../components/UI/VoiceButton';
import { useVoice } from '../hooks/useVoice';

export function VoiceDemoPage() {
  const { isListening, transcript, error, startListening, stopListening, parseBid } = useVoice();
  const [bidAmount, setBidAmount] = useState<number | null>(null);

  React.useEffect(() => {
    if (transcript) {
      const parsed = parseBid(transcript);
      setBidAmount(parsed);
    }
  }, [transcript, parseBid]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Voice Bidding Demo
          </h1>
          <p className="text-gray-400 mb-12">
            Test your voice commands and see how TimeBid interprets your bids
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Voice Interface */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-white mb-6">
                Voice Command Interface
              </h2>
              
              <div className="flex justify-center mb-8">
                <VoiceButton
                  isListening={isListening}
                  onToggle={isListening ? stopListening : startListening}
                  size="lg"
                />
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300">
                  {isListening ? 'Listening...' : 'Click to start voice bidding'}
                </p>
                
                {isListening && (
                  <motion.div
                    className="flex justify-center space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-cyan-400 rounded-full"
                        animate={{ height: [20, 40, 20] }}
                        transition={{ 
                          duration: 0.8, 
                          repeat: Infinity, 
                          delay: i * 0.1 
                        }}
                      />
                    ))}
                  </motion.div>
                )}
                
                {error && (
                  <motion.div
                    className="bg-red-500/20 text-red-400 p-3 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {error}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">
              Voice Recognition Results
            </h2>
            
            <div className="space-y-6">
              {transcript && (
                <motion.div
                  className="bg-gray-700/50 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Volume2 className="h-4 w-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">What you said:</span>
                  </div>
                  <p className="text-white font-medium">{transcript}</p>
                </motion.div>
              )}
              
              {bidAmount !== null && (
                <motion.div
                  className="bg-green-500/20 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Parsed bid amount:</span>
                  </div>
                  <p className="text-white font-medium text-xl">
                    {bidAmount.toLocaleString()} credits
                  </p>
                </motion.div>
              )}
              
              {transcript && bidAmount === null && (
                <motion.div
                  className="bg-red-500/20 p-4 rounded-lg"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-red-400">
                    Could not parse bid amount from voice command
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Instructions */}
        <motion.div
          className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Voice Commands Examples
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-cyan-400 mb-3">Valid Commands:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• "Bid 5 minutes"</li>
                <li>• "Lagao 2 minutes 30 seconds"</li>
                <li>• "I bid 10 minutes"</li>
                <li>• "3 minutes and 45 seconds"</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-purple-400 mb-3">Tips:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Speak clearly and at normal pace</li>
                <li>• Use "minutes" and "seconds" for clarity</li>
                <li>• 1 minute = 100 time credits</li>
                <li>• Wait for the listening indicator</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}