import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Compass, 
  Layers, 
  Terminal, 
  SlidersHorizontal,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import './Process.css';

interface ProcessStep {
  step: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: React.ReactNode;
}

const Process: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number>(0);
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

  const steps: ProcessStep[] = [
    {
      step: '01',
      name: 'DISCOVER',
      shortDesc: 'Understand the problem, users, business objectives, and context.',
      fullDesc: 'Before proposing interfaces or technical architecture, I immerse myself in the problem domain. I interview users, investigate business requirements, and analyze technical constraints.',
      deliverables: ['Stakeholder alignment', 'User interviews & personas', 'Competitive audit', 'Problem statement framing'],
      icon: <Search size={22} strokeWidth={2} />,
    },
    {
      step: '02',
      name: 'DEFINE',
      shortDesc: 'Structure the challenge and establish the creative and technical direction.',
      fullDesc: 'Synthesizing discovery insights into actionable blueprints. Defining information architecture, user journeys, tech stack selections, and establishing the creative tone.',
      deliverables: ['Information architecture', 'User flow diagrams', 'Art direction moodboards', 'Technical system specs'],
      icon: <Compass size={22} strokeWidth={2} />,
    },
    {
      step: '03',
      name: 'DESIGN',
      shortDesc: 'Create interfaces, user experiences, and visual concepts.',
      fullDesc: 'Translating blueprints into tactile, beautiful design artifacts. Designing responsive wireframes, design token systems, and high-fidelity interactive prototypes in Figma.',
      deliverables: ['Design system & UI tokens', 'High-fidelity wireframes', 'Interactive Figma prototype', 'Micro-interaction specs'],
      icon: <Layers size={22} strokeWidth={2} />,
    },
    {
      step: '04',
      name: 'DEVELOP',
      shortDesc: 'Transform design concepts into functional digital products.',
      fullDesc: 'Writing clean, typed, and resilient production code with modern frontend and backend architectures (React, TypeScript, Node.js). Zero design debt between prototype and code.',
      deliverables: ['Production component library', 'Typed frontend code', 'Secure API endpoints', 'Database migrations'],
      icon: <Terminal size={22} strokeWidth={2} />,
    },
    {
      step: '05',
      name: 'REFINE',
      shortDesc: 'Test, improve, optimize, and polish the final experience.',
      fullDesc: 'Elevating the final product through cross-browser auditing, accessibility tests (a11y), responsive stress-testing, performance profiling, and pixel-level polish.',
      deliverables: ['Lighthouse 95+ performance', 'WCAG accessibility checks', 'Cross-browser validation', 'Production deployment'],
      icon: <SlidersHorizontal size={22} strokeWidth={2} />,
    },
  ];

  return (
    <section id="process" className={`process section section--dark ${isVisible ? 'process--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">05 // METHODOLOGY & CRAFT</div>
          <h2 className="section-title">The Creative & Engineering Process</h2>
          <p className="section-description">
            A rigorous 5-stage framework that transforms abstract ideas into verified, beautiful, and high-performance digital products.
          </p>
        </div>

        {/* Interactive Step Track Bar */}
        <div className="process__track-container">
          <div className="process__track-line" />
          
          <div className="process__track-steps">
            {steps.map((s, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep > index;

              return (
                <button
                  key={s.step}
                  className={`process__track-step ${isActive ? 'process__track-step--active' : ''} ${isPast ? 'process__track-step--past' : ''}`}
                  onClick={() => setActiveStep(index)}
                  aria-label={`View stage ${s.step}: ${s.name}`}
                >
                  <div className="process__track-dot">
                    <span className="process__track-number">{s.step}</span>
                  </div>
                  <span className="process__track-label">{s.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Showcase Card */}
        <div className="process__stage-card">
          <div className="process__stage-header">
            <div className="process__stage-badge-group">
              <span className="process__stage-step-tag">STAGE // {steps[activeStep].step}</span>
              <div className="process__stage-icon-wrap">
                {steps[activeStep].icon}
              </div>
            </div>

            <div className="process__stage-titles">
              <h3 className="process__stage-title">{steps[activeStep].name}</h3>
              <p className="process__stage-short">{steps[activeStep].shortDesc}</p>
            </div>
          </div>

          <div className="process__stage-body">
            <div className="process__stage-narrative">
              <h4 className="process__stage-subtitle">Stage Overview</h4>
              <p>{steps[activeStep].fullDesc}</p>
            </div>

            <div className="process__stage-deliverables">
              <h4 className="process__stage-subtitle">Tangible Deliverables</h4>
              <ul className="process__deliverables-list">
                {steps[activeStep].deliverables.map((d, i) => (
                  <li key={i} className="process__deliverable-item">
                    <CheckCircle2 size={16} className="process__deliverable-icon" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stepper Navigation */}
          <div className="process__stage-footer">
            <button
              disabled={activeStep === 0}
              onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
              className="process__nav-btn"
            >
              Previous Stage
            </button>

            <span className="process__stage-indicator">
              {activeStep + 1} of {steps.length}
            </span>

            <button
              disabled={activeStep === steps.length - 1}
              onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
              className="process__nav-btn process__nav-btn--next"
            >
              <span>Next Stage</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Process;
