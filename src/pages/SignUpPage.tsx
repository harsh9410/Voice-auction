import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: handle sign up logic here
    alert('Sign up logic not implemented.');
  };

  return (
    <div className="max-w-md mx-auto mt-16 bg-gray-900 rounded-lg shadow-lg p-8 border border-cyan-700">
      <h2 className="text-2xl font-bold mb-6 text-cyan-400">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-300 mb-1">Username</label>
          <input
            type="text"
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-cyan-400"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-colors"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-gray-400 text-sm text-center">
        Already have an account?{' '}
        <Link to="/signin" className="text-cyan-400 hover:underline">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUpPage; 