import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Heart,
  FileDown,
  FileText,
  Shield,
  HandHeart,
  Lock,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Button } from '../ui/button';
import { PAYPAL_DONATE_URL } from '../../config/links';

export const fontHeading = { fontFamily: 'var(--font-heading)' };
export const fontBody = {
  fontFamily: 'var(--font-body)',
  lineHeight: 1.75,
  fontSize: 'clamp(15px, 3.6vw, 17px)',
};

/** Espacement vertical standard des sections */
export const sectionPad = 'py-12 sm:py-16 md:py-24';

/** Conteneur de page (marges latérales mobile serrées) */
export const pageContainer = 'max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8';

export const pageContainerWide = 'max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12';

export const sectionGap = 'gap-8 md:gap-12 lg:gap-16';

export const sectionGapTight = 'gap-6 md:gap-10 lg:gap-14';

export const sectionHeaderMb = 'mb-8 md:mb-12';

export const headingSection = 'text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C2C2C]';

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[#E8621A] uppercase tracking-[0.15em] text-xs font-semibold mb-3"
      style={fontBody}
    >
      {children}
    </p>
  );
}

/** Séparation standard entre héros et contenu, bord droit, 4px */
export function SectionRule({ color = '#E8621A' }: { color?: string }) {
  return <hr className="border-0 h-1 m-0 w-full" style={{ backgroundColor: color, height: '4px' }} />;
}

export function ColorBand({
  children,
  bg = '#E8621A',
  className = '',
  height = 'h-[120px]',
}: {
  children: ReactNode;
  bg?: string;
  className?: string;
  height?: string;
}) {
  return (
    <div
      className={`w-full ${height} flex items-center justify-center px-6 ${className}`}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
  );
}

type PageHeroVariant = 'image' | 'orange' | 'cream';

