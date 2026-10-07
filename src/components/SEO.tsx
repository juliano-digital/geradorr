import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  jsonLd?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical,
  jsonLd,
}) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    // Keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.name = 'keywords';
        newMeta.content = keywords;
        document.head.appendChild(newMeta);
      }
    }

    // Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('property', 'og:title');
      newMeta.content = title;
      document.head.appendChild(newMeta);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('property', 'og:description');
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }

    if (ogImage) {
      const ogImg = document.querySelector('meta[property="og:image"]');
      if (ogImg) {
        ogImg.setAttribute('content', ogImage);
      } else {
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('property', 'og:image');
        newMeta.content = ogImage;
        document.head.appendChild(newMeta);
      }
    }

    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    if (ogTypeMeta) {
      ogTypeMeta.setAttribute('content', ogType);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.setAttribute('property', 'og:type');
      newMeta.content = ogType;
      document.head.appendChild(newMeta);
    }

    // Canonical
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonical);
      } else {
        const newLink = document.createElement('link');
        newLink.rel = 'canonical';
        newLink.href = canonical;
        document.head.appendChild(newLink);
      }
    }

    // JSON-LD Structured Data
    if (jsonLd) {
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    // Cleanup
    return () => {
      const jsonLdScript = document.querySelector('script[type="application/ld+json"]');
      if (jsonLdScript) {
        jsonLdScript.remove();
      }
    };
  }, [title, description, keywords, ogImage, ogType, canonical, jsonLd]);

  return null;
};
