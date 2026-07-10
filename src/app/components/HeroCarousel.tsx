import { useEffect } from 'react';
import { heroSlides } from '../config/images';

type HeroCarouselProps = {
  index: number;
  onIndexChange: (index: number) => void;
};

export function HeroCarousel({ index, onIndexChange }: HeroCarouselProps) {
  useEffect(() => {
    const timer = setInterval(() => {
      onIndexChange((index + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [index, onIndexChange]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#2C2C2C]" aria-hidden>
      {heroSlides.map((slide, i) => (
        <img
          key={`${slide.src}-${i}`}
          src={slide.src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ objectPosition: slide.objectPosition ?? 'center center' }}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'low'}
          decoding="async"
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/75 via-[#2C2C2C]/50 to-[#2C2C2C]/40 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/50 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

type HeroCarouselDotsProps = {
  index: number;
  onSelect: (index: number) => void;
};

export function HeroCarouselDots({ index, onSelect }: HeroCarouselDotsProps) {
  return (
    <div
      className="flex items-center gap-1.5 sm:gap-2"
      role="tablist"
      aria-label="Images du carrousel"
    >
      {heroSlides.map((slide, i) => (
        <button
          key={slide.src}
          type="button"
          role="tab"
          aria-selected={i === index}
          aria-controls={`hero-slide-${i}`}
          onClick={() => onSelect(i)}
          className="group p-2 -m-1 rounded-md hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label={`Image ${i + 1} sur ${heroSlides.length} : ${slide.alt}`}
        >
          <span
            className={`block h-1.5 rounded-full transition-all duration-300 ${
              i === index
                ? 'bg-white w-6 sm:w-7 shadow-sm'
                : 'bg-white/40 w-2.5 sm:w-3 group-hover:bg-white/65'
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export const heroSlideCount = heroSlides.length;
