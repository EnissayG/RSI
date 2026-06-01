import { useState } from 'react';
import { ExternalLink, MapPin } from 'lucide-react';
import { ORGANIZATION } from '../config/organization';
import { fontBody } from './layout/PageSections';

type GoogleMapEmbedProps = {
  className?: string;
  height?: string;
};

export function GoogleMapEmbed({
  className = '',
  height = 'h-[280px] sm:h-[360px] md:h-[420px] lg:h-[480px]',
}: GoogleMapEmbedProps) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className={className}>
      {!showMap ? (
        <div
          className={`w-full ${height} rounded-2xl border border-gray-200 bg-[#F9F8F6] flex flex-col items-center justify-center gap-4 px-6 text-center shadow-lg`}
        >
          <MapPin className="w-10 h-10 text-[#E8621A]" aria-hidden />
          <p className="text-[#6B6B6B] max-w-md" style={fontBody}>
            La carte interactive est fournie par Google et peut utiliser des témoins tiers. Affichez-la seulement si
            vous l'acceptez.
          </p>
          <button
            type="button"
            onClick={() => setShowMap(true)}
            className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-full px-8 py-3 min-h-[44px] font-semibold transition-colors"
            style={fontBody}
          >
            Afficher la carte
          </button>
        </div>
      ) : (
        <iframe
          title="Carte Google Maps, RSI Propulsion, 2075 rue Théodore"
          src={ORGANIZATION.mapEmbedUrl}
          className={`w-full ${height} rounded-2xl border-0 shadow-lg`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      )}
      <p className="mt-4 text-center text-sm text-[#6B6B6B]" style={fontBody}>
        <a
          href={ORGANIZATION.mapLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#E8621A] font-semibold hover:underline"
        >
          Ouvrir dans Google Maps
          <ExternalLink className="w-4 h-4" aria-hidden />
        </a>
      </p>
    </div>
  );
}
