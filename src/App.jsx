import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from './lib/gsap.js';
import { setLenis, getLenis } from './lib/lenis.js';
import Background from './components/Background.jsx';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutEducation from './components/AboutEducation.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ProjectsShowcase from './components/ProjectsShowcase.jsx';
import AwardsSection from './components/AwardsSection.jsx';
import OrganizationsSection from './components/OrganizationsSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [ready, setReady] = useState(false);
  const progress = useRef(null);
  const handleComplete = useCallback(() => setReady(true), []);

  // Inertial smooth scrolling (Lenis), synced with GSAP ScrollTrigger.
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    setLenis(lenis);
    lenis.stop(); // locked until the curtain opens
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
      <Background />
      <div
        ref={progress}
        className="fixed left-0 top-0 z-[90] h-[3px] w-full origin-left scale-x-0 bg-accent"
        aria-hidden
      />

      <AnimatePresence>
        {!ready && <Preloader key="preloader" onComplete={handleComplete} />}
      </AnimatePresence>

      <Navbar ready={ready} />

      <main className="relative z-10">
        <Hero ready={ready} />
        <AboutEducation />
        <ExperienceSection />
        <ProjectsShowcase />
        <AwardsSection />
        <OrganizationsSection />
        <SkillsSection />
      </main>

      <Footer />
    </>
  );
}
