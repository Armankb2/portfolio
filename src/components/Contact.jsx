import { useRef, useState } from 'react';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.querySelector('#firstName')?.value || '';
    const lastName = form.querySelector('#lastName')?.value || '';
    const email = form.querySelector('#email')?.value || '';
    const message = form.querySelector('#message')?.value || '';

    // Validate inputs
    if (!firstName.trim() || !email.trim() || !message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const isConfigured =
      emailjsConfig.serviceId &&
      emailjsConfig.serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      emailjsConfig.templateId &&
      emailjsConfig.templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      emailjsConfig.publicKey &&
      emailjsConfig.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      // Graceful fallback to mailto
      const mailtoLink = `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`;
      window.open(mailtoLink, '_blank');
      setStatus('success');
      formRef.current.reset();
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    try {
      const emailjs = await import('@emailjs/browser');
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formRef.current,
        emailjsConfig.publicKey
      );
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 4000);
  };

  return (
    <section id="contact" className="bg-gray-950 py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/20 bg-teal-500/5 mb-6">
            <span className="text-teal-400 text-xs font-semibold tracking-wider uppercase">Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Discuss Opportunities
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            Interested in backend engineering, AI applications, or technical documentation? Send me a message or connect directly.
          </p>
        </div>

        {/* Contact Form Card */}
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm"
        >
          {/* Quick info row */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-8 mb-8 border-b border-white/[0.06]">
            <div>
              <span className="text-xs text-white/40 font-mono uppercase block mb-1">Direct Email</span>
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="text-white font-medium hover:text-teal-400 transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </div>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-teal-500/40 text-xs font-semibold transition-all"
            >
              <svg className="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              LinkedIn Profile
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-xs font-mono uppercase text-white/40 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="John"
                  required
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-teal-500/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-xs font-mono uppercase text-white/40 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Doe"
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-teal-500/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-mono uppercase text-white/40 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                placeholder="john@example.com"
                required
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-teal-500/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono uppercase text-white/40 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your team, role, or project..."
                required
                className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-white/40">
                Typically responds within 24–48 hours.
              </span>

              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'sending'
                    ? 'bg-teal-600/50 text-white cursor-not-allowed'
                    : status === 'success'
                    ? 'bg-green-600 text-white'
                    : status === 'error'
                    ? 'bg-red-600 text-white'
                    : 'bg-teal-600 hover:bg-teal-500 text-white hover:shadow-[0_0_25px_rgba(20,184,166,0.3)]'
                }`}
              >
                {status === 'sending'
                  ? 'Sending...'
                  : status === 'success'
                  ? 'Message Sent ✓'
                  : status === 'error'
                  ? 'Please fill required fields'
                  : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
