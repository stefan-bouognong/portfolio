import { useState, useEffect, useRef } from 'react';
import type React from 'react';

import { projectsData, categories } from '../../../data/projects';
import type { Project } from '../../../types/project.types';
import './Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] =
    useState<Project[]>(projectsData);
  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);

  /* =======================
     Intersection Observer
  ======================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  /* =======================
     Filter projects
  ======================== */
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(
          (project) => project.category === activeCategory
        )
      );
    }
  }, [activeCategory]);

  /* =======================
     Project icons
  ======================== */
  const getProjectIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      bloodlink: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          <path d="M12 5.67V21.23" />
        </svg>
      ),
      terabia: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      ),
      smartschool: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10l-10-5-10 5 10 5 10-5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      topitoh: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
        </svg>
      ),
      dermato: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
        </svg>
      )
    };

    return icons[iconName] || icons.bloodlink;
  };

  /* =======================
     Category icons
  ======================== */
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, React.ReactNode> = {
      fullstack: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" />
        </svg>
      ),
      web: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      mobile: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="5" y="2" width="14" height="20" rx="2" />
        </svg>
      ),
      design: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19l7-7 3 3-7 7-3-3z" />
        </svg>
      )
    };

    return icons[category] || icons.fullstack;
  };

  return (
    <section id="projects" className="projects section" ref={sectionRef}>
      <div className="container">

        {/* Header */}
        <div className={`projects__header ${isVisible ? 'projects__header--visible' : ''}`}>
          <span className="projects__subtitle">Mon Portfolio</span>
          <h2 className="projects__title">Mes Projets</h2>
          <div className="projects__divider" />
        </div>

        {/* Filters */}
        <div className={`projects__filters ${isVisible ? 'projects__filters--visible' : ''}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`projects__filter ${activeCategory === category.id ? 'projects__filter--active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.id !== 'all' && getCategoryIcon(category.id)}
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`projects__card ${isVisible ? 'projects__card--visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="projects__card-image projects__card-image--icon">
                <div className="projects__card-icon-wrapper">
                  {getProjectIcon(project.image)}
                </div>
                {project.status === 'in-progress' && (
                  <span className="projects__card-badge">En cours</span>
                )}
              </div>

              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="projects__modal" onClick={() => setSelectedProject(null)}>
          <div className="projects__modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="projects__modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div className="projects__modal-image projects__modal-image--icon">
              {getProjectIcon(selectedProject.image)}
            </div>

            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.longDescription}</p>

            <div className="projects__modal-actions">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__modal-btn projects__modal-btn--primary"
                >
                  Voir le projet
                </a>
              )}

              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="projects__modal-btn projects__modal-btn--secondary"
                >
                  Code source
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
