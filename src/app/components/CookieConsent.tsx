import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';

const STORAGE_KEY = 'rsi-privacy-notice-dismissed';

/**
 * Avis de confidentialité (Loi 25).
 * Ce site n'installe pas de témoins publicitaires ni d'analytique.
 * Seul un indicateur en stockage local évite de réafficher cet avis.
 * La carte Google (page Contact) n'est chargée qu'après votre action.
 */
export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* stockage indisponible (navigation privée stricte) */
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C2C2C] text-white shadow-2xl border-t border-white/10 pb-[max(0px,env(safe-area-inset-bottom))]"
      role="dialog"
      aria-labelledby="privacy-notice-title"
      aria-describedby="privacy-notice-desc"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-2">
            <h3
              id="privacy-notice-title"
              className="text-base md:text-lg font-semibold mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Confidentialité (Loi 25)
            </h3>
            <p
              id="privacy-notice-desc"
              className="text-sm text-gray-300 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              RSI Propulsion n'utilise pas de témoins publicitaires ni d'outils d'analyse sur ce site. Si vous
              cliquez « J'ai compris », nous mémorisons seulement cet avis dans le stockage local de votre
              navigateur. Sur la page Contact, la carte Google Maps (témoins tiers possibles) s'affiche uniquement
              si vous choisissez de l'afficher.{' '}
              <Link to="/politique-confidentialite" className="text-[#E8621A] hover:underline font-semibold">
                Politique de confidentialité
              </Link>
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={dismiss}
              className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-6 py-3 min-h-[44px] font-semibold transition-colors"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              J'ai compris
            </button>
            <button
              type="button"
              onClick={dismiss}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-white"
              aria-label="Fermer l'avis"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
