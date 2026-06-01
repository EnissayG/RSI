import { Heart, Home, Utensils, HandHeart, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import {
  SectionEyebrow,
  PageHero,
  PayPalDonateButton,
  ContentImage,
  fontHeading,
  fontBody,
  sectionPad,
  pageContainer,
  sectionHeaderMb,
  headingSection,
} from '../components/layout/PageSections';
import { PAYPAL_DONATE_URL } from '../config/links';
import { siteImages, pageHeroImages } from '../config/images';

export function Donate() {
  const impactAreas = [
    {
      icon: Home,
      color: '#E8621A',
      title: 'Logements adaptés',
      description:
        "Entretien et amélioration de nos 15 appartements 3½ pour un milieu sécuritaire et accueillant.",
    },
    {
      icon: Utensils,
      color: '#D4A017',
      title: 'Vie quotidienne',
      description:
        "Repas communautaires, aide AVQ et AVD, et présence de notre équipe 24 h/24, 7 j/7.",
    },
    {
      icon: HandHeart,
      color: '#8AAC2A',
      title: 'Espaces communs',
      description:
        "Cuisine, salle communautaire et parties communes qui favorisent le lien social.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.don}
          imageAlt="Faire un don à RSI Propulsion"
          title="Soutenez RSI Propulsion"
          subtitle="Votre générosité nous aide à offrir un vrai « Chez-moi » à nos locataires à Hochelaga-Maisonneuve."
        >
          <p className="text-white font-semibold text-lg text-center" style={fontBody}>
            No. de charité : 138775119RR0001
            <br />
            <span className="text-sm font-normal opacity-90">Reçu fiscal pour tout don supérieur à 20 $</span>
          </p>
        </PageHero>

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className="max-w-[720px] mx-auto px-4 sm:px-6 text-center">
            <AnimatedSection>
              <SectionEyebrow>Don sécurisé</SectionEyebrow>
              <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
                Faire un don en ligne
              </h2>
              <p className="text-[#6B6B6B] mb-10" style={fontBody}>
                Les dons se font par l'intermédiaire de notre page officielle PayPal Giving Fund. Vous serez
                redirigé vers une plateforme sécurisée pour choisir le montant de votre contribution.
              </p>
              <PayPalDonateButton size="lg" />
              <p className="mt-6 text-sm text-[#6B6B6B]" style={fontBody}>
                <a
                  href={PAYPAL_DONATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8621A] hover:underline break-all"
                >
                  paypal.com/CA/fundraiser/charity/3461242
                </a>
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className={`bg-white ${sectionPad}`}>
          <div className={pageContainer}>
            <div className="mb-8 sm:mb-12 md:mb-14 max-w-3xl mx-auto">
              <ContentImage src={siteImages.donSolidarite} alt="Soutien à RSI Propulsion" />
            </div>
            <div className={`text-center ${sectionHeaderMb}`}>
              <SectionEyebrow>Votre impact</SectionEyebrow>
              <h2 className={headingSection} style={fontHeading}>
                Où va votre don
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {impactAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <Card
                    className="p-5 sm:p-6 md:p-8 rounded-2xl bg-[#F9F8F6] border-0 shadow-sm h-full border-t-4"
                    style={{ borderTopColor: area.color }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                      style={{ backgroundColor: area.color }}
                    >
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-3" style={fontHeading}>
                      {area.title}
                    </h3>
                    <p className="text-[#6B6B6B]" style={fontBody}>
                      {area.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className={`bg-[#E8621A] ${sectionPad} text-white text-center`}>
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="flex justify-center mb-6">
              <Shield className="w-12 h-12 text-white/90" aria-hidden />
            </div>
            <h2 className={`${headingSection} mb-4 sm:mb-6`} style={fontHeading}>
              Avantages fiscaux
            </h2>
            <p className="mb-8 opacity-95" style={fontBody}>
              RSI Propulsion est un organisme de bienfaisance enregistré. Un reçu officiel est émis pour les dons de
              20 $ et plus. Les dons peuvent donner droit à des crédits d'impôt fédéraux et provinciaux.
            </p>
            <p className="text-lg font-semibold mb-10" style={fontBody}>
              No. de charité : 138775119RR0001
            </p>
            <PayPalDonateButton size="lg" />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
