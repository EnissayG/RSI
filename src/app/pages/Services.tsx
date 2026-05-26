import { motion } from 'motion/react';
import { Home, Utensils, Stethoscope, HeartHandshake, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import { WaveDivider } from '../components/WaveDivider';

export function Services() {
  const mainServices = [
    {
      icon: Home,
      color: '#E8621A',
      title: 'Logements adaptés',
      description:
        "15 appartements 3½ entièrement adaptés avec salon, cuisinette, chambre fermée et salle de bain accessible.",
      features: [
        'Équipements adaptés selon les besoins',
        'Cuisine et salle de bain accessibles',
        'Espace de vie privé et sécurisé',
        'Loyer abordable et subventionné',
      ],
    },
    {
      icon: Stethoscope,
      color: '#D4A017',
      title: 'Activités de la vie quotidienne (AVQ)',
      description: "Assistance professionnelle pour les activités essentielles, disponible 24/7.",
      features: [
        "Aide à l'hygiène personnelle",
        "Assistance pour l'habillage",
        "Soutien pour les déplacements",
        "Aide à la prise de médicaments",
      ],
    },
    {
      icon: Utensils,
      color: '#8AAC2A',
      title: 'Activités de la vie domestique (AVD)',
      description: "Services de soutien pour maintenir un environnement de vie sain et agréable.",
      features: [
        'Préparation et service des repas',
        'Entretien ménager',
        'Gestion du linge',
        'Accompagnement pour les courses',
      ],
    },
  ];

  const additionalServices = [
    {
      icon: Users,
      title: "Activités sociales et communautaires",
      description: "Programme varié pour favoriser l'intégration sociale et le développement personnel.",
    },
    {
      icon: HeartHandshake,
      title: "Soutien à l'intégration",
      description: "Accompagnement personnalisé pour faciliter l'adaptation et l'épanouissement.",
    },
    {
      icon: Clock,
      title: "Disponibilité 24/7",
      description: "Personnel présent en tout temps pour assurer la sécurité et répondre aux urgences.",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1920&q=80"
              alt="Services RSI Propulsion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-white mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Des services adaptés à vos besoins
            </motion.h1>
            <motion.p
              className="text-xl text-white"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Un accompagnement complet pour favoriser votre autonomie et votre bien-être au quotidien
            </motion.p>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        {/* Main Services Section */}
        <section className="bg-[#F9F8F6] py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <div className="w-12 h-1 bg-[#E8621A]" />
              </div>
              <h2
                className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Nos services principaux
              </h2>
              <p
                className="text-xl text-[#6B6B6B] max-w-3xl mx-auto"
                style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              >
                Un éventail complet de services pour soutenir votre autonomie et votre qualité de vie
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4"
                  style={{ borderTopColor: service.color }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-4 text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-lg text-[#6B6B6B] mb-6"
                    style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                  >
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: service.color }} />
                        <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider flip color="#FFFFFF" />

        {/* Additional Services Section */}
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
                Services complémentaires
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-[#F9F8F6] rounded-2xl p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 border-l-4 border-[#E8621A]"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <service.icon className="w-16 h-16 text-[#E8621A] mb-6" />
                  <h3
                    className="text-2xl font-bold mb-4 text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-lg text-[#6B6B6B]"
                    style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider color="#E8621A" />

        {/* CTA Section */}
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
              Besoin de plus d'informations ?
            </motion.h2>
            <motion.p
              className="text-xl mb-12 max-w-3xl mx-auto opacity-95"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Notre équipe est disponible pour répondre à toutes vos questions sur nos services et vous accompagner dans
              vos démarches.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <a href="/contact">
                <Button className="bg-white hover:bg-gray-100 text-[#E8621A] rounded-full px-10 py-6 text-lg font-semibold shadow-xl inline-flex items-center gap-3">
                  Nous contacter
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/criteres">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#E8621A] rounded-full px-10 py-6 text-lg font-semibold"
                >
                  Critères d'admission
                </Button>
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
