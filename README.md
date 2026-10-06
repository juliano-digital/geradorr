# VoltMax Geradores - Site Institucional

Site institucional completo para empresa de locação de geradores de energia, desenvolvido com React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide React.

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Navbar, Footer, WhatsAppFloat
│   ├── ui/              # Componentes reutilizáveis (botões, cards, animações)
│   └── sections/        # Seções da página
├── data/                # Todos os textos, links e configurações
├── hooks/               # Custom hooks
├── lib/                 # Utilitários (cn, whatsapp)
├── schemas/             # Validação Zod
├── types/               # Tipos TypeScript
└── styles/              # CSS global
```

## ⚙️ Configuração

Para alterar nome, telefone, WhatsApp, e-mail e demais dados da empresa, edite o arquivo:

**`src/data/site.ts`**

```typescript
export const siteConfig: SiteConfig = {
  name: 'VoltMax Geradores',
  phone: '(11) 4002-8922',
  whatsapp: '5511940028922',  // formato internacional sem +
  email: 'contato@voltmaxgeradores.com.br',
  address: 'Av. Industrial, 1500 - São Paulo - SP',
  hours: 'Segunda a Sábado, 7h às 18h | Emergências 24h',
  // ...
};
```

## 🖼️ Imagens

- Imagens do hero e placeholders: edite `src/data/site.ts` (campo `heroImage`)
- Imagens da marquee: edite `src/data/marquee.ts`
- Imagens da frota: edite `src/data/fleet.ts`
- Imagens dos projetos: edite `src/data/projects.ts`
- Coloque imagens locais em `public/images/`

## 🛠️ Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Hook Form + Zod
- clsx + tailwind-merge
