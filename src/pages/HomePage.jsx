import { Hero, AboutMe, Experiences } from '@/components/sections';
import { Projects, Designs } from '@/components/sections';
import { Contact } from '@/components/sections';
import { Footer } from '@/layout';
import { NAV_ID } from '@/data/layout/navData';

export default function HomePage() {
  return (
    <div className="space-y-3xl">
      <div id={NAV_ID.HOME} name={NAV_ID.HOME} className="space-y-3xl mt-4xl">
        <Hero />
        <AboutMe />
        <Experiences />
      </div>
      <div id={NAV_ID.WORKS} name={NAV_ID.WORKS} className="space-y-3xl mb-5xl">
        <Projects />
        <Designs />
      </div>
      <div id={NAV_ID.CONNECT} name={NAV_ID.CONNECT}>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
