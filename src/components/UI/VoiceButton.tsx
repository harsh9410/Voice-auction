import React from 'react';
import { motion } from 'framer-motion';
import { Mic, MicOff } from 'lucide-react';

interface VoiceButtonProps {
  isListening: boolean;
  onToggle: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function VoiceButton({ isListening, onToggle, size = 'md' }: VoiceButtonProps) {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  return (
    <motion.button
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center transition-all ${
        isListening 
          ? 'bg-red-500 shadow-lg shadow-red-500/50' 
          : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 shadow-lg shadow-cyan-500/30'
      }`}
      onClick={onToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={isListening ? { scale: [1, 1.2, 1] } : {}}
      transition={{ repeat: isListening ? Infinity : 0, duration: 1 }}
    >
      {isListening ? (
        <MicOff className={`${iconSizes[size]} text-white`} />
      ) : (
        <Mic className={`${iconSizes[size]} text-white`} />
      )}
    </motion.button>
  );
}