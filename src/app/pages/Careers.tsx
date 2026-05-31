import { useState } from 'react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import {
  PageHero,
  SectionEyebrow,
  SectionRule,
  HoverCard,
  ContentImage,
  fontHeading,
  fontBody,
  sectionPad,
} from '../components/layout/PageSections';
import { siteImages, pageHeroImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';

const whyJoin = [
  {
    color: '#E8621A',
    title: 'Travail qui a du sens',
    body: 'Chaque journée contribue au bien-être et à la dignité de nos locataires.',
  },
  {
    color: '#D4A017',
    title: 'Équipe bienveillante',
    body: "Un milieu convivial où l'entraide et le respect guident nos actions.",
  },
  {
    color: '#8AAC2A',
    title: 'Ancrage dans le quartier',
    body: 'RSI Propulsion, c\'est plus de 25 ans à Hochelaga-Maisonneuve.',
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[#6B6B6B]" style={fontBody}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8621A] mt-2.5 shrink-0" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function JobBlock({
  tag,
  accent,
  title,
  schedule,
  description,
  responsibilities,
  qualifications,
  onApply,
}: {
  tag: string;
  accent: string;
  title: string;
  schedule: string;
  description: string;
  responsibilities?: string[];
  qualifications: string[];
  onApply: () => void;
}) {
  return (
    <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="px-6 md:px-8 py-5 border-b border-gray-100 border-l-4" style={{ borderLeftColor: accent }}>
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <span
            className="text-xs font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full"
            style={{ backgroundColor: accent, fontFamily: 'var(--font-body)' }}
          >
            {tag}
          </span>
          <span className="text-sm text-[#6B6B6B]" style={fontBody}>
            {schedule}
          </span>
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[#2C2C2C]" style={fontHeading}>
          {title}
        </h3>
      </div>
      <div className="px-6 md:px-8 py-7 md:py-8 space-y-6">
        <p className="text-[#6B6B6B]" style={fontBody}>
          {description}
        </p>
        {responsibilities && responsibilities.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-[#2C2C2C] mb-3 uppercase tracking-wide" style={fontBody}>
              Responsabilités
            </h4>
            <BulletList items={responsibilities} />
          </div>
        )}
        <div>
          <h4 className="text-sm font-semibold text-[#2C2C2C] mb-3 uppercase tracking-wide" style={fontBody}>
            Qualifications
          </h4>
          <BulletList items={qualifications} />
        </div>
        <Button
          className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 py-5 min-h-[44px]"
          style={fontBody}
          onClick={onApply}
        >
          Postuler pour ce poste
        </Button>
      </div>
    </article>
  );
}

function applyMailto(title: string) {
  const subject = encodeURIComponent(`Candidature, ${title}`);
  window.location.href = `mailto:info@rsipropulsion.ca?subject=${subject}`;
}

export function Careers() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Poste : ${formData.position || 'Non précisé'}\n\n${formData.message}`,
    );
    window.location.href = `mailto:info@rsipropulsion.ca?subject=${encodeURIComponent('Candidature RSI Propulsion')}&body=${body}`;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const jobs = [
    {
      tag: 'Soins',
      accent: '#E8621A',
      title: 'Préposé(e) aux bénéficiaires',
      schedule: 'Jour / Soir / Nuit',
      description:
        "Votre profession de préposé(e) aux bénéficiaires est une vocation ? Vous aimez prendre soin des gens, créer des liens et faire une différence concrète au quotidien ?",
      qualifications: [
        'Loi 90 (un atout)',
        'Dévouement et sens des responsabilités',
        "Capacité d'écoute, de respect et de compassion",
        'Patience, force et résistance (physique et émotionnelle)',
      ],
    },
    {
      tag: 'Cuisine',
      accent: '#D4A017',
      title: 'Cuisinier(ère)',
      schedule: 'Jour semaine / Week-end',
      description:
        "Pour vous, la cuisine, c'est du gâteau ? Venez mettre votre expérience et votre créativité au service de nos locataires.",
      responsibilities: [
        'Assurer la réalisation et la planification des mets et des repas',
        'Faire les achats du département',
        'Entretenir la cuisine',
        "Appliquer les règles d'hygiène et de salubrité alimentaires",
      ],
      qualifications: [
        'DEP en cuisine ou expérience équivalente (1 à 3 ans)',
        'MAPAQ (hygiène et salubrité) un atout',
        'Gestion du stress et service à la clientèle',
      ],
    },
    {
      tag: 'Administration',
      accent: '#8AAC2A',
      title: 'Adjoint(e) administratif(ive)',
      schedule: 'Bureau, horaire de jour',
      description:
        'Vous êtes efficace au travail de bureau et vous souhaitez vous engager dans un organisme à but non lucratif ?',
      responsibilities: [
        'Dépôts, payables et paie',
        "Achats et gestion de l'inventaire",
        'Tenue des registres à jour',
        'Appels, courrier et courriels',
        'Autres tâches connexes',
      ],
      qualifications: [
        'DEC en technique de bureautique ou discipline reliée',
        'Word, Excel (Sage 50 un atout)',
        'Excellente qualité du français parlé et écrit',
        "Excellent sens de l'organisation",
        'Profil relationnel, autonome et force de proposition',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.carriere}
          imageAlt="Carrières chez RSI Propulsion"
          eyebrow="Joignez-vous à nous"
          title="Faites carrière avec nous"
          subtitle="Un milieu de travail agréable, convivial et valorisant au cœur de Hochelaga-Maisonneuve."
        />

        <section className={`bg-white ${sectionPad}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
              <div>
                <SectionEyebrow>Pourquoi RSI Propulsion</SectionEyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-5" style={fontHeading}>
                  Rejoignez une équipe engagée
                </h2>
                <p className="text-[#6B6B6B] mb-8" style={fontBody}>
                  {ORGANIZATION.legalName} offre des postes en soins, en cuisine et en administration. Nous
                  accueillons les candidatures motivées par le service aux personnes en situation de handicap.
                </p>
                <Button
                  className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 py-5 min-h-[44px]"
                  style={fontBody}
                  onClick={() => (window.location.href = 'mailto:info@rsipropulsion.ca')}
                >
                  Envoyer ma candidature
                </Button>
              </div>
              <ContentImage src={siteImages.carriereMilieu} alt="Milieu de travail RSI Propulsion" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {whyJoin.map((item, i) => (
                <HoverCard
                  key={item.title}
                  className="p-7 md:p-8 h-full flex flex-col border-t-4 bg-[#F9F8F6]"
                  style={{ borderTopColor: item.color }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: item.color, fontFamily: 'var(--font-body)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
                    {item.title}
                  </h3>
                  <p className="text-[#6B6B6B] text-sm flex-1" style={fontBody}>
                    {item.body}
                  </p>
                </HoverCard>
              ))}
            </div>
          </div>
        </section>

        <SectionRule color="#8AAC2A" />

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className="max-w-[900px] mx-auto px-6 space-y-10 md:space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <SectionEyebrow>Offres d'emploi</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
                Postes disponibles
              </h2>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Consultez les descriptions ci-dessous et postulez par courriel ou via le formulaire en bas de page.
              </p>
            </div>

            {jobs.map((job) => (
              <JobBlock
                key={job.title}
                tag={job.tag}
                accent={job.accent}
                title={job.title}
                schedule={job.schedule}
                description={job.description}
                responsibilities={job.responsibilities}
                qualifications={job.qualifications}
                onApply={() => applyMailto(job.title)}
              />
            ))}
          </div>
        </section>

        <section className={`bg-white ${sectionPad}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <SectionEyebrow>Nous joindre</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
                Venez nous rencontrer
              </h2>
              <p className="text-[#6B6B6B]" style={fontBody}>
                {ORGANIZATION.adminHours}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-[#F9F8F6] rounded-xl p-6 border-l-4 border-[#E8621A]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#E8621A] mb-2" style={fontBody}>
                  Adresse
                </p>
                <p className="text-[#2C2C2C] font-semibold" style={fontBody}>
                  {ORGANIZATION.address.full}
                </p>
              </div>
              <div className="bg-[#F9F8F6] rounded-xl p-6 border-l-4 border-[#D4A017]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#D4A017] mb-2" style={fontBody}>
                  Téléphone
                </p>
                <a
                  href={ORGANIZATION.phoneTel}
                  className="text-[#2C2C2C] font-semibold hover:text-[#E8621A] transition-colors"
                  style={fontBody}
                >
                  {ORGANIZATION.phone}
                </a>
              </div>
              <div className="bg-[#F9F8F6] rounded-xl p-6 border-l-4 border-[#8AAC2A]">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#8AAC2A] mb-2" style={fontBody}>
                  Courriel
                </p>
                <a
                  href={`mailto:${ORGANIZATION.email}`}
                  className="text-[#2C2C2C] font-semibold hover:text-[#E8621A] transition-colors break-all"
                  style={fontBody}
                >
                  {ORGANIZATION.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className="max-w-[720px] mx-auto px-6">
            <div className="text-center mb-10">
              <SectionEyebrow>Candidature</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
                Formulaire de candidature
              </h2>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Aucun poste ne vous convient ? Envoyez une candidature spontanée. Le formulaire ouvre votre courriel
                avec le message prérempli.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                      Prénom <span className="text-[#E8621A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                      style={fontBody}
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                      Nom <span className="text-[#E8621A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                      style={fontBody}
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                      Courriel <span className="text-[#E8621A]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                      style={fontBody}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                      style={fontBody}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                    Poste souhaité
                  </label>
                  <select
                    id="position"
                    className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                    style={fontBody}
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  >
                    <option value="">Sélectionnez un poste</option>
                    <option value="Préposé(e) aux bénéficiaires">Préposé(e) aux bénéficiaires</option>
                    <option value="Cuisinier(ère)">Cuisinier(ère)</option>
                    <option value="Adjoint(e) administratif(ive)">Adjoint(e) administratif(ive)</option>
                    <option value="Candidature spontanée">Candidature spontanée</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="cv" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                    Joindre un CV (optionnel ici)
                  </label>
                  <input
                    type="file"
                    id="cv"
                    accept=".pdf,.doc,.docx"
                    className="w-full text-sm text-[#6B6B6B] file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#E8621A] file:text-white file:font-semibold"
                    onChange={handleFileChange}
                  />
                  {fileName && (
                    <p className="text-sm text-[#6B6B6B] mt-2" style={fontBody}>
                      Fichier sélectionné : {fileName}. Joignez-le aussi à votre courriel si le formulaire ne l'envoie pas
                      automatiquement.
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                    Message <span className="text-[#E8621A]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] resize-none"
                    style={fontBody}
                    placeholder="Parlez-nous de vous et de vos motivations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full py-6 min-h-[44px] text-base font-semibold"
                  style={fontBody}
                >
                  Envoyer ma candidature
                </Button>
                <p className="text-sm text-center text-[#6B6B6B]" style={fontBody}>
                  <span className="text-[#E8621A]">*</span> Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
