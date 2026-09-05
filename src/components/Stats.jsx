import React, { useState, useEffect, useRef } from 'react';

const Stats = ({ stats }) => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const stepTime = 30;
            const totalSteps = duration / stepTime;
            const increment = end / totalSteps;

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[index] = end;
                  return copy;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const copy = [...prev];
                  copy[index] = Math.floor(start);
                  return copy;
                });
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [stats, hasAnimated]);

  return (
    <section className="stats" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <div className="stat-item" key={i}>
              <div className="stat-number">
                {counts[i]}
                {stat.plus && <span className="stat-plus">+</span>}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
