"use client";

import { ExternalLink, Github, Code2, Folder } from 'lucide-react';
import { projects } from '@/data/portfolio.js';
import { memo } from 'react';

const Projects = memo(() => {
  return (
    <section id="projects" className="section-padding bg-black relative" aria-labelledby="projects-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black"></div>
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full text-sm text-purple-300 mb-6">
            <Folder className="w-4 h-4" />
            Recent Work
          </div>
          <h2 id="projects-heading" className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Showcasing my best work and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Card Background Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-300">
                {/* Project Image/Preview */}
                <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-pink-600/20 overflow-hidden">
                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 className="w-16 h-16 text-white/20" />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-xl text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 text-purple-300 text-xs rounded-lg border border-purple-500/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-white/5 text-gray-500 text-xs rounded-lg border border-white/10">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors group/link focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-500 hover:text-purple-400 transition-colors group/link focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/adan-rajpoot"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            aria-label="View all projects on GitHub"
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" aria-hidden="true" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';

export default Projects;