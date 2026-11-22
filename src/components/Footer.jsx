import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-black text-white/60 py-16 px-6 md:px-12 w-full border-t border-white/[0.06] font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Top Row: Brand & Taglines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-b border-white/[0.06]">
          <div>
            <a href="#" className="text-white text-xl font-bold tracking-tight inline-block mb-3">
              {personalInfo.brandName}<span className="text-teal-400">.</span>
            </a>
            <p className="text-xs text-white/50 leading-relaxed max-w-xs">
              {personalInfo.title}
            </p>
          </div>

          <div className="flex flex-col gap-1.5 text-xs">
            <span className="text-white/30 uppercase tracking-wider font-mono mb-1">Focus Areas</span>
            {footerContent.taglines.map((line, i) => (
              <span key={i} className="text-white/70">{line}</span>
            ))}
          </div>

          <div className="flex flex-col md:items-end gap-1.5 text-xs">
            <span className="text-white/30 uppercase tracking-wider font-mono mb-1">Education</span>
            <span className="text-white/80 font-medium">{footerContent.credential}</span>
            <span className="text-teal-400/80">Available for Opportunities</span>
          </div>
        </div>

        {/* Bottom Row: Navigation, Socials, Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-white/50">
            <a href="#about" className="hover:text-teal-300 transition-colors">About</a>
            <a href="#featured-research" className="hover:text-teal-300 transition-colors">Research</a>
            <a href="#expertise" className="hover:text-teal-300 transition-colors">Expertise</a>
            <a href="#projects" className="hover:text-teal-300 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-300 transition-colors">Skills</a>
            <a href="#documentation-lab" className="hover:text-teal-300 transition-colors">Doc Lab</a>
            <a href="#contact" className="hover:text-teal-300 transition-colors">Contact</a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href={`mailto:${personalInfo.emails.primary}`}
              className="text-white/50 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white/40 font-mono text-[11px]">
            {footerContent.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
