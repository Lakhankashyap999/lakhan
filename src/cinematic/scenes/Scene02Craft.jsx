import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import RealisticClouds from '../layers/RealisticClouds';
import RealWindEngine from '../layers/RealWindEngine';

const Scene02Craft = ({ isActive = true }) => {
  const categories = portfolioData.skills?.categories || [];
  const marqueeSkills = [
    ...(portfolioData.skills?.marquee1 || []),
    ...(portfolioData.skills?.marquee2 || [])
  ];

  return (
    <section
      className={`cine-scene cine-scene-02 ${isActive ? 'is-active' : ''}`}
      data-scene="2"
    >
      {/* 4K Backdrop with Living Parallax */}
      <div
        className="cine-scene-bg"
        style={{
          backgroundImage: 'url(/cinematic/scene02.jpg)',
        }}
      />

      {/* Atmospheric Twilight Cloud Drift */}
      <RealisticClouds theme="twilight" opacity={0.35} />

      {/* Cybernetic Cyan Breeze Streams */}
      <RealWindEngine theme="cyan" intensity="gentle" />

      {/* Holographic Laser Scanline */}
      <div className="cine-holo-scanbeam" />

      <div className="cine-overlay cine-overlay-full" />

      <div className="cine-text-container">
        <span className="cine-chapter" style={{ color: '#38bdf8' }}>
          CHAPTER 02 • THE ARSENAL
        </span>
        <h2 className="cine-title cine-title-sm">The Craft & Code</h2>
        <p className="cine-subtitle">
          Surrounded by interactive terminals • Full-stack technologies in production
        </p>
      </div>

      <div className="cine-skills-grid">
        {categories.map((cat, catIdx) => (
          <div
            key={cat.title}
            className="cine-skill-category-group"
            style={{ transitionDelay: `${catIdx * 0.08}s` }}
          >
            <h3 className="cine-skill-category">
              <i className={cat.icon} style={{ marginRight: '8px' }} />
              {cat.title}
            </h3>
            <div className="cine-skill-cards">
              {cat.skills.map((skill, idx) => {
                const matchedIcon = marqueeSkills.find(m =>
                  m.name.toLowerCase().includes(skill.name.split(' ')[0].toLowerCase())
                )?.icon || 'fas fa-code';
                const proficiencyValue = skill.level === 'Advanced' ? 94 : skill.level === 'Proficient' ? 84 : 76;
                return (
                  <div
                    key={skill.name}
                    className="cine-skill-card"
                    style={{ transitionDelay: `${idx * 0.04}s` }}
                  >
                    <i className={`${matchedIcon} cine-skill-icon`} />
                    <span className="cine-skill-name">{skill.name}</span>
                    <div className="cine-proficiency-bar">
                      <div
                        className="cine-proficiency-fill"
                        style={{ '--proficiency': `${proficiencyValue}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Scene02Craft;
