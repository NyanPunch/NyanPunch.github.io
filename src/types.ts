export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  github?: string;
  demo?: string;
  role?: string;
  period?: string;
  references?: {
    type: 'demo' | 'paper' | 'video' | 'presentation';
    title: string;
    url: string;
  }[];
}