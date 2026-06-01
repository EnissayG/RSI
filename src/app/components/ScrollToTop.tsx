import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';
import { scrollToTop } from '../utils/scrollToTop';

/** Remonte en haut de la page à chaque changement de route. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if (hash) {
      return;
    }
    scrollToTop();
  }, [pathname, hash]);

  return null;
}
