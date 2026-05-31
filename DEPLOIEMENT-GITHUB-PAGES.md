# Déployer sur GitHub Pages

## Erreur « Setup Pages » ou « Not Found » ?

Cela signifie que **GitHub Pages n’est pas encore activé** sur le dépôt. Le workflow ne peut pas déployer tant que cette étape n’est pas faite **une seule fois** dans les réglages GitHub.

## Activation (obligatoire)

1. Connectez-vous à GitHub avec le compte propriétaire du dépôt **EnissayG/RSI**.
2. Ouvrez : **https://github.com/EnissayG/RSI/settings/pages**
3. Section **Build and deployment** :
   - **Source** : sélectionnez **GitHub Actions** (pas « Deploy from a branch »).
4. Cliquez sur **Save** si le bouton est visible.
5. Attendez quelques secondes, puis allez dans **Actions** → **Deploy GitHub Pages** → **Run workflow**.

## Vérifier le succès

- Le job **build** doit être vert (Upload Pages artifact).
- Le job **deploy** doit être vert (Deploy to GitHub Pages).
- Le site : **https://enissayg.github.io/RSI/**

## Si « deploy » échoue encore

- Vérifiez que la branche poussée est bien **`main`** (le workflow ne tourne que sur `main`).
- Dans **Settings → Pages**, la source doit rester **GitHub Actions**.
- Relancez le workflow manuellement après avoir sauvegardé les réglages.

## Test local

```bash
npm run build:pages
npm run preview:pages
```

## Netlify (autre hébergement)

Pour Netlify, utilisez `npm run build` sans `VITE_BASE_PATH` et le fichier `netlify.toml` du projet.
