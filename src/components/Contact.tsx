import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:maheshpikki03@gmail.com',
    icon: Mail,
    value: 'maheshpikki03@gmail.com',
    color: 'hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/mahesh-pikki',
    icon: Linkedin,
    value: '/in/mahesh-pikki',
    color: 'hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Mahesh10k',
    icon: Github,
    value: '@Mahesh10k',
    color: 'hover:bg-dark-600 hover:text-white hover:border-dark-500',
  },
];

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.05),transparent_50%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Let's{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto text-lg">
            I'm currently available for new opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Get in Touch
            </h3>
            <p className="text-dark-400 mb-8 leading-relaxed">
              Whether you have an exciting project, job opportunity, or just want to
              say hello, I'd love to hear from you. Let's build something amazing together!
            </p>

            {/* Contact links */}
            <div className="space-y-4 mb-8">
              {contactLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center p-4 rounded-xl bg-dark-800/50 border border-dark-700/50 text-dark-300 transition-all duration-300 ${link.color}`}
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-dark-700/50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-dark-500 mb-1">{link.name}</div>
                    <div className="font-medium">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center text-dark-400">
              <MapPin size={18} className="mr-2 text-primary-400" />
              <span>India</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'} animation-delay-300`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-gradient-card border border-dark-700/50 rounded-2xl p-6 md:p-8 backdrop-blur-xl">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mt-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all duration-300"
                    placeholder="Job Opportunity / Project / Just Saying Hi"
                  />
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700 text-white placeholder-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit button */}
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-dark-700 text-dark-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-accent-500 text-white'
                        : 'bg-gradient-to-r from-primary-500 to-secondary-600 text-white hover:shadow-glow hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-dark-500 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle size={18} className="mr-2" />
                        Message Sent!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <AlertCircle size={18} className="mr-2" />
                        Error! Try Again
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                {/* Status message */}
                {submitStatus === 'success' && (
                  <p className="text-accent-400 text-sm text-center mt-4 animate-fade-in">
                    Thank you for reaching out! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-sm text-center mt-4 animate-fade-in">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
