import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, Ban, Heart, FileText, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { WaveDivider } from '../components/WaveDivider';

const fontBody = { fontFamily: 'var(--font-body)' };
const fontHeading = { fontFamily: 'var(--font-heading)' };

function CriteriaList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-[#2C2C2C]" style={fontHeading}>
          {title}
        </h3>
      )}
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-base text-[#6B6B6B]" style={{ ...fontBody, lineHeight: 1.75 }}>
            <span className="text-[#E8621A] mt-1.5 flex-shrink-0">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Criteria() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <section className="relative h-[50vh] min-h-[360px] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
              alt="Informations et critères de sélection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={fontHeading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Informations et critères de sélection
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white"
              style={{ ...fontBody, lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              RSI Propulsion offre 15 logements adaptés à des adultes de 18 à 59 ans présentant une déficience
              physique avec ou sans atteinte cognitive légère, dans le quartier Hochelaga-Maisonneuve à Montréal.
            </motion.p>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        <section className="bg-[#F9F8F6] py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-16">
                <div className="w-12 h-1 bg-[#E8621A] mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-[#2C2C2C]" style={fontHeading}>
                  RSI Propulsion — Critères d'admission
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card className="bg-white rounded-2xl shadow-sm p-8 border-t-4 border-[#E8621A]">
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-6 h-6 text-[#E8621A]" />
                  <h3 className="text-xl font-semibold text-[#2C2C2C]" style={fontHeading}>
                    Appartement
                  </h3>
                </div>
                <CriteriaList
                  title=""
                  items={[
                    '15 unités de 3½ : salon et cuisinette (micro-ondes et mini-frigo), chambre fermée et salle de bain adaptée',
                    'Bâtiment entièrement adapté et accessible',
                    'Équipements fournis par le CLSC selon les besoins du locataire',
                  ]}
                />
              </Card>

              <Card className="bg-white rounded-2xl shadow-sm p-8 border-t-4 border-[#D4A017]">
                <CriteriaList
                  title="Critères d'admission"
                  items={[
                    'Âge : 18 à 59 ans',
                    'Déficience physique avec ou sans atteinte cognitive légère',
                    "Capacité d'habiter seul en appartement (responsabilité de son budget, de son emploi du temps)",
                    'Engagement social, activités communautaires ou être aux études',
                    "Avoir besoin d'aide AVQ et AVD",
                    "Revenu conforme aux critères de la Société d'Habitation du Québec",
                    'Maximum 25 heures de services planifiables par semaine + 20 à 30% non planifiables',
                    'Demandes acceptées de partout au Québec',
                  ]}
                />
              </Card>

              <Card className="bg-white rounded-2xl shadow-sm p-8 border-t-4 border-[#8AAC2A]">
                <CriteriaList
                  title="Coûts"
                  items={[
                    'Loyer : 25% du revenu',
                    'Nourriture : 275$/mois',
                    'Entretien : 45$/mois',
                    'Frais communs : 20$/mois',
                    'Électricité : fixée annuellement par la SHQ',
                    'Admissible au Programme de Supplément au Loyer (PSL)',
                  ]}
                />
              </Card>

              <Card className="bg-white rounded-2xl shadow-sm p-8 border-t-4 border-[#8AAC2A]">
                <div className="flex items-center gap-3 mb-6">
                  <Heart className="w-6 h-6 text-[#8AAC2A]" />
                  <h3 className="text-xl font-semibold text-[#2C2C2C]" style={fontHeading}>
                    Services inclus
                  </h3>
                </div>
                <div className="space-y-3 text-base text-[#6B6B6B]" style={{ ...fontBody, lineHeight: 1.75 }}>
                  <p>
                    <strong className="text-[#2C2C2C]">AVQ :</strong> Oui
                  </p>
                  <p>
                    <strong className="text-[#2C2C2C]">AVD :</strong> Vaisselle, ménage, lessive, poubelles,
                    changement de literie, préparation des repas
                  </p>
                  <p>
                    <strong className="text-[#2C2C2C]">Autres :</strong> Chef cuisinier pour repas à la salle
                    communautaire, salle communautaire disponible pour les activités
                  </p>
                </div>
              </Card>
            </div>

            <Card className="bg-white rounded-2xl shadow-sm p-8 mb-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-[#6B6B6B] mb-4" style={fontHeading}>
                Services non offerts
              </h3>
              <p className="text-base text-[#6B6B6B]" style={{ ...fontBody, lineHeight: 1.75 }}>
                Soins des animaux domestiques, organisation de loisirs, transport, accompagnement à l'extérieur
              </p>
            </Card>

            <Card className="bg-white rounded-2xl shadow-sm p-8 mb-8 border-l-4 border-[#6B6B6B]">
              <div className="flex items-start gap-4">
                <Ban className="w-6 h-6 text-[#6B6B6B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#2C2C2C] mb-4" style={fontHeading}>
                    Critères d'exclusion
                  </h3>
                  <CriteriaList
                    title=""
                    items={[
                      'Besoins dépassant 25h de services planifiables/semaine',
                      "Nécessite l'aide de 2 préposés pour les AVQ",
                      'Nécessite des professionnels de santé en continu sur place',
                      'Inaptitude à prendre soin de soi et à gérer ses biens',
                      "Troubles du comportement, d'agressivité ou de consommation interférant avec le fonctionnement de la ressource",
                    ]}
                  />
                </div>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl shadow-sm p-8 border-t-4 border-[#E8621A]">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#E8621A]" />
                <h3 className="text-xl font-semibold text-[#2C2C2C]" style={fontHeading}>
                  Documents requis pour l'inscription
                </h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-base text-[#6B6B6B]" style={{ ...fontBody, lineHeight: 1.75 }}>
                  <span className="text-[#E8621A]">•</span>
                  Fiche d'inscription (formulaire en ligne)
                </li>
                <li className="flex items-start gap-2 text-base text-[#6B6B6B]" style={{ ...fontBody, lineHeight: 1.75 }}>
                  <span className="text-[#E8621A]">•</span>
                  OCCI (Outil de Cheminement Clinique Informatisé)
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <WaveDivider color="#E8621A" />

        <section className="bg-[#E8621A] py-24 text-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div className="w-12 h-1 bg-white mx-auto mb-6" />
            <motion.h2
              className="text-4xl font-bold mb-6"
              style={fontHeading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Prêt à soumettre votre demande ?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 max-w-2xl mx-auto opacity-95"
              style={{ ...fontBody, lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Complétez le formulaire de demande d'inscription en ligne. Une seule demande suffit pour les quatre
              ressources du réseau ÉquiToît.
            </motion.p>
            <Link to="/admission">
              <Button
                className="bg-white hover:bg-gray-100 text-[#E8621A] rounded-full px-10 py-6 text-lg font-semibold shadow-xl inline-flex items-center gap-3"
                style={fontBody}
              >
                <Send className="w-5 h-5" />
                Accéder au formulaire d'inscription
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
