import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { cardAnimation, duration, easing, stagger } from '../utils/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverScale?: boolean;
}

export function AnimatedCard({ children, className = '', delay = 0, hoverScale = true }: AnimatedCardProps) {
  return (
    <motion.div
      initial={cardAnimation.initial}
      whileInView={cardAnimation.whileInView}
      viewport={cardAnimation.viewport}
      transition={{
        duration: duration.normal,
        delay: delay * stagger.normal,
        ease: easing.smooth,
      }}
      whileHover={hoverScale ? cardAnimation.whileHover : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
