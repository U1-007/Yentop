import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <div style={{ background: 'var(--bg-dark)', minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
      <Helmet>
        <title>Page Not Found - Yentop</title>
      </Helmet>
      
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-gold" 
        style={{ fontSize: 'clamp(80px, 15vw, 150px)', fontWeight: 800, margin: 0, lineHeight: 1 }}
      >
        404
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ color: '#fff', fontSize: 'clamp(24px, 4vw, 40px)', fontWeight: 600, marginTop: '20px', marginBottom: '20px' }}
      >
        Page Not Found
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ color: '#a1a1a6', fontSize: '18px', maxWidth: '500px', marginBottom: '40px' }}
      >
        The page you are looking for doesn't exist or has been moved.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button style={{ background: '#D4AF37', color: '#000', border: 'none', padding: '15px 30px', fontSize: '16px', fontWeight: 600, borderRadius: '30px', cursor: 'pointer' }}>
            Return Home
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
