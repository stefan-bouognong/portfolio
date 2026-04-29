import type { SkillCategory } from '../types/skill.types';

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    color: '#3b82f6',
    skills: [
      { name: 'React.js', level: 95, category: 'frontend' },
      { name: 'TypeScript', level: 90, category: 'frontend' },
      { name: 'Next.js', level: 85, category: 'frontend' },
      { name: 'Tailwind CSS', level: 95, category: 'frontend' },
      { name: 'HTML5/CSS3', level: 98, category: 'frontend' },
      { name: 'JavaScript', level: 95, category: 'frontend' },
    ]
  },
  {
    title: 'Backend',
    color: '#8b5cf6',
    skills: [
      { name: 'Node.js', level: 88, category: 'backend' },
      { name: 'Express.js', level: 85, category: 'backend' },
      { name: 'MongoDB', level: 80, category: 'backend' },
      { name: 'PostgreSQL', level: 82, category: 'backend' },
      { name: 'REST API', level: 90, category: 'backend' },
      { name: 'GraphQL', level: 75, category: 'backend' },
      { name: 'DJANGO REST FRAMEWORK', level: 75, category: 'backend' },
    ]
  },
  {
    title: 'Mobile',
    color: '#f59e0b',
    skills: [
      { name: 'React Native', level: 90, category: 'mobile' },
      { name: 'Android Development', level: 72, category: 'mobile' },
    ]
  },
  {
    title: 'Design & Outils',
    color: '#ec4899',
    skills: [
      { name: 'Figma', level: 95, category: 'design' },
      { name: 'Photoshop', level: 50, category: 'design' },

      { name: 'UI/UX Design', level: 95, category: 'design' },
    ]
  },
  {
    title: 'DevOps & Architecture',
    color: '#10b981',
    skills: [
      { name: 'Git/GitHub', level: 90, category: 'devops' },
      { name: 'Docker', level: 85, category: 'devops' },
      { name: 'Kubernetes', level: 80, category: 'devops' },
      { name: 'CI/CD', level: 82, category: 'devops' },
      { name: 'Microservices', level: 85, category: 'devops' },
      { name: 'Vercel', level: 88, category: 'devops' },
    ]
  }
];