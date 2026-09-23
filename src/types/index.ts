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
  duration: string;
  note: string;
  whatsappMessage: string;
  topics: ServiceTopic[];
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