import { Link } from 'react-router';
import { Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import {
  PageHero,
  SectionEyebrow,
  SectionRule,
  ContentImage,
  DocumentDownloadsRow,
  fontHeading,
  fontBody,
  sectionPad,
} from '../components/layout/PageSections';
import { DOCUMENTS } from '../config/documents';
import { siteImages, pageHeroImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';

function CriteriaList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      {title ? (
        <h3 className="text-lg font-semibold mb-4 text-[#2C2C2C]" style={fontHeading}>
          {title}
        </h3>
      ) : null}
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-[#6B6B6B]"
            style={{ ...fontBody, lineHeight: 1.75 }}
          >
            <span className="text-[#E8621A] mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[#E8621A]" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CriteriaBlock({
  title,
  color,
  children,
  className = '',
}: {
  title: string;
  color: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden ${className}`}
    >
      <div
        className="px-6 md:px-8 py-5 border-b border-gray-100 border-l-4"
        style={{ borderLeftColor: color }}
      >
        <h3 className="text-xl font-bold text-[#2C2C2C]" style={fontHeading}>
          {title}
        </h3>
      </div>
      <div className="px-6 md:px-8 py-7 md:py-8">{children}</div>
    </section>
  );
}

const admissionHighlights = [
  { label: '18 à 59 ans', detail: "Tranche d'âge admissible", accent: '#E8621A' },
  { label: '15 logements 3½', detail: 'Unités adaptées', accent: '#D4A017' },
  { label: 'Loyer à 25 %', detail: 'Du revenu du locataire', accent: '#8AAC2A' },
];

export function Criteria() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.criteres}
          imageAlt="Informations et critères de sélection"
          title="Informations et critères de sélection"
          subtitle="15 logements adaptés pour adultes de 18 à 59 ans, Hochelaga-Maisonneuve, Montréal."
        />

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-10 md:mb-12 max-w-3xl mx-auto">
              <SectionEyebrow>Documents officiels</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
                Télécharger les PDF
              </h2>
              <p className="text-[#6B6B6B] mb-8" style={fontBody}>
                Consultez ou imprimez les documents. L'inscription en ligne se fait sur la page{' '}
                <Link to="/admission" className="text-[#E8621A] font-semibold hover:underline">
                  Inscription
                </Link>
                .
              </p>
              <DocumentDownloadsRow
                documents={[
                  {
                    title: DOCUMENTS.criteres.title,
                    description: DOCUMENTS.criteres.description,
                    href: DOCUMENTS.criteres.file,
                    accent: '#E8621A',
                  },
                  {
                    title: DOCUMENTS.inscription.title,
                    description: DOCUMENTS.inscription.description,
                    href: DOCUMENTS.inscription.file,
                    accent: '#D4A017',
                  },
                ]}
              />
            </div>
          </div>
        </section>

        <section className={`bg-white ${sectionPad}`}>
          <div className="max-w-[1200px] mx-auto px-6 space-y-14 md:space-y-16">
            {/* Introduction admission */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div className="space-y-8">
                <div>
                  <SectionEyebrow>Admission</SectionEyebrow>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-5" style={fontHeading}>
                    Critères d'admission
                  </h2>
                  <p className="text-[#6B6B6B]" style={fontBody}>
                    {ORGANIZATION.clientele} {ORGANIZATION.territory}
                  </p>
                </div>

                <div className="bg-[#F9F8F6] rounded-xl p-6 md:p-7 border border-gray-100">
                  <h3 className="font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
                    Réseau ÉquiToît : une demande, quatre ressources
                  </h3>
                  <ul className="space-y-2">
                    {ORGANIZATION.equitoitNetwork.map((name) => (
                      <li key={name} className="text-[#6B6B6B] pl-4 border-l-2 border-[#E8621A]/40" style={fontBody}>
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {admissionHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="bg-white rounded-xl p-5 border border-gray-100 border-t-4"
                      style={{ borderTopColor: item.accent }}
                    >
                      <p className="text-lg font-bold text-[#2C2C2C] mb-1" style={fontHeading}>
                        {item.label}
                      </p>
                      <p className="text-sm text-[#6B6B6B]" style={fontBody}>
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <ContentImage
                src={siteImages.criteresAdmission}
                alt="Documents et critères d'admission"
                aspect="portrait"
              />
            </div>

            {/* Blocs thématiques */}
            <div className="space-y-8 md:space-y-10">
              <CriteriaBlock title="Critères d'admission" color="#E8621A">
                <CriteriaList
                  title=""
                  items={[
                    'Âge : 18 à 59 ans',
                    'Déficience physique avec ou sans atteinte cognitive légère',
                    "Capacité d'habiter seul en appartement",
                    'Engagement social, activités communautaires ou études',
                    "Besoin d'aide AVQ et AVD",
                    "Revenu conforme aux critères de la SHQ",
                    'Maximum 25 h de services planifiables/semaine + 20 à 30 % non planifiables',
                    'Demandes acceptées de partout au Québec',
                  ]}
                />
              </CriteriaBlock>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                <CriteriaBlock title="Le logement" color="#D4A017">
                  <CriteriaList
                    title=""
                    items={[
                      '15 unités de 3½ : salon et cuisinette (micro-ondes et mini-frigo), chambre fermée et salle de bain adaptée',
                      'Bâtiment entièrement adapté et accessible',
                      'Équipements fournis par le CLSC selon les besoins du locataire',
                    ]}
                  />
                </CriteriaBlock>

                <CriteriaBlock title="Coûts mensuels" color="#8AAC2A">
                  <CriteriaList
                    title=""
                    items={[
                      'Loyer : 25 % du revenu',
                      'Nourriture : 275 $/mois',
                      'Entretien : 45 $/mois',
                      'Frais communs : 20 $/mois',
                      'Électricité : fixée annuellement par la SHQ',
                      'Admissible au Programme de Supplément au Loyer (PSL)',
                    ]}
                  />
                </CriteriaBlock>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                <CriteriaBlock title="Services inclus" color="#8AAC2A">
                  <div className="space-y-4 text-[#6B6B6B]" style={fontBody}>
                    <p>
                      <strong className="text-[#2C2C2C]">AVQ :</strong> Oui (hygiène, habillement, transferts)
                    </p>
                    <p>
                      <strong className="text-[#2C2C2C]">AVD :</strong> Vaisselle, ménage, lessive, poubelles, literie,
                      préparation des repas
                    </p>
                    <p>
                      <strong className="text-[#2C2C2C]">Vie en résidence :</strong> Repas en salle communautaire,
                      activités sociales
                    </p>
                  </div>
                </CriteriaBlock>

                <CriteriaBlock title="Services non offerts" color="#6B6B6B">
                  <p className="text-[#6B6B6B] mb-0" style={fontBody}>
                    Soins des animaux domestiques, organisation de loisirs, transport, accompagnement à l'extérieur du
                    bâtiment.
                  </p>
                </CriteriaBlock>
              </div>

              <CriteriaBlock title="Critères d'exclusion" color="#6B6B6B">
                <CriteriaList
                  title=""
                  items={[
                    'Besoins dépassant 25 h de services planifiables/semaine',
                    "Nécessite l'aide de 2 préposés pour les AVQ",
                    'Professionnels de santé en continu sur place requis',
                    'Inaptitude à prendre soin de soi et à gérer ses biens',
                    "Troubles du comportement interférant avec la ressource",
                  ]}
                />
              </CriteriaBlock>

              <CriteriaBlock title="Documents requis" color="#E8621A">
                <CriteriaList
                  title=""
                  items={[
                    "Formulaire d'inscription (en ligne ou PDF)",
                    'OCCI (Outil de Cheminement Clinique Informatisé)',
                  ]}
                />
              </CriteriaBlock>
            </div>
          </div>
        </section>

        <SectionRule color="#E8621A" />

        <section className="bg-[#E8621A] py-16 md:py-20 text-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={fontHeading}>
              Prêt à soumettre votre demande ?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-95" style={fontBody}>
              Complétez le formulaire en ligne. Une seule demande suffit pour le réseau ÉquiToît.
            </p>
            <Link to="/admission">
              <Button
                className="bg-white hover:bg-gray-100 text-[#E8621A] rounded-full px-10 py-6 text-lg font-semibold shadow-xl inline-flex items-center gap-3"
                style={fontBody}
              >
                <Send className="w-5 h-5" />
                Formulaire d'inscription en ligne
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
