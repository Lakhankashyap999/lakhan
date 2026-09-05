import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let hoverType = '';
    let isVisible = false;

    const setPosition = (x, y) => {
      mouseX = x;
      mouseY = y;
      if (!isVisible) {
        isVisible = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    // Desktop Mouse Events
    const onMouseMove = (e) => {
      setPosition(e.clientX, e.clientY);
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.classList.add('cursor-clicked');
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.classList.remove('cursor-clicked');
    };

    // Mobile / Touch Events
    const onTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        setPosition(e.touches[0].clientX, e.touches[0].clientY);
        if (ringRef.current) ringRef.current.classList.add('cursor-touch-active');
      }
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        setPosition(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onTouchEnd = () => {
      if (ringRef.current) ringRef.current.classList.remove('cursor-touch-active');
      // Gentle fade out when touch is lifted
      setTimeout(() => {
        isVisible = false;
        if (dotRef.current) dotRef.current.style.opacity = '0';
        if (ringRef.current) ringRef.current.style.opacity = '0';
      }, 600);
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
      const ease = isHovering ? 0.28 : 0.2;
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

    // Touch listeners
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
      cancelAnimationFrame(animId);
    };
  }, []);

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
