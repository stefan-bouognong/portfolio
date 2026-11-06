import React, { useState, useEffect, useRef } from 'react';
import { Download, Check, Sparkles, Layers, Terminal, Compass } from 'lucide-react';
import './About.css';

import cvFR from '../../../assets/documents/CV_Stefan_Bouognong_GraphicDesigner_FR.pdf';
import cvEN from '../../../assets/documents/CV_Stefan_Bouognong_GraphicDesigner_EN.pdf';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const corePrinciples = [
    {
      title: 'Design UX/UI & Conception Centrée Utilisateur',
      description: 'Conception d\'identités visuelles et d\'interfaces numériques claires, cohérentes et intuitives, du concept graphique initial au prototypage interactif sous Figma et Canva.',
      icon: <Layers size={18} className="about__principle-icon" />,
    },
    {
      title: 'Identité Visuelle, Typographie & Graphisme',
      description: 'Attention méticuleuse portée à la typographie, à la hiérarchie visuelle, aux grilles suisses et à la cohérence de marque sur tous les supports numériques et imprimés.',
      icon: <Compass size={18} className="about__principle-icon" />,
    },
    {
      title: 'Développement Web, Mobile & Ingénierie Logicielle',
      description: 'Compréhension profonde des contraintes techniques de production et développement d\'applications modernes avec React, Next.js, React Native, Python et Django.',
      icon: <Terminal size={18} className="about__principle-icon" />,
    },
  ];

  const highlights = [
    'Conception centrée utilisateur, structuration des parcours et hiérarchie visuelle',
    'Maîtrise des outils de conception visuelle et prototypage (Figma, Canva, Adobe Suite)',
    'Développement d\'applications web et mobiles (React, Next.js, React Native, Python, Django)',
    'Création de bibliothèques de composants réutilisables et de design systems évolutifs',
    'Recherche informatique & rigueur méthodologique (Master 2 Recherche, Université de Yaoundé 1)',
  ];

  const stats = [
    { number: '3+', label: 'Années de Pratique' },
    { number: 'M2', label: 'Recherche Info (En cours)' },
    { number: '03', label: 'Disciplines Maîtrisées' },
    { number: '100%', label: 'Rigueur & Engagement' },
  ];

  return (
    <section id="about" className={`about section ${isVisible ? 'about--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Section Editorial Header */}
        <div className="section-header">
          <div className="section-eyebrow">01 // PROFIL & PHILOSOPHIE</div>
          <h2 className="section-title">À la Convergence du Design et de l'Ingénierie</h2>
          <p className="section-description">
            Du concept graphique à l'intégration finale : transformer des idées complexes en expériences numériques claires, cohérentes et centrées sur l'utilisateur.
          </p>
        </div>

        {/* Editorial Split Grid */}
        <div className="about__grid">
          
          {/* Main Story & Biography */}
          <div className="about__narrative">
            <div className="about__lead-statement">
              "Designer UX/UI et développeur web, je conçois des identités visuelles et des interfaces numériques claires, cohérentes et centrées sur l'utilisateur, du concept graphique à l'intégration finale."
            </div>

            <p className="about__body-p">
              Basé à <strong>Yaoundé, Cameroun</strong>, je poursuis actuellement un <strong>Master 2 Recherche en Informatique</strong> à l'Université de Yaoundé 1 après un <strong>Master 1 option SIGL</strong> (Systèmes d'Information et Génie Logiciel). Ma formation académique exigeante nourrit une rigueur méthodologique constante dans chacun de mes projets.
            </p>

            <p className="about__body-p">
              Je maîtrise les outils de conception visuelle et de prototypage (<strong>Figma, Canva</strong>) et j'accorde une attention particulière à la <strong>typographie</strong>, à la <strong>hiérarchie visuelle</strong> et à la <strong>cohérence de marque</strong>. Ma double compétence en développement web et mobile me permet de comprendre intimement les contraintes techniques d'une production et de collaborer efficacement avec les équipes créatives et techniques.
            </p>

            <p className="about__body-p">
              Rigoureux, curieux et à l'écoute des retours, j'ai développé mon expérience à travers des projets professionnels en entreprise (comme chez <strong>Mendo Company SAS</strong> sur la plateforme <strong>Mendo Coti</strong>), des initiatives à fort impact social (<strong>BloodLink</strong>, <strong>Terrabia</strong>, <strong>Topitoh</strong>) et des travaux de recherche universitaire (<strong>KIMVIEware</strong>).
            </p>

            {/* Structured Capabilities List */}
            <div className="about__capabilities">
              <span className="about__capabilities-label">Principes Directeurs :</span>
              <ul className="about__capabilities-list">
                {highlights.map((item, idx) => (
                  <li key={idx} className="about__capability-item">
                    <span className="about__check-bullet">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CV Downloads */}
            <div className="about__actions">
              <a
                href={cvFR}
                download="CV_Stefan_Bouognong_FR.pdf"
                className="btn btn--primary about__btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} strokeWidth={2.2} />
                <span>Télécharger mon CV (FR)</span>
              </a>

              <a
                href={cvEN}
                download="CV_Stefan_Bouognong_EN.pdf"
                className="btn btn--secondary about__btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} strokeWidth={2.2} />
                <span>Download CV (EN)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Principles & Balanced Metrics */}
          <div className="about__aside">
            
            {/* Principles Stack */}
            <div className="about__principles-stack">
              {corePrinciples.map((principle, index) => (
                <div key={index} className="about__principle-card">
                  <div className="about__principle-header">
                    <div className="about__principle-icon-wrap">
                      {principle.icon}
                    </div>
                    <h3 className="about__principle-title">{principle.title}</h3>
                  </div>
                  <p className="about__principle-desc">{principle.description}</p>
                </div>
              ))}
            </div>

            {/* Editorial Metric Strip */}
            <div className="about__stats-strip">
              {stats.map((s, index) => (
                <div key={index} className="about__stat-block">
                  <span className="about__stat-number">{s.number}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Creative Note Card */}
            <div className="about__badge-card">
              <Sparkles size={16} className="about__badge-icon" />
              <div className="about__badge-text">
                <strong>Rigueur de conception & de code :</strong> Hiérarchie visuelle éprouvée, grilles précises, design systems scalables et code propre sans compromis.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
