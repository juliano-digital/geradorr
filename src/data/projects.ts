import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'proj-01',
    number: '01',
    category: 'Saúde',
    title: 'Hospital Regional',
    power: '500 kVA',
    images: [
      'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400&q=80',
      'https://images.unsplash.com/photo-1519494025-9bb5601beed4?w=400&q=80',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80',
    ],
  },
  {
    id: 'proj-02',
    number: '02',
    category: 'Eventos',
    title: 'Festival Sunset',
    power: '3 geradores de 250 kVA',
    images: [
      'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&q=80',
      'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80',
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&q=80',
    ],
  },
  {
    id: 'proj-03',
    number: '03',
    category: 'Indústria',
    title: 'Fábrica Metalúrgica Alfa',
    power: '1.000 kVA',
    images: [
      'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=400&q=80',
      'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    ],
  },
];
