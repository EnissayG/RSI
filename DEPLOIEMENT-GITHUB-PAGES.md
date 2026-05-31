# Déployer sur GitHub Pages

## 1. Activer GitHub Pages (obligatoire, une seule fois)

L’erreur `404` / `Ensure GitHub Pages has been enabled` signifie que Pages n’est pas encore activé.

1. Ouvrez : **https://github.com/EnissayG/RSI/settings/pages**
2. Sous **Build and deployment** → **Source**, choisissez **GitHub Actions** (pas « Deploy from a branch »).
3. Enregistrez si un bouton **Save** apparaît.

## 2. Lancer le déploiement

- Chaque push sur `main` déclenche le workflow **Deploy GitHub Pages**.
- Ou : onglet **Actions** → **Deploy GitHub Pages** → **Run workflow**.

## 3. URL du site

Après succès du workflow :

**https://enissayg.github.io/RSI/**

(Le chemin `/RSI/` correspond au nom du dépôt `EnissayG/RSI`.)

## 4. Test en local (même chemin que en production)

```bash
npm run build:pages
npm run preview:pages
```

## 5. Netlify

Si vous utilisez Netlify à la place, gardez `npm run build` (sans `VITE_BASE_PATH`) et le fichier `netlify.toml` du projet.
