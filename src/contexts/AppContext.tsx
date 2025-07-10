import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  timeCredits: number;
  neuroFocusScore: number;
  badges: string[];
  totalWins: number;
  totalTimeSpent: number;
}

interface Auction {
  id: string;
  title: string;
  description: string;
  image: string;
  currentBid: number;
  timeRemaining: number;
  isActive: boolean;
  bids: Bid[];
  category: string;
}

interface Bid {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  timestamp: Date;
  isVoice: boolean;
}

interface AppState {
  user: User | null;
  auctions: Auction[];
  notifications: Notification[];
  isVoiceListening: boolean;
  darkMode: boolean;
}

interface Notification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error';
  timestamp: Date;
}

type AppAction = 
  | { type: 'SET_USER'; payload: User }
  | { type: 'UPDATE_AUCTIONS'; payload: Auction[] }
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'SET_VOICE_LISTENING'; payload: boolean }
  | { type: 'PLACE_BID'; payload: { auctionId: string; bid: Bid } }
  | { type: 'TOGGLE_DARK_MODE' };

const initialState: AppState = {
  user: {
    id: '1',
    name: 'Neural Bidder',
    timeCredits: 2500,
    neuroFocusScore: 85,
    badges: ['First Win', 'Voice Master', 'Time Saver'],
    totalWins: 12,
    totalTimeSpent: 1800
  },
  auctions: [],
  notifications: [],
  isVoiceListening: false,
  darkMode: true
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}>({ state: initialState, dispatch: () => {} });

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'UPDATE_AUCTIONS':
      return { ...state, auctions: action.payload };
    case 'ADD_NOTIFICATION':
      return { 
        ...state, 
        notifications: [...state.notifications, action.payload].slice(-5) 
      };
    case 'SET_VOICE_LISTENING':
      return { ...state, isVoiceListening: action.payload };
    case 'PLACE_BID':
      return {
        ...state,
        auctions: state.auctions.map(auction =>
          auction.id === action.payload.auctionId
            ? {
                ...auction,
                currentBid: action.payload.bid.amount,
                bids: [...auction.bids, action.payload.bid]
              }
            : auction
        )
      };
    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};