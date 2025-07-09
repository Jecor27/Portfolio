import { useState, useEffect } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // We'll add scroll detection later
    console.log('Hook is working!');
  }, []);

  return activeSection;
}