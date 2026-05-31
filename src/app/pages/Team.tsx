import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Quote, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import {
  PageHero,
  SectionEyebrow,
  SectionRule,
  fontHeading,
  fontBody,
  sectionPad,
} from '../components/layout/PageSections';
import { pageHeroImages } from '../config/images';

import kyrvensSimon from '../../imports/team/kyrvens-simon.png';
import ghyslainParent from '../../imports/team/ghyslain-parent.png';
import robinLaroche from '../../imports/team/robin-laroche.png';
import manonGregoire from '../../imports/team/manon-gregoire.png';
import rogerLaplante from '../../imports/team/roger-laplante.png';
import deniseLariviere from '../../imports/team/denise-lariviere.png';
import mathieuStMartin from '../../imports/team/mathieu-st-martin.png';
import zacharyMonette from '../../imports/team/zachary-monette.png';

const introText =
  "Regroupement de services intégrés Propulsion a une équipe de cœur administrant au mieux les ressources mises à sa disposition pour le bien-être de tous ses locataires.";

const dgQuote = 'Chez RSI Propulsion, on trouve un « Chez-moi » !';

const dgParagraphs = [
  "RSI Propulsion, c'est 15 appartements adaptés accueillant des personnes en situation de déficience motrice et/ou de déficience cognitive légère. C'est un « Chez-moi » bien à eux, à tarif des plus abordables.",
  "RSI Propulsion c'est aussi une gamme de services aux activités de la vie quotidienne et domestique. Grâce à son équipe de préposés aux bénéficiaires expérimentés et dévoués, RSI Propulsion est en mesure d'offrir des services de qualité à tous ses locataires et ce, 24 heures par jour et 7 jours par semaine.",
  "Chaque locataire bénéficie d'un plan de services individualisé réalisé par un ergothérapeute. Les services professionnels à domicile sont assurés par le CIUSSS de l'Est de Montréal, avec qui RSI Propulsion a tissé une belle complicité.",
  "C'est dans un milieu sécuritaire laissant place à l'individualité de chacun que, depuis plus de 25 ans, RSI Propulsion accueille ses locataires. Vivre chez RSI Propulsion, c'est vivre son quotidien dans un environnement des plus normalisant.",
];

type BoardMember = {
  name: string;
  suffix?: string;
  role: string;
  image: string;
  accent: string;
  credentials: string[];
  tenantRep?: boolean;
};

const executiveCommittee: BoardMember[] = [
  {
    name: 'Ghyslain Parent',
    suffix: 'Ph.D',
    role: 'Président, Comité exécutif',
    image: ghyslainParent,
    accent: '#E8621A',
    credentials: [
      "Siège au conseil d'administration depuis 2004",
      "Doctorat en administration scolaire (UDM), maîtrise en éducation (UQAR), baccalauréat en adaptation scolaire (UQAT)",
      "Certification en gestion et administration (UQAT)",
      "Professeur-chercheur associé en sciences de l'éducation (UQTR)",
    ],
  },
  {
    name: 'Robin Laroche',
    role: 'Vice-Président, Comité exécutif',
    image: robinLaroche,
    accent: '#D4A017',
    credentials: [
      "Siège au conseil d'administration depuis 2001",
      "Baccalauréat spécialisé en éducation (UQAM), DES en gestion (HEC)",
      'Certification Lean Management Six Sigma',
      'Plus de 25 ans en gestion dans le réseau de la santé et des services sociaux',
    ],
  },
  {
    name: 'Manon Grégoire',
    role: 'Secrétaire, Comité exécutif',
    image: manonGregoire,
    accent: '#8AAC2A',
    credentials: [
      "Siège au conseil d'administration depuis 2021",
      'Directrice Talents et cultures chez CCL Labels depuis 2011',
      'Vice-présidente du C.A. de GrafiCompétences depuis 2015',
    ],
  },
];

const administrators: BoardMember[] = [
  {
    name: 'Roger Laplante',
    role: 'Administrateur',
    image: rogerLaplante,
    accent: '#E8621A',
    credentials: [
      'Membre fondateur de RSI Propulsion',
      "Président du C.A. de La Maison des Étapes (Forward House) depuis 1978",
      "Membre du C.A. du Centre de Crise Tracom depuis 1980",
    ],
  },
  {
    name: 'Denise Larivière',
    role: 'Administratrice, Représentante des locataires',
    image: deniseLariviere,
    accent: '#D4A017',
    tenantRep: true,
    credentials: [
      'Locataire chez RSI Propulsion depuis 2007',
      "Secrétaire du C.A. de l'organisme PIMO depuis 2013",
    ],
  },
  {
    name: 'Mathieu St-Martin',
    role: 'Administrateur, Représentant des locataires',
    image: mathieuStMartin,
    accent: '#8AAC2A',
    tenantRep: true,
    credentials: [
      'Locataire chez RSI Propulsion depuis 2017',
      'Artiste autodidacte, pastel et aquarelle',
    ],
  },
  {
    name: 'Zachary Monette',
    role: 'Administrateur, Représentant des locataires',
    image: zacharyMonette,
    accent: '#E8621A',
    tenantRep: true,
    credentials: [
      'Locataire chez RSI Propulsion depuis 2019',
      "Passionné par l'entrepreneuriat",
    ],
  },
];

