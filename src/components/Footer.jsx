"use client";

import { Github, Linkedin, Twitter, Mail, ArrowUp, Heart, Code } from 'lucide-react';
import { personalInfo } from '@/data/portfolio.js';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-black"></div>
      
      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-2">
                {personalInfo.name}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Full Stack Developer crafting digital experiences with modern technologies and clean code.
              </p>
            </div>
            
            <div className="flex gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600/20 hover:border-purple-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                aria-label="Visit GitHub profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-600/20 hover:border-sky-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
                aria-label="Visit Twitter profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 bg-zinc-900/50 backdrop-blur-sm border border-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-green-600/20 hover:border-green-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                aria-label="Send email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Navigation</h4>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('#home')}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Navigate to home section"
              >
                <span className="flex items-center gap-2">
                  Home
                  <div className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300" aria-hidden="true"></div>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Navigate to projects section"
              >
                <span className="flex items-center gap-2">
                  Projects
                  <div className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300" aria-hidden="true"></div>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('#about')}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Navigate to about section"
              >
                <span className="flex items-center gap-2">
                  About
                  <div className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300" aria-hidden="true"></div>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('#contacts')}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="Navigate to contacts section"
              >
                <span className="flex items-center gap-2">
                  Contact
                  <div className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300" aria-hidden="true"></div>
                </span>
              </button>
              <a
                href="/resume"
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded px-2 py-1"
                aria-label="View resume"
              >
                <span className="flex items-center gap-2">
                  Resume
                  <div className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300" aria-hidden="true"></div>
                </span>
              </a>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block text-gray-400 hover:text-purple-400 transition-colors duration-300"
              >
                {personalInfo.phone}
              </a>
              <p className="text-gray-500">
                {personalInfo.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>© {new Date().getFullYear()} {personalInfo.name}. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-purple-400" />
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-900/50 backdrop-blur-sm border border-white/10 rounded-xl text-gray-400 hover:text-white hover:border-purple-500/30 transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Scroll to top of page"
            >
              <span className="text-sm">Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;