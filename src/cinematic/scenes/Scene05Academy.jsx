import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import RealWindEngine from '../layers/RealWindEngine';

const Scene05Academy = ({ isActive = true }) => {
  return (
    <section
      className={`cine-scene cine-scene-05 ${isActive ? 'is-active' : ''}`}
      data-scene="5"
    >
      {/* 4K Backdrop */}
      <div
        className="cine-scene-bg"
        style={{
          backgroundImage: 'url(/cinematic/scene05.jpg)',
        }}
      />

      {/* Floating Animated Magical Books */}
      <div className="cine-floating-book" style={{ top: '22%', right: '18%', animationDelay: '0s' }}>
        <i className="fas fa-book-open" style={{ fontSize: '2.2rem', color: '#fbbf24' }} />
      </div>
      <div className="cine-floating-book" style={{ top: '34%', left: '14%', animationDelay: '1.8s' }}>
        <i className="fas fa-book" style={{ fontSize: '1.8rem', color: '#fde68a' }} />
      </div>

      {/* Warm Golden Wind Motes */}
      <RealWindEngine theme="golden" intensity="gentle" />

      {/* Lightweight Golden Sparkles */}
      <div className="cine-sparkles">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="cine-sparkle"
            style={{
              left: `${(i * 12.3 + 3) % 100}%`,
              top: `${(i * 11.7 + 6) % 90}%`,
              animationDelay: `${(i * 0.5) % 4}s`,
            }}
          />
        ))}
      </div>

      <div className="cine-overlay cine-overlay-full" />

      <div className="cine-text-container">
        <span className="cine-chapter" style={{ color: '#fbbf24' }}>
          CHAPTER 05 • KNOWLEDGE
        </span>
        <h2 className="cine-title cine-title-sm">The Academy of Code</h2>
        <p className="cine-subtitle">
          Master's in Computer Applications (AKTU) • Algorithmic foundations & certifications
        </p>
      </div>

      <div className="cine-edu-cards">
        {(portfolioData.education || []).map((edu, idx) => {
          const focusTags = typeof edu.focus === 'string'
            ? edu.focus.split(',').map(s => s.trim())
            : Array.isArray(edu.focus)
            ? edu.focus
            : [];

          return (
            <div
              key={idx}
              className="cine-edu-card"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="cine-edu-icon">
                <i className={edu.icon || 'fas fa-graduation-cap'} />
              </div>
              <h3 className="cine-edu-degree">{edu.degree}</h3>
              <p className="cine-edu-institution">{edu.institution}</p>
              <p className="cine-edu-period">{edu.year || edu.period}</p>
              {edu.score && (
                <p className="cine-edu-score">
                  <i className="fas fa-star" /> Score: {edu.score}
                </p>
              )}
              {focusTags.length > 0 && (
                <div className="cine-edu-focus">
                  {focusTags.map((f) => (
                    <span key={f} className="cine-tech-badge cine-badge-warm">{f}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Certifications Floating Badges */}
      <div className="cine-certs">
        {(portfolioData.certifications || []).map((cert, idx) => {
          return (
            <div
              key={idx}
              className="cine-cert-badge"
              style={{ transitionDelay: `${0.3 + idx * 0.08}s` }}
            >
              <i className={cert.icon || 'fas fa-certificate'} />
              <span>{cert.title || cert.name}</span>
              <small>{cert.issuer}</small>
              {cert.credential && (
                <span style={{ fontSize: '0.65rem', opacity: 0.75, marginTop: '4px' }}>
                  {cert.credential}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Scene05Academy;
