import { z } from 'zod';

export const quoteSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  company: z.string().optional(),
  phone: z.string().min(10, 'Telefone inválido'),
  email: z.string().email('E-mail inválido'),
  application: z.string().min(1, 'Selecione o tipo de aplicação'),
  power: z.string().optional(),
  message: z.string().optional(),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
