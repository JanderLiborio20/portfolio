import { HorizontalDivider } from '@/app/components/divider/horizontal';
import { SectionTitle } from '@/app/components/section-title';
import { ProjectCard } from './project-card';

export const HighlightedProject = () => {
  return (
    <section className="container py-16">
      <SectionTitle subtitle="destaques" title="Projetos em destaque" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
