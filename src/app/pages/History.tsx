import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { HistoryTimeline } from '../components/history/HistoryTimeline';
import {
  PageHero,
  SectionEyebrow,
  SectionRule,
  ValuesBand,
  fontHeading,
  fontBody,
  sectionPad,
  pageContainer,
  sectionGapTight,
  headingSection,
} from '../components/layout/PageSections';
import { HISTORY_ORIGIN } from '../config/historyTimeline';
import { siteImages, pageHeroImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';
import { OrgFactsGrid } from '../components/layout/OrgFactsGrid';

const imageFrame = 'rounded-2xl overflow-hidden shadow-xl h-[240px] sm:h-[300px] md:h-[380px] lg:h-[420px]';

export function History() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.historique}
          imageAlt="Notre histoire, RSI Propulsion"
          eyebrow="Plus de 35 ans d'engagement"
          title="Notre histoire"
          subtitle="De la naissance d'un projet communautaire à 15 logements adaptés au cœur de Hochelaga-Maisonneuve."
        />

        <section className={`bg-white ${sectionPad}`}>
          <div className={`${pageContainer} grid grid-cols-1 lg:grid-cols-2 ${sectionGapTight} items-center`}>
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionEyebrow>Pourquoi nous existons</SectionEyebrow>
              <h2 className={headingSection} style={fontHeading}>
                Une mission née du terrain
              </h2>
              <p className="text-[#6B6B6B]" style={fontBody}>
                {HISTORY_ORIGIN}
              </p>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Aujourd'hui, {ORGANIZATION.shortName} poursuit ce mandat au {ORGANIZATION.address.street}, avec{' '}
                {ORGANIZATION.units} {ORGANIZATION.unitType.toLowerCase()} et des services intégrés 24 h/24, 7 j/7.
              </p>
            </motion.div>
            <motion.div
              className={imageFrame}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <img
                src={siteImages.logementExterieur}
                alt="Bâtiment RSI Propulsion, 2075 rue Théodore"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        <SectionRule color="#D4A017" />

        <section className={`bg-[#F9F8F6] ${sectionPad} overflow-hidden`}>
          <div className={`${pageContainer} mb-10 sm:mb-14 md:mb-16 text-center max-w-3xl mx-auto`}>
            <SectionEyebrow>Frise chronologique</SectionEyebrow>
            <h2 className={`${headingSection} mb-4`} style={fontHeading}>
              La branche de notre histoire
            </h2>
            <p className="text-[#6B6B6B]" style={fontBody}>
              Faites défiler la page : la tige se remplit au fil de votre lecture et chaque étape s'ouvre comme une
              branche de notre parcours, de 1990 à aujourd'hui.
            </p>
          </div>
          <HistoryTimeline />
        </section>

        <SectionRule color="#8AAC2A" />

        <section className={`bg-white ${sectionPad}`}>
          <div className={`${pageContainer} grid grid-cols-1 lg:grid-cols-2 ${sectionGapTight} items-center`}>
            <div>
              <SectionEyebrow>Notre quartier</SectionEyebrow>
              <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
                Hochelaga-Maisonneuve
              </h2>
              <p className="text-[#6B6B6B] mb-4 sm:mb-6" style={fontBody}>
                Hochelaga-Maisonneuve est l'un des quartiers les plus dynamiques et solidaires de Montréal. Avec ses
                nombreux organismes communautaires, ses commerces de proximité et ses espaces verts, il offre un cadre de
                vie stimulant et inclusif pour nos locataires.
              </p>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Le quartier est bien desservi par les transports en commun et offre un accès facile aux services
                essentiels, épiceries, cliniques, parcs et centres communautaires.
              </p>
            </div>
            <div className={imageFrame.replace('lg:h-[420px]', 'lg:h-[380px]')}>
              <img src={siteImages.historiqueBas} alt="Quartier Hochelaga-Maisonneuve" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className={pageContainer}>
            <SectionEyebrow>Aujourd'hui</SectionEyebrow>
            <h2 className={`${headingSection} mb-6 sm:mb-8`} style={fontHeading}>
              RSI Propulsion en chiffres
            </h2>
            <OrgFactsGrid />
          </div>
        </section>

        <ValuesBand />

        <section className="bg-[#F9F8F6] py-10 sm:py-14">
          <div className={`${pageContainer} flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-center`}>
            <Link to="/criteres" className="text-[#E8621A] font-semibold hover:underline" style={fontBody}>
              Critères d'admission →
            </Link>
            <span className="hidden sm:inline text-gray-300" aria-hidden>
              ·
            </span>
            <Link to="/equipe" className="text-[#E8621A] font-semibold hover:underline" style={fontBody}>
              Rencontrer l'équipe →
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
