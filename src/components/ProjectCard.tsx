import React from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  featured = false
}) => {
  return (
    <div className={`glass-card card-3d p-6 rounded-xl relative overflow-hidden group ${
      featured ? 'border-accent glow-accent' : ''
    }`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-0 right-0 bg-gradient-tech text-primary-foreground px-3 py-1 rounded-bl-xl text-xs font-japanese font-semibold">
          注目
        </div>
      )}
      
      {/* Project Icon */}
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-accent/20 rounded-lg">
          <Code2 className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold font-japanese text-card-foreground group-hover:text-glow-primary transition-colors">
          {title}
        </h3>
      </div>

      {/* Description */}
      <div className="space-y-2 mb-6">
        {description.map((item, index) => (
          <p key={index} className="text-muted-foreground text-sm leading-relaxed flex items-start">
            <span className="text-accent mr-2 mt-1">•</span>
            {item}
          </p>
        ))}
      </div>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, index) => (
          <span 
            key={tech}
            className="px-3 py-1 bg-card-accent rounded-full text-xs font-code text-accent-light"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex space-x-3">
        {githubUrl && (
          <Button 
            variant="outline" 
            size="sm"
            className="glass-card border-muted hover:border-accent transition-colors"
            onClick={() => window.open(githubUrl, '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        )}
        {liveUrl && (
          <Button 
            size="sm"
            className="btn-ghibli"
            onClick={() => window.open(liveUrl, '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Live
          </Button>
        )}
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-5 transition-opacity rounded-xl pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;