export interface ProjectMetric {
  value: string;
  label: string;
  isPositive?: boolean;
}

export interface Project {
  id: string;
  title: string;
  sector: string;
  sectorTag: string;
  description: string;
  metrics: ProjectMetric[];
  imageUrl?: string;
  tools?: string[];
  challenge?: string;
  solution?: string;
  impact?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'chart' | 'grid' | 'calculator' | 'file-check';
  badge?: string;
  features?: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: 'search' | 'sliders' | 'layout' | 'award';
}

export interface SiteConfig {
  consultant: {
    name: string;
    brandName: string;
    tagline: string;
    role: string;
    email: string;
    phoneDisplay: string;
    whatsappNumber: string; // e.g. "5491123456789"
    whatsappDefaultMessage: string;
    calendlyUrl: string;
    linkedinUrl: string;
    experienceYears: string;
    corporateBackground: string;
    certifications: string;
  };
}
