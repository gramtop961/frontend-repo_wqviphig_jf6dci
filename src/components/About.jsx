import { motion } from 'framer-motion';
import { Cpu, Code, Server, Database, Globe, Layout, Briefcase, GraduationCap } from 'lucide-react';

const skills = [
  { icon: Code, label: 'JavaScript' },
  { icon: Layout, label: 'React' },
  { icon: Globe, label: 'Next.js' },
  { icon: Server, label: 'Node.js' },
  { icon: Database, label: 'MongoDB' },
  { icon: Cpu, label: 'Performance' },
];

const timeline = [
  {
    title: 'Frontend Developer',
    org: 'Tech Studio',
    period: '2023 - Present',
    desc: 'Building fast, accessible interfaces with React and Tailwind. Focus on performance and delightful UX.'
  },
  {
    title: 'B.Sc. Computer Science',
    org: 'Modern University',
    period: '2019 - 2023',
    desc: 'Graduated with honors. Specialized in web technologies and human-computer interaction.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-white to-blue-50/60 py-24 text-slate-800 dark:from-[#0b152d] dark:to-[#081127] dark:text-slate-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-900/20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"
        >
          About Me
        </motion.h2>

        <div className="mt-10 grid items-center gap-10 md:grid-cols-[280px,1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative h-48 w-48 overflow-hidden rounded-full ring-4 ring-blue-200/60 shadow-xl dark:ring-blue-800/40">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]" />
              <div className="relative flex h-full w-full items-center justify-center text-5xl font-black text-white">JD</div>
            </div>
            <p className="text-center text-sm text-slate-600 dark:text-slate-300">I love crafting elegant, accessible interfaces that feel fast and alive.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              I’m a frontend-focused developer who blends clean design with robust engineering.
              My toolkit centers on React, modern CSS, and thoughtful animations. I care about performance,
              accessibility, and developer experience.
            </p>

            <div>
              <h3 className="mb-4 text-xl font-semibold text-slate-800 dark:text-white">Skills</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {skills.map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center gap-3 rounded-xl border border-blue-200/50 bg-white/80 p-3 shadow-sm backdrop-blur-sm transition-colors hover:border-blue-400/60 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-blue-500/40"
                  >
                    <Icon className="h-5 w-5 text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-300 dark:group-hover:text-blue-200" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-800 dark:text-white">
                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-300" /> Experience &
                <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-300" /> Education
              </h3>
              <div className="relative ml-2 border-l-2 border-blue-200/70 dark:border-blue-800/40">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.55, delay: idx * 0.08 }}
                    className="relative ml-6 pb-8 last:pb-0"
                  >
                    <span className="absolute -left-3 top-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] shadow-md" />
                    <h4 className="text-base font-semibold text-slate-800 dark:text-white">{item.title}</h4>
                    <div className="text-sm text-slate-500 dark:text-slate-300">{item.org} • {item.period}</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
