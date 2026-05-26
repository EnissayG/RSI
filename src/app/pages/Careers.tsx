import { useState } from 'react';
import { motion } from 'motion/react';
import { Upload, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedCard } from '../components/AnimatedCard';
import { PageTransition } from '../components/PageTransition';

export function Careers() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    message: '',
  });
  const [fileName, setFileName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };
  const jobs = [
    {
      id: 1,
      tag: 'Soins',
      tagColor: 'bg-[#E8621A]',
      title: 'Préposé(e) aux bénéficiaires',
      schedule: 'Jour / Soir / Nuit',
      description:
        "Votre profession de préposé(e) aux bénéficiaires est bien plus qu'un simple travail pour vous mais plutôt une véritable vocation ? Vous aimez prendre soin des gens, créer des liens et faire une différence concrète dans leur vie au quotidien ?",
      qualifications: [
        'Loi 90 (un atout)',
        'Dévouement et sens des responsabilités',
        "Capacité d'écoute, de respect et de compassion",
        'Patience, force et résistance (physique et émotionnelle)',
      ],
    },
    {
      id: 2,
      tag: 'Cuisine',
      tagColor: 'bg-[#D4A017]',
      title: 'Cuisinier(ère)',
      schedule: 'Jour semaine / Week-end',
      description:
        "Vous n'avez pas encore trouvé la recette du bonheur au travail ? Pour vous, la cuisine, c'est du gâteau ? Venez mettre votre expérience et donner place à votre créativité !",
      responsibilities: [
        'Assurer la réalisation et la planification des mets et des repas',
        'Faire les achats de votre département',
        'Entretenir la cuisine',
        "Appliquer les règles d'hygiène et de salubrité alimentaires",
      ],
      qualifications: [
        'DEP en cuisine ou expérience équivalente (1 à 3 ans)',
        'MAPAQ (hygiène et salubrité) un atout',
        'Gestion du stress',
        'Service à la clientèle',
      ],
    },
    {
      id: 3,
      tag: 'Administration',
      tagColor: 'bg-[#8AAC2A]',
      title: 'Adjoint(e) administratif(ive)',
      schedule: 'Bureau',
      description:
        'Vous êtes la perle efficace du travail général de bureau et vous désirez vous engager dans un organisme à but non lucratif ?',
      responsibilities: [
        'Faire les dépôts',
        'Effectuer les payables et la paie',
        "Faire les achats et gérer l'inventaire",
        'Maintenir à jour les différents registres',
        'Prendre les appels, traiter le courrier et les courriels',
        'Et toutes autres tâches connexes',
      ],
      qualifications: [
        'DEC en technique de bureautique ou discipline reliée',
        'Connaissance de Word, Excel (Sage 50 un atout)',
        'Excellente qualité du français parlé et écrit',
        "Excellent sens de l'organisation",
        'Profil relationnel, autonome et capable de prendre des initiatives',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#F9F8F6] py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="inline-block px-4 py-2 bg-[#E8621A] text-white rounded-full text-sm font-medium mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Rejoignez l'équipe
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#2C2C2C]"
              style={{ fontFamily: 'var(--font-heading)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Faites carrière avec nous
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed mb-8 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Vous cherchez un milieu de travail agréable, convivial et valorisant ? N'hésitez pas et joignez-vous à la
              grande famille de RSI Propulsion. Le bonheur est ici !
            </motion.p>
            <motion.div
              className="text-base text-[#6B6B6B] mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              2075 rue Théodore · info@rsipropulsion.ca
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-8 py-6 min-h-[44px] shadow-md hover:shadow-lg transition-all text-base"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => (window.location.href = 'mailto:info@rsipropulsion.ca')}
              >
                Envoyer ma candidature
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <motion.div
                className="w-12 h-1 bg-[#E8621A] mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Postes disponibles
              </h2>
              <p className="text-lg text-[#6B6B6B] mb-12" style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}>
                Saisissez l'opportunité de contribuer au rayonnement de RSI Propulsion !
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {jobs.map((job, index) => (
                <AnimatedCard key={job.id} delay={index * 0.1}>
                  <Card className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow border-t-4 border-t-[#E8621A]">
                    <div className="mb-4">
                      <span
                        className={`inline-block px-3 py-1 ${job.tagColor} text-white rounded-full text-sm font-medium mb-3`}
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {job.tag}
                      </span>
                    </div>
                    <h3
                      className="text-2xl font-semibold mb-3 text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {job.title}
                    </h3>
                    <div className="mb-4">
                      <span
                        className="inline-block px-3 py-1 bg-gray-100 text-[#6B6B6B] rounded-full text-sm"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {job.schedule}
                      </span>
                    </div>
                    <p
                      className="text-base text-[#6B6B6B] mb-6 leading-relaxed"
                      style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                    >
                      {job.description}
                    </p>

                    {job.responsibilities && (
                      <div className="mb-6">
                        <h4
                          className="text-sm font-semibold text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Responsabilités :
                        </h4>
                        <ul className="space-y-1">
                          {job.responsibilities.map((item, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-[#6B6B6B] flex items-start gap-2"
                              style={{ fontFamily: 'var(--font-body)' }}
                            >
                              <span className="text-[#E8621A] mt-1">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#2C2C2C] mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                        Qualifications :
                      </h4>
                      <ul className="space-y-1">
                        {job.qualifications.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-[#6B6B6B] flex items-start gap-2"
                            style={{ fontFamily: 'var(--font-body)' }}
                          >
                            <span className="text-[#E8621A] mt-1">·</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg py-6 min-h-[44px] shadow-md hover:shadow-lg transition-all"
                        style={{ fontFamily: 'var(--font-body)' }}
                        onClick={() => (window.location.href = 'mailto:info@rsipropulsion.ca')}
                      >
                        Postuler maintenant
                      </Button>
                    </motion.div>
                  </Card>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="bg-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Venez constater ceci
                </h2>
                <p
                  className="text-lg text-[#6B6B6B] mb-8"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                >
                  Appelez-nous ou envoyez-nous un courriel
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-[#F9F8F6] rounded-xl"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-[#E8621A] rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                    2075 rue Théodore
                    <br />
                    Montréal (Québec) H1V 3C1
                  </p>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-[#F9F8F6] rounded-xl"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-[#D4A017] rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <a
                    href="tel:5142512525"
                    className="text-base text-[#6B6B6B] hover:text-[#E8621A] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    514.251.2525
                  </a>
                </motion.div>
                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-[#F9F8F6] rounded-xl"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-[#8AAC2A] rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <a
                    href="mailto:info@rsipropulsion.ca"
                    className="text-base text-[#6B6B6B] hover:text-[#E8621A] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    info@rsipropulsion.ca
                  </a>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CV Form Section */}
        <section className="bg-[#F9F8F6] py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2
                  className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Envoyez-nous votre CV
                </h2>
                <p
                  className="text-lg text-[#6B6B6B] max-w-2xl mx-auto"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                >
                  Même si aucun poste ne correspond à votre profil, nous sommes toujours ouverts aux candidatures
                  spontanées.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Prénom <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Nom <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Courriel <span className="text-[#E8621A]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-[#2C2C2C] mb-2"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                          style={{ fontFamily: 'var(--font-body)' }}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Position Field */}
                    <div>
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-[#2C2C2C] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Poste souhaité
                      </label>
                      <select
                        id="position"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all"
                        style={{ fontFamily: 'var(--font-body)' }}
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      >
                        <option value="">Sélectionnez un poste</option>
                        <option value="prepose">Préposé(e) aux bénéficiaires</option>
                        <option value="cuisinier">Cuisinier(ère)</option>
                        <option value="adjoint">Adjoint(e) administratif(ive)</option>
                        <option value="autre">Candidature spontanée</option>
                      </select>
                    </div>

                    {/* CV Upload */}
                    <div>
                      <label
                        htmlFor="cv"
                        className="block text-sm font-medium text-[#2C2C2C] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        CV / Curriculum Vitae <span className="text-[#E8621A]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="cv"
                          required
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="cv"
                          className="flex items-center justify-center gap-3 w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#E8621A] hover:bg-[#F9F8F6] transition-all"
                        >
                          <Upload className="w-5 h-5 text-[#E8621A]" />
                          <span className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                            {fileName || 'Cliquez pour télécharger votre CV (PDF, DOC, DOCX)'}
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-[#2C2C2C] mb-2"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all resize-none"
                        style={{ fontFamily: 'var(--font-body)' }}
                        placeholder="Parlez-nous de vous et de vos motivations..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg py-6 min-h-[44px] shadow-md hover:shadow-lg transition-all text-base font-medium"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        Envoyer ma candidature
                      </Button>
                    </motion.div>

                    <p className="text-sm text-center text-[#6B6B6B] mt-4" style={{ fontFamily: 'var(--font-body)' }}>
                      <span className="text-[#E8621A]">*</span> Champs obligatoires
                    </p>
                  </form>
                </Card>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
