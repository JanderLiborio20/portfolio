import { HeroSection } from './components/pages/home/hero-section';
import { HighlightedProject } from './components/pages/home/highlighted-projects';
import { KnownTechs } from './components/pages/home/known-techs';
import { WorkExperience } from './components/pages/home/work-experience';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProject />
      <WorkExperience />
    </>
  );
}
