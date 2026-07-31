import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  className?: string;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  let globalWordIndex = 0;

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center items-center gap-x-[0.25em] gap-y-[0.1em] ${className}`}>
      {segments.map((segment, segIdx) => {
        const words = segment.text.split(' ');
        return words.map((word, wIdx) => {
          const currentIdx = globalWordIndex++;
          return (
            <motion.span
              key={`${segIdx}-${wIdx}`}
              initial={{ y: 25, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 25, opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: currentIdx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block ${segment.className || ''}`}
            >
              {word}
            </motion.span>
          );
        });
      })}
    </div>
  );
};
