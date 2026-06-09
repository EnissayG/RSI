import { Link } from 'react-router';
import { Mail, FileDown, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import {
  PageHero,
  fontBody,
  DocumentDownloadsRow,
  SectionEyebrow,
  sectionPad,
  pageContainer,
  sectionHeaderMb,
  headingSection,
  fontHeading,
} from '../components/layout/PageSections';
import { DOCUMENTS } from '../config/documents';
import { ORGANIZATION } from '../config/organization';
import { pageHeroImages } from '../config/images';

export function Admission() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-[#F9F8F6]">
        <PageHero
          image={pageHeroImages.admission}
          imageAlt="Demande d'inscription RSI Propulsion"
          title="Demande d'inscription"
          subtitle="Téléchargez le formulaire papier, remplissez-le et retournez-le par courriel. Notre équipe assure le suivi de chaque dossier."
        />

        <section className={`bg-white ${sectionPad}`}>
          <div className={pageContainer}>
            <div className={`text-center ${sectionHeaderMb} max-w-3xl mx-auto`}>
              <SectionEyebrow>Comment s'inscrire</SectionEyebrow>
              <h2 className={`${headingSection} mb-4`} style={fontHeading}>
                Formulaire papier et courriel
              </h2>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Le directeur général préfère assurer le suivi des demandes avec le formulaire papier et les
                courriels. Téléchargez le PDF, complétez-le et envoyez-le à notre équipe avec les documents requis.
              </p>
            </div>

            <DocumentDownloadsRow
              documents={[
                {
                  title: DOCUMENTS.inscription.title,
                  description: DOCUMENTS.inscription.description,
                  href: DOCUMENTS.inscription.file,
                  accent: '#E8621A',
                },
                {
                  title: DOCUMENTS.criteres.title,
                  description: DOCUMENTS.criteres.description,
                  href: DOCUMENTS.criteres.file,
                  accent: '#D4A017',
                },
              ]}
            />
          </div>
        </section>

        <section className={`${sectionPad}`}>
          <div className={`${pageContainer} max-w-3xl`}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border border-gray-100 shadow-sm">
              <SectionEyebrow>Étapes</SectionEyebrow>
              <h2 className={`${headingSection} mb-6`} style={fontHeading}>
                Déposer votre demande
              </h2>
              <ol className="space-y-5 mb-8">
                {[
                  'Consultez les critères d\'admission et vérifiez votre admissibilité.',
                  'Téléchargez et imprimez le formulaire d\'inscription (PDF).',
                  'Rassemblez votre OCCI et les documents requis.',
                  `Retournez le formulaire complété par courriel à ${ORGANIZATION.email}.`,
                ].map((step, i) => (
                  <li key={step} className="flex gap-4 text-[#6B6B6B]" style={fontBody}>
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E8621A]/10 text-[#E8621A] font-bold text-sm flex items-center justify-center"
                      aria-hidden
                    >
                      {i + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="space-y-4 border-t border-gray-100 pt-8">
                <h3 className="text-lg font-bold text-[#2C2C2C]" style={fontHeading}>
                  Documents requis
                </h3>
                <ul className="space-y-2">
                  {ORGANIZATION.documentsAdmission.map((doc) => (
                    <li key={doc} className="flex gap-2 text-[#6B6B6B]" style={fontBody}>
                      <span className="text-[#E8621A] shrink-0">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 sm:p-8 rounded-xl border-2 border-[#E8621A] bg-[#FFF8F3]">
              <p className="text-base text-[#2C2C2C] mb-6" style={{ ...fontBody, lineHeight: 1.75 }}>
                Ce formulaire est un outil de pré-sélection. L'évaluation complète de votre dossier exigera l'étude de
                l'OCCI, votre Plan de services, et une entrevue de sélection.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a href={`mailto:${ORGANIZATION.email}`}>
                  <Button
                    className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 py-5 w-full sm:w-auto"
                    style={fontBody}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    {ORGANIZATION.email}
                  </Button>
                </a>
                <a href={ORGANIZATION.phoneTel}>
                  <Button
                    variant="outline"
                    className="border-2 border-[#E8621A] text-[#E8621A] rounded-full px-8 py-5 w-full sm:w-auto"
                    style={fontBody}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {ORGANIZATION.phone}
                  </Button>
                </a>
                <a href={DOCUMENTS.inscription.file} download>
                  <Button
                    variant="outline"
                    className="border-2 border-gray-300 text-[#2C2C2C] rounded-full px-8 py-5 w-full sm:w-auto"
                    style={fontBody}
                  >
                    <FileDown className="w-5 h-5 mr-2" />
                    Télécharger le PDF
                  </Button>
                </a>
              </div>
            </div>

            <p className="text-center mt-8 text-[#6B6B6B]" style={fontBody}>
              Des questions avant de vous inscrire ?{' '}
              <Link to="/criteres" className="text-[#E8621A] font-semibold hover:underline">
                Consultez les critères
              </Link>{' '}
              ou{' '}
              <Link to="/contact" className="text-[#E8621A] font-semibold hover:underline">
                contactez-nous
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
