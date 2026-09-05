import React from 'react';

const BackgroundEffects = () => {
  return (
    <div className="pure-css-bg-layer" aria-hidden="true">
      {/* 1. Ultra-clean static cyber dot matrix */}
      <div className="cyber-grid-static" />

      {/* 2. Zero-blur pure radial gradient ambient glows (100% GPU free, 0ms render) */}
      <div className="ambient-radial-glow" />
    </div>
  );
};

export default BackgroundEffects;
