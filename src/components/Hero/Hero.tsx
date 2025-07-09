

import { ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../../data/portfolio';
import { scrollToSection } from '../../utils/navigation';
import './Hero.css';

// social media icons
const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: FaEnvelope
} as const;

export default function Hero() {
  function handleViewWork() {
    scrollToSection('projects');
  }

  function handleContact() {
    scrollToSection('contact');
  }

  function handleScrollDown() {
    scrollToSection('about');
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-text">
            <h1 className="hero-title">
              Hey! I'm <span className="hero-name">{personalInfo.name}</span>
            </h1>
            <p className="hero-subtitle">{personalInfo.title}</p>
            <p className="hero-description">{personalInfo.description}</p>
          </div>

          {/* Social Links with Proper Icons */}
          <div className="hero-social">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap];
              const isEmail = social.name === 'Email';
              
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className="hero-social-link"
                  target={isEmail ? undefined : '_blank'}
                  rel={isEmail ? undefined : 'noopener noreferrer'}
                  aria-label={`Visit my ${social.name}`}
                >
                  {IconComponent && <IconComponent size={24} />}
                </a>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <button
              onClick={handleViewWork}
              className="btn btn-primary"
              type="button"
            >
              View My Work
            </button>
            <button
              onClick={handleContact}
              className="btn btn-outline"
              type="button"
            >
              <FaEnvelope size={16} />
              Contact Me
            </button>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={handleScrollDown}
            className="hero-scroll"
            type="button"
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} />
          </button>
        </div>

        {/* Background Decoration */}
        <div className="hero-bg">
          <div className="hero-bg-circle hero-bg-circle-1" />
          <div className="hero-bg-circle hero-bg-circle-2" />
          <div className="hero-bg-circle hero-bg-circle-3" />
        </div>
      </div>
    </section>
  );
}