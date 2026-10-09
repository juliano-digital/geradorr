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

      {/*
        CORREÇÃO DO BUG DA "PÁGINA VAZIA" (Regra 1):
        - Wrapper raiz: min-h-screen + flex flex-col.
        - <main> com flex-1: empurra o Footer para baixo e garante que
          todas as seções sejam renderizadas dentro do fluxo principal.
        - Header é fixo, então o main recebe pt-20/sm:pt-24 para o conteúdo
          não ficar escondido atrás da barra de navegação.
      */}
      <div className="min-h-screen flex flex-col bg-bg text-white">
        <Header />

        <main className="flex-1 w-full overflow-x-hidden pt-20 sm:pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Todas as seções importadas e chamadas dentro do <main> */}
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

            {/* Fallback: rota desconhecida nunca deixa a página em branco */}
            <Route
              path="*"
              element={
                <section className="py-16 bg-bg">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto py-16 sm:py-20">
                      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Página não encontrada
                      </h1>
                      <p className="text-base sm:text-lg text-white/70 mb-8">
                        O conteúdo solicitado não pôde ser carregado.
                      </p>
                      <a
                        href="/"
                        className="gradient-btn inline-flex w-full sm:w-auto items-center justify-center px-8 py-4 rounded-full text-white font-semibold text-base sm:text-lg min-h-[44px]"
                      >
                        Voltar para a Home
                      </a>
                    </div>
                  </div>
                </section>
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
