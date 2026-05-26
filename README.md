# RSI Propulsion — Site web officiel

Site web de **RSI Propulsion** (Regroupement de Services Intégrés Propulsion), organisme montréalais offrant des logements adaptés avec soutien 24/7 pour personnes présentant une déficience physique.

- **Dépôt :** [github.com/EnissayG/rsipropultion](https://github.com/EnissayG/rsipropultion)
- **Démo GitHub Pages :** [enissayg.github.io/rsipropultion](https://enissayg.github.io/rsipropultion/) *(après activation, voir ci-dessous)*

---

## Sommaire

- [Technologies](#technologies)
- [Prérequis](#prérequis)
- [Installation et développement local](#installation-et-développement-local)
- [Scripts npm](#scripts-npm)
- [Structure du projet](#structure-du-projet)
- [Pages du site](#pages-du-site)
- [Déploiement GitHub Pages](#déploiement-github-pages)
- [Formulaire d'inscription (Netlify)](#formulaire-dinscription-netlify)
- [Identité visuelle](#identité-visuelle)
- [Contributeurs](#contributeurs)

---

## Technologies

| Outil | Version | Rôle |
|--------|---------|------|
| [React](https://react.dev/) | 18.3 | Interface utilisateur |
| [Vite](https://vitejs.dev/) | 6.x | Build et serveur de dev |
| [React Router](https://reactrouter.com/) | 7.x | Routage SPA |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Styles utilitaires |
| [Motion](https://motion.dev/) | 12.x | Animations |
| [Radix UI](https://www.radix-ui.com/) | — | Composants accessibles |
| [Lucide](https://lucide.dev/) | — | Icônes |

---

## Prérequis

- **Node.js** 20 LTS ou plus récent
- **npm** 10+ (fourni avec Node.js)
- Compte **GitHub** (pour Pages et le dépôt)

---

## Installation et développement local

```bash
git clone https://github.com/EnissayG/rsipropultion.git
cd rsipropultion
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

Pour tester le build de production en local :

```bash
npm run build
npm run preview
```

---

## Scripts npm

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Build production (`dist/`) + copie `404.html` pour le routage SPA |
| `npm run build:pages` | Build avec base `/rsipropultion/` (comme sur GitHub Pages) |
| `npm run preview` | Prévisualiser le build local (racine `/`) |
| `npm run preview:pages` | Prévisualiser le build comme sur GitHub Pages |

---

## Structure du projet

```
rsipropultion/
├── .github/workflows/     # CI/CD GitHub Pages
├── public/                # Fichiers statiques (.nojekyll)
├── scripts/               # Utilitaires de build (404.html)
├── src/
│   ├── app/
│   │   ├── components/    # Navigation, Footer, UI…
│   │   └── pages/         # Une page par route
│   ├── imports/           # Images et assets
│   └── styles/            # CSS global, thème, Tailwind
├── index.html
├── vite.config.ts
└── package.json
```

---

## Pages du site

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Présentation de l'organisme |
| `/services` | Services | Offre de services |
| `/criteres` | Critères | Informations et critères de sélection |
| `/admission` | Inscription | Formulaire de demande (réseau ÉquiToît) |
| `/equipe` | L'équipe | Équipe |
| `/historique` | Historique | Historique de l'organisme |
| `/contact` | Contact | Coordonnées et formulaire |
| `/faq` | FAQ | Questions fréquentes |
| `/faire-un-don` | Faire un don | Dons |
| `/carriere` | Carrière | Emplois |
| `/politique-confidentialite` | Confidentialité | Loi 25 (Québec) |

---

## Déploiement GitHub Pages

Le dépôt inclut le workflow [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml). À chaque push sur `main`, le site est construit et publié.

### 1. Activer GitHub Pages (une seule fois)

1. Ouvrir le dépôt sur GitHub : [EnissayG/rsipropultion](https://github.com/EnissayG/rsipropultion)
2. **Settings** → **Pages**
3. **Build and deployment**
   - **Source :** `GitHub Actions` *(pas « Deploy from a branch »)*
4. Enregistrer

### 2. Premier déploiement

Après un push sur `main`, aller dans **Actions** → workflow **Deploy GitHub Pages** → vérifier que le job est vert.

### 3. URL du site

Le site sera disponible à :

**https://enissayg.github.io/rsipropultion/**

> Le nom du dépôt est `rsipropultion` (orthographe du dépôt GitHub). Le chemin de base Vite est donc `/rsipropultion/`.

### 4. Paramètres techniques

| Paramètre | Valeur |
|-----------|--------|
| Branche déclencheuse | `main` |
| Dossier publié | `dist` (via artifact Actions) |
| Variable de build | `VITE_BASE_PATH=/rsipropultion/` |
| Fichier SPA fallback | `dist/404.html` (copie de `index.html`) |
| Jekyll | Désactivé (`public/.nojekyll`) |
| Routage React | `BrowserRouter` avec `basename` = `import.meta.env.BASE_URL` |

### 5. Domaine personnalisé (optionnel)

Dans **Settings → Pages → Custom domain**, ajouter un domaine (ex. `www.rsipropulsion.ca`) et configurer les enregistrements DNS chez le registrar. Mettre à jour `VITE_BASE_PATH` si le site n'est plus servi sous `/rsipropultion/`.

---

## Formulaire d'inscription (Netlify)

Le formulaire sur `/admission` est prévu pour **Netlify Forms** (`data-netlify`, `name="admission-inscription"`).

Pour la production avec envoi de courriels :

1. Héberger le site sur [Netlify](https://www.netlify.com/) (connecter ce dépôt)
2. **Build command :** `npm run build`
3. **Publish directory :** `dist`
4. **Forms** → activer la détection des formulaires
5. Notifications → `info@rsipropulsion.ca` *(à confirmer avec le client)*

GitHub Pages sert de démo statique ; les soumissions Netlify nécessitent Netlify (ou un autre backend).

---

## Identité visuelle

| Élément | Valeur |
|---------|--------|
| Orange primaire | `#E8621A` |
| Jaune-or | `#D4A017` |
| Vert-lime | `#8AAC2A` |
| Texte | `#2C2C2C` / `#6B6B6B` |
| Fond | `#F9F8F6` |
| Titres | Playfair Display |
| Corps | Source Sans Pro |

Documentation détaillée : [`RSI_PROPULSION_README.md`](RSI_PROPULSION_README.md).

---

## Contributeurs

| Personne | Rôle |
|----------|------|
| [EnissayG](https://github.com/EnissayG) | Développement et maintenance du dépôt |

---

## Licence et crédits

Projet développé pour RSI Propulsion. Voir [`ATTRIBUTIONS.md`](ATTRIBUTIONS.md) pour les crédits tiers.

**Contact RSI Propulsion**  
2075 rue Théodore, Montréal (QC) H1V 3C1  
Téléphone : (514) 251-2525  
Courriel : info@rsipropulsion.ca
