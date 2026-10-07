import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';
import { Breadcrumbs } from './Breadcrumbs';

export const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="overflow-x-clip">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      {!isHome && <div className="pt-20 md:pt-24"><Breadcrumbs /></div>}
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
