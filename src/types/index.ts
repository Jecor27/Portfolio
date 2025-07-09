export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly email: string;
}

export interface Skills {
  readonly frontend: readonly string[];
  readonly backend: readonly string[];
}

export type SectionId = 'home' | 'about' | 'projects' | 'contact';