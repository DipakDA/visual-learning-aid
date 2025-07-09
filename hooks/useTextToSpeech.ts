import { useCallback, useEffect, useState } from 'react';

export const useTextToSpeech = () => {
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!isSupported || !text) return;
    
    // Cancel any ongoing speech before starting a new one
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    // Optional: configure voice, pitch, rate
    // utterance.voice = window.speechSynthesis.getVoices()[0];
    utterance.pitch = 1;
    // Slowed down speech rate to 50% of default (1.0 -> 0.5) for clearer enunciation.
    utterance.rate = 0.5;
    utterance.volume = 1;
    
    window.speechSynthesis.speak(utterance);
  }, [isSupported]);

  return { speak, isSupported };
};