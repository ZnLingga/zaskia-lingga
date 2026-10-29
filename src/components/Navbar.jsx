import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { scrollToId } from '../lib/lenis.js';
import { useLang } from '../context/LanguageContext.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { ui } from '../data/ui.js';
import avatar from '../assets/profile.jpg';

const links = ['about', 'experience', 'projects', 'awards', 'organizations', 'skills', 'contact'];

function LanguageSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div
      role="group"
      aria-label={t(ui.controls.language)}
      className="flex rounded-full border border-line bg-surface/80 p-1 text-sm font-bold"
    >
      {['id', 'en'].map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`relative z-10 rounded-full px-3.5 py-1.5 transition-colors ${
            lang === code ? 'text-onaccent' : 'text-fg/70 hover:text-fg'
          }`}
        >
          {lang === code && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 -z-10 rounded-full bg-accent"
              transition={{ type: 'spring', stiffness: 400, damping: 32 }}
            />
          )}
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function ThemeSwitch() {
  const { theme, toggle } = useTheme();
  const { t } = useLang();
  const label = theme === 'dark' ? t(ui.controls.light) : t(ui.controls.dark);
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`${t(ui.controls.theme)}: ${label}`}
      title={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/80 text-fg transition-colors hover:border-accent hover:text-accent"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -80, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 80, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export default function Navbar({ ready }) {
  const { t } = useLang();
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ['hero', ...links].map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
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
      initial={{ y: -80, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-[80] border-b border-line/70 bg-ink/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-6 py-3 md:px-10">
        <button
          type="button"
          onClick={() => go('hero')}
          aria-label={t(ui.controls.toTop)}
          className="flex items-center gap-3"
        >
          <img src={avatar} alt="" className="h-10 w-10 rounded-full object-cover object-[50%_18%]" />
          <span className="hidden whitespace-nowrap text-lg font-extrabold tracking-tight sm:block xl:hidden 2xl:block">
            Zaskia Lingga
          </span>
        </button>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((id) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => go(id)}
                className={`rounded-full px-4 py-2 text-base font-semibold transition-colors ${
                  active === id ? 'bg-accent/15 text-accent' : 'text-fg/70 hover:text-fg'
                }`}
              >
                {t(ui.nav[id])}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          <LanguageSwitch />
          <ThemeSwitch />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={t(ui.controls.menu)}
            aria-expanded={open}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface/80 xl:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-line/70 xl:hidden"
          >
            <div className="mx-auto flex max-w-[1200px] flex-col px-6 py-3 md:px-10">
              {links.map((id) => (
                <li key={id}>
                  <button
                    type="button"
                    onClick={() => go(id)}
                    className={`w-full rounded-xl px-3 py-3.5 text-left text-lg font-semibold ${
                      active === id ? 'text-accent' : 'text-fg/80'
                    }`}
                  >
                    {t(ui.nav[id])}
                  </button>
                </li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
