import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface NumberTickerProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  suffix = '',
  className = '',
  duration = 2,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let animationFrameId: number;
    let startTime: number | null = null;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      // Ease out cubic for silky smooth animation
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easeOutProgress * value);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value, duration]);

  return (
    <span
      ref={ref}
      className={`font-bold tracking-tight tabular-nums ${className}`}
      style={{ fontVariantNumeric: 'tabular-nums' }}
    >
      {displayValue}
      {suffix}
    </span>
  );
};
