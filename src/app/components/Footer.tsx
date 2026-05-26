import { useState } from 'react';
import { Link } from 'react-router';
import logoRsi from '../../imports/logo_rsi_propulsion.png';
import { Mail, Phone, MapPin, Heart, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './ui/button';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <footer className="bg-[#2C2C2C] text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#E8621A] to-[#D45515] py-16">
        <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                Restez informé
              </h3>
              <p className="text-white/90" style={{ fontFamily: 'var(--font-body)' }}>
                Recevez nos nouvelles et mises à jour par courriel
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="w-full md:w-auto flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse courriel"
                required
                className="px-4 py-3 rounded-lg bg-white text-[#2C2C2C] placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50 w-full md:w-80"
                style={{ fontFamily: 'var(--font-body)' }}
              />
              <Button
                type="submit"
                className="bg-white text-[#E8621A] hover:bg-gray-100 rounded-lg px-6 py-3 font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {subscribed ? (
                  <>
                    <Heart className="w-5 h-5" />
                    Merci !
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    S'abonner
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1800px] mx-auto px-8 sm:px-12 lg:px-20 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={logoRsi}
                alt="RSI Propulsion"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-300 leading-relaxed mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Un milieu de vie adapté, chaleureux et inclusif pour personnes en situation de handicap depuis 1995.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400" style={{ fontFamily: 'var(--font-body)' }}>
                N° d'organisme de bienfaisance :
              </span>
              <span className="text-sm font-semibold text-[#E8621A]" style={{ fontFamily: 'var(--font-body)' }}>
                870969068RR0001
              </span>
            </div>
          </div>

          {/* À propos */}
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

          {/* Ressources */}
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

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-300" style={{ fontFamily: 'var(--font-body)' }}>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 text-[#E8621A] mt-0.5" />
                <span>
                  2075 rue Théodore
                  <br />
                  Montréal (Québec) H1V 3C1
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#E8621A]" />
                <a href="tel:5142512525" className="hover:text-[#E8621A] transition-colors">
                  (514) 251-2525
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#E8621A]" />
                <a href="mailto:info@rsipropulsion.ca" className="hover:text-[#E8621A] transition-colors">
                  info@rsipropulsion.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p style={{ fontFamily: 'var(--font-body)' }}>
              © {new Date().getFullYear()} RSI Propulsion. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4" style={{ fontFamily: 'var(--font-body)' }}>
              <Link to="/contact" className="hover:text-[#E8621A] transition-colors">
                Nous joindre
              </Link>
              <span className="text-gray-600">·</span>
              <span className="text-gray-500">Design web : Yassine Graitaa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
