import { copyFileSync } from 'node:fs';

// GitHub Pages : réutilise index.html pour le routage SPA (React Router)
copyFileSync('dist/index.html', 'dist/404.html');
