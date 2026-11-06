import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Compass, Layers, Code } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../../common/Icons';
import './Hero.css';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      setIsLoaded(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/stefan-bouognong',
      icon: <GithubIcon size={18} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/stefan-mouope-3655b62bb',
      icon: <LinkedinIcon size={18} />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <TwitterIcon size={18} />,
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      icon: <DribbbleIcon size={18} />,
    },
  ];

  const disciplines = [
    {
      icon: <Layers size={14} className="hero__discipline-icon" />,
      label: 'UI/UX Design',
      detail: 'Systems & Research',
    },
    {
      icon: <Compass size={14} className="hero__discipline-icon" />,
      label: 'Graphic Design',
      detail: 'Brand & Editorial',
    },
    {
      icon: <Code size={14} className="hero__discipline-icon" />,
      label: 'Web Development',
      detail: 'React & Node Ecosystem',
    },
  ];

  return (
    <section id="home" className={`hero ${isLoaded ? 'hero--loaded' : ''}`}>
      <div className="container hero__container">
        
        {/* Main Editorial Grid */}
        <div className="hero__grid">
          
          {/* Left Column: Editorial Typography & Positioning */}
          <div className="hero__content">
            
            {/* Eyebrow & Status */}
            <div className="hero__eyebrow-wrapper">
              <span className="hero__eyebrow">HELLO, I'M</span>
              <span className="hero__status-pill">
                <span className="hero__status-dot" />
                Available for Select Projects
              </span>
            </div>

            {/* Main Name Heading */}
            <h1 className="hero__name">Stefan Mouope</h1>

            {/* Official Professional Title */}
            <div className="hero__role-badge">
              <span className="hero__role-text">Web Developer</span>
              <span className="hero__role-separator">/</span>
              <span className="hero__role-text">UI/UX Designer</span>
              <span className="hero__role-separator">/</span>
              <span className="hero__role-text">Graphic Designer</span>
            </div>

            {/* Introduction Statement */}
            <p className="hero__intro">
              I design and build digital experiences that combine thoughtful aesthetics, 
              intuitive user experiences, and reliable technology. From the first idea 
              to the final interface, I transform concepts into meaningful digital products.
            </p>

            {/* Call To Actions */}
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary hero__btn-primary">
                <span>Explore My Work</span>
                <ArrowDown size={16} strokeWidth={2.2} />
              </a>
              <a href="#contact" className="btn btn--secondary hero__btn-secondary">
                <span>Get in Touch</span>
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </a>
            </div>

            {/* Discipline Quick Bar */}
            <div className="hero__disciplines">
              {disciplines.map((d, i) => (
                <div key={i} className="hero__discipline-item">
                  <div className="hero__discipline-header">
                    {d.icon}
                    <span className="hero__discipline-title">{d.label}</span>
                  </div>
                  <span className="hero__discipline-detail">{d.detail}</span>
                </div>
              ))}
            </div>

            {/* Social Channels */}
            <div className="hero__socials">
              <span className="hero__socials-label">Connect:</span>
              <div className="hero__socials-list">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Editorial Portrait */}
          <div className="hero__visual">
            <div className="hero__portrait-frame">
              
              {/* Geometric Architectural Accents */}
              <div className="hero__frame-corner hero__frame-corner--tl" />
              <div className="hero__frame-corner hero__frame-corner--br" />
              <div className="hero__frame-accent-line" />

              {/* The Actual Portrait Photograph (Stefan Mouope) */}
              <div className="hero__image-wrapper">
                <img
                  src="/assets/images/profile/portfolio.jpeg"
                  alt="Stefan Mouope — Web Developer and Designer"
                  className="hero__photo"
                  loading="eager"
                />
                <div className="hero__photo-overlay" />
              </div>

              {/* Floating Architectural Badge */}
              <div className="hero__floating-card">
                <div className="hero__floating-icon">
                  <span className="hero__floating-dot" />
                </div>
                <div className="hero__floating-text">
                  <span className="hero__floating-title">Creative Direction & Code</span>
                  <span className="hero__floating-sub">Based in Yaoundé · Global Delivery</span>
                </div>
              </div>

              {/* Monospace Spec Tag */}
              <div className="hero__spec-tag">
                <span>PORTFOLIO // 2025-2026</span>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Cue */}
        <div className="hero__scroll">
          <a href="#about" className="hero__scroll-link" aria-label="Scroll down to About section">
            <span className="hero__scroll-text">Scroll to discover</span>
            <div className="hero__scroll-icon-wrap">
              <ArrowDown size={14} className="hero__scroll-arrow" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
