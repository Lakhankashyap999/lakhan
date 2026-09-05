import React from 'react';
import RealisticClouds from '../layers/RealisticClouds';
import RealWindEngine from '../layers/RealWindEngine';
import SoftSunlight from '../layers/SoftSunlight';

const Scene01Beginning = ({ isActive = true }) => {
  return (
    <section
      className={`cine-scene cine-scene-01 ${isActive ? 'is-active' : ''}`}
      data-scene="1"
    >
      {/* 4K Ultra-Crisp Backdrop with Living Parallax */}
      <div
        className="cine-scene-bg"
        style={{
          backgroundImage: 'url(/cinematic/scene01.jpg)',
        }}
      />

      {/* Zero-Cost Soft Natural Sunset Radiance */}
      <SoftSunlight originX={50} originY={48} theme="sunset" />

      {/* Photorealistic Volumetric Soft Drifting Clouds */}
      <RealisticClouds theme="sunset" opacity={0.88} />

      {/* Natural Atmospheric Breeze Waves & Wind Motes */}
      <RealWindEngine theme="golden" intensity="gentle" />

      {/* Skyscraper Red Blinking Antenna Beacon */}
      <div className="cine-sky-beacon" style={{ top: '48%', left: '76%' }} />
      <div className="cine-sky-beacon" style={{ top: '53%', left: '21%', animationDelay: '0.8s' }} />

      {/* Twinkling City Lights */}
      <div className="cine-city-twinkles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="cine-twinkle-light"
            style={{
              top: `${18 + (i * 9) % 70}%`,
              left: `${(i * 15 + 8) % 92}%`,
              animationDelay: `${(i * 0.4) % 3}s`,
            }}
          />
        ))}
      </div>

      {/* Smooth Dark Gradient Vignette for Readability */}
      <div className="cine-overlay cine-overlay-bottom" />

      {/* Animated Cinematic Typography */}
      <div className="cine-text-container cine-text-center">
        <span className="cine-chapter cine-chapter-gold">
          CHAPTER 01 • PROLOGUE
        </span>
        <h1 className="cine-title">
          LAKHAN KASHYAP
        </h1>
        <p className="cine-subtitle cine-subtitle-bright">
          Full Stack Software Engineer
        </p>
        <p className="cine-tagline">
          Watching over the digital horizon • Architecting scalable systems
        </p>
      </div>

      {/* Bouncing Scroll Guide */}
      <div className="cine-scroll-indicator">
        <span>Scroll to explore world ↓</span>
        <div className="cine-scroll-arrow">
          <i className="fas fa-chevron-down" />
        </div>
      </div>
    </section>
  );
};

export default Scene01Beginning;
