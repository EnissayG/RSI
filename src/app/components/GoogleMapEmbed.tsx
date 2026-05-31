import { ExternalLink } from 'lucide-react';
import { ORGANIZATION } from '../config/organization';
import { fontBody } from './layout/PageSections';

type GoogleMapEmbedProps = {
  className?: string;
  height?: string;
};

export function GoogleMapEmbed({ className = '', height = 'h-[420px] md:h-[480px]' }: GoogleMapEmbedProps) {
  return (
    <div className={className}>
      <iframe
        title="Carte Google Maps, RSI Propulsion, 2075 rue Théodore"
        src={ORGANIZATION.mapEmbedUrl}
        className={`w-full ${height} rounded-2xl border-0 shadow-lg`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
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
