

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
    title: "Example",
    description: "Modern e-commerce platform with React, TypeScript, and secure payment integration. Features include user authentication, shopping cart, and responsive design.",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "TypeScript", "Node.js", "Stripe", "Tailwind CSS"],
    liveLink: "https://your-ecommerce.vercel.app",
    githubLink: "https://github.com/yourusername/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "Example",
    description: "Collaborative task management with real-time updates, drag-and-drop functionality, and team features built with modern React patterns.",
    image: "/images/projects/taskmanager.jpg",
    technologies: ["React", "TypeScript", "Firebase", "Framer Motion"],
    liveLink: "https://your-taskmanager.vercel.app",
    githubLink: "https://github.com/yourusername/taskmanager",
    featured: true
  },
  {
    id: 3,
    title: "example",
    description: "Real-time weather application with location-based forecasts, interactive charts, and beautiful animations using modern APIs.",
    image: "/images/projects/weather.jpg",
    technologies: ["React", "TypeScript", "Weather API", "Chart.js"],
    liveLink: "https://your-weather.vercel.app",
    githubLink: "https://github.com/yourusername/weather",
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