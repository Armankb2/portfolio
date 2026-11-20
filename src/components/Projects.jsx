import { projects, socialLinks } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project, index }) => {
  const number = String(index + 1).padStart(2, '0');

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:border-teal-500/25 hover:bg-white/[0.03] transition-all duration-500 flex flex-col justify-between"
    >
      <div>
        {/* Header row: Number + Badge + Category */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.04]">
          <div className="flex items-center gap-3">
            <span className="text-2xl md:text-3xl font-mono font-bold text-teal-400">
              {number}
            </span>
            <span className="text-white/40 text-xs font-mono uppercase tracking-wider">
              / {project.category}
            </span>
          </div>
          {project.badge && (
            <span className="text-xs font-semibold tracking-wider uppercase text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-full">
              {project.badge}
            </span>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
          {project.title}
        </h3>

        {/* Summary Description */}
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Problem Statement */}
        {project.problem && (
          <div className="mb-4 bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
            <h4 className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider mb-1">
              Problem Statement
            </h4>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>
        )}

        {/* Architecture & Decisions */}
        {project.architecture && (
          <div className="mb-6 bg-white/[0.02] rounded-xl p-4 border border-white/[0.04]">
            <h4 className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider mb-1">
              Key Technical Decisions & Architecture
            </h4>
            <p className="text-white/60 text-xs md:text-sm leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium text-white/60 bg-white/[0.04] border border-white/[0.06] rounded-md hover:border-teal-500/30 hover:text-teal-300 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.04]">
        {project.links?.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white text-xs md:text-sm font-semibold hover:border-teal-500/50 hover:bg-teal-500/10 hover:text-teal-300 transition-all duration-300"
          >
            <GitHubIcon />
            View Repository
          </a>
        )}

        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-teal-600 text-white text-xs md:text-sm font-semibold hover:bg-teal-500 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300"
          >
            <ExternalLinkIcon />
            Live Application
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Background divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">Portfolio Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Featured Engineering Projects
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
            Real implementations demonstrating backend architecture, semantic search, data pipelines, and agentic workflows.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* GitHub Repositories Link */}
        <div data-aos="fade-up" className="mt-16 text-center">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white/80 hover:text-white font-semibold text-sm hover:border-teal-500/40 hover:bg-teal-500/5 transition-all duration-300"
          >
            <GitHubIcon />
            Explore More Repositories on GitHub
            <svg className="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
