# VoltMax Geradores - Site Institucional

Site institucional completo para empresa de locação de geradores de energia, desenvolvido com React, TypeScript, Vite, Tailwind CSS, Framer Motion e Lucide React. Com múltiplas páginas e otimização SEO completa.

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📄 Páginas

O site possui 6 páginas otimizadas para SEO:

- **/** - Home (página principal com todas as seções)
- **/sobre** - Sobre a empresa, valores e história
- **/servicos** - Serviços oferecidos (locação, manutenção, instalação)
- **/frota** - Catálogo de geradores (20 a 2.000 kVA)
- **/projetos** - Cases de sucesso e projetos realizados
- **/contato** - Formulário de contato e informações

## 🔍 SEO Implementado

### Meta Tags Dinâmicas
- Title único por página
- Meta description otimizada
- Keywords específicas
- Open Graph (Facebook, LinkedIn)
- Canonical URLs

### Structured Data (JSON-LD)
- Organization schema
- Service schema
- Product schema
- ContactPage schema
- AboutPage schema
- CollectionPage schema

### Navegação
- Breadcrumbs em todas as páginas
- Menu responsivo com efeito glow
- Links internos otimizados
- Sitemap XML

### Performance
- Lazy loading de imagens
- Code splitting automático
- Otimização de assets
- Fontes com preconnect

## 📁 Estrutura do Projeto

```
src/
├── pages/                   # Páginas individuais
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── FleetPage.tsx
│   ├── ProjectsPage.tsx
│   └── ContactPage.tsx
├── components/
│   ├── SEO.tsx              # Componente SEO reutilizável
│   ├── layout/
│   │   ├── Layout.tsx       # Layout compartilhado
│   │   ├── Navbar.tsx       # Navbar com rotas
│   │   ├── Footer.tsx       # Footer com rotas
│   │   ├── Breadcrumbs.tsx  # Navegação hierárquica
│   │   └── WhatsAppFloat.tsx
│   ├── ui/                  # Componentes reutilizáveis
│   └── sections/            # Seções da página
├── data/                    # Conteúdo e configurações
├── hooks/                   # Custom hooks
├── lib/                     # Utilitários
├── schemas/                 # Validação Zod
└── types/                   # Tipos TypeScript
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

- Imagens do hero e placeholders: edite `src/data/site.ts`
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
- React Router DOM
- React Hook Form + Zod
- clsx + tailwind-merge

## 📊 Otimizações SEO

### On-Page SEO
- ✅ Títulos únicos e descritivos
- ✅ Meta descriptions otimizadas
- ✅ URLs amigáveis (slugs)
- ✅ Estrutura de headings (H1, H2, H3)
- ✅ Alt text em todas as imagens
- ✅ Links internos relevantes
- ✅ Breadcrumbs
- ✅ Canonical URLs

### Technical SEO
- ✅ Sitemap XML
- ✅ Robots.txt
- ✅ Structured Data (JSON-LD)
- ✅ Open Graph tags
- ✅ Mobile-first design
- ✅ Performance otimizada
- ✅ HTTPS ready

### Content SEO
- ✅ Conteúdo rico e relevante
- ✅ Keywords estratégicas
- ✅ CTAs claros
- ✅ Informações de contato completas
- ✅ FAQ para featured snippets

## 📱 Responsividade

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Tipografia fluida com clamp()
- Menu mobile otimizado
- Touch-friendly

## 🎨 Features

- Efeito glow neon nos botões
- Animações com Framer Motion
- Marquee com parallax
- Cards com hover effects
- Accordion acessível
- Formulário com validação
- Integração WhatsApp
- Contadores animados
- Efeito magnético
