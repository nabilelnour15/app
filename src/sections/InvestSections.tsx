import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { investData } from '../data/investData';
import { 
  CheckCircle2, 
  MapPin, 
  Factory, 
  Settings, 
  Scale, 
  Building,
  Anchor,
  Droplets,
  Container,
  Zap
} from 'lucide-react';

const categories = [
  { id: 'freezone', label: 'Free Zone', icon: Container },
  { id: 'drivers', label: 'Key Drivers', icon: Zap },
  { id: 'raw', label: 'Raw Materials', icon: Droplets },
  { id: 'ports', label: 'Ports', icon: Anchor },
  { id: 'laws', label: 'Laws & Incentives', icon: Scale },
];

const PlaceholderImage = ({ text = "Image Placeholder" }: { text?: string }) => (
  <div className="w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 group-hover:bg-white/10 transition-colors overflow-hidden relative">
    <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
    </div>
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
      <Building className="w-6 h-6 text-white/20" />
    </div>
    <span className="text-white/20 text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);

export default function InvestSections() {
  const [activeTab, setActiveTab] = useState('freezone');

  const renderContent = () => {
    switch (activeTab) {
      case 'freezone':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4 font-['Montserrat']">
                    {investData.publicFreeZone.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed mb-6">
                    {investData.publicFreeZone.description}
                  </p>
                  <div className="inline-block px-6 py-3 bg-[#0068c8]/20 border border-[#3898ec]/30 rounded-full text-[#3898ec] font-semibold">
                    {investData.publicFreeZone.stats}
                  </div>
                </div>
                <PlaceholderImage text="Free Zone Aerial View" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investData.publicFreeZone.businesses.map((biz, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-white/10 to-transparent rounded-2xl border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#3898ec]/20 rounded-lg flex items-center justify-center">
                    <Factory className="w-5 h-5 text-[#3898ec]" />
                  </div>
                  <span className="text-white font-medium">{biz}</span>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'drivers':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Investment Drivers</h3>
            <div className="grid lg:grid-cols-3 gap-8">
              {investData.investmentDrivers.map((driver, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#3898ec]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <h4 className="text-xl font-bold text-white mb-4">{driver.title}</h4>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">{driver.description}</p>
                  <div className="mb-6">
                    <PlaceholderImage text={`${driver.title} Visual`} />
                  </div>
                  {driver.sectors && (
                    <div className="flex flex-wrap gap-2">
                      {driver.sectors.map(s => (
                        <span key={s} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/40 border border-white/5">{s}</span>
                      ))}
                    </div>
                  )}
                  {driver.types && (
                    <div className="flex flex-wrap gap-2">
                      {driver.types.map(t => (
                        <span key={t} className="px-3 py-1 bg-[#3898ec]/10 rounded-full text-xs text-[#3898ec] border border-[#3898ec]/20">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'raw':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Raw Materials Potential</h3>
            <div className="grid md:grid-cols-1 gap-8">
              {investData.rawMaterials.map((mat, idx) => (
                <div key={idx} className="bg-gradient-to-r from-white/5 to-transparent p-8 rounded-3xl border border-white/10">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div>
                          <h4 className="text-2xl font-bold text-[#3898ec]">{mat.name}</h4>
                          <p className="text-white/40 flex items-center gap-2 mt-1">
                            <MapPin className="w-4 h-4" /> {mat.location}, {mat.region}
                          </p>
                        </div>
                        {mat.reserve && (
                          <div className="px-5 py-2 bg-white/5 rounded-2xl border border-white/10">
                            <span className="text-white/40 text-xs block uppercase">Reserve</span>
                            <span className="text-white font-bold">{mat.reserve}</span>
                          </div>
                        )}
                      </div>
                      {mat.industries && (
                        <div className="grid sm:grid-cols-2 gap-3 mb-6">
                          {mat.industries.map(ind => (
                            <div key={ind} className="flex items-center gap-3 text-white/70 text-sm">
                              <Settings className="w-4 h-4 text-[#3898ec]/50" />
                              {ind}
                            </div>
                          ))}
                        </div>
                      )}
                      {mat.description && <p className="text-white/70 mb-4">{mat.description}</p>}
                      {mat.uses && (
                        <div className="mt-4 p-4 bg-[#3898ec]/5 rounded-xl border border-[#3898ec]/10">
                          <span className="text-[#3898ec] font-bold text-sm block mb-1">Applications</span>
                          <p className="text-white/70 text-sm">{mat.uses}</p>
                        </div>
                      )}
                    </div>
                    <div className="lg:w-1/3">
                      <PlaceholderImage text={`${mat.name} extraction`} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'ports':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-6 font-['Montserrat']">Global Gateway Ports</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {investData.ports.map((port, idx) => (
                <div key={idx} className="group relative bg-[#1a2b41] p-8 rounded-3xl border border-white/10 overflow-hidden">
                  <div className="mb-6">
                    <PlaceholderImage text={`${port.name} View`} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">{port.name}</h4>
                  <p className="text-white/70 leading-relaxed mb-6">{port.description}</p>
                  {port.link && (
                    <a 
                      href={port.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#3898ec] hover:underline font-medium"
                    >
                      Visit Official Website <CheckCircle2 className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'laws':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 font-['Montserrat']">Legal Protections & Incentives</h3>
                <div className="grid gap-4">
                  {investData.investmentLaws.provisions.map((law, idx) => (
                    <div key={idx} className="flex gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                      <Scale className="w-6 h-6 text-[#3898ec] flex-shrink-0" />
                      <span className="text-white/80 font-medium">{law}</span>
                    </div>
                  ))}
                </div>
              </div>
              <PlaceholderImage text="Legal & Regulatory Framework" />
            </div>
            
            <div className="bg-gradient-to-br from-[#0068c8] to-[#3898ec] p-10 rounded-[2.5rem] relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-white mb-6">Investment Sectors Governed</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {investData.investmentLaws.fields.map(field => (
                    <div key={field} className="px-4 py-3 bg-white/10 backdrop-blur-md rounded-xl text-white/90 text-sm border border-white/10">
                      {field}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="alex-section bg-[#0d1623] pt-0">
      <div className="alex-container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:w-1/4">
            <nav className="sticky top-32 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
                    activeTab === cat.id 
                      ? 'bg-gradient-to-r from-[#0068c8] to-[#3898ec] text-white shadow-lg shadow-[#0068c8]/20' 
                      : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <cat.icon className={`w-5 h-5 ${activeTab === cat.id ? 'text-white' : 'group-hover:text-[#3898ec] transition-colors'}`} />
                  <span className="font-semibold text-sm tracking-wide">{cat.label}</span>
                  {activeTab === cat.id && (
                    <motion.div 
                      layoutId="activeTab" 
                      className="ml-auto w-2 h-2 bg-white rounded-full"
                    />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="lg:w-3/4 min-h-[600px] bg-white/5 rounded-[2.5rem] border border-white/10 p-8 md:p-12 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#3898ec]/10 rounded-full blur-3xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {renderContent()}
            </AnimatePresence>
          </main>
        </div>
      </div>
    </section>
  );
}
