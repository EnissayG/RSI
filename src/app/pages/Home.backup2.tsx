import { Link } from 'react-router';
import { Home as HomeIcon, Heart, Users, Check, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { PageTransition } from '../components/PageTransition';
import { HeroCarousel } from '../components/HeroCarousel';

export function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Carrousel d'images */}
          <HeroCarousel />

          {/* Hero Content */}
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                Un milieu de vie adapté, chaleureux et inclusif
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                15 logements abordables à Hochelaga-Maisonneuve pour personnes en situation de handicap physique
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
              >
                <Link to="/admission">
                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-8 py-6 text-lg min-h-[44px] min-w-[44px] shadow-lg hover:shadow-xl transition-all"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Formulaire d'admission
                    </Button>
                  </motion.div>
                </Link>
                <a href="#mission">
                  <motion.div
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/20 rounded-lg px-8 py-6 text-lg min-h-[44px] min-w-[44px] backdrop-blur-sm transition-all"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      En savoir plus
                    </Button>
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 1 },
              y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-2 bg-white rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Mission Strip */}
        <section id="mission" className="bg-[#F9F8F6] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: HomeIcon, color: '#8AAC2A', title: 'Logements adaptés et abordables' },
                { icon: Users, color: '#E8621A', title: 'Services de vie quotidienne (AVQ/AVD)' },
                { icon: Heart, color: '#D4A017', title: 'Milieu de vie normalisant et inclusif' },
              ].map((item, index) => (
                <AnimatedCard key={index} delay={index} className="text-center" hoverScale={false}>
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-md"
                    style={{ backgroundColor: item.color }}
                    whileHover={{ scale: 1.1, rotate: 8, transition: { duration: 0.3, ease: [0.68, -0.55, 0.265, 1.55] } }}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3
                    className="text-xl font-semibold mb-2 text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {item.title}
                  </h3>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="right">
                <motion.div
                  className="w-12 h-1 bg-[#E8621A] mb-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Nos services
                </h2>
                <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  RSI Propulsion offre un accompagnement personnalisé dans les activités de la vie quotidienne (AVQ) et
                  les activités de la vie domestique (AVD). Notre équipe dévouée soutient les résidents dans leur
                  autonomie tout en respectant leur dignité et leurs choix.
                </p>
                <p className="text-lg text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  Nous créons un environnement chaleureux où chaque personne peut s'épanouir, participer à la vie
                  communautaire et maintenir des liens sociaux significatifs.
                </p>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2}>
                <motion.div
                  className="bg-gray-300 rounded-xl h-80 flex items-center justify-center overflow-hidden shadow-lg"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                  }}
                  aria-label="Communal dining room"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                    Salle à manger communautaire
                  </span>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Admission Section */}
        <section className="bg-[#F9F8F6] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedCard hoverScale={false}>
              <Card className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <motion.div
                  className="w-12 h-1 bg-[#E8621A] mb-4"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <h2
                  className="text-3xl md:text-4xl font-bold mb-8 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Critères et formulaire d'admission
                </h2>
                <div className="space-y-4 mb-8">
                  {[
                    '15 unités 3½ avec salon, cuisinette, chambre et salle de bain adaptée',
                    'Bâtiment entièrement accessible et adapté',
                    'Déficience physique avec ou sans atteinte cognitive légère',
                    'Engagement social, communautaire ou aux études',
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <motion.div
                        className="w-6 h-6 rounded-full bg-[#E8621A] flex items-center justify-center flex-shrink-0 mt-1 shadow-sm"
                        whileHover={{ scale: 1.15, rotate: 360, transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] } }}
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.div>
                      <p className="text-lg text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                        {text}
                      </p>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/admission" className="flex-1">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg py-6 min-h-[44px] shadow-md hover:shadow-lg transition-shadow"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Formulaire d'admission
                      </Button>
                    </motion.div>
                  </Link>
                  <Link to="/criteres" className="flex-1">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A]/10 rounded-lg py-6 min-h-[44px] transition-all"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Voir les critères
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </Card>
            </AnimatedCard>
          </div>
        </section>

        {/* Journal Section */}
        <section className="bg-[#F9F8F6] py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <motion.div
                  className="w-12 h-1 bg-[#E8621A] mb-4 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Le journal de nos locataires
                </h2>
                <p className="text-xl text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                  Découvrez la vie chez RSI Propulsion à travers les yeux de ceux qui y habitent
                </p>
              </div>
            </AnimatedSection>
            <AnimatedCard delay={0.2}>
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <motion.div
                  className="bg-gray-300 h-64 flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                  }}
                  aria-label="Journal cover image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>
                    Journal des locataires
                  </span>
                </motion.div>
                <div className="p-8">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A]/10 rounded-lg py-6 min-h-[44px] flex items-center justify-center gap-2 transition-all group-hover:shadow-md"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <ExternalLink className="w-5 h-5" />
                      Consulter en ligne
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </AnimatedCard>
          </div>
        </section>

        {/* Donation Banner */}
        <AnimatedSection>
          <section className="bg-[#E8621A] py-16 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                style={{ fontFamily: 'var(--font-heading)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Contribuez à notre mission
              </motion.h2>
              <motion.p
                className="text-xl text-white mb-8 leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Votre don aide des personnes en situation de handicap à vivre dignement et en autonomie
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link to="/faire-un-don">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      className="bg-white hover:bg-gray-100 text-[#2C2C2C] rounded-lg px-8 py-6 text-lg min-h-[44px] min-w-[44px] shadow-xl hover:shadow-2xl transition-all"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Faire un don via PayPal
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>

        {/* Contact Section */}
        <section className="bg-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <motion.div
                  className="w-12 h-1 bg-[#E8621A] mb-4 mx-auto"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                />
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Vous avez des questions ?
                </h2>
              </div>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <AnimatedSection direction="right">
                <h3 className="text-xl font-semibold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Coordonnées
                </h3>
                <div className="space-y-3 text-lg text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                  <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <strong className="text-[#2C2C2C]">Téléphone:</strong> (514) 251-2525
                  </motion.p>
                  <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <strong className="text-[#2C2C2C]">Courriel:</strong> info@rsipropulsion.ca
                  </motion.p>
                  <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <strong className="text-[#2C2C2C]">Adresse:</strong> Montréal (Québec) H1V 3C1
                  </motion.p>
                </div>
              </AnimatedSection>
              <AnimatedSection direction="left" delay={0.2}>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-[#2C2C2C]">
                      Nom
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A] min-h-[44px] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[#2C2C2C]">
                      Courriel
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A] min-h-[44px] transition-all"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-[#2C2C2C]">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A] transition-all"
                      required
                    />
                  </div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg py-6 min-h-[44px] shadow-md hover:shadow-lg transition-all"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Envoyer
                    </Button>
                  </motion.div>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
