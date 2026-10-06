import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p
      ref={containerRef}
      className={className}
      aria-label={text}
      role="text"
    >
      {characters.map((char, i) => (
        <CharSpan key={i} char={char} index={i} total={characters.length} progress={scrollYProgress} />
      ))}
    </p>
  );
};

interface CharSpanProps {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const CharSpan: React.FC<CharSpanProps> = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="inline-block"
      aria-hidden="true"
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  );
};
