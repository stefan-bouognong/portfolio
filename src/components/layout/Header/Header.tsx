import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
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
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <a
            href="#home"
            className="header__logo"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <span className="header__logo-text">Portfolio</span>
            <span className="header__logo-dot">.</span>
          </a>

          {/* Navigation Desktop */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navItems.map((item) => (
                <li key={item.name} className="header__nav-item">
                  <a
                    href={item.href}
                    className="header__nav-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton CTA */}
          <a
            href="#contact"
            className="header__cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Me contacter
          </a>

          {/* Bouton Menu Mobile */}
          <button
            className={`header__burger ${
              isMobileMenuOpen ? 'header__burger--active' : ''
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`header__mobile-menu ${
            isMobileMenuOpen ? 'header__mobile-menu--open' : ''
          }`}
        >
          <nav>
            <ul className="header__mobile-nav">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="header__mobile-nav-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <a
                    href={item.href}
                    className="header__mobile-nav-link"
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
