/**
 * Système d'animations cohérent pour RSI Propulsion
 * Toutes les animations suivent le même easing et timing pour une expérience unifiée
 */

// Easing personnalisé pour RSI Propulsion - smooth et élégant
export const easing = {
  // Easing principal - utilisé pour la plupart des animations
  smooth: [0.43, 0.13, 0.23, 0.96],
  // Pour les micro-interactions rapides
  quick: [0.25, 0.46, 0.45, 0.94],
  // Pour les animations plus rebondissantes
  bounce: [0.68, -0.55, 0.265, 1.55],
};

// Durées standards
export const duration = {
  instant: 0.15,
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  verySlow: 1.2,
};

// Délais standards pour les animations en cascade
export const stagger = {
  fast: 0.05,
  normal: 0.1,
  slow: 0.15,
};

// Variants réutilisables pour Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -24 },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 32 },
};

export const slideInRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -32 },
};

// Animations hover standards
export const hoverLift = {
  y: -4,
  transition: { duration: duration.fast, ease: easing.quick },
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: duration.fast, ease: easing.quick },
};

export const tapScale = {
  scale: 0.98,
  transition: { duration: duration.instant, ease: easing.quick },
};

// Configuration pour les animations au scroll
export const scrollViewport = {
  once: true,
  margin: '-80px',
  amount: 0.3,
};

// Animation de la ligne orange décorative
export const orangeLine = {
  initial: { width: 0, opacity: 0 },
  animate: { width: 48, opacity: 1 },
  transition: { duration: duration.normal, ease: easing.smooth },
};

// Animation pour les icônes en cercle
export const iconCircle = {
  whileHover: {
    scale: 1.1,
    rotate: 8,
    transition: { duration: duration.fast, ease: easing.bounce },
  },
  whileTap: {
    scale: 0.95,
    transition: { duration: duration.instant },
  },
};

// Animation pour les cartes
export const cardAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: scrollViewport,
  whileHover: hoverLift,
};

// Transition de page
export const pageTransition = {
  initial: fadeInUp.initial,
  animate: fadeInUp.animate,
  exit: fadeInUp.exit,
  transition: { duration: duration.fast, ease: easing.smooth },
};
