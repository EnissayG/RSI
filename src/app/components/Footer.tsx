import { Link } from 'react-router';
import logoRsi from '../../imports/logo_rsi_propulsion.png';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ORGANIZATION } from '../config/organization';

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img src={logoRsi} alt="RSI Propulsion" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              {ORGANIZATION.description}
            </p>
            <p className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
              N° d'organisme de bienfaisance :{' '}
              <span className="font-semibold text-[#E8621A]">{ORGANIZATION.charityNumber}</span>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              À propos
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <li>
                <Link to="/equipe" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Notre équipe
                </Link>
              </li>
              <li>
                <Link to="/historique" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link to="/carriere" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Travailler avec nous
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Ressources
            </h3>
            <ul className="space-y-2 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              <li>
                <Link to="/criteres" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Critères d'admission
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Formulaire d'inscription
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Questions fréquentes
                </Link>
              </li>
              <li>
                <Link to="/faire-un-don" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Faire un don
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="text-gray-300 hover:text-[#E8621A] transition-colors">
                  Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 text-[#E8621A] mt-0.5" />
                <span>
                  {ORGANIZATION.address.street}
                  <br />
                  {ORGANIZATION.address.city} ({ORGANIZATION.address.province}) {ORGANIZATION.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 shrink-0 text-[#E8621A]" />
                <a href={ORGANIZATION.phoneTel} className="hover:text-[#E8621A] transition-colors">
                  {ORGANIZATION.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0 text-[#E8621A]" />
                <a href={`mailto:${ORGANIZATION.email}`} className="hover:text-[#E8621A] transition-colors">
                  {ORGANIZATION.email}
                </a>
              </li>
              <li className="text-gray-400 text-xs pt-1">{ORGANIZATION.adminHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p style={{ fontFamily: 'var(--font-body)' }}>
              © {new Date().getFullYear()} {ORGANIZATION.shortName}. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4" style={{ fontFamily: 'var(--font-body)' }}>
              <Link to="/contact" className="hover:text-[#E8621A] transition-colors">
                Nous joindre
              </Link>
              <span className="text-gray-600 hidden sm:inline">·</span>
              <a
                href={ORGANIZATION.resource211}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8621A] transition-colors"
              >
                Fiche 211 Grand Montréal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
