import React from 'react';
import { SEO } from '@/components/SEO';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FadeIn } from '@/components/ui/FadeIn';
import { siteConfig } from '@/data/site';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contato - VoltMax Geradores',
    description: 'Entre em contato com a VoltMax Geradores para solicitar orçamentos, tirar dúvidas ou agendar visitas técnicas.',
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteConfig.address,
        addressCountry: 'BR',
      },
      openingHours: siteConfig.hours,
    },
  };

  return (
    <>
      <SEO
        title="Contato | Orçamento e Suporte 24h - VoltMax Geradores"
        description="Entre em contato com a VoltMax Geradores. Solicite orçamento de locação de geradores, tire dúvidas ou fale com nosso suporte técnico 24h."
        keywords="contato voltmax, orçamento geradores, telefone voltmax, whatsapp geradores, suporte 24h"
        ogImage="https://voltmaxgeradores.com.br/og-contact.jpg"
        canonical="https://voltmaxgeradores.com.br/contato"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center relative px-5 sm:px-8 md:px-10 lg:px-16 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,10vw,120px)] mb-6">
              Contato
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ice/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
              Fale com nossa equipe e receba um orçamento personalizado.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <FadeIn delay={0}>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02] hover:border-volt/20 hover:bg-volt/[0.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-volt/10 flex items-center justify-center mb-3">
                <Phone size={20} className="text-volt" />
              </div>
              <span className="text-ice/50 text-xs uppercase tracking-wider mb-1">Telefone</span>
              <span className="text-ice font-medium text-sm">{siteConfig.phone}</span>
            </a>
          </FadeIn>
          <FadeIn delay={0.1}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02] hover:border-volt/20 hover:bg-volt/[0.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-volt/10 flex items-center justify-center mb-3">
                <MessageCircle size={20} className="text-volt" />
              </div>
              <span className="text-ice/50 text-xs uppercase tracking-wider mb-1">WhatsApp</span>
              <span className="text-ice font-medium text-sm">{siteConfig.phone}</span>
            </a>
          </FadeIn>
          <FadeIn delay={0.2}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02] hover:border-volt/20 hover:bg-volt/[0.02] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-volt/10 flex items-center justify-center mb-3">
                <Mail size={20} className="text-volt" />
              </div>
              <span className="text-ice/50 text-xs uppercase tracking-wider mb-1">E-mail</span>
              <span className="text-ice font-medium text-sm break-all">{siteConfig.email}</span>
            </a>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-ice/5 bg-ice/[0.02]">
              <div className="w-12 h-12 rounded-full bg-volt/10 flex items-center justify-center mb-3">
                <Clock size={20} className="text-volt" />
              </div>
              <span className="text-ice/50 text-xs uppercase tracking-wider mb-1">Horário</span>
              <span className="text-ice font-medium text-sm">{siteConfig.hours}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactSection />

      {/* Address Section */}
      <section className="bg-bg px-5 sm:px-8 md:px-10 lg:px-16 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin size={20} className="text-volt" />
              <h2 className="text-ice font-bold text-xl">Nosso Endereço</h2>
            </div>
            <p className="text-ice/60 text-lg">{siteConfig.address}</p>
          </FadeIn>
        </div>
      </section>

      <FaqSection />
    </>
  );
};

export default ContactPage;
