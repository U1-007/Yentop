import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone must be at least 10 digits'),
  state: z.string().min(2, 'State is required'),
  city: z.string().min(2, 'City is required'),
  message: z.string().min(10, 'Please provide more details'),
});

export default function Enquiry() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    setSubmitStatus(null);

    // Prepare data for Web3Forms
    const payload = {
      access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
      subject: 'New Wholesale Enquiry - Yentop',
      from_name: data.name,
      ...data,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const res = await response.json();
      if (res.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '15px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(255,255,255,0.2)',
    color: '#fff',
    fontSize: '18px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    marginBottom: '5px',
    position: 'relative',
    zIndex: 1,
  };

  const errorStyle = {
    color: '#ff4d4f',
    fontSize: '14px',
    marginTop: '5px',
    display: 'block',
    minHeight: '20px', // Keep space for error so layout doesn't jump
  };

  return (
    <div
      style={{
        background: 'var(--bg-dark)',
        minHeight: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <Helmet>
        <title>Wholesale Enquiry | Manickam</title>
        <meta
          name="description"
          content="Partner with Manickam. We are actively looking for dynamic wholesale agents to expand our reach."
        />
      </Helmet>

      {/* Left Side: Cinematic Image */}
      <div
        style={{
          flex: '1 1 50%',
          minWidth: '300px',
          height: '100vh',
          position: 'sticky',
          top: 0,
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1920&auto=format&fit=crop"
          alt="Refinery"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.2), var(--bg-dark))',
          }}
        ></div>
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', maxWidth: '80%' }}>
          <h2
            style={{
              fontSize: 'clamp(40px, 6vw, 80px)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
            }}
          >
            Partner with <br />
            <span className="text-gold">Manickam</span>.
          </h2>
          <p style={{ color: '#a1a1a6', fontSize: '20px', marginTop: '20px' }}>
            We are actively looking for dynamic wholesale agents to expand our reach.
          </p>
        </div>
      </div>

      {/* Right Side: Borderless Form with Spotlight */}
      <div
        style={{
          flex: '1 1 50%',
          minWidth: '300px',
          padding: '10% 5%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseMove={handleMouseMove}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(255, 215, 0, 0.08), transparent 80%)`,
            pointerEvents: 'none',
            zIndex: 0,
            transition: 'background 0.15s ease',
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            width: '100%',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h3 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '50px', color: '#fff' }}>
            Wholesale Enquiry
          </h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '15px' }}>
              <div style={{ flex: '1 1 45%', minWidth: '200px' }}>
                <input
                  type="text"
                  placeholder="Contact Name"
                  {...register('name')}
                  style={inputStyle}
                />
                {errors.name ? (
                  <span style={errorStyle}>{errors.name.message}</span>
                ) : (
                  <span style={errorStyle}></span>
                )}
              </div>
              <div style={{ flex: '1 1 45%', minWidth: '200px' }}>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register('email')}
                  style={inputStyle}
                />
                {errors.email ? (
                  <span style={errorStyle}>{errors.email.message}</span>
                ) : (
                  <span style={errorStyle}></span>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '15px' }}>
              <div style={{ flex: '1 1 45%', minWidth: '200px' }}>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  {...register('phone')}
                  style={inputStyle}
                />
                {errors.phone ? (
                  <span style={errorStyle}>{errors.phone.message}</span>
                ) : (
                  <span style={errorStyle}></span>
                )}
              </div>
              <div style={{ flex: '1 1 45%', minWidth: '200px' }}>
                <input type="text" placeholder="State" {...register('state')} style={inputStyle} />
                {errors.state ? (
                  <span style={errorStyle}>{errors.state.message}</span>
                ) : (
                  <span style={errorStyle}></span>
                )}
              </div>
            </div>

            <div style={{ marginBottom: '15px' }}>
              <input type="text" placeholder="City" {...register('city')} style={inputStyle} />
              {errors.city ? (
                <span style={errorStyle}>{errors.city.message}</span>
              ) : (
                <span style={errorStyle}></span>
              )}
            </div>

            <div style={{ marginBottom: '15px' }}>
              <textarea
                placeholder="Address & Query details..."
                {...register('message')}
                rows="1"
                style={{ ...inputStyle, resize: 'none' }}
              ></textarea>
              {errors.message ? (
                <span style={errorStyle}>{errors.message.message}</span>
              ) : (
                <span style={errorStyle}></span>
              )}
            </div>

            <motion.button
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              type="submit"
              disabled={isSubmitting}
              style={{
                background: isSubmitting ? '#555' : '#fff',
                color: isSubmitting ? '#aaa' : '#000',
                border: 'none',
                padding: '20px 40px',
                fontSize: '18px',
                fontWeight: 600,
                borderRadius: '40px',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                marginTop: '10px',
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
            </motion.button>
          </form>

          {submitStatus === 'success' && (
            <p style={{ color: '#4caf50', marginTop: '20px', fontSize: '16px', fontWeight: 500 }}>
              Enquiry submitted successfully! We will get back to you soon.
            </p>
          )}
          {submitStatus === 'error' && (
            <p style={{ color: '#f44336', marginTop: '20px', fontSize: '16px', fontWeight: 500 }}>
              Something went wrong. Please try again or call us directly.
            </p>
          )}

          <div
            style={{
              marginTop: '80px',
              paddingTop: '40px',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <p
              style={{
                color: '#a1a1a6',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '10px',
              }}
            >
              Direct Contact
            </p>
            <p className="text-gold" style={{ fontSize: '28px', fontWeight: 700 }}>
              +91 9443167825
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
