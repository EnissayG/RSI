import { Link } from 'react-router';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import {
  PageHero,
  SectionEyebrow,
  ValuesBand,
  fontHeading,
  fontBody,
} from '../components/layout/PageSections';
import { siteImages, pageHeroImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';
import { OrgFactsGrid } from '../components/layout/OrgFactsGrid';

const timeline = [
  {
    title: 'Fondation',
    year: '1990',
    body: "Création de RSI Propulsion pour répondre au besoin de logements adaptés à Montréal. Obtention des lettres patentes d'organisme à but non lucratif.",
  },
  {
    title: 'Ouverture',
    year: '1995',
    body: "Inauguration des 15 unités de logement adaptés au 2075 rue Théodore, dans le quartier Hochelaga-Maisonneuve.",
  },
  {
    title: 'Réseau ÉquiToît',
    year: 'À ce jour',
    body: `Intégration au réseau ÉquiToît : ${ORGANIZATION.equitoitNetwork.join(', ')}. Une seule demande d'inscription pour les quatre ressources.`,
  },
  {
    title: "Aujourd'hui",
    year: null,
    body: "15 logements, une équipe dévouée, des dizaines de locataires accompagnés avec respect et dignité depuis plus de 25 ans.",
  },
];

export function History() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.historique}
          imageAlt="Historique RSI Propulsion"
          eyebrow="Nos racines"
          title="Notre histoire"
          subtitle="Depuis notre fondation, RSI Propulsion s'est engagé à offrir des logements dignes et adaptés à des personnes souvent oubliées du système ordinaire d'habitation."
        />

        <section className="bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="space-y-6 text-[#6B6B6B]" style={fontBody}>
              <p>
                RSI Propulsion est né d'une conviction simple : toute personne vivant avec un handicap physique mérite un
                chez-soi digne, abordable et adapté à ses besoins réels. Fondé à Montréal, l'organisme s'est implanté
                dans le quartier Hochelaga-Maisonneuve, un quartier reconnu pour son tissu communautaire fort et sa
                solidarité de proximité.
              </p>
              <p>
                Depuis sa création, RSI Propulsion a développé 15 unités de logement avec services intégrés, accueillant
                des adultes de 18 à 59 ans présentant des déficiences physiques avec ou sans atteinte cognitive légère.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[420px]">
              <img src={siteImages.logementExterieur} alt="Bâtiment RSI Propulsion" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#F9F8F6] py-24">
          <div className="max-w-[900px] mx-auto px-6">
            <SectionEyebrow>Les étapes clés</SectionEyebrow>
            <h2 className="text-4xl font-bold text-[#2C2C2C] mb-16" style={fontHeading}>
              Notre parcours
            </h2>
            <div className="relative border-l-4 border-[#E8621A] ml-4 space-y-12 pl-10">
              {timeline.map((event, i) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <span className="absolute -left-[46px] top-1 w-5 h-5 rounded-full bg-[#E8621A] border-4 border-[#F9F8F6]" />
                  {event.year && (
                    <p className="text-2xl font-bold text-[#E8621A] mb-1" style={fontHeading}>
                      {event.year}
                    </p>
                  )}
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-2" style={fontHeading}>
                    {event.title}
                  </h3>
                  <p className="text-[#6B6B6B]" style={fontBody}>
                    {event.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionEyebrow>Notre quartier</SectionEyebrow>
              <h2 className="text-4xl font-bold text-[#2C2C2C] mb-6" style={fontHeading}>
                Hochelaga-Maisonneuve
              </h2>
              <p className="text-[#6B6B6B] mb-6" style={fontBody}>
                Hochelaga-Maisonneuve est l'un des quartiers les plus dynamiques et solidaires de Montréal. Avec ses
                nombreux organismes communautaires, ses commerces de proximité et ses espaces verts, il offre un cadre de
                vie stimulant et inclusif pour nos locataires.
              </p>
              <p className="text-[#6B6B6B]" style={fontBody}>
                Le quartier est bien desservi par les transports en commun et offre un accès facile aux services
                essentiels, épiceries, cliniques, parcs et centres communautaires.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl h-[380px]">
              <img src={siteImages.historiqueBas} alt="Quartier Hochelaga-Maisonneuve" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section className="bg-[#F9F8F6] py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <SectionEyebrow>Aujourd'hui</SectionEyebrow>
            <h2 className="text-3xl font-bold text-[#2C2C2C] mb-8" style={fontHeading}>
              RSI Propulsion en chiffres
            </h2>
            <OrgFactsGrid />
          </div>
        </section>

        <ValuesBand />

        <section className="bg-[#F9F8F6] py-16 text-center">
          <Link to="/criteres" className="text-[#E8621A] font-semibold hover:underline text-lg" style={fontBody}>
            Découvrir nos critères d'admission →
          </Link>
        </section>
      </div>
    </PageTransition>
  );
}
