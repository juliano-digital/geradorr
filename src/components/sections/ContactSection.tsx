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

  const inputClassName = (hasError: boolean) => `
    w-full px-4 py-3 border rounded-lg
    bg-white/5 text-white placeholder-white/30
    focus:ring-2 focus:ring-blue-500 focus:border-transparent
    transition-all duration-200
    ${hasError ? 'border-red-500' : 'border-gray-300'}
  `;

  return (
    <section id="contato" className="py-12 sm:py-16 bg-[#0a0a0a] mb-16">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Nome e Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('name')}
                    id="name"
                    type="text"
                    className={inputClassName(!!errors.name)}
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
                    className={inputClassName(false)}
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              {/* Telefone e E-mail */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white text-sm font-medium mb-2">
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    className={inputClassName(!!errors.phone)}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className={inputClassName(!!errors.email)}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Tipo de Aplicação - Full Width */}
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="application" className="block text-white text-sm font-medium mb-2">
                  Tipo de Aplicação <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('application')}
                  id="application"
                  className={inputClassName(!!errors.application)}
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

              {/* Mensagem - Full Width */}
              <div className="col-span-1 md:col-span-2">
                <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className={`${inputClassName(false)} resize-none`}
                  placeholder="Descreva sua necessidade..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  gradient-btn w-full
                  px-8 py-4 rounded-lg
                  text-white font-semibold text-base sm:text-lg
                  flex items-center justify-center gap-2
                  transition-all duration-200 hover:scale-105
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                  min-h-[44px]
                "
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Enviar via WhatsApp</span>
                  </>
                )}
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
