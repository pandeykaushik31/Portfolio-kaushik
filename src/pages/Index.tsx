import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Brain, 
  Palette,
  Server,
  GitBranch,
  Award,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from 'lucide-react';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { TechOrbs } from '@/components/TechOrb';
import ProjectCard from '@/components/ProjectCard';
import SkillCard from '@/components/SkillCard';
import TimelineItem from '@/components/TimelineItem';
import { Button } from '@/components/ui/button';
import ghibliBackground from '@/assets/ghibli-background.jpg';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      let currentActive = 'home';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React.js', icon: Code2, level: 'advanced' as const, color: 'primary' as const },
    { name: 'JavaScript', icon: Globe, level: 'advanced' as const, color: 'accent' as const },
    { name: 'TypeScript', icon: Code2, level: 'intermediate' as const, color: 'primary' as const },
    { name: 'Node.js', icon: Server, level: 'intermediate' as const, color: 'accent' as const },
    { name: 'Python', icon: Brain, level: 'intermediate' as const, color: 'secondary' as const },
    { name: 'MongoDB', icon: Database, level: 'intermediate' as const, color: 'accent' as const },
    { name: 'MySQL', icon: Database, level: 'intermediate' as const, color: 'accent' as const },
    { name: 'UI/UX Design', icon: Palette, level: 'advanced' as const, color: 'secondary' as const },
  ];

  const projects = [
    {
      title: 'Smart Election System',
      description: [
        'Built secure election system with facial recognition technology',
        'Implemented OpenCV for 50×50 grayscale image processing',
        'Prevented double voting via Aadhar number and CSV validation',
        'Created terminal-based UI with real-time vote logging',
        'Data persistence using CSV and Pickle (.pkl) formats'
      ],
      technologies: ['Python', 'OpenCV', 'CSV', 'Facial Recognition'],
      featured: true
    },
    {
      title: 'Weather Forecasting Web App',
      description: [
        'Developed responsive weather application using modern web technologies',
        'Integrated real-time weather API for accurate forecasting',
        'Optimized for all screen sizes and devices',
        'Clean, intuitive user interface design'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
      githubUrl: 'https://github.com/kaushikpandey/weather-app',
      liveUrl: 'https://weather-app-demo.netlify.app'
    }
  ];

  const certifications = [
    'Intercollegiate Science Exhibition',
    'Magic Bus-Connect with Work Programme',
    'Scientific Computing with Python (FreeCodeCamp)',
    'Responsive Web Design (FreeCodeCamp)'
  ];

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0 particle-field"
        style={{
          backgroundImage: `url(${ghibliBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-sky opacity-90"></div>
        <div className="tech-grid absolute inset-0 opacity-30"></div>
        <div className="tech-grid-3d absolute inset-0 opacity-20"></div>
      </div>

      {/* Floating Tech Orbs */}
      <TechOrbs />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onContactClick={() => scrollToSection('contact')} />

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInDown">
              <h2 className="text-4xl md:text-5xl font-black font-inter holographic mb-4 text-3d">
                About Me
              </h2>
              <p className="text-xl text-muted-foreground">Get to know me better</p>
            </div>

            <div className="glass-card card-deep-3d p-8 md:p-12 rounded-xl max-w-4xl mx-auto animate-fadeInUp perspective-1500 particle-field">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-card-foreground text-3d">
                  As an innovative and detail-oriented Frontend Developer, I have a passion for building clean, 
                  responsive, and user-friendly web applications using React.js, JavaScript, HTML, and CSS. 
                  I love turning complex UI designs into smooth, scalable experiences that work beautifully across all devices.
                </p>
                <p className="text-muted-foreground">
                  While frontend development is my primary focus, I also have foundational full-stack experience 
                  with Node.js, Python, MongoDB, and MySQL, which enables better collaboration with backend teams 
                  and a deeper understanding of system architecture.
                </p>
                <p className="text-muted-foreground">
                  I believe in writing clean, maintainable code and staying up-to-date with the latest technologies 
                  and best practices in web development. My goal is to create digital experiences that are not only 
                  functional but also delightful to use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInDown">
              <h2 className="text-4xl md:text-5xl font-black font-inter holographic mb-4 text-3d">
                Technical Skills
              </h2>
              <p className="text-xl text-muted-foreground">My expertise and capabilities</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="animate-morphIn transform-3d"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <SkillCard {...skill} />
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="glass-card card-deep-3d p-8 rounded-xl animate-fadeInUp perspective-1000 particle-field">
              <h3 className="text-2xl font-bold font-inter text-center mb-8 holographic text-3d">
                Certifications & Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={cert}
                    className="flex items-center space-x-3 p-4 bg-card-accent rounded-lg animate-slideInRight card-3d"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Award className="w-5 h-5 text-secondary flex-shrink-0 animate-glow-pulse" />
                    <span className="text-card-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInDown">
              <h2 className="text-4xl md:text-5xl font-black font-inter holographic mb-4 text-3d">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">Showcasing my work and achievements</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className="animate-morphIn transform-3d perspective-1000"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInDown">
              <h2 className="text-4xl md:text-5xl font-black font-inter holographic mb-4 text-3d">
                Professional Experience
              </h2>
              <p className="text-xl text-muted-foreground">My career journey and achievements</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <TimelineItem
                title="Web Development Intern"
                organization="Bharat Intern"
                period="July 2024 - August 2024"
                description="Successfully completed the Virtual Internship Program at BHARAT INTERN in Web Development as an active participant. Gained hands-on experience in modern web development practices and technologies."
                type="experience"
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInDown">
              <h2 className="text-4xl md:text-5xl font-black font-inter holographic mb-4 text-3d">
                Educational Background
              </h2>
              <p className="text-xl text-muted-foreground">My academic journey and qualifications</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-0">
              <TimelineItem
                title="Bachelor of Science in Computer Science"
                organization="University of Mumbai"
                location="Mumbai, India"
                period="2022 - 2025"
                description="Pursuing comprehensive education in computer science fundamentals, programming, algorithms, and software development methodologies."
                type="education"
                grade="CGPA: 7.63"
              />
              
              <TimelineItem
                title="Higher Secondary Certificate"
                organization="Green View Public School"
                location="U.P., India"
                period="2020 - 2022"
                description="Completed higher secondary education under CBSE board with focus on science and mathematics."
                type="education"
                grade="CGPA: 6.55"
              />
              
              <TimelineItem
                title="Secondary School Certificate"
                organization="Green View Public School"
                location="U.P., India"
                period="2018 - 2020"
                description="Completed secondary education under CBSE board with strong foundation in core subjects."
                type="education"
                grade="CGPA: 7.52"
                isLast={true}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fadeInDown">
              <h2 className="text-4xl md:text-5xl font-black font-inter holographic mb-4 text-3d">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground">Let's connect and collaborate</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact Info */}
              <div className="space-y-8 animate-fadeInUp">
                <div className="glass-card card-deep-3d p-8 rounded-xl perspective-1000 particle-field">
                  <h3 className="text-2xl font-bold font-inter mb-6 holographic text-3d">
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/20 rounded-lg animate-glow-pulse">
                        <Mail className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a 
                          href="mailto:pandeykaushik900@gmail.com"
                          className="text-card-foreground hover:text-glow-primary transition-colors"
                        >
                          pandeykaushik900@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-secondary/20 rounded-lg animate-glow-pulse">
                        <Phone className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a 
                          href="tel:+919794620135"
                          className="text-card-foreground hover:text-glow-secondary transition-colors"
                        >
                          +91 9794620135
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-glow-accent/20 rounded-lg animate-glow-pulse">
                        <MapPin className="w-5 h-5 text-glow-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="text-card-foreground">
                          Ambernath-west, Thane, Maharashtra, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://www.linkedin.com/in/kaushik-pandey-440828287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card card-deep-3d p-4 rounded-xl hover:text-glow-accent transition-all duration-500 perspective-1000"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/kaushikpandey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card card-deep-3d p-4 rounded-xl hover:text-glow-primary transition-all duration-500 perspective-1000"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              {/* Call to Action */}
              <div className="animate-fadeInUp delay-200">
                <div className="glass-card card-deep-3d p-8 rounded-xl text-center space-y-6 perspective-1000 particle-field">
                  <h3 className="text-2xl font-bold font-inter holographic text-3d">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Have a project in mind? Want to collaborate on something exciting? 
                    Or just want to say hello? I'd love to hear from you!
                  </p>
                  <p className="text-sm text-muted-foreground">
                    I'm always excited to work on new challenges and create innovative solutions 
                    that make a real difference.
                  </p>
                  <Button 
                    className="btn-ghibli btn-morph px-8 py-4 rounded-xl font-inter text-lg transform-3d"
                    onClick={() => window.location.href = 'mailto:pandeykaushik900@gmail.com'}
                  >
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <div className="glass-card card-deep-3d max-w-2xl mx-auto p-6 rounded-xl perspective-1000">
          <p className="text-muted-foreground font-inter">
            © {new Date().getFullYear()} Kaushik Pandey. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
