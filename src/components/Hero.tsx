import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import ProfileImg from "../assets/image.png"
import Resume from "../assets/Mahesh_Pikki_Resume_60.pdf"

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Mahesh10k',
    icon: Github,
    color: 'hover:text-white hover:bg-dark-600',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/Mahesh10k',
    icon: Linkedin,
    color: 'hover:text-blue-400 hover:bg-blue-500/10',
  },
  {
    name: 'Email',
    href: 'mailto:maheshpikki03@gmail.com',
    icon: Mail,
    color: 'hover:text-red-400 hover:bg-red-500/10',
  },
];

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated blobs */}
        <div className="absolute top-1/4 -left-10 w-72 h-72 md:w-96 md:h-96 bg-primary-500/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-10 w-72 h-72 md:w-96 md:h-96 bg-secondary-500/30 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-accent-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <div className="animate-fade-in-down">
              <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in-up">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Mahesh Pikki
              </span>
            </h1>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl md:text-3xl text-dark-300 font-display font-medium mb-6 animate-fade-in-up animation-delay-200">
              Software Developer | <span className="text-primary-400">React.js</span> |{' '}
              <span className="text-accent-400">TypeScript</span> |{' '}
              <span className="text-secondary-400">Node.js</span>
            </h2>

            {/* Subtitle badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6 animate-fade-in-up animation-delay-300">
              {['Nudges Platform', 'Visual UI Builders', 'SDK Development'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-dark-800/50 border border-dark-700/50 rounded-full text-xs text-dark-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-dark-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              Building visual UI design tools and nudges platforms that enable product teams
              to create, customize, and deploy user engagement experiences without writing code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up animation-delay-600">
              <button
                onClick={scrollToProjects}
                className="group flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-600 text-white font-semibold shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
              >
                View Projects
                <ArrowDown size={18} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="#contact"
                className="flex items-center px-6 py-3 rounded-xl border border-dark-600 text-white font-semibold hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
              >
                <Mail size={18} className="mr-2" />
                Contact Me
              </a>
              <a
                href={Resume}
                className="flex items-center px-6 py-3 rounded-xl border border-dark-600 text-dark-300 font-semibold hover:border-dark-500 hover:bg-dark-700/50 hover:text-white transition-all duration-300"
              >
                <Download size={18} className="mr-2" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 animate-fade-in-up animation-delay-800">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-xl bg-dark-700/50 border border-dark-600 flex items-center justify-center text-dark-400 hover:border-dark-500 transition-all duration-300 ${link.color}`}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image / Avatar */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 -m-4 rounded-full border border-primary-500/20 animate-spin-slow" />
              <div className="absolute inset-0 -m-8 rounded-full border border-secondary-500/20 animate-spin-slow animation-delay-1000" />
              <div className="absolute inset-0 -m-12 rounded-full border border-accent-500/10 animate-spin-slow animation-delay-2000" />

              {/* Profile container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 p-1 shadow-glow-lg">
                <div className="w-full h-full rounded-full bg-dark-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={ProfileImg}
                    alt="Mahesh Pikki"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-primary-500 text-white text-sm font-medium shadow-glow animate-float">
                React.js
              </div>
              <div className="absolute top-1/3 -left-4 px-3 py-1 rounded-full bg-accent-500 text-white text-sm font-medium shadow-glow-accent animate-float animation-delay-500">
                TypeScript
              </div>
              <div className="absolute top-1/3 -right-4 px-3 py-1 rounded-full bg-secondary-500 text-white text-sm font-medium shadow-glow animate-float animation-delay-1000">
                Node.js
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-dark-700 border border-dark-600 text-dark-300 text-sm font-medium animate-float animation-delay-1500">
                Nudges
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <button
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center text-dark-500 hover:text-primary-400 transition-colors"
          >
            <span className="text-xs mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
