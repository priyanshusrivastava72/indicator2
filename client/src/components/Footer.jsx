import React from 'react';
import { Globe, Video, Camera } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark-200 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Risk Disclaimer */}
        <div className="mb-16 p-6 rounded-xl border border-red-500/10 bg-red-500/5 text-center max-w-4xl mx-auto">
          <p className="text-gray-400 text-sm leading-relaxed">
            TradeCraft is an educational platform. All content is provided solely for general educational and informational purposes and should not be construed as investment advice, stock recommendations, research reports, portfolio management services, or solicitation to buy or sell any security. We are not a SEBI-registered investment adviser, research analyst, or portfolio manager. Past market behavior does not guarantee future results. Users should conduct their own research and consult licensed professionals before making financial decisions.
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
            <a href="#indicator" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Tools</a>
            <a href="#social-proof" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Reviews</a>
            <a href="#pricing" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">Pricing</a>
            <a href="#faq-section" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">FAQ</a>
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
