import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import RealWindEngine from '../layers/RealWindEngine';

const Scene04Creations = ({ isActive = true }) => {
  return (
    <section
      className={`cine-scene cine-scene-04 ${isActive ? 'is-active' : ''}`}
      data-scene="4"
    >
      {/* 4K Backdrop */}
      <div
        className="cine-scene-bg"
        style={{
          backgroundImage: 'url(/cinematic/scene04.jpg)',
        }}
      />

      {/* Rotating Hologram Energy Hub */}
      <div className="cine-lab-holo-node" style={{ top: '38%', left: '50%' }} />

      {/* Laser Scanbeam */}
      <div className="cine-holo-scanbeam" />

      {/* Tech Cyan Wind Motes */}
      <RealWindEngine theme="cyan" intensity="gentle" />

      <div className="cine-overlay cine-overlay-full" />

      <div className="cine-text-container">
        <span className="cine-chapter" style={{ color: '#c084fc' }}>
          CHAPTER 04 • INNOVATION
        </span>
        <h2 className="cine-title cine-title-sm">The Creations & Lab</h2>
        <p className="cine-subtitle">
          Constructing live products, web utility engines & full-stack dashboards
        </p>
      </div>

      <div className="cine-projects-grid">
        {(portfolioData.projects || []).map((project, idx) => {
          const projectTitle = project.title || project.name;
          const highlights = project.highlights || [];
          const techList = project.tech || [];
          const projectUrl = project.liveLink || project.url || project.link;

          return (
            <div
              key={project.id || idx}
              className="cine-project-card"
              style={{ transitionDelay: `${idx * 0.12}s` }}
            >
              <div className="cine-project-header">
                <i className="fas fa-cube cine-project-icon" />
                <h3 className="cine-project-title">{projectTitle}</h3>
              </div>
              <p className="cine-project-desc">{project.description}</p>
              {highlights.length > 0 && (
                <ul className="cine-project-highlights">
                  {highlights.slice(0, 2).map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
              <div className="cine-project-tech">
                {techList.map((t) => (
                  <span key={t} className="cine-tech-badge">{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                {projectUrl && (
                  <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="cine-project-link">
                    <span>Live Demo</span>
                    <i className="fas fa-external-link-alt" style={{ fontSize: '0.7rem' }} />
                  </a>
                )}
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="cine-project-link" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)' }}>
                    <i className="fab fa-github" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Scene04Creations;
