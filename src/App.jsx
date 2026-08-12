import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence } from 'framer-motion';

import Header from './components/Header';
import Footer from './components/Footer';
import PageWrapper from './components/PageWrapper';
import ScrollProgress from './components/ScrollProgress';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Operations = lazy(() => import('./pages/Operations'));
const Products = lazy(() => import('./pages/Products'));
const Enquiry = lazy(() => import('./pages/Enquiry'));
const Gallery = lazy(() => import('./pages/Gallery'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

gsap.registerPlugin(ScrollTrigger);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ minHeight: '100vh', background: 'var(--bg-dark)' }} />}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutUs />
              </PageWrapper>
            }
          />
          <Route
            path="/operations"
            element={
              <PageWrapper>
                <Operations />
              </PageWrapper>
            }
          />
          <Route
            path="/products"
            element={
              <PageWrapper>
                <Products />
              </PageWrapper>
            }
          />
          <Route
            path="/enquiry"
            element={
              <PageWrapper>
                <Enquiry />
              </PageWrapper>
            }
          />
          <Route
            path="/gallery"
            element={
              <PageWrapper>
                <Gallery />
              </PageWrapper>
            }
          />
          <Route
            path="/faq"
            element={
              <PageWrapper>
                <FAQ />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageWrapper>
                <NotFound />
              </PageWrapper>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0, 0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollProgress />
        <ScrollToTop />
        <Header />
        <main style={{ paddingTop: '70px', background: 'var(--bg-dark)', minHeight: 'calc(100vh - 70px)' }}>
          <ErrorBoundary>
            <AnimatedRoutes />
          </ErrorBoundary>
        </main>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
