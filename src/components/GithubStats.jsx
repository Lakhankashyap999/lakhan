import React, { useState } from 'react';

const GithubStats = ({ theme }) => {
  const [imgError1, setImgError1] = useState(false);
  const [imgError2, setImgError2] = useState(false);

  const username = "Lakhankashyap999";
  const ghTheme = theme === 'light' ? 'default' : 'radical';

  // Realistic contribution map matrix (7 days x 16 weeks)
  const weeks = Array.from({ length: 18 }, (_, wIndex) => 
    Array.from({ length: 7 }, (_, dIndex) => {
      // Deterministic pseudo-random pattern based on index
      const val = (wIndex * 7 + dIndex * 13) % 10;
      if (val > 7) return 3; // high
      if (val > 4) return 2; // medium
      if (val > 2) return 1; // low
      return 0; // empty
    })
  );

  const languages = [
    { name: "JavaScript", percent: 45, color: "#f7df1e" },
    { name: "TypeScript", percent: 25, color: "#3178c6" },
    { name: "React / HTML5", percent: 18, color: "#61dafb" },
    { name: "CSS3 / Node.js", percent: 12, color: "#68a063" }
  ];

  return (
    <section className="github-section" id="github-activity">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-kicker">Open Source &amp; Git</span>
          <h2 className="section-main-heading">GitHub Activity &amp; Contributions</h2>
          <p className="section-lead-subtitle">
            Consistent coding discipline and open-source version control activity on GitHub.
          </p>
        </div>

        {/* Dynamic Dual Cards or High-End Native GitHub Showcase */}
        <div className="github-native-dashboard">
          {/* Top Profile Summary Bar */}
          <div className="gh-dashboard-header">
            <div className="gh-user-badge">
              <div className="gh-avatar-circle">
                <i className="fab fa-github"></i>
              </div>
              <div>
                <h3 className="gh-username">@{username}</h3>
                <span className="gh-bio-sub">Full Stack Developer • Active Contributor</span>
              </div>
            </div>

            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline gh-profile-link-btn"
            >
              <i className="fab fa-github"></i>
              <span>View GitHub Profile</span>
              <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.8rem', marginLeft: '4px' }}></i>
            </a>
          </div>

          {/* Quick Metrics Cards */}
          <div className="gh-metrics-row">
            <div className="gh-metric-card">
              <span className="gh-metric-label"><i className="fas fa-code-commit"></i> Total Contributions</span>
              <span className="gh-metric-val">450+</span>
              <span className="gh-metric-sub">Over the past year</span>
            </div>
            <div className="gh-metric-card">
              <span className="gh-metric-label"><i className="fas fa-book-bookmark"></i> Repositories</span>
              <span className="gh-metric-val">15+</span>
              <span className="gh-metric-sub">Public &amp; Production</span>
            </div>
            <div className="gh-metric-card">
              <span className="gh-metric-label"><i className="fas fa-fire"></i> Coding Consistency</span>
              <span className="gh-metric-val">94%</span>
              <span className="gh-metric-sub">Active Weekly Cadence</span>
            </div>
            <div className="gh-metric-card">
              <span className="gh-metric-label"><i className="fas fa-code-branch"></i> Pull Requests</span>
              <span className="gh-metric-val">35+</span>
              <span className="gh-metric-sub">Merged &amp; Deployed</span>
            </div>
          </div>

          {/* Contribution Heatmap Grid Simulation */}
          <div className="gh-heatmap-wrapper">
            <div className="gh-heatmap-header">
              <span className="heatmap-title">Contribution Activity Graph</span>
              <div className="heatmap-legend">
                <span className="legend-label">Less</span>
                <span className="legend-cell lvl-0"></span>
                <span className="legend-cell lvl-1"></span>
                <span className="legend-cell lvl-2"></span>
                <span className="legend-cell lvl-3"></span>
                <span className="legend-label">More</span>
              </div>
            </div>

            <div className="heatmap-grid-scroll">
              <div className="heatmap-grid">
                {weeks.map((week, wIdx) => (
                  <div className="heatmap-col" key={wIdx}>
                    {week.map((lvl, dIdx) => (
                      <div
                        className={`heatmap-cell lvl-${lvl}`}
                        key={dIdx}
                        title={`Activity Level: ${lvl}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Languages breakdown bar */}
          <div className="gh-languages-card">
            <h4 className="languages-title">Most Frequent Languages</h4>
            <div className="lang-progress-multi">
              {languages.map((l, i) => (
                <div
                  key={i}
                  className="lang-progress-segment"
                  style={{ width: `${l.percent}%`, backgroundColor: l.color }}
                  title={`${l.name}: ${l.percent}%`}
                />
              ))}
            </div>
            <div className="lang-legend-row">
              {languages.map((l, i) => (
                <div className="lang-legend-item" key={i}>
                  <span className="lang-color-dot" style={{ backgroundColor: l.color }}></span>
                  <span className="lang-name">{l.name}</span>
                  <span className="lang-percent">{l.percent}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* External SVG fallback/embed if accessible */}
          {(!imgError1 || !imgError2) && (
            <div className="github-stats-svg-row">
              {!imgError1 && (
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${ghTheme}&hide_border=true&bg_color=${theme === 'light' ? 'ffffff' : '0D1117'}`}
                  alt="GitHub Stats Badge"
                  onError={() => setImgError1(true)}
                  className="gh-stat-img"
                  loading="lazy"
                />
              )}
              {!imgError2 && (
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${ghTheme}&hide_border=true&bg_color=${theme === 'light' ? 'ffffff' : '0D1117'}`}
                  alt="Top Languages Badge"
                  onError={() => setImgError2(true)}
                  className="gh-stat-img"
                  loading="lazy"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
