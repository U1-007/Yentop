import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#111', color: '#a1a1a6', padding: '60px 5% 30px', marginTop: '50px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>
        <div className="footer-brand">
          <h2 style={{ color: 'white', fontSize: '24px', letterSpacing: '-1px', marginBottom: '8px' }}>YENTOP</h2>
          <p>Manickam Edible Oils Pvt. Ltd.</p>
        </div>
        <div className="footer-contact">
          <p style={{ marginBottom: '8px', fontSize: '14px' }}>
            <strong style={{ color: 'white' }}>Head Office:</strong> 123 Katchery Road, Virudhunagar - 626 001, Tamil Nadu
          </p>
          <p style={{ marginBottom: '8px', fontSize: '14px' }}>
            <strong style={{ color: 'white' }}>Phone:</strong> +91 4562 244309
          </p>
          <p style={{ marginBottom: '8px', fontSize: '14px' }}>
            <strong style={{ color: 'white' }}>Email:</strong> mail@yentop.com
          </p>
        </div>
      </div>
      <div className="footer-bottom" style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '12px' }}>
        <p>© 2026 Yentop Manickam Edible Oils Pvt. Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
