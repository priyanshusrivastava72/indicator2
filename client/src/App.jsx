import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

// Component Imports
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FinancialEducation from './components/FinancialEducation';
import ProblemSection from './components/ProblemSection';
import MindsetShift from './components/MindsetShift';
import CareerVsEducation from './components/CareerVsEducation';
import DreamsAndAspirations from './components/DreamsAndAspirations';
import EcosystemPillars from './components/EcosystemPillars';
import LearningRoadmap from './components/LearningRoadmap';
import IndicatorShowcase from './components/IndicatorShowcase';
import HowItWorks from './components/HowItWorks';
import LiveTrades from './components/LiveTrades';
import TargetAudience from './components/TargetAudience';
import SocialProof from './components/SocialProof';
import Curriculum from './components/Curriculum';
import EnrollmentBenefits from './components/EnrollmentBenefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import './index.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring physics for the custom cursor/glow
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'a' || 
        e.target.tagName.toLowerCase() === 'button' || 
        e.target.closest('button') || 
        e.target.closest('a') ||
        e.target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="bg-dark min-h-screen text-gray-100 selection:bg-emerald-500/30 font-sans">
      
      {/* Global Mouse Glow Effect */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16,185,129,0.06), transparent 40%)`
        }}
      />

      {/* Custom Cursor */}
      <motion.div 
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-emerald-500 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1,
          opacity: isHovering ? 0.4 : 1,
          border: isHovering ? '1px solid #10b981' : 'none',
          backgroundColor: isHovering ? 'transparent' : '#10b981'
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
          {/* 6. Dream Builder Section */}
          <DreamsAndAspirations />
          {/* 7. Our Complete Solution */}
          <EcosystemPillars />
          {/* 8. Learning Roadmap */}
          <LearningRoadmap />
          {/* 9. Indicator Showcase */}
          <IndicatorShowcase />
          {/* 10. How The Indicator Works */}
          <HowItWorks />
          {/* 11. Live Trade Examples */}
          <LiveTrades />
          {/* 12. Who Is This For? */}
          <TargetAudience />
          {/* 13. Student Results & Testimonials */}
          <SocialProof />
          {/* 14. Course Curriculum */}
          <Curriculum />
          {/* 15. What You Get */}
          <EnrollmentBenefits />
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
