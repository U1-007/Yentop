import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const container = useRef();

  const allProducts = [
    { title: "Refined Palmolein", category: "Consumer", desc: "Golden clear, high-quality cooking oil with excellent frying properties.", img: "/refined_palmolein.jpg" },
    { title: "Vanaspati", category: "Consumer", desc: "Premium vegetable ghee, perfect for bakery and traditional cooking.", img: "/vanaspati.png" },
    { title: "Bakery Shortening", category: "Consumer", desc: "Specialized shortening for perfect crusts and fluffy baked goods.", img: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=1200&auto=format&fit=crop" },
    { title: "Low Trans Fat Products", category: "Industrial", desc: "Health-conscious industrial solutions meeting strict modern standards.", img: "/low_trans_fat.png" },
    { title: "RBD Palm Stearin", category: "Industrial", desc: "High melting point stearin used in specialized food manufacturing.", img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1200&auto=format&fit=crop" },
    { title: "PFAD", category: "Industrial", desc: "Palm Fatty Acid Distillate for soap and chemical industries.", img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1200&auto=format&fit=crop" }
  ];

  return (
    <div ref={container} style={{ background: 'var(--bg-dark)' }}>
      <Helmet>
        <title>Our Products - Yentop</title>
        <meta name="description" content="Explore our consumer and industrial range including Refined Palmolein, Vanaspati, Bakery Shortening, and PFAD." />
      </Helmet>

      {/* Hero Section */}
      <section style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingTop: '80px' }}>
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', marginBottom: '20px', lineHeight: 1 }}
          >
            <span className="text-gold">Uncompromising</span> Quality.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '20px', color: '#a1a1a6', fontWeight: 400, lineHeight: 1.6 }}
          >
            Explore our consumer and industrial range.
          </motion.p>
        </div>
      </section>

      {/* Alternating Product Showcase */}
      {allProducts.map((p, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={i} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: isEven ? 'row' : 'row-reverse',
              width: '100%', 
              height: '100%',
              flexWrap: 'wrap'
            }}>
              
              {/* Text Side */}
              <div style={{ flex: '1 1 50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10%', minWidth: '300px' }}>
                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ maxWidth: '600px' }}
                >
                  <p style={{ color: 'var(--accent-green)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '15px' }}>{p.category} Range</p>
                  <h2 style={{ fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '30px' }}>
                    {p.title}
                  </h2>
                  <p style={{ fontSize: '22px', color: '#a1a1a6', lineHeight: 1.6, marginBottom: '40px' }}>
                    {p.desc}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '15px 30px', borderRadius: '30px', fontSize: '16px', fontWeight: 600, cursor: 'pointer' }}
                  >
                    Request Specifications
                  </motion.button>
                </motion.div>
              </div>

              {/* Image Side */}
              <div style={{ flex: '1 1 50%', minHeight: '380px', maxHeight: '100vh', minWidth: '300px', position: 'relative', overflow: 'hidden' }}>
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "0px" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </motion.div>
              </div>

            </div>
          </section>
        );
      })}
    </div>
  );
}
