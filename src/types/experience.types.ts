export interface Experience {
    id: string;
    company: string;
    position: string;
    period: string;
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    type: 'work' | 'freelance' | 'internship';
  }