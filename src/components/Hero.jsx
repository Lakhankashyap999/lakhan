import React, { useState, useEffect } from 'react';
import lakhanPhoto from '../assets/lakhan.jpg';

const phrases = [
  'Full Stack Engineer',
  'React.js & Node Developer',
  'MERN Stack Architect',
  'Backend & API Specialist',
  'Cloud Systems Builder'
];


const Hero = ({ personal, onEnterCinematic }) => {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('config');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const currentFullText = phrases[phraseIndex];
    let typingSpeed = isDeleting ? 35 : 65;

    if (!isDeleting && displayText === currentFullText) {
      // Pause on completed word
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(pauseTimeout);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentFullText.substring(0, prev.length - 1);
        } else {
          return currentFullText.substring(0, prev.length + 1);
        }
      });
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  const handleCopyCode = () => {
    const code = `const engineer = {
  name: "Lakhan Kashyap",
  role: "Full Stack Developer",
  experience: "2+ Years (Shankrai Pvt Ltd + Freelance)",
  coreStack: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
  status: "Available for Full-time Roles",
  contact: "lakhankashyap795@gmail.com"
};`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-split-grid">
          {/* Left Column: Hero Headline & CTA */}
          <div className="hero-left-content">
            <div className="hero-status-row">
              <div className="hero-avatar-pill">
                <img src={lakhanPhoto} alt="Lakhan Kashyap" className="hero-mini-photo" />
                <span className="mini-photo-status"></span>
              </div>
              <div className="status-badge-radar">
                <span className="radar-dot"></span>
                <span className="status-text">{personal.availability || 'Available for Full-time Roles'}</span>
              </div>
            </div>

            <h1 className="hero-main-title">
              Hi, I'm <span className="gradient-text-shimmer">{personal.name}</span>
            </h1>

            {/* Stable fixed-height container to guarantee ZERO layout shifts */}
            <div className="hero-subtitle-fixed-wrapper">
              <span className="code-tag">&lt;role&gt;</span>
              <div className="hero-subtitle-box">
                <span className="typed-text">{displayText}</span>
                <span className="typing-caret">|</span>
              </div>
              <span className="code-tag">&lt;/role&gt;</span>
            </div>

            <p className="hero-lead-description">
              {personal.description}
            </p>

            <div className="hero-trust-metrics">
              <div className="trust-pill">
                <i className="fas fa-building" style={{ color: 'var(--accent)' }}></i>
                <span>Current: <strong>Shankrai Pvt Ltd</strong></span>
              </div>
              <div className="trust-pill">
                <i className="fas fa-graduation-cap" style={{ color: 'var(--accent)' }}></i>
                <span>Degree: <strong>MCA (AKTU)</strong></span>
              </div>
            </div>

            <div className="hero-actions-group">
              <a href="#projects" className="btn btn-primary btn-glow">
                <span>View Flagship Projects</span>
                <i className="fas fa-arrow-right"></i>
              </a>
              <button
                type="button"
                onClick={onEnterCinematic}
                className="btn btn-cinematic-hero"
                title="Immerse in interactive anime-style journey"
              >
                <i className="fas fa-clapperboard"></i>
                <span>View in Cinematic View</span>
                <span className="hero-cine-badge">NEW</span>
              </button>
              <a href="#contact" className="btn btn-outline">
                <span>Get In Touch</span>
                <i className="fas fa-paper-plane"></i>
              </a>
            </div>

            <div className="hero-social-bar">
              <span className="social-bar-label">Connect:</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="social-pill" aria-label="GitHub">
                <i className="fab fa-github"></i> <span>GitHub</span>
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="social-pill" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i> <span>LinkedIn</span>
              </a>
              <a href={`mailto:${personal.email}`} className="social-pill" aria-label="Email">
                <i className="fas fa-envelope"></i> <span>Email</span>
              </a>
              <a href={`tel:${personal.phone}`} className="social-pill" aria-label="Phone">
                <i className="fas fa-phone-alt"></i> <span>Call</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive IDE Mockup */}
          <div className="hero-right-code-window">
            <div className="code-editor-card">
              <div className="editor-top-bar">
                <div className="window-controls">
                  <span className="control-btn close"></span>
                  <span className="control-btn minimize"></span>
                  <span className="control-btn maximize"></span>
                </div>

                <div className="editor-tabs">
                  <button
                    className={`tab-item ${activeTab === 'config' ? 'active' : ''}`}
                    onClick={() => setActiveTab('config')}
                  >
                    <i className="fab fa-js-square" style={{ color: '#f7df1e', marginRight: '6px' }}></i>
                    Lakhan.config.ts
                  </button>
                  <button
                    className={`tab-item ${activeTab === 'stack' ? 'active' : ''}`}
                    onClick={() => setActiveTab('stack')}
                  >
                    <i className="fab fa-react" style={{ color: '#61dafb', marginRight: '6px' }}></i>
                    Architecture.json
                  </button>
                </div>

                <button
                  className="copy-snippet-btn"
                  onClick={handleCopyCode}
                  title="Copy code snippet"
                >
                  <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="editor-code-body">
                {activeTab === 'config' ? (
                  <pre className="code-pre">
                    <code>
                      <span className="code-keyword">export const</span> <span className="code-var">engineer</span>: <span className="code-type">DeveloperProfile</span> = &#123;{'\n'}
                      {'  '}<span className="code-prop">name</span>: <span className="code-string">"{personal.name}"</span>,{'\n'}
                      {'  '}<span className="code-prop">role</span>: <span className="code-string">"Full Stack Software Engineer"</span>,{'\n'}
                      {'  '}<span className="code-prop">experience</span>: <span className="code-string">"Production (Shankrai) + Freelance"</span>,{'\n'}
                      {'  '}<span className="code-prop">education</span>: &#123;{'\n'}
                      {'    '}<span className="code-prop">masters</span>: <span className="code-string">"MCA - AKTU (2024-2026)"</span>,{'\n'}
                      {'    '}<span className="code-prop">bachelors</span>: <span className="code-string">"BCA - CCSU (2021-2023)"</span>{'\n'}
                      {'  '}&#125;,{'\n'}
                      {'  '}<span className="code-prop">status</span>: <span className="code-string">"Open to High-Impact Opportunities"</span>,{'\n'}
                      {'  '}<span className="code-prop">coreCompetencies</span>: [{'\n'}
                      {'    '}<span className="code-string">"Scalable REST Microservices"</span>,{'\n'}
                      {'    '}<span className="code-string">"Dynamic React.js UI Architecture"</span>,{'\n'}
                      {'    '}<span className="code-string">"JWT & Role-Based Access Control (RBAC)"</span>,{'\n'}
                      {'    '}<span className="code-string">"MongoDB & PostgreSQL Optimization"</span>{'\n'}
                      {'  '}]{'\n'}
                      &#125;;
                    </code>
                  </pre>
                ) : (
                  <pre className="code-pre">
                    <code>
                      &#123;{'\n'}
                      {'  '}<span className="code-prop">"system"</span>: &#123;{'\n'}
                      {'    '}<span className="code-prop">"clientLayer"</span>: <span className="code-string">"React.js, Redux, Tailwind, Vite"</span>,{'\n'}
                      {'    '}<span className="code-prop">"apiLayer"</span>: <span className="code-string">"Node.js, Express.js, JWT, RateLimiting"</span>,{'\n'}
                      {'    '}<span className="code-prop">"dataLayer"</span>: <span className="code-string">"MongoDB Aggregations, PostgreSQL, Redis"</span>,{'\n'}
                      {'    '}<span className="code-prop">"cloudDevOps"</span>: <span className="code-string">"AWS EC2/S3, Docker, GitHub Actions"</span>,{'\n'}
                      {'    '}<span className="code-prop">"monitoring"</span>: <span className="code-string">"Postman, Linux Daemons, Uptime"</span>{'\n'}
                      {'  '}&#125;,{'\n'}
                      {'  '}<span className="code-prop">"metrics"</span>: &#123;{'\n'}
                      {'    '}<span className="code-prop">"activeSaaSUsers"</span>: <span className="code-num">500</span>,{'\n'}
                      {'    '}<span className="code-prop">"dsaSolved"</span>: <span className="code-num">200</span>{'\n'}
                      {'  '}&#125;{'\n'}
                      &#125;
                    </code>
                  </pre>
                )}
              </div>

              <div className="editor-status-bar">
                <span className="status-item"><i className="fas fa-check-circle" style={{ color: '#00d4ff' }}></i> TypeScript Ready</span>
                <span className="status-item">UTF-8</span>
                <span className="status-item">Production Mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
