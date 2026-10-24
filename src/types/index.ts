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
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
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
