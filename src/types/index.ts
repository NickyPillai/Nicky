export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface Skill {
  category: string;
  icon: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  impact?: string;
  link: string;
  type: "case-study" | "external";
  tags: string[];
  client?: string;
  tagColor?: "green" | "purple" | "gold";
}

export interface AIProject {
  title: string;
  description: string;
  techTags: string[];
  link: string;
  status: "live" | "in-progress" | "concept";
}

export interface Role {
  title: string;
  duration: string;
}

export interface ExperienceRole {
  role: string;
  duration: string;
  company: string;
  companyDetail: string;
  highlights: string[];
}

export interface Experience {
  company: string;
  location: string;
  roles: Role[];
  highlights: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Award {
  name: string;
  year: string;
  link?: string;
  image?: string;
  accent?: string;
}

export interface ImpactCard {
  number: string;
  metric: string;
  context: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface FormData {
  name: string;
  email: string;
  company: string;
  role: string;
  serviceType: string;
  message: string;
}
