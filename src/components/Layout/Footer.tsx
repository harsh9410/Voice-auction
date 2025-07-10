import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900/95 border-t border-cyan-500/20 py-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">TimeBid</h3>
            <p className="text-gray-400 text-sm">
              The future of voice-controlled auctions powered by time credits and neural bidding.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4 text-gray-300">Features</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Brain className="h-3 w-3 text-purple-400" />
                <span>Neuro-Bidding</span>
              </li>
              <li className="flex items-center space-x-2">
                <Zap className="h-3 w-3 text-yellow-400" />
                <span>Time Credits</span>
              </li>
              <li className="flex items-center space-x-2">
                <Shield className="h-3 w-3 text-green-400" />
                <span>Secure Escrow</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4 text-gray-300">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-medium mb-4 text-gray-300">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://www.instagram.com/harsh_gupta_9410/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
              <li><a href="https://t.me/Harsh_gupta9410" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Telegram</a></li>
              <li><a href="https://www.linkedin.com/in/harsh-gupta-898852327/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 TimeBid. All rights reserved. Powered by neural networks and time manipulation.</p>
        </div>
      </div>
    </motion.footer>
  );
}