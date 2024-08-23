import { HeroSection } from './components/pages/home/hero-section';
import { HighlightedProject } from './components/pages/home/highlighted-projects';
import { KnownTechs } from './components/pages/home/known-techs';

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightedProject />
    </>
  );
}
