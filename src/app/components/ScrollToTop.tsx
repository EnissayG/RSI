import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

function scrollWindowToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  const main = document.getElementById('main-content');
  if (main) {
    main.scrollTop = 0;
  }
}

/** Remonte en haut de la page à chaque changement de route. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      return;
    }

    scrollWindowToTop();

    // Après le rendu (héros, images) pour éviter que la page reste en bas
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(scrollWindowToTop);
    });

    return () => cancelAnimationFrame(id);
  }, [pathname, hash]);

  return null;
}
