import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = 'VoltMax Geradores | Locação de Geradores com Entrega Rápida e Suporte 24h',
  description = 'Locação de geradores de 20 a 2.000 kVA com entrega em até 4h. Frota revisada, suporte técnico 24h e atendimento em todo o Brasil. Solicite seu orçamento!',
  keywords = 'locação de geradores, gerador de energia, gerador diesel, gerador para eventos, gerador industrial, gerador 24h'
}) => {
  useEffect(() => {
    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
  }, [title, description, keywords]);

  return null;
};
