import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import RealisticClouds from '../layers/RealisticClouds';
import SoftSunlight from '../layers/SoftSunlight';
import RealWindEngine from '../layers/RealWindEngine';

const Scene06Future = ({ isActive = true, onExitCinematic }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const linkedinUrl = (portfolioData.personal.linkedin || '').startsWith('http')
    ? portfolioData.personal.linkedin
    : `https://${portfolioData.personal.linkedin}`;

  return (
    <section
      className={`cine-scene cine-scene-06 ${isActive ? 'is-active' : ''}`}
      data-scene="6"
    >
      {/* 4K Backdrop with Living Parallax */}
      <div
        className="cine-scene-bg"
        style={{
          backgroundImage: 'url(/cinematic/scene06.jpg)',
        }}
      />

      {/* Radiant Golden Sunrise Radiance */}
      <SoftSunlight originX={50} originY={45} theme="sunrise" />

      {/* Photorealistic Drifting Morning Clouds */}
      <RealisticClouds theme="sunrise" opacity={0.75} />

      {/* Natural Morning Breeze Waves & Golden Wind Motes */}
      <RealWindEngine theme="golden" intensity="gentle" />

      {/* Rolling Low Morning Mist Over City */}
      <div className="cine-morning-mist" />

      <div className="cine-overlay cine-overlay-bottom-light" />

      <div className="cine-text-container cine-text-center">
        <span className="cine-chapter cine-chapter-gold">
          CHAPTER 06 • DAWN OF TOMORROW
        </span>
        <h2 className="cine-title">The Future Awaits</h2>
        <p className="cine-subtitle cine-subtitle-bright">
          Let's Build Something Extraordinary Together
        </p>
      </div>

      <div className="cine-contact-grid">
        <div className="cine-contact-card" onClick={copyEmail}>
          <i className="fas fa-envelope" />
          <span>{portfolioData.personal.email}</span>
          <small>{emailCopied ? 'Copied to Clipboard!' : 'Click to copy'}</small>
        </div>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="cine-contact-card">
          <i className="fab fa-linkedin" />
          <span>LinkedIn</span>
          <small>Connect with me</small>
        </a>
        <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="cine-contact-card">
          <i className="fab fa-github" />
          <span>GitHub</span>
          <small>Explore repositories</small>
        </a>
        <a href={`tel:${portfolioData.personal.phone}`} className="cine-contact-card">
          <i className="fas fa-phone" />
          <span>{portfolioData.personal.phone}</span>
          <small>Direct Line</small>
        </a>
      </div>

      {/* Exit CTA */}
      <div className="cine-exit-area">
        <button className="cine-exit-btn" onClick={onExitCinematic}>
          <i className="fas fa-arrow-left" /> Switch to Standard Portfolio
        </button>
      </div>
    </section>
  );
};

export default Scene06Future;
