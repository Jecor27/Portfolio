export interface PersonalInfo {
  readonly name: string;
  readonly title: string;
  readonly email: string;
}

export type SectionId = 'home' | 'about' | 'projects' | 'contact';