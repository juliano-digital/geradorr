import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { quoteSchema, type QuoteFormData } from '@/schemas/quoteSchema';
import { siteConfig } from '@/data/site';
import { buildWhatsAppLink } from '@/lib/whatsapp';
import { cn } from '@/lib/cn';

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
    <section
      id="contato"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-12 sm:mb-16 md:mb-20 text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Contato
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <FadeIn delay={0} x={-30}>
            <div className="space-y-8">
              <h3 className="text-[#0C0C0C] font-bold text-xl sm:text-2xl">
                Fale com nossa equipe
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0C0C0C]/5 flex items-center justify-center">
                    <Phone size={18} className="text-[#0C0C0C]" />
                  </div>
                  <div>
                    <p className="text-[#0C0C0C]/50 text-xs uppercase tracking-wider">Telefone</p>
                    <p className="text-[#0C0C0C] font-medium">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0C0C0C]/5 flex items-center justify-center">
                    <MessageCircle size={18} className="text-[#0C0C0C]" />
                  </div>
                  <div>
                    <p className="text-[#0C0C0C]/50 text-xs uppercase tracking-wider">WhatsApp</p>
                    <p className="text-[#0C0C0C] font-medium">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0C0C0C]/5 flex items-center justify-center">
                    <Mail size={18} className="text-[#0C0C0C]" />
                  </div>
                  <div>
                    <p className="text-[#0C0C0C]/50 text-xs uppercase tracking-wider">E-mail</p>
                    <p className="text-[#0C0C0C] font-medium">{siteConfig.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0C0C0C]/5 flex items-center justify-center">
                    <MapPin size={18} className="text-[#0C0C0C]" />
                  </div>
                  <div>
                    <p className="text-[#0C0C0C]/50 text-xs uppercase tracking-wider">Endereço</p>
                    <p className="text-[#0C0C0C] font-medium">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0C0C0C]/5 flex items-center justify-center">
                    <Clock size={18} className="text-[#0C0C0C]" />
                  </div>
                  <div>
                    <p className="text-[#0C0C0C]/50 text-xs uppercase tracking-wider">Horário</p>
                    <p className="text-[#0C0C0C] font-medium">{siteConfig.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.633!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsijMzcnNTguOCJX!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização VoltMax Geradores"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right - Form */}
          <FadeIn delay={0.2} x={30}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-[#0C0C0C] text-sm font-medium mb-1.5">
                  Nome *
                </label>
                <input
                  {...register('name')}
                  id="name"
                  type="text"
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border-2 bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/30',
                    'focus:outline-none focus:border-volt transition-colors duration-200',
                    errors.name ? 'border-red-400' : 'border-[#0C0C0C]/15'
                  )}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-[#0C0C0C] text-sm font-medium mb-1.5">
                  Empresa
                </label>
                <input
                  {...register('company')}
                  id="company"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0C0C0C]/15 bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/30 focus:outline-none focus:border-volt transition-colors duration-200"
                  placeholder="Nome da empresa"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-[#0C0C0C] text-sm font-medium mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    {...register('phone')}
                    id="phone"
                    type="tel"
                    className={cn(
                      'w-full px-4 py-3 rounded-xl border-2 bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/30',
                      'focus:outline-none focus:border-volt transition-colors duration-200',
                      errors.phone ? 'border-red-400' : 'border-[#0C0C0C]/15'
                    )}
                    placeholder="(11) 99999-9999"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#0C0C0C] text-sm font-medium mb-1.5">
                    E-mail *
                  </label>
                  <input
                    {...register('email')}
                    id="email"
                    type="email"
                    className={cn(
                      'w-full px-4 py-3 rounded-xl border-2 bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/30',
                      'focus:outline-none focus:border-volt transition-colors duration-200',
                      errors.email ? 'border-red-400' : 'border-[#0C0C0C]/15'
                    )}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="application" className="block text-[#0C0C0C] text-sm font-medium mb-1.5">
                  Tipo de Aplicação *
                </label>
                <select
                  {...register('application')}
                  id="application"
                  className={cn(
                    'w-full px-4 py-3 rounded-xl border-2 bg-transparent text-[#0C0C0C]',
                    'focus:outline-none focus:border-volt transition-colors duration-200',
                    errors.application ? 'border-red-400' : 'border-[#0C0C0C]/15'
                  )}
                >
                  <option value="">Selecione...</option>
                  <option value="industrial">Indústria</option>
                  <option value="construcao">Construção Civil</option>
                  <option value="eventos">Eventos</option>
                  <option value="saude">Saúde / Hospitalar</option>
                  <option value="comercial">Comércio</option>
                  <option value="agronegocio">Agronegócio</option>
                  <option value="emergencia">Emergência</option>
                  <option value="outro">Outro</option>
                </select>
                {errors.application && (
                  <p className="text-red-500 text-xs mt-1">{errors.application.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="power" className="block text-[#0C0C0C] text-sm font-medium mb-1.5">
                  Potência Estimada (kVA)
                </label>
                <input
                  {...register('power')}
                  id="power"
                  type="text"
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0C0C0C]/15 bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/30 focus:outline-none focus:border-volt transition-colors duration-200"
                  placeholder="Ex: 150 kVA"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-[#0C0C0C] text-sm font-medium mb-1.5">
                  Mensagem
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#0C0C0C]/15 bg-transparent text-[#0C0C0C] placeholder-[#0C0C0C]/30 focus:outline-none focus:border-volt transition-colors duration-200 resize-none"
                  placeholder="Descreva sua necessidade..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  'gradient-btn w-full rounded-full text-white font-medium uppercase tracking-widest',
                  'px-8 py-4 text-sm sm:text-base',
                  'outline outline-2 outline-[#0C0C0C] -outline-offset-[3px]',
                  'transition-transform duration-200 hover:scale-[1.02]',
                  'disabled:opacity-50 disabled:cursor-not-allowed'
                )}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
              </button>

              {isSubmitted && (
                <p className="text-green-600 text-sm font-medium text-center">
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
