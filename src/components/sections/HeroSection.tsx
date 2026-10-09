import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Headphones } from 'lucide-react';
import { siteConfig } from '@/data/site';

/**
 * HERO — exemplo de referência de centralização e espaçamento correto.
 *
 * Regras aplicadas:
 * 1. Wrapper da seção com container centralizado:
 *    `container mx-auto px-4 sm:px-6 lg:px-8` (centralização perfeita no PC,
 *    margens seguras no mobile).
 * 2. Conteúdo tipográfico limitado com `max-w-4xl mx-auto text-center`.
 * 3. Espaçamento vertical rígido: py-12 (mobile) → py-16/py-20 (desktop).
 * 4. CTAs mobile-first: `w-full sm:w-auto` (largos no celular, ajustados no PC).
 * 5. Grid interno com gap consistente (`gap-4 sm:gap-8`).
 */
export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg py-12 sm:py-16 lg:py-20"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://d2ol7oe51mr4n9.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/130837c4-0244-4f37-9c61-8d801d93fd29.jpg"
        aria-hidden="true"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260912_104303_0c6d60b2-9353-408e-9449-585108a22fb5.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay em gradiente para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg/90" />

      {/*
        WRAPPER EXATO DE CENTRALIZAÇÃO (Regra de Ouro):
        container mx-auto + padding lateral responsivo.
      */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badges — centralizados, com gap seguro */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:mb-8 sm:gap-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Clock size={16} className="text-volt" />
              <span className="text-xs font-medium text-white sm:text-sm">Entrega em 4h</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Shield size={16} className="text-volt" />
              <span className="text-xs font-medium text-white sm:text-sm">Frota Revisada</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
              <Headphones size={16} className="text-volt" />
              <span className="text-xs font-medium text-white sm:text-sm">Suporte 24h</span>
            </div>
          </div>

          {/* Título principal — text-center mantido em todos os breakpoints (consistência) */}
          <h1 className="mb-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block">Locação de Geradores</span>
            <span className="mt-2 block text-volt">com Entrega Rápida</span>
          </h1>

          {/* Subtítulo — largura de leitura controlada: max-w-2xl mx-auto */}
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
            Energia confiável para sua operação não parar. Geradores de 20 a 2.000 kVA
            com suporte técnico especializado em todo o Brasil.
          </p>

          {/* CTAs — mobile-first: w-full sm:w-auto */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-btn flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-105 sm:w-auto sm:text-lg"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={20} />
            </a>

            <Link
              to="/frota"
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/10 sm:w-auto sm:text-lg"
            >
              <span>Ver Frota</span>
            </Link>
          </div>

          {/* Stats do hero — grid com gap-4/gap-8, nunca elementos grudados */}
          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:mt-16 sm:gap-8 sm:pt-12">
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-volt sm:text-3xl lg:text-4xl">15+</div>
              <div className="text-xs text-white/60 sm:text-sm">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-volt sm:text-3xl lg:text-4xl">500+</div>
              <div className="text-xs text-white/60 sm:text-sm">Geradores</div>
            </div>
            <div className="text-center">
              <div className="mb-1 text-2xl font-bold text-volt sm:text-3xl lg:text-4xl">3.000+</div>
              <div className="text-xs text-white/60 sm:text-sm">Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
