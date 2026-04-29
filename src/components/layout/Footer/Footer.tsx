import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/stefan-mouope',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.65 6.5c1.45 1.77 2.33 4.01 2.35 6.45-2.99-.64-5.73-.76-8.11-.39.19-.43.37-.87.53-1.32 2.63-1.06 4.75-2.59 6.23-4.74zM12 2c2.76 0 5.27 1.12 7.08 2.93-1.32 1.9-3.21 3.28-5.58 4.23-1.17-2.15-2.48-4.06-3.89-5.69C10.39 2.16 11.19 2 12 2zM7.89 3.84c1.41 1.63 2.73 3.55 3.91 5.71-3.06 1-6.47 1.51-10.11 1.53.56-3.29 2.56-6.06 5.2-7.24h1zm-5.87 9.2c3.94-.02 7.64-.58 10.94-1.67.21.42.41.85.6 1.28-3.94 1.25-7.24 3.49-9.54 6.42C2.12 17.27 1 14.77 1 12c0-.32.01-.64.02-.96zm2.02 8.61c2.08-2.68 5.06-4.7 8.67-5.85.81 2.11 1.48 4.33 1.97 6.65-2.51 1.02-5.39 1.02-7.9 0-.58-1.26-1.26-2.53-2.04-3.8h-.7zm10.94 1.35c-.52-2.42-1.23-4.74-2.09-6.95 2.26-.35 4.82-.24 7.62.34-.7 3.16-2.64 5.87-5.53 7.61z"/>
        </svg>
      )
    }
  ];

  const services = [
    'Développement Web',
    'Développement Mobile',
    'UI/UX Design',
    'Architecture Microservices',
    'Consulting'
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Contenu principal du footer */}
        <div className="footer__content">
          {/* Colonne 1 - À propos */}
          <div className="footer__column">
            <div className="footer__logo">
              <span className="footer__logo-text">Stefan Mouope</span>
              <span className="footer__logo-dot">.</span>
            </div>
            <p className="footer__description">
              Développeur Full Stack & UI/UX Designer passionné par la création 
              d'expériences digitales innovantes et performantes.
            </p>
            <div className="footer__socials">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div className="footer__column">
            <h3 className="footer__title">Navigation</h3>
            <ul className="footer__links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="footer__link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 - Services */}
          <div className="footer__column">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__links">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="footer__link footer__link--inactive">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 - Contact */}
          <div className="footer__column">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:stefanmouope72@gmail.com">stefanmouope72@gmail.com</a>
              </li>
              <li className="footer__contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+237658821355">+237 658 82 13 55</a>
              </li>
              <li className="footer__contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Yaoundé, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="footer__divider"></div>

        {/* Bas du footer */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Stefan Mouope. Tous droits réservés.
          </p>
          <div className="footer__bottom-links">
            <a href="#" className="footer__bottom-link">Mentions légales</a>
            <span className="footer__bottom-separator">•</span>
            <a href="#" className="footer__bottom-link">Politique de confidentialité</a>
          </div>
        </div>

        {/* Bouton retour en haut */}
        <button 
          className="footer__scroll-top"
          onClick={scrollToTop}
          aria-label="Retour en haut"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;