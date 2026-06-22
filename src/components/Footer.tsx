import { Github, Linkedin, Mail, ArrowUp, ExternalLink } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Mahesh10k', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mahesh-pikki', icon: Linkedin },
  { name: 'Email', href: 'mailto:maheshpikki03@gmail.com', icon: Mail },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 border-t border-dark-800">
      {/* Gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">M</span>
              </div>
              <span className="font-display font-semibold text-white text-lg">
                Mahesh<span className="text-primary-400">.</span>
              </span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed mb-4">
              Full Stack MERN Developer passionate about building scalable web applications and creating impactful digital experiences.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-dark-800/50 border border-dark-700 flex items-center justify-center text-dark-400 hover:text-white hover:border-dark-500 hover:bg-dark-700 transition-all duration-300"
                  aria-label={link.name}
                >
                  <link.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-dark-400 text-sm hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:maheshpikki03@gmail.com"
                  className="flex items-center text-dark-400 text-sm hover:text-primary-400 transition-colors"
                >
                  <Mail size={14} className="mr-2" />
                  maheshpikki03@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mahesh-pikki/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-dark-400 text-sm hover:text-primary-400 transition-colors"
                >
                  <Linkedin size={14} className="mr-2" />
                  LinkedIn Profile
                  <ExternalLink size={10} className="ml-1" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Mahesh10k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-dark-400 text-sm hover:text-primary-400 transition-colors"
                >
                  <Github size={14} className="mr-2" />
                  GitHub Profile
                  <ExternalLink size={10} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center text-dark-500 text-sm">
              <span>&copy; {new Date().getFullYear()} Mahesh Pikki.</span>
              <span className="mx-2">|</span>
              <span className="flex items-center">
              Software Developer
              </span>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="group flex items-center px-4 py-2 rounded-lg bg-dark-800/50 border border-dark-700 text-dark-400 text-sm hover:text-white hover:border-dark-500 transition-all duration-300"
            >
              Back to Top
              <ArrowUp size={14} className="ml-2 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
