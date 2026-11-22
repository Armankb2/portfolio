import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#featured-research' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Doc Lab', href: '#documentation-lab' },
    { label: 'Contact', href: '#contact' },
  ];

  const hireMeMailto = `mailto:armankbarmankb04@gmail.com?subject=Hiring Inquiry – Portfolio`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isOpen
          ? 'bg-gray-950/98 backdrop-blur-xl py-4'
          : isScrolled
            ? 'bg-gray-950/90 backdrop-blur-xl py-3 shadow-lg shadow-black/20'
            : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-white text-xl font-black tracking-tight whitespace-nowrap">
          {personalInfo.brandName}<span className="text-teal-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/70 hover:text-white text-sm font-medium relative group transition-colors duration-300"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-teal-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={hireMeMailto}
            className="px-5 py-2 rounded-full border border-teal-500/40 text-teal-400 text-sm font-semibold hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-[500px] py-6 opacity-100 bg-gray-950/98 backdrop-blur-xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-teal-400 font-medium text-lg py-3 border-b border-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
            <a
              href={hireMeMailto}
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 rounded-full bg-teal-600 text-white font-bold hover:bg-teal-500 transition-colors w-full text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
