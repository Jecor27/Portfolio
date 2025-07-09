

import { useState, useEffect } from 'react';
import { getCurrentSection, throttle } from '../utils/navigation';
import type { SectionId } from '../types';

export function useActiveSection(): SectionId {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    // Throttled scroll handler for better performance
    const handleScroll = throttle(() => {
      const currentSection = getCurrentSection();
      setActiveSection(currentSection);
    }, 100);

    // Set initial section
    setActiveSection(getCurrentSection());

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}