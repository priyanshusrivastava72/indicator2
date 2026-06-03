import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import MemberLoginEnquiryModal from './MemberLoginEnquiryModal';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Check initial theme class
    const isLight = document.documentElement.classList.contains('light');
    setTheme(isLight ? 'light' : 'dark');

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('light')) {
      document.documentElement.classList.remove('light');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  };

  const isDark = theme === 'dark';

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? (isDark ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-white/80 backdrop-blur-md border-b border-black/5 py-4') 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-display font-bold flex items-center gap-2 transition-colors duration-300 cursor-pointer" 
          style={{ color: isDark ? '#fff' : '#111827' }}
        >
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-dark font-black">
            TC
          </div>
          TradeCraft
        </div>

        {/* Desktop Nav Actions */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#indicator" className="text-sm font-medium transition-colors duration-300" style={{ color: isDark ? '#a3a3a3' : '#4b5563' }}>Tools</a>
          <a href="#social-proof" className="text-sm font-medium transition-colors duration-300" style={{ color: isDark ? '#a3a3a3' : '#4b5563' }}>Reviews</a>
          <a href="#curriculum-section" className="text-sm font-medium transition-colors duration-300" style={{ color: isDark ? '#a3a3a3' : '#4b5563' }}>Course</a>
          <a href="#pricing" className="text-sm font-medium transition-colors duration-300" style={{ color: isDark ? '#a3a3a3' : '#4b5563' }}>Pricing</a>
          
          {/* Theme switcher toggle button */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-300"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
              color: isDark ? '#a3a3a3' : '#4b5563',
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button
            onClick={() => setIsEnquiryModalOpen(true)}
            className="h-10 px-6 rounded-lg text-sm font-medium transition-colors border cursor-pointer hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 hover:border-emerald-500 dark:hover:border-emerald-500 duration-300"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
              color: isDark ? '#fff' : '#111827',
            }}
          >
            Enquiry
          </button>
        </nav>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center gap-4">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-lg border flex items-center justify-center transition-colors"
            style={{
              backgroundColor: isDark ? 'rgba(255,255,255,0.03)' : '#ffffff',
              borderColor: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)',
              color: isDark ? '#a3a3a3' : '#4b5563',
            }}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>

          {/* Hamburger Menu Toggle */}
          <button 
            className="transition-colors"
            style={{ color: isDark ? '#fff' : '#111827' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Accordion Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full border-b p-6 flex flex-col gap-4 shadow-2xl transition-colors duration-500"
          style={{
            backgroundColor: isDark ? '#0a0a0a' : '#ffffff',
            borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)',
          }}
        >
          <a href="#indicator" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 transition-colors" style={{ color: isDark ? '#d1d5db' : '#374151' }}>Tools</a>
          <a href="#social-proof" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 transition-colors" style={{ color: isDark ? '#d1d5db' : '#374151' }}>Reviews</a>
          <a href="#curriculum-section" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 transition-colors" style={{ color: isDark ? '#d1d5db' : '#374151' }}>Course</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="font-medium py-2 transition-colors" style={{ color: isDark ? '#d1d5db' : '#374151' }}>Pricing</a>
          <button 
            onClick={() => { 
              setIsMobileMenuOpen(false); 
              setIsEnquiryModalOpen(true); 
            }} 
            className="h-12 w-full bg-emerald-500 rounded-lg text-white font-bold mt-4 hover:bg-emerald-450 transition-colors cursor-pointer"
          >
            Enquiry
          </button>
        </motion.div>
      )}
      <MemberLoginEnquiryModal isOpen={isEnquiryModalOpen} onClose={() => setIsEnquiryModalOpen(false)} />
    </header>
  );
};

export default Navigation;
