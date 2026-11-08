import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../../common/Icons';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/stefan-bouognong',
      icon: <GithubIcon size={16} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/stefan-mouope-3655b62bb',
      icon: <LinkedinIcon size={16} />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <TwitterIcon size={16} />,
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      icon: <DribbbleIcon size={16} />,
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        
        {/* Upper Editorial Row */}
        <div className="footer__top">
          
          {/* Brand Identity Lockup */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => handleNavClick(e, '#home')}>
              <div className="footer__logo-mark" aria-hidden="true">
                <span className="footer__logo-s">S</span>
                <span className="footer__logo-m">M</span>
                <span className="footer__logo-dot" />
              </div>
              <span className="footer__logo-name">Stefan Mouope</span>
            </a>
            <p className="footer__tagline">
              Web Developer · UI/UX Designer · Graphic Designer
            </p>
            <p className="footer__bio">
              Translating complex ideas into intuitive user experiences, robust web architecture, and refined visual systems.
            </p>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="footer__nav-group">
            <span className="footer__col-label">Navigation</span>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="footer__nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="footer__contact-group">
            <span className="footer__col-label">Direct Reach</span>
            
            <div className="footer__contact-links">
              <a href="mailto:stefanbouognong@gmail.com" className="footer__contact-item">
                <Mail size={15} />
                <span>stefanbouognong@gmail.com</span>
              </a>
              <a href="tel:+237658582135" className="footer__contact-item">
                <Phone size={15} />
                <span>+237 658 58 21 35</span>
              </a>
            </div>

            <div className="footer__socials-bar">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-btn"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom Colophon & Scroll to Top */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <span>© {currentYear} Stefan Mouope. Crafted with precision & purpose.</span>
            <span className="footer__colophon">Designed with Swiss typographic principles · Built with React & TypeScript</span>
          </div>

          <button
            onClick={scrollToTop}
            className="footer__scroll-btn"
            aria-label="Back to top of the page"
          >
            <span>Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
