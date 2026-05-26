import { Link } from 'react-router';
import { Home as HomeIcon, Heart, Users, Briefcase, Check, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Placeholder with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8621A]/90 via-[#E8621A]/70 to-transparent z-0">
          <div className="w-full h-full bg-gray-400 opacity-50"
               style={{
                 backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                 backgroundSize: '20px 20px',
                 backgroundPosition: '0 0, 10px 10px'
               }}
               aria-label="Adapted apartment building exterior"
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Un milieu de vie adapté, chaleureux et inclusif
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              15 logements abordables à Hochelaga-Maisonneuve pour personnes en situation de handicap physique
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admission">
                <Button
                  className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-8 py-6 text-lg min-h-[44px] min-w-[44px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Formulaire d'admission
                </Button>
              </Link>
              <a href="#mission">
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-8 py-6 text-lg min-h-[44px] min-w-[44px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  En savoir plus
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Strip */}
      <section id="mission" className="bg-[#F9F8F6] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#8AAC2A] rounded-full flex items-center justify-center">
                <HomeIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                Logements adaptés et abordables
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E8621A] rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                Services de vie quotidienne (AVQ/AVD)
              </h3>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#D4A017] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                Milieu de vie normalisant et inclusif
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="border-l-4 border-[#E8621A] pl-4">Nos services</span>
              </h2>
              <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                RSI Propulsion offre un accompagnement personnalisé dans les activités de la vie quotidienne (AVQ) et les activités de la vie domestique (AVD). Notre équipe dévouée soutient les résidents dans leur autonomie tout en respectant leur dignité et leurs choix.
              </p>
              <p className="text-lg text-[#6B6B6B] leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                Nous créons un environnement chaleureux où chaque personne peut s'épanouir, participer à la vie communautaire et maintenir des liens sociaux significatifs.
              </p>
            </div>
            <div className="bg-gray-300 rounded-xl h-80 flex items-center justify-center"
                 style={{
                   backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                   backgroundSize: '20px 20px',
                   backgroundPosition: '0 0, 10px 10px'
                 }}
                 aria-label="Communal dining room"
            >
              <span className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>Salle à manger communautaire</span>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="bg-[#F9F8F6] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Critères et formulaire d'admission
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#E8621A] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                  15 unités 3½ avec salon, cuisinette, chambre et salle de bain adaptée
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#E8621A] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                  Bâtiment entièrement accessible et adapté
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#E8621A] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                  Déficience physique avec ou sans atteinte cognitive légère
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#E8621A] flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-lg text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                  Engagement social, communautaire ou aux études
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/admission" className="flex-1">
                <Button
                  className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg py-6 min-h-[44px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Formulaire d'admission
                </Button>
              </Link>
              <Link to="/criteres" className="flex-1">
                <Button
                  variant="outline"
                  className="w-full border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A]/10 rounded-lg py-6 min-h-[44px]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Voir les critères
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Journal Section */}
      <section className="bg-[#F9F8F6] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Le journal de nos locataires
            </h2>
            <p className="text-xl text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
              Découvrez la vie chez RSI Propulsion à travers les yeux de ceux qui y habitent
            </p>
          </div>
          <Card className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-300 h-64 flex items-center justify-center"
                 style={{
                   backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc), linear-gradient(45deg, #ccc 25%, transparent 25%, transparent 75%, #ccc 75%, #ccc)',
                   backgroundSize: '20px 20px',
                   backgroundPosition: '0 0, 10px 10px'
                 }}
                 aria-label="Journal cover image"
            >
              <span className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-body)' }}>Journal des locataires</span>
            </div>
            <div className="p-8">
              <Button
                variant="outline"
                className="w-full border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A]/10 rounded-lg py-6 min-h-[44px] flex items-center justify-center gap-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <ExternalLink className="w-5 h-5" />
                Consulter en ligne
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="bg-[#E8621A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
            Contribuez à notre mission
          </h2>
          <p className="text-xl text-white mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
            Votre don aide des personnes en situation de handicap à vivre dignement et en autonomie
          </p>
          <Link to="/faire-un-don">
            <Button
              className="bg-white hover:bg-gray-100 text-[#2C2C2C] rounded-lg px-8 py-6 text-lg min-h-[44px] min-w-[44px]"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Faire un don via PayPal
            </Button>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Vous avez des questions ?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                Coordonnées
              </h3>
              <div className="space-y-3 text-lg text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                <p><strong className="text-[#2C2C2C]">Téléphone:</strong> (514) 251-2525</p>
                <p><strong className="text-[#2C2C2C]">Courriel:</strong> info@rsipropulsion.ca</p>
                <p><strong className="text-[#2C2C2C]">Adresse:</strong> Montréal (Québec) H1V 3C1</p>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-[#2C2C2C]">Nom</Label>
                <Input
                  id="name"
                  type="text"
                  className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A] min-h-[44px]"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-[#2C2C2C]">Courriel</Label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A] min-h-[44px]"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-[#2C2C2C]">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg py-6 min-h-[44px]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
