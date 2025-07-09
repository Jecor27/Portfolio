import { personalInfo } from '../../data/portfolio';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home">
      <h1>Hi, I'm {personalInfo.name}</h1>
      <div className="social-links">
        <Mail size={24} />
        <Github size={24} />
        <Linkedin size={24} />
      </div>
    </section>
  );
}

