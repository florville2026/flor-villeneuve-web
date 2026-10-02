export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface ServiceDetail {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  includes: string[];
  cta: string;
}

export interface ServiceTopic {
  title: string;
  desc: string;
}

export interface VincularService {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  description: string;
  introParagraphs?: string[];
  duration: string;
  note: string;
  whatsappMessage: string;
  topics: ServiceTopic[];
  calLink?: string;
  calNamespace?: string;
}

export interface Pack {
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  cta: string;
}

export interface SongProject {
  title: string;
  description: string;
  duration?: string;
  year?: string;
}

export type BlogCategoryId = 'pareja' | 'crianza' | 'vinculos';

export interface BlogCategory {
  id: BlogCategoryId;
  label: string;
  description: string;
  anchor: string;
}

export interface BlogArticleSection {
  title?: string;
  paragraphs: string[];
  highlight?: string;
}

export interface BlogRelatedService {
  serviceId: string;
  title: string;
  slug: string;
  description: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: BlogCategoryId;
  categoryLabel: string;
  tags: string[];
  readingTime: string;
  publishedDate: string;
  excerpt: string;
  sections: BlogArticleSection[];
  relatedService: BlogRelatedService;
}