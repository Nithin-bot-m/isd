'use client';

import * as React from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  strength?: number;
  as?: React.ElementType;
}

/**
 * Wraps children so they translate towards the cursor on hover.
 * Mark the underlying element with data-cursor="magnetic" if you
 * also want the custom cursor ring to enlarge.
 */
export function Magnetic({
  children,
  strength = 0.25,
  className,
  as = 'div',
  ...rest
}: MagneticProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - rect.left - rect.width / 2;
    const my = e.clientY - rect.top - rect.height / 2;
    x.set(mx * strength);
    y.set(my * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn(className)}
      data-cursor="magnetic"
      {...(rest as React.ComponentProps<typeof MotionTag>)}
    >
      {children}
    </MotionTag>
  );
}
