import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) {
      setIsDark(stored === 'dark');
      document.documentElement.classList.toggle('dark', stored === 'dark');
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 backdrop-blur-md transition hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline">{isDark ? 'Light' : 'Dark'} Mode</span>
    </button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-[#060b18] dark:text-slate-100">
      <DarkModeToggle />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="border-t border-slate-200/60 bg-white/70 py-8 text-center text-sm text-slate-600 backdrop-blur-md dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
        © {new Date().getFullYear()} John Doe • Built with React, Tailwind & Framer Motion
      </footer>
    </div>
  );
}
