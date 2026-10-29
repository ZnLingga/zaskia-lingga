import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from '../data/ui.js';

const LanguageContext = createContext(null);

const isBilingual = (v) =>
  v !== null && typeof v === 'object' && !Array.isArray(v) && 'id' in v && 'en' in v;

const readInitial = () => {
  try {
    return localStorage.getItem('lang') === 'en' ? 'en' : 'id'; // default: Indonesian
  } catch {
    return 'id';
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitial);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui.siteTitle[lang];
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', ui.siteDescription[lang]);
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang]);

  /** Resolves { id, en } objects to the active language; passes other values through. */
  const t = useCallback((value) => (isBilingual(value) ? value[lang] : value), [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);

