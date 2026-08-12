import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Helmet } from 'react-helmet-async';
import SpotlightCard from '../components/SpotlightCard';

gsap.registerPlugin(ScrollTrigger);

export default function Operations() {
  const container = useRef();
  const scrollWrapper = useRef();

  useGSAP(() => {
    const horizontalScroll = scrollWrapper.current;
    
    gsap.to(horizontalScroll, {
      x: () => -(horizontalScroll.scrollWidth - document.documentElement.clientWidth + (window.innerWidth * 0.1)),
      ease: 'none',
      scrollTrigger: {
        trigger: '.operations-section',
        start: 'center center',
        end: () => '+=' + horizontalScroll.scrollWidth,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true
      }
    });
  }, { scope: container });

  const operations = [
    { num: '01', title: 'Importation', desc: 'Sourcing Crude Palm Oil from Indonesia & Malaysia via Tuticorin Port, managed by our dedicated fleet.' },
    { num: '02', title: 'Refining', desc: 'Utilizing sophisticated Alfa Laval technology to separate solid and liquid parts, keeping nutritional value intact.' },
    { num: '03', title: 'Vanaspati', desc: 'Modernized bakery shortening plant dedicated to manufacturing premium vegetable ghee for the food industry.' },
    { num: '04', title: 'Quality', desc: 'Stringent standard inspection tools exercised at every stage—from raw material selection to final packing.' },
    { num: '05', title: 'Packaging', desc: 'Finished products are carefully packed in pouches, tins, and cans to match strict requirements.' },
    { num: '06', title: 'Delivery', desc: 'Efficiently delivered via tanker and lorries, ensuring freshness and reliability for every customer.' },
  ];

  return (
    <div ref={container}>
      <Helmet>
        <title>Operations | Manickam</title>
        <meta name="description" content="Learn about our precision operations powered by Alfa Laval, from importation and refining to packaging and delivery." />
      </Helmet>
      <section className="section operations-section" style={{ overflow: 'hidden', background: 'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.05), transparent 50%)' }}>
        <div className="container section-header">
          <h2 className="section-title"><span className="text-gold">Precision</span> Operations.</h2>
          <p className="section-desc">Powered by Alfa Laval, Sweden.</p>
        </div>
        
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div ref={scrollWrapper} style={{ display: 'flex', gap: '24px', padding: '20px 5vw 40px', width: 'max-content' }}>
            {operations.map((op, idx) => (
              <SpotlightCard key={idx} style={{ 
                width: '380px', 
                height: '480px', 
                background: 'rgba(25, 25, 28, 0.6)', 
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
                borderRadius: '24px', 
                flexShrink: 0
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', height: '100%', padding: '40px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '160px', fontWeight: 800, color: 'rgba(212, 175, 55, 0.04)', lineHeight: 1, pointerEvents: 'none', userSelect: 'none' }}>
                    {op.num}
                  </div>
                  <div className="text-gold" style={{ fontSize: '56px', fontWeight: 800, marginBottom: 'auto', paddingTop: '40px' }}>{op.num}</div>
                  <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.02em', color: '#fff' }}>{op.title}</h3>
                  <p style={{ fontSize: '16px', color: '#a1a1a6', lineHeight: 1.6 }}>{op.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
