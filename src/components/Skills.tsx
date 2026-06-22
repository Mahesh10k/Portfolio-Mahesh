import { useState, useEffect } from 'react';
import {
  Code,
  Database,
  Server,
  Cloud,
  GitBranch,
  Layout,
  Braces,
  FileCode,
  Globe,
  Shield,
  Layers,
  Settings,
  Activity,
  Wrench,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ size: number; className?: string }>;
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
  skills: Skill[];
  color: string;
  borderColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Layout,
    color: 'text-primary-400',
    borderColor: 'border-primary-500/30',
    skills: [
      { name: 'React.js', level: 92, icon: Code },
      { name: 'TypeScript', level: 88, icon: Braces },
      { name: 'JavaScript (ES6+)', level: 90, icon: FileCode },
      { name: 'Responsive Design', level: 90, icon: Layout },
      { name: 'Performance Optimization', level: 85, icon: Activity },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: Server,
    color: 'text-accent-400',
    borderColor: 'border-accent-500/30',
    skills: [
      { name: 'Node.js', level: 88, icon: Server },
      { name: 'Express.js', level: 85, icon: Server },
      { name: 'REST APIs', level: 90, icon: Globe },
      { name: 'Microservices', level: 80, icon: Layers },
      { name: 'JWT Authentication', level: 85, icon: Shield },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-secondary-400',
    borderColor: 'border-secondary-500/30',
    skills: [
      { name: 'MongoDB', level: 88, icon: Database },
      { name: 'MySQL', level: 78, icon: Database },
    ],
  },
  {
    title: 'SDK & Tools',
    icon: Settings,
    color: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    skills: [
      { name: 'Web SDK Development', level: 85, icon: Settings },
      { name: 'Browser APIs', level: 82, icon: Globe },
      { name: 'Git & GitHub', level: 90, icon: GitBranch },
      { name: 'Postman', level: 88, icon: Wrench },
    ],
  },
];

function SkillBar({ skill, isVisible }: { skill: Skill; isVisible: boolean }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setWidth(skill.level), 100);
      return () => clearTimeout(timer);
    } else {
      setWidth(0);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <skill.icon size={14} className="text-dark-400 group-hover:text-primary-400 transition-colors" />
          <span className="text-sm font-medium text-dark-300 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-mono text-dark-500">{skill.level}%</span>
      </div>
      <div className="relative h-2 bg-dark-700 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.05),transparent_70%)]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-500/10 border border-accent-500/20 text-accent-400 text-sm font-medium mb-4">
            Technical Skills
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              Skill Set
            </span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build scalable web applications and SDKs
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`relative group ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${(categoryIndex + 1) * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-card border border-dark-700/50 rounded-2xl p-6 backdrop-blur-xl hover:border-primary-500/30 transition-all duration-500">
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/0 via-primary-500/5 to-secondary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl ${category.color} bg-dark-800/50 border ${category.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={20} className={category.color} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-5 relative">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      style={{ animationDelay: `${200 + skillIndex * 100}ms` }}
                    >
                      <SkillBar skill={skill} isVisible={isVisible} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology badges */}
        <div className={`mt-12 ${isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          <div className="flex flex-wrap justify-center gap-3">
            {['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js', 'Microservices', 'REST API', 'JWT', 'Web SDKs', 'Browser APIs', 'Git', 'Analytics'].map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-800/50 border border-dark-700/50 rounded-lg text-dark-300 text-sm font-medium hover:border-primary-500/30 hover:text-primary-400 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${600 + index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
