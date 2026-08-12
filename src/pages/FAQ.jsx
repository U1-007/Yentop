import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "Where is your main refinery located?",
      a: "Our historic headquarters and primary refining facility are located in Virudhunagar, Tamil Nadu. We also operate a major importation and processing plant in Tuticorin, giving us strategic access to maritime routes."
    },
    {
      q: "What certifications do your products hold?",
      a: "All Yentop products are rigorously tested and certified by FSSAI. We also comply with ISO standards and maintain Halal and Kosher certifications for export purposes."
    },
    {
      q: "Do you supply Vanaspati in bulk for commercial bakeries?",
      a: "Yes. Our premium Vanaspati and Bakery Shortenings are available in industrial-grade tins and tankers specifically designed for commercial food manufacturing and bakeries."
    },
    {
      q: "What makes Alfa Laval technology superior?",
      a: "Alfa Laval's Swedish refining technology operates under extreme precision, ensuring maximum yield while perfectly preserving the natural vitamins and nutritional integrity of the oil during the deodorization phase."
    },
    {
      q: "How can I apply to be a wholesale agent?",
      a: "You can submit your details directly through our Enquiry page. We require our agents to have strong local market knowledge and dedicated storage facilities to maintain product quality."
    }
  ];

  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', padding: '140px 0 100px' }}>
      <Helmet>
        <title>FAQ | Manickam</title>
        <meta name="description" content="Frequently asked questions about Yentop Manickam Edible Oils products, refining process, and wholesale enquiries." />
      </Helmet>
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <div style={{ marginBottom: '80px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff' }}
          >
            Questions.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '20px', color: '#a1a1a6', fontWeight: 500, marginTop: '20px' }}
          >
            Clear answers about our process and products.
          </motion.p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <button 
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="clickable"
                style={{ 
                  width: '100%', 
                  background: 'transparent', 
                  border: 'none', 
                  padding: '40px 0', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  textAlign: 'left',
                  color: activeIndex === idx ? '#fff' : '#a1a1a6',
                  transition: 'color 0.3s ease'
                }}
              >
                <span style={{ fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 600, letterSpacing: '-0.02em', paddingRight: '40px' }}>
                  {faq.q}
                </span>
                <span style={{ fontSize: '24px', fontWeight: 300, transition: 'transform 0.3s ease', transform: activeIndex === idx ? 'rotate(45deg)' : 'none' }}>
                  +
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p style={{ paddingBottom: '40px', fontSize: '18px', lineHeight: 1.6, color: '#86868b', maxWidth: '90%' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
