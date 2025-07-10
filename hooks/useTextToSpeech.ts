import { useCallback, useEffect, useState } from 'react';

export const useTextToSpeech = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);

      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Try to find a voice with Indian English
        const indianVoice = voices.find(v =>
          v.lang.includes('hi-IN') || v.name.toLowerCase().includes('india')
        );
        if (indianVoice) setVoice(indianVoice);
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!isSupported || !text) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) {
      utterance.voice = voice;
    }

    utterance.pitch = 1;
    utterance.rate = 0.6; // Slightly faster for more natural tone
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  }, [isSupported, voice]);

  return { speak, isSupported, voice };
};