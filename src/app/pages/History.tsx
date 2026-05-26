import { Calendar, Home, Wrench, Users, Award, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { WaveDivider } from '../components/WaveDivider';
import historiqueBas from '../../imports/historique-bas.jpg';

export function History() {
  const timelineEvents = [
    {
      year: '1990',
      title: "Création du Regroupement de services intégrés Propulsion inc.",
      description:
        "C'est l'année de naissance du Regroupement de services intégrés Propulsion inc., Les lettres patentes, confirmant le statut d'organisme à but non lucratif, sont obtenues la même année. Il ne faut pas passer sous silence l'apport extraordinaire du Centre de réadaptation Constance-Lethbridge, duquel émane le projet du RSI Propulsion. Il faut reconnaître également la contribution exceptionnelle du CHSLD centre-ville de Montréal ainsi que du Centre de réadaptation Lucie-Bruneau.",
      icon: Users,
      color: '#E8621A',
    },
    {
      year: '1993',
      title: "Le vrai projet débute",
      description:
        "C'est vrai, le projet de construction résidentielle présenté à la Société d'Habitation du Québec (SHQ) et au ministre de la Santé et des Services sociaux est accepté. Ce sont donc 15 logements accessibles, assortis de services de soutien qui se réalisent.",
      icon: Calendar,
      color: '#D4A017',
    },
    {
      year: '1994',
      title: "On débute la construction",
      description: "Le chantier commence et les rêves prennent forme.",
      icon: Wrench,
      color: '#8AAC2A',
    },
    {
      year: '1995',
      title: "La construction est terminée",
      description:
        "La construction étant terminée, RSI Propulsion accueille ses locataires. Ces derniers pourront bénéficier d'un « Chez-moi » adapté tout en recevant des services d'aide à la vie quotidienne et à la vie domestique que requiert leur condition.",
      icon: Home,
      color: '#E8621A',
    },
    {
      year: '2007',
      title: "Le projet de recherche",
      description:
        "RSI Propulsion, en collaboration avec l'Université du Québec à Trois-Rivières, participe à un projet de recherche sur la participation sociale et temps sociaux. Le projet « métro, boulot, dodo et le temps social » a été réalisé en septembre 2007 sous la gouverne de Monsieur Ghyslain Parent, Ph.D., Madame France Beaumier, M.A., Madame Anne Boulanger, coordonnatrice de RSI Propulsion et Monsieur Patrick Desjardins, locataire. Sept recommandations ont été retenues à la suite des résultats obtenus.",
      icon: Users,
      color: '#D4A017',
    },
    {
      year: '2011',
      title: "Concours Home Dépôt",
      description:
        "RSI Propulsion gagne un concours! La Fondation Home Dépôt Canada organise le concours « Rénover sa communauté ». RSIP remporte les travaux de rénovation des espaces communautaires dont la cuisine.",
      icon: Award,
      color: '#8AAC2A',
    },
    {
      year: '2011',
      title: "Festin de la Saint-Hubert",
      description:
        "Et toujours en 2011, RSI Propulsion participait au « Festin de la Saint-Hubert » pour une importante collecte de fonds qui a permis à RSI Propulsion de poursuivre son développement.",
      icon: Heart,
      color: '#E8621A',
    },
    {
      year: 'Maintenant',
      title: "On poursuit notre mission",
      description:
        "Depuis ce jour, RSI Propulsion poursuit sa mission. Le projet, qui était considéré comme un projet pilote à ce moment, a su montrer sa pertinence et le besoin de continuité dans le développement de ressource de ce type. Quoi de plus inspirant que de voir des personnes, vivant en situation de handicap, s'épanouir dans un milieu de vie adapté à leur besoins.",
      icon: Heart,
      color: '#D4A017',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
              alt="Notre histoire"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Notre histoire
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Plus de 30 ans de dévouement au service des personnes en situation de handicap
            </motion.p>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        {/* Timeline Section */}
        <section className="bg-[#F9F8F6] py-32 relative">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-1 bg-[#E8621A]" />
              </div>
              <h2
                className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Notre parcours
              </h2>
              <p
                className="text-xl text-[#6B6B6B] max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              >
                Plus de trois décennies de dévouement au service des personnes en situation de handicap
              </p>
            </div>

            {/* Vertical line (hidden on mobile) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E8621A] via-[#D4A017] to-[#8AAC2A] transform -translate-x-1/2" />

            <div className="space-y-16 lg:space-y-24">
              {timelineEvents.map((event, index) => (
                <AnimatedSection key={index} direction={index % 2 === 0 ? 'left' : 'right'}>
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full lg:w-5/12">
                      <motion.div
                        className="bg-white rounded-2xl shadow-lg p-8 border-l-4 hover:shadow-xl transition-shadow"
                        style={{ borderColor: event.color }}
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-4 mb-4">
                          <motion.div
                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-md"
                            style={{ backgroundColor: event.color }}
                            whileHover={{ scale: 1.1, rotate: 8 }}
                            transition={{ duration: 0.3 }}
                          >
                            <event.icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <span
                            className="text-3xl font-bold"
                            style={{ fontFamily: 'var(--font-heading)', color: event.color }}
                          >
                            {event.year}
                          </span>
                        </div>
                        <h3
                          className="text-2xl font-semibold mb-3 text-[#2C2C2C]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {event.title}
                        </h3>
                        <p
                          className="text-base text-[#6B6B6B] leading-relaxed"
                          style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                        >
                          {event.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:flex lg:w-2/12 justify-center">
                      <motion.div
                        className="w-6 h-6 rounded-full border-4 border-white shadow-lg z-10"
                        style={{ backgroundColor: event.color }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-5/12" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider flip color="#FFFFFF" />

        {/* Image Section */}
        <section className="bg-white py-0">
          <AnimatedSection>
            <motion.div
              className="w-full h-[400px] lg:h-[500px] overflow-hidden"
              initial={{ opacity: 0, scale: 1.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <img
                src={historiqueBas}
                alt="RSI Propulsion - Notre histoire en images"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatedSection>
        </section>

        <WaveDivider color="#E8621A" />

        {/* Call to Action */}
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
              Faites partie de notre histoire
            </motion.h2>
            <motion.p
              className="text-xl mb-12 max-w-3xl mx-auto opacity-95"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Depuis plus de 30 ans, nous continuons à faire une différence dans la vie de personnes en situation de
              handicap. Joignez-vous à nous.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="/faire-un-don"
                className="inline-block bg-white text-[#E8621A] rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:bg-gray-100 transition-all"
                style={{ fontFamily: 'var(--font-body)' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Faire un don
              </motion.a>
              <motion.a
                href="/carriere"
                className="inline-block bg-transparent border-2 border-white text-white rounded-full px-10 py-6 text-lg font-semibold hover:bg-white hover:text-[#E8621A] transition-all"
                style={{ fontFamily: 'var(--font-body)' }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Rejoindre l'équipe
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
