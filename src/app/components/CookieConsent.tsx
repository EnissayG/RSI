import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const STORAGE_KEY = 'rsi-cookie-consent';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C2C2C] text-white shadow-2xl border-t border-white/10"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-2">
            <h3
              id="cookie-consent-title"
              className="text-base md:text-lg font-semibold mb-2"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Témoins (cookies) et confidentialité
            </h3>
            <p
              id="cookie-consent-desc"
              className="text-sm text-gray-300 leading-relaxed"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Ce site utilise des témoins essentiels pour son fonctionnement et enregistre votre choix de
              consentement sur votre appareil. Aucun témoin publicitaire n'est utilisé. Consultez notre{' '}
              <Link to="/politique-confidentialite" className="text-[#E8621A] hover:underline font-semibold">
                politique de confidentialité
              </Link>{' '}
              pour en savoir plus (Loi 25 du Québec).
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center shrink-0">
            <Button
              onClick={handleAccept}
              className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-6 py-3 min-h-[44px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Accepter
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-6 py-3 min-h-[44px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Refuser
            </Button>
            <button
              type="button"
              onClick={handleDecline}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Fermer sans accepter"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
