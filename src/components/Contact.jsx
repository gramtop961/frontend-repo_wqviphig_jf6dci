import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const message = form.get('message');
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
    window.location.href = `mailto:john.doe@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-white to-blue-50/60 py-24 dark:from-[#070e20] dark:to-[#060b18]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,_rgba(59,130,246,0.15),_transparent_45%)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] bg-clip-text text-3xl font-extrabold text-transparent md:text-4xl"
        >
          Get In Touch
        </motion.h2>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-blue-200/60 bg-white/80 p-6 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Name</label>
                <input name="name" required className="w-full rounded-lg border border-slate-300/70 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-white" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg border border-slate-300/70 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-white" />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200">Message</label>
                <textarea name="message" rows="5" required className="w-full rounded-lg border border-slate-300/70 bg-white px-3 py-2 text-slate-900 outline-none ring-blue-500 transition focus:ring-2 dark:border-white/10 dark:bg-white/10 dark:text-white" />
              </div>
              <button type="submit" className="mt-2 rounded-xl bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-[1.02]">
                Send Message
              </button>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              I’m open to freelance work, collaborations, or just a friendly chat about design systems, frontend
              performance, and developer tooling. Let’s build something beautiful.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="https://github.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white px-4 py-2 text-slate-800 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                <Github className="h-5 w-5" /> Github
              </a>
              <a href="https://linkedin.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white px-4 py-2 text-slate-800 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                <Linkedin className="h-5 w-5" /> LinkedIn
              </a>
              <a href="mailto:john.doe@example.com" className="inline-flex items-center gap-2 rounded-full border border-slate-300/60 bg-white px-4 py-2 text-slate-800 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
                <Mail className="h-5 w-5" /> Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
