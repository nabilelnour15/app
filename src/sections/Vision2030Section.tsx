
import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import { ShieldCheck, Target, Zap, TrendingUp } from 'lucide-react';

const icons: Record<number, any> = {
  0: Zap,
  1: ShieldCheck,
  2: TrendingUp,
  3: Target
};

export default function Vision2030Section() {
  const { vision2030Achievement } = projectsData;

  return (
    <section className="py-32 bg-[#0d1623] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[30rem] bg-[#3898ec]/5 rounded-full blur-[120px] -rotate-12 pointer-events-none" />

      <div className="alex-container relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-[#3898ec] font-black text-xs uppercase tracking-[0.4em] mb-4 block">Future Framework</span>
            <h2 className="text-5xl md:text-6xl font-black text-white font-['Montserrat'] tracking-tight mb-8">
              {vision2030Achievement.title}
            </h2>
            <p className="text-white/40 text-xl max-w-3xl mx-auto leading-relaxed">
              Every project in our portfolio is a calculated step towards Egypt's 2030 
              Sustainable Development Goals, ensuring a legacy of prosperity for generations.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {vision2030Achievement.highlights.map((item, idx) => {
            const Icon = icons[idx] || Target;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-16 h-16 bg-[#3898ec]/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-[#3898ec]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-['Montserrat']">{item.title}</h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision Progress Bar / Stat */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-gradient-to-r from-[#0068c8] to-[#3898ec] rounded-[4rem] relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '30px 30px' }} />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="max-w-xl">
              <h4 className="text-3xl font-black text-white font-['Montserrat'] mb-4">A Global Showcase for Climate Finance</h4>
              <p className="text-white/80 text-lg">
                Alexandria’s admission to the EBRD Green Cities Framework in 2025 marks a pivotal moment in our sustainability journey.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="text-6xl font-black text-white font-['Montserrat'] leading-none tracking-tighter">100%</div>
              <div className="text-white/60 text-xs font-black uppercase tracking-widest">Green Transit Eligibility</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
