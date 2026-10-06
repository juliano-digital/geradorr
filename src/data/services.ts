import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'locacao',
    number: '01',
    title: 'Locação de Geradores',
    description: 'Geradores de 20 a 2.000 kVA para locação diária, mensal ou de longo prazo, com entrega e retirada no local.',
    icon: 'Zap',
  },
  {
    id: 'manutencao',
    number: '02',
    title: 'Manutenção Preventiva e Corretiva',
    description: 'Revisões programadas e atendimento técnico especializado para garantir máxima disponibilidade do equipamento.',
    icon: 'Wrench',
  },
  {
    id: 'instalacao',
    number: '03',
    title: 'Instalação e Quadros de Transferência',
    description: 'Projeto e instalação completa com QTA, cabeamento e adequação às normas técnicas vigentes.',
    icon: 'Cable',
  },
  {
    id: 'eventos',
    number: '04',
    title: 'Energia para Eventos',
    description: 'Soluções silenciosas e seguras para shows, feiras, festivais e eventos corporativos de qualquer porte.',
    icon: 'PartyPopper',
  },
  {
    id: 'emergencia',
    number: '05',
    title: 'Emergência 24h',
    description: 'Plantão técnico e entrega urgente para quedas de energia, hospitais, data centers e operações críticas.',
    icon: 'Siren',
  },
];
