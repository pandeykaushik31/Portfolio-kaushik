import React from 'react';
import { Home, User, Code2, Briefcase, GraduationCap, Mail, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Sparkles },
    { id: 'projects', label: 'Projects', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-inter font-bold text-2xl holographic">
          Kaushik Pandey
        </div>
        
        <ul className="hidden md:flex space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionClick(item.id)}
                  className={`group flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-500 ease-bounce transform-3d ${
                    activeSection === item.id
                      ? 'glass-card glow-primary text-foreground card-3d'
                      : 'text-muted-foreground hover:text-foreground hover:glass-card hover:card-3d'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-inter">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        
        {/* Mobile Menu */}
        <div className="md:hidden flex flex-wrap justify-center space-x-1 max-w-md">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSectionClick(item.id)}
                className={`p-2 rounded-lg transition-all duration-500 transform-3d card-3d ${
                  activeSection === item.id
                    ? 'glass-card glow-primary text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:glass-card'
                }`}
                title={item.label}
              >
                <Icon className="w-4 h-4" />
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;