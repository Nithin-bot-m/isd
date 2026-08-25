'use client';

import * as React from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { cn } from '@/lib/utils';

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Max rotation in degrees */
  max?: number;
  /** Glare effect on/off */
  glare?: boolean;
}

/**
 * 3D perspective tilt card — rotates around X/Y axes based on mouse position.
 * Used for the hero dossier card.
 */
export function TiltCard({
  children,
  max = 12,
  glare = true,
  className,
  ...rest
}: TiltCardProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 20,
  });

  const glareX = useTransform(px, [0, 1], ['0%', '100%']);
  const glareY = useTransform(py, [0, 1], ['0%', '100%']);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rx,
        rotateY: ry,
      }}
      className={cn('relative', className)}
      {...(rest as React.ComponentProps<typeof motion.div>)}
    >
      {children}
      {glare && !reduce && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background: useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.18), transparent 50%)`,
          }}
        />
      )}
    </motion.div>
  );
}

// motion template helper (avoids extra import in caller)
import { useMotionTemplate } from 'framer-motion';
