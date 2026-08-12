import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const container = useRef();

  useGSAP(() => {
    // Hero breathing animation via CSS class 'hero-bg-animated'
    
    // Sticky Scroll Reveal
    const stickyTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.sticky-about-section',
        start: 'top top',
        end: '+=400%',
        pin: true,
        scrub: 1,
      }
    });

    // Animate opacity and Y-axis smoothly
    stickyTl
      .to('.about-reveal-1', { opacity: 1, y: 0, duration: 1 })
      .to('.about-reveal-1', { opacity: 0, y: -30, duration: 1 }, "+=0.5")
      .to('.about-reveal-2', { opacity: 1, y: 0, duration: 1 })
      .to('.about-reveal-2', { opacity: 0, y: -30, duration: 1 }, "+=0.5")
      .to('.about-reveal-3', { opacity: 1, y: 0, duration: 1 })
      .to('.about-reveal-3', { opacity: 0, y: -30, duration: 1 }, "+=0.5")
      .to('.about-reveal-4', { opacity: 1, y: 0, duration: 1 })
      .to('.about-reveal-4', { opacity: 0, y: -30, duration: 1 }, "+=0.5");

  }, { scope: container });

  return (
    <div ref={container}>
      <Helmet>
        <title>About Us - Yentop</title>
        <meta name="description" content="Recognized as the MANICKAM group, our family has been in the edible oil market for over 100 years." />
      </Helmet>

      {/* Background Breathing Image (Using plant interior image) */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: -1, overflow: 'hidden' }}>
        <div className="hero-bg-animated" style={{ width: '100%', height: '120%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.95)), url("/plant_interior.jpg") center/cover no-repeat' }}></div>
      </div>

      <section style={{ height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '80px' }}>
        <h1 style={{ fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1 }}>
          A century of <span className="text-gold" style={{ display: 'inline-block' }}>trust</span>.
        </h1>
      </section>

      <section className="sticky-about-section" style={{ position: 'relative', height: '100vh', width: '100%' }}>
        <div style={{ position: 'relative', zIndex: 2, width: '100%', height: '100%', maxWidth: '900px', margin: '0 auto' }}>
          
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px', textAlign: 'center' }}>
            <h2 className="about-reveal-1" style={{ width: '100%', fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em', opacity: 0, transform: 'translateY(30px)', lineHeight: 1.3 }}>
              Recognized as the <span className="text-gold" style={{ display: 'inline-block' }}>"MANICKAM"</span> group, our family has been in the edible oil market for over 100 years.
            </h2>
          </div>
          
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px', textAlign: 'center' }}>
            <h2 className="about-reveal-2" style={{ width: '100%', fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em', opacity: 0, transform: 'translateY(30px)', lineHeight: 1.3 }}>
              For generations, we have been engaged in the <span className="text-gold" style={{ display: 'inline-block' }}>extraction, importing, refining</span>, and packing of premium oils.
            </h2>
          </div>
          
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px', textAlign: 'center' }}>
            <h2 className="about-reveal-3" style={{ width: '100%', fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em', opacity: 0, transform: 'translateY(30px)', lineHeight: 1.3 }}>
              In tune with modern advancements, our factories employ <span className="text-gold" style={{ display: 'inline-block' }}>world-class machinery</span> with modernized skills.
            </h2>
          </div>
          
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 20px', textAlign: 'center' }}>
            <h2 className="about-reveal-4" style={{ width: '100%', fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 600, letterSpacing: '-0.02em', opacity: 0, transform: 'translateY(30px)', lineHeight: 1.3 }}>
              We concentrate on import, refining and selling of palm oil and its products, in both <span className="text-gold" style={{ display: 'inline-block' }}>bulk and retail</span> consumer packing.
            </h2>
          </div>
          
        </div>
      </section>
    </div>
  );
}
