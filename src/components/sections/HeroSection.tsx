import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Headphones } from 'lucide-react';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { siteConfig } from '@/data/site';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/60 to-bg/90" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock size={16} className="text-volt" />
              <span className="text-white text-xs sm:text-sm font-medium">Entrega em 4h</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Shield size={16} className="text-volt" />
              <span className="text-white text-xs sm:text-sm font-medium">Frota Revisada</span>
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Headphones size={16} className="text-volt" />
              <span className="text-white text-xs sm:text-sm font-medium">Suporte 24h</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block">Locação de Geradores</span>
            <span className="block text-volt mt-2">com Entrega Rápida</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Energia confiável para sua operação não parar. Geradores de 20 a 2.000 kVA com suporte técnico especializado em todo o Brasil.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="
                gradient-btn w-full sm:w-auto
                px-8 py-4 rounded-full
                text-white font-semibold text-base sm:text-lg
                flex items-center justify-center gap-2
                transition-all duration-200 hover:scale-105
                min-h-[44px]
              "
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight size={20} />
            </a>
            
            <Link
              to="/frota"
              className="
                w-full sm:w-auto
                px-8 py-4 rounded-full
                border-2 border-white/20
                text-white font-semibold text-base sm:text-lg
                flex items-center justify-center gap-2
                transition-all duration-200 hover:bg-white/10 hover:border-white/40
                min-h-[44px]
              "
            >
              <span>Ver Frota</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-volt mb-1">15+</div>
              <div className="text-xs sm:text-sm text-white/60">Anos de Mercado</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-volt mb-1">500+</div>
              <div className="text-xs sm:text-sm text-white/60">Geradores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-volt mb-1">3.000+</div>
              <div className="text-xs sm:text-sm text-white/60">Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
