import { Heart, Home, Users, Utensils, Shield, CheckCircle, Gift, TrendingUp, HandHeart } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { PageTransition } from '../components/PageTransition';
import { WaveDivider } from '../components/WaveDivider';

export function Donate() {
  const impactAreas = [
    {
      icon: Home,
      color: '#E8621A',
      title: "Logements adaptés",
      description:
        "Vos dons permettent d'améliorer et de maintenir nos 15 appartements adaptés pour qu'ils restent confortables et sécuritaires.",
    },
    {
      icon: Utensils,
      color: '#D4A017',
      title: "Services alimentaires",
      description:
        "Contribuez à offrir des repas nutritifs préparés par notre chef cuisinier dans notre salle communautaire.",
    },
    {
      icon: Users,
      color: '#8AAC2A',
      title: "Activités communautaires",
      description:
        "Soutenez nos programmes d'activités qui favorisent l'intégration sociale et l'épanouissement de nos résidents.",
    },
    {
      icon: Shield,
      color: '#E8621A',
      title: "Services de soutien",
      description:
        "Aidez-nous à maintenir nos services de soutien 24/7 pour assurer le bien-être et la sécurité de tous nos locataires.",
    },
  ];

  const donationLevels = [
    {
      amount: '50$',
      title: "Ami",
      description: "Contribue à un repas communautaire pour tous les résidents",
      color: '#8AAC2A',
    },
    {
      amount: '100$',
      title: "Soutien",
      description: "Aide à financer une journée d'activités récréatives",
      color: '#D4A017',
    },
    {
      amount: '250$',
      title: "Partenaire",
      description: "Soutient l'entretien et les réparations des logements adaptés",
      color: '#E8621A',
    },
    {
      amount: '500$+',
      title: "Bienfaiteur",
      description: "Contribue significativement à nos programmes annuels",
      color: '#E8621A',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&q=80"
              alt="Faire un don"
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
              Soutenez RSI Propulsion
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Chaque contribution aide à créer un environnement chaleureux et inclusif
            </motion.p>
          </div>
        </section>

        <WaveDivider color="#FFFFFF" />

        {/* Impact Stats */}
        <section className="bg-white py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '15', label: "Logements adaptés", icon: Home, color: '#E8621A' },
                { number: '30+', label: "Résidents soutenus", icon: Users, color: '#D4A017' },
                { number: '35+', label: "Années d'expérience", icon: TrendingUp, color: '#8AAC2A' },
                { number: '24/7', label: "Services de soutien", icon: Shield, color: '#E8621A' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-[#F9F8F6]">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: stat.color }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <div
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{ fontFamily: 'var(--font-heading)', color: stat.color }}
                    >
                      {stat.number}
                    </div>
                    <div className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        {/* Why Donate Section */}
        <section className="bg-[#F9F8F6] py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-20">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-1 bg-[#E8621A]" />
                </div>
                <h2
                  className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  L'impact de votre générosité
                </h2>
                <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}>
                  Vos dons permettent à RSI Propulsion de continuer sa mission depuis plus de 30 ans
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {impactAreas.map((area, index) => (
                <AnimatedCard key={area.title} delay={index * 0.1}>
                  <Card className="p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow bg-white h-full border-t-4" style={{ borderTopColor: area.color }}>
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${area.color}15` }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <area.icon className="w-7 h-7" style={{ color: area.color }} />
                      </motion.div>
                      <div>
                        <h3
                          className="text-xl font-semibold mb-3 text-[#2C2C2C]"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          {area.title}
                        </h3>
                        <p className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}>
                          {area.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider flip color="#FFFFFF" />

        {/* Donation Levels */}
        <section className="bg-white py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <div className="text-center mb-20">
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-1 bg-[#E8621A]" />
                </div>
                <h2
                  className="text-5xl font-bold mb-8 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Niveaux de contribution
                </h2>
                <p className="text-xl text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}>
                  Choisissez le niveau de don qui vous convient
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {donationLevels.map((level, index) => (
                <motion.div
                  key={level.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className="p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all bg-white h-full border-t-4"
                    style={{ borderColor: level.color }}
                  >
                    <div className="text-center">
                      <motion.div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                        style={{ backgroundColor: level.color }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Gift className="w-8 h-8 text-white" />
                      </motion.div>
                      <div
                        className="text-3xl font-bold mb-2"
                        style={{ fontFamily: 'var(--font-heading)', color: level.color }}
                      >
                        {level.amount}
                      </div>
                      <h3
                        className="text-xl font-semibold mb-3 text-[#2C2C2C]"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {level.title}
                      </h3>
                      <p className="text-sm text-[#6B6B6B] mb-6" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.6 }}>
                        {level.description}
                      </p>
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          className="w-full rounded-lg py-3 text-white shadow-md hover:shadow-lg transition-all"
                          style={{ backgroundColor: level.color, fontFamily: 'var(--font-body)' }}
                        >
                          Faire un don
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        {/* Tax Benefits */}
        <section className="bg-[#F9F8F6] py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <AnimatedSection>
              <Card className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-1 bg-[#E8621A]" />
                  </div>
                  <h2
                    className="text-4xl font-bold mb-6 text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Avantages fiscaux
                  </h2>
                  <p className="text-lg text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}>
                    Vos dons à RSI Propulsion sont déductibles d'impôt
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-[#F9F8F6] rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#E8621A]" style={{ fontFamily: 'var(--font-heading)' }}>
                      Crédit fédéral
                    </h3>
                    <div className="space-y-2 text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      <p>• 15% sur les premiers 200$</p>
                      <p>• 29% sur le montant excédant 200$</p>
                    </div>
                  </div>
                  <div className="bg-[#F9F8F6] rounded-xl p-6">
                    <h3 className="text-xl font-semibold mb-4 text-[#D4A017]" style={{ fontFamily: 'var(--font-heading)' }}>
                      Crédit provincial (Québec)
                    </h3>
                    <div className="space-y-2 text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      <p>• 20% sur les premiers 200$</p>
                      <p>• 24% sur le montant excédant 200$</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#E8621A]/5 rounded-xl p-6 text-center">
                  <p className="text-base text-[#6B6B6B] mb-2" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}>
                    <strong className="text-[#2C2C2C]">No. de charité enregistré:</strong> 138775119RR0001
                  </p>
                  <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                    Un reçu officiel sera émis pour tous les dons de 20$ et plus
                  </p>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>

        <WaveDivider flip color="#E8621A" />

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
              Prêt à faire une différence ?
            </motion.h2>
            <motion.p
              className="text-xl mb-12 max-w-3xl mx-auto opacity-95"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Contactez-nous pour en savoir plus sur comment vous pouvez soutenir notre mission et nos résidents
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button
                className="bg-white hover:bg-gray-100 text-[#E8621A] rounded-full px-10 py-6 text-lg font-semibold shadow-xl"
                onClick={() => (window.location.href = 'mailto:info@rsipropulsion.ca')}
              >
                Contactez-nous
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#E8621A] rounded-full px-10 py-6 text-lg font-semibold"
                onClick={() => (window.location.href = 'tel:5142512525')}
              >
                (514) 251-2525
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
