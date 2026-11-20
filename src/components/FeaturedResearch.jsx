
const FeaturedResearch = () => {
  const paperPdfUrl = "/research/AMR_Knowledge_Extraction_Paper.pdf";

  const metricsData = [
    {
      config: "A: LLM-Only",
      description: "Direct zero-shot completion without retrieval",
      frp: 0.000,
      cpp: 0.000,
      crp: 0.000,
    },
    {
      config: "B: RAG-Only",
      description: "Dense FAISS retrieval + prompt injection",
      frp: 0.428,
      cpp: 0.356,
      crp: 0.442,
    },
    {
      config: "C: RAG + KG",
      description: "Dense retrieval + NetworkX structured graph context",
      frp: 0.480,
      cpp: 0.412,
      crp: 0.525,
    },
    {
      config: "D: RAG + KG + Verification",
      description: "Graph context + 4-gate claim-level verification",
      frp: 0.305,
      cpp: 0.521,
      crp: 0.596,
      highlight: true,
    },
  ];

  return (
    <section id="featured-research" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-teal-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Pill & Submission Status */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-300 text-xs font-semibold tracking-wider uppercase">
              Featured Research Paper
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70">
              Microsoft CMT • Paper ID: 1104
            </span>
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300">
              Submitted • Under Review
            </span>
          </div>
        </div>

        {/* Paper Title & Track */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="100">
          <span className="text-xs font-mono uppercase tracking-wider text-teal-400 block mb-3">
            Track 2 — AI For a Sustainable Future • Submitted 18 November 2026
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.2] mb-6">
            An Evidence-Grounded Knowledge Extraction Framework for Autonomous Mobile Robot Operations Using Retrieval-Augmented Generation and Knowledge Graphs
          </h2>
          
          {/* Authors List */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs md:text-sm text-white/60 pt-2 border-t border-white/[0.06]">
            <span><strong>Dr. S. Rajarajeswari</strong> (Faculty Advisor)</span>
            <span className="text-teal-300 font-semibold">Arman KB (Researcher)</span>
            <span>B Thejeswar</span>
            <span>Chiranth DV</span>
            <span>Devesh PL</span>
            <span className="text-white/40 block w-full mt-1">Department of Computer Science and Engineering, Ramaiah Institute of Technology, Bengaluru, India</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-16" data-aos="fade-up" data-aos-delay="200">
          <a
            href={paperPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-teal-600 text-white font-semibold text-sm hover:bg-teal-500 transition-all duration-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Read Full Paper (PDF)
          </a>
          <a
            href={paperPdfUrl}
            download="AMR_Knowledge_Extraction_Paper.pdf"
            className="px-6 py-3 rounded-full border border-white/15 text-white/80 hover:text-white hover:border-teal-500/40 text-sm font-semibold transition-all duration-300 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Manuscript
          </a>
        </div>

        {/* Core Overview & Problem Statement Card */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8 mb-16" data-aos="fade-up">
          <h3 className="text-lg md:text-xl font-bold text-white mb-3">
            Research Context & Problem Formulation
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6">
            Autonomous Mobile Robots (AMRs) operating in warehouses, factories, and hospitals leave complex, heterogeneous operational footprints: periodic telemetry tables, discrete event logs, software exceptions, and operating manuals. When operational anomalies occur, human operators must cross-examine conflicting sources. Standard Large Language Models produce plausible but ungrounded answers lacking explicit provenance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/[0.04]">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-teal-400 font-mono text-xs block mb-1">01 / Heterogeneous Ingestion</span>
              <p className="text-white/60 text-xs">Unifies CSV telemetry, JSON events, application logs, and PDF manuals into 39 provenance-tagged chunks.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-teal-400 font-mono text-xs block mb-1">02 / Conflict-Aware Modeling</span>
              <p className="text-white/60 text-xs">Maintains simultaneous conflicting sensor readings (e.g. 67.2 °C vs 68.2 °C) without arbitrary consensus loss.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
              <span className="text-teal-400 font-mono text-xs block mb-1">03 / 4-Gate Claim Verification</span>
              <p className="text-white/60 text-xs">Validates format, citation existence, numerical truth gates, and local LLM audit to eliminate hallucinated causal jumps.</p>
            </div>
          </div>
        </div>

        {/* Technical Architecture Visualization */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase text-teal-400 tracking-wider">System Architecture</span>
            <div className="w-12 h-px bg-teal-500/30" />
            <span className="text-white/40 text-xs">Local Pipeline Architecture (Fig. 1–5 from Paper)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-teal-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-400 font-bold">Phase 1</span>
                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">Ingestion</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">Multi-Format Preprocessing</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Normalizes timestamps to ISO 8601, cleans whitespace, preserves raw values in <code className="text-teal-300">original_metadata</code>, and splits manuals into &le;900 char sections.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-teal-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-400 font-bold">Phase 2</span>
                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">Retrieval</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">FAISS & Deterministic Lookups</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Uses <code className="text-teal-300">all-MiniLM-L6-v2</code> (384-d, L2-normalized) with FAISS IndexFlatIP (exact inner product) coupled with rule-based timestamp & conflict chunks.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-teal-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-400 font-bold">Phase 3</span>
                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">Graph Extraction</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">Qwen2.5 3B & NetworkX</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Extracts structured facts with 11 required fields under strict JSON schema via Ollama. Populates a 22-node, 20-edge NetworkX MultiDiGraph (JSON & GraphML export).
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-teal-500/30 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-teal-400 font-bold">Phase 4</span>
                <span className="text-[10px] font-mono text-white/40 bg-white/5 px-2 py-0.5 rounded">Verification</span>
              </div>
              <h4 className="text-white font-semibold text-sm mb-2">4-Gate Claim Verification</h4>
              <p className="text-white/50 text-xs leading-relaxed">
                Gates each claim through format checks (<code className="text-teal-300">Vfmt</code>), citation existence (<code className="text-teal-300">Vid</code>), numerical value consistency (<code className="text-teal-300">Vval</code>), and LLM audit (<code className="text-teal-300">Vllm</code>).
              </p>
            </div>
          </div>
        </div>

        {/* Evaluation Results with Comparison Chart */}
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8 mb-16" data-aos="fade-up">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-white/[0.06]">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                Benchmark Evaluation (20-Question AMR Suite)
              </h3>
              <p className="text-white/50 text-xs md:text-sm">
                Empirical proxy metrics across 4 configurations reported in Table 4 of the paper.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-white/70">
                <span className="w-2.5 h-2.5 rounded-sm bg-teal-500" /> CRP (Citation Recall)
              </span>
              <span className="flex items-center gap-1.5 text-white/70">
                <span className="w-2.5 h-2.5 rounded-sm bg-teal-300" /> CPP (Citation Precision)
              </span>
              <span className="flex items-center gap-1.5 text-white/70">
                <span className="w-2.5 h-2.5 rounded-sm bg-white/30" /> FRP (Fact Recall)
              </span>
            </div>
          </div>

          {/* Metric Comparison Table & Bars */}
          <div className="space-y-6">
            {metricsData.map((m) => (
              <div
                key={m.config}
                className={`p-4 rounded-xl border transition-all ${
                  m.highlight
                    ? 'bg-teal-500/[0.05] border-teal-500/30'
                    : 'bg-white/[0.015] border-white/[0.04]'
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <div>
                    <span className="text-sm font-bold text-white">{m.config}</span>
                    <span className="text-xs text-white/40 block sm:inline sm:ml-3">{m.description}</span>
                  </div>
                  {m.highlight && (
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 border border-teal-500/30 self-start md:self-auto">
                      Best Citation Precision (0.521) & Recall (0.596)
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 text-xs font-mono">
                  {/* FRP Bar */}
                  <div>
                    <div className="flex justify-between text-white/50 mb-1">
                      <span>FRP (Fact Recall)</span>
                      <span className="text-white font-semibold">{m.frp.toFixed(3)}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-white/30 rounded-full transition-all duration-1000"
                        style={{ width: `${m.frp * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* CPP Bar */}
                  <div>
                    <div className="flex justify-between text-white/50 mb-1">
                      <span>CPP (Citation Prec.)</span>
                      <span className="text-teal-300 font-semibold">{m.cpp.toFixed(3)}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-teal-300 rounded-full transition-all duration-1000"
                        style={{ width: `${m.cpp * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* CRP Bar */}
                  <div>
                    <div className="flex justify-between text-white/50 mb-1">
                      <span>CRP (Citation Recall)</span>
                      <span className="text-teal-500 font-semibold">{m.crp.toFixed(3)}</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                      <div
                        className="h-full bg-teal-500 rounded-full transition-all duration-1000"
                        style={{ width: `${m.crp * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Critical Scientific Findings & Honest Limitations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
          
          {/* Finding: Trade-off */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <h4 className="text-base font-semibold text-white">The Verification Trade-off</h4>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              Adding 4-gate claim verification in Configuration D yielded the highest citation precision (<strong>0.521</strong>) and citation recall (<strong>0.596</strong>) over unverified RAG. However, this came at the explicit expense of fact recall (<strong>0.305 FRP</strong>).
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              Because Configuration D only admits claims passing strict citation and value verification gates, answers become substantially more concise and conservative, discarding speculative statements.
            </p>
          </div>

          {/* Finding: Honest Graph Limitation & Disambiguation */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <h4 className="text-base font-semibold text-white">Honest Graph-Context Limitations</h4>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-3">
              An independent audit of the graph artifacts revealed that performance gains in Configuration C stemmed from structured factual text rather than edge traversal; the prompt rejected causal edges that lacked explicit ground-truth linkage.
            </p>
            <p className="text-white/50 text-xs leading-relaxed">
              In the operational case study (AMR-01 at 10:32), conflicting temperature readings (67.2 °C vs 68.2 °C) were accurately maintained side-by-side, preventing a false causal attribution to the 10:35 stop (which was caused by obstacle detection).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FeaturedResearch;
