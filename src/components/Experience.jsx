import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-kicker">Career Trajectory</span>
          <h2 className="section-main-heading">Work Experience & Industry Impact</h2>
          <p className="section-lead-subtitle">
            Demonstrated track record of shipping production features, designing REST architectures, and collaborating in fast-paced software environments.
          </p>
        </div>

        <div className="pro-timeline-container">
          {experience.map((item, idx) => (
            <div className="timeline-block" key={idx}>
              <div className="timeline-marker">
                <div className="marker-core"></div>
                <div className="marker-ring"></div>
              </div>

              <div className="timeline-card-content">
                <div className="card-top-meta">
                  <div className="title-company-group">
                    <h3 className="role-title">{item.title}</h3>
                    <div className="company-badge-row">
                      <span className="company-name">{item.company}</span>
                      <span className="job-type-pill">{item.type}</span>
                      <span className="location-pill"><i className="fas fa-map-pin"></i> {item.location}</span>
                    </div>
                  </div>
                  <span className="duration-pill">{item.date}</span>
                </div>

                <ul className="achievements-bullet-list">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <span className="bullet-indicator">▹</span>
                      <span className="bullet-text">{pt}</span>
                    </li>
                  ))}
                </ul>

                <div className="experience-tech-row">
                  <span className="stack-label">Technologies Applied:</span>
                  <div className="stack-tags-group">
                    {item.stack && item.stack.map((tech, tIdx) => (
                      <span className="exp-tech-tag" key={tIdx}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
