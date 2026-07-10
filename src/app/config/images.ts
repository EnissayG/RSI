/**
 * Images : photos officielles RSI (src/imports/rsi/) + stock (public/images/stock/).
 */
import logementExterieur from '../../imports/logement-RSI-exterieur.jpg';
import historiqueBas from '../../imports/historique-bas.jpg';

import photo1LogementAbordable from '../../imports/rsi/photo1-logement-abordable.png';
import photo2VraiChezSoi from '../../imports/rsi/photo2-vrai-chez-soi.png';
import photo3VieDeQuartier from '../../imports/rsi/photo3-vie-de-quartier.png';
import photo4SalleCommune from '../../imports/rsi/photo4-salle-commune.png';

const base = import.meta.env.BASE_URL;

export function stockImage(filename: string): string {
  return `${base}images/stock/${filename}`;
}

const stock = {
  hero1: stockImage('hero-1.jpg'),
  /** Ancienne image du slide 2 carrousel (avant photos officielles) */
  heroSlide3Legacy: stockImage('hero-slide3-legacy.jpg'),
  mission2: stockImage('mission-2.jpg'),
  equitoit: stockImage('equitoit.jpg'),
  accompagnement: stockImage('accompagnement.jpg'),
  soins: stockImage('soins.jpg'),
  domestique: stockImage('domestique.jpg'),
  repas: stockImage('repas.jpg'),
  servicesIntegres: stockImage('services-integres.jpg'),
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

/** Photos officielles client (nom de fichier = source de vérité) */
export const officialPhotos = {
  photo1LogementAbordable,
  photo2VraiChezSoi,
  photo3VieDeQuartier,
  photo4SalleCommune,
} as const;

export const siteImages = {
  ...stock,
  missionChezSoi: photo2VraiChezSoi,
  missionServices: stock.mission2,
  missionVieQuartier: photo3VieDeQuartier,
  equitoitReseau: stock.equitoit,
  accompagnement24h: stock.accompagnement,
  soinsQuotidien: stock.soins,
  vieDomestique: stock.domestique,
  repasCommunautaire: stock.repas,
  salleCommunautaire: photo4SalleCommune,
  criteresAdmission: stock.criteresSection,
  inscriptionAccueil: stock.heroAdmission,
  faqAccompagnement: stock.heroFaq,
  carriereMilieu: stock.heroCarriere,
  donSolidarite: stock.heroDon,
  contactAccueil: stock.contactSection,
  contactLocation: stock.contactLocation,
  confidentialite: stock.heroConfidentialite,
  logementExterieur,
  historiqueBas,
} as const;

export const heroSlides = [
  { src: stock.hero1, alt: 'Logements adaptés et abordables', objectPosition: 'center center' },
  {
    src: photo1LogementAbordable,
    alt: 'Les logements abordables',
    objectPosition: 'center 40%',
  },
  {
    src: stock.heroSlide3Legacy,
    alt: 'Accompagnement quotidien bienveillant',
    objectPosition: 'center 35%',
  },
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
