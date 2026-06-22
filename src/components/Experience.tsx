import { Building2, Calendar, MapPin, Briefcase, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Apxor',
    location: 'Hyderabad, India',
    period: 'Jan 2026 - Present',
    description: 'Working on the Nudges Platform - a visual UI design tool that enables customers to create, customize, and deploy nudges (tooltips, walkthroughs, banners, announcements) without writing code.',
    responsibilities: [
      'Built intuitive visual editors and drag-and-drop interfaces for designing nudge UI components',
      'Developed the Nudge Designer - a WYSIWYG editor for creating tooltips, banners, walkthroughs, and inline nudges',
      'Implemented real-time preview functionality allowing users to see nudges as they design them',
      'Created customization panels for styling, positioning, triggers, and targeting rules',
      'Developed backend services and microservice APIs supporting nudge management and user segmentation',
      'Improved frontend performance through code splitting, lazy loading, and optimized state management',
    ],
    technologies: ['React.js', 'TypeScript', 'Node.js', 'Express.js', 'Microservices', 'REST APIs', 'MongoDB'],
    current: true,
  },
  {
    role: 'Software Development Intern',
    company: 'Apxor',
    location: 'Hyderabad, India',
    period: 'Jul 2025 - Jan 2026',
    description: 'Worked on Apxor\'s Web Engagement SDK and user behavior tracking platform.',
    responsibilities: [
      'Developed SDK features powering onboarding flows, walkthroughs, tooltips, banners, and nudges',
      'Built and enhanced event tracking mechanisms for clicks, page views, form interactions, and custom events',
      'Resolved production issues related to browser compatibility, event collection, and SDK integrations',
      'Improved SDK reliability, scalability, and customer adoption through continuous optimization',
    ],
    technologies: ['JavaScript', 'TypeScript', 'Browser APIs', 'Web SDK Development'],
    current: false,
  },
];

const education = [
  {
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    institution: 'JNTUH',
    period: '2020 - 2024',
  },
];

export function Experience() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 bg-dark-900/50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={`text-center mb-16 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-400 text-sm font-medium mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Professional{' '}
            <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Building the Nudges Platform at Apxor
          </p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-display font-bold text-white mb-8 flex items-center">
              <Briefcase className="mr-3 text-primary-400" size={24} />
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-20 pb-12 last:pb-0 ${
                    isVisible ? 'animate-fade-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-4 h-4 rounded-full bg-dark-900 border-2 border-primary-500 shadow-glow">
                    {exp.current && (
                      <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-50" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="relative group">
                    <div className="bg-gradient-card border border-dark-700/50 rounded-xl p-6 backdrop-blur-xl hover:border-primary-500/30 transition-all duration-300">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div>
                          <h4 className="text-lg font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                            {exp.role}
                          </h4>
                          <div className="flex items-center text-dark-400 text-sm mt-1">
                            <Building2 size={14} className="mr-1.5 text-accent-400" />
                            {exp.company}
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-xs text-dark-500">
                        <div className="flex items-center">
                          <Calendar size={12} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={12} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-dark-300 text-sm mb-4">{exp.description}</p>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start text-sm text-dark-400">
                            <ChevronRight size={14} className="mr-2 mt-0.5 text-accent-400 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-dark-800/50 rounded text-xs text-dark-300 border border-dark-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education sidebar */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-display font-bold text-white mb-8">
              Education
            </h3>

            <div
              className={`${
                isVisible ? 'animate-fade-in-right' : 'opacity-0'
              } animation-delay-300`}
            >
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gradient-card border border-dark-700/50 rounded-xl p-6 backdrop-blur-xl hover:border-accent-500/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center mb-4">
                    <span className="text-accent-400 text-xl font-display font-bold">
                      {edu.degree.charAt(0)}
                    </span>
                  </div>

                  <h4 className="text-lg font-display font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-accent-400 text-sm mb-3">{edu.field}</p>

                  <div className="flex items-center text-dark-400 text-sm">
                    <Calendar size={12} className="mr-2" />
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements card */}
            <div
              className={`mt-6 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-primary-500/20 rounded-xl p-6 ${
                isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'
              }`}
            >
              <h4 className="font-semibold text-white mb-3">Key Achievements</h4>
              <ul className="space-y-2 text-sm text-dark-400">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2 mt-1.5" />
                  Nudge Designer UI Builder
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-400 mr-2 mt-1.5" />
                  Web SDK Development & Optimization
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mr-2 mt-1.5" />
                  Session Replay & Analytics Systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
