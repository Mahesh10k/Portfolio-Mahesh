import { Code, Layers, Zap, Target, Settings, Palette } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  {
    icon: Code,
    title: 'React & TypeScript',
    description: 'Building modern, type-safe web applications',
    color: 'text-primary-400 bg-primary-500/10 border-primary-500/20',
  },
  {
    icon: Layers,
    title: 'Microservices',
    description: 'Scalable backend architecture and APIs',
    color: 'text-accent-400 bg-accent-500/10 border-accent-500/20',
  },
  {
    icon: Palette,
    title: 'Nudges Platform',
    description: 'Designing intuitive nudge UI builders and editors',
    color: 'text-secondary-400 bg-secondary-500/10 border-secondary-500/20',
  },
  {
    icon: Settings,
    title: 'SDK Development',
    description: 'Browser-based SDKs and integration tools',
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Code splitting, lazy loading, optimization',
    color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  },
  {
    icon: Target,
    title: 'Analytics & Insights',
    description: 'Session replay and user behavior tracking',
    color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  },
];

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-dark-900/50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Get to Know{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Me Better
            </span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Building intuitive nudges platforms and engagement tools at Apxor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Image / Visual */}
          <div
            className={`relative ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0'
            }`}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 -m-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-3xl blur-2xl" />

              {/* Main card */}
              <div className="relative bg-gradient-card border border-dark-700/50 rounded-2xl p-8 backdrop-blur-xl">
                {/* Experience badge */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center shadow-glow">
                  <div className="text-center">
                    <span className="block text-white text-2xl font-bold">1+</span>
                    <span className="block text-white/80 text-xs">Years</span>
                  </div>
                </div>

                {/* Image placeholder */}
                <div className="relative w-full aspect-square max-w-md mx-auto rounded-xl overflow-hidden">
                  <img
                    src="https://www.codingdojo.com/blog/wp-content/uploads/react.jpg"
                    alt="Developer workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-dark-800/50 rounded-xl p-4 text-center border border-dark-700/50 hover:border-primary-500/30 transition-colors">
                    <span className="block text-2xl font-bold text-primary-400">3</span>
                    <span className="text-dark-400 text-sm">SDKs Built</span>
                  </div>
                  <div className="bg-dark-800/50 rounded-xl p-4 text-center border border-dark-700/50 hover:border-accent-500/30 transition-colors">
                    <span className="block text-2xl font-bold text-accent-400">10+</span>
                    <span className="text-dark-400 text-sm">Modules</span>
                  </div>
                  <div className="bg-dark-800/50 rounded-xl p-4 text-center border border-dark-700/50 hover:border-secondary-500/30 transition-colors">
                    <span className="block text-2xl font-bold text-secondary-400">6+</span>
                    <span className="text-dark-400 text-sm">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div
            className={`${
              isVisible ? 'animate-fade-in-right' : 'opacity-0'
            } animation-delay-300`}
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Software Developer at Apxor
            </h3>

            <div className="space-y-4 text-dark-300 leading-relaxed mb-8">
              <p>
                I'm a Software Developer working on the{' '}
                <span className="text-primary-400 font-medium">Nudges Platform</span> at Apxor.
                I specialize in building intuitive UI design tools that allow customers to create,
                customize, and deploy nudges without writing code.
              </p>
              <p>
                With expertise in <span className="text-secondary-400 font-medium">React.js</span> and{' '}
                <span className="text-primary-400 font-medium">TypeScript</span>, I build visual editors
                and drag-and-drop interfaces for designing tooltips, walkthroughs, banners, and inline
                nudges. My work enables product teams to craft personalized user experiences visually.
              </p>
              <p>
                I'm passionate about <span className="text-accent-400 font-medium">UI/UX tooling</span>,
                performance optimization, and creating seamless design experiences that bridge the gap
                between product managers and development teams.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start space-x-3 p-3 rounded-xl bg-dark-800/30 border border-dark-700/50 hover:border-dark-600 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color} border`}>
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-dark-400 text-xs">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
