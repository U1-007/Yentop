import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Magnetic from './Magnetic';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/operations', label: 'Operations' },
    { to: '/products', label: 'Products' },
    { to: '/enquiry', label: 'Enquiry' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <>
      <header className="header">
        <NavLink to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Yentop" style={{ height: '40px', width: 'auto' }} />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Header Right / Mobile Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div className="header-cta-desktop">
            <Magnetic>
              <NavLink to="/enquiry" className="btn">
                Enquire Now
              </NavLink>
            </Magnetic>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} color="#fff" /> : <Menu size={26} color="#fff" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-drawer-overlay"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          >
            <div className="mobile-drawer-content">
              <nav className="mobile-nav-links">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * idx + 0.1 }}
                  >
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '30px', textAlign: 'center' }}
              >
                <NavLink
                  to="/enquiry"
                  className="btn"
                  style={{
                    display: 'inline-block',
                    padding: '14px 36px',
                    fontSize: '16px',
                    width: '100%',
                    maxWidth: '280px',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Enquire Now
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

