import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'process', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Process', href: '#process', id: 'process' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="header__logo"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <span className="header__logo-name">Stefan Mouope</span>
          <span className="header__logo-badge">Design & Dev</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav" aria-label="Main Navigation">
          <ul className="header__nav-list">
            {navItems.map((item) => (
              <li key={item.name} className="header__nav-item">
                <a
                  href={item.href}
                  className={`header__nav-link ${
                    activeSection === item.id ? 'header__nav-link--active' : ''
                  }`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header__actions">
          <a
            href="#contact"
            className="btn btn--primary header__cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={16} strokeWidth={2.2} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            className="header__burger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} strokeWidth={2} />
            ) : (
              <Menu size={24} strokeWidth={2} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`header__mobile-overlay ${
          isMobileMenuOpen ? 'header__mobile-overlay--open' : ''
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="header__mobile-drawer"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="header__mobile-header">
            <span className="header__logo-name">Stefan Mouope</span>
            <button
              className="header__mobile-close"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="header__mobile-nav">
            <ul className="header__mobile-list">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="header__mobile-item"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <a
                    href={item.href}
                    className={`header__mobile-link ${
                      activeSection === item.id ? 'header__mobile-link--active' : ''
                    }`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    <span className="header__mobile-index">0{index + 1}</span>
                    <span className="header__mobile-title">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__mobile-footer">
            <a
              href="#contact"
              className="btn btn--primary header__mobile-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              <span>Let's Talk</span>
              <ArrowUpRight size={16} strokeWidth={2.2} />
            </a>
            <div className="header__mobile-tagline">
              Web Developer · UI/UX Designer · Graphic Designer
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
