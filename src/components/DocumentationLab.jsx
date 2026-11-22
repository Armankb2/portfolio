import { useState } from 'react';

const caseStudies = [
  {
    id: 'placement-syndicate',
    number: '01',
    repoName: 'Placement-Syndicate-mini',
    repoUrl: 'https://github.com/Armankb2/Placement-Syndicate-mini',
    readmeUrl: 'https://github.com/Armankb2/Placement-Syndicate-mini#readme',
    title: 'Distributed Microservices & Hybrid Search Pipeline',
    subtitle: 'From Service Ingestion to Grounded LLM Synthesis',
    domain: 'Backend & Information Retrieval',
    complexity: 'Distributed Services • Event-Driven • Dual-Indexer Score Fusion',
    techStack: ['Java 17 / Spring Boot', 'Python / FastAPI', 'Sentence-Transformers', 'BM25', 'Kafka', 'RabbitMQ', 'MongoDB'],
    context: {
      summary: 'A client-server microservices system integrating Spring Boot (relational management), FastAPI (AI search & inference), MongoDB, and asynchronous message brokers (Kafka/RabbitMQ). It matches candidate resumes against an interview catalog and generates grounded feedback reports.',
      challenge: 'Documenting this requires explaining the hand-off between raw document parsing, dynamic catalog fitting, dual lexical/semantic retrieval, and prompt injection across independent backends without confusing the reader with low-level execution details.'
    },
    originalExcerpt: {
      sourceLocation: 'README.md — Section 8.1 "End-to-End Application Workflows"',
      markdown: `### 8.1 Resume Feedback Workflow
1. User uploads a PDF/DOCX in the UI (ResumeUploadPage).
2. Frontend sends POST /api/resume/upload to the FastAPI service.
3. FastAPI extracts raw text (extract_text).
4. It loads the experience collection from MongoDB.
5. HybridSearcher is fit with all experiences and performs a hybrid search against the resume text.
6. Top‑k matches are passed to LLMClient which builds a system + user prompt and calls Groq.
7. The LLM returns a grounded gap‑analysis report.
8. The service stores the report and metadata in resume_feedback.
9. Frontend polls GET /api/resume/feedback/{filename} to display the advice.`
    },
    reconstruction: {
      title: 'Resume Feedback Pipeline: From Upload to Grounded Evaluation',
      overview: 'The resume analysis pipeline bridges asynchronous document processing with retrieval-augmented evaluation across four sequential milestones:',
      sections: [
        {
          heading: '1. Ingestion & Boundary Validation',
          text: 'The student uploads a PDF or DOCX file via the React interface, triggering `POST /api/resume/upload` to the FastAPI service. The service parses the raw document stream, extracts plain text, and validates character boundaries to ensure clean input for downstream indexers.'
        },
        {
          heading: '2. Dual-Channel Hybrid Search (BM25 + Dense Vectors)',
          text: 'To match student experience against interview records without relying solely on keyword overlap, the system executes two complementary scoring pipelines:\n• Lexical Channel (BM25): Catches exact company names, technical frameworks, and specific tooling keywords.\n• Semantic Channel (Sentence-Transformers all-MiniLM-L6-v2): Embeds contextual descriptions, matching conceptual equivalents (e.g., "distributed caching" matches "Redis pub/sub").\n• Reciprocal Rank Fusion: The search engine normalizes and combines scores to retrieve the top-k most relevant candidate experiences from MongoDB.'
        },
        {
          heading: '3. Grounded LLM Gap Analysis',
          text: 'The service injects the student resume alongside the top-k matched interview experiences into a structured system prompt. Groq (Llama 3.3 70B) generates an evidence-grounded gap analysis report strictly constrained to the retrieved interview questions and expectations, preventing hallucinated career advice.'
        },
        {
          heading: '4. Persistence & Asynchronous Delivery',
          text: 'The finalized report and citation IDs are written to MongoDB (`resume_feedback`). The frontend polls `GET /api/resume/feedback/{filename}` until generation completes, rendering actionable skill recommendations and company-specific interview tips.'
        }
      ]
    },
    editorialDecisions: [
      {
        action: 'Decomposed Monolithic Algorithmic Steps',
        reason: 'Original step 5 ("HybridSearcher is fit...") compressed lexical indexing, vector embedding, and score fusion into a single line. The rewrite separates the lexical (BM25) and semantic channels so developers understand why hybrid search is used.'
      },
      {
        action: 'Established Architectural Context Before API Endpoints',
        reason: 'Rather than starting with raw HTTP methods, the revision explains the problem (evaluating resumes against real interview benchmarks) before introducing the endpoint mechanics.'
      },
      {
        action: 'Grouped 9 Linear Bullets into 4 Logical Functional Milestones',
        reason: 'Flat numbered lists obscure high-level system boundaries. Grouping them into Ingestion, Retrieval, Synthesis, and Delivery gives readers an immediate mental model of system boundaries.'
      },
      {
        action: 'Eliminated Ambiguous Code-Level Shorthand',
        reason: 'Replaced internal identifiers like `fit` and `extract_text` with clear technical explanations of data transformations and token normalization.'
      }
    ]
  },
  {
    id: 'scopus',
    number: '02',
    repoName: 'Scopus',
    repoUrl: 'https://github.com/Armankb2/Scopus',
    readmeUrl: 'https://github.com/Armankb2/Scopus#readme',
    title: 'Cache-First Architecture & Live SSE Event Streaming',
    subtitle: 'Decoupling Long-Running Extraction from Web Clients',
    domain: 'Data Ingestion & Real-Time APIs',
    complexity: 'Asynchronous Workers • Server-Sent Events • Rate-Limit Semaphores',
    techStack: ['Python / FastAPI', 'React 19', 'Server-Sent Events (SSE)', 'SQLite', 'Scopus REST API', 'Docker'],
    context: {
      summary: 'A self-contained research analytics platform consolidating faculty publications from Google Scholar and Elsevier Scopus APIs. Features background job workers, cache-first verification, in-memory progress tracking, and multi-format report exports (CSV, Excel, PDF).',
      challenge: 'Academic API queries are I/O-intensive and subject to strict vendor rate limits. Documenting the system requires clarifying the asynchronous decoupling: why the client does not wait for HTTP responses, and how SSE streams live telemetry from in-memory stores.'
    },
    originalExcerpt: {
      sourceLocation: 'README.md — Sections 4 & 5 "Extraction & SSE Workflows"',
      markdown: `## 4. Publication Extraction Workflow
1. UI dispatches POST /api/fetch/start.
2. Backend registers the job, checks the cache, and enqueues a background extraction task (run_extraction_job).
3. The extraction task contacts Google Scholar (optional) and the Scopus API, merges results, computes metrics, writes CSV/JSON, and generates Excel & PDF reports.
4. Progress events are stored in an in‑memory PROGRESS_STORE and emitted via SSE.

## 5. Real‑Time Extraction & SSE Workflow
The UI subscribes to /api/progress/{job_id} using EventSource. Progress updates flow from the extraction worker → PROGRESS_STORE → SSE endpoint → React components.`
    },
    reconstruction: {
      title: 'Asynchronous Extraction & Real-Time Event Streaming Architecture',
      overview: 'Querying external academic APIs requires several minutes of paginated network I/O. Scopus decouples the client interaction into a non-blocking three-phase lifecycle:',
      sections: [
        {
          heading: 'Phase 1: Job Initialization & Cache Interception',
          text: '• Client Dispatch: The React interface issues `POST /api/fetch/start` containing an author identifier.\n• Cache Verification: The backend inspects `generated/`. If pre-compiled reports exist and `force_refresh=false`, the server returns cached artifacts immediately, avoiding duplicate upstream API hits.\n• Concurrency Guard: If a fresh query is required, an execution semaphore verifies that no competing extraction is saturating the API quota.'
        },
        {
          heading: 'Phase 2: Non-Blocking Background Worker Execution',
          text: '• Immediate Return: The backend allocates an ephemeral job ID, spawns `run_extraction_job` as an asynchronous background worker, and returns an HTTP 202 status code instantly.\n• Multi-Source Extraction: The background worker queries the Scopus REST API and Scholar endpoints, deduplicates records by DOI, computes citation KPIs (h-index, i10-index), and serializes structured datasets to SQLite, CSV, Excel, and PDF.'
        },
        {
          heading: 'Phase 3: Live Progress Telemetry via Server-Sent Events (SSE)',
          text: '• Persistent Unidirectional Channel: The browser opens an `EventSource` connection to `/api/progress/{job_id}`.\n• In-Memory Progress Publisher: As the worker processes page chunks, it publishes discrete percentage and status updates to an in-memory store (`PROGRESS_STORE`).\n• Real-Time Push: The SSE endpoint streams these state changes to client React components with zero client-side polling, gracefully terminating the connection upon receiving `status: complete`.'
        }
      ]
    },
    editorialDecisions: [
      {
        action: 'Merged Disconnected Workflow Sections into a Cohesive Story',
        reason: 'In the original documentation, Sections 4 and 5 were listed separately, making it hard to see how the background extraction worker actually connects to the SSE EventSource. The rewrite synthesizes them into an end-to-end 3-phase progression.'
      },
      {
        action: 'Explained Architectural Rationale (The "Why")',
        reason: 'Added clear motivation for why the cache check and concurrency semaphore exist (preventing API quota exhaustion and long HTTP timeouts).'
      },
      {
        action: 'Clarified Asynchronous HTTP Protocol Handshakes',
        reason: 'Specified HTTP status expectations (returning an immediate HTTP 202 accepted response vs opening a persistent EventSource channel) for developers integrating against the API.'
      },
      {
        action: 'Distinguished Ephemeral Telemetry from Persistent Storage',
        reason: 'Explicitly contrasted the transient in-memory `PROGRESS_STORE` with long-term disk artifacts (SQLite, CSV, PDF), resolving ambiguity about where data lives.'
      }
    ]
  },
  {
    id: 'compiler-design',
    number: '03',
    repoName: 'compiler_Design',
    repoUrl: 'https://github.com/Armankb2/compiler_Design',
    readmeUrl: 'https://github.com/Armankb2/compiler_Design#readme',
    title: 'Static Single Assignment (SSA) & ML Pass Selection',
    subtitle: 'Explaining Cytron\'s Algorithm & Embedded Decision Trees in C11',
    domain: 'Systems & Compilers',
    complexity: 'Graph Dominance • Mathematical Variable Versioning • Embedded ML Induction',
    techStack: ['Pure C11', 'WebAssembly (.wasm / .wat)', 'CART Decision Tree', 'LEB128 Encoding', 'Make'],
    context: {
      summary: 'A pure C11 compiler that translates a subset of C into WebAssembly. It constructs Static Single Assignment (SSA) intermediate representation using the Cytron et al. algorithm and uses an embedded CART decision tree to predict optimal optimization passes per function.',
      challenge: 'Compiler internals—dominance frontiers, φ-node insertions, and heuristic pass selection—are mathematically rigorous. Documenting this requires translating algorithmic theory into accessible systems engineering prose without sacrificing rigor.'
    },
    originalExcerpt: {
      sourceLocation: 'README.md — "Core Implementation Details (SSA & ML-Guided Optimisation)"',
      markdown: `### SSA Construction (\`src/ssa.c\`)
- CFG building – identifies basic‑block leaders and predecessor/successor edges.
- Dominator tree – iterative intersection algorithm.
- Dominance frontiers – computes locations for φ‑functions.
- Variable renaming – depth‑first traversal of the dominator tree using version stacks.

### ML‑Guided Optimisation (\`src/mlopt.c\`)
- Extracts a twelve‑dimensional feature vector from the SSA IR (instruction count, constant ratio, phi‑node count, etc.).
- Training – enumerates all non‑empty pass combinations on each benchmark, scores them by instruction reduction versus pass count, and creates labelled data.
- CART induction – greedy split search using Gini impurity; depth limited to four.
- Inference – walks the tree, prints a human‑readable decision trace, and returns a bitmask of passes to run.
- The model is stored as a static structure; no external files are required.`
    },
    reconstruction: {
      title: 'Intermediate Representation: SSA Construction & Intelligent Pass Selection',
      overview: 'Before generating WebAssembly bytecode, the compiler converts linear three-address code into Static Single Assignment (SSA) form so every variable has exactly one definition site, enabling clean mathematical optimizations:',
      sections: [
        {
          heading: 'Part 1: The SSA Transformation Pipeline (Cytron et al.)',
          text: '1. Control-Flow Graph (CFG) Partitioning: Identifies basic-block leaders (branch destinations and return points) and establishes directed predecessor/successor execution edges.\n2. Dominator Tree Construction: Applies an iterative intersection algorithm to determine dominance: block D dominates block B if every execution path from entry must cross D.\n3. Dominance Frontier Calculation: Identifies the exact boundary nodes where paths converge and multiple definitions of a variable collide. These boundaries mark where value joins are required.\n4. Φ-Function Placement & Version Renaming: Inserts mathematical selection functions (`IR_PHI`) at dominance frontiers. A depth-first traversal of the dominator tree then assigns monotonic version subscripts (e.g., `x_0`, `x_1`) using per-variable version stacks.'
        },
        {
          heading: 'Part 2: Explainable ML-Guided Optimization (CART Decision Tree)',
          text: 'Instead of applying a static pass ordering (CF → CP → CSE → DCE) that risks redundant compiler overhead, an embedded Classification and Regression Tree (CART) customizes passes per function:\n• 12-Dimensional Feature Vector: Inspects the SSA IR to extract structural metrics (instruction volume, constant ratio, branch density, phi-node count).\n• Transparent Tree Inference: The compiler navigates a hardcoded C decision tree (depth &le; 4, trained with Gini impurity), outputting a human-readable decision trace:\n  `num_instructions > 6 -> repeated_expr_count > 0 -> SELECT PASS: CSE`\n• Zero-Dependency Execution: The model compiles as a static C struct, requiring no external runtime libraries or weight files while emitting a bitmask of activated optimization passes.'
        }
      ]
    },
    editorialDecisions: [
      {
        action: 'Defined Foundational Graph Concepts Before Algorithm Execution',
        reason: 'Original bullet points assumed the reader knew what a dominator tree and dominance frontier represent. The rewrite defines dominance ("every execution path must cross D") before introducing frontier calculations.'
      },
      {
        action: 'Clarified the Practical Purpose of Φ-Nodes',
        reason: 'Described phi-functions as value joins at converging control paths, giving software engineers an intuitive visual rather than abstract compiler jargon.'
      },
      {
        action: 'Connected ML Feature Vectors to Concrete Optimization Passes',
        reason: 'Illustrated the abstract "12D feature vector" with an actual execution trace example to demonstrate how feature inputs map directly to compiler passes (e.g., CSE).'
      },
      {
        action: 'Emphasized Systems Engineering Constraints',
        reason: 'Highlighted that the decision tree is embedded as a static C structure with zero external runtime dependencies, clarifying a critical architectural decision.'
      }
    ]
  },
  {
    id: 'map-parallel',
    number: '04',
    repoName: 'MAP',
    repoUrl: 'https://github.com/Armankb2/MAP',
    readmeUrl: 'https://github.com/Armankb2/MAP#readme',
    title: 'Shared-Memory Concurrency & Hardware Memory Layout',
    subtitle: 'Analyzing Synchronization Contention, ARM NEON SIMD, and AoS vs SoA',
    domain: 'High-Performance Computing',
    complexity: 'Cache-Line Contention • Vectorized Stride Access • Memory-Bandwidth Saturation',
    techStack: ['C11', 'OpenMP', 'POSIX Pthreads', 'ARM NEON SIMD', 'STREAM Benchmark', 'Apple Silicon M2'],
    context: {
      summary: 'A high-performance C11 benchmarking system exploring how thread synchronization strategies, memory layouts (AoS vs SoA), and SIMD vectorization affect K-Means clustering scalability on multicore Apple Silicon CPUs.',
      challenge: 'Hardware concepts like cache-line bouncing, atomic contention, and SIMD memory strides are easy to misinterpret. Clear documentation must bridge low-level CPU cache architecture with concrete code design.'
    },
    originalExcerpt: {
      sourceLocation: 'README.md — Sections 1 & 2 "Project Overview & Key Features"',
      markdown: `## 1. Project Overview
This repository provides a pure C11 implementation of the K‑Means clustering algorithm together with a complete benchmarking and reporting pipeline for shared‑memory multicore CPUs. The work investigates how synchronisation strategies, memory layout (AoS vs SoA), SIMD vectorisation (ARM NEON) and thread‑level parallelism (OpenMP vs POSIX Pthreads) impact performance and scalability on an Apple Silicon M2 system.

## 2. Key Features
- Sequential reference implementation (src/sequential/kmeans_sequential.c).
- OpenMP variants:
  - Private accumulator reduction (kmeans_private.c).
  - Atomic updates (kmeans_atomic.c).
  - Critical‑section updates (kmeans_critical.c).
- SIMD‑optimised kernel using ARM NEON intrinsics (kmeans_simd.c).
- Memory‑layout comparison: Array‑of‑Structures vs. Structure‑of‑Arrays (kmeans_aos_soa.c).
- POSIX Pthreads implementation (kmeans_pthreads.c).
- Native STREAM memory‑bandwidth benchmark (src/benchmark/stream_mem.c).
- Automated dataset generation, benchmark driver, CSV logging, plot generation (Matplotlib) and full academic report creation (python‑docx).`
    },
    reconstruction: {
      title: 'Multicore K-Means: Hardware Concurrency & Memory Architecture',
      overview: 'In high-dimensional clustering, compute throughput is bounded by distance calculations and memory throughput is bounded by centroid accumulation. This project examines three architectural axes:',
      sections: [
        {
          heading: '1. Synchronization Strategies: Lock Contention vs Thread Isolation',
          text: 'During the centroid recomputation phase, multiple threads accumulate point coordinates simultaneously:\n• Critical Sections (`kmeans_critical.c`): Enforces global mutex locks across threads. While safe, lock contention introduces severe CPU pipeline stalls and serial execution bottlenecks at higher core counts.\n• Atomic Instructions (`kmeans_atomic.c`): Uses hardware atomics (`#pragma omp atomic`). Eliminates mutex overhead but triggers cache-line bouncing across L1 caches as cores fight for write ownership of the same memory line.\n• Private Accumulators (`kmeans_private.c`): Allocates thread-local centroid buffers. Threads accumulate independently into private cache lines with zero contention, executing a single reduction pass at loop termination.'
        },
        {
          heading: '2. Memory Layout: Array-of-Structures (AoS) vs Structure-of-Arrays (SoA)',
          text: '• Array-of-Structures (`Point points[N]`): Stores coordinate tuples sequentially `[x0, y0, z0, x1, y1, z1, ...]`. While intuitive, loading a single dimension into a SIMD vector register requires strided reads and vector unpacking.\n• Structure-of-Arrays (`float x[N], y[N], z[N]`): Stores coordinates in contiguous, uniform dimension arrays. Consecutive floats load directly into 128-bit ARM NEON vector registers in a single memory cycle, maximizing L1 data cache line utilization.'
        },
        {
          heading: '3. Ground-Truth Hardware Bandwidth Instrumentation',
          text: 'Includes a native implementation of the John McCalpin STREAM benchmark to measure baseline memory throughput (e.g., 77.4 GB/s copy bandwidth on Apple Silicon M2), guaranteeing that algorithm speedups are benchmarked against physical hardware saturation limits rather than theoretical estimates.'
        }
      ]
    },
    editorialDecisions: [
      {
        action: 'Contrasted Synchronization Trade-offs with Hardware Realities',
        reason: 'Converted a passive list of file names into an active systems comparison explaining why private accumulators outperform atomic updates (eliminating cache-line bouncing across CPU cores).'
      },
      {
        action: 'Visualized Memory Layout Under Vectorization (AoS vs SoA)',
        reason: 'Explicitly detailed how memory organization directly impacts vector instructions, explaining why contiguous SoA arrays allow 128-bit ARM NEON registers to load without shuffle overhead.'
      },
      {
        action: 'Framed the Engineering Problem (Compute vs Memory Bounds)',
        reason: 'Established the physical constraints of K-Means clustering upfront so the reader understands why memory bandwidth is the primary bottleneck being tested.'
      },
      {
        action: 'Explained the Scientific Role of the STREAM Benchmark',
        reason: 'Clarified why a memory-bandwidth benchmark is included in a clustering repository: to establish empirical hardware upper bounds.'
      }
    ]
  }
];

