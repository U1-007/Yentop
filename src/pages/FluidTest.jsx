import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function FluidTest() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Dynamically load the WebGL Fluid script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/webgl-fluid';
    script.async = true;
    
    script.onload = () => {
      if (window.WebGLFluid && canvasRef.current) {
        window.WebGLFluid(canvasRef.current, {
          IMMEDIATE: false,         // Don't auto-splat on load
          TRIGGER: 'hover',         // React to mouse movement
          SIM_RESOLUTION: 128,
          DYE_RESOLUTION: 1024,
          DENSITY_DISSIPATION: 0.8, // Thicker fluid, stays longer
          VELOCITY_DISSIPATION: 0.1, // Heavy movement, retains momentum
          PRESSURE: 0.9,            // Higher pressure for smooth flow
          PRESSURE_ITERATIONS: 25,
          CURL: 5,                  // Low curl for smooth oil flow, not chaotic smoke
          SPLAT_RADIUS: 0.4,        // Larger mouse impact
          SPLAT_FORCE: 6000,
          COLORFUL: false,          // Lock to a single color
          SPLAT_COLOR: { r: 1.0, g: 0.7, b: 0.05 }, // Liquid Gold / Amber
          SHADING: true,            // 3D effect
          BACK_COLOR: { r: 0, g: 0, b: 0 },
          BLOOM: true,
          BLOOM_ITERATIONS: 8,
          BLOOM_RESOLUTION: 256,
          BLOOM_INTENSITY: 1.5,     // High bloom for golden shine
          BLOOM_THRESHOLD: 0.2,
          SUNRAYS: true,
          SUNRAYS_WEIGHT: 1.5
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      // Clean up the canvas if needed, but since it's unmounted by React, it's fine.
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', background: '#000' }}>
      <Helmet>
        <title>Liquid Gold | Manickam</title>
        <meta name="description" content="Experience the fluid simulation of our premium edible oils." />
      </Helmet>
      {/* The canvas for the WebGL Fluid Simulation */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
      ></canvas>

      {/* UI Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, pointerEvents: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 800, letterSpacing: '-0.05em', color: '#fff', textAlign: 'center', pointerEvents: 'none', mixBlendMode: 'difference' }}
        >
          Liquid <span className="text-gold">Gold.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ color: '#fff', fontSize: '20px', letterSpacing: '2px', textTransform: 'uppercase', mixBlendMode: 'difference' }}
        >
          Move your cursor
        </motion.p>
      </div>
    </div>
  );
}
