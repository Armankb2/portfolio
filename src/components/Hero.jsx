import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, socialLinks, personalInfo } from '../data/portfolioData';
import heroImage from '../assets/hero/kb1.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: 'ease-out' });
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gray-950">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-teal-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full py-24 lg:py-0">

          {/* Left: Text */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">

            {/* Research Paper Highlight Pill */}
            <a
              href="#featured-research"
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20 hover:border-teal-400 transition-all text-xs text-teal-300 font-medium mb-5 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
              <span>Research: Knowledge Extraction Framework for AMRs</span>
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Badge */}
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
              <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">
                {personalInfo.title}
              </span>
            </div>

            {/* Name */}
            <h2
              data-aos="fade-up"
              data-aos-delay="50"
              className="text-white/60 text-lg md:text-xl font-medium mb-3 tracking-wide"
            >
              {heroContent.greeting}
            </h2>

            {/* Headline */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-bold mb-6 tracking-tight leading-[1.15]"
            >
              Building Backend Systems.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                Exploring Intelligent Knowledge Experiences.
              </span>
            </h1>

            {/* Subtitle */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-white/60 text-base md:text-lg font-normal mb-10 max-w-xl leading-relaxed"
            >
              {heroContent.subtitle}
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap justify-center lg:justify-start items-center gap-4"
            >
              <a
                href={heroContent.ctaPrimary.href}
                className="px-7 py-3 rounded-full bg-teal-600 text-white font-semibold text-sm hover:bg-teal-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]"
              >
                {heroContent.ctaPrimary.text}
              </a>
              <a
                href={heroContent.ctaSecondary.href}
                className="px-7 py-3 rounded-full border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300"
              >
                {heroContent.ctaSecondary.text}
              </a>
              <a
                href={heroContent.ctaResume.href}
                target="_blank"
                rel="noopener noreferrer"
                download="Arman_KB_Resume.pdf"
                className="px-7 py-3 rounded-full border border-white/10 text-white/70 font-medium text-sm hover:text-white hover:border-white/30 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {heroContent.ctaResume.text}
              </a>
            </div>

            {/* Social Links */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex items-center gap-5 mt-10"
            >
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-teal-400 transition-colors" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-teal-400 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href={socialLinks.email} className="text-white/40 hover:text-teal-400 transition-colors" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </a>
              <div className="w-px h-5 bg-white/10 mx-1" />
              <span className="text-white/30 text-xs font-medium">{personalInfo.location}</span>
            </div>
          </div>

          {/* Right: Technical Visual */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-72 sm:w-80 md:w-96">
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-500/20 to-teal-600/10 rounded-3xl blur-2xl" />

              {/* Image container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
                <img
                  src={heroImage}
                  alt="Arman KB"
                  className="w-full aspect-[3/4] object-cover object-center"
                />
                {/* Bottom overlay with info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse" />
                    <span className="text-white/80 text-sm font-medium"></span>
                  </div>
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute -top-4 -right-4 bg-gray-900/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-teal-400 text-xl font-bold">5+</div>
                <div className="text-white/50 text-xs">Projects</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gray-900/90 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 shadow-xl">
                <div className="text-teal-400 text-xl font-bold">8.10</div>
                <div className="text-white/50 text-xs">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex-col items-center animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
