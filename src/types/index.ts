export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface Generator {
  id: string;
  name: string;
  power: number;
  fuel: string;
  noise: string;
  applications: string[];
  image: string;
  category: 'low' | 'mid' | 'high';
}

export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  power: string;
  images: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface MarqueeImage {
  id: string;
  src: string;
  alt: string;
}

export interface SiteConfig {
  name: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  hours: string;
  cnpj: string;
  socials: {
    instagram: string;
    linkedin: string;
    facebook: string;
  };
  heroImage: string;
}
