export interface ExperienceItem {
  id: string;
  category: 'work' | 'education';
  organization: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  badge?: string;
  reference?: {
    name: string;
    title: string;
  };
}

export interface ProfessionalReference {
  id: string;
  name: string;
  role: string;
  organization: string;
  context: string;
}
