import React from 'react';

/**
 * SoftSunlight: Zero-cost realistic sun glow & soft natural light beams
 * 100% GPU-friendly using pure radial & conic-like soft gradients without clip-path or blur.
 */
const SoftSunlight = ({ originX = 50, originY = 50, theme = 'sunset' }) => {
  return (
    <div className={`cine-soft-sunlight cine-sun-theme-${theme}`}>
      {/* Radiant Sun Glow Core */}
      <div
        className="cine-sun-radiance"
        style={{
          left: `${originX}%`,
          top: `${originY}%`,
        }}
      />

      {/* Gentle Natural Light Fan */}
      <div
        className="cine-sun-light-fan"
        style={{
          left: `${originX}%`,
          top: `${originY}%`,
        }}
      />
    </div>
  );
};

export default SoftSunlight;
