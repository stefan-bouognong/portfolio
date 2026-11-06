import React, { useState, useEffect, useRef } from 'react';
import { 
  disciplinesData, 
  softSkillsData,
  languagesData 
} from '../../../data/skills';
import type { SkillGroup } from '../../../data/skills';
import { 
  Layers, 
  Compass, 
  Code2, 
  Lightbulb, 
  Users, 
  Puzzle, 
  Palette, 
  Clock, 
  Repeat, 
  CheckCircle2,
  Check,
  Languages
} from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<number>(0);
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

  const getDisciplineIcon = (number: string) => {
    switch (number) {
      case '01':
        return <Layers size={20} strokeWidth={2} />;
      case '02':
        return <Compass size={20} strokeWidth={2} />;
      case '03':
        return <Code2 size={20} strokeWidth={2} />;
      default:
        return <Layers size={20} />;
    }
  };

  const getSoftSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb size={20} strokeWidth={2} />;
      case 'Users':
        return <Users size={20} strokeWidth={2} />;
      case 'Puzzle':
        return <Puzzle size={20} strokeWidth={2} />;
      case 'Palette':
        return <Palette size={20} strokeWidth={2} />;
      case 'Clock':
        return <Clock size={20} strokeWidth={2} />;
      case 'Repeat':
        return <Repeat size={20} strokeWidth={2} />;
      case 'Check':
        return <Check size={20} strokeWidth={2} />;
      default:
        return <Lightbulb size={20} />;
    }
  };

  const currentDiscipline: SkillGroup = disciplinesData[activeTab];

  return (
    <section id="skills" className={`skills section ${isVisible ? 'skills--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">02 // COMPÉTENCES & DOMAINES D'EXPERTISE</div>
          <h2 className="section-title">Design UX/UI, Graphisme & Développement Web</h2>
          <p className="section-description">
            Une synergie unique entre vision esthétique, prototypage rapide sous Figma/Canva, et rigueur d'ingénierie logicielle (React, Next.js, Python, Django).
          </p>
        </div>

        {/* 3 Discipline Selectors / Tabs */}
        <div className="skills__tabs" role="tablist" aria-label="Discipline areas">
          {disciplinesData.map((d, index) => (
            <button
              key={d.number}
              role="tab"
              aria-selected={activeTab === index}
              className={`skills__tab ${activeTab === index ? 'skills__tab--active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <div className="skills__tab-header">
                <span className="skills__tab-number">{d.number}</span>
                <span className="skills__tab-icon">{getDisciplineIcon(d.number)}</span>
              </div>
              <div className="skills__tab-title">{d.discipline}</div>
              <div className="skills__tab-indicator" />
            </button>
          ))}
        </div>

        {/* Active Discipline Detailed Showcase */}
        <div className="skills__showcase">
          <div className="skills__panel">
            
            {/* Left Column: Discipline Overview & Capabilities */}
            <div className="skills__panel-main">
              <div className="skills__panel-eyebrow">
                <span className="tag-mono">DOMAINE // {currentDiscipline.number}</span>
                <span className="skills__panel-toolcount">{currentDiscipline.primaryTools.join(' • ')}</span>
              </div>

              <h3 className="skills__panel-heading">{currentDiscipline.discipline}</h3>
              <p className="skills__panel-summary">{currentDiscipline.summary}</p>

              {/* Core Capabilities Grid */}
              <div className="skills__capabilities-grid">
                {currentDiscipline.capabilities.map((cap, i) => (
                  <div key={i} className="skills__capability-card">
                    <div className="skills__capability-header">
                      <CheckCircle2 size={16} className="skills__capability-check" />
                      <h4 className="skills__capability-name">{cap.name}</h4>
                    </div>
                    <p className="skills__capability-desc">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Technical & Design Tool Tokens */}
            <div className="skills__panel-aside">
              <div className="skills__aside-box">
                <span className="skills__aside-title">Technologies & Outils Maîtrisés</span>
                <div className="skills__tags-cloud">
                  {currentDiscipline.stack.map((item, i) => (
                    <span key={i} className="skills__tech-tag">
                      <span className="skills__tech-dot" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="skills__discipline-note">
                <div className="skills__discipline-note-accent" />
                <p>
                  Chaque compétence et technologie reflète une pratique éprouvée sur des projets professionnels, de recherche académique et de production.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Soft Skills & Professional Attributes */}
        <div className="skills__soft-section">
          <div className="skills__soft-header">
            <span className="section-eyebrow">COMPÉTENCES PROFESSIONNELLES</span>
            <h3 className="skills__soft-title">Qualités Méthodologiques & Collaboratives</h3>
          </div>

          <div className="skills__soft-grid">
            {softSkillsData.map((soft, index) => (
              <div key={index} className="skills__soft-card">
                <div className="skills__soft-icon-wrapper">
                  {getSoftSkillIcon(soft.icon)}
                </div>
                <h4 className="skills__soft-name">{soft.name}</h4>
                <p className="skills__soft-desc">{soft.description}</p>
              </div>
            ))}
          </div>

          {/* Languages Section */}
          <div className="skills__languages-bar">
            <div className="skills__languages-header">
              <Languages size={18} className="skills__languages-icon" />
              <span className="skills__languages-title">Langues Pratiquées :</span>
            </div>
            <div className="skills__languages-list">
              {languagesData.map((lang, idx) => (
                <div key={idx} className="skills__language-item">
                  <strong>{lang.language}</strong>
                  <span className="skills__language-sep">—</span>
                  <span className="skills__language-level">{lang.level}</span>
                  <span className="skills__language-prof">({lang.proficiency})</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
