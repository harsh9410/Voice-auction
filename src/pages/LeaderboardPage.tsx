import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Brain, Clock, Zap, Crown, Award } from 'lucide-react';

export function LeaderboardPage() {
  const leaderboardData = [
    {
      id: 1,
      name: 'Neural Master',
      avatar: '🧠',
      totalWins: 156,
      timeSpent: 2400,
      neuroScore: 98,
      badges: ['Neural Champion', 'Speed Bidder', 'Time Lord']
    },
    {
      id: 2,
      name: 'Voice Commander',
      avatar: '🎙️',
      totalWins: 142,
      timeSpent: 2100,
      neuroScore: 94,
      badges: ['Voice Master', 'Quick Strike', 'Focus King']
    },
    {
      id: 3,
      name: 'Time Bender',
      avatar: '⏰',
      totalWins: 128,
      timeSpent: 1950,
      neuroScore: 91,
      badges: ['Time Manipulator', 'Bid Warrior', 'Neural Ace']
    },
    {
      id: 4,
      name: 'Quantum Bidder',
      avatar: '⚡',
      totalWins: 115,
      timeSpent: 1800,
      neuroScore: 89,
      badges: ['Quantum Leap', 'Voice Pro', 'Time Saver']
    },
    {
      id: 5,
      name: 'Cyber Auctioneer',
      avatar: '🤖',
      totalWins: 98,
      timeSpent: 1650,
      neuroScore: 87,
      badges: ['Cyber Elite', 'Neural Focus', 'Bid Master']
    }
  ];

  const categories = [
    { name: 'Total Wins', icon: Trophy, key: 'totalWins' },
    { name: 'Time Spent', icon: Clock, key: 'timeSpent' },
    { name: 'Neural Score', icon: Brain, key: 'neuroScore' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Neural Bidding Leaderboard
          </h1>
          <p className="text-gray-400 text-lg">
            Top performers in voice-controlled auctions and neural bidding
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              className="flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 px-6 py-3 rounded-lg hover:bg-cyan-500/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <category.icon className="h-5 w-5 text-cyan-400" />
              <span className="text-white font-medium">{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Leaderboard */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="space-y-4">
            {leaderboardData.map((user, index) => (
              <motion.div
                key={user.id}
                className={`bg-gray-800/50 backdrop-blur-sm rounded-xl border p-6 ${
                  index === 0 
                    ? 'border-yellow-500/50 bg-gradient-to-r from-yellow-500/10 to-orange-500/10' 
                    : index === 1 
                    ? 'border-gray-300/50 bg-gradient-to-r from-gray-300/10 to-gray-400/10'
                    : index === 2
                    ? 'border-amber-600/50 bg-gradient-to-r from-amber-600/10 to-amber-700/10'
                    : 'border-cyan-500/20'
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-6">
                  {/* Rank */}
                  <div className="flex items-center space-x-2">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                      index === 0 
                        ? 'bg-yellow-500 text-white' 
                        : index === 1 
                        ? 'bg-gray-300 text-gray-800'
                        : index === 2
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-600 text-white'
                    }`}>
                      {index < 3 ? <Crown className="h-5 w-5" /> : index + 1}
                    </div>
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{user.avatar}</span>
                      <h3 className="text-xl font-semibold text-white">{user.name}</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Trophy className="h-4 w-4 text-yellow-400" />
                        <span className="text-gray-400">Wins:</span>
                        <span className="text-white font-medium">{user.totalWins}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-cyan-400" />
                        <span className="text-gray-400">Time:</span>
                        <span className="text-white font-medium">{Math.floor(user.timeSpent / 60)}h</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Brain className="h-4 w-4 text-purple-400" />
                        <span className="text-gray-400">Neural:</span>
                        <span className="text-white font-medium">{user.neuroScore}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="hidden lg:flex flex-wrap gap-2">
                    {user.badges.slice(0, 3).map((badge, badgeIndex) => (
                      <div
                        key={badgeIndex}
                        className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Showcase */}
        <motion.div
          className="mt-12 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Achievement Badges
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Neural Champion</h3>
              <p className="text-gray-400 text-sm">Achieve 95%+ neural focus score</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Speed Bidder</h3>
              <p className="text-gray-400 text-sm">Place 50+ bids in a single day</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Time Lord</h3>
              <p className="text-gray-400 text-sm">Master all time manipulation powers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}