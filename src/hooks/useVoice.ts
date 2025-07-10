import { useState, useCallback, useEffect } from 'react';
import { useApp } from '../contexts/AppContext';

export function useVoice() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useApp();

  const startListening = useCallback(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      setError('Speech recognition not supported in this browser');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      dispatch({ type: 'SET_VOICE_LISTENING', payload: true });
      setError(null);
    };

    recognition.onresult = (event) => {
      const result = event.results[0][0].transcript;
      setTranscript(result);
      setIsListening(false);
      dispatch({ type: 'SET_VOICE_LISTENING', payload: false });
    };

    recognition.onerror = (event) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
      dispatch({ type: 'SET_VOICE_LISTENING', payload: false });
    };

    recognition.onend = () => {
      setIsListening(false);
      dispatch({ type: 'SET_VOICE_LISTENING', payload: false });
    };

    recognition.start();
  }, [dispatch]);

  const stopListening = useCallback(() => {
    setIsListening(false);
    dispatch({ type: 'SET_VOICE_LISTENING', payload: false });
  }, [dispatch]);

  const parseBid = useCallback((text: string): number | null => {
    // Parse voice input like "bid 5 minutes" or "lagao 1 minute 30 seconds"
    const timeRegex = /(\d+)\s*(minute|min|minutes|mins)?\s*(\d+)?\s*(second|sec|seconds|secs)?/i;
    const match = text.match(timeRegex);
    
    if (match) {
      const minutes = parseInt(match[1] || '0');
      const seconds = parseInt(match[3] || '0');
      return minutes * 100 + Math.floor(seconds * 1.67); // Convert to time credits
    }
    
    return null;
  }, []);

  return {
    isListening,
    transcript,
    error,
    startListening,
    stopListening,
    parseBid
  };
}