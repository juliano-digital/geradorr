import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { GhostButton } from '@/components/ui/GhostButton';
import { projects } from '@/data/projects';

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projetos"
      className="bg-bg rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] relative z-10 px-5 sm:px-8 md:px-10 lg:px-16 pt-20 sm:pt-24 md:pt-32 pb-10"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="hero-heading font-black uppercase text-center mb-12 sm:mb-16 md:mb-20 text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Projetos
          </h2>
        </FadeIn>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto relative">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            total={projects.length}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  total: number;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, total, scrollYProgress }) => {
  const scale = useTransform(
    scrollYProgress,
    [index / total, (index + 1) / total],
    [1, 1 - (total - 1 - index) * 0.03]
  );

  return (
    <motion.div
      className="sticky top-24 md:top-32 h-[85vh]"
      style={{
        scale,
        zIndex: total - index,
      }}
    >
      <div
        className="rounded-[32px] sm:rounded-[40px] md:rounded-[48px] border border-ice/10 bg-[#111111] p-4 sm:p-6 md:p-8 h-full flex flex-col"
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-ice/10 font-black text-[clamp(2.5rem,8vw,120px)] leading-none">
              {project.number}
            </span>
            <div>
              <span className="text-volt text-xs sm:text-sm font-medium uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-ice font-bold text-lg sm:text-xl md:text-2xl mt-0.5">
                {project.title}
              </h3>
              <p className="text-ice/40 text-sm mt-0.5">{project.power}</p>
            </div>
          </div>
          <GhostButton label="Ver Projeto" />
        </div>

        {/* Images grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 min-h-0">
          {/* Left column - 2 stacked images */}
          <div className="sm:col-span-2 flex flex-col gap-3 sm:gap-4">
            <img
              src={project.images[0]}
              alt={`${project.title} - imagem 1`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl sm:rounded-3xl object-cover flex-1"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              width={400}
              height={230}
            />
            <img
              src={project.images[1]}
              alt={`${project.title} - imagem 2`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl sm:rounded-3xl object-cover flex-1"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
              width={400}
              height={340}
            />
          </div>

          {/* Right column - 1 tall image */}
          <div className="sm:col-span-3">
            <img
              src={project.images[2]}
              alt={`${project.title} - imagem principal`}
              loading="lazy"
              decoding="async"
              className="w-full h-full rounded-2xl sm:rounded-3xl object-cover"
              width={600}
              height={570}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
