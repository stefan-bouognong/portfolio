import { useState, useEffect, useRef } from 'react';
import { experienceData } from '../../../data/experience';
import './Experience.css';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(0);
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

  const getTypeIcon = (type: string) => {
    const icons = {
      work: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      ),
      freelance: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      internship: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      )
    };
    return icons[type as keyof typeof icons] || icons.work;
  };

  const getTypeLabel = (type: string) => {
    const labels = {
      work: 'Emploi',
      freelance: 'Freelance',
      internship: 'Stage'
    };
    return labels[type as keyof typeof labels] || 'Emploi';
  };

  return (
    <section id="experience" className="experience section" ref={sectionRef}>
      <div className="container">
        {/* En-tête */}
        <div className={`experience__header ${isVisible ? 'experience__header--visible' : ''}`}>
          <span className="experience__subtitle">Mon Parcours</span>
          <h2 className="experience__title">Expérience Professionnelle</h2>
          <div className="experience__divider"></div>
        </div>

        <div className="experience__content">
          {/* Timeline à gauche */}
          <div className={`experience__timeline ${isVisible ? 'experience__timeline--visible' : ''}`}>
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience__timeline-item ${
                  selectedExperience === index ? 'experience__timeline-item--active' : ''
                }`}
                onClick={() => setSelectedExperience(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="experience__timeline-marker">
                  <div className="experience__timeline-icon">
                    {getTypeIcon(exp.type)}
                  </div>
                </div>
                <div className="experience__timeline-content">
                  <h3 className="experience__timeline-position">{exp.position}</h3>
                  <div className="experience__timeline-company">{exp.company}</div>
                  <div className="experience__timeline-period">{exp.period}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Détails à droite */}
          <div className={`experience__details ${isVisible ? 'experience__details--visible' : ''}`}>
            {experienceData.map((exp, index) => (
              <div
                key={exp.id}
                className={`experience__detail ${
                  selectedExperience === index ? 'experience__detail--active' : ''
                }`}
              >
                <div className="experience__detail-header">
                  <div>
                    <h3 className="experience__detail-position">{exp.position}</h3>
                    <div className="experience__detail-meta">
                      <span className="experience__detail-company">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        </svg>
                        {exp.company}
                      </span>
                      <span className="experience__detail-location">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {exp.location}
                      </span>
                      <span className="experience__detail-period">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <span className="experience__detail-type">
                    {getTypeIcon(exp.type)}
                    {getTypeLabel(exp.type)}
                  </span>
                </div>

                <p className="experience__detail-description">{exp.description}</p>

                <div className="experience__detail-section">
                  <h4 className="experience__detail-subtitle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 11 12 14 22 4"></polyline>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                    Responsabilités
                  </h4>
                  <ul className="experience__detail-list">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="experience__detail-list-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="9 11 12 14 22 4"></polyline>
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                        </svg>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="experience__detail-section">
                  <h4 className="experience__detail-subtitle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                    Technologies utilisées
                  </h4>
                  <div className="experience__detail-tech">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="experience__detail-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;