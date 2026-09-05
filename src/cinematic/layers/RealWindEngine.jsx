import React from 'react';

/**
 * RealWindEngine: Natural, organic breeze physics & atmospheric air movement
 * Real wind carries particles with undulating natural drift + gentle air shimmer.
 */
const RealWindEngine = ({ theme = 'golden', intensity = 'gentle' }) => {
  const particleCount = intensity === 'strong' ? 14 : 9;

  return (
    <div className={`cine-real-wind cine-wind-theme-${theme} cine-wind-level-${intensity}`}>
      {/* Soft atmospheric breeze shimmer wave */}
      <div className="cine-breeze-wave wave-1" />
      <div className="cine-breeze-wave wave-2" />

      {/* Wind-carried floating airborne motes & dust */}
      <div className="cine-wind-air-motes">
        {Array.from({ length: particleCount }).map((_, i) => (
          <div
            key={i}
            className={`cine-air-mote mote-${(i % 3) + 1}`}
            style={{
              top: `${18 + (i * 9) % 72}%`,
              animationDelay: `${(i * 0.7) % 6}s`,
              animationDuration: `${5.5 + (i % 4) * 1.5}s`,
              transform: `scale(${0.7 + (i % 3) * 0.3})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RealWindEngine;
