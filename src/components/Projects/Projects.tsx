

import { useState } from 'react';
import { getProjectsByFilter, filterOptions } from '../../data/portfolio';
import ProjectCard from './ProjectCard';
import type { FilterType } from '../../types';
import './Projects.css';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const filteredProjects = getProjectsByFilter(activeFilter);

  function handleFilterChange(filter: FilterType) {
    setActiveFilter(filter);
  }

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        {/* Header */}
        <header className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-description">
            A collection of projects showcasing my skills in modern web development, 
            from concept to deployment.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="projects-filters">
          {filterOptions.map((option) => {
            const isActive = activeFilter === option.value;
            
            return (
              <button
                key={option.value}
                onClick={() => handleFilterChange(option.value)}
                className={`filter-btn ${isActive ? 'filter-btn-active' : ''}`}
                type="button"
                aria-pressed={isActive}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isReversed={index % 2 !== 0}
              />
            ))
          ) : (
            <div className="projects-empty">
              <p>No projects found for the selected filter.</p>
              <button
                onClick={() => handleFilterChange('all')}
                className="btn btn-outline"
                type="button"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>

        {/* GitHub Link */}
        {filteredProjects.length > 0 && (
          <div className="projects-footer">
            <p>Want to see more? Check out my other projects on GitHub.</p>
            <a
              href="https://github.com/Jecor27"
              className="btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </section>
  );
}