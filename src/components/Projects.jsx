import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'BlueWave UI Kit',
    desc: 'A sleek, accessible component library built with Tailwind and Framer Motion.',
    image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    tags: ['React', 'Tailwind', 'Framer Motion']
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Data-rich dashboard with live charts, theming, and role-based access.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    tags: ['Vite', 'Hooks', 'Charts']
  },
  {
    title: 'Portfolio Engine',
    desc: 'Config-driven portfolio generator with Markdown content and animations.',
    image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    demo: '#',
    repo: '#',
    tags: ['React', 'MDX', 'SEO']
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-24 dark:bg-[#070e20]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,_rgba(30,58,138,0.12),_transparent_40%),_radial-gradient(circle_at_80%_0%,_rgba(59,130,246,0.12),_transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"
        >
          Selected Projects
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white">{p.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2">
                  <a
                    href={p.demo}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-blue-900 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
