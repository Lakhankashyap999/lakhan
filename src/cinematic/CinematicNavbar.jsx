import React from 'react';

const CinematicNavbar = ({ onExitCinematic, activeScene, totalScenes = 6 }) => {
  const scrollToScene = (sceneNum) => {
    const el = document.querySelector(`[data-scene="${sceneNum}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="cine-navbar">
      <button className="cine-back-btn" onClick={onExitCinematic}>
        <i className="fas fa-arrow-left" />
        <span>Back to Normal Portfolio</span>
      </button>

      <div className="cine-scene-indicator-pill">
        <span className="cine-scene-pill-text">Scene {activeScene} / {totalScenes}</span>
        <div className="cine-scene-dots">
          {Array.from({ length: totalScenes }).map((_, i) => (
            <button
              key={i}
              type="button"
              className={`cine-dot ${activeScene === i + 1 ? 'active' : ''}`}
              onClick={() => scrollToScene(i + 1)}
              title={`Jump to Scene ${i + 1}`}
              aria-label={`Jump to Scene ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CinematicNavbar;
