import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import logoExterior from '../../imports/logement-RSI-exterieur.jpg';
import logoHandicap from '../../imports/rsi-propulsion-handicap.jpg';

const slides = [
  {
    image: logoExterior,
    alt: 'Bâtiment RSI Propulsion - Façade extérieure et espaces communs à Hochelaga-Maisonneuve',
  },
  {
    image: logoHandicap,
    alt: 'Accessibilité et services adaptés pour personnes en situation de handicap',
  },
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // Change toutes les 6 secondes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8621A]/95 via-[#E8621A]/75 to-[#E8621A]/50 z-10" />

          {/* Image */}
          <ImageWithFallback
            src={slides[currentIndex].image}
            alt={slides[currentIndex].alt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Indicateurs */}
      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group"
            aria-label={`Aller à la diapositive ${index + 1}`}
          >
            <motion.div
              className={`h-1 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-12' : 'bg-white/50 w-8'
              }`}
              whileHover={{ width: 48, backgroundColor: 'rgba(255,255,255,1)' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
