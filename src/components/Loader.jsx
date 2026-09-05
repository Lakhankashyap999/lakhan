import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const name = "LAKHAN KASHYAP";

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setFading(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 600);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className={`loader ${fading ? 'loaded' : ''}`} style={{
      opacity: fading ? 0 : 1,
      visibility: fading ? 'hidden' : 'visible',
      transition: 'opacity 0.6s ease, visibility 0.6s ease'
    }}>
      <div className="loader-text">
        {name.split('').map((char, index) => (
          <span
            key={index}
            style={{
              display: 'inline-block',
              animation: `fadeInDown 0.5s ease forwards ${index * 0.05}s`,
              opacity: 0,
              minWidth: char === ' ' ? '0.5rem' : 'auto'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>
      <div className="loader-bar-container">
        <div className="loader-bar" style={{ width: `${progress}%`, transition: 'width 0.1s linear' }}></div>
      </div>
    </div>
  );
};

export default Loader;
