import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { HeroSection } from '@/components/sections/HeroSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PowerCalculator } from '@/components/PowerCalculator';
import { FleetSection } from '@/components/sections/FleetSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { SEOHead } from '@/components/SEOHead';

function App() {
  return (
    <BrowserRouter>
      <SEOHead />
      <div className="min-h-screen bg-bg text-white">
        <Header />
        
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <StatsSection />
                  <ServicesSection />
                  <PowerCalculator />
                  <FleetSection />
                  <TestimonialsSection />
                  <ContactSection />
                </>
              }
            />
          </Routes>
        </main>

        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

export default App;
