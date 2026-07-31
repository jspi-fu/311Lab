import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Lazy loading pages for route-based code splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Achievements = lazy(() => import('./pages/Achievements').then(m => ({ default: m.Achievements })));
const Development = lazy(() => import('./pages/Development').then(m => ({ default: m.Development })));
const Overview = lazy(() => import('./pages/Overview').then(m => ({ default: m.Overview })));
const Join = lazy(() => import('./pages/Join').then(m => ({ default: m.Join })));

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Sleek dark-mode loading skeleton fallback
const PageFallback: React.FC = () => (
  <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8 bg-[#0a0a0c]">
    <div className="relative flex items-center gap-3">
      <div className="w-2.5 h-2.5 rounded-full bg-[#DEDBC8] animate-ping" />
      <span className="font-mono text-xs tracking-widest text-[#DEDBC8]/80 uppercase">
        311 LAB · INITIALIZING...
      </span>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-[#E1E0CC] flex flex-col justify-between selection:bg-[#DEDBC8] selection:text-black">
        <Navbar />
        <main className="grow">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/development" element={<Development />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/join" element={<Join />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
