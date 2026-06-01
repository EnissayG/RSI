import { Link } from 'react-router';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import {
  PageHero,
  SectionEyebrow,
  SectionRule,
  ColorBand,
  HoverCard,
  ContentImage,
  fontHeading,
  fontBody,
  sectionPad,
  pageContainer,
  sectionGapTight,
  sectionHeaderMb,
  headingSection,
} from '../components/layout/PageSections';
import { siteImages, pageHeroImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-[#8AAC2A] flex-shrink-0 mt-0.5" />
          <span className="text-[#6B6B6B]" style={fontBody}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function TwoColumnSection({
  eyebrow,
  title,
  body,
  items,
  image,
  imageAlt,
  imageLeft,
  bg,
}: {
  eyebrow: string;
  title: string;
  body: string;
  items: string[];
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  bg: string;
}) {
  const textCol = (
    <div>
      <SectionEyebrow>{eyebrow}</SectionEyebrow>
      <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
        {title}
      </h2>
      <p className="text-[#6B6B6B]" style={fontBody}>
        {body}
      </p>
      <ServiceList items={items} />
    </div>
  );
  const imgCol = (
    <div className="rounded-2xl overflow-hidden shadow-xl h-[240px] sm:h-[300px] md:h-[380px]">
      <img src={image} alt={imageAlt} className="w-full h-full object-cover" />
    </div>
  );

  return (
    <section className={`${sectionPad} ${bg}`}>
      <div className={`${pageContainer} grid grid-cols-1 lg:grid-cols-2 ${sectionGapTight} items-center`}>
        {imageLeft ? (
          <>
            {imgCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imgCol}
          </>
        )}
      </div>
    </section>
  );
}

export function Services() {
  const notOffered = [
    'Soins des animaux domestiques',
    'Organisation de loisirs',
    'Transport',
    "Accompagnement à l'extérieur",
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.services}
          imageAlt="Services RSI Propulsion"
          eyebrow="Nos services"
          title="Un soutien adapté à chaque locataire"
          subtitle={ORGANIZATION.description}
        />

        <TwoColumnSection
          bg="bg-white"
          imageLeft={false}
          eyebrow="Activités de la vie quotidienne"
          title="Prendre soin de vous au quotidien"
          body="Nos préposés aux bénéficiaires accompagnent chaque locataire dans les gestes essentiels du quotidien : l'hygiène personnelle, l'habillement, les transferts et les déplacements à l'intérieur du bâtiment. Chaque intervention est planifiée selon vos besoins et votre horaire."
          items={[
            "Aide à l'hygiène personnelle",
            "Aide à l'habillement",
            'Aide aux transferts et déplacements',
            'Surveillance et présence rassurante',
          ]}
          image={siteImages.soinsQuotidien}
          imageAlt="Accompagnement quotidien"
        />

        <SectionRule color="#D4A017" />

        <TwoColumnSection
          bg="bg-[#F9F8F6]"
          imageLeft
          eyebrow="Activités de la vie domestique"
          title="Un chez-soi propre et bien tenu"
          body="Maintenir un logement propre et organisé contribue directement à la qualité de vie et à la santé. Notre équipe prend en charge les tâches domestiques pour que vous puissiez vous concentrer sur ce qui vous tient à cœur."
          items={[
            'Ménage et entretien du logement',
            'Lessive et changement de literie',
            'Vaisselle',
            'Vidange des poubelles',
            'Préparation des repas',
          ]}
          image={siteImages.vieDomestique}
          imageAlt="Logement propre et adapté"
        />

        <section className={`bg-white ${sectionPad}`}>
          <div className={pageContainer}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${sectionHeaderMb}`}>
              <div>
                <SectionEyebrow>Vie communautaire</SectionEyebrow>
                <h2 className={`${headingSection} mb-4 sm:mb-6 max-w-2xl`} style={fontHeading}>
                  La salle communautaire, cœur de la résidence
                </h2>
                <p className="text-[#6B6B6B] max-w-3xl" style={fontBody}>
                  RSI Propulsion dispose d'une salle communautaire animée par notre chef cuisinier. Les repas y sont
                  servis avec service aux tables, créant un moment de partage quotidien apprécié par nos locataires.
                </p>
              </div>
              <ContentImage src={siteImages.repasCommunautaire} alt="Repas en salle communautaire" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              <HoverCard className="p-6 sm:p-8 md:p-10 border-l-4 border-[#E8621A]">
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
                  Chef cuisinier
                </h3>
                <p className="text-[#6B6B6B]" style={fontBody}>
                  Repas préparés et servis avec service dans la salle communautaire
                </p>
              </HoverCard>
              <HoverCard className="p-6 sm:p-8 md:p-10 border-l-4 border-[#8AAC2A]">
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
                  Salle communautaire
                </h3>
                <p className="text-[#6B6B6B]" style={fontBody}>
                  Espace disponible pour les activités et la vie sociale
                </p>
              </HoverCard>
            </div>
          </div>
        </section>

        <ColorBand bg="#E8621A" height="min-h-0 py-12 sm:py-16">
          <div className="text-center text-white px-2">
            <p className="text-5xl sm:text-6xl md:text-8xl font-bold mb-3 sm:mb-4" style={fontHeading}>
              24/7
            </p>
            <p className="text-lg md:text-xl max-w-xl mx-auto opacity-95" style={fontBody}>
              Notre équipe est présente 24 heures sur 24, 7 jours sur 7 pour assurer votre sécurité et votre bien-être.
            </p>
          </div>
        </ColorBand>

        <section className={`bg-white ${sectionPad}`}>
          <div className={`${pageContainer} grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
            <div>
              <SectionEyebrow>Partenariats</SectionEyebrow>
              <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
                Intégration communautaire et soins
              </h2>
              <p className="text-[#6B6B6B] mb-4" style={fontBody}>
                RSI Propulsion favorise l'intégration sociale et le maintien de l'autonomie. Chaque locataire bénéficie
                d'un plan de services individualisé élaboré avec un ergothérapeute selon ses besoins.
              </p>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Les services professionnels à domicile (ergothérapeute, travailleur social, infirmière, etc.) sont assurés
                en collaboration avec le CIUSSS de l'Est-de-l'Île-de-Montréal. Équipements adaptés fournis par le CLSC
                selon les besoins.
              </p>
            </div>
            <ContentImage src={siteImages.servicesIntegres} alt="Services intégrés" />
          </div>
        </section>

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className={`${pageContainer} text-center`}>
            <SectionEyebrow>À noter</SectionEyebrow>
            <h2 className={`${headingSection} mb-3 sm:mb-4`} style={fontHeading}>
              Ce qui n'est pas inclus
            </h2>
            <p className="text-[#6B6B6B] mb-8 max-w-2xl mx-auto" style={fontBody}>
              Par souci de transparence, voici les services qui ne font pas partie de notre offre.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {notOffered.map((chip) => (
                <span
                  key={chip}
                  className="text-sm text-[#6B6B6B] bg-white px-5 py-2 rounded-full border border-gray-200"
                  style={fontBody}
                >
                  ✗ {chip}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-white ${sectionPad} text-center`}>
          <div className="max-w-[700px] mx-auto px-4 sm:px-6">
            <h2 className={`${headingSection} mb-6 sm:mb-8`} style={fontHeading}>
              Vous souhaitez en savoir plus sur nos services ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto" style={fontBody}>
                  Contactez-nous
                </Button>
              </Link>
              <Link to="/criteres">
                <Button
                  variant="outline"
                  className="border-2 border-[#E8621A] text-[#E8621A] rounded-full px-8 sm:px-10 py-5 sm:py-6 w-full sm:w-auto"
                  style={fontBody}
                >
                  Voir les critères d'admission
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
