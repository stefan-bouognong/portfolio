import { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { number: '3+', label: 'Années d\'expérience' },
    { number: '50+', label: 'Projets réalisés' },
    { number: '30+', label: 'Clients satisfaits' },
    { number: '100%', label: 'Engagement' },
  ];

  const interests = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: 'Design UI/UX',
      description: 'Création d\'interfaces intuitives et esthétiques'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: 'Développement',
      description: 'Code propre et solutions performantes'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      title: 'Mobile First',
      description: 'Applications mobiles natives et hybrides'
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: 'Innovation',
      description: 'Veille technologique et nouvelles tendances'
    }
  ];

  return (
    <section id="about" className="about section" ref={sectionRef}>
      <div className="container">
        {/* En-tête de section */}
        <div className={`about__header ${isVisible ? 'about__header--visible' : ''}`}>
          <span className="about__subtitle">Qui suis-je ?</span>
          <h2 className="about__title">À propos de moi</h2>
          <div className="about__divider"></div>
        </div>

        {/* Contenu principal */}
        <div className="about__content">
          {/* Colonne gauche - Texte */}
          <div className={`about__text ${isVisible ? 'about__text--visible' : ''}`}>
            <p className="about__paragraph">
              Passionné par le <strong>design</strong> et le <strong>développement</strong>, 
              je suis un créateur numérique qui aime transformer des idées en expériences 
              digitales mémorables.
            </p>
            
            <p className="about__paragraph">
              Avec une expertise en <strong>UX/UI Design</strong> et en <strong>développement 
              Full Stack</strong>, je combine créativité et technique pour créer des solutions 
              qui non seulement sont belles, mais fonctionnent parfaitement.
            </p>

            <p className="about__paragraph">
              Mon approche est centrée sur l'utilisateur, avec un souci constant de la 
              performance, de l'accessibilité et de l'innovation. Chaque projet est une 
              opportunité d'apprendre et de repousser les limites du possible.
            </p>

            <div className="about__highlights">
              <div className="about__highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Design thinking & User research</span>
              </div>
              <div className="about__highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Développement web moderne (React, Node.js)</span>
              </div>
              <div className="about__highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Applications mobiles (React Native)</span>
              </div>
              <div className="about__highlight">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Architecture Full Stack & DevOps</span>
              </div>
            </div>

            <a href="/assets/documents/stefan_mouope_cv.pdf" download className="about__cv-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Télécharger mon CV
            </a>
          </div>

          {/* Colonne droite - Stats & Intérêts */}
          <div className={`about__side ${isVisible ? 'about__side--visible' : ''}`}>
            {/* Statistiques */}
            <div className="about__stats">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="about__stat"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="about__stat-number">{stat.number}</div>
                  <div className="about__stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Centres d'intérêt */}
            <div className="about__interests">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className="about__interest"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="about__interest-icon">{interest.icon}</div>
                  <div className="about__interest-content">
                    <h3 className="about__interest-title">{interest.title}</h3>
                    <p className="about__interest-description">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;