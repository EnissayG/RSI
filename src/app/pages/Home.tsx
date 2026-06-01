import { Link } from 'react-router';
import {
  Heart,
  Users,
  Home as HomeIcon,
  Phone,
  Mail,
  ArrowRight,
  Clock,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import { HeroCarousel } from '../components/HeroCarousel';
import {
  SectionEyebrow,
  SectionRule,
  ColorBand,
  StatNumber,
  HoverCard,
  PayPalDonateButton,
  fontHeading,
  fontBody,
  sectionPad,
  pageContainer,
  pageContainerWide,
  sectionGap,
  sectionGapTight,
  sectionHeaderMb,
  headingSection,
} from '../components/layout/PageSections';
import { siteImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';
import { OrgFactsGrid } from '../components/layout/OrgFactsGrid';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
const missionCards = [
  {
    color: '#E8621A',
    title: 'Un vrai chez-soi',
    body: "15 appartements 3½ entièrement adaptés dans Hochelaga-Maisonneuve, salon, cuisinette, chambre fermée et salle de bain adaptée. Un logement qui vous ressemble, à tarif abordable.",
  },
  {
    color: '#D4A017',
    title: 'Des services qui comptent',
    body: "Aide aux activités de la vie quotidienne (AVQ) et domestique (AVD), planifiée selon vos besoins. Une équipe de préposés présente 24 h/24, 7 j/7 pour votre sécurité et votre autonomie.",
  },
  {
    color: '#8AAC2A',
    title: 'Une vie de quartier',
    body: "Repas à la salle communautaire, activités sociales et ancrage dans un quartier reconnu pour sa solidarité. RSI Propulsion, c'est un milieu de vie normalisant et chaleureux.",
  },
];

const heroStats = [
  { value: '15', label: 'Unités', hint: null },
  {
    value: 'AVQ & AVD',
    label: 'Aide quotidienne & domestique',
    hint: 'Hygiène, habillement, repas, ménage, offert par nos préposés sur place',
  },
  { value: 'Depuis 2011', label: 'À Montréal', hint: null },
];

const admissionSteps = [
  {
    step: '01',
    title: 'Lire les critères',
    body: "Vérifiez l'admissibilité (âge, autonomie, besoins AVQ/AVD) et les coûts avant de vous lancer.",
    to: '/criteres',
    label: 'Critères',
  },
  {
    step: '02',
    title: 'Préparer le dossier',
    body: "Formulaire d'inscription et OCCI (Outil de Cheminement Clinique Informatisé), selon la procédure du réseau ÉquiToît.",
    to: '/criteres',
    label: 'Documents PDF',
  },
  {
    step: '03',
    title: 'Soumettre la demande',
    body: 'Complétez le formulaire en ligne ou contactez-nous, une seule demande couvre les quatre ressources du réseau.',
    to: '/admission',
    label: 'Inscription',
  },
  {
    step: '04',
    title: 'Suivi personnalisé',
    body: "Notre équipe évalue votre dossier et vous contacte dès qu'un logement correspondant se libère.",
    to: '/contact',
    label: 'Contact',
  },
];

const exploreLinks = [
  { to: '/services', title: 'Nos services', desc: 'AVQ, AVD, repas et vie communautaire' },
  { to: '/equipe', title: "L'équipe", desc: 'Direction et conseil d\'administration' },
  { to: '/historique', title: 'Notre histoire', desc: 'Plus de 25 ans à Hochelaga-Maisonneuve' },
  { to: '/carriere', title: 'Carrières', desc: 'Joignez une équipe engagée' },
];

const faqItems = [
  {
    q: 'Qui peut faire une demande de logement ?',
    a: "Toute personne âgée de 18 à 59 ans présentant une déficience physique avec ou sans atteinte cognitive légère, capable d'habiter seule en appartement avec un soutien adapté.",
  },
  {
    q: "Est-ce que je peux postuler si j'habite en dehors de Montréal ?",
    a: 'Oui. RSI Propulsion accepte les demandes de partout au Québec.',
  },
  {
    q: 'Combien coûte un logement ?',
    a: "Le loyer représente 25 % de votre revenu. Des frais mensuels s'ajoutent : 275 $ pour la nourriture, 45 $ pour l'entretien et 20 $ pour les frais communs. Le programme PSL (Supplément au Loyer) peut s'appliquer.",
  },
  {
    q: 'Quels documents dois-je fournir ?',
    a: "Le formulaire de demande d'inscription et votre OCCI (Outil de Cheminement Clinique Informatisé).",
  },
];

export function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero, contenu à gauche, stats en barre en bas */}
        <section className="relative min-h-[88dvh] sm:min-h-screen flex flex-col">
          <HeroCarousel />

          <div className="relative z-10 flex-1 flex items-center pt-24 sm:pt-28 pb-6 sm:pb-8">
            <div className={`w-full ${pageContainerWide}`}>
              <div className="max-w-2xl lg:max-w-3xl text-left">
                <motion.p
                  className="text-[#E8621A] uppercase tracking-[0.15em] text-xs font-semibold mb-5"
                  style={fontBody}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Hochelaga-Maisonneuve · Montréal
                </motion.p>
                <motion.h1
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-white leading-[1.1]"
                  style={fontHeading}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75 }}
                >
                  Des logements abordables et adaptés
                </motion.h1>
                <motion.p
                  className="text-base sm:text-xl md:text-2xl text-white/95 mb-8 sm:mb-10 max-w-xl leading-relaxed"
                  style={fontBody}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.12 }}
                >
                  Un milieu de vie adapté, chaleureux et inclusif pour personnes en situation de handicap
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.24 }}
                >
                  <Link to="/criteres">
                    <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-10 py-6 text-base sm:text-lg font-semibold shadow-xl w-full sm:w-auto min-w-[220px]">
                      Critères d'admission
                    </Button>
                  </Link>
                  <PayPalDonateButton className="w-full sm:w-auto" size="lg" />
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div
            className="relative z-10 w-full border-t border-white/20 bg-[#2C2C2C]/55 backdrop-blur-sm"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            <div className={`${pageContainer} py-8 sm:py-10 md:py-12`}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0">
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center text-center px-4 ${
                      index > 0 ? 'sm:border-l sm:border-white/20' : ''
                    }`}
                    title={stat.hint ?? undefined}
                  >
                    <span
                      className={`font-bold text-white mb-2 leading-none ${
                        stat.value === 'AVQ & AVD'
                          ? 'text-3xl sm:text-4xl lg:text-5xl'
                          : 'text-4xl sm:text-5xl lg:text-6xl'
                      }`}
                      style={fontHeading}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-xs sm:text-sm uppercase tracking-[0.18em] text-white/85 font-semibold"
                      style={fontBody}
                    >
                      {stat.label}
                    </span>
                    {stat.hint && (
                      <span
                        className="mt-2 text-[11px] sm:text-xs text-white/60 normal-case tracking-normal max-w-[220px] leading-snug hidden sm:block"
                        style={fontBody}
                      >
                        {stat.hint}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </section>

        <SectionRule />

        <section className={`bg-white ${sectionPad}`}>
          <div className={pageContainer}>
            <div className={`text-center ${sectionHeaderMb} max-w-3xl mx-auto`}>
              <SectionEyebrow>RSI Propulsion en bref</SectionEyebrow>
              <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
                {ORGANIZATION.legalName}
              </h2>
              <p className="text-[#6B6B6B] mb-4" style={fontBody}>
                {ORGANIZATION.mission}
              </p>
              <p className="text-[#6B6B6B]" style={fontBody}>
                {ORGANIZATION.description}
              </p>
            </div>
            <OrgFactsGrid className="mt-10 md:mt-12" />
          </div>
        </section>

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className={pageContainer}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${sectionGap} items-start`}>
              <div>
                <SectionEyebrow>Services intégrés</SectionEyebrow>
                <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
                  Plus qu'un logement : un accompagnement complet
                </h2>
                <p className="text-[#6B6B6B] mb-6" style={fontBody}>
                  {ORGANIZATION.clientele} Chez nous, chaque locataire bénéficie d'un plan de services
                  individualisé, élaboré avec un ergothérapeute, et d'une équipe de préposés aux bénéficiaires
                  présente en tout temps.
                </p>
                <ul className="space-y-3">
                  {[
                    'Aide aux activités de la vie quotidienne (AVQ) : hygiène, habillement, transferts',
                    'Aide aux activités de la vie domestique (AVD) : ménage, lessive, repas',
                    'Repas à la salle communautaire avec chef cuisinier',
                    'Services professionnels en partenariat avec le CIUSSS de l\'Est-de-l\'Île-de-Montréal',
                  ].map((line) => (
                    <li key={line} className="flex gap-3 text-[#6B6B6B]" style={fontBody}>
                      <span className="text-[#E8621A] shrink-0 mt-1">•</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center gap-2 mt-8 text-[#E8621A] font-semibold hover:underline" style={fontBody}>
                  Découvrir tous nos services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto lg:min-h-[360px]">
                <img
                  src={siteImages.accompagnement24h}
                  alt="Accompagnement intégré RSI Propulsion"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <SectionRule />

        {/* Mission */}
        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className={pageContainer}>
            <div className="text-center mb-8 md:mb-12 lg:mb-16 max-w-3xl mx-auto">
              <SectionEyebrow>Notre raison d'être</SectionEyebrow>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C]" style={fontHeading}>
                Un milieu de vie qui fait la différence
              </h2>
              <p className="mt-5 text-[#6B6B6B]" style={fontBody}>
                {ORGANIZATION.description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 lg:gap-10 items-stretch">
              {missionCards.map((card, i) => (
                <article
                  key={card.title}
                  className="flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={[siteImages.missionChezSoi, siteImages.missionServices, siteImages.missionVieQuartier][i]}
                    alt={card.title}
                    className="w-full h-36 sm:h-44 object-cover shrink-0"
                  />
                  <div className="flex flex-col flex-1 p-5 sm:p-8 pt-6 sm:pt-7">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-bold uppercase tracking-widest tabular-nums"
                        style={{ color: card.color, fontFamily: 'var(--font-body)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="h-px flex-1 bg-gray-200" aria-hidden />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#2C2C2C]" style={fontHeading}>
                      {card.title}
                    </h3>
                    <p className="text-[#6B6B6B] text-base flex-1" style={fontBody}>
                      {card.body}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-10 sm:mt-16 md:mt-20 lg:mt-24">
            <ColorBand bg="#E8621A" height="min-h-0 py-10 sm:py-12 md:py-14">
              <p
                className="text-white text-center text-lg sm:text-xl md:text-2xl max-w-4xl italic px-4 sm:px-6"
                style={{ ...fontHeading, lineHeight: 1.55 }}
              >
                « Offrir un milieu de vie normalisant à des personnes qui méritent un chez-soi digne, adapté et
                chaleureux. »
              </p>
            </ColorBand>
          </div>
        </section>

        <section className={`bg-white ${sectionPad}`}>
          <div className={pageContainer}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${sectionGap} items-center`}>
              <div>
                <SectionEyebrow>Réseau ÉquiToît</SectionEyebrow>
                <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
                  Une seule demande pour quatre ressources
                </h2>
                <p className="text-[#6B6B6B] mb-6" style={fontBody}>
                  RSI Propulsion fait partie du réseau ÉquiToît. En soumettant votre formulaire d'inscription, votre
                  demande est valide pour l'ensemble des ressources partenaires :
                </p>
                <ul className="space-y-2 mb-8">
                  {ORGANIZATION.equitoitNetwork.map((name) => (
                    <li key={name} className="flex items-center gap-2 text-[#2C2C2C] font-semibold" style={fontBody}>
                      <span className="w-2 h-2 rounded-full bg-[#E8621A]" />
                      {name}
                    </li>
                  ))}
                </ul>
                <Link to="/criteres" className="text-[#E8621A] font-semibold hover:underline" style={fontBody}>
                  Voir les critères complets →
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl h-[220px] sm:h-[280px] md:h-[320px]">
                <img src={siteImages.equitoitReseau} alt="Vie en communauté RSI" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="mt-8 sm:mt-12 md:mt-14 bg-[#F9F8F6] rounded-2xl p-5 sm:p-8 md:p-10 border-l-4 border-[#8AAC2A]">
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
                Journal des locataires
              </h3>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Nos locataires conçoivent et rédigent un petit journal qui partage la vie à RSI Propulsion, activités,
                témoignages et nouvelles du quotidien. C'est une vitrine authentique de notre communauté.
              </p>
            </div>
          </div>
        </section>

        <SectionRule />

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className={pageContainer}>
            <div className={`text-center ${sectionHeaderMb} max-w-2xl mx-auto`}>
              <SectionEyebrow>Admission</SectionEyebrow>
              <h2 className={`${headingSection} mb-3 sm:mb-4`} style={fontHeading}>
                Comment déposer une demande ?
              </h2>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Une démarche simple, en quatre étapes. Votre demande est aussi valide pour les partenaires du réseau
                ÉquiToît.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {admissionSteps.map((item) => (
                <HoverCard key={item.step} className="p-5 sm:p-6 md:p-8 h-full flex flex-col border-t-4 border-[#E8621A]">
                  <span className="text-3xl font-bold text-[#E8621A]/30 mb-3" style={fontHeading}>
                    {item.step}
                  </span>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
                    {item.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm flex-1 mb-4" style={fontBody}>
                    {item.body}
                  </p>
                  <Link to={item.to} className="text-[#E8621A] text-sm font-semibold hover:underline" style={fontBody}>
                    {item.label} →
                  </Link>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>

        <SectionRule color="#D4A017" />

        {/* Services */}
        <section className={`bg-white ${sectionPad}`}>
          <div className={pageContainer}>
            <SectionEyebrow>Ce que nous offrons</SectionEyebrow>
            <h2 className={`text-2xl sm:text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-8 sm:mb-12`} style={fontHeading}>
              Un accompagnement complet, 24h/24
            </h2>
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${sectionGapTight} items-center`}>
              <div className="rounded-2xl overflow-hidden shadow-xl h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px]">
                <img
                  src={siteImages.accompagnement24h}
                  alt="Accompagnement et vie communautaire"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[#6B6B6B] mb-10" style={fontBody}>
                  Chez RSI Propulsion, nos locataires bénéficient d'un soutien adapté à leur réalité. Notre équipe de
                  préposés aux bénéficiaires est présente en tout temps pour assurer leur sécurité, leur confort et leur
                  autonomie.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      color: '#E8621A',
                      title: 'AVQ',
                      desc: "Aide à l'hygiène, à l'habillement et aux transferts",
                    },
                    {
                      color: '#8AAC2A',
                      title: 'AVD',
                      desc: 'Ménage, lessive, vaisselle et préparation des repas',
                    },
                    {
                      color: '#D4A017',
                      title: 'Repas',
                      desc: 'Chef cuisinier et salle communautaire avec service',
                    },
                    {
                      color: '#E8621A',
                      title: 'Sécurité',
                      desc: 'Présence et surveillance 24 heures sur 24, 7 jours sur 7',
                    },
                  ].map((row) => (
                    <div key={row.title} className="flex gap-4 items-start">
                      <div
                        className="w-3 h-3 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: row.color }}
                      />
                      <div>
                        <p className="font-bold text-[#2C2C2C]" style={fontBody}>
                          {row.title}
                        </p>
                        <p className="text-[#6B6B6B]" style={fontBody}>
                          {row.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-10">
                  {['Transport', 'Soins des animaux', 'Organisation de loisirs'].map((chip) => (
                    <span
                      key={chip}
                      className="text-sm text-[#6B6B6B] bg-[#F9F8F6] px-4 py-2 rounded-full border border-gray-200"
                      style={fontBody}
                    >
                      ✗ {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A] hover:text-white rounded-full px-10 py-6"
                  style={fontBody}
                >
                  En savoir plus sur nos services
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className={`relative bg-[#F9F8F6] ${sectionPad}`}>
          <ColorBand bg="#E8621A" height="min-h-0 h-16 sm:h-[100px]" className="mb-0" />
          <div className={`${pageContainer} -mt-8 sm:-mt-[40px] relative z-10`}>
            <HoverCard className="p-6 sm:p-10 md:p-14 border-t-4 border-[#E8621A]">
              <SectionEyebrow>Admission</SectionEyebrow>
              <h2 className={`${headingSection} mb-6 sm:mb-10`} style={fontHeading}>
                Faites votre demande de logement
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-gray-200">
                <StatNumber value="18 à 59" label="ans, tranche d'âge admissible" />
                <StatNumber value="25h" label="max. services planifiables / semaine" />
                <StatNumber value="25%" label="du revenu pour le loyer" />
              </div>
              <p className="text-[#6B6B6B] mb-8 max-w-3xl" style={fontBody}>
                RSI Propulsion accueille des adultes présentant une déficience physique avec ou sans atteinte cognitive
                légère. Consultez nos critères de sélection et complétez le formulaire, une seule demande suffit pour le
                réseau ÉquiToît.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/criteres">
                  <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 py-5" style={fontBody}>
                    Voir les critères
                  </Button>
                </Link>
                <Link to="/admission">
                  <Button
                    variant="outline"
                    className="border-2 border-[#E8621A] text-[#E8621A] rounded-full px-8 py-5"
                    style={fontBody}
                  >
                    Formulaire d'inscription
                  </Button>
                </Link>
              </div>
            </HoverCard>
          </div>
        </section>

        <SectionRule color="#8AAC2A" />

        <section className={`bg-white ${sectionPad}`}>
          <div className={`${pageContainer} mb-10 md:mb-14`}>
            <div className="text-center mb-8 sm:mb-10">
              <SectionEyebrow>Explorer le site</SectionEyebrow>
              <h2 className={headingSection} style={fontHeading}>
                Aller plus loin
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {exploreLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="bg-[#F9F8F6] rounded-2xl p-5 sm:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all border border-gray-100 group"
                >
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-2 group-hover:text-[#E8621A] transition-colors" style={fontHeading}>
                    {link.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B]" style={fontBody}>
                    {link.desc}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#6B6B6B]" style={fontBody}>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E8621A]" />
                {ORGANIZATION.adminHours}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#E8621A]" />
                {ORGANIZATION.address.neighbourhood}
              </span>
              <a
                href={ORGANIZATION.resource211}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#E8621A] font-semibold hover:underline"
              >
                Fiche 211 Grand Montréal
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        <SectionRule />

        {/* FAQ */}
        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className={`text-center ${sectionHeaderMb}`}>
              <SectionEyebrow>Questions fréquentes</SectionEyebrow>
              <h2 className={headingSection} style={fontHeading}>
                Vous avez des questions ?
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-[#E8621A]/20">
                  <AccordionTrigger className="text-left text-[#2C2C2C] font-semibold hover:text-[#E8621A]" style={fontBody}>
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#6B6B6B]" style={fontBody}>
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="text-center mt-8">
              <Link to="/faq" className="text-[#E8621A] font-semibold hover:underline" style={fontBody}>
                Voir toutes les questions →
              </Link>
            </p>
          </div>
        </section>

        <section className={`bg-[#E8621A] ${sectionPad} text-white text-center`}>
          <div className="max-w-[900px] mx-auto px-4 sm:px-6">
            <SectionEyebrow>
              <span className="text-white/90">Soutenez notre mission</span>
            </SectionEyebrow>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={fontHeading}>
              Votre don change des vies
            </h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-10 opacity-95" style={fontBody}>
              Chaque contribution nous aide à maintenir des logements dignes, des services quotidiens et une vie
              communautaire enrichissante pour nos locataires.
            </p>
            <PayPalDonateButton size="lg" />
            <p className="mt-4 text-sm opacity-80" style={fontBody}>
              <Link to="/faire-un-don" className="underline hover:text-white">
                En savoir plus sur les dons
              </Link>
            </p>
            <p className="mt-8 text-sm opacity-95" style={fontBody}>
              <strong>No. de charité : 138775119RR0001</strong>
              <br />
              Reçu fiscal émis pour tout don supérieur à 20 $
            </p>
          </div>
        </section>

        <section className={`bg-white ${sectionPad}`}>
          <div className={pageContainer}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 ${sectionGap} items-center`}>
              <div>
                <SectionEyebrow>Contact</SectionEyebrow>
                <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
                  Prêt à faire le premier pas ?
                </h2>
                <p className="text-[#6B6B6B] mb-4" style={fontBody}>
                  {ORGANIZATION.address.full}, {ORGANIZATION.address.neighbourhood}
                </p>
                <p className="text-[#6B6B6B] mb-6" style={fontBody}>
                  {ORGANIZATION.adminHours}. Notre équipe répond sous 24 à 48 heures ouvrables.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 py-5" style={fontBody}>
                      Page contact
                    </Button>
                  </Link>
                  <Link to="/faq">
                    <Button variant="outline" className="border-2 border-[#E8621A] text-[#E8621A] rounded-full px-8 py-5" style={fontBody}>
                      FAQ complète
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="tel:5142512525"
                  className="bg-white p-5 sm:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-[#E8621A] flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E8621A] flex items-center justify-center">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]" style={fontBody}>
                      Téléphone
                    </p>
                    <p className="font-bold text-[#2C2C2C]" style={fontHeading}>
                      (514) 251-2525
                    </p>
                  </div>
                </a>
                <a
                  href="mailto:info@rsipropulsion.ca"
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-[#D4A017] flex items-center gap-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#D4A017] flex items-center justify-center">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B6B6B]" style={fontBody}>
                      Courriel
                    </p>
                    <p className="font-bold text-[#2C2C2C] text-sm" style={fontHeading}>
                      info@rsipropulsion.ca
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
