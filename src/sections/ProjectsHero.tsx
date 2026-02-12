
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { TrendingUp, Award, Zap } from 'lucide-react';

export default function ProjectsHero() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0d1623]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[#0068c8]/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#3898ec]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
      </div>

      <div className="alex-container relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#3898ec]/10 border border-[#3898ec]/20 rounded-full text-[#3898ec] text-xs font-black uppercase tracking-[0.2em] mb-8">
              <Award className="w-4 h-4" />
              Strategic Development 2016 - 2026
            </span>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 font-['Montserrat'] leading-[1.1] tracking-tighter">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068c8] via-[#3898ec] to-[#0068c8] bg-[length:200%_auto] animate-gradient">
                <TypeAnimation
                  sequence={[
                    'Future',
                    2000,
                    'Legacy',
                    2000,
                    'Vision 2030',
                    2000,
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                />
              </span>
            </h1>

            <p className="text-white/60 text-xl md:text-2xl leading-relaxed font-light mb-12 max-w-2xl">
              Alexandria is undergoing a historic transformation. Explore the multi-billion euro investment portfolio 
              shaping Egypt's northern gateway into a sustainable global hub.
            </p>

            <div className="flex flex-wrap gap-12">
              {[
                { label: 'Total Investment', value: '€2.65B+', icon: TrendingUp },
                { label: 'Strategic Pillars', value: 'Vision 2030', icon: Award },
                { label: 'Net Zero Target', value: 'Green Transit', icon: Zap },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-[#3898ec]">
                    <stat.icon className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{stat.label}</span>
                  </div>
                  <span className="text-3xl font-bold text-white font-['Montserrat']">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Bottom - Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Scroll to Explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#3898ec] to-transparent" />
      </motion.div>
    </section>
  );
}
