import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      if (dot.current) dot.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`;
      if (ring.current) ring.current.style.transform = `translate(${x - 20}px, ${y - 20}px)`;
    };

    const onHover = () => {
      if (ring.current) {
        ring.current.style.width = '56px';
        ring.current.style.height = '56px';
        ring.current.style.borderColor = '#D4AF37';
        ring.current.style.background = 'rgba(212, 175, 55, 0.08)';
      }
    };
    const onLeave = () => {
      if (ring.current) {
        ring.current.style.width = '40px';
        ring.current.style.height = '40px';
        ring.current.style.borderColor = 'rgba(212, 175, 55, 0.4)';
        ring.current.style.background = 'transparent';
      }
    };

    window.addEventListener('mousemove', moveCursor);

    const interactives = document.querySelectorAll('a, button, [role="button"], input, textarea');
    interactives.forEach(el => {
      el.addEventListener('mouseenter', onHover);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onHover);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        className="custom-cursor-ring"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(212, 175, 55, 0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'transform 0.1s ease-out, width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease',
        }}
      />
      <div
        ref={dot}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          background: '#D4AF37',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'transform 0.04s linear',
        }}
      />
    </>
  );
}
