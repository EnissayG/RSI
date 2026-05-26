import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { fadeInUp, slideInLeft, slideInRight, fadeIn, duration, easing, scrollViewport } from '../utils/animations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }: AnimatedSectionProps) {
  const getVariant = () => {
    switch (direction) {
      case 'left':
        return slideInLeft;
      case 'right':
        return slideInRight;
      case 'fade':
        return fadeIn;
      default:
        return fadeInUp;
    }
  };

  const variant = getVariant();

  return (
    <motion.div
      initial={variant.initial}
      whileInView={variant.animate}
      viewport={scrollViewport}
      transition={{ duration: duration.normal, delay, ease: easing.smooth }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
