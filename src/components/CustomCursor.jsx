import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Disable on touch screens (mobile/tablet)
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouch(true);
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let hoverType = '';
    let isMouseDown = false;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => {
      isMouseDown = true;
      if (ringRef.current) ringRef.current.classList.add('cursor-clicked');
    };

    const onMouseUp = () => {
      isMouseDown = false;
      if (ringRef.current) ringRef.current.classList.remove('cursor-clicked');
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (target.closest('.pro-project-card') || target.closest('.bento-tile') || target.closest('.degree-card')) {
        isHovering = true;
        hoverType = 'card';
      } else if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.btn') ||
        target.closest('.tab-item') ||
        target.closest('.pill-btn') ||
        target.closest('.cat-btn') ||
        target.closest('.filter-btn')
      ) {
        isHovering = true;
        hoverType = 'link';
      } else {
        isHovering = false;
        hoverType = '';
      }
    };

    let animId;
    const render = () => {
      // Smooth lerp chasing for the ring
      const ease = isHovering ? 0.25 : 0.18;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

        if (isHovering) {
          if (hoverType === 'card') {
            ringRef.current.classList.add('cursor-card-hover');
            ringRef.current.classList.remove('cursor-link-hover');
            if (textRef.current) {
              textRef.current.innerText = 'EXPLORE';
              textRef.current.style.opacity = '1';
            }
          } else {
            ringRef.current.classList.add('cursor-link-hover');
            ringRef.current.classList.remove('cursor-card-hover');
            if (textRef.current) {
              textRef.current.innerText = '';
              textRef.current.style.opacity = '0';
            }
          }
        } else {
          ringRef.current.classList.remove('cursor-link-hover', 'cursor-card-hover');
          if (textRef.current) {
            textRef.current.innerText = '';
            textRef.current.style.opacity = '0';
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} className="cyber-cursor-dot" />
      <div ref={ringRef} className="cyber-cursor-ring">
        <span ref={textRef} className="cyber-cursor-label" />
      </div>
    </>
  );
};

export default CustomCursor;
