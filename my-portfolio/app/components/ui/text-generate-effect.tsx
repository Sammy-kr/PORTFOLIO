"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const wordsArray = words.trim().split(" ");
  const lastWord = wordsArray[wordsArray.length - 1];

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + words[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, words]);

  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
  }, [words]);

  const renderText = () => {
    const parts = displayedText.split(" ");
    return parts.map((part, index) => {
      const isLastWord = index === parts.length - 1 && part === lastWord;
      return (
        <span
          key={index}
          className={isLastWord ? "text-purple-500" : ""}
        >
          {part}{index < parts.length - 1 ? " " : ""}
        </span>
      );
    });
  };

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {renderText()}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block ml-1 text-purple-500"
      >
        |
      </motion.span>
    </motion.p>
  );
}; 