import { BrowserRouter, Routes, Route } from 'react-router';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { SkipToContent } from './components/SkipToContent';
import { Home } from './pages/Home';
import { Donate } from './pages/Donate';
import { Careers } from './pages/Careers';
import { History } from './pages/History';
import { Team } from './pages/Team';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { ComponentLibrary } from './pages/ComponentLibrary';
import { Criteria } from './pages/Criteria';
import { Services } from './pages/Services';
import { FAQ } from './pages/FAQ';
import { Admission } from './pages/Admission';

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || undefined;

export default function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <div className="min-h-screen flex flex-col">
        <SkipToContent />
        <Navigation />
        <main id="main-content" className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faire-un-don" element={<Donate />} />
            <Route path="/carriere" element={<Careers />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/composants" element={<ComponentLibrary />} />

            {/* Placeholder pages */}
            <Route path="/equipe" element={<Team />} />
            <Route path="/historique" element={<History />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/criteres" element={<Criteria />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </BrowserRouter>
  );
}