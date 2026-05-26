import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { WaveDivider } from '../components/WaveDivider';

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
              alt="Contact RSI Propulsion"
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
              Contactez-nous
            </motion.h1>
            <motion.p
              className="text-xl text-white max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Notre équipe est là pour répondre à vos questions
            </motion.p>
          </div>
        </section>

        <WaveDivider color="#F9F8F6" />

        {/* Contact Form Section - 2 Column Layout */}
        <section className="bg-[#F9F8F6] py-32">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Contact Info */}
              <div>
                <AnimatedSection>
                  <div className="mb-8">
                    <div className="w-12 h-1 bg-[#E8621A] mb-6" />
                    <h2
                      className="text-4xl font-bold mb-6 text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      Parlons ensemble
                    </h2>
                    <p
                      className="text-lg text-[#6B6B6B] mb-10"
                      style={{ fontFamily: 'var(--font-body)', lineHeight: 1.75 }}
                    >
                      Notre équipe est là pour vous répondre et vous accompagner dans vos démarches d'admission ou toute
                      autre question concernant nos services.
                    </p>
                  </div>

                  {/* Contact Details - Compact */}
                  <div className="space-y-5 mb-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#E8621A]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[#E8621A]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                          Adresse
                        </p>
                        <p className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                          2075 rue Théodore
                          <br />
                          Montréal (Québec) H1V 3C1
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#D4A017]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-[#D4A017]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                          Téléphone
                        </p>
                        <a
                          href="tel:5142512525"
                          className="text-base text-[#6B6B6B] hover:text-[#E8621A] transition-colors"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          (514) 251-2525
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#8AAC2A]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[#8AAC2A]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                          Courriel
                        </p>
                        <a
                          href="mailto:info@rsipropulsion.ca"
                          className="text-base text-[#6B6B6B] hover:text-[#E8621A] transition-colors"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          info@rsipropulsion.ca
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Response Time Note */}
                  <div className="flex items-start gap-3 p-5 bg-white rounded-xl border-l-4 border-[#E8621A]">
                    <Clock className="w-5 h-5 text-[#E8621A] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                      Notre équipe répond sous <strong className="text-[#2C2C2C]">24–48 heures ouvrables</strong>
                    </p>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-2xl shadow-lg p-10">
                  <h3
                    className="text-2xl font-bold mb-8 text-[#2C2C2C]"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Envoyez-nous un message
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Prénom <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Nom <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-semibold text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Courriel <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-semibold text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-[#2C2C2C] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Sujet <span className="text-[#E8621A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                        style={{ fontFamily: 'var(--font-body)' }}
                        placeholder="Ex: Demande d'information sur les services"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[#2C2C2C] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Message <span className="text-[#E8621A]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all resize-none"
                        style={{ fontFamily: 'var(--font-body)' }}
                        placeholder="Décrivez votre demande en détail..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </Button>

                    <p className="text-sm text-center text-[#6B6B6B] mt-4" style={{ fontFamily: 'var(--font-body)' }}>
                      <span className="text-[#E8621A]">*</span> Champs obligatoires
                    </p>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <WaveDivider flip color="#FFFFFF" />

        {/* Map Section */}
        <section className="bg-white py-20">
          <div className="w-full h-[400px] bg-gray-100 relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#E8621A] mx-auto mb-4" />
                <p className="text-lg text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                  2075 rue Théodore, Montréal (Québec) H1V 3C1
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
