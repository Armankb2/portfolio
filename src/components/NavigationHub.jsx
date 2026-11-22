const navigationCards = [
  {
    id: 'projects',
    title: 'Exploring My Projects',
    description: "Interested in the systems I've built, engineering decisions I've made, and problems I've solved?",
    cta: 'Explore Projects',
    href: '#projects',
    tag: 'Systems & Code',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    id: 'documentation',
    title: 'Reviewing My Documentation',
    description: 'Want to see how I explain complex systems, write technical documentation, and make engineering concepts easier to understand?',
    cta: 'Explore Documentation',
    href: '#documentation-lab',
    tag: 'Documentation Lab',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'technical-work',
    title: 'Exploring My Technical Work',
    description: 'Interested in my technical writing, content engineering, automation, and developer-focused work?',
    cta: 'View Technical Work',
    href: '#content-automation',
    tag: 'Content & Automation',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    id: 'connect',
    title: "Let's Connect",
    description: 'Have an opportunity, a role in mind, or simply want to discuss something interesting?',
    cta: 'Get in Touch',
    href: '#contact',
    tag: 'Direct Contact',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
];

const NavigationHub = () => {
  return (
    <section id="navigation-hub" className="bg-gray-950 py-20 md:py-24 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />

      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span className="text-teal-300 text-xs font-semibold tracking-wider uppercase font-mono">
              Quick Navigation
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What brings you here?
          </h2>

          <p className="text-white/60 text-sm md:text-base leading-relaxed">
            Whether you&apos;re evaluating my engineering work, exploring my technical documentation, or looking to connect, here&apos;s a good place to start.
          </p>
        </div>

        {/* 4 Interactive Intent Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationCards.map((card, index) => (
            <a
              key={card.id}
              href={card.href}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group bg-white/[0.02] border border-white/[0.06] hover:border-teal-500/40 hover:bg-white/[0.04] p-6 md:p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_12px_35px_rgba(20,184,166,0.12)] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-950 cursor-pointer"
            >
              <div>
                {/* Header row: Icon & Tag */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center group-hover:bg-teal-500/20 group-hover:scale-105 transition-all duration-300">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-wider bg-white/[0.02] px-2 py-0.5 rounded border border-white/[0.04] group-hover:text-teal-300 group-hover:border-teal-500/20 transition-colors">
                    {card.tag}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-teal-300 transition-colors mb-2.5">
                  {card.title}
                </h3>

                {/* Short Description */}
                <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              {/* Action Link Row */}
              <div className="pt-4 border-t border-white/[0.04] flex items-center justify-between text-xs font-mono font-semibold text-teal-400 group-hover:text-teal-300 transition-colors">
                <span>{card.cta}</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NavigationHub;
