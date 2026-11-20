import { technicalContentData } from '../data/portfolioData';

const TechnicalContent = () => {
  return (
    <section id="content-automation" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">
              Technical Content & Automation
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Structured Knowledge & AI Automation
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
            Connecting backend engineering with technical writing, developer documentation, and intelligent knowledge retrieval pipelines.
          </p>
        </div>

        {/* Section 1: Demonstrated Technical Experience */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8" data-aos="fade-up">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Demonstrated Capabilities
            </h3>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
              In-Practice
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technicalContentData.demonstrated.map((item, index) => (
              <div
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:border-teal-500/20 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-teal-400" />
                  <h4 className="text-base font-semibold text-white tracking-wide">
                    {item.title}
                  </h4>
                </div>
                <p className="text-white/60 text-sm leading-relaxed pl-5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Areas of Active Focus & Research */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-8" data-aos="fade-up">
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Active Focus & Research Interests
            </h3>
            <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
              Emerging Systems
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {technicalContentData.interests.map((interest, index) => (
              <div
                key={interest}
                data-aos="fade-up"
                data-aos-delay={index * 60}
                className="bg-white/[0.015] border border-white/[0.04] rounded-lg p-4 flex items-start gap-3 hover:border-white/10 transition-colors"
              >
                <svg className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/70 text-sm leading-snug">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Knowledge Quality — Alternating Visual / Text Layout */}
        <div className="pt-12 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" data-aos="fade-up">
            
            {/* Text description */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-4">
                <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">Quality Standards</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                Why Knowledge Quality Matters
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                In AI-assisted environments and complex distributed architectures, documentation quality directly governs system reliability. Ambiguous schemas, stale docs, or poor semantic structuring cause retrieval failures and developer friction.
              </p>

              <div className="space-y-3">
                {[
                  "Accurate technical documentation prevents API integration bugs.",
                  "Structured knowledge graphs improve RAG precision and recall.",
                  "Clear developer instructions accelerate team onboarding and collaboration.",
                  "Reliable AI information retrieval starts with verified human-curated ground truth."
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 shrink-0" />
                    <span className="text-white/70 text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="lg:col-span-6">
              <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.04]">
                  <span className="text-xs font-mono uppercase text-teal-400 tracking-wider">
                    Knowledge Pipeline Verification
                  </span>
                  <span className="text-xs font-mono text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                    Status: Verified
                  </span>
                </div>

                <div className="space-y-4 text-xs font-mono">
                  <div className="p-3 bg-white/[0.03] rounded-lg border border-white/[0.04]">
                    <div className="text-white/40 mb-1">01 / Source Schema Integrity</div>
                    <div className="text-white/80">OpenAPI 3.1 & Markdown Specification Compliant</div>
                  </div>
                  <div className="p-3 bg-white/[0.03] rounded-lg border border-white/[0.04]">
                    <div className="text-white/40 mb-1">02 / Chunking & Semantics</div>
                    <div className="text-white/80">Context-preserving section boundary chunking</div>
                  </div>
                  <div className="p-3 bg-white/[0.03] rounded-lg border border-white/[0.04]">
                    <div className="text-white/40 mb-1">03 / Retrieval Precision</div>
                    <div className="text-white/80">Cosine similarity threshold &gt; 0.85 with hybrid re-ranking</div>
                  </div>
                  <div className="p-3 bg-teal-500/[0.06] rounded-lg border border-teal-500/20">
                    <div className="text-teal-400 mb-1">04 / Developer Experience</div>
                    <div className="text-white/90">Self-documenting endpoints with executable curl snippets</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TechnicalContent;
