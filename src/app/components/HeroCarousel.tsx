import { useState, useEffect } from 'react';
import { heroSlides } from '../config/images';

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#2C2C2C]" aria-hidden>
      {heroSlides.map((slide, index) => (
        <img
          key={slide.src}
          src={slide.src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loading={index === 0 ? 'eager' : 'lazy'}
          fetchPriority={index === 0 ? 'high' : 'low'}
          decoding="async"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/75 via-[#2C2C2C]/50 to-[#2C2C2C]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-[#2C2C2C]/15 pointer-events-none" />

      {/* Indicateurs, petits, en bas à gauche */}
      <div
        className="absolute bottom-[7.25rem] sm:bottom-[8rem] left-6 sm:left-12 lg:left-20 z-20 flex items-center gap-1"
        role="tablist"
        aria-label="Images du carrousel"
      >
        {heroSlides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
            className="p-1.5 rounded-sm hover:bg-white/10 transition-colors"
            aria-label={`Image ${index + 1} sur ${heroSlides.length}`}
          >
            <span
              className={`block h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white w-5' : 'bg-white/45 w-2.5 hover:bg-white/70'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
