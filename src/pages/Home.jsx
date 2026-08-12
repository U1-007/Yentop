import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Factory, ShoppingCart, PhoneCall, ChevronDown, Droplet, Settings, Activity, Navigation } from 'lucide-react';
import { motion, useScroll, useVelocity, useTransform, useSpring } from 'framer-motion';
import SpotlightCard from '../components/SpotlightCard';
import TextReveal from '../components/TextReveal';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef();
  
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const skewVelocity = useTransform(smoothVelocity, [-1000, 1000], [-8, 8]);

  useGSAP(() => {
    // Hero Pin
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-pin',
        start: 'top top',
        end: '+=100%',
        pin: true,
        scrub: true,
      }
    });

    heroTl.to('.hero-bg', {
      scale: 1.2,
      opacity: 0.3,
      duration: 1
    }, 0)
    .to('.hero-content', {
      opacity: 0,
      y: -50,
      scale: 0.9,
      duration: 1
    }, 0);

    const stickyTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sticky-scroll-section',
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: 1,
      }
    });

    // autoAlpha = opacity + visibility:hidden — bulletproof, browser can't override
    gsap.set('.reveal-1', { autoAlpha: 0, y: 40 });
    gsap.set('.reveal-2', { autoAlpha: 0, y: 40 });
    gsap.set('.reveal-3', { autoAlpha: 0, y: 40 });
    gsap.set('.bg-fx-1', { autoAlpha: 0, rotation: -90, scale: 0.6 });
    gsap.set('.bg-fx-2', { autoAlpha: 0, y: 300 });
    gsap.set('.bg-fx-3', { autoAlpha: 0, scale: 2.5 });

    stickyTl
      .to('.bg-fx-1', { autoAlpha: 0.05, rotation: 0, scale: 1, duration: 1.5 })
      .to('.reveal-1', { autoAlpha: 1, y: 0, duration: 1 }, '<')
      .to('.bg-fx-1', { autoAlpha: 0, scale: 1.3, duration: 1 }, '+=0.8')
      .to('.reveal-1', { autoAlpha: 0, y: -40, duration: 1 }, '<')
      .to('.bg-fx-2', { autoAlpha: 0.05, y: 0, duration: 1.5 })
      .to('.reveal-2', { autoAlpha: 1, y: 0, duration: 1 }, '<')
      .to('.bg-fx-2', { autoAlpha: 0, y: -300, duration: 1 }, '+=0.8')
      .to('.reveal-2', { autoAlpha: 0, y: -40, duration: 1 }, '<')
      .to('.bg-fx-3', { autoAlpha: 0.05, scale: 1, duration: 1.5 })
      .to('.reveal-3', { autoAlpha: 1, y: 0, duration: 1 }, '<')
      .to('.bg-fx-3', { autoAlpha: 0, scale: 0.4, duration: 1 }, '+=0.8')
      .to('.reveal-3', { autoAlpha: 0, y: -40, duration: 1 }, '<');

    // Fade in the quick links Bento Grid
    gsap.from('.quick-link-card', {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.quick-links-section',
        start: 'top 80%',
      }
    });

  }, { scope: container });

  return (
    <div ref={container}>
      <Helmet>
        <title>Yentop - Premium Edible Oils & Refining Technology</title>
        <meta name="description" content="Over 100 years of excellence. The Manickam Group delivers premium edible oils refined with world-class Alfa Laval technology." />
      </Helmet>
      
      {/* 1. Hero Section */}
      <section className="hero-pin" style={{ position: 'relative', height: 'calc(100vh - 60px)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        {/* Ambient glow orbs */}
        <div style={{ position: 'absolute', top: '15%', left: '5%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.05) 0%, transparent 70%)', pointerEvents: 'none', filter: 'blur(60px)' }} />
        <div className="hero-bg-wrapper" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
          <div className="hero-bg hero-bg-animated" style={{ width: '100%', height: '120%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9)), url("/main.jpg") center/cover no-repeat' }}></div>
        </div>
        <div className="hero-content" style={{ maxWidth: '800px', padding: '40px 20px 0' }}>
          <TextReveal 
            text="Refining Purity. Enriching Lives." 
            goldWords={["Refining", "Purity", "Purity.", "Enriching", "Lives", "Lives."]}
            style={{ fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 800, lineHeight: 1, letterSpacing: '-0.05em', marginBottom: '20px', justifyContent: 'center' }} 
          />
          <p style={{ fontSize: 'clamp(18px, 2.5vw, 28px)', color: '#a1a1a6', fontWeight: 500, lineHeight: 1.4, letterSpacing: '-0.01em', maxWidth: '600px', margin: '0 auto', marginBottom: '40px' }}>
            Over 100 years of excellence. The Manickam Group delivers premium edible oils refined with world-class Swedish technology.
          </p>
          <motion.div 
            animate={{ y: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown size={32} color="#a1a1a6" style={{ margin: '0 auto', opacity: 0.5 }} />
          </motion.div>
        </div>
      </section>

      {/* 2. Apple-Style Sticky Scroll Reveal */}
      <section className="sticky-scroll-section" style={{ position: 'relative', height: '100vh', background: 'var(--bg-dark)', overflow: 'hidden' }}>

        {/* Background FX — positioned dead center, GSAP controls opacity */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <div className="bg-fx-1" style={{ position: 'absolute' }}><Settings size={700} color="#D4AF37" /></div>
          <div className="bg-fx-2" style={{ position: 'absolute' }}><Activity size={700} color="#D4AF37" /></div>
          <div className="bg-fx-3" style={{ position: 'absolute' }}><Navigation size={700} color="#D4AF37" /></div>
        </div>

        {/* Text Reveals — all stacked at center, GSAP controls visibility */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, textAlign: 'center' }}>
          <h2 className="reveal-1" style={{ position: 'absolute', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.04em', margin: 0, width: '100%' }}>
            Powered by <span className="text-gold">Alfa Laval</span>.
          </h2>
          <h2 className="reveal-2" style={{ position: 'absolute', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.04em', margin: 0, width: '100%' }}>
            Preserving <span className="text-gold">Essential Vitamins</span>.
          </h2>
          <h2 className="reveal-3" style={{ position: 'absolute', fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 700, letterSpacing: '-0.04em', margin: 0, width: '100%' }}>
            Delivered with <span className="text-gold">Precision</span>.
          </h2>
        </div>
      </section>

      {/* 3. Infinite Marquee */}
      <section style={{ padding: '30px 0', background: '#111', overflow: 'hidden', whiteSpace: 'nowrap', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          style={{ display: 'inline-block', skewX: skewVelocity }}
        >
          <span className="text-gold" style={{ fontSize: '20px', fontWeight: 600, paddingRight: '50px' }}>
            100+ Years of Excellence • Premium Refined Oils • Alfa Laval Technology • Trusted by Millions • Uncompromising Quality •
          </span>
          <span className="text-gold" style={{ fontSize: '20px', fontWeight: 600, paddingRight: '50px' }}>
            100+ Years of Excellence • Premium Refined Oils • Alfa Laval Technology • Trusted by Millions • Uncompromising Quality •
          </span>
        </motion.div>
      </section>

      {/* 3.5 Animated Stats */}
      <section style={{ background: 'var(--bg-dark)', padding: '100px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        {/* Subtle background glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '300px', background: 'radial-gradient(ellipse, rgba(212,175,55,0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '60px', justifyContent: 'center' }}>
            {[
              { value: 100, suffix: '+', label: 'Years of Heritage', desc: 'Serving since the early 1900s' },
              { value: 2,   suffix: '',  label: 'Major Plants',      desc: 'Virudhunagar & Tuticorin' },
              { value: 6,   suffix: '',  label: 'Core Operations',   desc: 'End-to-end in-house process' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
                style={{ textAlign: 'center' }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: i * 0.15 }}
                  style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px', marginBottom: '10px' }}
                >
                  <motion.span
                    initial={{ innerText: 0 }}
                    whileInView={{ innerText: stat.value }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: i * 0.15, ease: 'easeOut' }}
                    onUpdate={(latest) => {}}
                    style={{ fontSize: 'clamp(52px, 7vw, 88px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}
                    className="text-gold"
                  >
                    {stat.value}
                  </motion.span>
                  <span className="text-gold" style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 700 }}>{stat.suffix}</span>
                </motion.div>
                <p style={{ fontSize: '18px', fontWeight: 600, color: '#fff', marginBottom: '6px', letterSpacing: '-0.01em' }}>{stat.label}</p>
                <p style={{ fontSize: '14px', color: '#86868b', lineHeight: 1.5 }}>{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Enhanced Borderless Quick Links */}
      <section className="section quick-links-section" style={{ background: 'var(--bg-dark)', padding: '120px 0' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>
          <div className="section-header" style={{ marginBottom: '80px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <h2 className="section-title" style={{ margin: 0 }}>Explore <span className="text-gold">Yentop</span>.</h2>
            <p style={{ color: '#a1a1a6', fontSize: '18px', maxWidth: '400px', margin: 0 }}>Navigate through our core facilities, product range, and get in touch with our team directly.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            
            {/* Operations Row */}
            <Link to="/operations" style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                transition={{ duration: 0.3 }}
                className="quick-link-card"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', gap: '40px', padding: '50px 30px', borderTop: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', color: '#fff' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Factory size={24} color="#D4AF37" />
                  </div>
                  <h3 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, margin: 0, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Operations</h3>
                </div>
                <p style={{ color: '#a1a1a6', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                  Importation, Refining & Fractionation, Vanaspati, Quality Control, Packaging, and precise Delivery logistics.
                </p>
                <motion.div whileHover={{ x: 6, color: '#D4AF37' }} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                  <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Discover</span>
                  <span style={{ fontSize: '20px' }}>→</span>
                </motion.div>
              </motion.div>
            </Link>

            {/* Products Row */}
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                transition={{ duration: 0.3 }}
                className="quick-link-card"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', gap: '40px', padding: '50px 30px', borderTop: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', color: '#fff' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShoppingCart size={24} color="#D4AF37" />
                  </div>
                  <h3 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, margin: 0, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Products</h3>
                </div>
                <p style={{ color: '#a1a1a6', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
                  Premium Refined Palmolein, Vanaspati, Bakery Shortening, and zero trans-fat solutions for wholesale.
                </p>
                <motion.div whileHover={{ x: 6, color: '#D4AF37' }} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                  <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>View Range</span>
                  <span style={{ fontSize: '20px' }}>→</span>
                </motion.div>
              </motion.div>
            </Link>

            {/* Contact Row */}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <motion.div 
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                transition={{ duration: 0.3 }}
                className="quick-link-card"
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', gap: '40px', padding: '50px 30px', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer', color: '#fff' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(212, 175, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <PhoneCall size={24} color="#D4AF37" />
                  </div>
                  <h3 style={{ fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, margin: 0, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>Contact</h3>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ color: '#a1a1a6', background: 'rgba(255,255,255,0.06)', padding: '6px 16px', borderRadius: '20px', fontSize: '15px' }}>+91 4562 244309</span>
                  <span style={{ color: '#a1a1a6', background: 'rgba(255,255,255,0.06)', padding: '6px 16px', borderRadius: '20px', fontSize: '15px' }}>mail@yentop.com</span>
                </div>
                <motion.div whileHover={{ x: 6, color: '#D4AF37' }} style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                  <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Reach Out</span>
                  <span style={{ fontSize: '20px' }}>→</span>
                </motion.div>
              </motion.div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}
