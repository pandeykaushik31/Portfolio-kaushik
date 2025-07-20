import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  description?: string;
  color?: 'primary' | 'accent' | 'secondary';
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  name, 
  icon: Icon, 
  level, 
  description,
  color = 'primary' 
}) => {
  const levelPercentage = {
    beginner: 25,
    intermediate: 50,
    advanced: 75,
    expert: 90
  };

  const colorClasses = {
    primary: 'text-glow-primary border-primary/30 hover:border-primary',
    accent: 'text-glow-accent border-accent/30 hover:border-accent',
    secondary: 'text-glow-secondary border-secondary/30 hover:border-secondary'
  };

  return (
    <div className={`glass-card card-deep-3d p-6 rounded-xl group cursor-pointer border-2 transition-all duration-700 hover:scale-110 transform-3d perspective-1000 ${colorClasses[color]}`}>
      <div className="text-center space-y-4 particle-field">
        {/* Icon */}
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-xl bg-card-accent/50 group-hover:bg-card-accent transition-all duration-500 animate-levitate">
          <Icon className={`w-8 h-8 ${colorClasses[color].split(' ')[0]} group-hover:scale-110 transition-transform`} />
        </div>

        {/* Skill Name */}
        <h3 className="text-lg font-bold font-inter text-card-foreground text-3d">
          {name}
        </h3>

        {/* Description */}
        {description && (
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
        )}

        {/* Skill Level */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-code text-muted-foreground capitalize">
              {level}
            </span>
            <span className="text-xs font-code text-muted-foreground">
              {levelPercentage[level]}%
            </span>
          </div>
          
          <div className="w-full bg-card-accent rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full bg-gradient-tech transition-all duration-1500 ease-out glow-pulse`}
              style={{ 
                width: `${levelPercentage[level]}%`,
                transitionDelay: '0.8s'
              }}
            />
          </div>
        </div>

        {/* Level Badge */}
        <div className="text-xs font-inter px-3 py-1 bg-accent/20 text-accent rounded-full inline-block">
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;