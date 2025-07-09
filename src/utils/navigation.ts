

import type { SectionId } from '../types';

const NAV_HEIGHT = 80; // navigation height
const SCROLL_OFFSET = 100; // Offset for active section detection

// scroll to section function
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  
  if (!element) {
    console.warn(`Section with id "${sectionId}" not found`);
    return;
  }

  const targetPosition = element.offsetTop - NAV_HEIGHT;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

// Get currently active section based on scroll position
export function getCurrentSection(): SectionId {
  const sections: readonly SectionId[] = ['home', 'about', 'projects', 'contact'];
  const scrollPosition = window.scrollY + SCROLL_OFFSET;

  // Check sections from bottom to top to find the current one
  for (let i = sections.length - 1; i >= 0; i--) {
    const sectionId = sections[i];
    const element = document.getElementById(sectionId);
    
    if (element && scrollPosition >= element.offsetTop) {
      return sectionId;
    }
  }
  
  return 'home'; // Default to home section
}

// throttle function
export function throttle<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
): T {
  let isThrottled = false;
  
  return ((...args: Parameters<T>) => {
    if (isThrottled) return;
    
    callback(...args);
    isThrottled = true;
    
    setTimeout(() => {
      isThrottled = false;
    }, delay);
  }) as T;
}