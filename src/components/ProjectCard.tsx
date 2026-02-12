
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Target, 
  TrendingUp, 
  Users, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import type { Project } from '../data/projectsData';

const PlaceholderImage = ({ text = "Image Placeholder", className = "" }: { text?: string, className?: string }) => (
  <div className={`w-full bg-[#1a2b41] rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 overflow-hidden relative ${className}`}>
    <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
    </div>
    <span className="text-white/20 text-[10px] font-black uppercase tracking-[0.2em]">{text}</span>
  </div>
);

export function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -10 }}
      onClick={onClick}
      className="bg-[#1a2b41]/40 rounded-[2rem] border border-white/10 overflow-hidden cursor-pointer group hover:border-[#3898ec]/50 transition-all duration-500"
    >
      <div className="relative h-64 overflow-hidden">
        <PlaceholderImage text={project.imagePlaceholder} className="h-full rounded-none border-none group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute top-6 left-6 flex gap-2">
          <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-[#3898ec] text-[10px] font-black uppercase tracking-widest border border-white/10">
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#3898ec] transition-colors font-['Montserrat'] leading-tight">
            {project.title}
          </h3>
          <span className="p-2 bg-white/5 rounded-lg text-white/40 group-hover:text-[#3898ec] transition-colors">
            <ChevronRight className="w-5 h-5" />
          </span>
        </div>
        
        <p className="text-white/50 text-sm line-clamp-3 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Budget</span>
            <span className="text-white font-bold">{project.budget}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] font-black text-white/20 uppercase tracking-widest">Timeline</span>
            <span className="text-white font-bold">{project.year}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectDetailModal({ project, isOpen, onClose }: { project: Project | null, isOpen: boolean, onClose: () => void }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0d1623]/90 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-6xl max-h-[90vh] bg-[#1a2b41] rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Column: Image & Abstract */}
            <div className="md:w-2/5 relative h-64 md:h-auto border-b md:border-b-0 md:border-r border-white/10 overflow-y-auto custom-scrollbar">
              <PlaceholderImage text={project.imagePlaceholder} className="h-full rounded-none border-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b41] via-transparent to-transparent flex flex-col justify-end p-8">
                <span className="text-[#3898ec] font-black text-xs uppercase tracking-[0.2em] mb-2">{project.category} / {project.status}</span>
                <h2 className="text-3xl font-black text-white font-['Montserrat'] leading-tight mb-4">{project.title}</h2>
              </div>
            </div>

            {/* Right Column: Full Details */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar space-y-12">
              {/* Vision 2030 Pillars */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#3898ec]/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#3898ec]" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Montserrat']">Vision 2030 Alignment</h4>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.vision2030Pillars.map((p, i) => (
                    <span key={i} className="px-6 py-2 bg-white/5 rounded-full border border-white/10 text-white/80 text-sm font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#0068c8]/20 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-[#0068c8]" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-['Montserrat']">Technical Specs</h4>
                  </div>
                  <div className="space-y-4">
                    {Object.entries(project.technicalSpecs).map(([key, val], i) => (
                      <div key={i} className="flex flex-col gap-1 border-b border-white/5 pb-3">
                        <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{key}</span>
                        <span className="text-white font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Financial Framework */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-[#3898ec]/20 rounded-xl flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-[#3898ec]" />
                    </div>
                    <h4 className="text-xl font-bold text-white font-['Montserrat']">Financial Framework</h4>
                  </div>
                  <div className="space-y-3">
                    {project.financialFramework.map((f, i) => (
                      <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/5 flex justify-between items-center group">
                        <div className="flex flex-col">
                          <span className="text-white font-bold">{f.source}</span>
                          <span className="text-white/40 text-xs">{f.instrument}</span>
                        </div>
                        <span className="text-[#3898ec] font-black">{f.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Stakeholders */}
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-white/60" />
                  </div>
                  <h4 className="text-xl font-bold text-white font-['Montserrat']">Stakeholders</h4>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.stakeholders.map((s, i) => (
                    <div key={i} className="p-5 bg-white/5 rounded-2xl border border-white/5">
                      <span className="block text-[10px] font-black text-[#3898ec] uppercase tracking-widest mb-1">{s.level}</span>
                      <span className="block text-white font-bold mb-1">{s.entity}</span>
                      <span className="block text-white/40 text-xs italic">{s.role}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Description */}
              <section>
                <h4 className="text-xl font-bold text-white font-['Montserrat'] mb-6">Project Overview</h4>
                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 bg-gradient-to-r from-[#0068c8] to-[#3898ec] text-white font-bold rounded-2xl shadow-lg shadow-[#0068c8]/30 hover:scale-[1.02] transition-transform">
                    Download Technical Brief
                  </button>
                  <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    Official Portal
                  </button>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
