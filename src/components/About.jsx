"use client";

import { Code, Database, Globe, Server, Award, Users, Coffee, Target } from 'lucide-react';
import { skills, experiences } from '@/data/portfolio.js';
import { useState } from 'react';

const About = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skillCategories = {
    frontend: { icon: Globe, title: 'Frontend', color: 'from-blue-500 to-cyan-500' },
    backend: { icon: Server, title: 'Backend', color: 'from-purple-500 to-pink-500' },
    database: { icon: Database, title: 'Database', color: 'from-green-500 to-emerald-500' },
    tools: { icon: Code, title: 'Tools', color: 'from-orange-500 to-red-500' }
  };

  const getSkillsByCategory = (category) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="about" className="section-padding bg-black relative" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-sm text-purple-300 mb-6">
            <Award className="w-4 h-4" />
            About Me
          </div>
          <h2 id="about-heading" className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Crafting digital experiences with modern technologies
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(skillCategories).map(([category, { icon: Icon, title, color }]) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${color} text-white shadow-lg scale-105`
                    : 'bg-zinc-900/50 text-gray-400 hover:bg-zinc-900 border border-white/5'
                }`}
                aria-pressed={activeCategory === category}
                aria-label={`Show ${title} skills`}
              >
                <Icon className="w-4 h-4" />
                {title}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" role="region" aria-labelledby={`${activeCategory}-skills-heading`} aria-live="polite">
            {getSkillsByCategory(activeCategory).map((skill) => (
              <div
                key={skill.name}
                className="bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium group-hover:text-gradient transition-all">
                    {skill.name}
                  </span>
                  <span className="text-purple-400 text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-black/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skillCategories[activeCategory].color} transition-all duration-1000 ease-out rounded-full`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default About;