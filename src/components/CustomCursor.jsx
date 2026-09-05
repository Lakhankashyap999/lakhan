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
    let isTouching = false;
    let isMouseDown = false;
    let fadeTimeout = null;
    let lastTouchTime = 0;

    const clearFade = () => {
      if (fadeTimeout) {
        clearTimeout(fadeTimeout);
        fadeTimeout = null;
      }
    };

    // Desktop Mouse Events
    const onMouseMove = (e) => {
      // Ignore synthetic mousemove events triggered by mobile touch
      if (Date.now() - lastTouchTime < 1000) return;

      clearFade();
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ringX = mouseX;
        ringY = mouseY;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      if (Date.now() - lastTouchTime < 1000) return;
      clearFade();
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onMouseDown = () => {
      if (Date.now() - lastTouchTime < 1000) return;
      isMouseDown = true;
      if (ringRef.current) ringRef.current.classList.add('cursor-clicked');
    };

    const onMouseUp = () => {
      if (Date.now() - lastTouchTime < 1000) return;
      isMouseDown = false;
      if (ringRef.current) ringRef.current.classList.remove('cursor-clicked');
    };

    // Mobile / Touch Events
    const onTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        lastTouchTime = Date.now();
        clearFade();
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;

        // Instantly snap ring and dot to touch location
        mouseX = touchX;
        mouseY = touchY;
        ringX = touchX;
        ringY = touchY;
        isTouching = true;
        isVisible = true;

        if (dotRef.current) {
          dotRef.current.style.opacity = '1';
          dotRef.current.style.transform = `translate3d(${touchX}px, ${touchY}px, 0)`;
        }
        if (ringRef.current) {
          ringRef.current.style.opacity = '1';
          ringRef.current.style.transform = `translate3d(${touchX}px, ${touchY}px, 0) scale(1.2)`;
          ringRef.current.classList.add('cursor-touch-active');
        }
      }
    };

    const onTouchMove = (e) => {
      if (e.touches && e.touches.length > 0) {
        lastTouchTime = Date.now();
        clearFade();
        isTouching = true;
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      lastTouchTime = Date.now();
      isTouching = false;
      if (ringRef.current) {
        ringRef.current.classList.remove('cursor-touch-active');
      }
      clearFade();
      // Gentle fade out after finger is released
      fadeTimeout = setTimeout(() => {
        if (!isTouching) {
          isVisible = false;
          if (dotRef.current) dotRef.current.style.opacity = '0';
          if (ringRef.current) ringRef.current.style.opacity = '0';
        }
      }, 450);
    };

    const onScroll = () => {
      // If user scrolls on mobile and is not touching, hide the cursor immediately
      if (Date.now() - lastTouchTime < 1200 && !isTouching) {
        isVisible = false;
        if (dotRef.current) dotRef.current.style.opacity = '0';
        if (ringRef.current) ringRef.current.style.opacity = '0';
      }
    };

    const onMouseOver = (e) => {
      if (isTouching || Date.now() - lastTouchTime < 1000) return;
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
      // Snappy and butter-smooth tracking: responsive on touch (0.48), smooth luxury on mouse
      const ease = isTouching ? 0.48 : (isHovering ? 0.28 : 0.2);
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (dotRef.current && isVisible) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current && isVisible) {
        const scale = isTouching
          ? 1.2
          : isMouseDown
          ? 0.85
          : isHovering
          ? (hoverType === 'card' ? 1.4 : 1.25)
          : 1;

        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;

        if (isHovering && !isTouching) {
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
    window.addEventListener('scroll', onScroll, { passive: true });
    document.body.addEventListener('mouseleave', onMouseLeave);

    // Touch listeners
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });

    animId = requestAnimationFrame(render);

    return () => {
      clearFade();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('scroll', onScroll);
      document.body.removeEventListener('mouseleave', onMouseLeave);
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
