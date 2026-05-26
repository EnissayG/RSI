import { motion } from 'motion/react';
import { Award, Briefcase } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WaveDivider } from '../components/WaveDivider';

export function Team() {
  const director = {
    name: 'Kyrvens Simon',
    title: 'Directeur général',
    quote: "Chez RSI Propulsion, on trouve un « Chez-moi » !",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  };

  const boardMembers = [
    {
      name: 'Ghyslain Parent',
      title: 'PH.D',
      role: 'Président',
      committee: 'Comité exécutif',
      since: '2004',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      credentials: [
        "Doctorat en administration scolaire de l'UDM",
        "Maîtrise en éducation de l'UQAR",
        "Baccalauréat en adaptation scolaire de l'UQAT",
        "Professeur-chercheur associé en sciences de l'éducation à l'UQTR",
      ],
      color: '#E8621A',
    },
    {
      name: 'Robin Laroche',
      role: 'Vice-Président',
      committee: 'Comité exécutif',
      since: '2001',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      credentials: [
        "Baccalauréat en éducation de l'UQAM",
        'Diplôme en gestion du HEC',
        'Certification Lean Management Six Sigma',
        'Plus de 25 ans en gestion dans le réseau de la santé',
      ],
      color: '#D4A017',
    },
    {
      name: 'Manon Grégoire',
      role: 'Secrétaire',
      committee: 'Comité exécutif',
      since: '2021',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      credentials: [
        'Directrice Talents et cultures chez CCL Labels depuis 2011',
        "Vice-présidente du conseil d'administration de GrafiCompétences depuis 2015",
      ],
      color: '#8AAC2A',
    },
    {
      name: 'Roger Laplante',
      role: 'Administrateur',
      committee: 'Membre fondateur',
      since: '1990',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      credentials: [
        "Président du CA de La Maison des Étapes depuis 1978",
        "Membre du CA de Le Centre de Crise Tracom depuis 1980",
      ],
      color: '#E8621A',
    },
    {
      name: 'Denise Larivière',
      role: 'Administratrice',
      committee: 'Représentante des locataires',
      since: '2007',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80',
      credentials: [
        'Locataire chez RSI Propulsion depuis 2007',
        "Secrétaire du CA de l'organisme PIMO depuis 2013",
      ],
      color: '#D4A017',
    },
    {
      name: 'Mathieu St-Martin',
      role: 'Administrateur',
      committee: 'Représentant des locataires',
      since: '2017',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      credentials: [
        'Locataire chez RSI Propulsion depuis 2017',
        "Artiste autodidacte en dessin utilisant les médiums du pastel et de l'aquarelle",
      ],
      color: '#8AAC2A',
    },
    {
      name: 'Zachary Monette',
      role: 'Administrateur',
      committee: 'Représentant des locataires',
      since: '2019',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80',
      credentials: ['Locataire chez RSI Propulsion depuis 2019', "Passionné par l'entrepreneuriat"],
      color: '#E8621A',
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
              alt="Équipe RSI Propulsion"
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
              Notre équipe de cœur
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Une équipe dévouée administrant au mieux les ressources pour le bien-être de tous nos locataires
            </motion.p>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        {/* Director Section */}
        <section className="bg-[#F9F8F6] py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    {director.name}
                  </p>
                  <p className="text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                    {director.title}
                  </p>
                </div>
              </motion.div>

              <div>
                <div className="w-12 h-1 bg-[#E8621A] mb-6" />
                <h2
                  className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Message du directeur
                </h2>
                <blockquote className="mb-8">
                  <p
                    className="text-2xl italic text-[#E8621A] mb-6"
                    style={{ fontFamily: 'var(--font-heading)', lineHeight: 1.4 }}
                  >
                    "{director.quote}"
                  </p>
                </blockquote>
                <p
                  className="text-lg text-[#6B6B6B] mb-6"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  RSI Propulsion, c'est 15 appartements adaptés accueillant des personnes en situation de déficience
                  motrice et/ou de déficience cognitive légère. C'est un « Chez-moi » bien à eux, à tarif des plus
                  abordables.
                </p>
                <p
                  className="text-lg text-[#6B6B6B]"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                >
                  Grâce à son équipe de préposés aux bénéficiaires expérimentés et dévoués, RSI Propulsion offre des
                  services de qualité 24 heures par jour, 7 jours par semaine.
                </p>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider flip color="#FFFFFF" />

        {/* Board Members Section */}
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
                Conseil d'administration
              </h2>
              <p
                className="text-xl text-[#6B6B6B] max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              >
                Des professionnels dévoués et des représentants des locataires qui guident notre mission
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {boardMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-t-4"
                  style={{ borderTopColor: member.color }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative h-64">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div
                        className="px-4 py-2 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                        style={{ backgroundColor: `${member.color}CC` }}
                      >
                        Depuis {member.since}
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3
                      className="text-2xl font-bold mb-2 text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {member.name}
                    </h3>
                    {member.title && (
                      <p
                        className="text-sm font-bold mb-3"
                        style={{ fontFamily: 'var(--font-body)', color: member.color }}
                      >
                        {member.title}
                      </p>
                    )}
                    <p className="text-lg font-semibold text-[#2C2C2C] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                      {member.role}
                    </p>
                    <p className="text-sm text-[#6B6B6B] mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                      {member.committee}
                    </p>

                    <div className="space-y-3">
                      {member.credentials.map((credential, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div
                            className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: member.color }}
                          />
                          <p
                            className="text-sm text-[#6B6B6B]"
                            style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}
                          >
                            {credential}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
