

import { ExternalLink, Github, Star } from 'lucide-react';
import type { ProjectCardProps } from '../../types';

export default function ProjectCard({ project, isReversed = false }: ProjectCardProps) {
  const cardClassName = `project-card ${isReversed ? 'project-card-reversed' : ''}`;

  return (
    <article className={cardClassName}>
      {/* Project Image */}
      <div className="project-image-container">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="project-image"
          loading="lazy"
        />
        
        {/* Overlay with links */}
        <div className="project-overlay">
          <a
            href={project.liveLink}
            className="project-overlay-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={24} />
          </a>
          <a
            href={project.githubLink}
            className="project-overlay-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code`}
          >
            <Github size={24} />
          </a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="project-featured-badge">
            <Star size={16} />
            Featured
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="project-content">
        <header className="project-header">
          <h3 className="project-title">{project.title}</h3>
          {project.featured && (
            <Star size={16} className="project-featured-icon" aria-label="Featured project" />
          )}
        </header>
        
        <p className="project-description">{project.description}</p>
        
        {/* Technologies */}
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Links */}
        <div className="project-links">
          <a
            href={project.liveLink}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href={project.githubLink}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
            Source Code
          </a>
        </div>
      </div>
    </article>
  );
}