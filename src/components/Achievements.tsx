import { Trophy, Layers, CheckCircle, Palette, Settings } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const achievements = [
  {
    title: 'Nudges Platform',
    description: 'Built a Dashboard enabling users to create, customize, and deploy nudges (tooltips, banners, walkthroughs) without writing code.',
    icon: Palette,
    color: 'text-primary-400',
    bgColor: 'bg-primary-500/10',
    borderColor: 'border-primary-500/20',
  },
  {
    title: 'Web SDK Development',
    description: 'Developed and optimized browser-based SDK powering tooltips, walkthroughs, nudges, and event tracking for customer applications.',
    icon: Settings,
    color: 'text-secondary-400',
    bgColor: 'bg-secondary-500/10',
    borderColor: 'border-secondary-500/20',
  },
  {
    title: 'Microservices Architecture',
    description: 'Contributed to backend microservice APIs supporting nudge management, audience targeting, and campaign scheduling.',
    icon: Layers,
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
  },
];

const stats = [
  { label: 'SDKs Built', value: '2', suffix: '' },
  { label: 'Nudge Types', value: '6', suffix: '+' },
  { label: 'Features Shipped', value: '20', suffix: '+' },
  { label: 'Production Issues Resolved', value: '15', suffix: '+' },
];

export function Achievements() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="achievements"
      className="relative py-24 md:py-32 bg-dark-900/50"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Key{' '}
            <span className="bg-gradient-to-r from-accent-400 to-secondary-400 bg-clip-text text-transparent">
              Accomplishments
            </span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Professional contributions and milestones at Apxor
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-gradient-card border border-dark-700/50 rounded-2xl backdrop-blur-xl hover:border-primary-500/30 transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl font-display font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-dark-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className={`relative p-6 rounded-2xl ${achievement.bgColor} border ${achievement.borderColor} backdrop-blur-xl hover:scale-[1.02] transition-all duration-300`}>
                {/* Animated icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <achievement.icon size={80} className={achievement.color} />
                </div>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${achievement.bgColor} border ${achievement.borderColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon size={22} className={achievement.color} />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {achievement.title}
                  </h3>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  <div className="mt-4 flex items-center">
                    <CheckCircle size={16} className={`${achievement.color} mr-2`} />
                    <span className="text-xs text-dark-500 uppercase tracking-wider">Delivered</span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional accomplishments */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
          <div className="bg-gradient-card border border-dark-700/50 rounded-2xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-display font-bold text-white mb-6 text-center">
              Additional Strengths
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Visual UI Builders',
                'Drag-and-Drop Editors',
                'Real-Time Preview Systems',
                'Nudge Customization Panels',
                'Campaign Targeting Rules',
                'Event Tracking Systems',
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center p-3 rounded-lg bg-dark-800/30 border border-dark-700/30"
                  style={{ animationDelay: `${700 + index * 50}ms` }}
                >
                  <Trophy size={14} className="text-primary-400 mr-3 flex-shrink-0" />
                  <span className="text-dark-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
