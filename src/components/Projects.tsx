import { ExternalLink, Github, Palette, Wand2, Activity, Headphones, CheckSquare, Box } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  icon: React.ComponentType<{ size: number; className?: string }>;
  color: string;
  gradient: string;
  category: 'professional' | 'personal';
}

const projects: Project[] = [
  {
    title: 'Analytics and Nudges Platform',
    description: 'A Platform that enables product teams to create, customize, and deploy nudges (tooltips, banners, walkthroughs, announcements) without writing code.',
    image: 'https://cdn.prod.website-files.com/5f7ae188ef1b6b55e708dbdb/6513cf0943684ca9943576c2_kthm%20kthm%201%20(1).webp',
    technologies: ['React.js', 'TypeScript', 'Go', 'REST APIs', 'Microservices'],
    icon: Palette,
    color: 'text-primary-400',
    gradient: 'from-primary-500/20 to-secondary-500/20',
    category: 'professional',
    features: [
      'Visual Nudge Designer',
      'Drag-and-Drop Builder',
      'Real-Time Preview',
      'Style & Position Controls',
      'Trigger Configuration',
    ],
  },
  {
    title: 'Web Engagement SDK',
    description: 'A browser-based SDK used by customers to display nudges and collect user interaction data. Optimized for performance and cross-browser compatibility.',
    image: 'https://cdn.prod.website-files.com/5f7ae188ef1b6bacc308dbdf/64b4e9cbf4ca73c82649edd9_Group%20988271.png',
    technologies: ['JavaScript', 'TypeScript', 'Browser APIs', 'Web SDK'],
    icon: Wand2,
    color: 'text-accent-400',
    gradient: 'from-accent-500/20 to-primary-500/20',
    category: 'professional',
    features: [
      'Tooltips & Walkthroughs',
      'Nudges & Banners',
      'User Event Tracking',
      'Campaign Rendering Engine',
      'Browser Compatibility Layer',
    ],
  },
  {
    title: 'Session Replay & Analytics SDK',
    description: 'Built a session replay SDK to help customers understand user journeys and investigate issues through session recording and behavior analytics.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dWoaytS94dgCJNHlcvsGTRPOuafYLDVZqShtjyeRsQ&s',
    technologies: ['rrweb', 'JavaScript', 'TypeScript'],
    icon: Activity,
    color: 'text-secondary-400',
    gradient: 'from-secondary-500/20 to-accent-500/20',
    category: 'professional',
    features: [
      'Session Recording & Playback',
      'Click & Form Interaction Tracking',
      'Page Navigation Tracking',
      'Custom Event Tracking',
      'Performance Monitoring',
    ],
  },
  {
    title: 'Podcast Streaming Platform',
    description: 'MERN-based podcast platform supporting uploads, streaming, favorites, and content management with JWT authentication and role-based access control.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd5VC0D4VFACx4SnpVxpoVHcdk9rVQUaiMJN44SrU7XDNrvfKrfeQ8z3ah&s=10',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary'],
    liveUrl: 'https://podlisten-podcasts.vercel.app/',
    githubUrl: 'https://github.com/Mahesh10k/Podlisten-Frontend',
    icon: Headphones,
    color: 'text-primary-400',
    gradient: 'from-primary-500/20 to-secondary-500/20',
    category: 'personal',
    features: [
      'Podcast Upload & Streaming',
      'JWT Authentication & RBAC',
      '10+ REST APIs',
      'Cloudinary Integration',
      'Deployed on Railway & Vercel',
    ],
  },
  {
    title: 'Personal Task Dashboard',
    description: 'Full-stack productivity application with task management, authentication, and responsive UI for tracking daily activities.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jQJKLYWwhpl2EApoC2GxtYMVaMTNhsD3kjSaw3l6kw&s=10',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Mahesh10k/TaskFlow',
    icon: CheckSquare,
    color: 'text-accent-400',
    gradient: 'from-accent-500/20 to-primary-500/20',
    category: 'personal',
    features: [
      'Full CRUD Operations',
      'Task Filtering & Tracking',
      'User Authentication',
      'Responsive Design',
    ],
  },
  {
    title: "Frontend Ecommerce Website",
    description: 'A high-performance online store with REST API integrations, persistent cart functionality, and optimized product discovery across 500+ items..',
    image: 'https://miro.medium.com/1*VNoETQG1aBwujmj9qMBbLQ.png',
    technologies: ['JavaScript', 'bootstrap'],
    liveUrl: 'https://mahesh10k.github.io/TechShop-ECommerce-Project/',
    githubUrl: 'https://github.com/Mahesh10k/TechShop-ECommerce-Project',
    icon: Box,
    color: 'text-secondary-400',
    gradient: 'from-secondary-500/20 to-accent-500/20',
    category: 'personal',
    features: [
      'Interactive 3D Visualization',
      'Beginner Method Algorithm',
      'Step-by-Step Solution',
      'Move Generation',
    ],
  },
];

export function Projects() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  const professionalProjects = projects.filter(p => p.category === 'professional');
  const personalProjects = projects.filter(p => p.category === 'personal');

  return (
    <section
      id="projects"
      className="relative py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.05),transparent_50%)]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            Professional projects at Apxor and personal development work
          </p>
        </div>

        {/* Professional Projects */}
        <div className="mb-16">
          <h3 className={`text-xl font-display font-bold text-white mb-8 flex items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <span className="w-2 h-2 rounded-full bg-primary-500 mr-3" />
            Professional Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className={`text-xl font-display font-bold text-white mb-8 flex items-center ${isVisible ? 'animate-fade-in-up animation-delay-400' : 'opacity-0'}`}>
            <span className="w-2 h-2 rounded-full bg-accent-500 mr-3" />
            Personal Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index + 3} isVisible={isVisible} />
            ))}
          </div>
        </div>

        {/* View all projects */}
        <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          <a
            href="https://github.com/Mahesh10k"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-xl border border-dark-600 text-dark-300 font-medium hover:border-primary-500/50 hover:text-primary-400 hover:bg-primary-500/10 transition-all duration-300"
          >
            <Github size={18} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, isVisible }: { project: Project; index: number; isVisible: boolean }) {
  return (
    <div
      className={`group relative ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0'
      }`}
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      <div className="relative h-full flex flex-col bg-gradient-card border border-dark-700/50 rounded-2xl overflow-hidden backdrop-blur-xl hover:border-primary-500/30 transition-all duration-500">
        {/* Image */}
        <div className="relative h-40 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

          {/* Icon overlay */}
          <div className="absolute top-4 left-4">
            <div className={`w-10 h-10 rounded-xl bg-dark-900/80 backdrop-blur border border-dark-700 flex items-center justify-center ${project.color}`}>
              <project.icon size={20} />
            </div>
          </div>

          {/* Links overlay */}
          <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-900/80 backdrop-blur border border-dark-700 flex items-center justify-center text-dark-300 hover:text-white hover:border-dark-500 transition-all"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center text-white hover:bg-primary-400 transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col p-5">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-lg font-display font-bold text-white group-hover:text-primary-400 transition-colors">
              {project.title}
            </h4>
            <div className={`w-2 h-2 rounded-full ${project.color.replace('text-', 'bg-')} animate-pulse`} />
          </div>

          <p className="text-dark-400 text-sm mb-3 flex-grow line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-dark-800/50 border border-dark-700/50 text-xs text-dark-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Features */}
          <div className="pt-3 border-t border-dark-700/50">
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, i) => (
                <li key={i} className="text-xs text-dark-400 flex items-center">
                  <span className={`w-1 h-1 rounded-full ${project.color.replace('text-', 'bg-')} mr-2`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
