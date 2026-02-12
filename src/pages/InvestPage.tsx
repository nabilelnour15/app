import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MapPin, 
  Building, 
  ArrowRight, 
  Globe, 
  TrendingUp, 
  Ship, 
  Users
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InvestSections from '../sections/InvestSections';
import CTA from '../sections/CTA';
import { investData } from '../data/investData';

const PlaceholderImage = ({ text = "Image Placeholder", className = "" }: { text?: string, className?: string }) => (
  <div className={`w-full bg-white/5 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-3 overflow-hidden relative ${className}`}>
    <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }} />
    </div>
    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
      <Building className="w-6 h-6 text-white/20" />
    </div>
    <span className="text-white/20 text-xs font-bold uppercase tracking-widest">{text}</span>
  </div>
);

export default function InvestPage() {
    return (
        <div className="min-h-screen bg-[#0d1623]">
            <Navbar isInternal />
            
            <main>
                {/* Hero Section */}
                <section className="relative h-[80vh] flex items-center transition-all duration-700">
                    <div className="absolute inset-0 z-0">
                        <PlaceholderImage text="High-Res Alexandria Skyline / Port Image" className="h-full rounded-none border-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1623]/80 via-[#0d1623]/40 to-[#0d1623]" />
                    </div>
                    
                    <div className="alex-container relative z-10 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block px-4 py-1.5 bg-[#3898ec]/20 text-[#3898ec] text-sm font-bold rounded-full mb-6 uppercase tracking-widest">
                                Global Trading Gateway
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 font-['Montserrat'] leading-tight tracking-tighter">
                                The Future of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0068c8] to-[#3898ec]">
                                    Global Commerce
                                </span>
                            </h1>
                            <p className="text-white/70 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-light">
                                Strategically positioned at the crossroads of three continents, Alexandria represents 
                                the heartbeat of Egypt's industrial and maritime excellence.
                            </p>
                            <div className="mt-12 flex flex-wrap justify-center gap-6">
                                <button className="alex-btn-primary px-10 py-4 text-lg">
                                    Start Your Venture
                                </button>
                                <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                                    Download Prospectus
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Key Stats Overlay */}
                <section className="relative z-20 -mt-20">
                    <div className="alex-container">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { icon: Ship, label: "National Export Traffic", value: "40%+", color: "from-[#0068c8] to-[#3898ec]" },
                                { icon: Globe, label: "Foreign Trade Share", value: "55%", color: "from-[#3898ec] to-[#0068c8]" },
                                { icon: TrendingUp, label: "Industrial Production", value: "40%", color: "from-[#0068c8] to-[#3898ec]" },
                                { icon: Users, label: "Strategic Workforce", value: "5.6M", color: "from-[#3898ec] to-[#0068c8]" },
                            ].map((stat, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-[#1a2b41] p-8 rounded-[2rem] border border-white/10 group hover:border-[#3898ec]/50 transition-all"
                                >
                                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6`}>
                                        <stat.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-4xl font-black text-white mb-2 font-['Montserrat']">{stat.value}</h3>
                                    <p className="text-white/40 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Why Invest Section */}
                <section className="py-32 bg-[#0d1623]">
                    <div className="alex-container">
                        <div className="grid lg:grid-cols-2 gap-20 items-start">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="sticky top-32"
                            >
                                <h2 className="text-5xl font-black text-white mb-8 font-['Montserrat'] leading-tight">
                                    Why Leading Enterprises <br />
                                    <span className="text-[#3898ec]">Choose Alexandria</span>
                                </h2>
                                <p className="text-white/60 text-lg mb-12 leading-relaxed">
                                    Alexandria is not just a city; it's a multi-modal hub that empowers 
                                    growth through superior infrastructure and historical expertise.
                                </p>
                                <PlaceholderImage text="Business Excellence in Alexandria" className="aspect-[16/10]" />
                            </motion.div>
                            
                            <div className="space-y-6">
                                {investData.whyAlexandria.reasons.map((reason, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group"
                                    >
                                        <div className="flex gap-6">
                                            <div className="w-10 h-10 rounded-full bg-[#3898ec]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                                <CheckCircle2 className="w-5 h-5 text-[#3898ec]" />
                                            </div>
                                            <p className="text-white/80 text-lg leading-relaxed">{reason}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Tabbed Technical Data */}
                <section className="py-20 bg-[#0d1623]/50">
                    <div className="alex-container mb-12 text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">Investment Ecosystem</h2>
                        <p className="text-white/40">Explore the technical frameworks that drive our success.</p>
                    </div>
                    <InvestSections />
                </section>

                {/* Strategic Opportunities */}
                <section className="py-32 bg-[#0d1623]">
                    <div className="alex-container">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                            <div className="max-w-2xl">
                                <h2 className="text-5xl font-black text-white mb-6 font-['Montserrat']">Current Strategic <br /> Opportunities</h2>
                                <p className="text-white/60 text-lg">High-value projects currently open for international and domestic partnership.</p>
                            </div>
                            <div className="flex gap-4">
                                <PlaceholderImage text="Project Map Overview" className="w-48 aspect-video" />
                            </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            {investData.opportunities.map((opp, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    className="bg-[#1a2b41] rounded-[2.5rem] overflow-hidden border border-white/10 group hover:-translate-y-2 transition-all duration-500"
                                >
                                    <div className="relative h-64">
                                        <PlaceholderImage text={`${opp.title} Site Image`} className="h-full rounded-none border-none" />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-[#3898ec] text-xs font-black uppercase tracking-widest border border-white/10">
                                                {opp.approach}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3898ec] transition-colors font-['Montserrat']">{opp.title}</h3>
                                        <div className="flex items-center gap-4 mb-8 text-white/40">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span className="text-sm">{opp.location}</span>
                                            </div>
                                            {opp.area && (
                                                <div className="flex items-center gap-2">
                                                    <Building className="w-4 h-4" />
                                                    <span className="text-sm">{opp.area}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 bg-white/5 rounded-2xl border border-white/5 mb-8">
                                            <p className="text-white/70 leading-relaxed text-sm">{opp.purpose}</p>
                                        </div>
                                        <button className="flex items-center gap-2 text-[#3898ec] font-bold group/btn">
                                            View Project Details 
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Success Stories */}
                <section className="py-32 bg-[#0d1623]/40">
                    <div className="alex-container">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4 font-['Montserrat'] tracking-tight">Success Stories</h2>
                            <p className="text-white/40 max-w-2xl mx-auto">Discover the global leaders who have already successfully scaled their operations in Alexandria.</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {investData.successStories.map((story, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all text-center group"
                                >
                                    <div className="w-20 h-20 bg-white shadow-xl rounded-2xl mx-auto mb-8 flex items-center justify-center p-4">
                                        <PlaceholderImage text="Logo" className="h-full border-none opacity-50" />
                                    </div>
                                    <span className="text-[10px] font-black text-[#3898ec] uppercase tracking-[0.2em] mb-3 block">{story.category}</span>
                                    <h4 className="text-xl font-bold text-white mb-4 font-['Montserrat']">{story.name}</h4>
                                    <p className="text-white/50 text-xs leading-relaxed line-clamp-3">{story.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <CTA />
            </main>
            <Footer />
        </div>
    );
}
