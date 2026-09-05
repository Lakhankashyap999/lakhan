import React, { useState, useEffect, useCallback, useRef } from 'react';
import CinematicNavbar from './CinematicNavbar';
import Scene01Beginning from './scenes/Scene01Beginning';
import Scene02Craft from './scenes/Scene02Craft';
import Scene03Journey from './scenes/Scene03Journey';
import Scene04Creations from './scenes/Scene04Creations';
import Scene05Academy from './scenes/Scene05Academy';
import Scene06Future from './scenes/Scene06Future';
import './cinematic.css';

const CinematicView = ({ onExitCinematic }) => {
  const [activeScene, setActiveScene] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const containerRef = useRef(null);

  // 1. Entry Transition & Scroll Reset
  useEffect(() => {
    document.body.classList.add('cinematic-active');
    window.scrollTo({ top: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 900);

    return () => {
      document.body.classList.remove('cinematic-active');
      clearTimeout(timer);
    };
  }, []);

  // 2. High-Performance IntersectionObserver for Scene Transitions (ZERO scroll listeners!)
  useEffect(() => {
    const scenes = document.querySelectorAll('.cine-scene');
    if (!scenes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            const sceneNum = parseInt(entry.target.getAttribute('data-scene'), 10);
            if (sceneNum) {
              setActiveScene(sceneNum);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.35,
      }
    );

    scenes.forEach((s) => observer.observe(s));

    return () => {
      observer.disconnect();
    };
  }, []);

  // 3. Single Global GPU Parallax Engine (Updates CSS variables directly - ZERO React state re-renders!)
  useEffect(() => {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let rafId;

    const handleMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const animateParallax = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      document.documentElement.style.setProperty('--cine-x', currentX.toFixed(3));
      document.documentElement.style.setProperty('--cine-y', currentY.toFixed(3));

      rafId = requestAnimationFrame(animateParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animateParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleExit = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      onExitCinematic();
    }, 450);
  }, [onExitCinematic]);

  return (
    <div ref={containerRef} className="cine-container">
      {/* Transition overlay */}
      <div className={`cine-transition-overlay ${isTransitioning ? 'active' : ''}`}>
        <div className="cine-transition-text">
          {isTransitioning && activeScene === 1 ? 'Entering Cinematic Mode...' : 'Returning...'}
        </div>
      </div>

      <CinematicNavbar
        onExitCinematic={handleExit}
        activeScene={activeScene}
        totalScenes={6}
      />

      <Scene01Beginning isActive={activeScene === 1} />
      <Scene02Craft isActive={activeScene === 2} />
      <Scene03Journey isActive={activeScene === 3} />
      <Scene04Creations isActive={activeScene === 4} />
      <Scene05Academy isActive={activeScene === 5} />
      <Scene06Future isActive={activeScene === 6} onExitCinematic={handleExit} />
    </div>
  );
};

export default CinematicView;
