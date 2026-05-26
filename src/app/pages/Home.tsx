import { Link } from 'react-router';
import { Heart, Check, ArrowRight, Home as HomeIcon, Users, Utensils, Clock, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import { WaveDivider } from '../components/WaveDivider';

export function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen 100vh */}
        <section className="relative h-screen flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1920&q=80"
              alt="RSI Propulsion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Des logements abordables et adaptés
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Un milieu de vie adapté, chaleureux et inclusif pour personnes en situation de handicap
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link to="/criteres">
                <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-12 py-7 text-lg font-semibold shadow-2xl min-w-[260px]">
                  Critères d'admission
                </Button>
              </Link>
              <Link to="/faire-un-don">
                <Button className="bg-white hover:bg-gray-100 text-[#E8621A] rounded-full px-12 py-7 text-lg font-semibold shadow-2xl min-w-[260px] flex items-center gap-3 justify-center">
                  <Heart className="w-6 h-6" />
                  Faire un don
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-12 mt-16 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div>
                <div className="text-5xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  15
                </div>
                <div className="text-sm uppercase tracking-widest opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                  Unités
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/30" />
              <div>
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  AVQ & AVD
                </div>
                <div className="text-sm uppercase tracking-widest opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                  Services
                </div>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/30" />
              <div>
                <div className="text-4xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Depuis 2011
                </div>
                <div className="text-sm uppercase tracking-widest opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                  À Montréal
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        {/* About Section - 2 Column Layout */}
        <section className="bg-[#F9F8F6] py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-12 h-1 bg-[#E8621A] mb-6" />
                <h2
                  className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Une communication basée sur le respect
                </h2>
                <p
                  className="text-lg text-[#6B6B6B] mb-6"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  Le Regroupement de services intégrés Propulsion offre 15 appartements adaptés accueillant des
                  personnes en situation de déficience motrice et/ou de déficience cognitive légère.
                </p>
                <p
                  className="text-lg text-[#6B6B6B] mb-8"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  C'est un « Chez-moi » bien à eux, à tarif des plus abordables, avec une gamme de services aux
                  activités de la vie quotidienne et domestique disponible 24 heures sur 24, 7 jours sur 7.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#E8621A] flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-base font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                      Compassion
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#D4A017] flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-base font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                      Inclusion
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#8AAC2A] flex items-center justify-center">
                      <HomeIcon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-base font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                      Autonomie
                    </span>
                  </div>
                </div>
              </div>

              <motion.div
                className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                  alt="Logement RSI Propulsion"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <WaveDivider flip color="#FFFFFF" />

        {/* Services Grid - Detailed */}
        <section className="bg-white py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-1 bg-[#E8621A]" />
              </div>
              <h2
                className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Ce que nous offrons
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <motion.div
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#E8621A]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="w-8 h-8 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2 text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      15 logements adaptés
                    </h3>
                    <p className="text-sm text-[#E8621A] font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                      Appartements 3½
                    </p>
                  </div>
                </div>
                <p
                  className="text-lg text-[#6B6B6B] mb-6"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  Bâtiment entièrement adapté et accessible. Appartements équipés avec salon, cuisinette, chambre
                  fermée et salle de bain adaptée selon les besoins de chaque locataire. Loyer subventionné.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#E8621A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Cuisine et salle de bain accessibles
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#E8621A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Équipements adaptés personnalisés
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#E8621A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Tarifs abordables et subventionnés
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#D4A017]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-8 h-8 text-[#D4A017]" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2 text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Services alimentaires
                    </h3>
                    <p className="text-sm text-[#D4A017] font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                      Chef cuisinier sur place
                    </p>
                  </div>
                </div>
                <p
                  className="text-lg text-[#6B6B6B] mb-6"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  Trois repas équilibrés par jour préparés par notre chef cuisinier et servis à la salle
                  communautaire. Menus variés et adaptés selon les besoins alimentaires.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#D4A017]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Petit-déjeuner, dîner et souper
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#D4A017]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Menus adaptés aux restrictions
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#D4A017]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Service en salle communautaire
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#8AAC2A]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#8AAC2A]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-8 h-8 text-[#8AAC2A]" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2 text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Soutien 24 heures sur 24
                    </h3>
                    <p className="text-sm text-[#8AAC2A] font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                      Préposés aux bénéficiaires
                    </p>
                  </div>
                </div>
                <p
                  className="text-lg text-[#6B6B6B] mb-6"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  Équipe de préposés aux bénéficiaires expérimentés et dévoués offrant des services de qualité pour
                  les activités de la vie quotidienne (AVQ) et domestique (AVD).
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#8AAC2A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Aide à l'hygiène et l'habillage
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#8AAC2A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Soutien pour les déplacements
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#8AAC2A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Gestion des médicaments
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="bg-[#F9F8F6] rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#E8621A]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-[#E8621A]" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold mb-2 text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Vie communautaire active
                    </h3>
                    <p className="text-sm text-[#E8621A] font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                      Activités et intégration
                    </p>
                  </div>
                </div>
                <p
                  className="text-lg text-[#6B6B6B] mb-6"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  Programme d'activités sociales, culturelles et récréatives pour favoriser l'intégration et le
                  maintien d'une vie sociale active. Journal des locataires créé par et pour les résidents.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#E8621A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Activités sociales régulières
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#E8621A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Salle communautaire accessible
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#E8621A]" />
                    <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Journal créé par les locataires
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A] hover:text-white rounded-full px-10 py-6 text-lg font-semibold inline-flex items-center gap-3"
                >
                  En savoir plus sur nos services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <WaveDivider color="#E8621A" />

        {/* CTA Section - Orange Background */}
        <section className="bg-[#E8621A] py-32 text-white">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-1 bg-white" />
            </div>
            <motion.h2
              className="text-5xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Votre don change des vies
            </motion.h2>
            <motion.p
              className="text-xl mb-12 max-w-3xl mx-auto opacity-95"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Appuyez RSI Propulsion en faisant un don en ligne, de façon simple et sécuritaire. Chaque contribution
              nous aide à offrir un milieu de vie adapté et chaleureux.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/faire-un-don">
                <Button className="bg-white hover:bg-gray-100 text-[#E8621A] rounded-full px-12 py-7 text-xl font-semibold shadow-2xl inline-flex items-center gap-3">
                  Faire un don maintenant
                  <Heart className="w-6 h-6" />
                </Button>
              </Link>
              <p className="text-sm mt-6 opacity-90" style={{ fontFamily: 'var(--font-body)' }}>
                No. de charité: 870969068RR0001 • Reçu fiscal pour tout don supérieur à 20 $
              </p>
            </motion.div>
          </div>
        </section>

        <WaveDivider flip color="#F9F8F6" />

        {/* Contact Quick Section */}
        <section className="bg-[#F9F8F6] py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-1 bg-[#E8621A]" />
              </div>
              <h2
                className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Prêt à faire le premier pas ?
              </h2>
              <p
                className="text-xl text-[#6B6B6B] max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              >
                Notre équipe est là pour répondre à toutes vos questions et vous accompagner dans vos démarches
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <motion.a
                href="tel:5142512525"
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6 border-l-4 border-[#E8621A]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-[#E8621A] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[#6B6B6B] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Téléphone
                  </p>
                  <p className="text-xl font-bold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                    (514) 251-2525
                  </p>
                </div>
              </motion.a>

              <motion.a
                href="mailto:info@rsipropulsion.ca"
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center gap-6 border-l-4 border-[#D4A017]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#D4A017] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[#6B6B6B] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Courriel
                  </p>
                  <p className="text-xl font-bold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                    info@rsipropulsion.ca
                  </p>
                </div>
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
