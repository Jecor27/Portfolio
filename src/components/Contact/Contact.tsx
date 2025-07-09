

import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { personalInfo, socialLinks } from '../../data/portfolio';
import './Contact.css';

// Contact method configuration
const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send me a message',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    external: false
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    description: 'Connect professionally',
    value: 'Connect with me',
    href: personalInfo.linkedin,
    external: true
  },
  {
    icon: Github,
    title: 'GitHub',
    description: 'View my code',
    value: 'See my repositories',
    href: personalInfo.github,
    external: true
  },
  {
    icon: MapPin,
    title: 'Location',
    description: 'Based in',
    value: personalInfo.location,
    href: null,
    external: false
  }
] as const;

export default function Contact() {
  const emailSubject = 'Project Inquiry';
  const emailBody = "Hi! I'd like to discuss a project with you...";
  const projectEmailHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        {/* Header */}
        <header className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and interesting projects. 
            Let's connect and discuss how we can work together.
          </p>
        </header>

        <div className="contact-content">
          {/* Contact Methods */}
          <div className="contact-methods">
            <h3 className="contact-methods-title">Let's Connect</h3>
            <div className="contact-methods-grid">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                
                return (
                  <div key={method.title} className="contact-method">
                    <div className="contact-method-icon">
                      <IconComponent size={24} />
                    </div>
                    <div className="contact-method-content">
                      <h4 className="contact-method-title">{method.title}</h4>
                      <p className="contact-method-description">{method.description}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="contact-method-link"
                          target={method.external ? '_blank' : undefined}
                          rel={method.external ? 'noopener noreferrer' : undefined}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="contact-method-value">{method.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <p className="contact-social-title">Follow me on</p>
              <div className="contact-social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="contact-social-link"
                    target={social.name !== 'Email' ? '_blank' : undefined}
                    rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
                    aria-label={`Follow me on ${social.name}`}
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="contact-cta">
            <div className="contact-cta-icon">
              <Send size={48} />
            </div>
            <h3 className="contact-cta-title">Ready to Start a Project?</h3>
            <p className="contact-cta-description">
              I'm available for freelance work and full-time opportunities. 
              Let's bring your ideas to life with modern web technologies.
            </p>
            <div className="contact-cta-actions">
              <a href={projectEmailHref} className="btn btn-primary">
                <Mail size={16} />
                Start a Conversation
              </a>
              {personalInfo.resumeLink && (
                <a
                  href={personalInfo.resumeLink}
                  className="btn btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}