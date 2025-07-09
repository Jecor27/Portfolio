export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  
  if (!element) {
    console.warn(`Section "${sectionId}" not found`);
    return;
  }

  element.scrollIntoView({ behavior: 'smooth' });
}