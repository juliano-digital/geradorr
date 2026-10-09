import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { quoteSchema, type QuoteFormData } from '@/schemas/quoteSchema';
import { siteConfig } from '@/data/site';
import { buildWhatsAppLink } from '@/lib/whatsapp';

/**
 * CONTATO — seção reescrita para não quebrar o layout.
 *
 * Correções aplicadas:
 * 1. Wrapper exato de centralização: `container mx-auto px-4 sm:px-6 lg:px-8`.
 * 2. Espaçamento vertical rígido: py-12 (mobile) → py-16 (desktop).
 * 3. Grid mobile-first: `grid-cols-1 lg:grid-cols-2 gap-8` (nunca grudado).
 * 4. Inputs com `w-full min-w-0` + `max-w-full` no grid para o formulário
 *    nunca estourar a largura do container em telas pequenas.
 * 5. CTA `w-full sm:w-auto` (largos no celular, ajustados no desktop).
 */
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
    const message =
      `*Solicitação de Orçamento - VoltMax Geradores*\n\n` +
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

  // w-full + min-w-0 garante que o input jamais force overflow no mobile
  const inputClassName = (hasError: boolean) =>
    `w-full min-w-0 max-w-full rounded-lg border bg-white/5 px-4 py-3 text-white placeholder-white/30 transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-volt ${
      hasError ? 'border-red-500' : 'border-white/15'
    }`;

  return (
    <section id="contato" className="bg-bg py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header da seção — centralizado e consistente */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              Entre em Contato
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/70 sm:text-lg">
              Solicite um orçamento personalizado ou tire suas dúvidas
            </p>
          </FadeIn>
        </div>

        {/* Grid principal: 1 coluna no mobile, 2 colunas no desktop, gap-8 */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Informações de contato */}
          <FadeIn delay={0} x={-30}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white sm:text-2xl">Fale Conosco</h3>

              <div className="space-y-4">
                {[
                  { icon: Phone, label: 'Telefone', value: siteConfig.phone },
                  { icon: MessageCircle, label: 'WhatsApp', value: siteConfig.phone },
                  { icon: Mail, label: 'E-mail', value: siteConfig.email },
                  { icon: MapPin, label: 'Endereço', value: siteConfig.address },
                  { icon: Clock, label: 'Horário', value: siteConfig.hours },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-volt/10">
                      <Icon size={18} className="text-volt" />
                    </div>
                    <div className="min-w-0">
                      <p className="mb-1 text-xs uppercase tracking-wider text-white/60">{label}</p>
                      <p className="break-words text-sm font-medium text-white sm:text-base">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Formulário — protegido contra overflow com min-w-0/max-w-full */}
          <FadeIn delay={0.2} x={30} className="min-w-0 max-w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
              {/* Nome e Empresa */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="min-w-0">
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
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
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div className="min-w-0">
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-white">
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
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="min-w-0">
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
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
                    <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div className="min-w-0">
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
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
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Tipo de Aplicação */}
              <div className="min-w-0">
                <label htmlFor="application" className="mb-2 block text-sm font-medium text-white">
                  Tipo de Aplicação <span className="text-red-500">*</span>
                </label>
                <select
                  {...register('application')}
                  id="application"
                  className={inputClassName(!!errors.application)}
                >
                  <option value="" className="bg-bg">Selecione...</option>
                  <option value="industrial" className="bg-bg">Indústria</option>
                  <option value="construcao" className="bg-bg">Construção Civil</option>
                  <option value="eventos" className="bg-bg">Eventos</option>
                  <option value="saude" className="bg-bg">Saúde</option>
                  <option value="comercial" className="bg-bg">Comércio</option>
                  <option value="agronegocio" className="bg-bg">Agronegócio</option>
                  <option value="emergencia" className="bg-bg">Emergência</option>
                </select>
                {errors.application && (
                  <p className="mt-1 text-xs text-red-500">{errors.application.message}</p>
                )}
              </div>

              {/* Mensagem */}
              <div className="min-w-0">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
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

              {/* Submit — full-width no mobile, ajustado no desktop */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="gradient-btn flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100 sm:w-auto sm:text-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
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
                <p className="text-center text-sm font-medium text-green-500">
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
