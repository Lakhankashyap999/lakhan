import { useState, useEffect } from 'react';

export function useSceneProgress(ref) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0 }
    );
    
    observer.observe(currentRef);

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentRef) {
            const rect = currentRef.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            const totalDistance = windowHeight + rect.height;
            const currentDistance = windowHeight - rect.top;
            
            let p = currentDistance / totalDistance;
            p = Math.max(0, Math.min(1, p));
            
            setProgress(p);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, isVisible]);

  return { progress, isVisible };
}
