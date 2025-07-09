

export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly description: string;
  readonly email: string;
  readonly linkedin: string;
  readonly github: string;
  readonly location: string;
  readonly resumeLink?: string;
}

export interface Project {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly technologies: readonly string[];
  readonly liveLink: string;
  readonly githubLink: string;
  readonly featured: boolean;
}

export interface Skills {
  readonly frontend: readonly string[];
  readonly backend: readonly string[];
  readonly database: readonly string[];
  readonly tools: readonly string[];
}

export interface SocialLink {
  readonly name: string;
  readonly url: string;
  readonly icon: string;
}

export interface NavItem {
  readonly name: string;
  readonly href: string;
}

// component props
export interface ProjectCardProps {
  readonly project: Project;
  readonly isReversed?: boolean;
}

// Union types
export type SectionId = 'home' | 'about' | 'projects' | 'contact';
export type FilterType = 'all' | 'featured' | 'react' | 'javascript' | 'fullstack';

// Event handler
export type ButtonClickHandler = () => void;
export type LinkClickHandler = (href: string) => void;