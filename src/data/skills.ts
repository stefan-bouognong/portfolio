export interface SkillGroup {
  number: string;
  discipline: string;
  summary: string;
  primaryTools: string[];
  capabilities: {
    name: string;
    description: string;
  }[];
  stack: string[];
}

export const disciplinesData: SkillGroup[] = [
  {
    number: '01',
    discipline: 'UI/UX Design',
    summary: 'Conception d\'identités visuelles et d\'interfaces numériques claires, cohérentes et centrées sur l\'utilisateur, du concept graphique à l\'intégration finale.',
    primaryTools: ['Figma', 'Canva', 'Prototypage Interactif', 'Design Systems'],
    capabilities: [
      {
        name: 'Conception Centrée Utilisateur & Recherche',
        description: 'Analyse des parcours utilisateurs, entretiens de terrain, hiérarchie visuelle et structuration rigoureuse de l\'information.'
      },
      {
        name: 'Design Systems & Composants Réutilisables',
        description: 'Création de bibliothèques visuelles cohérentes avec l\'identité de marque et spécifications de design tokens.'
      },
      {
        name: 'Prototypage & Wireframing',
        description: 'Prototypage haute fidélité sous Figma et Canva, validation des flux de navigation et micro-interactions.'
      },
      {
        name: 'Design Responsive & Multi-supports',
        description: 'Conception d\'interfaces adaptées à tous les écrans (desktop, tablette, mobile) dans le respect des normes d\'accessibilité.'
      }
    ],
    stack: [
      'Figma',
      'Canva',
      'UX Design',
      'UI Design',
      'Prototypage',
      'Design Systems',
      'Responsive Design',
      'Conception Centrée Utilisateur',
      'Hiérarchie Visuelle'
    ]
  },
  {
    number: '02',
    discipline: 'Graphic Design',
    summary: 'Création d\'identités de marque mémorables, typographie expressive et supports publicitaires alliant esthétique et impact visuel.',
    primaryTools: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Typographie Suisse'],
    capabilities: [
      {
        name: 'Identité Visuelle & Cohérence de Marque',
        description: 'Logotypes, palettes chromatiques harmonisées, directives de marque et communication visuelle complète.'
      },
      {
        name: 'Typographie & Composition Graphique',
        description: 'Application rigoureuse des grilles suisses, équilibre des blancs et proportions harmonieuses du texte.'
      },
      {
        name: 'Campagnes Publicitaires & Affiches Mobiles',
        description: 'Conception d\'affiches et de visuels promotionnels à fort impact pour les réseaux et supports mobiles.'
      },
      {
        name: 'Direction Artistique Digitale',
        description: 'Création d\'univers visuels distinctifs valorisant les produits numériques et les entreprises.'
      }
    ],
    stack: [
      'Identité Visuelle',
      'Branding & Charte Graphique',
      'Typographie',
      'Composition Graphique',
      'Canva',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Affiches Publicitaires',
      'Direction Artistique'
    ]
  },
  {
    number: '03',
    discipline: 'Web Development',
    summary: 'Développement d\'applications web et mobiles performantes, maintenables et évolutives avec les technologies modernes.',
    primaryTools: ['React', 'Next.js', 'TypeScript', 'Python', 'Django', 'React Native'],
    capabilities: [
      {
        name: 'Développement Frontend Réactif',
        description: 'Applications web modernes, rapides et modulaires avec React, Next.js, TypeScript, JavaScript et Tailwind CSS.'
      },
      {
        name: 'Architecture Backend & API REST',
        description: 'Conception d\'APIs robustes en Python / Django et Node.js / Express, modélisation de bases de données et sécurité.'
      },
      {
        name: 'Développement Mobile Cross-Platform',
        description: 'Applications mobiles natives et hybrides pour iOS et Android propulsées par React Native.'
      },
      {
        name: 'Outils & Environnement Logiciel',
        description: 'Conteneurisation Docker, versioning Git / GitHub, tests logiciels et déploiement continu.'
      }
    ],
    stack: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML / CSS',
      'Tailwind CSS',
      'Python',
      'Django',
      'REST APIs',
      'React Native',
      'Git',
      'GitHub',
      'Docker',
      'Architecture Logicielle',
      'Tests Logiciels'
    ]
  }
];

export const softSkillsData = [
  {
    name: 'Conception Centrée Utilisateur',
    description: 'Compréhension empathique des besoins et ergonomie rigoureuse de chaque écran.',
    icon: 'Lightbulb'
  },
  {
    name: 'Esprit d\'Analyse',
    description: 'Décomposition méthodique des problèmes complexes et exigences métier.',
    icon: 'Puzzle'
  },
  {
    name: 'Résolution de Problèmes',
    description: 'Orientation pragmatique vers des solutions techniques et visuelles viables.',
    icon: 'Check'
  },
  {
    name: 'Adaptabilité',
    description: 'Aisance naturelle à naviguer entre design graphique, recherche clinique et code.',
    icon: 'Repeat'
  },
  {
    name: 'Communication',
    description: 'Transmission claire des intentions graphiques et des choix d\'architecture logicielle.',
    icon: 'Users'
  },
  {
    name: 'Travail en Équipe',
    description: 'Collaboration fluide et bienveillante avec les équipes créatives et produit.',
    icon: 'Users'
  },
  {
    name: 'Apprentissage Rapide',
    description: 'Assimilation agile des nouveaux frameworks, outils et méthodologies.',
    icon: 'Clock'
  },
  {
    name: 'Esprit d\'Innovation',
    description: 'Veille technologique et design constante pour apporter une valeur différenciante.',
    icon: 'Palette'
  }
];

export const languagesData = [
  {
    language: 'Français',
    level: 'Langue maternelle',
    proficiency: 'C2 — Maîtrise totale'
  },
  {
    language: 'Anglais',
    level: 'Notions de base',
    proficiency: 'B1 — Technique & professionnel'
  }
];
