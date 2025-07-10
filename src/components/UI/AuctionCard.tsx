import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Volume2 } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { VoiceButton } from './VoiceButton';
import { useVoice } from '../../hooks/useVoice';
import { useWebSocket } from '../../hooks/useWebSocket';

interface AuctionCardProps {
  auction: {
    id: string;
    title: string;
    description: string;
    image: string;
    currentBid: number;
    timeRemaining: number;
    isActive: boolean;
    bids: Array<any>;
    category: string;
  };
}

export function AuctionCard({ auction }: AuctionCardProps) {
  const { isListening, transcript, startListening, parseBid } = useVoice();
  const { sendBid } = useWebSocket();

  const handleVoiceBid = () => {
    if (isListening) return;
    
    startListening();
  };

  React.useEffect(() => {
    if (transcript) {
      const bidAmount = parseBid(transcript);
      if (bidAmount && bidAmount > auction.currentBid) {
        sendBid(auction.id, bidAmount, true);
      }
    }
  }, [transcript, parseBid, sendBid, auction.id, auction.currentBid]);

  const handleQuickBid = () => {
    const quickBidAmount = auction.currentBid + 100;
    sendBid(auction.id, quickBidAmount, false);
  };

  return (
    <motion.div
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={auction.image} 
          alt={auction.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <CountdownTimer timeRemaining={auction.timeRemaining} />
        </div>
        <div className="absolute top-2 left-2 bg-purple-500/20 text-purple-400 px-2 py-1 rounded-lg text-xs">
          {auction.category}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{auction.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{auction.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-medium">
              {auction.currentBid.toLocaleString()} credits
            </span>
          </div>
          <div className="flex items-center space-x-1 text-gray-400">
            <Users className="h-3 w-3" />
            <span className="text-xs">{auction.bids.length} bids</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <motion.button
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-4 py-2 rounded-lg mr-2 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleQuickBid}
          >
            Quick Bid
          </motion.button>
          
          <VoiceButton
            isListening={isListening}
            onToggle={handleVoiceBid}
            size="md"
          />
        </div>
        
        {transcript && (
          <motion.div 
            className="mt-2 p-2 bg-green-500/20 text-green-400 rounded-lg text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Volume2 className="h-3 w-3 inline mr-1" />
            {transcript}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}