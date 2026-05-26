# Animations & Transitions Modernes - RSI Propulsion

Ce document détaille toutes les transitions et animations implémentées pour le site web de RSI Propulsion.

## 🎬 Vue d'ensemble

Le site utilise **Motion (anciennement Framer Motion)** pour des animations fluides et professionnelles, optimisées pour toutes les interfaces (mobile, tablette, desktop).

## ✨ Composants d'animation

### 1. `AnimatedSection` (/src/app/components/AnimatedSection.tsx)
Anime les sections au scroll avec Intersection Observer.

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right' | 'fade'
- `delay`: Délai en secondes (défaut: 0)
- `duration`: Durée de l'animation (défaut: 0.6s)

**Utilisation:**
```tsx
<AnimatedSection direction="up" delay={0.2}>
  <h2>Contenu animé</h2>
</AnimatedSection>
```

### 2. `AnimatedCard` (/src/app/components/AnimatedCard.tsx)
Anime les cartes avec effet hover et apparition au scroll.

**Props:**
- `delay`: Délai d'apparition
- `hoverScale`: Active/désactive l'effet de zoom au hover

**Utilisation:**
```tsx
<AnimatedCard delay={0.1} hoverScale={true}>
  <Card>Contenu de la carte</Card>
</AnimatedCard>
```

### 3. `PageTransition` (/src/app/components/PageTransition.tsx)
Transitions fluides entre les pages lors de la navigation.

**Utilisation:**
```tsx
<PageTransition>
  <div>Contenu de la page</div>
</PageTransition>
```

## 🎨 Animations implémentées

### Navigation
- ✅ Apparition depuis le haut au chargement
- ✅ Ombre animée au scroll
- ✅ Indicateur de page active animé avec `layoutId`
- ✅ Animation du bouton "Faire un don" avec pulsation du cœur
- ✅ Menu mobile avec expansion/collapse fluide
- ✅ Rotation des icônes hamburger/fermer

### Page d'accueil (Home)
**Hero Section:**
- ✅ Zoom arrière du background image
- ✅ Fade-in + slide-up du titre et sous-titre en cascade
- ✅ Fade-in des boutons CTA
- ✅ Indicateur de scroll animé (bounce)

**Mission Strip:**
- ✅ Cards apparaissant en cascade
- ✅ Icônes avec rotation et zoom au hover

**Sections:**
- ✅ Ligne orange décorative animée (width: 0 → 48px)
- ✅ Textes avec fade-in + slide-up
- ✅ Images avec zoom au hover

**Admission:**
- ✅ Checkmarks avec rotation 360° au hover
- ✅ Apparition en cascade des critères

**Bannière de don:**
- ✅ Background radial animé en boucle
- ✅ Bouton avec effet lift au hover

### Page Donate
- ✅ Hero avec background animé
- ✅ Statistiques avec animation de scale
- ✅ Cards avec hover effects
- ✅ CTA card avec background dynamique

### Page Carrière
- ✅ Hero avec icône en rotation
- ✅ Job cards avec hover effects
- ✅ Informations de poste avec slide au hover

### Pages Coming Soon
- ✅ Icône avec rotation d'entrée
- ✅ Contenu en cascade
- ✅ Bouton avec scale effects

## 📱 Responsive & Accessibilité

### Respect des préférences utilisateur
```css
@media (prefers-reduced-motion: reduce) {
  /* Toutes les animations sont réduites à 0.01ms */
}
```

### Performance
- **Intersection Observer** pour déclencher les animations uniquement quand visible
- **`viewport={{ once: true }}`** pour éviter de re-animer au re-scroll
- **GPU acceleration** avec transforms (translateX, translateY, scale)

### Touch-friendly
- Animations `whileTap` pour feedback tactile
- Zones de touch minimum 44x44px respectées

## 🎯 Timing et Easing

### Durées standards
- **Micro-interactions**: 0.2s
- **Transitions moyennes**: 0.4-0.6s
- **Animations d'entrée**: 0.6-0.8s
- **Animations de fond**: 6-8s (loop)

### Easing
```typescript
ease: [0.25, 0.46, 0.45, 0.94] // Cubic-bezier pour fluidité naturelle
```

## 🔥 Effets spéciaux

### 1. Hover Effects
```tsx
whileHover={{ scale: 1.05, y: -4 }}
```

### 2. Tap Effects
```tsx
whileTap={{ scale: 0.95 }}
```

### 3. Scroll Animations
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: '-50px' }}
```

### 4. Animations en boucle
```tsx
animate={{
  scale: [1, 1.2, 1],
  opacity: [0.1, 0.15, 0.1],
}}
transition={{
  duration: 8,
  repeat: Infinity,
  ease: 'easeInOut',
}}
```

## 🛠️ Comment ajouter une animation

### 1. Pour une nouvelle section
```tsx
import { AnimatedSection } from '../components/AnimatedSection';

<AnimatedSection direction="up" delay={0.2}>
  <YourContent />
</AnimatedSection>
```

### 2. Pour une nouvelle carte
```tsx
import { AnimatedCard } from '../components/AnimatedCard';

<AnimatedCard delay={0.1}>
  <Card>Your card content</Card>
</AnimatedCard>
```

### 3. Pour une nouvelle page
```tsx
import { PageTransition } from '../components/PageTransition';

export function YourPage() {
  return (
    <PageTransition>
      <div>Page content</div>
    </PageTransition>
  );
}
```

## 📊 Performance

### Optimisations appliquées
- ✅ Lazy loading des composants d'animation
- ✅ Réduction des animations sur mobile (prefers-reduced-motion)
- ✅ Utilisation de `transform` et `opacity` uniquement (GPU)
- ✅ Éviter les animations de `width`, `height`, `left`, `right`
- ✅ Déclenchement au scroll avec Intersection Observer

### Métriques cibles
- First Contentful Paint (FCP): < 1.8s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1
- Time to Interactive (TTI): < 3.8s

## 🎨 Design System

Toutes les animations respectent:
- Les couleurs de marque (#E8621A, #D4A017, #8AAC2A)
- Les border-radius (8-12px)
- Les ombres douces
- Les transitions fluides (200-600ms)

## 🔍 Débogage

Pour désactiver temporairement les animations:
```tsx
// Dans AnimatedSection.tsx, AnimatedCard.tsx, etc.
const disableAnimations = true; // Set to true for debugging
```

## 📚 Ressources

- [Motion Documentation](https://motion.dev/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
