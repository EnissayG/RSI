import { ORGANIZATION } from '../../config/organization';
import { fontBody, fontHeading } from './PageSections';

const facts = [
  { color: '#E8621A', title: '15 logements 3½', text: ORGANIZATION.unitAdaptation },
  { color: '#D4A017', title: 'Quartier', text: ORGANIZATION.address.neighbourhood },
  { color: '#8AAC2A', title: 'Administration', text: ORGANIZATION.adminHours },
  { color: '#E8621A', title: 'Langues', text: ORGANIZATION.languages },
  { color: '#D4A017', title: 'Clientèle', text: '18 à 59 ans, propulsion à mobilité réduite' },
  { color: '#8AAC2A', title: 'Services', text: 'AVQ et AVD, équipe présente 24 h/24, 7 j/7' },
];

export function OrgFactsGrid({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 ${className}`}>
      {facts.map((fact) => (
        <div
          key={fact.title}
          className="bg-[#F9F8F6] rounded-xl p-5 sm:p-6 lg:p-7 border border-gray-100/80 hover:shadow-md transition-shadow"
          style={{ borderTopWidth: '4px', borderTopColor: fact.color, borderTopStyle: 'solid' }}
        >
          <h3 className="text-lg font-bold text-[#2C2C2C] mb-2" style={fontHeading}>
            {fact.title}
          </h3>
          <p className="text-[#6B6B6B] text-sm leading-relaxed" style={fontBody}>
            {fact.text}
          </p>
        </div>
      ))}
    </div>
  );
}
