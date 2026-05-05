import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlayCircle, Github, ExternalLink } from 'lucide-react';

const CATEGORIES = ['All', 'Web Projects', 'AI/ML Projects', 'Micro Projects'];

const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Content AI',
    category: 'Web Projects',
    description: 'Full-stack e-commerce platform with MERN stack. Includes user authentication, payment gateway integration, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'AI Powered Incident Management System(AIMS)',
    category: 'Web development + AI + LLM',
    description: 'Automated Incident management system using LLMs and APis.',
    image: 'https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&q=80',
    tags: ['NodeJS', 'AI', 'LLM', 'React']
  },
  {
    id: 3,
    title: 'Digital Lost & Found Portal',
    category: 'Final Year Project',
    description: 'Simple and effective system for tracking lost and found items, issues, and returns for small items.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    tags: ['React', 'MongoDB', 'NodeJS']
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    category: 'Web Projects',
    description: 'Analytics dashboard pulling data from various social APIs to display follower growth and engagement.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Node.js', 'Tailwind', 'Chart.js']
  },
  {
    id: 5,
    title: 'Plant Disease Detection System',
    category: 'Web development Projects',
    description: 'Mobile-friendly web app that detects plant disease from uploaded leaf images.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef71a3f5e48c?w=800&q=80',
    tags: ['JS', 'Node.js', 'React']
  },
  {
    id: 6,
    title: 'Weather App',
    category: 'Micro Projects',
    description: 'Real-time weather forecasting tool using public APIs with location detection.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80',
    tags: ['HTML/CSS', 'JavaScript']
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Our Projects</h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Explore our portfolio of high-quality, fully documented final year projects.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                  : 'bg-slate-900/40 border border-slate-800 text-slate-400 hover:text-white hover:border-emerald-500/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800/50 group hover:border-emerald-500/30 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                    <a href="#" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-bold transition-colors">
                      <Github className="w-5 h-5" />
                      Source Code
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-bold text-emerald-400 mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-slate-800/50 text-slate-300 px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://wa.me/919326865425" 
                    target="_blank" 
                    rel="noreferrer"
                    className="block w-full text-center text-xs font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/30 hover:border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 px-4 py-3 rounded-lg transition-colors"
                  >
                    Request this project
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
