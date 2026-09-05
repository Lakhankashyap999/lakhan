import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import RealisticClouds from '../layers/RealisticClouds';
import SoftSunlight from '../layers/SoftSunlight';
import RealWindEngine from '../layers/RealWindEngine';

const Scene03Journey = ({ isActive = true }) => {
  return (
    <section
      className={`cine-scene cine-scene-03 ${isActive ? 'is-active' : ''}`}
      data-scene="3"
    >
      {/* 4K Backdrop */}
      <div
        className="cine-scene-bg"
        style={{
          backgroundImage: 'url(/cinematic/scene03.jpg)',
        }}
      />

      {/* Sun glow over mountain path */}
      <SoftSunlight originX={36} originY={37} theme="sunrise" />

      {/* Photorealistic Drifting Sunrise Clouds */}
      <RealisticClouds theme="sunrise" opacity={0.65} />

      {/* Natural Pink Sakura Wind Breeze */}
      <RealWindEngine theme="pink" intensity="gentle" />

      {/* Lightweight Sakura Petals */}
      <div className="cine-petals">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="cine-petal"
            style={{
              left: `${(i * 9.5 + 4) % 100}%`,
              animationDelay: `${(i * 0.8) % 8}s`,
              animationDuration: `${7 + (i % 4) * 1.5}s`,
              opacity: 0.5 + (i % 3) * 0.15,
            }}
          />
        ))}
      </div>

      <div className="cine-overlay cine-overlay-full" />

      <div className="cine-text-container">
        <span className="cine-chapter" style={{ color: '#f472b6' }}>
          CHAPTER 03 • THE ODYSSEY
        </span>
        <h2 className="cine-title cine-title-sm">The Road Traveled</h2>
        <p className="cine-subtitle">
          Walking the path of production engineering • Real-world milestone track
        </p>
      </div>

      <div className="cine-timeline">
        {(portfolioData.experience || []).map((exp, idx) => {
          const pointsList = exp.points || exp.description || [];
          const stackList = exp.stack || exp.tech || [];
          return (
            <div
              key={idx}
              className="cine-milestone"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="cine-milestone-dot" />
              <div className="cine-milestone-card">
                <div className="cine-milestone-period">{exp.date || exp.period}</div>
                <h3 className="cine-milestone-company">{exp.company}</h3>
                <p className="cine-milestone-role">{exp.title || exp.role}</p>
                <ul className="cine-milestone-desc">
                  {pointsList.slice(0, 3).map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
                <div className="cine-milestone-tech">
                  {stackList.map((t) => (
                    <span key={t} className="cine-tech-badge">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Scene03Journey;
