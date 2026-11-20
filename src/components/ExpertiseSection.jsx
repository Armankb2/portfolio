import { expertiseAreas } from '../data/portfolioData';

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">Engineering Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What I Build & Explore
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl leading-relaxed">
            From distributed backend systems to AI-powered knowledge retrieval — focused on building software that scales and documentation that matters.
          </p>
        </div>

        {/* Alternating feature sections */}
        <div className="space-y-20 md:space-y-28">
          {expertiseAreas.map((area, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={area.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                data-aos="fade-up"
              >
                {/* Text side */}
                <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-teal-500/60 text-sm font-mono font-bold">{area.number}</span>
                    <div className="w-8 h-px bg-teal-500/30" />
                    <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">{area.subtitle}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                    {area.title}
                  </h3>

                  <p className="text-white/60 text-base leading-relaxed mb-8">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {area.highlights.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 text-xs font-medium text-teal-300/80 bg-teal-500/[0.08] border border-teal-500/15 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual side */}
                <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
                  <ExpertiseVisual area={area} index={index} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* Each expertise area gets a unique visual treatment */
const ExpertiseVisual = ({ index }) => {
  const visuals = [
    // Backend Engineering - API endpoints visual
    () => (
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-white/30 text-xs font-mono">api-service.java</span>
        </div>
        <div className="space-y-3 font-mono text-sm">
          <div className="flex items-center gap-3">
            <span className="text-green-400 text-xs font-bold px-2 py-0.5 bg-green-500/10 rounded">GET</span>
            <span className="text-white/60">/api/v1/users</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-blue-400 text-xs font-bold px-2 py-0.5 bg-blue-500/10 rounded">POST</span>
            <span className="text-white/60">/api/v1/search</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 text-xs font-bold px-2 py-0.5 bg-yellow-500/10 rounded">PUT</span>
            <span className="text-white/60">/api/v1/documents/{'{id}'}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-red-400 text-xs font-bold px-2 py-0.5 bg-red-500/10 rounded">DEL</span>
            <span className="text-white/60">/api/v1/cache/{'{key}'}</span>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5">
            <div className="flex justify-between text-xs">
              <span className="text-white/30">Response Time</span>
              <span className="text-teal-400">~45ms avg</span>
            </div>
          </div>
        </div>
      </div>
    ),

    // AI Systems - Embedding visualization
    () => (
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
        <div className="text-white/30 text-xs font-mono mb-4">semantic_search.py</div>
        <div className="space-y-4">
          <div className="bg-teal-500/[0.06] border border-teal-500/15 rounded-lg p-4">
            <div className="text-teal-400 text-xs font-medium mb-2">Query</div>
            <div className="text-white/70 text-sm">"How to implement distributed caching?"</div>
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 text-teal-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="space-y-2">
            {[
              { score: "0.94", text: "Redis caching strategies..." },
              { score: "0.87", text: "Distributed cache patterns..." },
              { score: "0.82", text: "Cache invalidation approaches..." },
            ].map((result, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/[0.03] rounded-lg p-3">
                <span className="text-teal-400 text-xs font-mono font-bold">{result.score}</span>
                <span className="text-white/50 text-sm">{result.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    // Technical Content - Markdown preview
    () => (
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <span className="text-white/30 text-xs font-mono">API-REFERENCE.md</span>
        </div>
        <div className="space-y-3 text-sm">
          <div className="text-teal-400 font-bold">## Authentication</div>
          <div className="text-white/50 pl-0">All endpoints require a Bearer token...</div>
          <div className="text-teal-400 font-bold mt-4">### Request Headers</div>
          <div className="bg-black/30 rounded-lg p-3 font-mono text-xs">
            <div className="text-white/40">Authorization: Bearer {'<token>'}</div>
            <div className="text-white/40">Content-Type: application/json</div>
          </div>
          <div className="text-teal-400 font-bold mt-4">### Response Codes</div>
          <div className="flex gap-2 text-xs">
            <span className="text-green-400">200 OK</span>
            <span className="text-white/20">|</span>
            <span className="text-yellow-400">401 Unauthorized</span>
            <span className="text-white/20">|</span>
            <span className="text-red-400">500 Error</span>
          </div>
        </div>
      </div>
    ),

    // Knowledge Retrieval - Pipeline visual
    () => (
      <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
        <div className="text-white/30 text-xs font-mono mb-6">retrieval_pipeline</div>
        <div className="space-y-4">
          {[
            { step: "Ingest", desc: "Parse & chunk documents", color: "text-blue-400", bg: "bg-blue-500/10" },
            { step: "Embed", desc: "Generate vector embeddings", color: "text-teal-400", bg: "bg-teal-500/10" },
            { step: "Index", desc: "Store in vector database", color: "text-purple-400", bg: "bg-purple-500/10" },
            { step: "Retrieve", desc: "Semantic similarity search", color: "text-green-400", bg: "bg-green-500/10" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center`}>
                <span className={`${item.color} text-xs font-bold`}>{i + 1}</span>
              </div>
              <div>
                <div className={`${item.color} text-sm font-semibold`}>{item.step}</div>
                <div className="text-white/40 text-xs">{item.desc}</div>
              </div>
              {i < 3 && (
                <div className="ml-auto">
                  <svg className="w-4 h-4 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    ),
  ];

  const VisualComponent = visuals[index] || visuals[0];
  return <VisualComponent />;
};

export default ExpertiseSection;
