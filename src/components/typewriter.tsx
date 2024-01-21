// Typewriter.tsx

import React, { useEffect, useState } from 'react';

const Typewriter: React.FC<{ text: string }> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const animateTyping = () => {
      setDisplayText((prevText) => prevText + text.charAt(currentIndex));
      setCurrentIndex((prevIndex) => prevIndex + 1);
    };

    if (currentIndex < text.length) {
      const animationFrameId = requestAnimationFrame(animateTyping);

      return () => cancelAnimationFrame(animationFrameId);
    }

    return undefined;
  }, [text, currentIndex]);

  return <span className="typewriter">{displayText}</span>;
};

export default Typewriter;
