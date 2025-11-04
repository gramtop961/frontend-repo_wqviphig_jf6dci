import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ChevronDown, Rocket } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-[#0B1225] via-[#0a1a3a] to-[#0b285a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xW-uaUprkPUPPfRw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Animated gradient veil to improve contrast over Spline */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0b1d3f]/40 to-[#0b1d3f]/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-blue-300" />
          <span className="text-xs font-medium tracking-wide text-blue-100">Crafting sleek web experiences</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-white bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          John Doe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="mt-3 text-lg font-medium text-blue-100 sm:text-xl"
        >
          Web Developer • Frontend Engineer • UI Enthusiast
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="mt-8 flex items-center gap-4"
        >
          <button
            onClick={scrollToProjects}
            className="group rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-transform duration-300 hover:scale-[1.03] hover:shadow-blue-800/40 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            View My Work
          </button>
          <a
            href="#contact"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition-colors hover:bg-white/10"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.button
          onClick={scrollToProjects}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-blue-100 backdrop-blur-md"
        >
          Scroll
          <ChevronDown className="h-4 w-4" />
        </motion.button>
      </div>
    </section>
  );
}
