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

/**
 * CORREÇÃO DO BUG DA "PÁGINA VAZIA" (Regra 1):
 * - Wrapper raiz: `min-h-screen flex flex-col` → coluna flexível de altura total.
 * - <main className="flex-1">: ocupa todo o espaço restante e empurra o
 *   Footer para baixo; sem `flex-1` o conteúdo pode colapsar a zero.
 * - Todas as seções (Hero, Stats, Services, Fleet, Contact) são importadas
 *   E chamadas explicitamente dentro de <main>. Nada é renderizado fora dele.
 * - Header é fixo (h-16/h-20), então <main> recebe pt-20 / sm:pt-24 para o
 *   conteúdo não ficar escondido atrás da navegação.
 */
function App() {
  return (
    <BrowserRouter>
      <SEOHead />

      {/* RAIZ: min-h-screen + flex flex-col (obrigatório) */}
      <div className="min-h-screen flex flex-col bg-bg text-white">
        <Header />

        {/* CONTEÚDO: flex-1 empurra o footer para baixo e garante renderização */}
        <main className="flex-1 w-full overflow-x-hidden pt-20 sm:pt-24">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Seções importadas e chamadas corretamente dentro do <main> */}
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

            {/* Fallback: rota desconhecida NUNCA deixa a página em branco */}
            <Route
              path="*"
              element={
                <section className="py-16 bg-bg">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl py-16 text-center sm:py-20">
                      <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                        Página não encontrada
                      </h1>
                      <p className="mb-8 max-w-3xl mx-auto text-base leading-relaxed text-white/70 sm:text-lg">
                        O conteúdo solicitado não pôde ser carregado.
                      </p>
                      <a
                        href="/"
                        className="gradient-btn inline-flex min-h-[44px] w-full items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white sm:w-auto sm:text-lg"
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
