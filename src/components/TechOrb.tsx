import React from 'react';
import { Code, Cpu, Globe, Zap } from 'lucide-react';

const TechOrb = ({ icon: Icon, delay = 0, className = "" }) => {
  return (
    <div 
      className={`absolute animate-fadeInUp float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="glass-card card-3d p-4 rounded-full glow-primary">
        <Icon className="w-6 h-6 text-glow-primary" />
      </div>
    </div>
  );
};

export const TechOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <TechOrb 
        icon={Code} 
        delay={0.5} 
        className="top-20 left-10 md:left-20" 
      />
      <TechOrb 
        icon={Cpu} 
        delay={1.2} 
        className="top-40 right-16 md:right-32" 
      />
      <TechOrb 
        icon={Globe} 
        delay={0.8} 
        className="bottom-40 left-16 md:left-40" 
      />
      <TechOrb 
        icon={Zap} 
        delay={1.5} 
        className="bottom-20 right-10 md:right-24" 
      />
    </div>
  );
};

export default TechOrb;