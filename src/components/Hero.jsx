import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { heroContent, socialLinks } from '../data/portfolioData';
import heroImage from '../assets/hero/kb.png';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Cover" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/70 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Left Floating Social Bar for Large Screens */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a 
          href={socialLinks.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a 
          href={socialLinks.email} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-125"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl w-full mx-auto md:mx-0">
          
          {/* Mobile / Hero inline socials */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-6 mb-6 lg:hidden"
          >
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="GitHub">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="LinkedIn">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href={socialLinks.email} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#ff2a2a]" aria-label="Email">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          >
            {heroContent.greeting}, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">{heroContent.titleHighlight}</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/80 text-base md:text-xl font-medium mb-10 max-w-xl drop-shadow-md"
          >
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-white text-black font-bold hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,42,42,0.6)]"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href={heroContent.ctaSecondary.href}
              className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-md"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Download Button */}
            <a 
              href={heroContent.ctaResume.href}
              download
              className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base rounded-full bg-transparent border border-white/50 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-white/40 text-xs tracking-widest uppercase mb-2">Scroll</span>
          <svg 
            className="w-5 h-5 text-white/60 drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
