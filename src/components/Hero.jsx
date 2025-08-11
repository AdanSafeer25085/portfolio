"use client";

import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolio.js';
import { memo } from 'react';
import Link from 'next/link';

const Hero = memo(() => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-black relative overflow-hidden pt-16">
      {/* Simple gradient background - no animations */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          {/* Badge */}
          <div className="mb-8 opacity-100">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300">
              Available for new projects
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold">
              <span className="text-white">Hi, I'm </span>
              <span className="text-gradient inline-block">{personalInfo.name}</span>
            </h1>
            
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-light">
                {personalInfo.title}
              </h2>
              <p className="mt-6 text-lg lg:text-xl text-gray-500 leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <button
              onClick={scrollToProjects}
              className="btn-primary flex items-center gap-2 justify-center group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Explore my work projects"
            >
              Explore My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
            </button>
            <Link
              href="/resume"
              className="btn-secondary flex items-center gap-2 justify-center group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="View resume"
              prefetch={true}
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
              View Resume
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-12">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Visit GitHub profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Visit LinkedIn profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Send email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-gray-400 transition-colors group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded p-2"
            aria-label="Scroll to projects section"
          >
            <span className="text-xs uppercase tracking-wider">Scroll</span>
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;