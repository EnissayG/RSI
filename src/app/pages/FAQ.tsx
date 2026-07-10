import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Phone, Mail } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { PageTransition } from '../components/PageTransition';
import { Card } from '../components/ui/card';
import {
  PageHero,
  ContentImage,
  SectionEyebrow,
  fontBody,
  fontHeading,
  sectionPad,
  pageContainer,
  sectionHeaderMb,
  headingSection,
} from '../components/layout/PageSections';
import { siteImages, pageHeroImages } from '../config/images';
import { ORGANIZATION } from '../config/organization';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqCategories = [
    {
      category: 'Admission et critères',
      color: '#E8621A',
      questions: [
        {
          question: "Quels sont les critères d'admission à RSI Propulsion ?",
          answer:
            "Pour être admissible, vous devez être âgé de 18 ans ou plus, présenter une déficience physique avec ou sans atteinte cognitive légère, être capable de vivre de façon autonome avec du soutien, et être engagé dans des activités sociales ou des études. Chaque demande est évaluée individuellement selon vos besoins spécifiques.",
        },
        {
          question: "Comment faire une demande d'admission ?",
          answer:
            "Consultez les critères sur notre site, téléchargez le formulaire d'inscription (PDF), complétez-le et retournez-le par courriel à dg@rsipropulsion.ca accompagné d'un OCCI et d'un plan de service. Tous les documents mentionnés doivent être joints afin que votre candidature soit considérée.",
        },
        {
          question: 'Qui peut habiter à RSI Propulsion ?',
          answer: ORGANIZATION.clientele,
        },
        {
          question: 'Quels documents dois-je fournir ?',
          answer: ORGANIZATION.documentsAdmission.join(' · '),
        },
        {
          question: "Combien de temps faut-il attendre après avoir soumis une demande ?",
          answer:
            "Le délai varie selon la disponibilité des logements. Nous vous contacterons dès qu'un appartement correspondant à vos besoins devient disponible. En attendant, votre dossier reste actif dans notre liste d'attente.",
        },
        {
          question: "Peut-on visiter les lieux avant de faire une demande ?",
          answer:
            "Oui, absolument ! Nous encourageons les visites. Contactez-nous pour planifier une visite guidée des installations et rencontrer notre équipe. C'est une excellente occasion de voir si RSI Propulsion correspond à vos attentes.",
        },
      ],
    },
    {
      category: 'Logements et coûts',
      color: '#D4A017',
      questions: [
        {
          question: 'Quel est le loyer mensuel ?',
          answer:
            "Le loyer représente environ 25 % de votre revenu (normes SHQ). Des frais mensuels s'ajoutent pour la nourriture, l'entretien et les frais communs. Le Programme de supplément au loyer (PSL) peut s'appliquer. Contactez-nous pour une évaluation personnalisée.",
        },
        {
          question: "Qu'est-ce qui est inclus dans le loyer ?",
          answer:
            "Le loyer inclut le logement adapté (3½), l'électricité, le chauffage, l'eau chaude, et l'accès aux espaces communs.",
        },
        {
          question: 'Comment sont les appartements ?',
          answer:
            "Chaque appartement 3½ comprend un salon, une cuisinette équipée et une chambre fermée. Les 15 logements sont adaptés aux besoins de chaque personne selon sa condition (barres d'appui, équipements spécialisés, aménagements, etc.).",
        },
        {
          question: 'Puis-je apporter mes propres meubles ?',
          answer:
            "Oui, vous pouvez meubler votre appartement selon vos goûts. C'est votre « chez-vous » et nous encourageons la personnalisation de votre espace pour que vous vous sentiez vraiment à la maison.",
        },
      ],
    },
    {
      category: 'Services et vie quotidienne',
      color: '#8AAC2A',
      questions: [
        {
          question: 'Quels services sont offerts 24/7 ?',
          answer:
            "Du personnel qualifié est présent en tout temps pour assurer votre sécurité et vous aider avec les activités de la vie quotidienne (AVQ) comme l'hygiène, l'habillage, les déplacements et la prise de médicaments. Les services d'urgence sont également disponibles 24 heures sur 24.",
        },
        {
          question: 'Les repas sont-ils fournis ?',
          answer:
            "Tous les repas sont préparés par un chef cuisinier et servis à la salle communautaire avec service aux tables. Des frais mensuels de nourriture s'appliquent. Vous disposez aussi d'une cuisinette dans votre appartement.",
        },
        {
          question: 'Y a-t-il des activités sociales organisées ?',
          answer:
            "Absolument ! Nous organisons régulièrement des activités sociales, culturelles et récréatives pour favoriser l'intégration et le maintien d'une vie sociale active. Les résidents peuvent également proposer des activités selon leurs intérêts.",
        },
        {
          question: 'Puis-je recevoir des visiteurs ?',
          answer:
            "Bien sûr ! C'est votre domicile et vous êtes libre de recevoir famille et amis. Nous disposons également d'espaces communs où vous pouvez accueillir vos visiteurs confortablement.",
        },
      ],
    },
    {
      category: 'Organisation et accès',
      color: '#D4A017',
      questions: [
        {
          question: 'Quelles sont vos heures de bureau ?',
          answer: `Administration : ${ORGANIZATION.adminHours}. Services aux locataires : 24 h/24, 7 j/7.`,
        },
        {
          question: 'Dans quels langues offrez-vous le service ?',
          answer: ORGANIZATION.languages,
        },
        {
          question: 'Dois-je habiter à Montréal pour postuler ?',
          answer: 'Non, nous acceptons les demandes de partout au Québec.',
        },
        {
          question: 'Où êtes-vous situés ?',
          answer: `${ORGANIZATION.address.full}, quartier ${ORGANIZATION.address.neighbourhood}.`,
        },
      ],
    },
    {
      category: 'Règlements et vie en communauté',
      color: '#E8621A',
      questions: [
        {
          question: 'Quelles sont les règles de vie en communauté ?',
          answer:
            "Nous valorisons le respect mutuel, la confidentialité et la bienveillance. Les règles de base visent à assurer le bien-être de tous : respect du bruit, propreté des espaces communs, et courtoisie envers les autres résidents et le personnel.",
        },
        {
          question: 'Les animaux de compagnie sont-ils acceptés ?',
          answer:
            "Cette question est évaluée au cas par cas. Contactez-nous pour discuter de votre situation particulière. Des considérations incluent la taille de l'animal, vos capacités à en prendre soin et le respect des autres résidents.",
        },
        {
          question: 'Puis-je fumer dans mon appartement ?',
          answer:
            "L'édifice est non-fumeur pour la santé et la sécurité de tous. Des espaces extérieurs désignés sont disponibles pour les fumeurs.",
        },
      ],
    },
  ];

  const allQuestions = faqCategories.flatMap((cat, catIndex) =>
    cat.questions.map((q, qIndex) => ({
      ...q,
      category: cat.category,
      color: cat.color,
      globalIndex: catIndex * 100 + qIndex,
    }))
  );

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.faq}
          imageAlt="FAQ, RSI Propulsion"
          eyebrow="Foire aux questions"
          title="Questions fréquentes"
          subtitle="Trouvez rapidement des réponses à vos questions sur l'admission, les services et la vie à RSI Propulsion"
        />

        <section className={`bg-white ${sectionPad}`}>
          <div className={`${pageContainer} grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center`}>
            <ContentImage src={siteImages.faqAccompagnement} alt="Vie à RSI Propulsion" />
            <div>
              <SectionEyebrow>À propos</SectionEyebrow>
              <p className="text-[#6B6B6B] text-lg" style={fontBody}>
                Des questions sur l'admission, les services ou la vie en résidence ? Parcourez les réponses ci-dessous ou
                contactez-nous directement.
              </p>
            </div>
          </div>
        </section>

        <section className={`${sectionPad} bg-[#F9F8F6]`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {faqCategories.map((category, catIndex) => (
              <div key={category.category} className="mb-8 sm:mb-10 md:mb-12 last:mb-0">
                <AnimatedSection>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-1 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <h2
                      className="text-2xl md:text-3xl font-bold text-[#2C2C2C]"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {category.category}
                    </h2>
                  </div>
                </AnimatedSection>

                <div className="space-y-4">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = catIndex * 100 + qIndex;
                    const isOpen = openIndex === globalIndex;

                    return (
                      <motion.div
                        key={globalIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: qIndex * 0.1 }}
                      >
                        <Card className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                          <button
                            className="w-full text-left p-4 sm:p-6 flex items-start justify-between gap-3 sm:gap-4"
                            onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          >
                            <div className="flex-1">
                              <h3
                                className="text-lg font-semibold text-[#2C2C2C] mb-1"
                                style={{ fontFamily: 'var(--font-heading)' }}
                              >
                                {item.question}
                              </h3>
                              <div
                                className="w-8 h-0.5 mt-2"
                                style={{ backgroundColor: category.color }}
                              />
                            </div>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                              className="flex-shrink-0 mt-1"
                            >
                              <ChevronDown className="w-6 h-6" style={{ color: category.color }} />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                                  <p
                                    className="text-base text-[#6B6B6B] leading-relaxed"
                                    style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                                  >
                                    {item.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className={`${sectionPad} bg-white`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <Card className="bg-gradient-to-br from-[#F9F8F6] to-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 text-center">
                <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#E8621A] mx-auto mb-4 sm:mb-6" />
                <h2 className={`${headingSection} mb-3 sm:mb-4`} style={fontHeading}>
                  Vous ne trouvez pas votre réponse ?
                </h2>
                <p
                  className="text-lg text-[#6B6B6B] mb-8 max-w-2xl mx-auto"
                  style={{ fontFamily: 'var(--font-body)', lineHeight: 1.7 }}
                >
                  Notre équipe est là pour répondre à toutes vos questions. N'hésitez pas à nous contacter par
                  téléphone ou par courriel.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="tel:5142512525"
                    className="inline-flex items-center justify-center gap-2 bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-8 py-4 font-medium shadow-md hover:shadow-lg transition-all"
                    style={{ fontFamily: 'var(--font-body)' }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    (514) 251-2525
                  </motion.a>
                  <motion.a
                    href="mailto:info@rsipropulsion.ca"
                    className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A]/5 rounded-lg px-8 py-4 font-medium transition-all"
                    style={{ fontFamily: 'var(--font-body)' }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-5 h-5" />
                    Envoyer un courriel
                  </motion.a>
                </div>
              </Card>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
