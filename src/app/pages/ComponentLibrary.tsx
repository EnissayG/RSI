import { Home, Heart, Users, Mail, Phone, MapPin, Check, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';

export function ComponentLibrary() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
            Bibliothèque de composants
          </h1>
          <p className="text-xl text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
            Guide des composants de design pour RSI Propulsion
          </p>
        </div>

        {/* Color Palette */}
        <section className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Palette de couleurs
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="w-full h-24 rounded-lg bg-[#E8621A] mb-2"></div>
                <p className="font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>Orange (Primary)</p>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>#E8621A</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#D4A017] mb-2"></div>
                <p className="font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>Yellow (Secondary)</p>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>#D4A017</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#8AAC2A] mb-2"></div>
                <p className="font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>Green (Accent)</p>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>#8AAC2A</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#2C2C2C] mb-2"></div>
                <p className="font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>Charcoal</p>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>#2C2C2C</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#6B6B6B] mb-2"></div>
                <p className="font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>Medium Gray</p>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>#6B6B6B</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-[#F9F8F6] border-2 border-gray-300 mb-2"></div>
                <p className="font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>Warm Background</p>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>#F9F8F6</p>
              </div>
              <div>
                <div className="w-full h-24 rounded-lg bg-white border-2 border-gray-300 mb-2"></div>
                <p className="font-semibold text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>White</p>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>#FFFFFF</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Typographie
            </h2>
            <div className="space-y-6">
              <div>
                <h1 style={{ fontFamily: 'var(--font-heading)' }}>Titre H1 - Playfair Display</h1>
                <p className="text-sm text-[#6B6B6B] mt-1" style={{ fontFamily: 'var(--font-body)' }}>2.5rem / 40px, Bold 700</p>
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-heading)' }}>Titre H2 - Playfair Display</h2>
                <p className="text-sm text-[#6B6B6B] mt-1" style={{ fontFamily: 'var(--font-body)' }}>2rem / 32px, Semibold 600</p>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)' }}>Titre H3 - Playfair Display</h3>
                <p className="text-sm text-[#6B6B6B] mt-1" style={{ fontFamily: 'var(--font-body)' }}>1.5rem / 24px, Semibold 600</p>
              </div>
              <div>
                <p style={{ fontFamily: 'var(--font-body)' }}>Texte de corps - Source Sans Pro Regular, 16px, line-height 1.6</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Buttons */}
        <section className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Boutons
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold mb-3 text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Primary (Orange)</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-6 py-5 min-h-[44px]">
                    Bouton primaire
                  </Button>
                  <Button disabled className="bg-[#E8621A] text-white rounded-lg px-6 py-5 min-h-[44px] opacity-50">
                    Désactivé
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-3 text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Secondary (Outline)</p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A]/10 rounded-lg px-6 py-5 min-h-[44px]">
                    Bouton secondaire
                  </Button>
                  <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-6 py-5 min-h-[44px] bg-[#E8621A]">
                    Outline blanc
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold mb-3 text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Avec icônes</p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-6 py-5 min-h-[44px] flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Faire un don
                  </Button>
                  <Button variant="outline" className="border-2 border-[#E8621A] text-[#E8621A] hover:bg-[#E8621A]/10 rounded-lg px-6 py-5 min-h-[44px] flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" />
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Cards */}
        <section className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Cartes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 mb-4 bg-[#E8621A] rounded-full flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Service Card
                </h3>
                <p className="text-base text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>
                  Description du service avec texte explicatif
                </p>
              </Card>
              <Card className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Admission Card
                </h3>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#E8621A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <p className="text-sm text-[#2C2C2C]" style={{ fontFamily: 'var(--font-body)' }}>
                    Critère d'admission avec checkmark
                  </p>
                </div>
              </Card>
              <Card className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
                  Job Card
                </h3>
                <div className="flex items-center gap-2 text-[#6B6B6B] mb-4">
                  <MapPin className="w-4 h-4 text-[#E8621A]" />
                  <span className="text-sm" style={{ fontFamily: 'var(--font-body)' }}>Montréal</span>
                </div>
                <Button className="w-full bg-[#E8621A] text-white rounded-lg py-3 min-h-[44px]">
                  Postuler
                </Button>
              </Card>
            </div>
          </Card>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Formulaires
            </h2>
            <div className="max-w-md space-y-4">
              <div>
                <Label htmlFor="demo-name" className="text-[#2C2C2C]">Nom complet</Label>
                <Input
                  id="demo-name"
                  type="text"
                  placeholder="Jean Tremblay"
                  className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A] min-h-[44px]"
                />
              </div>
              <div>
                <Label htmlFor="demo-email" className="text-[#2C2C2C]">Courriel</Label>
                <Input
                  id="demo-email"
                  type="email"
                  placeholder="jean.tremblay@example.com"
                  className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A] min-h-[44px]"
                />
              </div>
              <div>
                <Label htmlFor="demo-message" className="text-[#2C2C2C]">Message</Label>
                <Textarea
                  id="demo-message"
                  placeholder="Votre message ici..."
                  rows={4}
                  className="mt-1 rounded-lg border-gray-300 focus:border-[#E8621A] focus:ring-[#E8621A]"
                />
              </div>
              <Button className="w-full bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg py-5 min-h-[44px]">
                Envoyer
              </Button>
            </div>
          </Card>
        </section>

        {/* Icons */}
        <section className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Icônes avec couleurs de marque
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#8AAC2A] rounded-full flex items-center justify-center">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Green</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#E8621A] rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Orange</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#D4A017] rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Yellow</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#E8621A] rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Mail</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#8AAC2A] rounded-full flex items-center justify-center">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Phone</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-[#D4A017] rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'var(--font-body)' }}>Location</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Cookie Consent Banner */}
        <section className="mb-16">
          <Card className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#2C2C2C]" style={{ fontFamily: 'var(--font-heading)' }}>
              Bandeau de consentement
            </h2>
            <div className="bg-[#2C2C2C] text-white p-6 rounded-lg">
              <p className="mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                Nous utilisons des témoins (cookies) pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des témoins.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-[#E8621A] hover:bg-[#D45515] text-white rounded-lg px-6 py-3 min-h-[44px]">
                  Accepter
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 rounded-lg px-6 py-3 min-h-[44px]">
                  Paramètres
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
