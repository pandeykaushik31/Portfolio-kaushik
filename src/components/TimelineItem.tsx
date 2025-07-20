import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  organization: string;
  location?: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
  grade?: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  organization,
  location,
  period,
  description,
  type,
  grade,
  isLast = false
}) => {
  return (
    <div className="relative flex items-start space-x-6 pb-8">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full border-2 ${
          type === 'education' 
            ? 'bg-accent border-accent glow-accent' 
            : 'bg-secondary border-secondary glow-secondary'
        }`} />
        {!isLast && (
          <div className="w-px h-16 bg-gradient-to-b from-muted to-transparent mt-2" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-3 animate-slideInRight">
        <div className="glass-card card-deep-3d p-6 rounded-xl group hover:scale-105 transition-all duration-700 particle-field perspective-1000">
          {/* Header */}
          <div className="space-y-2 mb-4">
            <h3 className="text-xl font-bold font-inter text-card-foreground group-hover:text-glow-primary transition-colors text-3d">
              {title}
            </h3>
            <p className="text-lg text-accent font-medium">
              {organization}
            </p>
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <CalendarDays className="w-4 h-4" />
                <span className="font-code">{period}</span>
              </div>
              {location && (
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              )}
              {grade && (
                <div className="px-2 py-1 bg-accent/20 text-accent rounded-full text-xs font-code">
                  {grade}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>

          {/* Type Badge */}
          <div className="mt-4 inline-block">
            <span className={`px-3 py-1 rounded-full text-xs font-inter font-semibold ${
              type === 'education'
                ? 'bg-accent/20 text-accent'
                : 'bg-secondary/20 text-secondary'
            }`}>
              {type === 'education' ? 'Education' : 'Experience'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;