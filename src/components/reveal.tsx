'use client';

import { motion, useReducedMotion } from 'framer-motion';
import * as React from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 32 },
  down: { x: 0, y: -32 },
  left: { x: 32, y: 0 },
  right: { x: -32, y: 0 },
};

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  as?: React.ElementType;
}

/**
 * Wraps children in a fade + slide reveal triggered when scrolled into view.
 */
export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  className,
  as = 'div',
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  if (reduce) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  const initial = { opacity: 0, ...offset[direction] };

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '0px 0px -10% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </MotionTag>
  );
}
