import { useCallback, useEffect, useState } from 'react';

export const useTextToSpeech = () => {
  const [isSupported, setIsSupported] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);

      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        const selected = voices.find(v => 
          v.lang.toLowerCase().includes('en-IN') || v.name.toLowerCase().includes('india')
        ) || voices[0]; // fallback to first voice

        if (selected) {
          setVoice(selected);
        }
      };
      loadVoices();

      // if (window.speechSynthesis.getVoices().length === 0) {
      //   window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
      // } else {
      //   loadVoices();
      // }
    }
  }, []);

  const speak = useCallback((text: string) => {
    if (!isSupported || !text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onstart = (e) => console.log("Speech started", e);
    utterance.onend = (e) => console.log("Speech ended", e);
    utterance.onerror = (e) => console.error("Speech error", e);
    utterance.onpause = (e) => console.log("Speech paused", e);
    utterance.onresume = (e) => console.log("Speech resumed", e);
    utterance.onboundary = (e) => console.log("Speech boundary", e);

    if (voice) {
      utterance.voice = voice;
    }

    utterance.pitch = 1;
    utterance.rate = 0.4;
    utterance.volume = 1;

    console.log("Utterance properties:", utterance);

    window.speechSynthesis.cancel();
    console.log("Speaking now");
    window.speechSynthesis.speak(utterance);
    // return { speak };
  }, [isSupported, voice]);

  // console.log("agrdipak"+speak);
  return { speak};
};