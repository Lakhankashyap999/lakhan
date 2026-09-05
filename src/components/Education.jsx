import React from 'react';

const Education = ({ education, certifications, testimonials }) => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-kicker">Credentials & Mastery</span>
          <h2 className="section-main-heading">Education, Certifications & Recommendations</h2>
          <p className="section-lead-subtitle">
            Solid computer science academic foundation paired with rigorous hands-on software development credentials.
          </p>
        </div>

        <div className="academic-degrees-grid">
          {education.map((edu, idx) => (
            <div className="degree-card" key={idx}>
              <div className="degree-header-flex">
                <div className="degree-icon-box">
                  <i className={edu.icon}></i>
                </div>
                <div className="degree-score-badge">
                  <span>Score: {edu.score}</span>
                </div>
              </div>

              <h3>{edu.degree}</h3>
              <h4 className="institution-title">{edu.institution}</h4>
              <span className="degree-year-tag">{edu.year}</span>

              {edu.focus && (
                <p className="degree-focus-text">
                  <strong>Focus:</strong> {edu.focus}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="certifications-showcase-container">
          <h3 className="subsection-title">
            <i className="fas fa-award" style={{ color: 'var(--accent)', marginRight: '8px' }}></i>
            Industry Certifications & Training
          </h3>

          <div className="cert-cards-grid">
            {certifications.map((cert, idx) => (
              <div className="cert-card-item" key={idx}>
                <div className="cert-icon-col">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-text-col">
                  <h4>{cert.title}</h4>
                  <span className="cert-issuer-badge">{cert.issuer}</span>
                  <p className="cert-credential-desc">{cert.credential}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {testimonials && testimonials.length > 0 && (
          <div className="testimonials-container">
            <h3 className="subsection-title">
              <i className="fas fa-quote-left" style={{ color: 'var(--accent)', marginRight: '8px' }}></i>
              Peer & Leadership Endorsements
            </h3>

            <div className="testimonials-grid">
              {testimonials.map((t, idx) => (
                <div className="testimonial-card" key={idx}>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, s) => (
                      <i className="fas fa-star" key={s}></i>
                    ))}
                  </div>
                  <p className="testimonial-quote">"{t.quote}"</p>
                  <div className="testimonial-author-row">
                    <div className="author-avatar-placeholder">
                      <i className="fas fa-user-check"></i>
                    </div>
                    <div>
                      <h5 className="author-name">{t.name}</h5>
                      <span className="author-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
