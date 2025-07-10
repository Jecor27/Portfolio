
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems, personalInfo } from '../../data/portfolio';
import { scrollToSection } from '../../utils/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navigation.css';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  function handleNavClick(href: string) {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen(prev => !prev);
  }

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo with Profile Image */}
        <button
          onClick={() => handleNavClick('#home')}
          className="nav-logo"
          type="button"
          aria-label="Go to home section"
        >
          <div className="nav-profile-wrapper">
            <div className="nav-profile-image">
              <img
                src="/images/profile/jesus-corrales.jpg"
                alt={`${personalInfo.name} Profile`}
                className="nav-profile-img"
              />
            </div>
            <span className="nav-profile-name">{personalInfo.name}</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="nav-desktop">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`nav-link ${isActive ? 'nav-link-active' : ''}`}
                type="button"
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </button>
            );
          })}
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="nav-mobile-controls">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="nav-mobile-toggle"
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="nav-mobile-menu">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            
            return (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`nav-mobile-link ${isActive ? 'nav-mobile-link-active' : ''}`}
                type="button"
                aria-current={isActive ? 'page' : undefined}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}