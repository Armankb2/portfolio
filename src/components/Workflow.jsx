import { workflowSteps } from '../data/portfolioData';

const Workflow = () => {
  return (
    <section id="workflow" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Top subtle border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">Engineering Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            How I Approach Engineering
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
            A disciplined engineering lifecycle from problem discovery and system design to robust implementation, validation, and documentation.
          </p>
        </div>

        {/* Four horizontal numbered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((step, index) => (
            <div
              key={step.number}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-7 flex flex-col justify-between hover:border-teal-500/30 hover:bg-white/[0.04] transition-all duration-500 group relative"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-mono font-bold text-teal-400/80 group-hover:text-teal-300 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-teal-200 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="mt-8 pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs text-white/30 font-mono">
                <span>Phase {index + 1}</span>
                <span className="group-hover:text-teal-400 transition-colors">Complete</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
