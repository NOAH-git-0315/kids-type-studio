
import { createContext, useEffect, useState } from 'react';

type TypingTextContextType = {
  texts: string[];
  setTexts: React.Dispatch<React.SetStateAction<string[]>>;
  lineIndex: number;
  setLineIndex: React.Dispatch<React.SetStateAction<number>>;
  charIndex: number;
  setCharIndex: React.Dispatch<React.SetStateAction<number>>;
  currentChar: string;
  setCurrentChar: React.Dispatch<React.SetStateAction<string>>;
};

export const TypingText = createContext<TypingTextContextType | null>(null);

export const TypingTextProvider = ({ children }: { children: React.ReactNode }) => {
  const [texts, setTexts] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState<string>('');

  useEffect(() => {
    setCurrentChar(texts[lineIndex]?.[charIndex] || '');
  },[charIndex, lineIndex, texts]);
  return (
    <TypingText.Provider value={{ texts, setTexts, lineIndex, setLineIndex, charIndex, setCharIndex, currentChar, setCurrentChar }}>
      {children}
    </TypingText.Provider>
  );
};
