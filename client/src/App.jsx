import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Component Imports
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FinancialEducation from './components/FinancialEducation';
import ProblemSection from './components/ProblemSection';
import MindsetShift from './components/MindsetShift';
import CareerVsEducation from './components/CareerVsEducation';
import LearningRoadmap from './components/LearningRoadmap';
import IndicatorShowcase from './components/IndicatorShowcase';
import LiveTrades from './components/LiveTrades';
import TargetAudience from './components/TargetAudience';
import SocialProof from './components/SocialProof';
import Curriculum from './components/Curriculum';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import './index.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize Theme
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-dark min-h-screen text-gray-100 selection:bg-emerald-500/30 font-sans">
      
      {/* Global Mouse Glow Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.06), transparent 40%)`
        }}
      />
      
      <div className="relative z-10">
        <Navigation />
        <main>
          {/* 1. Hero */}
          <Hero />
          {/* 2. Why Financial Education Matters */}
          <FinancialEducation />
          {/* 3. The Problem Section */}
          <ProblemSection />
          {/* 4. The Opportunity Section */}
          <MindsetShift />
          {/* 5. Job + Trading Knowledge Comparison Section */}
          <CareerVsEducation />
          {/* 8. Learning Roadmap */}
          <LearningRoadmap />
          {/* 9. Indicator Showcase */}
          <IndicatorShowcase />
          {/* 11. Live Trade Examples */}
          <LiveTrades />
          {/* 12. Who Is This For? */}
          <TargetAudience />
          {/* 13. Student Results & Testimonials */}
          <SocialProof />
          {/* 14. Course Curriculum */}
          <Curriculum />
          {/* 16. Pricing Section */}
          <Pricing />
          {/* 17. FAQ */}
          <FAQ />
          {/* 19. Final CTA (Risk Disclaimer is 18, embedded in Footer) */}
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
