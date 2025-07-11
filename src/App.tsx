

import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './hooks/useTheme';
import './App.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navigation />
        <main className="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}