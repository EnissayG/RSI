export type HistoryMilestone = {
  id: string;
  year: string;
  yearLabel?: string;
  title: string;
  body: string;
  accent: '#E8621A' | '#D4A017' | '#8AAC2A';
  highlight?: boolean;
};

export const HISTORY_ORIGIN = `C'est dans le but de rendre disponible un milieu d'hébergement adapté aux besoins de personnes en situation d'handicap, leur permettant de maintenir leur autonomie fonctionnelle et de favoriser leur intégration dans la communauté, que le Regroupement de services intégrés Propulsion inc. a vu le jour.`;

export const HISTORY_MILESTONES: HistoryMilestone[] = [
  {
    id: '1990',
    year: '1990',
    title: 'Création du Regroupement de services intégrés Propulsion inc.',
    accent: '#E8621A',
    body: `C'est l'année de naissance du Regroupement de services intégrés Propulsion inc. Les lettres patentes, confirmant le statut d'organisme à but non lucratif, sont obtenues la même année.

Il ne faut pas passer sous silence l'apport extraordinaire du Centre de réadaptation Constance-Lethbridge, duquel émane le projet du RSI Propulsion. Il faut reconnaître également la contribution exceptionnelle du CHSLD centre-ville de Montréal ainsi que du Centre de réadaptation Lucie-Bruneau.`,
  },
  {
    id: '1993',
    year: '1993',
    title: 'Le vrai projet débute',
    accent: '#D4A017',
    body: `C'est vrai, le projet de construction résidentielle présenté à la Société d'Habitation du Québec (SHQ) et au ministre de la Santé et des Services sociaux est accepté. Ce sont donc 15 logements accessibles, assortis de services de soutien qui se réalisent.`,
  },
  {
    id: '1994',
    year: '1994',
    title: 'On débute la construction',
    accent: '#8AAC2A',
    body: 'On débute la construction des 15 logements adaptés et des espaces de vie communautaires.',
  },
  {
    id: '1995',
    year: '1995',
    title: 'La construction est terminée',
    accent: '#E8621A',
    body: `La construction étant terminée, RSI Propulsion accueille ses locataires. Ces derniers pourront bénéficier d'un « Chez-moi » adapté tout en recevant des services d'aide à la vie quotidienne et à la vie domestique que requiert leur condition.`,
  },
  {
    id: '2007',
    year: '2007',
    title: 'Le projet de recherche',
    accent: '#D4A017',
    body: `RSI Propulsion, en collaboration avec l'Université du Québec à Trois-Rivières, participe à un projet de recherche sur la participation sociale et les temps sociaux. Le projet « métro, boulot, dodo et le temps social » a été réalisé en septembre 2007 sous la gouverne de Monsieur Ghyslain Parent, Ph.D., Madame France Beaumier, M.A., Madame Anne Boulanger, coordonnatrice de RSI Propulsion et Monsieur Patrick Desjardins, locataire. Sept recommandations ont été retenues à la suite des résultats obtenus.`,
  },
  {
    id: '2011-home-depot',
    year: '2011',
    title: 'Concours Home Dépôt',
    accent: '#8AAC2A',
    body: `RSI Propulsion gagne un concours! La Fondation Home Dépôt Canada organise le concours « Rénover sa communauté ». RSIP remporte les travaux de rénovation des espaces communautaires dont la cuisine.`,
  },
  {
    id: '2011-festin',
    year: '2011',
    yearLabel: '2011 · suite',
    title: 'Festin de la Saint-Hubert',
    accent: '#E8621A',
    body: `Toujours en 2011, RSI Propulsion participait au « Festin de la Saint-Hubert » pour une importante collecte de fonds qui a permis à RSI Propulsion de poursuivre son développement.`,
  },
  {
    id: 'now',
    year: 'Maintenant',
    title: 'On poursuit notre mission',
    accent: '#8AAC2A',
    highlight: true,
    body: `Depuis ce jour, RSI Propulsion poursuit sa mission. Le projet, qui était considéré comme un projet pilote à ce moment, a su montrer sa pertinence et le besoin de continuité dans le développement de ressources de ce type. Quoi de plus inspirant que de voir des personnes, vivant en situation de handicap, s'épanouir dans un milieu de vie adapté à leurs besoins.`,
  },
];
