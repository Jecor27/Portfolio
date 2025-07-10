
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import './Themetoggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="theme-toggle-icons">
        <Sun 
          size={20} 
          className={`theme-toggle-icon ${theme === 'light' ? 'active' : ''}`} 
        />
        <Moon 
          size={20} 
          className={`theme-toggle-icon ${theme === 'dark' ? 'active' : ''}`} 
        />
      </div>
    </button>
  );
}