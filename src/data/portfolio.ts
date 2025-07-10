

import type { PersonalInfo, Project, Skills, SocialLink, NavItem, FilterType } from '../types';

export const personalInfo: PersonalInfo = {
  name: "Jesus Corrales",
  title: "Fullstack Developer",
  description: "I'm a Fullstack Developer building and managing modern web applications that create exceptional user experiences.",
  email: "jjcorrales76@gmail.com",
  linkedin: "https://www.linkedin.com/in/jesus-corrales/",
  github: "https://github.com/Jecor27",
  location: "Denver, CO",
  resumeLink: "https://drive.google.com/file/d/1TXOFw1hN0DHwJW2o8H7a_wGZ6u0vFIXc/view"
} as const;

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "My Portfolio",
    description: "Web portfolio showcasing my skills, projects, and experience as a Fullstack Developer. Built with React and TypeScript.",
    image: "/images/profile/Jesus-corrales-p.png",
    technologies: ["React", "TypeScript", "CSS"],
    liveLink: "https://jecorportfolio.netlify.app",
    githubLink: "https://github.com/Jecor27/Portfolio",
    featured: true
  },
  {
    id: 2,
    title: "Cosmic Memory Game",
    description: "A memory game built with React featuring animated transitions with a timer and lives system. Users can play against the clock to match pairs of cards.",
    image: "/images/profile/CosmicMemory.png",
    technologies: ["React", "TypeScript", "Firebase", "Framer Motion"],
    liveLink: "https://memorygamey.netlify.app",
    githubLink: "https://github.com/Jecor27/MemoryGame",
    featured: true
  },
  {
    id: 3,
    title: "Budget-App",
    description: "A budget management application that allows users to track their expenses, set budgets, and visualize their financial data with charts. Using local storage for data persistence.",
    image: "/images/profile/BudgetApp.png",
    technologies: ["React", "CSS"],
    liveLink: "https://budgetapppp.netlify.app",
    githubLink: "https://github.com/Jecor27/BudgetApp",
    featured: false
  }
] as const;

export const skills: Skills = {
  frontend: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"],
  backend: ["Node.js", "Express", "REST APIs", "GraphQL", "Authentication"],
  database: ["MongoDB", "Firebase"],
  tools: ["Git", "VS Code", "Vite", "Vercel"]
} as const;

export const socialLinks: readonly SocialLink[] = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jesus-corrales/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/Jecor27", icon: "github" },
  { name: "Email", url: "mailto:jjcorrales76@gmail.com", icon: "mail" }
] as const;

export const navItems: readonly NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
] as const;

//helper functions
export function getProjectsByFilter(filter: FilterType): readonly Project[] {
  switch (filter) {
    case 'all':
      return projects;
    case 'featured':
      return projects.filter(project => project.featured);
    case 'react':
      return projects.filter(project => 
        project.technologies.some(tech => tech.toLowerCase().includes('react'))
      );
    case 'javascript':
      return projects.filter(project =>
        project.technologies.some(tech => tech.toLowerCase().includes('javascript'))
      );
    case 'fullstack':
      return projects.filter(project =>
        project.technologies.some(tech => tech.toLowerCase().includes('node'))
      );
    default:
      return projects;
  }
}

export function getProjectById(id: number): Project | undefined {
  return projects.find(project => project.id === id);
}

export const filterOptions = [
  { value: 'all' as FilterType, label: 'All Projects' },
  { value: 'featured' as FilterType, label: 'Featured' },
  { value: 'react' as FilterType, label: 'React' },
  { value: 'javascript' as FilterType, label: 'JavaScript' },
  { value: 'fullstack' as FilterType, label: 'Full Stack' }
] as const;