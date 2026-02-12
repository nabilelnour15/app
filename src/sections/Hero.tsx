import { useRef } from 'react';
import { ArrowRight, MapPin, Building2, Landmark, MousePointer2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 scale-105"
        >
          <img
            src="/images/hero-bg.jpg"
            alt="Alexandria aerial view"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1623]/90 via-[#0d1623]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/50 via-transparent to-[#0d1623]/30" />
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <motion.div
            style={{ y: y2, opacity }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0068c8]/10 rounded-full blur-3xl"
        />
        <motion.div
           style={{ y: y2, opacity }}
          className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-[#3898ec]/10 rounded-full blur-2xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 alex-container pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6"
            >
              <MapPin className="w-4 h-4 text-[#3898ec]" />
              <span className="text-white/90 text-sm font-medium">
                Egypt's Mediterranean Jewel
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="font-['Montserrat'] font-bold text-white mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-lg md:text-xl font-medium text-[#3898ec] mb-2"
              >
                DISCOVER
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block text-5xl md:text-6xl lg:text-7xl mb-4"
              >
                <TypeAnimation
                  sequence={[
                    'ALEXANDRIA',
                    2000,
                    'HISTORY',
                    2000,
                    'CULTURE',
                    2000,
                    'BEAUTY',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block text-xl md:text-2xl font-normal text-white/80"
              >
                 Where Ancient Wisdom Meets Modern Innovation
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Experience the perfect blend of ancient heritage and modern
              innovation on Egypt's stunning Mediterranean coast. A city of
              timeless beauty and forward momentum.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#visit')}
                className="alex-btn-primary group"
              >
                Explore the City
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#visit')}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-all"
              >
                Plan Your Visit
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0068c8]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#3898ec]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-['Montserrat']">
                    5.6M+
                  </p>
                  <p className="text-white/60 text-sm">Population</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#0068c8]/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-[#3898ec]" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white font-['Montserrat']">
                    2,300+
                  </p>
                  <p className="text-white/60 text-sm">Years of History</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Featured Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <motion.div
              whileHover={{ rotateY: -5, scale: 1.02 }}
              className="relative perspective-1000"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500">
                <img
                  src="/images/hero-street.jpg"
                  alt="Qaitbay Street"
                  className="w-full h-[500px] object-cover"
                />
                {/* Card Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1623]/80 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full">
                  <span className="text-[#0068c8] font-semibold text-sm">
                    Featured
                  </span>
                </div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl font-['Montserrat'] mb-2">
                    Citadel of Qaitbay
                  </h3>
                  <p className="text-white/70 text-sm">
                    A 15th-century defensive fortress located on the Mediterranean
                    sea coast
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0068c8] rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-[#3898ec]/50 rounded-2xl -z-10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <MousePointer2 className="w-5 h-5" />
      </motion.div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
