
// section with skills

import { Download, Mail } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolio';
import { scrollToSection } from '../../utils/navigation';
import type { Skills } from '../../types';
import './About.css';

// Skill categories configuration
const skillCategories = [
  { key: 'frontend' as keyof Skills, title: 'Frontend', className: 'skill-frontend' },
  { key: 'backend' as keyof Skills, title: 'Backend', className: 'skill-backend' },
  { key: 'database' as keyof Skills, title: 'Database', className: 'skill-database' },
  { key: 'tools' as keyof Skills, title: 'Tools', className: 'skill-tools' }
] as const;

export default function About() {
  function handleContact() {
    scrollToSection('contact');
  }

  function handleResumeDownload() {
    if (personalInfo.resumeLink) {
      window.open(personalInfo.resumeLink, '_blank');
    }
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          {/* About Text */}
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <div className="about-description">
              <p>{personalInfo.description}</p>
              <p>
                I enjoy sharing knowledge about web development and helping other developers 
                in the community. You can find me posting useful content and insights on my 
                social media platforms.
              </p>
              <p>
                I'm open to new opportunities where I can contribute, learn, and grow. 
                If you have an interesting project or position, feel free to reach out!
              </p>
            </div>
            
            <div className="about-actions">
              <button
                onClick={handleContact}
                className="btn btn-primary"
                type="button"
              >
                <Mail size={16} />
                Contact Me
              </button>
              {personalInfo.resumeLink && (
                <button
                  onClick={handleResumeDownload}
                  className="btn btn-outline"
                  type="button"
                >
                  <Download size={16} />
                  Resume
                </button>
              )}
            </div>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <h3 className="skills-title">Skills & Technologies</h3>
            <div className="skills-grid">
              {skillCategories.map((category) => (
                <div key={category.key} className="skill-category">
                  <h4 className="skill-category-title">{category.title}</h4>
                  <div className="skill-tags">
                    {skills[category.key].map((skill) => (
                      <span 
                        key={skill} 
                        className={`skill-tag ${category.className}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}