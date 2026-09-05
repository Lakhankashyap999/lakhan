import React, { useState } from 'react';

const Skills = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const displayedCategories = activeCategory === 'all'
    ? skills.categories
    : skills.categories.filter(c => c.title.toLowerCase().includes(activeCategory));

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-kicker">Technical Arsenal</span>
          <h2 className="section-main-heading">Skills, Frameworks & Infrastructure</h2>
          <p className="section-lead-subtitle">
            A battle-tested technology stack focused on high concurrency, clean architectural separation, and seamless developer experience.
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-infinite-wrapper">
        <div className="marquee-sliding-track right">
          {skills.marquee1.concat(skills.marquee1).map((item, idx) => (
            <div className="marquee-pill-card" key={idx}>
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 */}
      <div className="marquee-infinite-wrapper">
        <div className="marquee-sliding-track left">
          {skills.marquee2.concat(skills.marquee2).map((item, idx) => (
            <div className="marquee-pill-card" key={idx}>
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: '3.5rem' }}>
        <div className="category-filter-buttons">
          <button
            className={`cat-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Disciplines
          </button>
          <button
            className={`cat-btn ${activeCategory === 'frontend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('frontend')}
          >
            Frontend & UI
          </button>
          <button
            className={`cat-btn ${activeCategory === 'backend' ? 'active' : ''}`}
            onClick={() => setActiveCategory('backend')}
          >
            Backend & Systems
          </button>
          <button
            className={`cat-btn ${activeCategory === 'cloud' ? 'active' : ''}`}
            onClick={() => setActiveCategory('cloud')}
          >
            Cloud & DevOps
          </button>
        </div>

        <div className="skills-disciplines-grid">
          {displayedCategories.map((category, idx) => (
            <div className="skill-discipline-card" key={idx}>
              <div className="discipline-header">
                <div className="discipline-icon-box">
                  <i className={category.icon}></i>
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="discipline-skills-list">
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-item-row" key={sIdx}>
                    <div className="skill-meta-left">
                      <i className="fas fa-check-circle" style={{ color: 'var(--accent)', fontSize: '0.85rem' }}></i>
                      <span className="skill-name-text">{skill.name}</span>
                    </div>
                    <span className={`skill-level-badge ${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
