import { useState, FormEvent, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { PageTransition } from '../components/PageTransition';
import {
  PageHero,
  fontBody,
  DocumentDownloadsRow,
  SectionEyebrow,
  ContentImage,
  sectionPad,
} from '../components/layout/PageSections';
import { DOCUMENTS } from '../config/documents';
import { siteImages, pageHeroImages } from '../config/images';

const labelClass = 'block text-sm font-semibold text-[#2C2C2C] mb-2';
const inputClass =
  'w-full px-4 py-3 bg-[#F9F8F6] border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#E8621A] focus:border-transparent transition-all';
const fontHeading = { fontFamily: 'var(--font-heading)' };

function FormLabel({ htmlFor, children, required }: { htmlFor?: string; children: ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className={labelClass} style={fontBody}>
      {children}
      {required && <span className="text-[#E8621A]"> *</span>}
    </label>
  );
}

function CheckboxRow({
  id,
  name,
  label,
  checked,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer min-h-[44px] py-1" style={fontBody}>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-4 h-4 rounded border-gray-300 text-[#E8621A] focus:ring-[#E8621A]"
      />
      <span className="text-base text-[#2C2C2C]">{label}</span>
    </label>
  );
}

function RadioRow({
  id,
  name,
  value,
  label,
  checked,
  onChange,
}: {
  id: string;
  name: string;
  value: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label htmlFor={id} className="flex items-start gap-3 cursor-pointer min-h-[44px] py-1" style={fontBody}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="mt-1 w-4 h-4 border-gray-300 text-[#E8621A] focus:ring-[#E8621A]"
      />
      <span className="text-base text-[#2C2C2C]">{label}</span>
    </label>
  );
}

export function Admission() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Section 2, residence
  const [residenceFamiliale, setResidenceFamiliale] = useState(false);
  const [residenceIntermediaire, setResidenceIntermediaire] = useState(false);
  const [residenceChsld, setResidenceChsld] = useState(false);
  const [residenceObnl, setResidenceObnl] = useState(false);
  const [residenceObnlPrecise, setResidenceObnlPrecise] = useState('');
  const [residenceAutre, setResidenceAutre] = useState(false);
  const [residenceAutrePrecise, setResidenceAutrePrecise] = useState('');

  const [mobiliteCanne, setMobiliteCanne] = useState(false);
  const [mobiliteDeambulateur, setMobiliteDeambulateur] = useState(false);
  const [mobiliteFauteuilManuel, setMobiliteFauteuilManuel] = useState(false);
  const [mobiliteFauteuilMotorise, setMobiliteFauteuilMotorise] = useState(false);
  const [mobiliteTriporteur, setMobiliteTriporteur] = useState(false);
  const [mobiliteRamq, setMobiliteRamq] = useState(false);
  const [mobiliteRamqPrecise, setMobiliteRamqPrecise] = useState('');

  const [accessibilite, setAccessibilite] = useState('');
  const [accessibiliteNonPrecise, setAccessibiliteNonPrecise] = useState('');

  // Section 3
  const [gestionnaireCas, setGestionnaireCas] = useState('');
  const [gestionnaireNom, setGestionnaireNom] = useState('');

  const [serviceClsc, setServiceClsc] = useState(false);
  const [serviceClscHeures, setServiceClscHeures] = useState('');
  const [serviceClscAgence, setServiceClscAgence] = useState(false);
  const [serviceClscAgenceHeures, setServiceClscAgenceHeures] = useState('');
  const [serviceCheque, setServiceCheque] = useState(false);
  const [serviceChequeHeures, setServiceChequeHeures] = useState('');
  const [serviceEconomie, setServiceEconomie] = useState(false);
  const [serviceEconomieHeures, setServiceEconomieHeures] = useState('');
  const [serviceProche, setServiceProche] = useState(false);
  const [serviceProchePrecise, setServiceProchePrecise] = useState('');
  const [serviceProcheHeures, setServiceProcheHeures] = useState('');

  // Section 4
  const [quartierHochelaga, setQuartierHochelaga] = useState(false);
  const [quartierNdg, setQuartierNdg] = useState(false);
  const [quartierRosemont, setQuartierRosemont] = useState(false);
  const [quartierAutre, setQuartierAutre] = useState(false);
  const [quartierAutrePrecise, setQuartierAutrePrecise] = useState('');

  const [obnlRsi, setObnlRsi] = useState('');
  const [obnlEquitoit, setObnlEquitoit] = useState('');
  const [obnlBellechasse, setObnlBellechasse] = useState('');
  const [obnlPignon, setObnlPignon] = useState('');

  const [pad, setPad] = useState('');
  const [consentPreselection, setConsentPreselection] = useState(false);
  const [consentPartage, setConsentPartage] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
      form.reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous écrire directement.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-white flex items-center justify-center px-6 py-32">
          <motion.div
            className="max-w-xl text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle className="w-20 h-20 text-[#8AAC2A] mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
              Votre demande a été envoyée.
            </h1>
            <p className="text-lg text-[#6B6B6B]" style={{ ...fontBody, lineHeight: 1.75 }}>
              Nous communiquerons avec vous dans les plus brefs délais.
            </p>
            <Button
              className="mt-8 bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 py-5"
              style={fontBody}
              onClick={() => setSubmitted(false)}
            >
              Retour au formulaire
            </Button>
          </motion.div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        <PageHero
          image={pageHeroImages.admission}
          imageAlt="Formulaire de demande d'inscription"
          title="Formulaire de demande d'inscription"
          subtitle="Ce formulaire est un outil de pré-sélection pour le réseau ÉquiToît. Votre demande est valide pour les quatre ressources, une seule soumission suffit."
        >
          <Link
            to="/criteres"
            className="text-white underline underline-offset-4 hover:text-[#FFD4B8] transition-colors text-base"
            style={fontBody}
          >
            Consulter les critères de sélection →
          </Link>
        </PageHero>

        <section className={`bg-white ${sectionPad}`}>
          <div className="max-w-[900px] mx-auto px-6">
            <SectionEyebrow>Version PDF</SectionEyebrow>
            <p className="text-[#6B6B6B] mb-6 text-center" style={fontBody}>
              Vous préférez remplir le formulaire sur papier ? Téléchargez le PDF, puis contactez-nous pour le dépôt.
            </p>
            <DocumentDownloadsRow
              documents={[
                {
                  title: DOCUMENTS.inscription.title,
                  description: DOCUMENTS.inscription.description,
                  href: DOCUMENTS.inscription.file,
                  accent: '#E8621A',
                },
              ]}
            />
          </div>
        </section>

        <section className={`bg-[#F9F8F6] ${sectionPad}`}>
          <div className="max-w-[900px] mx-auto px-6">
            <div className="mb-10 max-w-lg mx-auto">
              <ContentImage src={siteImages.inscriptionAccueil} alt="Inscription RSI Propulsion" />
            </div>
            <div className="text-center mb-12">
              <SectionEyebrow>En ligne</SectionEyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4" style={fontHeading}>
                Formulaire de demande d'inscription
              </h2>
              <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto" style={{ ...fontBody, lineHeight: 1.75 }}>
                Ce formulaire est un outil de pré-sélection. Votre demande est également valide pour les autres
                ressources du réseau ÉquiToît.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
              <form
                name="admission-inscription"
                method="POST"
                data-netlify="true"
                netlify=""
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-12"
              >
                <input type="hidden" name="form-name" value="admission-inscription" />
                <p className="hidden">
                  <label>
                    Ne pas remplir : <input name="bot-field" />
                  </label>
                </p>

                {/* Section 1 */}
                <fieldset className="space-y-6">
                  <legend className="text-2xl font-bold text-[#2C2C2C] mb-6 w-full border-b border-gray-200 pb-3" style={fontHeading}>
                    Section 1, Informations personnelles
                  </legend>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <FormLabel htmlFor="nom" required>
                        Nom
                      </FormLabel>
                      <input type="text" id="nom" name="nom" required className={inputClass} style={fontBody} />
                    </div>
                    <div>
                      <FormLabel htmlFor="prenom" required>
                        Prénom
                      </FormLabel>
                      <input type="text" id="prenom" name="prenom" required className={inputClass} style={fontBody} />
                    </div>
                  </div>

                  <div>
                    <FormLabel htmlFor="adresse" required>
                      Adresse complète
                    </FormLabel>
                    <input type="text" id="adresse" name="adresse" required className={inputClass} style={fontBody} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <FormLabel htmlFor="telephone">Téléphone</FormLabel>
                      <input type="tel" id="telephone" name="telephone" className={inputClass} style={fontBody} />
                    </div>
                    <div>
                      <FormLabel htmlFor="cellulaire">Cellulaire</FormLabel>
                      <input type="tel" id="cellulaire" name="cellulaire" className={inputClass} style={fontBody} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <FormLabel htmlFor="courriel" required>
                        Courriel
                      </FormLabel>
                      <input type="email" id="courriel" name="courriel" required className={inputClass} style={fontBody} />
                    </div>
                    <div>
                      <FormLabel htmlFor="date-naissance" required>
                        Date de naissance
                      </FormLabel>
                      <input
                        type="date"
                        id="date-naissance"
                        name="date-naissance"
                        required
                        className={inputClass}
                        style={fontBody}
                      />
                    </div>
                  </div>
                </fieldset>

                {/* Section 2 */}
                <fieldset className="space-y-6">
                  <legend className="text-2xl font-bold text-[#2C2C2C] mb-6 w-full border-b border-gray-200 pb-3" style={fontHeading}>
                    Section 2, Situation actuelle du logement
                  </legend>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Type de résidence actuelle
                    </p>
                    <div className="space-y-1">
                      <CheckboxRow
                        id="res-familiale"
                        name="residence-familiale"
                        label="Familiale (logement ou maison)"
                        checked={residenceFamiliale}
                        onChange={setResidenceFamiliale}
                      />
                      <CheckboxRow
                        id="res-intermediaire"
                        name="residence-intermediaire"
                        label="Ressource intermédiaire"
                        checked={residenceIntermediaire}
                        onChange={setResidenceIntermediaire}
                      />
                      <CheckboxRow
                        id="res-chsld"
                        name="residence-chsld"
                        label="CHSLD"
                        checked={residenceChsld}
                        onChange={setResidenceChsld}
                      />
                      <CheckboxRow
                        id="res-obnl"
                        name="residence-obnl"
                        label="OBNL d'habitation, précisez lequel"
                        checked={residenceObnl}
                        onChange={setResidenceObnl}
                      />
                      {residenceObnl && (
                        <div className="ml-7 mb-2">
                          <FormLabel htmlFor="residence-obnl-precise">Précisez l'OBNL</FormLabel>
                          <input
                            type="text"
                            id="residence-obnl-precise"
                            name="residence-obnl-precise"
                            value={residenceObnlPrecise}
                            onChange={(e) => setResidenceObnlPrecise(e.target.value)}
                            className={inputClass}
                            style={fontBody}
                          />
                        </div>
                      )}
                      <CheckboxRow
                        id="res-autre"
                        name="residence-autre"
                        label="Autre, précisez"
                        checked={residenceAutre}
                        onChange={setResidenceAutre}
                      />
                      {residenceAutre && (
                        <div className="ml-7 mb-2">
                          <FormLabel htmlFor="residence-autre-precise">Précisez</FormLabel>
                          <input
                            type="text"
                            id="residence-autre-precise"
                            name="residence-autre-precise"
                            value={residenceAutrePrecise}
                            onChange={(e) => setResidenceAutrePrecise(e.target.value)}
                            className={inputClass}
                            style={fontBody}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Aides à la mobilité actuelles
                    </p>
                    <div className="space-y-1">
                      <CheckboxRow id="mob-canne" name="mobilite-canne" label="Canne" checked={mobiliteCanne} onChange={setMobiliteCanne} />
                      <CheckboxRow
                        id="mob-deambulateur"
                        name="mobilite-deambulateur"
                        label="Déambulateur"
                        checked={mobiliteDeambulateur}
                        onChange={setMobiliteDeambulateur}
                      />
                      <CheckboxRow
                        id="mob-fm"
                        name="mobilite-fauteuil-manuel"
                        label="Fauteuil manuel"
                        checked={mobiliteFauteuilManuel}
                        onChange={setMobiliteFauteuilManuel}
                      />
                      <CheckboxRow
                        id="mob-fmotorise"
                        name="mobilite-fauteuil-motorise"
                        label="Fauteuil motorisé"
                        checked={mobiliteFauteuilMotorise}
                        onChange={setMobiliteFauteuilMotorise}
                      />
                      <CheckboxRow
                        id="mob-tri"
                        name="mobilite-triporteur"
                        label="Tri/quadriporteur"
                        checked={mobiliteTriporteur}
                        onChange={setMobiliteTriporteur}
                      />
                      <CheckboxRow
                        id="mob-ramq"
                        name="mobilite-ramq"
                        label="En attente de la RAMQ, précisez"
                        checked={mobiliteRamq}
                        onChange={setMobiliteRamq}
                      />
                      {mobiliteRamq && (
                        <div className="ml-7 mb-2">
                          <FormLabel htmlFor="mobilite-ramq-precise">Précisez</FormLabel>
                          <input
                            type="text"
                            id="mobilite-ramq-precise"
                            name="mobilite-ramq-precise"
                            value={mobiliteRamqPrecise}
                            onChange={(e) => setMobiliteRamqPrecise(e.target.value)}
                            className={inputClass}
                            style={fontBody}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Accessibilité de la résidence actuelle
                    </p>
                    <div className="space-y-1">
                      <RadioRow
                        id="acc-non"
                        name="accessibilite"
                        value="non-accessible"
                        label="Résidence non accessible, précisez"
                        checked={accessibilite === 'non-accessible'}
                        onChange={() => setAccessibilite('non-accessible')}
                      />
                      {accessibilite === 'non-accessible' && (
                        <div className="ml-7 mb-2">
                          <FormLabel htmlFor="accessibilite-non-precise">Précisez</FormLabel>
                          <input
                            type="text"
                            id="accessibilite-non-precise"
                            name="accessibilite-non-precise"
                            value={accessibiliteNonPrecise}
                            onChange={(e) => setAccessibiliteNonPrecise(e.target.value)}
                            className={inputClass}
                            style={fontBody}
                          />
                        </div>
                      )}
                      <RadioRow
                        id="acc-accessible"
                        name="accessibilite"
                        value="accessible"
                        label="Résidence accessible"
                        checked={accessibilite === 'accessible'}
                        onChange={() => setAccessibilite('accessible')}
                      />
                      <RadioRow
                        id="acc-adaptee"
                        name="accessibilite"
                        value="adaptee"
                        label="Résidence adaptée pour vous"
                        checked={accessibilite === 'adaptee'}
                        onChange={() => setAccessibilite('adaptee')}
                      />
                    </div>
                  </div>

                  <div>
                    <FormLabel htmlFor="motivation" required>
                      Qu'est-ce qui vous amène à poser votre candidature ?
                    </FormLabel>
                    <textarea
                      id="motivation"
                      name="motivation"
                      rows={5}
                      required
                      className={`${inputClass} resize-none`}
                      style={fontBody}
                    />
                  </div>
                </fieldset>

                {/* Section 3 */}
                <fieldset className="space-y-6">
                  <legend className="text-2xl font-bold text-[#2C2C2C] mb-6 w-full border-b border-gray-200 pb-3" style={fontHeading}>
                    Section 3, Besoins et services
                  </legend>

                  <div>
                    <FormLabel htmlFor="diagnostics">Diagnostics médicaux</FormLabel>
                    <textarea id="diagnostics" name="diagnostics" rows={4} className={`${inputClass} resize-none`} style={fontBody} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <FormLabel htmlFor="heures-avq">Heures AVQ par semaine</FormLabel>
                      <input type="number" id="heures-avq" name="heures-avq" min={0} className={inputClass} style={fontBody} />
                    </div>
                    <div>
                      <FormLabel htmlFor="heures-avd">Heures AVD par semaine</FormLabel>
                      <input type="number" id="heures-avd" name="heures-avd" min={0} className={inputClass} style={fontBody} />
                    </div>
                    <div>
                      <FormLabel htmlFor="heures-soins">Soins infirmiers par semaine</FormLabel>
                      <input type="number" id="heures-soins" name="heures-soins" min={0} className={inputClass} style={fontBody} />
                    </div>
                  </div>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Gestionnaire de cas au CLSC
                    </p>
                    <div className="flex gap-6 mb-4">
                      <RadioRow
                        id="gestionnaire-oui"
                        name="gestionnaire-cas"
                        value="oui"
                        label="Oui"
                        checked={gestionnaireCas === 'oui'}
                        onChange={() => setGestionnaireCas('oui')}
                      />
                      <RadioRow
                        id="gestionnaire-non"
                        name="gestionnaire-cas"
                        value="non"
                        label="Non"
                        checked={gestionnaireCas === 'non'}
                        onChange={() => setGestionnaireCas('non')}
                      />
                    </div>
                    {gestionnaireCas === 'oui' && (
                      <div>
                        <FormLabel htmlFor="gestionnaire-coordonnees">
                          Nom, téléphone et courriel du gestionnaire
                        </FormLabel>
                        <input
                          type="text"
                          id="gestionnaire-coordonnees"
                          name="gestionnaire-coordonnees"
                          value={gestionnaireNom}
                          onChange={(e) => setGestionnaireNom(e.target.value)}
                          className={inputClass}
                          style={fontBody}
                        />
                      </div>
                    )}
                  </div>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Services actuels, qui dispense et combien d'heures
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <CheckboxRow
                          id="svc-clsc"
                          name="service-clsc"
                          label="CLSC directement"
                          checked={serviceClsc}
                          onChange={setServiceClsc}
                        />
                        {serviceClsc && (
                          <div className="flex items-center gap-2">
                            <label htmlFor="service-clsc-heures" className="text-sm text-[#6B6B6B]" style={fontBody}>
                              Heures :
                            </label>
                            <input
                              type="number"
                              id="service-clsc-heures"
                              name="service-clsc-heures"
                              min={0}
                              value={serviceClscHeures}
                              onChange={(e) => setServiceClscHeures(e.target.value)}
                              className="w-24 px-3 py-2 border border-gray-200 rounded-lg"
                              style={fontBody}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <CheckboxRow
                          id="svc-clsc-agence"
                          name="service-clsc-agence"
                          label="CLSC via agence privée"
                          checked={serviceClscAgence}
                          onChange={setServiceClscAgence}
                        />
                        {serviceClscAgence && (
                          <div className="flex items-center gap-2">
                            <label htmlFor="service-clsc-agence-heures" className="text-sm text-[#6B6B6B]" style={fontBody}>
                              Heures :
                            </label>
                            <input
                              type="number"
                              id="service-clsc-agence-heures"
                              name="service-clsc-agence-heures"
                              min={0}
                              value={serviceClscAgenceHeures}
                              onChange={(e) => setServiceClscAgenceHeures(e.target.value)}
                              className="w-24 px-3 py-2 border border-gray-200 rounded-lg"
                              style={fontBody}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <CheckboxRow
                          id="svc-cheque"
                          name="service-cheque-emploi"
                          label="Employé chèque emploi-service"
                          checked={serviceCheque}
                          onChange={setServiceCheque}
                        />
                        {serviceCheque && (
                          <div className="flex items-center gap-2">
                            <label htmlFor="service-cheque-heures" className="text-sm text-[#6B6B6B]" style={fontBody}>
                              Heures :
                            </label>
                            <input
                              type="number"
                              id="service-cheque-heures"
                              name="service-cheque-heures"
                              min={0}
                              value={serviceChequeHeures}
                              onChange={(e) => setServiceChequeHeures(e.target.value)}
                              className="w-24 px-3 py-2 border border-gray-200 rounded-lg"
                              style={fontBody}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4">
                        <CheckboxRow
                          id="svc-economie"
                          name="service-economie-sociale"
                          label="Entreprise d'économie sociale"
                          checked={serviceEconomie}
                          onChange={setServiceEconomie}
                        />
                        {serviceEconomie && (
                          <div className="flex items-center gap-2">
                            <label htmlFor="service-economie-heures" className="text-sm text-[#6B6B6B]" style={fontBody}>
                              Heures :
                            </label>
                            <input
                              type="number"
                              id="service-economie-heures"
                              name="service-economie-heures"
                              min={0}
                              value={serviceEconomieHeures}
                              onChange={(e) => setServiceEconomieHeures(e.target.value)}
                              className="w-24 px-3 py-2 border border-gray-200 rounded-lg"
                              style={fontBody}
                            />
                          </div>
                        )}
                      </div>
                      <div>
                        <CheckboxRow
                          id="svc-proche"
                          name="service-proche-aidant"
                          label="Proche aidant, précisez"
                          checked={serviceProche}
                          onChange={setServiceProche}
                        />
                        {serviceProche && (
                          <div className="ml-7 mt-2 space-y-2">
                            <div>
                              <FormLabel htmlFor="service-proche-precise">Précisez</FormLabel>
                              <input
                                type="text"
                                id="service-proche-precise"
                                name="service-proche-precise"
                                value={serviceProchePrecise}
                                onChange={(e) => setServiceProchePrecise(e.target.value)}
                                className={inputClass}
                                style={fontBody}
                              />
                            </div>
                            <div className="flex items-center gap-2">
                              <label htmlFor="service-proche-heures" className="text-sm text-[#6B6B6B]" style={fontBody}>
                                Heures :
                              </label>
                              <input
                                type="number"
                                id="service-proche-heures"
                                name="service-proche-heures"
                                min={0}
                                value={serviceProcheHeures}
                                onChange={(e) => setServiceProcheHeures(e.target.value)}
                                className="w-24 px-3 py-2 border border-gray-200 rounded-lg"
                                style={fontBody}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Nombre de personnes qui vivraient avec vous
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <FormLabel htmlFor="personnes-adultes">Adultes</FormLabel>
                        <input
                          type="number"
                          id="personnes-adultes"
                          name="personnes-adultes"
                          min={0}
                          className={inputClass}
                          style={fontBody}
                        />
                      </div>
                      <div>
                        <FormLabel htmlFor="personnes-enfants">Enfants moins de 18 ans</FormLabel>
                        <input
                          type="number"
                          id="personnes-enfants"
                          name="personnes-enfants"
                          min={0}
                          className={inputClass}
                          style={fontBody}
                        />
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-[#6B6B6B] flex items-start gap-2" style={fontBody}>
                      <AlertCircle className="w-4 h-4 text-[#E8621A] flex-shrink-0 mt-0.5" />
                      Chez RSI Propulsion, les logements sont pour les personnes seules seulement.
                    </p>
                  </div>
                </fieldset>

                {/* Section 4 */}
                <fieldset className="space-y-6">
                  <legend className="text-2xl font-bold text-[#2C2C2C] mb-6 w-full border-b border-gray-200 pb-3" style={fontHeading}>
                    Section 4, Informations additionnelles
                  </legend>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Quartier souhaité
                    </p>
                    <div className="space-y-1">
                      <CheckboxRow
                        id="q-hochelaga"
                        name="quartier-hochelaga"
                        label="Hochelaga-Maisonneuve"
                        checked={quartierHochelaga}
                        onChange={setQuartierHochelaga}
                      />
                      <CheckboxRow
                        id="q-ndg"
                        name="quartier-ndg"
                        label="Notre-Dame-de-Grâce"
                        checked={quartierNdg}
                        onChange={setQuartierNdg}
                      />
                      <CheckboxRow
                        id="q-rosemont"
                        name="quartier-rosemont"
                        label="Rosemont"
                        checked={quartierRosemont}
                        onChange={setQuartierRosemont}
                      />
                      <CheckboxRow
                        id="q-autre"
                        name="quartier-autre"
                        label="Autre, précisez"
                        checked={quartierAutre}
                        onChange={setQuartierAutre}
                      />
                      {quartierAutre && (
                        <div className="ml-7 mb-2">
                          <FormLabel htmlFor="quartier-autre-precise">Précisez</FormLabel>
                          <input
                            type="text"
                            id="quartier-autre-precise"
                            name="quartier-autre-precise"
                            value={quartierAutrePrecise}
                            onChange={(e) => setQuartierAutrePrecise(e.target.value)}
                            className={inputClass}
                            style={fontBody}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      OBNL souhaitée en ordre de priorité (1 à 4)
                    </p>
                    <div className="space-y-4">
                      {[
                        { id: 'obnl-rsi', label: 'RSI Propulsion', value: obnlRsi, set: setObnlRsi, name: 'obnl-rsi-priorite' },
                        { id: 'obnl-equitoit', label: 'ÉquiToît - NDG', value: obnlEquitoit, set: setObnlEquitoit, name: 'obnl-equitoit-priorite' },
                        { id: 'obnl-bellechasse', label: 'Espace Bellechasse', value: obnlBellechasse, set: setObnlBellechasse, name: 'obnl-bellechasse-priorite' },
                        { id: 'obnl-pignon', label: 'Habitations Pignon sur Roues', value: obnlPignon, set: setObnlPignon, name: 'obnl-pignon-priorite' },
                      ].map((obnl) => (
                        <div key={obnl.id} className="flex flex-wrap items-center gap-4">
                          <label className="flex items-center gap-3 min-w-[240px]" style={fontBody}>
                            <input
                              type="checkbox"
                              checked={obnl.value !== ''}
                              onChange={(e) => {
                                obnl.set(e.target.checked ? '1' : '');
                              }}
                              className="w-4 h-4 rounded border-gray-300 text-[#E8621A] focus:ring-[#E8621A]"
                            />
                            <span className="text-base text-[#2C2C2C]">{obnl.label}</span>
                          </label>
                          {obnl.value !== '' && (
                            <div className="flex items-center gap-2">
                              <label htmlFor={obnl.id} className="text-sm text-[#6B6B6B]" style={fontBody}>
                                Priorité :
                              </label>
                              <input
                                type="number"
                                id={obnl.id}
                                name={obnl.name}
                                min={1}
                                max={4}
                                value={obnl.value}
                                onChange={(e) => obnl.set(e.target.value)}
                                className="w-20 px-3 py-2 border border-gray-200 rounded-lg"
                                style={fontBody}
                                placeholder="1-4"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <FormLabel htmlFor="revenu-familial">Revenu familial annuel</FormLabel>
                    <input type="number" id="revenu-familial" name="revenu-familial" min={0} className={inputClass} style={fontBody} />
                  </div>

                  <div>
                    <p className={`${labelClass} mb-3`} style={fontBody}>
                      Programme d'adaptation de domicile PAD
                    </p>
                    <div className="space-y-1">
                      <RadioRow
                        id="pad-aucune"
                        name="pad"
                        value="aucune-demande"
                        label="Aucune demande faite"
                        checked={pad === 'aucune-demande'}
                        onChange={() => setPad('aucune-demande')}
                      />
                      <RadioRow
                        id="pad-attente"
                        name="pad"
                        value="en-attente"
                        label="En attente / accordé non utilisé"
                        checked={pad === 'en-attente'}
                        onChange={() => setPad('en-attente')}
                      />
                      <RadioRow
                        id="pad-utilise"
                        name="pad"
                        value="utilise-moins-5-ans"
                        label="Programme utilisé il y a moins de 5 ans"
                        checked={pad === 'utilise-moins-5-ans'}
                        onChange={() => setPad('utilise-moins-5-ans')}
                      />
                    </div>
                  </div>

                  <div>
                    <FormLabel htmlFor="autres-elements">Autres éléments à nous faire part</FormLabel>
                    <textarea id="autres-elements" name="autres-elements" rows={4} className={`${inputClass} resize-none`} style={fontBody} />
                  </div>
                </fieldset>

                {/* Submit */}
                <div className="space-y-6 border-t border-gray-200 pt-8">
                  <label htmlFor="consent-preselection" className="flex items-start gap-3 cursor-pointer min-h-[44px]" style={fontBody}>
                    <input
                      type="checkbox"
                      id="consent-preselection"
                      name="consent-preselection"
                      value="oui"
                      required
                      checked={consentPreselection}
                      onChange={(e) => setConsentPreselection(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#E8621A] focus:ring-[#E8621A]"
                    />
                    <span className="text-base text-[#2C2C2C]">
                      Je comprends que ce formulaire est un outil de pré-sélection et que mon dossier fera l'objet
                      d'une évaluation complète incluant l'OCCI et une entrevue de sélection.
                    </span>
                  </label>

                  <label htmlFor="consent-partage" className="flex items-start gap-3 cursor-pointer min-h-[44px]" style={fontBody}>
                    <input
                      type="checkbox"
                      id="consent-partage"
                      name="consent-partage"
                      value="oui"
                      required
                      checked={consentPartage}
                      onChange={(e) => setConsentPartage(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#E8621A] focus:ring-[#E8621A]"
                    />
                    <span className="text-base text-[#2C2C2C]">
                      J'autorise RSI Propulsion à communiquer mon dossier aux autres ressources que j'ai indiquées
                      ci-dessus.
                    </span>
                  </label>

                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    style={fontBody}
                  >
                    <Send className="w-5 h-5" />
                    {submitting ? 'Envoi en cours...' : "Envoyer ma demande d'inscription"}
                  </Button>
                </div>
              </form>
            </div>

            {/* Info box */}
            <div className="mt-10 p-6 rounded-xl border-2 border-[#E8621A] bg-[#FFF8F3]">
              <p className="text-base text-[#2C2C2C]" style={{ ...fontBody, lineHeight: 1.75 }}>
                Veuillez noter que ce formulaire est un outil de pré-sélection. L'évaluation complète de votre dossier
                exigera l'étude de l'OCCI, votre Plan de services, et une entrevue de sélection.
                <br />
                <br />
                Retournez ce formulaire par courriel à :{' '}
                <a href="mailto:info@rsipropulsion.ca" className="text-[#E8621A] hover:underline font-semibold">
                  info@rsipropulsion.ca
                </a>
                {/* TODO: confirm email address with client */}
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
