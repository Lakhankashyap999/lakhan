import React, { useState } from 'react';

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'live'
    ? projects.filter(p => p.badge.includes('Live'))
    : projects.filter(p => p.category.toLowerCase().includes(filter));

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-kicker">Engineered For Production</span>
          <h2 className="section-main-heading">Featured Engineering Projects</h2>
          <p className="section-lead-subtitle">
            A showcase of live consumer products, distributed full-stack platforms, and developer tooling built from the ground up.
          </p>

          <div className="project-filter-tabs">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Projects ({projects.length})
            </button>
            <button
              className={`filter-btn ${filter === 'live' ? 'active' : ''}`}
              onClick={() => setFilter('live')}
            >
              <span className="pulsing-live-dot"></span> Live Products
            </button>
            <button
              className={`filter-btn ${filter === 'full stack' ? 'active' : ''}`}
              onClick={() => setFilter('full stack')}
            >
              Full Stack Systems
            </button>
          </div>
        </div>

        <div className="projects-showcase-grid">
          {filteredProjects.map((project) => (
            <div
              className="pro-project-card"
              key={project.id}
            >
              <div className="card-browser-header">
                <div className="browser-dots">
                  <span className="b-dot red"></span>
                  <span className="b-dot yellow"></span>
                  <span className="b-dot green"></span>
                </div>
                <div className="browser-url-bar">
                  <i className="fas fa-lock" style={{ fontSize: '0.7rem', color: '#00d4ff', marginRight: '6px' }}></i>
                  <span>{project.url}</span>
                </div>
                <span className="browser-category-badge">{project.badge}</span>
              </div>

              <div className="card-body-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                </div>

                <p className="project-lead-desc">{project.description}</p>

                {project.highlights && (
                  <div className="engineering-highlights-box">
                    <span className="highlights-title"><i className="fas fa-microchip"></i> Engineering Highlights:</span>
                    <ul className="highlights-list">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="tech-stack-pills">
                  {project.tech.map((t, tIdx) => (
                    <span className="tech-pill-badge" key={tIdx}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card-footer">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-card-action primary"
                    >
                      <span>Launch Live Site</span>
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-card-action secondary"
                  >
                    <i className="fab fa-github"></i>
                    <span>Repository</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
