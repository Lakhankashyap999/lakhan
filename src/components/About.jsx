import React from 'react';
import lakhanPhoto from '../assets/lakhan.jpg';

const About = ({ personal }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-kicker">Background &amp; Philosophy</span>
          <h2 className="section-main-heading">Architecting Software With Purpose</h2>
          <p className="section-lead-subtitle">
            A developer who balances aesthetic frontend craftsmanship with scalable, production-tested backend services.
          </p>
        </div>

        <div className="pro-bento-grid">
          {/* Card 1: Large Core Bio with Real Portrait Photo */}
          <div className="bento-tile bento-bio-main">
            <div className="bento-badge-row">
              <span className="bento-tag"><i className="fas fa-user-astronaut"></i> Full Stack Mindset</span>
              <span className="bento-status-pill">Active Production Contributor</span>
            </div>

            <div className="bio-inner-flex">
              <div className="bio-avatar-frame">
                <img
                  src={lakhanPhoto}
                  alt="Lakhan Kashyap"
                  className="bio-photo-img"
                  loading="lazy"
                />
                <div className="avatar-corner-badge" title="Full Stack Developer">
                  <i className="fas fa-code"></i>
                </div>
              </div>

              <div className="bio-text-content">
                <h3>Engineering That Delivers Business Value</h3>
                <p>
                  {personal.about}
                </p>
                <p style={{ marginTop: '0.8rem' }}>
                  Whether it is architecting JWT-secured role-based authorization hierarchies for enterprise portals, tuning MongoDB aggregations for high concurrency, or crafting accessible, responsive web designs — I prioritize <strong>reliability, performance, and maintainability</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Current Company */}
          <div className="bento-tile bento-highlight-card">
            <div className="tile-icon-header">
              <div className="tile-icon-circle blue">
                <i className="fas fa-building"></i>
              </div>
              <span className="tile-subtext">Current Role</span>
            </div>
            <h4>Shankrai Private Limited</h4>
            <p className="tile-desc">
              Building scalable backend microservices, RESTful APIs, and React interfaces in production since Jan 2024.
            </p>
            <div className="tile-stat-footer">
              <span className="pulse-text">● Full-Time Production</span>
            </div>
          </div>

          {/* Card 3: Academics & Degrees */}
          <div className="bento-tile bento-highlight-card">
            <div className="tile-icon-header">
              <div className="tile-icon-circle purple">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <span className="tile-subtext">Academics</span>
            </div>
            <h4>Master of Computer Applications</h4>
            <p className="tile-desc">
              <strong>AKTU University</strong> (2024 — 2026, 68%) • <strong>BCA from CCSU</strong> (2021 — 2023, 70%).
            </p>
            <div className="tile-stat-footer">
              <span>Deep CS &amp; Algorithmic Foundations</span>
            </div>
          </div>

          {/* Card 4: Location & Work Mode */}
          <div className="bento-tile bento-highlight-card">
            <div className="tile-icon-header">
              <div className="tile-icon-circle green">
                <i className="fas fa-globe-asia"></i>
              </div>
              <span className="tile-subtext">Location &amp; Mobility</span>
            </div>
            <h4>India (Delhi NCR)</h4>
            <p className="tile-desc">
              Open to onsite roles in Tier-1 tech hubs, hybrid positions, and global remote opportunities across any timezone.
            </p>
            <div className="tile-stat-footer">
              <span style={{ color: '#00d4ff' }}>Ready to Relocate &amp; Onboard</span>
            </div>
          </div>

          {/* Card 5: Problem Solving & DSA */}
          <div className="bento-tile bento-highlight-card">
            <div className="tile-icon-header">
              <div className="tile-icon-circle amber">
                <i className="fas fa-brain"></i>
              </div>
              <span className="tile-subtext">Problem Solving</span>
            </div>
            <h4>200+ Algorithmic Challenges</h4>
            <p className="tile-desc">
              Extensive DSA training (Shreyans Coding School): Arrays, HashMaps, Trees, Graphs, Dynamic Programming, and Space-Time optimizations.
            </p>
            <div className="tile-stat-footer">
              <span>Optimized Big-O Mindset</span>
            </div>
          </div>

          {/* Card 6: Quote Banner */}
          <div className="bento-tile bento-quote-strip">
            <i className="fas fa-quote-left quote-watermark"></i>
            <div className="quote-body">
              <p className="quote-text">
                "Writing clean, maintainable software is an art of turning complex business friction into seamless, intuitive user interactions."
              </p>
              <span className="quote-author">— Lakhan Kashyap</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
