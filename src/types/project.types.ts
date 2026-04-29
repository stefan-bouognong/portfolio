export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    category: 'web' | 'mobile' | 'fullstack' | 'design';
    link?: string;
    github?: string;
    role: string;
    year: string;
    status: 'completed' | 'in-progress';
  }