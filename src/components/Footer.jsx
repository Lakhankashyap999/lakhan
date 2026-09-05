import React from 'react';

const Footer = ({ personal }) => {
  return (
    <footer>
      <div className="container">
        <div className="footer-social">
          <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href={`tel:${personal.phone}`} aria-label="Phone">
            <i className="fas fa-phone"></i>
          </a>
        </div>

        <p className="footer-text">
          Designed &amp; Built with <span className="footer-heart">❤</span> by {personal.name}
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Lakhan Kashyap. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
