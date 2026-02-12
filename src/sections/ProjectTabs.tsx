
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import type { Project } from '../data/projectsData';
import { ProjectCard, ProjectDetailModal } from '../components/ProjectCard';
import { 
  Train, 
  Zap, 
  Droplets, 
  CloudRain, 
  Factory,
  Search,
  Filter
} from 'lucide-react';

const icons: Record<string, any> = {
  Train,
  Zap,
  Droplets,
  CloudRain,
  Factory
};

export default function ProjectTabs() {
  const [activeTab, setActiveTab] = useState('transport');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projectsData.projects.filter(p => p.category === activeTab);

  return (
    <section className="py-24 bg-[#0d1623] relative">
      <div className="alex-container">
        {/* Navigation / Filter Header */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 font-['Montserrat'] tracking-tight">
              Investments by <span className="text-[#3898ec]">Sector</span>
            </h2>
            <p className="text-white/40 text-lg">
              Alexandria's development is prioritized across five strategic domains, 
              each contributing to a resilient and sustainable urban future.
            </p>
          </div>
          
          <div className="flex items-center gap-4 p-2 bg-white/5 rounded-2xl border border-white/10">
            <div className="p-2 text-white/40">
              <Filter className="w-5 h-5" />
            </div>
            <div className="flex gap-1 overflow-x-auto no-scrollbar">
              {projectsData.categories.map((cat) => {
                const Icon = icons[cat.icon];
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTab(cat.id)}
                    className={`flex items-center gap-3 px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap group ${
                      activeTab === cat.id 
                        ? 'bg-[#0068c8] text-white shadow-lg shadow-[#0068c8]/30' 
                        : 'text-white/50 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${activeTab === cat.id ? 'text-white' : 'group-hover:text-[#3898ec] transition-colors'}`} />
                    <span className="text-sm font-bold uppercase tracking-widest">{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={() => {
                  setSelectedProject(project);
                  setIsModalOpen(true);
                }} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State (if needed) */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center bg-white/5 rounded-[3rem] border border-dashed border-white/10"
          >
            <Search className="w-12 h-12 text-white/10 mx-auto mb-4" />
            <p className="text-white/40 font-medium">No projects in this category yet.</p>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
