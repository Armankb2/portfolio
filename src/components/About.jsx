import { aboutContent } from '../data/portfolioData';

const About = () => {
  const { education } = aboutContent;

  return (
    <section id="about" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Section Label + Education */}
          <div className="lg:col-span-4" data-aos="fade-up">
            <div className="sticky top-32">
              {/* Section badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
                <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">About</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                {aboutContent.heading}
              </h2>

              {/* Education card */}
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 mt-8">
                <div className="text-teal-400 text-xs font-semibold tracking-wider uppercase mb-4">Education</div>
                <h3 className="text-white font-semibold text-base mb-1">{education.degree}</h3>
                <p className="text-white/60 text-sm mb-3">{education.institution}</p>
                <div className="flex items-center gap-4 text-sm">
                  <div>
                    <span className="text-white/40">CGPA</span>
                    <span className="text-teal-400 font-bold ml-2">{education.cgpa}</span>
                  </div>
                  <div className="w-px h-4 bg-white/10" />
                  <div>
                    <span className="text-white/40">Graduation</span>
                    <span className="text-white/70 font-medium ml-2">{education.graduation}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio paragraphs */}
          <div className="lg:col-span-8" data-aos="fade-up" data-aos-delay="150">
            <div className="space-y-6">
              {aboutContent.bio.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-white/70 text-base md:text-lg leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core focus areas */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { label: "Backend", desc: "APIs & Systems" },
                { label: "AI", desc: "Search & RAG" },
                { label: "Content", desc: "Docs & Automation" },
                { label: "Data", desc: "Analytics & Pipelines" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-4 text-center hover:border-teal-500/20 transition-colors duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 80}
                >
                  <div className="text-white font-semibold text-sm mb-1">{item.label}</div>
                  <div className="text-white/40 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
