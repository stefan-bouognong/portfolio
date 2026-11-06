import React, { useState, useEffect, useRef } from 'react';
import { workExperienceData, educationData, referencesData } from '../../../data/experience';
import type { ExperienceItem, ProfessionalReference } from '../../../types/experience.types';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Check, 
  Building2,
  ChevronRight,
  Award,
  UserCheck
} from 'lucide-react';
import './Experience.css';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Reset selected item when switching tabs
  const handleTabChange = (tab: 'work' | 'education') => {
    setActiveTab(tab);
    setSelectedItemIndex(0);
  };

  const currentList: ExperienceItem[] = activeTab === 'work' ? workExperienceData : educationData;
  const activeItem: ExperienceItem = currentList[selectedItemIndex] || currentList[0];

  return (
    <section id="experience" className={`experience section ${isVisible ? 'experience--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">04 // PARCOURS & FORMATION ACADÉMIQUE</div>
          <h2 className="section-title">Expérience Professionnelle & Académique</h2>
          <p className="section-description">
            Une formation universitaire d'excellence à l'Université de Yaoundé 1 (Master Recherche en Informatique - SIGL) combinée à des réalisations en entreprise et en pratique indépendante.
          </p>
        </div>

        {/* View Switcher: Work vs Education */}
        <div className="experience__type-toggle">
          <button
            className={`experience__toggle-btn ${activeTab === 'work' ? 'experience__toggle-btn--active' : ''}`}
            onClick={() => handleTabChange('work')}
          >
            <Briefcase size={16} />
            <span>Expérience Professionnelle</span>
            <span className="experience__toggle-count">{workExperienceData.length}</span>
          </button>

          <button
            className={`experience__toggle-btn ${activeTab === 'education' ? 'experience__toggle-btn--active' : ''}`}
            onClick={() => handleTabChange('education')}
          >
            <GraduationCap size={16} />
            <span>Formation & Recherche</span>
            <span className="experience__toggle-count">{educationData.length}</span>
          </button>
        </div>

        {/* Editorial Timeline & Detail Split Layout */}
        <div className="experience__layout">
          
          {/* Left Column: Timeline Navigation Items */}
          <div className="experience__nav-column" role="tablist">
            {currentList.map((item, index) => {
              const isSelected = selectedItemIndex === index;

              return (
                <div
                  key={item.id}
                  role="tab"
                  aria-selected={isSelected}
                  className={`experience__nav-item ${isSelected ? 'experience__nav-item--active' : ''}`}
                  onClick={() => setSelectedItemIndex(index)}
                >
                  <div className="experience__nav-marker" />
                  
                  <div className="experience__nav-text">
                    <div className="experience__nav-period-row">
                      <span className="experience__nav-period">{item.period}</span>
                      {item.badge && (
                        <span className="experience__nav-badge">{item.badge}</span>
                      )}
                    </div>
                    
                    <h3 className="experience__nav-role">{item.role}</h3>
                    <div className="experience__nav-org">
                      <Building2 size={13} />
                      <span>{item.organization}</span>
                    </div>
                  </div>

                  <ChevronRight size={16} className="experience__nav-arrow" />
                </div>
              );
            })}
          </div>

          {/* Right Column: In-Depth Editorial Dossier */}
          <div className="experience__dossier-column">
            {activeItem && (
              <div className="experience__dossier-card">
                
                {/* Dossier Header */}
                <div className="experience__dossier-header">
                  <div className="experience__dossier-eyebrow">
                    <span className="tag-mono">
                      {activeTab === 'work' ? 'POSTE & RESPONSABILITÉS' : 'DIPLÔME & CURRICULUM'}
                    </span>
                    <span className="experience__dossier-badge">{activeItem.badge}</span>
                  </div>

                  <h3 className="experience__dossier-title">{activeItem.role}</h3>

                  <div className="experience__dossier-meta">
                    <span className="experience__dossier-org">
                      <Building2 size={16} className="experience__meta-icon" />
                      {activeItem.organization}
                    </span>
                    <span className="experience__dossier-location">
                      <MapPin size={16} className="experience__meta-icon" />
                      {activeItem.location}
                    </span>
                    <span className="experience__dossier-period">
                      <Calendar size={16} className="experience__meta-icon" />
                      {activeItem.period}
                    </span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="experience__dossier-desc">{activeItem.description}</p>

                {/* Core Responsibilities & Highlights */}
                <div className="experience__dossier-section">
                  <h4 className="experience__dossier-subtitle">
                    {activeTab === 'work' ? 'Missions & Réalisations Clés' : 'Axes d\'Étude & Compétences Validées'}
                  </h4>
                  <ul className="experience__dossier-list">
                    {activeItem.highlights.map((h, i) => (
                      <li key={i} className="experience__dossier-list-item">
                        <span className="experience__check-bullet">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Reference Citation when available */}
                {activeItem.reference && (
                  <div className="experience__dossier-section experience__dossier-section--ref">
                    <div className="experience__reference-pill">
                      <UserCheck size={15} className="experience__ref-icon" />
                      <div>
                        <strong>Référence :</strong> {activeItem.reference.name} — <span className="experience__ref-title">{activeItem.reference.title}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Technology / Tool Tags when applicable */}
                {activeItem.technologies && activeItem.technologies.length > 0 && (
                  <div className="experience__dossier-section experience__dossier-section--tech">
                    <h4 className="experience__dossier-subtitle">Outils & Environnements Mobilisés</h4>
                    <div className="experience__tech-tags">
                      {activeItem.technologies.map((tech, i) => (
                        <span key={i} className="experience__tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

        {/* References Section directly from CV */}
        <div className="experience__references-container">
          <div className="experience__references-header">
            <span className="section-eyebrow">RÉFÉRENCES VÉRIFIÉES</span>
            <h3 className="experience__references-title">Encadrement Professionnel & Académique</h3>
          </div>

          <div className="experience__references-grid">
            {referencesData.map((ref: ProfessionalReference) => (
              <div key={ref.id} className="experience__ref-card">
                <div className="experience__ref-badge">
                  <Award size={16} />
                  <span>Référent Certifié</span>
                </div>
                <h4 className="experience__ref-name">{ref.name}</h4>
                <div className="experience__ref-role">{ref.role}</div>
                <div className="experience__ref-org">{ref.organization}</div>
                <p className="experience__ref-context">{ref.context}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
