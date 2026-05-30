import React from 'react';
import { Globe, Video, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-200 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Risk Disclaimer */}
        <div className="mb-16 p-6 rounded-xl border border-red-500/10 bg-red-500/5 text-center max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm leading-relaxed">
            <span className="text-red-400 font-bold">RISK DISCLAIMER:</span> Trading involves risk. Past performance does not guarantee future results. This course and indicator are for educational purposes only and should not be considered financial advice. Never trade with money you cannot afford to lose.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          
          <div className="text-xl font-display font-bold text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center text-dark">
              TC
            </div>
            TradeCraft
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#course" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Course</a>
            <a href="#indicator" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Indicator</a>
            <a href="#results" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#faq" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors">
              <Globe size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors">
              <Video size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-colors">
              <Camera size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-gray-500 gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} TradeCraft. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Risk Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
