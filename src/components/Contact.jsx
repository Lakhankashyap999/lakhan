import React, { useState } from 'react';

const Contact = ({ personal }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setStatus('');
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header-centered">
          <span className="section-kicker">Let's Connect</span>
          <h2 className="section-main-heading">Initiate A Conversation</h2>
          <p className="section-lead-subtitle">
            Whether you are recruiting for a high-impact engineering role, discussing an architecture consultation, or exploring collaboration — my inbox is always open.
          </p>
        </div>

        <div className="contact-split-layout">
          {/* Left Column: Direct channels & Quick Connect */}
          <div className="contact-info-panel">
            <div className="contact-panel-card">
              <h3>Direct Communication Channels</h3>
              <p className="panel-intro-text">
                Feel free to reach out via email, phone, or LinkedIn. I typically reply within 12 hours.
              </p>

              <div className="communication-channels-list">
                <div className="channel-item">
                  <div className="channel-icon-circle">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Email Address</span>
                    <a href={`mailto:${personal.email}`} className="channel-value">{personal.email}</a>
                  </div>
                  <button
                    className="copy-channel-btn"
                    onClick={handleCopyEmail}
                    title="Copy Email"
                  >
                    <i className={`fas ${copiedEmail ? 'fa-check' : 'fa-copy'}`}></i>
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                <div className="channel-item">
                  <div className="channel-icon-circle">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">Phone &amp; WhatsApp</span>
                    <a href={`tel:${personal.phone}`} className="channel-value">{personal.phone}</a>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon-circle">
                    <i className="fab fa-linkedin-in"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">LinkedIn Profile</span>
                    <a href={personal.linkedin} target="_blank" rel="noreferrer" className="channel-value">linkedin.com/in/lakhan-kashyap-fullstack</a>
                  </div>
                </div>

                <div className="channel-item">
                  <div className="channel-icon-circle">
                    <i className="fab fa-github"></i>
                  </div>
                  <div className="channel-details">
                    <span className="channel-label">GitHub Repositories</span>
                    <a href={personal.github} target="_blank" rel="noreferrer" className="channel-value">github.com/Lakhankashyap999</a>
                  </div>
                </div>
              </div>

              <div className="recruiter-availability-card">
                <div className="avail-header">
                  <span className="avail-radar-dot"></span>
                  <h4>Recruitment Status: Ready to Join</h4>
                </div>
                <p>
                  <strong>Notice Period:</strong> Immediate / Minimal Notice<br />
                  <strong>Preferred Roles:</strong> Full Stack Software Engineer, Frontend Engineer, Backend Developer
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-panel">
            <form className="pro-contact-form" onSubmit={handleSubmit}>
              <div className="form-header-bar">
                <h4>Send a Direct Message</h4>
                <span className="form-subtitle-tag">Encrypted &amp; Direct to Inbox</span>
              </div>

              <div className="form-grid-row">
                <div className="pro-form-group">
                  <label htmlFor="name">Your Name <span className="req-star">*</span></label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Priyanshu Sharma"
                    required
                  />
                </div>

                <div className="pro-form-group">
                  <label htmlFor="email">Work Email <span className="req-star">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="priyanshu@company.com"
                    required
                  />
                </div>
              </div>

              <div className="pro-form-group">
                <label htmlFor="company">Company / Organization (Optional)</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Google, Microsoft, Wipro, Fintech Startup"
                />
              </div>

              <div className="pro-form-group">
                <label htmlFor="message">Opportunity Details / Message <span className="req-star">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Lakhan, we reviewed your projects (MyToolboxs.online, E-Commerce, etc.) and would love to invite you for an interview regarding a Full Stack Engineer position..."
                  required
                ></textarea>
              </div>

              {status === 'success' ? (
                <div className="form-notification success">
                  <i className="fas fa-check-circle"></i>
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. Lakhan will get back to you promptly.</p>
                  </div>
                </div>
              ) : status === 'error' ? (
                <div className="form-notification error">
                  <i className="fas fa-exclamation-triangle"></i>
                  <span>Please ensure all required fields are filled out.</span>
                </div>
              ) : null}

              <button type="submit" className="btn btn-primary btn-submit-message">
                <span>Dispatch Message</span>
                <i className="fas fa-paper-plane" style={{ marginLeft: '8px' }}></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
