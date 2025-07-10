import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);
    try {
      await emailjs.send(
        'service_08wuxti',
        'template_lzj1ykm',
        {
          from_name: name,
          from_email: email,
          message: message,
        },
        'm4gEoizTa3mlw9peT'
      );
      setSuccess('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-8 px-4 dark:bg-gray-900">
      <div className="w-full max-w-xl bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-10 border border-cyan-100 dark:border-cyan-700">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Send us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {success && (
            <div className="text-green-600 dark:text-green-400 font-semibold">{success}</div>
          )}
          {error && (
            <div className="text-red-600 dark:text-red-400 font-semibold">{error}</div>
          )}
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 text-base"
              placeholder="Enter your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 text-base"
              placeholder="Enter your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 text-base min-h-[120px]"
              placeholder="Tell us about your project, questions, or how we can help..."
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold text-lg shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? 'Sending...' : (<><span>Send Message</span> <span aria-hidden="true">&rarr;</span></>)}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage; 