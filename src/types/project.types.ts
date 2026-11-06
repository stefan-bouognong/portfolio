export type ProjectCategory = 'all' | 'ui-ux' | 'graphic-design' | 'web-development';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  imageUrl?: string;
  technologies: string[];
  category: 'ui-ux' | 'graphic-design' | 'web-development';
  categoryLabel: string;
  link?: string;
  github?: string;
  role: string;
  year: string;
  status: 'completed' | 'in-progress';
  featured?: boolean;
  metrics?: string;
}

export interface CategoryFilter {
  id: ProjectCategory;
  label: string;
  count?: number;
}
