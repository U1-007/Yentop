import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fluidConfig = {
      IMMEDIATE: false,
      TRIGGER: 'hover',
      SIM_RESOLUTION: 128,
      DYE_RESOLUTION: 1024,
      DENSITY_DISSIPATION: 0.9,
      VELOCITY_DISSIPATION: 0.2,
      PRESSURE: 0.8,
      PRESSURE_ITERATIONS: 20,
      CURL: 4,
      SPLAT_RADIUS: 0.35,
      SPLAT_FORCE: 5000,
      COLORFUL: false,
      SPLAT_COLOR: { r: 1.0, g: 0.72, b: 0.05 },
      SHADING: true,
      BACK_COLOR: { r: 0, g: 0, b: 0 },
      BLOOM: true,
      BLOOM_ITERATIONS: 8,
      BLOOM_RESOLUTION: 256,
      BLOOM_INTENSITY: 1.2,
      BLOOM_THRESHOLD: 0.3,
      SUNRAYS: true,
      SUNRAYS_WEIGHT: 1.2,
    };

    if (document.querySelector('script[src*="webgl-fluid"]')) {
      if (window.WebGLFluid && canvasRef.current) {
        window.WebGLFluid(canvasRef.current, fluidConfig);
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/webgl-fluid';
    script.async = true;
    script.onload = () => {
      if (window.WebGLFluid && canvasRef.current) {
        window.WebGLFluid(canvasRef.current, fluidConfig);
      }
    };
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const lineStyle = { borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', marginTop: '0' };

  return (
    <div style={{ position: 'relative', background: '#000', minHeight: '100vh', overflow: 'hidden' }}>
      <Helmet>
        <title>Contact Us | Manickam</title>
        <meta name="description" content="Get in touch with Yentop Manickam Edible Oils. Find our headquarters, refinery, and contact information." />
      </Helmet>

      {/* WebGL Canvas */}
      <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />

      {/* Readability overlay */}
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 1, pointerEvents: 'none' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, pointerEvents: 'none', padding: '140px 0 120px' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>

          {/* Hero heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            style={{ fontSize: 'clamp(56px, 11vw, 140px)', fontWeight: 800, letterSpacing: '-0.05em', color: '#fff', lineHeight: 1, marginBottom: '80px' }}
          >
            Get in <span className="text-gold">touch.</span>
          </motion.h1>

          {/* Location rows */}

          {[
            {
              tag: 'Headquarters & Refinery',
              city: 'Virudhunagar',
              address: '68/2, Madurai Road,\nVirudhunagar — 626001, Tamil Nadu',
              phone: { label: 'Phone', value: '+91 4562 244309' },
              email: 'info@yentop.com',
              delay: 0.1,
            },
            {
              tag: 'Import & Processing',
              city: 'Tuticorin',
              address: 'Port Area,\nThoothukudi — 628004, Tamil Nadu',
              phone: { label: 'Logistics', value: '+91 461 235288' },
              email: 'port@yentop.com',
              delay: 0.2,
            },
          ].map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: loc.delay }}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '60px',
                alignItems: 'center',
                padding: '56px 0',
                borderTop: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              {/* Left: tag + city */}
              <div>
                <p style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--accent-green)', marginBottom: '14px' }}>{loc.tag}</p>
                <h2 style={{ fontSize: 'clamp(30px, 3.5vw, 48px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0 }}>{loc.city}</h2>
              </div>

              {/* Center: address */}
              <div>
                <p style={{ color: '#86868b', fontSize: '16px', lineHeight: 1.8, margin: 0, whiteSpace: 'pre-line' }}>{loc.address}</p>
              </div>

              {/* Right: phone + email */}
              <div>
                <p style={{ color: '#fff', fontSize: '16px', marginBottom: '8px' }}>
                  {loc.phone.label}:{' '}
                  <span className="text-gold" style={{ fontWeight: 600 }}>{loc.phone.value}</span>
                </p>
                <p style={{ color: '#86868b', fontSize: '16px', margin: 0 }}>{loc.email}</p>
              </div>
            </motion.div>
          ))}

          {/* Closing border */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            style={{ width: '100%', height: '460px', marginTop: '80px', overflow: 'hidden', borderRadius: '4px', filter: 'grayscale(1) invert(0.9) contrast(1.2)', opacity: 0.7 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.73!2d77.952418!3d9.597015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b012c9e563cc231%3A0xe24477bda3dde35d!2sYentop%20Manickam%20Edible%20Oils%20P%20Ltd!5e0!3m2!1sen!2sin!4v1715694200000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0 }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
