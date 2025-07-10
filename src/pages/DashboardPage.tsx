import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Trophy, Clock, Zap, TrendingUp, Award } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';

export function DashboardPage() {
  const { state } = useApp();

  const biddingData = [
    { day: 'Mon', bids: 12, wins: 3 },
    { day: 'Tue', bids: 19, wins: 5 },
    { day: 'Wed', bids: 8, wins: 2 },
    { day: 'Thu', bids: 15, wins: 4 },
    { day: 'Fri', bids: 22, wins: 6 },
    { day: 'Sat', bids: 18, wins: 3 },
    { day: 'Sun', bids: 25, wins: 8 }
  ];

  const neuroData = [
    { time: '09:00', focus: 75 },
    { time: '10:00', focus: 82 },
    { time: '11:00', focus: 78 },
    { time: '12:00', focus: 85 },
    { time: '13:00', focus: 90 },
    { time: '14:00', focus: 88 },
    { time: '15:00', focus: 92 }
  ];

  const stats = [
    {
      title: 'Time Credits',
      value: state.user?.timeCredits.toLocaleString() || '0',
      icon: Zap,
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/20'
    },
    {
      title: 'Total Wins',
      value: state.user?.totalWins || 0,
      icon: Trophy,
      color: 'text-green-400',
      bg: 'bg-green-500/20'
    },
    {
      title: 'Neuro Focus',
      value: `${state.user?.neuroFocusScore || 0}%`,
      icon: Brain,
      color: 'text-purple-400',
      bg: 'bg-purple-500/20'
    },
    {
      title: 'Time Spent',
      value: `${Math.floor((state.user?.totalTimeSpent || 0) / 60)}h`,
      icon: Clock,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {state.user?.name}
          </h1>
          <p className="text-gray-400">
            Your neural bidding dashboard and performance analytics
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.bg} flex items-center justify-center`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Bidding Activity */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-cyan-400" />
              Bidding Activity
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={biddingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Bar dataKey="bids" fill="#06B6D4" />
                <Bar dataKey="wins" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Neuro Focus */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Brain className="h-5 w-5 mr-2 text-purple-400" />
              Neural Focus Score
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={neuroData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Line 
                  type="monotone" 
                  dataKey="focus" 
                  stroke="#8B5CF6" 
                  strokeWidth={3}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Badges */}
        <motion.div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Award className="h-5 w-5 mr-2 text-yellow-400" />
            Earned Badges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {state.user?.badges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-3 bg-gray-700/50 rounded-lg p-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">{badge}</p>
                  <p className="text-gray-400 text-sm">Achievement unlocked</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}