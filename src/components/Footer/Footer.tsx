
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navItems, socialLinks } from '../../data/portfolio';
import { scrollToSection } from '../../utils/navigation';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  function handleNavClick(href: string) {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  }

  function scrollToTop() {
    scrollToSection('home');
  }

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-brand-name">{personalInfo.name}</h3>
            <p className="footer-brand-description">
              Fullstack Developer creating modern web experiences with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-section">
            <h4 className="footer-section-title">Navigation</h4>
            <nav className="footer-nav">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="footer-nav-link"
                  type="button"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Connect</h4>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="footer-social-link"
                  target={social.name !== 'Email' ? '_blank' : undefined}
                  rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contact</h4>
            <div className="footer-contact">
              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-contact-link"
              >
                {personalInfo.email}
              </a>
              <p className="footer-contact-location">{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. Made with{' '}
            <Heart size={16} className="footer-heart" aria-label="love" /> and React
          </p>
          
          <button
            onClick={scrollToTop}
            className="footer-scroll-top"
            type="button"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}