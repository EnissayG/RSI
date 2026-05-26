import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('rsi-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('rsi-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('rsi-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#2C2C2C] text-white shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
              Politique de confidentialité et témoins (cookies)
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Nous utilisons des témoins (cookies) pour améliorer votre expérience sur notre site et analyser le trafic.
              En continuant à naviguer, vous acceptez notre utilisation des témoins conformément à notre{' '}
              <a href="/politique-confidentialite" className="text-[#E8621A] hover:underline font-semibold">
                politique de confidentialité
              </a>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 items-center">
            <Button
              onClick={handleAccept}
              className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-6 py-3 min-h-[44px] min-w-[44px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Accepter
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-6 py-3 min-h-[44px] min-w-[44px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Refuser
            </Button>
            <button
              onClick={handleDecline}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
