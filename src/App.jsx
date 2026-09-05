import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { portfolioData } from './data/portfolioData';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import TerminalCLI from './components/TerminalCLI';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import CinematicView from './cinematic/CinematicView';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [viewMode, setViewMode] = useState('normal'); // 'normal' | 'cinematic'
  const [scrollProgress, setScrollProgress] = useState(0);

  // 1. Scroll Restoration: always start at top of page on refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // 2. Theme Management
  useEffect(() => {
    document.documentElement.className = `${theme}-theme`;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 2. Real-Time Scroll Progress (Mobile & Desktop)
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Lenis Smooth Scrolling (Desktop only, native on mobile)
  useEffect(() => {
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleLoaderFinish = () => {
    setLoading(false);
    document.body.classList.remove('no-scroll');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleEnterCinematic = () => {
    setViewMode('cinematic');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleExitCinematic = () => {
    setViewMode('normal');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Cinematic View mode
  if (viewMode === 'cinematic') {
    return (
      <div className="portfolio-app-root cinematic-active-root">
        {/* Top Scroll Indicator */}
        <div
          className="scroll-progress-bar-top"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
        <CustomCursor />
        <CinematicView onExitCinematic={handleExitCinematic} />
      </div>
    );
  }

  // Render Standard Portfolio mode
  return (
    <div className="portfolio-app-root">
      {/* Real-Time Cyber Scroll Progress Bar across top */}
      <div
        className="scroll-progress-bar-top"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {loading && <Loader onFinish={handleLoaderFinish} />}
      <CustomCursor />
      <BackgroundEffects />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onEnterCinematic={handleEnterCinematic}
      />

      <main>
        <Hero
          personal={portfolioData.personal}
          onEnterCinematic={handleEnterCinematic}
        />
        <Stats stats={portfolioData.stats} />

        {/* Interactive Developer Terminal */}
        <section className="terminal-section-wrapper">
          <div className="container">
            <div className="terminal-section-intro">
              <span className="section-kicker">Interactive CLI</span>
              <h2 className="section-main-heading">Explore Via Developer Terminal</h2>
              <p className="section-lead-subtitle">
                Recruiters &amp; engineers communicate through code. Run commands directly on the live developer console below.
              </p>
            </div>
            <TerminalCLI
              personal={portfolioData.personal}
              skills={portfolioData.skills}
              experience={portfolioData.experience}
              projects={portfolioData.projects}
            />
          </div>
        </section>

        <About personal={portfolioData.personal} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Experience experience={portfolioData.experience} />
        <Education
          education={portfolioData.education}
          certifications={portfolioData.certifications}
          testimonials={portfolioData.testimonials}
        />
        <GithubStats theme={theme} />
        <Contact personal={portfolioData.personal} />
      </main>

      <Footer personal={portfolioData.personal} />

      {/* Floating Interactive Scroll-To-Top Indicator */}
      {scrollProgress > 4 && (
        <button
          className="scroll-floating-tracker"
          onClick={scrollToTop}
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <span className="scroll-tracker-percent">{Math.round(scrollProgress)}%</span>
          <i className="fas fa-arrow-up scroll-tracker-arrow"></i>
        </button>
      )}
    </div>
  );
}

export default App;
