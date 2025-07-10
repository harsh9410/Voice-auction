import React, { useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { UserCircleIcon, StarIcon, TrophyIcon, ClockIcon, CheckBadgeIcon, BoltIcon } from '@heroicons/react/24/solid';

const ProfilePage: React.FC = () => {
  const { state } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.user) {
      navigate('/signin');
    }
  }, [state.user, navigate]);

  if (!state.user) return null;

  return (
    <div className="max-w-md mx-auto mt-10 rounded-xl shadow-2xl p-8 border border-cyan-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-cyan-800 flex items-center justify-center shadow-lg mb-2 border-4 border-cyan-400">
          <span className="text-4xl text-white font-bold">
            {state.user.name ? state.user.name.split(' ').map(n => n[0]).join('').toUpperCase() : 'NB'}
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-cyan-400 drop-shadow mb-1">{state.user.name || 'N/A'}</h2>
        <span className="text-gray-400 text-sm">Neural Bidder</span>
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex items-center gap-2">
          <BoltIcon className="w-5 h-5 text-yellow-400" />
          <span className="text-gray-400">Credits:</span>
          <span className="text-yellow-400 font-semibold text-lg">{state.user.timeCredits?.toLocaleString() || 0}</span>
        </div>
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 text-purple-400" />
          <span className="text-gray-400">Neuro Focus Score:</span>
          <span className="text-purple-400 font-semibold text-lg">{state.user.neuroFocusScore ?? 'N/A'}</span>
        </div>
        <div className="flex items-center gap-2">
          <TrophyIcon className="w-5 h-5 text-green-400" />
          <span className="text-gray-400">Total Wins:</span>
          <span className="text-green-400 font-semibold text-lg">{state.user.totalWins ?? 'N/A'}</span>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5 text-cyan-400" />
          <span className="text-gray-400">Total Time Spent:</span>
          <span className="text-cyan-400 font-semibold text-lg">{state.user.totalTimeSpent ?? 'N/A'} seconds</span>
        </div>
      </div>
      <div className="mb-2">
        <div className="flex items-center gap-2 mb-1">
          <CheckBadgeIcon className="w-5 h-5 text-cyan-300" />
          <span className="text-gray-400">Badges:</span>
        </div>
        <div className="flex flex-wrap gap-2 mt-1">
          {state.user.badges && state.user.badges.length > 0 ? (
            state.user.badges.map((badge: string, idx: number) => (
              <span key={idx} className="bg-cyan-800 text-cyan-200 px-3 py-1 rounded-full text-xs font-semibold shadow">
                {badge}
              </span>
            ))
          ) : (
            <span className="text-gray-500">None</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 