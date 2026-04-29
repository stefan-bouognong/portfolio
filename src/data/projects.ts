import type { Project } from '../types/project.types';

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'BloodLink',
    description: 'Application mobile et web de don de sang pour faciliter la connexion entre donneurs et bénéficiaires.',
    longDescription: 'BloodLink est une plateforme complète qui révolutionne le don de sang en créant un pont entre les donneurs volontaires et les personnes dans le besoin. L\'application offre une interface intuitive pour gérer les demandes urgentes, planifier les dons et suivre l\'historique des contributions.',
    image: 'bloodlink', // Identifiant pour l'icône
    technologies: ['React', 'React Native', 'Node.js', 'MongoDB', 'Express'],
    category: 'fullstack',
    link: 'https://bloodlink-web-nu9s.onrender.com',
    role: 'Développeur Full Stack',
    year: '2024',
    status: 'completed'
  },
  {
    id: '2',
    title: 'Terabia',
    description: 'Plateforme de mise en relation entre agriculteurs et acheteurs pour faciliter le commerce agricole.',
    longDescription: 'Terabia connecte directement les agriculteurs avec les acheteurs, éliminant les intermédiaires et permettant des transactions équitables. La plateforme offre des fonctionnalités de gestion de produits, de commandes et de paiements sécurisés.',
    image: 'terabia',
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    link: 'https://frontweb-terabia.onrender.com',
    role: 'Développeur Full Stack',
    year: '2024',
    status: 'completed'
  },
  {
    id: '3',
    title: 'SmartSchool',
    description: 'Application web de gestion de notes pour les établissements primaires.',
    longDescription: 'SmartSchool digitalise la gestion académique des écoles primaires avec un système complet de gestion des notes, des bulletins, du suivi des élèves et de la communication avec les parents. L\'interface intuitive facilite le travail des enseignants et l\'accès aux informations pour les parents.',
    image: 'smartschool',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    category: 'web',
    role: 'Développeur Full Stack',
    year: '2023',
    status: 'completed'
  },
  {
    id: '4',
    title: 'Topitoh',
    description: 'Application mobile de gestion de dossiers numériques des patients au Cameroun.',
    longDescription: 'Topitoh modernise la gestion des dossiers médicaux au Cameroun en offrant une solution mobile sécurisée pour stocker, accéder et partager les informations médicales des patients. L\'application améliore la continuité des soins et facilite le suivi médical.',
    image: 'topitoh',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    category: 'mobile',
    role: 'Développeur Mobile',
    year: '2023',
    status: 'completed'
  },
  {
    id: '5',
    title: 'Application Dermatologie',
    description: 'Application mobile et web de dermatologie pour les hôpitaux du Cameroun.',
    longDescription: 'Plateforme complète de gestion dermatologique permettant aux médecins de diagnostiquer, suivre et traiter les pathologies cutanées. L\'application facilite la téléconsultation et le suivi des patients à distance.',
    image: 'dermato',
    technologies: ['Figma', 'Adobe XD', 'React Native', 'React', 'Design System'],
    category: 'design',
    role: 'UI/UX Designer',
    year: '2024',
    status: 'in-progress'
  }
];

export const categories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'design', label: 'Design' }
];