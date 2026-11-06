import React, { useState, useEffect, useRef } from 'react';
import type { Project, ProjectCategory } from '../../../types/project.types';
import { projectsData, categories } from '../../../data/projects';
import { 
  ArrowUpRight, 
  ExternalLink, 
  X, 
  Layers, 
  Compass, 
  Code2, 
  Eye
} from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  // Intersection observer for section entry
  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.08 }
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

  // Filtered projects computed as derived state
  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ui-ux':
        return <Layers size={14} />;
      case 'graphic-design':
        return <Compass size={14} />;
      case 'web-development':
        return <Code2 size={14} />;
      default:
        return null;
    }
  };

  const getCategoryCount = (categoryId: ProjectCategory) => {
    if (categoryId === 'all') return projectsData.length;
    return projectsData.filter((p) => p.category === categoryId).length;
  };

  return (
    <section id="projects" className={`projects section ${isVisible ? 'projects--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">03 // SELECTED WORK & CASE STUDIES</div>
          <h2 className="section-title">Crafted with Purpose & Precision</h2>
          <p className="section-description">
            A curated selection of digital products, clinical design systems, and visual communications engineered for real-world impact.
          </p>
        </div>

        {/* Functional Category Filters */}
        <div className="projects__filters-bar" role="tablist" aria-label="Project category filters">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`projects__filter-btn ${isActive ? 'projects__filter-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span className="projects__filter-icon">{getCategoryIcon(cat.id)}</span>
                <span className="projects__filter-label">{cat.label}</span>
                <span className="projects__filter-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Showcase Gallery */}
        <div className="projects__gallery">
          {filteredProjects.map((project, index) => {
            const isFeatured = project.featured && index === 0;

            return (
              <article
                key={project.id}
                className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual / Image Section */}
                <div className="project-card__visual">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="project-card__image"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`project-card__mock project-card__mock--${project.category}`}>
                      <div className="project-card__mock-header">
                        <span className="project-card__mock-dot" />
                        <span className="project-card__mock-title">{project.title}</span>
                      </div>
                      <div className="project-card__mock-body">
                        <span className="project-card__mock-tagline">{project.tagline}</span>
                        <div className="project-card__mock-wireframe">
                          <div className="project-card__mock-bar" />
                          <div className="project-card__mock-bar project-card__mock-bar--short" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Visual Overlay Tag */}
                  <div className="project-card__badge-row">
                    <span className="project-card__cat-badge">
                      {getCategoryIcon(project.category)}
                      <span>{project.categoryLabel}</span>
                    </span>
                    {project.status === 'in-progress' && (
                      <span className="project-card__status-badge">In Development</span>
                    )}
                    {project.link && (
                      <span className="project-card__status-badge project-card__status-badge--live">
                        Live Site
                      </span>
                    )}
                  </div>

                  <div className="project-card__hover-cue">
                    <span>View Case Details</span>
                    <Eye size={16} />
                  </div>
                </div>

                {/* Content Section */}
                <div className="project-card__content">
                  <div className="project-card__meta-bar">
                    <span className="project-card__year">{project.year}</span>
                    <span className="project-card__role">{project.role}</span>
                  </div>

                  <h3 className="project-card__title">
                    <span>{project.title}</span>
                    <ArrowUpRight size={18} className="project-card__title-arrow" />
                  </h3>

                  <p className="project-card__desc">{project.description}</p>

                  {/* Technology Badges */}
                  <div className="project-card__tags">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="project-card__tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="project-card__tag project-card__tag--more">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div 
          className="project-modal__overlay" 
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div 
            className="project-modal__content" 
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button 
              className="project-modal__close" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close project modal"
            >
              <X size={20} />
            </button>

            {/* Modal Media Showcase */}
            <div className="project-modal__media">
              {selectedProject.imageUrl ? (
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="project-modal__image"
                />
              ) : (
                <div className={`project-modal__fallback project-modal__fallback--${selectedProject.category}`}>
                  <span className="project-modal__fallback-category">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="project-modal__fallback-title">{selectedProject.title}</h3>
                  <span className="project-modal__fallback-tagline">{selectedProject.tagline}</span>
                </div>
              )}
            </div>

            {/* Modal Details */}
            <div className="project-modal__details">
              
              <div className="project-modal__header">
                <div className="project-modal__eyebrow">
                  <span className="tag-mono">{selectedProject.categoryLabel} // {selectedProject.year}</span>
                  {selectedProject.status === 'in-progress' && (
                    <span className="project-card__status-badge">In Development</span>
                  )}
                </div>

                <h3 id="modal-project-title" className="project-modal__title">{selectedProject.title}</h3>
                <div className="project-modal__tagline">{selectedProject.tagline}</div>
              </div>

              {/* Role & Year Specs */}
              <div className="project-modal__specs">
                <div className="project-modal__spec-item">
                  <span className="project-modal__spec-label">Role:</span>
                  <span className="project-modal__spec-value">{selectedProject.role}</span>
                </div>
                <div className="project-modal__spec-item">
                  <span className="project-modal__spec-label">Timeline:</span>
                  <span className="project-modal__spec-value">{selectedProject.year}</span>
                </div>
                {selectedProject.metrics && (
                  <div className="project-modal__spec-item">
                    <span className="project-modal__spec-label">Impact:</span>
                    <span className="project-modal__spec-value">{selectedProject.metrics}</span>
                  </div>
                )}
              </div>

              {/* Comprehensive Description */}
              <div className="project-modal__narrative">
                <h4>Project Scope & Challenge</h4>
                <p>{selectedProject.longDescription}</p>
              </div>

              {/* Complete Tech / Tool Stack */}
              <div className="project-modal__technologies">
                <h4>Tools & Technologies</h4>
                <div className="project-modal__tech-tags">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="project-modal__tech-tag">
                      <span className="project-modal__tech-dot" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="project-modal__actions">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary project-modal__action-btn"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink size={16} strokeWidth={2.2} />
                  </a>
                )}

                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn btn--secondary project-modal__action-btn"
                >
                  <span>Close Preview</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
