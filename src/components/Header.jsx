import { NavLink } from 'react-router-dom';
import Magnetic from './Magnetic';

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="Yentop" style={{ height: '40px', width: 'auto' }} />
      </NavLink>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/operations">Operations</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/enquiry">Enquiry</NavLink>
        <NavLink to="/gallery">Gallery</NavLink>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </nav>
      <Magnetic>
        <NavLink to="/enquiry" className="btn">
          Enquire Now
        </NavLink>
      </Magnetic>
    </header>
  );
}
