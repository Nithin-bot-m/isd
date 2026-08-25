'use client';

import * as React from 'react';
import { animate, useReducedMotion } from 'framer-motion';

interface CounterProps {
  value: number;
  duration?: number;
  format?: (n: number) => string;
  className?: string;
}

/**
 * Animated number that counts up from its previous value to the new one.
 * Useful for the pricing slider.
 */
export function Counter({
  value,
  duration = 0.6,
  format = (n) => Math.round(n).toLocaleString('en-US'),
  className,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const prev = React.useRef(0);

  React.useEffect(() => {
    if (reduce || !ref.current) {
      if (ref.current) ref.current.textContent = format(value);
      prev.current = value;
      return;
    }
    const controls = animate(prev.current, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = format(v);
      },
    });
    prev.current = value;
    return () => controls.stop();
  }, [value, duration, format, reduce]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
}
