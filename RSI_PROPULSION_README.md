# RSI Propulsion - Site Web Officiel

Site web moderne et accessible pour RSI Propulsion (Le Regroupement de Services Intégrés Propulsion), une organisation montréalaise offrant des logements adaptés aux personnes en situation de handicap physique.

## 🎨 Identité de marque

### Couleurs
- **Orange primaire**: `#E8621A` - CTAs, liens, actions principales
- **Jaune-or secondaire**: `#D4A017` - Accents, icônes
- **Vert-lime tertiaire**: `#8AAC2A` - Icônes, tags
- **Charbon**: `#2C2C2C` - Titres, texte principal
- **Gris moyen**: `#6B6B6B` - Sous-titres, texte secondaire
- **Fond chaud**: `#F9F8F6` - Arrière-plan
- **Blanc**: `#FFFFFF` - Cartes, sections

### Typographie
- **Titres**: Playfair Display (serif, chaleureux, digne de confiance)
- **Corps & UI**: Source Sans Pro (sans-serif, hautement lisible)
- **Taille minimale**: 16px
- **Interligne**: 1.6 pour le texte de corps

## 📄 Pages disponibles

### Pages principales
1. **Accueil** (`/`) - Page d'accueil complète avec toutes les sections
2. **Faire un don** (`/faire-un-don`) - Page de dons avec statistiques d'impact
3. **Carrière** (`/carriere`) - Offres d'emploi et culture d'entreprise
4. **Politique de confidentialité** (`/politique-confidentialite`) - Politique complète avec table des matières

### Pages en développement
- L'équipe (`/equipe`)
- L'historique (`/historique`)
- Contact (`/contact`)
- Formulaire d'admission (`/admission`)
- Critères d'admission (`/criteres`)

### Page spéciale
- **Bibliothèque de composants** (`/composants`) - Référence de design complète

## ♿ Accessibilité (WCAG 2.1 AA)

✅ Contraste conforme WCAG AA (4.5:1 minimum)
✅ États de focus visibles (contour orange)
✅ Cibles tactiles minimales 44x44px
✅ Attributs alt pour toutes les images
✅ Labels visibles pour tous les champs de formulaire
✅ Navigation au clavier complète
✅ Lien "Passer au contenu principal"
✅ Défilement fluide (smooth scroll)

## 🧩 Composants principaux

### Navigation (`/src/app/components/Navigation.tsx`)
- Navigation sticky avec logo
- Menu responsive avec hamburger mobile
- Bouton CTA "Faire un don"
- Indicateurs de page active

### Footer (`/src/app/components/Footer.tsx`)
- Logo et description
- Liens rapides
- Coordonnées
- Crédit designer

### Cookie Consent (`/src/app/components/CookieConsent.tsx`)
- Bandeau de consentement français
- Sauvegarde des préférences dans localStorage
- Lien vers la politique de confidentialité

### Cartes
- Cartes de service avec icônes colorées
- Cartes d'admission avec checkmarks
- Cartes d'emploi avec localisation

## 🛠️ Technologies

- React 18.3.1
- React Router 7.13.0
- Tailwind CSS 4.1.12
- Lucide React (icônes)
- TypeScript

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour:
- Mobile (320px+)
- Tablette (768px+)
- Desktop (1024px+)
- Large desktop (1280px+)

## 🎯 Approche de design

- **Design mobile-first**
- **Coins arrondis**: 8-12px sur toutes les cartes et boutons
- **Ombres douces**: Pas d'ombres portées dures
- **Espacement généreux**: Beaucoup d'espace blanc
- **Accents oranges**: Soulignement subtil ou bordure gauche sur les titres de section
- **Design chaleureux et accueillant**: PAS clinique ou institutionnel

## 🚀 Lancement

Le projet utilise Vite et est configuré pour être servi via le système de Make de Figma. Il n'y a pas besoin de lancer manuellement le serveur de développement.

## 📝 Notes importantes

- Tous les textes doivent passer le ratio de contraste WCAG AA
- Les boutons et liens doivent avoir une taille tactile minimale de 44x44px
- Aucune information ne doit être transmise uniquement par la couleur
- Les formulaires doivent avoir des labels visibles (pas seulement des placeholders)

## 📞 Contact

**RSI Propulsion**
- Téléphone: (514) 251-2525
- Courriel: info@rsipropulsion.ca
- Adresse: Montréal (Québec) H1V 3C1

---

Design web par Yassine Graitaa
© 2024 RSI Propulsion — Le Regroupement de Services Intégrés Propulsion
