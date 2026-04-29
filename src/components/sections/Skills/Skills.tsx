import { useState, useEffect, useRef } from 'react';
import { skillsData } from '../../../data/skills';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

  const icons = {
    frontend: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    backend: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    mobile: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    design: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
    devops: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6"></path>
        <path d="m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24"></path>
        <path d="M1 12h6m6 0h6"></path>
        <path d="m4.93 19.07 4.24-4.24m5.66-5.66 4.24-4.24"></path>
      </svg>
    )
  };

  const getCategoryIcon = (index: number) => {
    const categories = ['frontend', 'backend', 'mobile', 'design', 'devops'];
    return icons[categories[index] as keyof typeof icons] || icons.frontend;
  };

  return (
    <section id="skills" className="skills section" ref={sectionRef}>
      <div className="container">
        {/* En-tête */}
        <div className={`skills__header ${isVisible ? 'skills__header--visible' : ''}`}>
          <span className="skills__subtitle">Ce que je maîtrise</span>
          <h2 className="skills__title">Mes Compétences</h2>
          <div className="skills__divider"></div>
        </div>

        {/* Onglets de catégories */}
        <div className={`skills__tabs ${isVisible ? 'skills__tabs--visible' : ''}`}>
          {skillsData.map((category, index) => (
            <button
              key={index}
              className={`skills__tab ${activeCategory === index ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveCategory(index)}
              style={{
                '--category-color': category.color
              } as React.CSSProperties}
            >
              <span className="skills__tab-icon">{getCategoryIcon(index)}</span>
              <span className="skills__tab-text">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Grille de compétences */}
        <div className="skills__content">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`skills__category ${
                activeCategory === categoryIndex ? 'skills__category--active' : ''
              }`}
            >
              <div className="skills__grid">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`skills__card ${isVisible ? 'skills__card--visible' : ''}`}
                    style={{
                      animationDelay: `${skillIndex * 0.1}s`
                    }}
                  >
                    <div className="skills__card-header">
                      <h3 className="skills__card-name">{skill.name}</h3>
                      <span className="skills__card-level">{skill.level}%</span>
                    </div>
                    
                    <div className="skills__progress-bar">
                      <div
                        className="skills__progress-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          backgroundColor: category.color,
                          transitionDelay: `${skillIndex * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section bonus - Soft Skills */}
        <div className={`skills__soft ${isVisible ? 'skills__soft--visible' : ''}`}>
          <h3 className="skills__soft-title">Soft Skills</h3>
          <div className="skills__soft-grid">
            {[
              { name: 'Travail d\'équipe', icon: '🤝' },
              { name: 'Communication', icon: '💬' },
              { name: 'Résolution de problèmes', icon: '🧩' },
              { name: 'Créativité', icon: '🎨' },
              { name: 'Gestion du temps', icon: '⏱️' },
              { name: 'Adaptabilité', icon: '🔄' },
            ].map((soft, index) => (
              <div
                key={index}
                className="skills__soft-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="skills__soft-icon">{soft.icon}</span>
                <span className="skills__soft-name">{soft.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;