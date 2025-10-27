import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <section 
      className="w-full py-16 relative"
      style={{ 
        backgroundColor: '#0F0F0F',
        backgroundImage: "url('/images/bg-elipse.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-block bg-gray-700 text-white px-6 py-2 rounded-full text-sm mb-6">
            Stay Informed
          </div>
          <h2 className="text-gray-400 text-2xl md:text-3xl font-medium mb-8">
            Join Our Updates
          </h2>
        </div>

        {/* Newsletter Form */}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div 
            className="flex items-center p-2 rounded-full"
            style={{ backgroundColor: '#1A1A1A' }}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-white placeholder-gray-500 px-6 py-4 focus:outline-none text-lg"
              required
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Optional Privacy Text */}
        <p className="text-gray-500 text-sm mt-4 max-w-md mx-auto">
          Stay updated with our latest sustainability courses and environmental insights. 
          Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;