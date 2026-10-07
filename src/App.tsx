import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import FleetPage from '@/pages/FleetPage';
import ProjectsPage from '@/pages/ProjectsPage';
import ContactPage from '@/pages/ContactPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sobre" element={<AboutPage />} />
          <Route path="servicos" element={<ServicesPage />} />
          <Route path="frota" element={<FleetPage />} />
          <Route path="projetos" element={<ProjectsPage />} />
          <Route path="contato" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
