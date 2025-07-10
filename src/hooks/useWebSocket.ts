import { useEffect, useCallback } from 'react';
import { useApp } from '../contexts/AppContext';

export function useWebSocket() {
  const { dispatch } = useApp();

  // Simulate WebSocket connection with mock data
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate auction updates
      const mockAuctions = [
        {
          id: '1',
          title: 'Quantum Neural Headset',
          description: 'Next-gen EEG device for enhanced bidding',
          image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
          currentBid: Math.floor(Math.random() * 1000) + 500,
          timeRemaining: Math.floor(Math.random() * 3600) + 300,
          isActive: true,
          bids: [],
          category: 'Technology'
        },
        {
          id: '2',
          title: 'Holographic Art Display',
          description: 'Immersive 3D art projection system',
          image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
          currentBid: Math.floor(Math.random() * 800) + 300,
          timeRemaining: Math.floor(Math.random() * 2400) + 600,
          isActive: true,
          bids: [],
          category: 'Art'
        },
        {
          id: '3',
          title: 'Time Crystal Pendant',
          description: 'Rare temporal manipulation artifact',
          image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
          currentBid: Math.floor(Math.random() * 1500) + 1000,
          timeRemaining: Math.floor(Math.random() * 1800) + 120,
          isActive: true,
          bids: [],
          category: 'Collectibles'
        }
      ];

      dispatch({ type: 'UPDATE_AUCTIONS', payload: mockAuctions });
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const sendBid = useCallback((auctionId: string, amount: number, isVoice: boolean = false) => {
    const bid = {
      id: Date.now().toString(),
      userId: '1',
      userName: 'Neural Bidder',
      amount,
      timestamp: new Date(),
      isVoice
    };

    dispatch({ type: 'PLACE_BID', payload: { auctionId, bid } });
    
    dispatch({ 
      type: 'ADD_NOTIFICATION', 
      payload: {
        id: Date.now().toString(),
        message: `Bid placed: ${amount} credits`,
        type: 'success',
        timestamp: new Date()
      }
    });
  }, [dispatch]);

  return { sendBid };
}