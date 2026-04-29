import type { Experience } from '../types/experience.types';

export const experienceData: Experience[] = [
  {
    id: '1',
    company: 'Freelance',
    position: 'Développeur Full Stack & UI/UX Designer',
    period: '2023 - Présent',
    location: 'Yaoundé, Cameroun',
    description: 'Développement de solutions web et mobile pour divers clients dans le secteur de la santé, de l\'éducation et de l\'agriculture.',
    responsibilities: [
      'Conception et développement d\'applications web et mobiles complètes',
      'Création de designs UI/UX modernes et intuitifs',
      'Architecture de microservices et déploiement avec Docker et Kubernetes',
      'Gestion de projets et communication directe avec les clients',
      'Développement d\'APIs RESTful et GraphQL'
    ],
    technologies: ['React', 'React Native', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'Figma'],
    type: 'freelance'
  },
  {
    id: '2',
    company: 'Hôpitaux du Cameroun',
    position: 'UI/UX Designer',
    period: '2024 - Présent',
    location: 'Yaoundé, Cameroun',
    description: 'Membre de l\'équipe de conception pour le développement d\'une application de dermatologie destinée aux hôpitaux camerounais.',
    responsibilities: [
      'Recherche utilisateur et analyse des besoins des médecins',
      'Création de wireframes et prototypes interactifs',
      'Design de l\'interface utilisateur complète',
      'Élaboration d\'un design system cohérent',
      'Collaboration avec l\'équipe de développement'
    ],
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Design System'],
    type: 'work'
  },
  {
    id: '3',
    company: 'BloodLink',
    position: 'Développeur Full Stack',
    period: '2024',
    location: 'Yaoundé, Cameroun',
    description: 'Développement d\'une plateforme complète de gestion des dons de sang connectant donneurs et bénéficiaires.',
    responsibilities: [
      'Développement frontend avec React et React Native',
      'Création d\'APIs backend avec Node.js et Express',
      'Conception et gestion de base de données MongoDB',
      'Implémentation de l\'authentification et sécurité',
      'Déploiement et maintenance de l\'application'
    ],
    technologies: ['React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    type: 'work'
  },
  {
    id: '4',
    company: 'Terabia',
    position: 'Développeur Full Stack',
    period: '2024',
    location: 'Yaoundé, Cameroun',
    description: 'Développement d\'une plateforme de mise en relation entre agriculteurs et acheteurs pour faciliter le commerce agricole.',
    responsibilities: [
      'Architecture et développement de l\'application web et mobile',
      'Création d\'un système de gestion de produits et commandes',
      'Intégration de solutions de paiement sécurisées',
      'Optimisation des performances et de l\'expérience utilisateur',
      'Mise en place de tests automatisés'
    ],
    technologies: ['React', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Express'],
    type: 'work'
  },
  {
    id: '5',
    company: 'SmartSchool',
    position: 'Développeur Full Stack',
    period: '2023',
    location: 'Yaoundé, Cameroun',
    description: 'Développement d\'un système de gestion scolaire pour les établissements primaires.',
    responsibilities: [
      'Développement d\'une interface de gestion des notes et bulletins',
      'Création de tableaux de bord analytiques avec Chart.js',
      'Système de communication parents-enseignants',
      'Gestion des utilisateurs avec différents niveaux d\'accès',
      'Génération automatique de rapports PDF'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'PDF Generation'],
    type: 'work'
  },
  {
    id: '6',
    company: 'Topitoh',
    position: 'Développeur Mobile',
    period: '2023',
    location: 'Yaoundé, Cameroun',
    description: 'Développement d\'une application mobile de gestion de dossiers médicaux numériques pour les patients camerounais.',
    responsibilities: [
      'Développement de l\'application mobile avec React Native',
      'Implémentation du stockage sécurisé des données médicales',
      'Création d\'un système de partage sécurisé entre médecins',
      'Optimisation pour fonctionnement hors ligne',
      'Conformité avec les normes de sécurité des données de santé'
    ],
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Encryption'],
    type: 'work'
  }
];