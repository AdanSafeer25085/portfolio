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

        {/* Experience & Stats Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2 space-y-6">
            <h3 id="experience-heading" className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-purple-400" aria-hidden="true" />
              Professional Journey
            </h3>
            
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative group">
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}
                
                <div className="flex gap-4">
                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className="flex-1 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-white group-hover:text-gradient transition-all">
                        {exp.position}
                      </h4>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {exp.description.slice(0, 2).map((item, idx) => (
                        <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs rounded-lg border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <h3 id="achievements-heading" className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-400" aria-hidden="true" />
              Achievements
            </h3>
            
            <div className="grid gap-4">
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-2">
                  <Coffee className="w-8 h-8 text-purple-400" />
                  <span className="text-3xl font-bold text-white">3+</span>
                </div>
                <p className="text-gray-400 text-sm">Years of Experience</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/20">
                <div className="flex items-center justify-between mb-2">
                  <Code className="w-8 h-8 text-blue-400" />
                  <span className="text-3xl font-bold text-white">50+</span>
                </div>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/20">
                <div className="flex items-center justify-between mb-2">
                  <Users className="w-8 h-8 text-green-400" />
                  <span className="text-3xl font-bold text-white">100%</span>
                </div>
                <p className="text-gray-400 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;