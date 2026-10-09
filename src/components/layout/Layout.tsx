import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';
import { Breadcrumbs } from './Breadcrumbs';

/**
 * LAYOUT (Regra 1 — correção de renderização):
 * - Raiz: `min-h-screen flex flex-col` → garante altura total em coluna flexível.
 * - <main className="flex-1 w-full min-w-0">: empurra o Footer para baixo e
 *   impede que as páginas renderizem vazias/colapsadas.
 * - `min-w-0` no main é essencial para grids/flex internos não estourarem a
 *   largura em mobile (evita overflow horizontal que "quebra" o layout).
 */
export const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isAbout = location.pathname === '/sobre';

  return (
    <div className="min-h-screen flex flex-col overflow-x-clip bg-bg text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {!isHome && !isAbout && (
        <div className="pt-20 md:pt-24">
          <Breadcrumbs />
        </div>
      )}

      {/* flex-1 + min-w-0: conteúdo ocupa o espaço restante, footer sempre embaixo */}
      <main className="flex-1 w-full min-w-0">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
