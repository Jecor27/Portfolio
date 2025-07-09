import { personalInfo } from '../../data/portfolio';

export default function Hero() {
  return (
    <section id="home">
      <h1>Hi, I'm {personalInfo.name}</h1>
      <p>{personalInfo.title}</p>
    </section>
  );
}