export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaMessage: string;
  accent: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  short: string;
  category: string;
  subtitle: string;
  description: string;
  domain: string;
  liveUrl: string;
  tags: string[];
  features: string[];
  verifiedBadge: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}
