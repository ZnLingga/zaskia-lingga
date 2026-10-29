import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToId } from '../lib/lenis.js';
import avatar from '../assets/profile.jpg';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'organizations', label: 'Orgs' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ ready }) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', ...links.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-[80] w-[calc(100%-2rem)] max-w-fit -translate-x-1/2"
    >
      <nav className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1.5 pr-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <button
          onClick={() => go('hero')}
          data-cursor
          className="flex items-center gap-2 rounded-full py-1 pl-1 pr-3 transition-colors hover:bg-white/10"
          aria-label="Kembali ke atas"
        >
          <img src={avatar} alt="" className="h-8 w-8 rounded-full object-cover object-[50%_18%]" />
          <span className="font-display text-sm font-bold tracking-tight">ZNL</span>
        </button>

        <ul className="hidden items-center md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                data-cursor
                className={`rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  active === l.id ? 'bg-accent text-ink' : 'text-white/70 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="ml-auto rounded-full p-2.5 hover:bg-white/10 md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            className="mt-2 flex flex-col rounded-3xl border border-white/10 bg-black/80 p-2 backdrop-blur-xl md:hidden"
          >
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium ${
                    active === l.id ? 'bg-accent text-ink' : 'text-white/80'
                  }`}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