export function PageHero({
  title,
  subtitle,
  eyebrow,
  image,
  imageAlt,
  variant = 'image',
  align = 'center',
  showRule = true,
  ruleColor,
  leading,
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  variant?: PageHeroVariant;
  align?: 'center' | 'left';
  showRule?: boolean;
  ruleColor?: string;
  leading?: ReactNode;
  children?: ReactNode;
}) {
  const isOrange = variant === 'orange';
  const isCream = variant === 'cream';
  const isImage = variant === 'image' && image;

  const bgStyle = isOrange
    ? { backgroundColor: '#E8621A' }
    : isCream
      ? { backgroundColor: '#F9F8F6' }
      : undefined;

  const textLight = isImage || isOrange;
  const resolvedRuleColor = ruleColor ?? (isOrange ? '#FFFFFF' : '#E8621A');

  return (
    <>
      <section
        className="relative min-h-[40vh] sm:min-h-[48vh] md:min-h-[52vh] flex items-center"
        style={bgStyle}
      >
        {isImage && (
          <div className="absolute inset-0 bg-[#3a3a3a]">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full min-h-[40vh] sm:min-h-[48vh] md:min-h-[52vh] object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#2C2C2C]/80 via-[#2C2C2C]/55 to-[#2C2C2C]/45" />
          </div>
        )}

        <div
          className={`relative z-10 w-full ${pageContainer} py-14 sm:py-16 md:py-24 ${
            align === 'center' ? 'text-center' : 'text-left'
          }`}
        >
          {leading && (
            <motion.div
              className={`mb-6 ${align === 'center' ? 'flex justify-center' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {leading}
            </motion.div>
          )}
          {eyebrow && (
            <motion.p
              className={`uppercase tracking-[0.15em] text-xs font-semibold mb-4 ${
                isOrange ? 'text-[#FFD4B8]' : isCream ? 'text-[#E8621A]' : 'text-[#FFD4B8]'
              }`}
              style={fontBody}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight ${
              textLight ? 'text-white' : 'text-[#2C2C2C]'
            }`}
            style={fontHeading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className={`text-base sm:text-lg md:text-xl max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${
                textLight ? 'text-white/95' : 'text-[#6B6B6B]'
              }`}
              style={fontBody}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
          {children && (
            <motion.div
              className={`mt-6 ${align === 'center' ? 'flex flex-col items-center' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {children}
            </motion.div>
          )}
        </div>
      </section>
      {showRule && <SectionRule color={resolvedRuleColor} />}
    </>
  );
}

export function ValuesBand() {
  const values: { label: string; icon: LucideIcon }[] = [
    { label: 'Respect', icon: Heart },
    { label: 'Confidentialité', icon: Lock },
    { label: 'Intégrité', icon: Shield },
    { label: 'Empathie', icon: HandHeart },
    { label: 'Solidarité', icon: Users },
  ];

  return (
    <section className="bg-[#E8621A] py-10 sm:py-14">
      <div className={pageContainer}>
        <div className="flex flex-wrap justify-center gap-8 md:gap-14">
          {values.map(({ label, icon: Icon }) => (
            <div key={label} className="flex flex-col items-center gap-2 text-white min-w-[100px]">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wide" style={fontBody}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HoverCard({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}
      whileHover={{ y: -4 }}
    >
      {children}
    </motion.div>
  );
}

export function Blockquote({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={`border-l-4 border-[#E8621A] pl-4 sm:pl-6 italic text-[#2C2C2C] text-lg sm:text-xl md:text-[1.35rem] ${className}`}
      style={{ ...fontHeading, lineHeight: 1.6 }}
    >
      {children}
    </blockquote>
  );
}

export function PayPalDonateButton({
  className = '',
  size = 'lg',
}: {
  className?: string;
  size?: 'lg' | 'md';
}) {
  const isLg = size === 'lg';
  return (
    <a
      href={PAYPAL_DONATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Button
        type="button"
        className={`bg-white hover:bg-[#F9F8F6] text-[#E8621A] font-semibold shadow-xl inline-flex items-center gap-2 ${
          isLg ? 'rounded-full px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto' : 'rounded-full px-6 sm:px-8 py-4 sm:py-5 w-full sm:w-auto'
        }`}
        style={fontBody}
      >
        <Heart className="w-5 h-5 fill-[#E8621A]" aria-hidden />
        Faire un don via PayPal
        <ExternalLink className="w-4 h-4 opacity-70" aria-hidden />
      </Button>
    </a>
  );
}

export function ContentImage({
  src,
  alt,
  className = '',
  aspect = 'video',
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: 'video' | 'square' | 'portrait';
}) {
  const aspectClass =
    aspect === 'square' ? 'aspect-square' : aspect === 'portrait' ? 'aspect-[3/4]' : 'aspect-video';
  return (
    <div className={`rounded-2xl overflow-hidden shadow-lg ${aspectClass} ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full min-h-[180px] sm:min-h-[220px] object-cover object-center bg-[#E8E6E3]"
        loading="lazy"
      />
    </div>
  );
}

export function DocumentDownloadCard({
  title,
  description,
  href,
  accent = '#E8621A',
}: {
  title: string;
  description: string;
  href: string;
  accent?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download
      className="group flex flex-col h-full bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-[#E8621A]/30"
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
        style={{ backgroundColor: accent }}
      >
        <FileText className="w-6 h-6" aria-hidden />
      </div>
      <h3 className="text-lg font-bold text-[#2C2C2C] mb-2" style={fontHeading}>
        {title}
      </h3>
      <p className="text-[#6B6B6B] flex-1 mb-4" style={fontBody}>
        {description}
      </p>
      <span
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8621A] group-hover:gap-3 transition-all"
        style={fontBody}
      >
        <FileDown className="w-4 h-4" aria-hidden />
        Télécharger le PDF
      </span>
    </a>
  );
}

export function DocumentDownloadsRow({
  documents,
}: {
  documents: { title: string; description: string; href: string; accent?: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {documents.map((doc) => (
        <DocumentDownloadCard key={doc.href} {...doc} />
      ))}
    </div>
  );
}

export function StatNumber({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center px-2 sm:px-4">
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#E8621A] mb-1 sm:mb-2" style={fontHeading}>
        {value}
      </div>
      <div className="text-sm md:text-base text-[#6B6B6B]" style={fontBody}>
        {label}
      </div>
    </div>
  );
}
