import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { WhatsAppFloat } from './WhatsAppFloat';
import { Breadcrumbs } from './Breadcrumbs';

export const Layout: React.FC = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};
