import { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock, Bus } from 'lucide-react';
import { Button } from '../components/ui/button';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { PageHero, SectionEyebrow, fontBody, fontHeading, sectionPad } from '../components/layout/PageSections';
import { siteImages, pageHeroImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';
import { GoogleMapEmbed } from '../components/GoogleMapEmbed';

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
        <PageHero
          image={pageHeroImages.contact}
          imageAlt="Contact RSI Propulsion"
          title="Contactez-nous"
          subtitle={`${ORGANIZATION.shortName}, ${ORGANIZATION.address.neighbourhood}. Nous répondons à vos questions sur l'admission, les services et les visites.`}
        />

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <AnimatedSection>
                  <SectionEyebrow>Nous joindre</SectionEyebrow>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2C2C2C]" style={fontHeading}>
                    Parlons ensemble
                  </h2>
                  <p className="text-lg text-[#6B6B6B] mb-8" style={fontBody}>
                    Pour une demande d'admission, une visite des lieux, un emploi ou toute question sur la vie en
                    résidence, contactez notre équipe. Les demandes d'admission se font aussi via le{' '}
                    <a href="/admission" className="text-[#E8621A] font-semibold hover:underline">
                      formulaire en ligne
                    </a>
                    .
                  </p>

                  <div className="space-y-5 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-6 h-6 text-[#E8621A]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={fontBody}>
                          Adresse
                        </p>
                        <p className="text-[#6B6B6B]" style={fontBody}>
                          {ORGANIZATION.address.full}
                          <br />
                          <span className="text-sm">{ORGANIZATION.address.neighbourhood}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#D4A017]/10 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-[#D4A017]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={fontBody}>
                          Téléphone
                        </p>
                        <a
                          href={ORGANIZATION.phoneTel}
                          className="text-lg text-[#6B6B6B] hover:text-[#E8621A] font-semibold"
                          style={fontBody}
                        >
                          {ORGANIZATION.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#8AAC2A]/10 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-[#8AAC2A]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={fontBody}>
                          Courriel
                        </p>
                        <a
                          href={`mailto:${ORGANIZATION.email}`}
                          className="text-[#6B6B6B] hover:text-[#E8621A]"
                          style={fontBody}
                        >
                          {ORGANIZATION.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#E8621A]/10 flex items-center justify-center shrink-0">
                        <Clock className="w-6 h-6 text-[#E8621A]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={fontBody}>
                          Heures, administration
                        </p>
                        <p className="text-[#6B6B6B]" style={fontBody}>
                          {ORGANIZATION.adminHours}
                        </p>
                        <p className="text-sm text-[#6B6B6B] mt-1" style={fontBody}>
                          Services aux locataires : présence 24 h/24, 7 j/7
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#D4A017]/10 flex items-center justify-center shrink-0">
                        <Bus className="w-6 h-6 text-[#D4A017]" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[#2C2C2C] mb-1" style={fontBody}>
                          Accès
                        </p>
                        <p className="text-[#6B6B6B] text-sm" style={fontBody}>
                          Quartier bien desservi par les transports en commun (STM). Station et lignes à proximité
                          selon la saison, planifiez votre visite avec nous.
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div>
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                  <h3 className="text-2xl font-bold mb-6 text-[#2C2C2C]" style={fontHeading}>
                    Envoyez-nous un message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                          Prénom <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                          style={fontBody}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                          Nom <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                          style={fontBody}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                          Courriel <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                          style={fontBody}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                          style={fontBody}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                        Sujet <span className="text-[#E8621A]">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        required
                        className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A]"
                        style={fontBody}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#2C2C2C] mb-2" style={fontBody}>
                        Message <span className="text-[#E8621A]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        required
                        className="w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] resize-none"
                        style={fontBody}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full py-6 text-lg font-semibold flex items-center justify-center gap-3"
                      style={fontBody}
                    >
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`bg-white ${sectionPad}`}>
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-12">
              <div>
                <SectionEyebrow>Localisation</SectionEyebrow>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
                  Nous trouver
                </h2>
                <p className="text-[#6B6B6B] mb-4" style={fontBody}>
                  {ORGANIZATION.address.full}
                  <br />
                  {ORGANIZATION.address.neighbourhood}
                </p>
                <p className="text-sm text-[#6B6B6B] mb-2" style={fontBody}>
                  <strong className="text-[#2C2C2C]">Heures administratives :</strong> {ORGANIZATION.adminHours}
                </p>
                <p className="text-sm text-[#6B6B6B]" style={fontBody}>
                  Quartier bien desservi par les transports en commun (STM).
                </p>
                <a
                  href={ORGANIZATION.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-[#E8621A] font-semibold hover:underline"
                  style={fontBody}
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] max-h-[320px]">
                <img
                  src={siteImages.contactLocation}
                  alt="Bâtiment RSI Propulsion, 2075 rue Théodore"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <GoogleMapEmbed />
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