export function Team() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F9F8F6]">
        <PageHero
          image={pageHeroImages.equipe}
          imageAlt="Équipe RSI Propulsion"
          align="center"
          eyebrow="Les gens derrière RSI"
          title="Notre équipe"
          subtitle={introText}
        />

        {/* Directeur général, bandeau éditorial */}
        <section className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <motion.div
                className="lg:col-span-5 flex justify-center"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full scale-110 opacity-20 blur-2xl"
                    style={{ backgroundColor: '#E8621A' }}
                    aria-hidden
                  />
                  <div
                    className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden ring-[6px] ring-[#F9F8F6] shadow-2xl"
                    style={{ boxShadow: '0 0 0 4px #E8621A' }}
                  >
                    <img
                      src={kyrvensSimon}
                      alt="Kyrvens Simon"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="lg:col-span-7">
                <SectionEyebrow>Mot du directeur général</SectionEyebrow>
                <h2 className="text-2xl font-bold text-[#2C2C2C] mb-1" style={fontHeading}>
                  Kyrvens Simon
                </h2>
                <p className="text-[#E8621A] font-semibold text-sm uppercase tracking-wider mb-6" style={fontBody}>
                  Directeur général
                </p>
                <div className="flex gap-3 items-start mb-8">
                  <Quote className="w-8 h-8 text-[#E8621A] shrink-0 mt-1" aria-hidden />
                  <p className="text-2xl md:text-3xl font-bold text-[#E8621A] leading-snug" style={fontHeading}>
                    {dgQuote}
                  </p>
                </div>
                <div className="space-y-4 text-[#6B6B6B]" style={fontBody}>
                  {dgParagraphs.map((p) => (
                    <p key={p.slice(0, 32)}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionRule color="#8AAC2A" />

        {/* Conseil d'administration */}
        <section className={`${sectionPad}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-14">
              <SectionEyebrow>Gouvernance</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C]" style={fontHeading}>
                Les membres du C.A.
              </h2>
            </div>

            <p
              className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B] mb-8"
              style={fontBody}
            >
              Comité exécutif
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-start">
              {executiveCommittee.map((member, i) => (
                <MemberCard key={member.name} member={member} delay={i * 0.06} />
              ))}
            </div>

            <p
              className="text-center text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6B6B] mb-8"
              style={fontBody}
            >
              Administrateurs
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
              {administrators.map((member, i) => (
                <MemberCard key={member.name} member={member} delay={i * 0.06} horizontal />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-center border-t border-gray-100">
          <div className="max-w-[600px] mx-auto px-6">
            <SectionEyebrow>Rejoignez-nous</SectionEyebrow>
            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
              Travailler chez RSI Propulsion
            </h2>
            <p className="text-[#6B6B6B] mb-8" style={fontBody}>
              Milieu convivial et valorisant, découvrez nos postes ouverts.
            </p>
            <Link to="/carriere">
              <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-10 py-6" style={fontBody}>
                Voir les carrières
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

function MemberCard({
  member,
  delay,
  horizontal,
}: {
  member: BoardMember;
  delay: number;
  horizontal?: boolean;
}) {
  if (horizontal) {
    return (
      <motion.article
        className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay }}
      >
        <Portrait src={member.image} alt={member.name} accent={member.accent} size="sm" />
        <MemberBody member={member} />
      </motion.article>
    );
  }

  return (
    <motion.article
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-fit"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <div className="pt-8 pb-4 flex justify-center bg-gradient-to-b from-[#F9F8F6] to-white">
        <Portrait src={member.image} alt={member.name} accent={member.accent} size="md" />
      </div>
      <div className="px-6 pb-6">
        <MemberBody member={member} centered />
      </div>
    </motion.article>
  );
}

function Portrait({
  src,
  alt,
  accent,
  size,
}: {
  src: string;
  alt: string;
  accent: string;
  size: 'sm' | 'md';
}) {
  const dim = size === 'sm' ? 'w-24 h-24' : 'w-32 h-32';
  return (
    <div
      className={`${dim} rounded-full overflow-hidden shrink-0`}
      style={{ boxShadow: `0 0 0 3px ${accent}` }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover object-top" />
    </div>
  );
}

function MemberBody({ member, centered }: { member: BoardMember; centered?: boolean }) {
  const [parcoursOpen, setParcoursOpen] = useState(false);

  return (
    <div className={centered ? 'text-center w-full' : 'flex-1 min-w-0'}>
      <span
        className={`inline-block text-[11px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full text-white mb-3 ${
          centered ? 'mx-auto' : ''
        }`}
        style={{ backgroundColor: member.accent }}
      >
        {member.role}
      </span>
      {member.tenantRep && (
        <span className="block text-[10px] font-semibold uppercase text-[#8AAC2A] mb-2" style={fontBody}>
          Voix des locataires
        </span>
      )}
      <h3 className="text-lg font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
        {member.name}
        {member.suffix && (
          <span className="text-[#6B6B6B] font-normal text-base ml-1">({member.suffix})</span>
        )}
      </h3>
      <button
        type="button"
        onClick={() => setParcoursOpen((open) => !open)}
        aria-expanded={parcoursOpen}
        className={`inline-flex items-center gap-1 text-sm font-semibold text-[#E8621A] hover:text-[#D45515] transition-colors ${
          centered ? 'mx-auto' : ''
        }`}
        style={fontBody}
      >
        Parcours
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${parcoursOpen ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {parcoursOpen && (
        <ul
          className={`mt-3 space-y-2 rounded-xl bg-[#F9F8F6] border border-gray-100 p-4 text-left ${
            centered ? 'w-full' : ''
          }`}
        >
          {member.credentials.map((item) => (
            <li key={item} className="text-sm text-[#6B6B6B] flex gap-2 leading-snug" style={fontBody}>
              <span className="text-[#E8621A] mt-1.5 shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
