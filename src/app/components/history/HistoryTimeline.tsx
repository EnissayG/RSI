import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'motion/react';
import { HISTORY_MILESTONES, type HistoryMilestone } from '../../config/historyTimeline';
import { fontBody, fontHeading } from '../layout/PageSections';

function BranchConnector({ side, accent }: { side: 'left' | 'right'; accent: string }) {
  const path =
    side === 'right'
      ? 'M 0 24 C 40 24, 56 24, 80 24'
      : 'M 80 24 C 56 24, 40 24, 0 24';
  const reduceMotion = useReducedMotion();

  return (
    <svg
      className={`hidden lg:block absolute top-8 w-20 h-12 ${side === 'right' ? '-left-20' : '-right-20'}`}
      viewBox="0 0 80 48"
      fill="none"
      aria-hidden
    >
      <motion.path
        d={path}
        stroke={accent}
        strokeWidth="3"
        strokeLinecap="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0.35 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </svg>
  );
}

function MilestoneCard({
  milestone,
  index,
  side,
}: {
  milestone: HistoryMilestone;
  index: number;
  side: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      ref={ref}
      className={`relative flex w-full lg:w-[calc(50%-2.5rem)] ${
        side === 'right' ? 'lg:ml-auto lg:pl-12' : 'lg:mr-auto lg:pr-12'
      }`}
      initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.97 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-8% 0px -10% 0px' }}
      transition={{ duration: 0.55, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="lg:hidden absolute -left-[3px] top-6 w-3 h-3 rounded-full border-2 border-white shadow-sm"
        style={{ backgroundColor: milestone.accent }}
        initial={reduceMotion ? false : { scale: 0 }}
        whileInView={reduceMotion ? undefined : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      />

      <div
        className={`relative w-full rounded-2xl border border-gray-100 bg-white p-5 sm:p-7 shadow-sm transition-shadow hover:shadow-lg ${
          milestone.highlight ? 'ring-2 ring-[#8AAC2A]/30' : ''
        }`}
        style={{ borderTopWidth: 4, borderTopColor: milestone.accent }}
      >
        <BranchConnector side={side} accent={milestone.accent} />

        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
          <span
            className="text-2xl sm:text-3xl font-bold tabular-nums"
            style={{ color: milestone.accent, ...fontHeading }}
          >
            {milestone.year}
          </span>
          {milestone.yearLabel && (
            <span className="text-xs uppercase tracking-wider text-[#6B6B6B]" style={fontBody}>
              {milestone.yearLabel}
            </span>
          )}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
          {milestone.title}
        </h3>
        <p className="text-[#6B6B6B] whitespace-pre-line text-sm sm:text-base" style={fontBody}>
          {milestone.body}
        </p>
        {milestone.highlight && (
          <motion.span
            className="inline-block mt-4 text-xs font-semibold uppercase tracking-widest text-[#8AAC2A]"
            style={fontBody}
            animate={reduceMotion ? undefined : { opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Mission en cours
          </motion.span>
        )}
      </div>

      {/* Nœud sur la tige (desktop) */}
      <motion.div
        className={`hidden lg:flex absolute top-7 w-11 h-11 rounded-full items-center justify-center text-white text-xs font-bold shadow-lg border-4 border-[#F9F8F6] ${
          side === 'right' ? '-left-[4.75rem]' : '-right-[4.75rem]'
        }`}
        style={{ backgroundColor: milestone.accent }}
        initial={reduceMotion ? false : { scale: 0 }}
        whileInView={reduceMotion ? undefined : { scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.1 }}
      >
        {String(index + 1).padStart(2, '0')}
      </motion.div>
    </motion.article>
  );
}

export function HistoryTimeline() {
  const trunkRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: trunkRef,
    offset: ['start 0.85', 'end 0.15'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const trunkScale = useTransform(smoothProgress, [0, 1], [0, 1]);
  const trunkGlow = useTransform(smoothProgress, [0, 0.5, 1], [0.2, 0.6, 1]);
  const trunkShadow = useTransform(
    trunkGlow,
    (v) => `0 0 ${12 + v * 20}px rgba(232, 98, 26, ${0.15 + v * 0.2})`,
  );

  return (
    <div ref={trunkRef} className="relative max-w-[1100px] mx-auto px-4 sm:px-6">
      {/* Tige centrale animée au scroll */}
      <div
        className="absolute left-4 lg:left-1/2 lg:-translate-x-1/2 top-0 bottom-0 w-[3px] rounded-full bg-gray-200/90 overflow-hidden"
        aria-hidden
      >
        <motion.div
          className="absolute inset-0 origin-top rounded-full"
          style={{
            scaleY: reduceMotion ? 1 : trunkScale,
            background: 'linear-gradient(180deg, #E8621A 0%, #D4A017 45%, #8AAC2A 100%)',
            boxShadow: reduceMotion ? undefined : trunkShadow,
          }}
        />
      </div>

      {/* Racine : point de départ */}
      <motion.div
        className="relative flex justify-start lg:justify-center mb-14 sm:mb-20 pl-10 lg:pl-0"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-top-1 flex items-center gap-3">
          <motion.div
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#E8621A] flex items-center justify-center text-white shadow-xl border-4 border-white"
            animate={reduceMotion ? undefined : { scale: [1, 1.06, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-lg font-bold" style={fontHeading}>
              ★
            </span>
          </motion.div>
          <span
            className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] text-[#E8621A] -rotate-90 origin-center whitespace-nowrap absolute left-full ml-6 top-1/2 -translate-y-1/2"
            style={fontBody}
          >
            Origine · 1990
          </span>
        </div>
      </motion.div>

      <div className="relative space-y-12 sm:space-y-16 lg:space-y-20 pb-8">
        {HISTORY_MILESTONES.map((milestone, index) => (
          <div key={milestone.id} className="relative pl-10 lg:pl-0 lg:min-h-[1px]">
            <MilestoneCard
              milestone={milestone}
              index={index}
              side={index % 2 === 0 ? 'right' : 'left'}
            />
          </div>
        ))}
      </div>

      {/* Feuille terminale */}
      <motion.div
        className="relative flex justify-center mt-4"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <div
          className="w-3 h-3 rounded-full bg-[#8AAC2A] ring-4 ring-[#8AAC2A]/25"
          aria-hidden
        />
      </motion.div>
    </div>
  );
}
