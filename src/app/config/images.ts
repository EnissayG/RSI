/**
 * Images locales, public/images/stock/
 * Chaque fichier correspond à un contexte précis (voir scripts/download-stock-images.ps1).
 * Photos RSI réelles : Historique (contenu) + portraits C.A. dans Team.tsx.
 */
import logementExterieur from '../../imports/logement-RSI-exterieur.jpg';
import historiqueBas from '../../imports/historique-bas.jpg';

const base = import.meta.env.BASE_URL;

export function stockImage(filename: string): string {
  return `${base}images/stock/${filename}`;
}

const stock = {
  // Carrousel : logement RSI → accompagnement → communauté → écoute / entraide
  hero1: stockImage('hero-1.jpg'),
  hero2: stockImage('hero-2.jpg'),
  hero3: stockImage('hero-3.jpg'),
  hero4: stockImage('hero-4.jpg'),
  // Accueil, cartes mission
  mission1: stockImage('mission-1.jpg'), // Un vrai chez-soi
  mission2: stockImage('mission-2.jpg'), // Services AVQ / AVD
  mission3: stockImage('mission-3.jpg'), // Vie de quartier
  equitoit: stockImage('equitoit.jpg'), // Réseau ÉquiToît / demande logement
  accompagnement: stockImage('accompagnement.jpg'), // Soutien 24h/24
  // Services, sections
  soins: stockImage('soins.jpg'),
  domestique: stockImage('domestique.jpg'),
  repas: stockImage('repas.jpg'),
  servicesIntegres: stockImage('services-integres.jpg'),
  // Héros de page
  heroServices: stockImage('hero-services.jpg'),
  heroCriteres: stockImage('hero-criteres.jpg'),
  heroAdmission: stockImage('hero-admission.jpg'),
  heroEquipe: stockImage('hero-equipe.jpg'),
  heroHistorique: stockImage('hero-historique.jpg'),
  heroContact: stockImage('hero-contact.jpg'),
  contactSection: stockImage('contact-section.jpg'),
  contactLocation: stockImage('contact-location.jpg'),
  criteresSection: stockImage('criteres-section.jpg'),
  heroFaq: stockImage('hero-faq.jpg'),
  heroCarriere: stockImage('hero-carriere.jpg'),
  heroDon: stockImage('hero-don.jpg'),
  heroConfidentialite: stockImage('hero-confidentialite.jpg'),
} as const;

export const siteImages = {
  ...stock,
  missionChezSoi: stock.mission1,
  missionServices: stock.mission2,
  missionVieQuartier: stock.mission3,
  equitoitReseau: stock.equitoit,
  accompagnement24h: stock.accompagnement,
  soinsQuotidien: stock.soins,
  vieDomestique: stock.domestique,
  repasCommunautaire: stock.repas,
  /** Critères : logement adapté / admission */
  criteresAdmission: stock.criteresSection,
  /** Inscription : formulaire / dossier */
  inscriptionAccueil: stock.heroAdmission,
  faqAccompagnement: stock.heroFaq,
  carriereMilieu: stock.heroCarriere,
  donSolidarite: stock.heroDon,
  contactAccueil: stock.contactSection,
  contactLocation: stock.contactLocation,
  confidentialite: stock.heroConfidentialite,
  /** Photos réelles RSI, page Historique (corps de page) */
  logementExterieur,
  historiqueBas,
} as const;

export const heroSlides = [
  { src: stock.hero1, alt: 'Logements adaptés et abordables' },
  { src: stock.hero2, alt: 'Accompagnement quotidien bienveillant' },
  { src: stock.hero3, alt: 'Repas et vie en communauté' },
  { src: stock.hero4, alt: 'Ancrage dans le quartier' },
] as const;

export const pageHeroImages = {
  services: stock.heroServices,
  criteres: stock.heroCriteres,
  admission: stock.heroAdmission,
  equipe: stock.heroEquipe,
  historique: stock.heroHistorique,
  contact: stock.heroContact,
  faq: stock.heroFaq,
  carriere: stock.heroCarriere,
  don: stock.heroDon,
  confidentialite: stock.heroConfidentialite,
} as const;
