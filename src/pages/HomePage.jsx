import Hero from '@/layout/home/Hero';
import AboutMe from '@/layout/home/AboutMe';
import Projects from '@/layout/home/Projects';
import Designs from '@/layout/home/Designs';
import Experiences from '@/layout/home/Experiences';

export default function HomePage() {
  return (
    <div className="space-y-3xl my-4xl">
      <Hero />
      <AboutMe />
      <Experiences />
      <Projects />
      <Designs />
    </div>
  );
}
