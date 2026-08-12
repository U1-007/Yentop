import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Gallery() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const images = [
    { src: "/oil_refinery.png", title: "Refinery Plant", width: '40vw', height: '60vh', top: '10vh', left: '5vw', y: y1 },
    { src: "/crude_palmolein_refinery.png", title: "Crude Processing", width: '30vw', height: '40vh', top: '30vh', left: '60vw', y: y2 },
    { src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop", title: "Storage Silos", width: '35vw', height: '50vh', top: '90vh', left: '15vw', y: y3 },
    { src: "https://images.unsplash.com/photo-1565791380713-1756b9a05343?q=80&w=1200&auto=format&fit=crop", title: "Quality Lab", width: '45vw', height: '40vh', top: '110vh', left: '50vw', y: y1 },
  ];

  return (
    <div ref={container} style={{ background: 'var(--bg-dark)', minHeight: '200vh', position: 'relative', overflow: 'hidden', paddingBottom: '20vh' }}>
      <Helmet>
        <title>Gallery | Manickam</title>
        <meta name="description" content="Visual archive of Yentop Manickam Edible Oils. Explore our refinery, processing plant, and quality labs." />
      </Helmet>
      
      {/* Liquid Distortion Filter Definition */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="liquid-distortion">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="15" xChannelSelector="R" yChannelSelector="G">
            <animate attributeName="scale" values="0;20;0" dur="3s" repeatCount="indefinite" />
          </feDisplacementMap>
        </filter>
      </svg>

      {/* Huge Background Typography */}
      <div style={{ position: 'sticky', top: '20vh', left: 0, width: '100%', textAlign: 'center', pointerEvents: 'none', zIndex: 0 }}>
        <h1 className="text-gold" style={{ fontSize: 'clamp(80px, 15vw, 250px)', fontWeight: 800, letterSpacing: '-0.05em', whiteSpace: 'nowrap', lineHeight: 0.8, opacity: 0.15 }}>
          VISUAL<br/>ARCHIVE
        </h1>
      </div>

      {/* Floating Canvas */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%' }}>
        {images.map((img, i) => (
          <motion.div 
            key={i}
            style={{
              position: 'absolute',
              top: img.top,
              left: img.left,
              width: img.width,
              height: img.height,
              y: img.y
            }}
          >
            <motion.div
              initial={{ opacity: 0, filter: 'blur(20px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              whileHover={{ 
                scale: 1.05, 
                filter: 'url(#liquid-distortion)',
                boxShadow: '0 20px 40px rgba(212, 175, 55, 0.1)'
              }}
              viewport={{ once: true, margin: "200px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{ width: '100%', height: '100%', position: 'relative', cursor: 'pointer', borderRadius: '10px' }}
            >
              <img src={img.src} alt={img.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
              <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{ position: 'absolute', bottom: '-30px', left: 0, color: '#D4AF37', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', transition: '0.3s ease' }}
              >
                {img.title}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
