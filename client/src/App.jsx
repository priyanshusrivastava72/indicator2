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
import Footer from './components/Footer';

import './index.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize Theme - Default to dark mode on fresh session (using sessionStorage)
    const savedTheme = sessionStorage.getItem('theme') || 'dark';
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
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919670111167?text=Hello!%20I%20have%20an%20enquiry%20about%20TradeCraft."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing Outer Ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping opacity-75 group-hover:opacity-0 transition-opacity duration-300" />
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-dark-100 border border-white/10 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl font-medium translate-x-2 group-hover:translate-x-0 light:bg-white light:text-gray-800 light:border-black/5">
            Chat on WhatsApp
          </span>
          
          {/* WhatsApp Logo SVG */}
          <svg
            className="w-7 h-7 relative z-10 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;
