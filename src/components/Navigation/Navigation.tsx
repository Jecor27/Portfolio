import { scrollToSection } from '../../utils/navigation';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' }
];

export default function Navigation() {
    const activeSection = useActiveSection();
    function handleNavClick(href: string) {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
  }

return (
    <nav>
      {navItems.map((item) => {
        const sectionId = item.href.replace('#', '');
        const isActive = activeSection === sectionId;
        
        return (
          <button 
            key={item.name}
            className={isActive ? 'active' : ''}
            onClick={() => handleNavClick(item.href)}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}