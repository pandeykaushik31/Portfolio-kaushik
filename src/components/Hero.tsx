import React from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/kaushikpandey', 
      label: 'GitHub',
      className: 'hover:text-glow-primary' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/kaushik-pandey-440828287', 
      label: 'LinkedIn',
      className: 'hover:text-glow-accent' 
    },
    { 
      icon: Mail, 
      href: 'mailto:pandeykaushik900@gmail.com', 
      label: 'Email',
      className: 'hover:text-glow-secondary' 
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Main Hero Content */}
        <div className="space-y-6 animate-fadeInDown">
          <div className="font-inter text-lg text-secondary opacity-90 animate-levitate">
            Hello, I am
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black holographic leading-tight text-3d">
            Kaushik Pandey
          </h1>
          
          <div className="text-xl md:text-2xl text-accent-light font-code animate-glow-pulse">
            <span className="text-glow-primary">{'<'}</span>
            Frontend Developer
            <span className="text-glow-primary">{' />'}</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="animate-fadeInUp delay-200 space-y-4">
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-inter">
            Passionate developer crafting beautiful and responsive web applications.
          </p>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into elegant, scalable digital experiences with React, JavaScript, and modern technologies.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="animate-fadeInUp delay-300">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['React', 'TypeScript', 'Node.js', 'Python', 'MongoDB'].map((tech, index) => (
              <span 
                key={tech}
                className="glass-card px-4 py-2 rounded-full text-sm font-code animate-morphIn card-deep-3d glow-pulse"
                style={{ animationDelay: `${0.1 * index + 0.5}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="animate-fadeInUp delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onContactClick}
            className="btn-ghibli btn-morph px-8 py-4 rounded-xl font-inter text-lg group transform-3d"
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline"
            className="glass-card card-deep-3d px-8 py-4 rounded-xl font-inter text-lg border-accent hover:border-accent-light"
          >
            <Download className="mr-2 w-5 h-5" />
            Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="animate-fadeInUp delay-500 flex justify-center space-x-6 pt-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card card-deep-3d p-3 rounded-xl transition-all duration-500 ${social.className} animate-morphIn perspective-1000`}
                style={{ animationDelay: `${0.1 * index + 0.7}s` }}
                aria-label={social.label}
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Floating Decoration */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-fadeInUp delay-600">
        <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent"></div>
        <div className="w-2 h-2 bg-accent rounded-full mx-auto mt-2 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;