const DocumentationLab = () => {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);
  const activeStudy = caseStudies.find((s) => s.id === activeTab) || caseStudies[0];

  return (
    <section id="documentation-lab" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Top section divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-teal-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-400" />
            <span className="text-teal-300 text-xs font-semibold tracking-wider uppercase font-mono">
              Documentation Lab
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Complex Systems. Clear Documentation.
          </h2>
          <p className="text-white/60 text-base md:text-lg max-w-3xl leading-relaxed">
            I document engineering systems by turning complex implementations, architecture decisions, workflows, and technical concepts into structured, accessible documentation that developers and readers can understand and act upon.
          </p>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/[0.06]" data-aos="fade-up">
          {caseStudies.map((study) => {
            const isSelected = study.id === activeTab;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(study.id)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500/15 text-teal-300 border border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.15)]'
                    : 'bg-white/[0.02] text-white/50 border border-white/[0.06] hover:text-white/80 hover:bg-white/[0.04]'
                }`}
              >
                <span className="font-mono text-[11px] opacity-70">{study.number}</span>
                <span>{study.repoName}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Presentation */}
        <div className="space-y-10" key={activeStudy.id} data-aos="fade-up">
          
          {/* A. Project Context Card */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-teal-400 font-bold">CASE STUDY {activeStudy.number}</span>
                  <span className="text-white/20">•</span>
                  <span className="text-xs font-mono text-white/50">{activeStudy.domain}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                  {activeStudy.title}
                </h3>
                <p className="text-teal-300/80 text-xs md:text-sm font-medium mt-1">
                  {activeStudy.subtitle}
                </p>
              </div>

              {/* GitHub Link */}
              <a
                href={activeStudy.readmeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-white/80 hover:text-white hover:border-teal-500/40 text-xs font-semibold transition-all group"
              >
                <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>View Original README</span>
                <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Context details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-teal-400 mb-2">System Implementation</h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  {activeStudy.context.summary}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-mono uppercase text-teal-400 mb-2">Documentation Engineering Challenge</h4>
                <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                  {activeStudy.context.challenge}
                </p>
              </div>
            </div>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
              {activeStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium text-white/60 bg-white/[0.03] border border-white/[0.06] rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* B vs C: Original Excerpt vs Reader-Friendly Reconstruction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Original Excerpt */}
            <div className="lg:col-span-5 bg-black/40 border border-white/[0.08] rounded-2xl p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="text-xs font-mono uppercase text-amber-300 font-bold tracking-wider">
                      Original README Excerpt
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">Raw Source</span>
                </div>

                <div className="text-[11px] font-mono text-white/40 mb-3">
                  {activeStudy.originalExcerpt.sourceLocation}
                </div>

                <pre className="text-xs font-mono text-white/70 whitespace-pre-wrap leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.04] overflow-x-auto">
                  {activeStudy.originalExcerpt.markdown}
                </pre>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] text-white/40 italic">
                Verbatim excerpt from repository README. Shows functional code steps without layered context.
              </div>
            </div>

            {/* Right: Reader-Friendly Reconstruction */}
            <div className="lg:col-span-7 bg-teal-500/[0.03] border border-teal-500/25 rounded-2xl p-6 md:p-8 relative">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-teal-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400" />
                  <span className="text-xs font-mono uppercase text-teal-300 font-bold tracking-wider">
                    Reader-Friendly Reconstruction
                  </span>
                </div>
                <span className="text-[10px] font-mono text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded border border-teal-500/20">
                  Documentation Engineered
                </span>
              </div>

              <h4 className="text-base md:text-lg font-bold text-white mb-2">
                {activeStudy.reconstruction.title}
              </h4>
              <p className="text-white/60 text-xs md:text-sm mb-6 leading-relaxed">
                {activeStudy.reconstruction.overview}
              </p>

              <div className="space-y-5">
                {activeStudy.reconstruction.sections.map((sec, idx) => (
                  <div key={idx} className="bg-white/[0.02] border border-white/[0.04] rounded-xl p-4">
                    <h5 className="text-xs md:text-sm font-semibold text-teal-300 mb-1.5 font-mono">
                      {sec.heading}
                    </h5>
                    <p className="text-white/75 text-xs md:text-sm leading-relaxed whitespace-pre-line">
                      {sec.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* D. Editorial Decisions Section */}
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.06]">
              <span className="text-xs font-mono uppercase text-teal-400 font-bold tracking-wider">
                Editorial Decisions & Documentation Engineering
              </span>
              <div className="w-8 h-px bg-teal-500/30" />
              <span className="text-white/40 text-xs">What changed in this transformation and why</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeStudy.editorialDecisions.map((decision, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 text-xs font-mono shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white mb-1">
                      {decision.action}
                    </h5>
                    <p className="text-white/60 text-xs leading-relaxed">
                      {decision.reason}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Documentation Engineering Philosophy Banner */}
        <div className="mt-16 pt-12 border-t border-white/[0.06]" data-aos="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.04]">
              <span className="text-xs font-mono text-teal-400 block mb-1">01 / Technical Precision</span>
              <p className="text-white/60 text-xs leading-relaxed">
                Documentation must be mathematically and architecturally accurate. Simplifying should never mean hand-waving technical realities.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.04]">
              <span className="text-xs font-mono text-teal-400 block mb-1">02 / Hierarchical Structuring</span>
              <p className="text-white/60 text-xs leading-relaxed">
                Establish high-level system mental models before introducing endpoints, flags, or data schemas.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.04]">
              <span className="text-xs font-mono text-teal-400 block mb-1">03 / Audience Calibration</span>
              <p className="text-white/60 text-xs leading-relaxed">
                Provide quick-start paths for operational users alongside rigorous protocol details for systems engineers.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.015] border border-white/[0.04]">
              <span className="text-xs font-mono text-teal-400 block mb-1">04 / Verified Ground Truth</span>
              <p className="text-white/60 text-xs leading-relaxed">
                Verify claims directly against working source code. Stale or speculative documentation is worse than no documentation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DocumentationLab;
