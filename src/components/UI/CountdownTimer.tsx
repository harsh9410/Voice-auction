import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  timeRemaining: number;
  onTimeUp?: () => void;
}

export function CountdownTimer({ timeRemaining, onTimeUp }: CountdownTimerProps) {
  const [time, setTime] = useState(timeRemaining);

  useEffect(() => {
    if (time <= 0) {
      onTimeUp?.();
      return;
    }

    const interval = setInterval(() => {
      setTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onTimeUp]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  const isUrgent = time <= 300; // 5 minutes
  const isCritical = time <= 60; // 1 minute

  return (
    <motion.div 
      className={`flex items-center space-x-1 px-2 py-1 rounded-lg ${
        isCritical 
          ? 'bg-red-500/20 text-red-400' 
          : isUrgent 
          ? 'bg-yellow-500/20 text-yellow-400' 
          : 'bg-green-500/20 text-green-400'
      }`}
      animate={isCritical ? { scale: [1, 1.05, 1] } : {}}
      transition={{ repeat: isCritical ? Infinity : 0, duration: 1 }}
    >
      <Clock className="h-3 w-3" />
      <span className="text-xs font-medium">{formatTime(time)}</span>
    </motion.div>
  );
}