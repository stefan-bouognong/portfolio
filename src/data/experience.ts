import type { ExperienceItem, ProfessionalReference } from '../types/experience.types';

export const workExperienceData: ExperienceItem[] = [
  {
    id: 'mendo-company',
    category: 'work',
    organization: 'Mendo Company SAS',
    role: 'Web Developer & UX/UI Designer',
    period: '2026 — Present',
    location: 'Yaoundé, Cameroun',
    badge: 'Entreprise & Production',
    description: 'Conception et développement d\'interfaces UX/UI et d\'applications web modernes destinées à des produits numériques à fort impact.',
    highlights: [
      'Développement complet et mise en ligne du site officiel de Mendo Finances (https://www.mendofinances.com/) sous Next.js',
      'Participation active au développement et à l\'intégration de la plateforme digitale Mendo COTI',
      'Conception d\'interfaces UX/UI modernes, responsives et accessibles adaptées à tous les supports',
      'Création d\'un design system de composants réutilisables cohérents avec l\'identité de marque',
      'Développement frontend performant et collaboration étroite avec l\'équipe backend',
      'Travail sous la supervision directe de Mr Hugues Cedric NGBWA, CEO de Mendo Company SAS'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Python', 'Docker'],
    reference: {
      name: 'Mr Hugues Cedric NGBWA',
      title: 'CEO — Mendo Company SAS'
    }
  },
  {
    id: 'freelance',
    category: 'work',
    organization: 'Pratique Indépendante / Freelance',
    role: 'Web Developer · UI/UX Designer · Graphic Designer',
    period: '2023 — Présent',
    location: 'Yaoundé, Cameroun & International',
    badge: 'Freelance & Conseil',
    description: 'Accompagnement de clients dans la création d\'identités visuelles, d\'interfaces intuitives et de plateformes web sur mesure dans les secteurs de la santé, de l\'agriculture et de l\'éducation.',
    highlights: [
      'Conception d\'identités visuelles complètes, chartes graphiques et supports de communication (Canva, Adobe Suite)',
      'Recherche utilisateur, wireframing et prototypage interactif sous Figma',
      'Développement web et mobile complet (React, React Native, Next.js, Django)',
      'Optimisation continue de l\'ergonomie, des performances et de l\'accessibilité'
    ],
    technologies: ['Figma', 'Canva', 'React', 'React Native', 'Next.js', 'Python', 'Django', 'Docker', 'Git']
  },
  {
    id: 'hopitaux-cameroun',
    category: 'work',
    organization: 'Hôpitaux du Cameroun',
    role: 'Lead UI/UX Designer — Suite Dermatologie',
    period: '2024 — 2025',
    location: 'Yaoundé, Cameroun',
    badge: 'Santé Publique',
    description: 'Membre clé de l\'équipe de conception pour la numérisation et le suivi dermatologique en milieu hospitalier camerounais.',
    highlights: [
      'Analyse des besoins cliniques et entretiens de terrain avec les médecins spécialistes',
      'Création d\'un système de design accessible pour les consultations et diagnostics cutanés',
      'Élaboration de parcours utilisateurs simplifiés pour la téléconsultation hospitalière'
    ],
    technologies: ['Figma', 'UX Research', 'Design Systems', 'Prototypage', 'Accessibilité WCAG']
  },
  {
    id: 'bloodlink-exp',
    category: 'work',
    organization: 'BloodLink Platform',
    role: 'Web Developer & UI/UX Designer',
    period: '2024',
    location: 'Yaoundé, Cameroun',
    badge: 'Impact Social',
    description: 'Conception de l\'interface et développement de la solution facilitant la gestion et la mise en relation autour du don de sang.',
    highlights: [
      'Conception de l\'interface utilisateur et structuration du flux d\'urgence donneurs/bénéficiaires',
      'Développement d\'une architecture web moderne avec Next.js et API Django',
      'Développement mobile React Native pour les alertes donneurs en temps réel'
    ],
    technologies: ['React Native', 'Next.js', 'Django', 'REST APIs', 'Figma']
  },
  {
    id: 'terrabia-exp',
    category: 'work',
    organization: 'Terrabia Commerce Agricole',
    role: 'Web Developer & Designer UI/UX',
    period: '2024',
    location: 'Yaoundé, Cameroun',
    badge: 'AgriTech',
    description: 'Plateforme mettant en relation directe les producteurs agricoles et les restaurants pour faciliter le commerce équitable.',
    highlights: [
      'Conception de l\'expérience et de l\'interface utilisateur, de la structuration des parcours jusqu\'à l\'identité visuelle de la plateforme',
      'Développement web des catalogues de produits, gestion des commandes et transactions directes',
      'Optimisation responsive mobile first pour les producteurs agricoles sur le terrain'
    ],
    technologies: ['Figma', 'React', 'TypeScript', 'REST APIs', 'Identité Visuelle']
  }
];

export const educationData: ExperienceItem[] = [
  {
    id: 'master-2-recherche',
    category: 'education',
    organization: 'Université de Yaoundé 1',
    role: 'Master 2 Recherche en Informatique',
    period: '2026 — En cours',
    location: 'Yaoundé, Cameroun',
    badge: 'Postgraduate / Recherche',
    description: 'Approfondissement des méthodologies de recherche en informatique, modélisation de systèmes logiciels avancés et architectures distribuées.',
    highlights: [
      'Méthodologie de recherche scientifique en informatique appliquée',
      'Conception et évaluation formelle d\'interfaces et de systèmes logiciels complexes',
      'Participation aux séminaires de recherche du département d\'informatique'
    ]
  },
  {
    id: 'master-1-sigl',
    category: 'education',
    organization: 'Université de Yaoundé 1',
    role: 'Master 1 Recherche en Informatique — Option SIGL',
    period: '2025 — 2026',
    location: 'Yaoundé, Cameroun',
    badge: 'Systèmes d\'Information & Génie Logiciel',
    description: 'Spécialisation en Systèmes d\'Information et Génie Logiciel (SIGL), architectures logicielles, tests et qualité logicielle.',
    highlights: [
      'Architecture logicielle avancée et conception orientée objet',
      'Bases de données avancées, sécurité informatique et protocoles réseaux',
      'Ingénierie logicielle et gestion de projets numériques d\'envergure'
    ]
  },
  {
    id: 'stage-academique',
    category: 'education',
    organization: 'Département Informatique — Université de Yaoundé 1',
    role: 'Stage Académique en Conception Logicielle',
    period: '2025',
    location: 'Yaoundé, Cameroun',
    badge: 'Laboratoire Universitaire',
    description: 'Première expérience significative dans la conception de solutions logicielles et d\'interfaces, encadrée au sein du département d\'informatique de l\'université.',
    highlights: [
      'Conception et spécification d\'architectures logicielles et d\'interfaces utilisateurs',
      'Rigueur méthodologique et tests fonctionnels en environnement universitaire',
      'Collaboration académique et encadrement direct par le Dr Valery Monthe'
    ],
    reference: {
      name: 'Dr Valery Monthe',
      title: 'Université de Yaoundé 1 — Encadreur académique'
    }
  },
  {
    id: 'licence-info',
    category: 'education',
    organization: 'Université de Yaoundé 1',
    role: 'Licence en Informatique',
    period: '2025',
    location: 'Yaoundé, Cameroun',
    badge: 'Diplôme d\'État',
    description: 'Formation fondamentale complète en algorithmique, structures de données, développement logiciel, bases de données et mathématiques appliquées.',
    highlights: [
      'Programmation impérative et orientée objet, systèmes d\'exploitation, architecture des ordinateurs',
      'Bases de données relationnelles (SQL) et développement web fondamental',
      'Obtention de la Licence avec mention'
    ]
  }
];

export const referencesData: ProfessionalReference[] = [
  {
    id: 'ref-ngbwa',
    name: 'Mr Hugues Cedric NGBWA',
    role: 'CEO',
    organization: 'Mendo Company SAS',
    context: 'Direction générale & encadrement professionnel sur les produits numériques et la plateforme Mendo Coti'
  },
  {
    id: 'ref-monthe',
    name: 'Dr Valery Monthe',
    role: 'Enseignant-Chercheur & Encadreur Académique',
    organization: 'Université de Yaoundé 1',
    context: 'Supervision et encadrement au sein du Département d\'Informatique'
  },
  {
    id: 'ref-kimbi',
    name: 'Pr. KIMBI XAVERIA',
    role: 'Professeure & Superviseure de Recherche',
    organization: 'Université de Yaoundé 1',
    context: 'Supervision académique et méthodologique du projet de plateforme KIMVIEware'
  }
];
