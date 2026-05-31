import { Shield, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Card } from '../components/ui/card';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { PageHero, ContentImage, fontBody, sectionPad } from '../components/layout/PageSections';
import { siteImages, pageHeroImages } from '../config/images';

export function PrivacyPolicy() {
  const sections = [
    {
      title: 'Collecte des renseignements personnels',
      content: `RSI Propulsion peut être amené à recueillir des informations personnelles vous concernant par le biais de ce site, notamment via le formulaire de contact et le formulaire de demande d'admission. Ces renseignements sont uniquement recueillis afin de communiquer avec vous et de traiter votre demande. Seuls certains employés de RSI Propulsion ont accès à ces informations. En aucun cas, RSI Propulsion ne communique, ne vend ou ne loue ces informations à une tierce partie.

Lorsque vous visitez ce site, seule l'adresse IP de votre appareil est relevée ainsi que le type d'appareil et le pays, sans être reliée à aucune donnée personnelle.`,
    },
    {
      title: 'Fichiers journaux et témoins (cookies)',
      content: `Lors de votre visite, des données techniques peuvent être enregistrées dans les fichiers journaux du serveur (adresse IP, type d'appareil, pages consultées, date et heure de connexion). Ces données servent à assurer la sécurité et le bon fonctionnement du site.

Un bandeau vous permet d'accepter ou de refuser l'enregistrement de votre choix dans le stockage local de votre navigateur (clé « rsi-cookie-consent »). Ce choix est conservé pour ne pas vous redemander à chaque visite.

RSI Propulsion n'utilise pas de témoins publicitaires ni de profilage à des fins commerciales. Si des outils de mesure d'audience venaient à être ajoutés, ils ne seraient activés qu'avec votre consentement explicite.`,
    },
    {
      title: "Formulaire de contact et d'admission",
      content: `En remplissant nos formulaires, vous consentez à ce que RSI Propulsion conserve les renseignements inscrits dans le seul but de communiquer avec vous ou de traiter votre demande.`,
    },
    {
      title: "Droit d'opposition et de retrait",
      content: `Vous pouvez en tout temps vous opposer au traitement de vos renseignements personnels en nous contactant par écrit à : dg@rsipropulsion.ca

Vous pouvez également vider le cache et supprimer les cookies de votre navigateur pour vous soustraire aux fichiers témoins.`,
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.confidentialite}
          imageAlt="RSI Propulsion"
          showRule={false}
          leading={
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full">
              <Shield className="w-10 h-10 text-[#E8621A]" />
            </div>
          }
          title="Politique de confidentialité et protection des renseignements personnels"
          subtitle="Dernière mise à jour : 2024"
        />

        <section className={sectionPad}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-2xl mx-auto">
              <ContentImage src={siteImages.confidentialite} alt="Protection des renseignements personnels" />
            </div>
            <Card className="bg-[#F9F8F6] rounded-2xl shadow-lg p-8 md:p-10 mb-12">
              <p
                className="text-base text-[#6B6B6B]"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}
              >
                RSI Propulsion respecte le droit à la protection des renseignements personnels conformément à la Loi
                25 sur la protection des renseignements personnels au Québec et aux lois canadiennes applicables.
              </p>
            </Card>

            <div className="space-y-10">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="bg-[#F9F8F6] rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 md:p-10">
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#2C2C2C] mb-6"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {section.title}
                    </h2>
                    <div
                      className="text-base text-[#6B6B6B] whitespace-pre-line"
                      style={{ fontFamily: 'var(--font-body)', lineHeight: 1.8 }}
                    >
                      {section.content}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F9F8F6] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <Card className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Responsable de la protection des renseignements personnels
                  </h2>
                </div>

                <div className="text-center space-y-4 mb-8">
                  <p className="text-lg font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                    Kyrvens Simon
                  </p>
                  <p className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                    Téléphone : (514) 251-2525
                  </p>
                  <p className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                    Courriel :{' '}
                    <a href="mailto:dg@rsipropulsion.ca" className="text-[#E8621A] hover:underline">
                      dg@rsipropulsion.ca
                    </a>
                    {/* TODO: confirm email address with client */}
                  </p>
                  <p className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                    RSI Propulsion, 2075 rue Théodore, Montréal (Québec) H1V 3C1
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center p-6 bg-[#F9F8F6] rounded-xl">
                    <div className="w-12 h-12 bg-[#E8621A] rounded-full flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      2075 rue Théodore
                      <br />
                      Montréal (Québec) H1V 3C1
                    </p>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-[#F9F8F6] rounded-xl">
                    <div className="w-12 h-12 bg-[#D4A017] rounded-full flex items-center justify-center mb-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <a
                      href="tel:5142512525"
                      className="text-sm text-[#6B6B6B] hover:text-[#E8621A] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      (514) 251-2525
                    </a>
                  </div>

                  <div className="flex flex-col items-center text-center p-6 bg-[#F9F8F6] rounded-xl">
                    <div className="w-12 h-12 bg-[#8AAC2A] rounded-full flex items-center justify-center mb-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <a
                      href="mailto:dg@rsipropulsion.ca"
                      className="text-sm text-[#6B6B6B] hover:text-[#E8621A] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      dg@rsipropulsion.ca
                    </a>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
