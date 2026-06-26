import React, { useState, useEffect, useRef } from 'react';

export const useCustomCursor = () => {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let mx = 0, my = 0, ox = 0, oy = 0, ix = 0, iy = 0;
    const outer = outerRef.current;
    const inner = innerRef.current;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      ox += (mx - ox) * 0.14;
      oy += (my - oy) * 0.14;
      ix += (mx - ix) * 0.28;
      iy += (my - iy) * 0.28;

      if (outer) {
        outer.style.left = ox + 'px';
        outer.style.top = oy + 'px';
      }
      if (inner) {
        inner.style.left = ix + 'px';
        inner.style.top = iy + 'px';
      }
      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return { outerRef, innerRef };
};

export const hiddenCursorElements = () => {
  if (typeof document === 'undefined') return;
  
  document.querySelectorAll('a, button, input, .sidebar-item, .dots span').forEach((el) => {
    el.style.cursor = 'none';
  });
};
