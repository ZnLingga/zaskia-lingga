import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './lib/gsap.js';
import { setLenis, getLenis } from './lib/lenis.js';
import Preloader from './components/Preloader.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutEducationBento from './components/AboutEducationBento.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ProjectsShowcase from './components/ProjectsShowcase.jsx';
import AwardsBento from './components/AwardsBento.jsx';
import OrganizationsSection from './components/OrganizationsSection.jsx';
import SkillsMarquee from './components/SkillsMarquee.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [ready, setReady] = useState(false);
  const progress = useRef(null);
  const handleComplete = useCallback(() => setReady(true), []);

  // Inertial smooth scroll, synced with GSAP ScrollTrigger.
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    lenis.stop(); // locked until the preloader finishes
    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.scrollTo(0, 0);
    getLenis()?.start();
    ScrollTrigger.refresh();
  }, [ready]);

  // Scroll progress bar
  useEffect(() => {
    const tween = gsap.to(progress.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: document.documentElement,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.2,
      },
    });
    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <>
      <div className="aurora" aria-hidden />
      <div className="noise-overlay" aria-hidden />
      <div
        ref={progress}
        className="fixed left-0 top-0 z-[85] h-[3px] w-full origin-left scale-x-0 bg-accent"
        aria-hidden
      />

      <CustomCursor />

      <AnimatePresence>{!ready && <Preloader key="preloader" onComplete={handleComplete} />}</AnimatePresence>

      <Navbar ready={ready} />

      <main className="relative z-10">
        <Hero ready={ready} />
        <AboutEducationBento />
        <ExperienceSection />
        <ProjectsShowcase />
        <AwardsBento />
        <OrganizationsSection />
        <SkillsMarquee />
      </main>

      <Footer />
    </>
  );
}

