import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { pageTransition } from '../utils/animations';

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div {...pageTransition}>
      {children}
    </motion.div>
  );
}
