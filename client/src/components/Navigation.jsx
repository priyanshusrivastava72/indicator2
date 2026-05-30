import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="text-xl font-display font-bold text-white flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-dark">
            TC
          </div>
          TradeCraft
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#course" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Course</a>
          <a href="#indicator" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Indicator</a>
          <a href="#results" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Results</a>
          <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
          <button className="h-10 px-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium transition-colors">
            Member Login
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-dark-100 border-b border-white/5 p-6 flex flex-col gap-4 shadow-2xl"
        >
          <a href="#course" className="text-gray-300 hover:text-white font-medium py-2">Course</a>
          <a href="#indicator" className="text-gray-300 hover:text-white font-medium py-2">Indicator</a>
          <a href="#results" className="text-gray-300 hover:text-white font-medium py-2">Results</a>
          <a href="#pricing" className="text-gray-300 hover:text-white font-medium py-2">Pricing</a>
          <button className="h-12 w-full bg-emerald-500 rounded-lg text-white font-bold mt-4">
            Member Login
          </button>
        </motion.div>
      )}
    </header>
  );
};

export default Navigation;
