export interface Skill {
    name: string;
    level: number;
    category: string;
    icon?: string;
  }
  
  export interface SkillCategory {
    title: string;
    skills: Skill[];
    color: string;
  }