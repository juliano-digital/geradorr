import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { quoteSchema, type QuoteFormData } from '@/schemas/quoteSchema';
import { siteConfig } from '@/data/site';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    const message = `*Solicitação de Orçamento - VoltMax Geradores*\n\n` +
      `*Nome:* ${data.name}\n` +
      `*Empresa:* ${data.company || 'Não informado'}\n` +
      `*Telefone:* ${data.phone}\n` +
      `*E-mail:* ${data.email}\n` +
      `*Aplicação:* ${data.application}\n` +
      `*Potência estimada:* ${data.power || 'A definir'}\n` +
      `*Mensagem:* ${data.message || 'Sem mensagem adicional'}`;

    const link = buildWhatsAppLink(message);
    window.open(link, '_blank');
    setIsSubmitted(true);
    reset();

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contato" className="py-12 sm:py-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
              Solicite um orçamento personalizado ou tire suas dúvidas
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <FadeIn delay={0} x={-30}>
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">
                Fale Conosco
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-volt" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Telefone</p>
                    <p className="text-white font-medium text-sm sm:text-base">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-volt" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">WhatsApp</p>
                    <p className="text-white font-medium text-sm sm:text-base">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-volt" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">E-mail</p>
                    <p className="text-white font-medium text-sm sm:text-base">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-volt" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Endereço</p>
                    <p className="text-white font-medium text-sm sm:text-base">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-volt/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-volt" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Horário</p>
                    <p className="text-white font-medium text-sm sm:text-base">{siteConfig.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2} x={30}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Nome *
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    className={`
                      w-full px-4 py-3 rounded-xl
                      bg-white/5 border
                      text-white placeholder-white/30
                      focus:outline-none focus:border-volt
                      transition-colors duration-200
                      ${errors.name ? 'border-red-500' : 'border-white/10'}
                    `}
                    placeholder="Seu nome completo"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <input
                    {...register('company')}
                    id="company"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-volt transition-colors duration-200"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    className={`
                      w-full px-4 py-3 rounded-xl
                      bg-white/5 border
                      text-white placeholder-white/30
                      focus:outline-none focus:border-volt
                      transition-colors duration-200
                      ${errors.phone ? 'border-red-500' : 'border-white/10'}
                    `}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className={`
                      w-full px-4 py-3 rounded-xl
                      bg-white/5 border
                      text-white placeholder-white/30
                      focus:outline-none focus:border-volt
                      transition-colors duration-200
                      ${errors.email ? 'border-red-500' : 'border-white/10'}
                    `}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="application" className="block text-white text-sm font-medium mb-2">
                  Tipo de Aplicação *
                </label>
                <select
                  {...register('application')}
                  id="application"
                  className={`
                    w-full px-4 py-3 rounded-xl
                    bg-white/5 border
                    text-white
                    focus:outline-none focus:border-volt
                    transition-colors duration-200
                    ${errors.application ? 'border-red-500' : 'border-white/10'}
                  `}
                >
                  <option value="">Selecione...</option>
                  <option value="industrial">Indústria</option>
                  <option value="construcao">Construção Civil</option>
                  <option value="eventos">Eventos</option>
                  <option value="saude">Saúde</option>
                  <option value="comercial">Comércio</option>
                  <option value="agronegocio">Agronegócio</option>
                  <option value="emergencia">Emergência</option>
                </select>
                {errors.application && (
                  <p className="text-red-500 text-xs mt-1">{errors.application.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-volt transition-colors duration-200 resize-none"
                  placeholder="Descreva sua necessidade..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  gradient-btn w-full
                  px-8 py-4 rounded-full
                  text-white font-semibold text-base sm:text-lg
                  flex items-center justify-center gap-2
                  transition-all duration-200 hover:scale-105
                  disabled:opacity-50 disabled:cursor-not-allowed
                  min-h-[44px]
                "
              >
                <Send size={20} />
                <span>{isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}</span>
              </button>

              {isSubmitted && (
                <p className="text-green-500 text-sm font-medium text-center">
                  ✓ Redirecionando para o WhatsApp...
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
