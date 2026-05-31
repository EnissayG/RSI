import { publicUrl } from './assets';

/**
 * PDF hébergés dans public/documents/ (copiés tels quels dans dist/ au build).
 * Sur Netlify : déposez vos fichiers dans public/documents/ puis redéployez.
 */
export const DOCUMENTS = {
  criteres: {
    file: publicUrl('documents/informations-criteres-selection.pdf'),
    title: 'Informations et critères de sélection',
    description: 'Document officiel PDF, critères, coûts et services (réseau ÉquiToît).',
  },
  inscription: {
    file: publicUrl('documents/formulaire-inscription.pdf'),
    title: "Formulaire d'inscription",
    description: 'Version PDF du formulaire (vous pouvez aussi remplir le formulaire en ligne).',
  },
} as const;
