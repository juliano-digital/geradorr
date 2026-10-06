import type { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-01',
    name: 'Carlos Mendes',
    company: 'Construtora Horizonte',
    role: 'Diretor de Operações',
    text: 'A VoltMax entregou o gerador em menos de 4 horas e manteve nossa obra funcionando sem nenhuma interrupção. Equipe técnica impecável.',
    rating: 5,
  },
  {
    id: 'test-02',
    name: 'Ana Beatriz Silva',
    company: 'Hospital Vida Nova',
    role: 'Gerente de Infraestrutura',
    text: 'Contratamos a VoltMax para o plano de contingência do hospital. O suporte 24h e a confiabilidade dos equipamentos nos dão total segurança.',
    rating: 5,
  },
  {
    id: 'test-03',
    name: 'Roberto Almeida',
    company: 'Promotora Sunset Events',
    role: 'Produtor Executivo',
    text: 'Já realizamos mais de 20 eventos com a VoltMax. Geradores silenciosos, entrega pontual e preço justo. Parceiros de confiança.',
    rating: 5,
  },
];
