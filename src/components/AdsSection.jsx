import React from 'react';

const AdsSection = () => {
  return (
    <section className="w-full py-8" style={{ backgroundColor: '#0F0F0F' }}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Ad Banner */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-lg p-8 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Advertise Your Sustainability Program
          </h2>
          <p className="text-green-100 text-lg mb-6 max-w-3xl mx-auto">
            Reach thousands of sustainability professionals and students. 
            Promote your courses, events, and opportunities on the world's largest sustainability education platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Advertising
            </button>
            <button 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Smaller Ad Spots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Demo Ad 1 */}
          <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
            <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🌍</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Global Climate Institute</h3>
            <p className="text-gray-400 text-sm mb-4">Master's in Climate Change Adaptation</p>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
              Learn More →
            </button>
          </div>

          {/* Demo Ad 2 */}
          <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
            <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">⚡</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Renewable Energy Academy</h3>
            <p className="text-gray-400 text-sm mb-4">Professional Certificate Program</p>
            <button className="text-green-400 hover:text-green-300 text-sm font-medium">
              Enroll Now →
            </button>
          </div>

          {/* Demo Ad 3 */}
          <div className="bg-gray-800 rounded-lg p-6 text-center border border-gray-700">
            <div className="w-16 h-16 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl">🌱</span>
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">Sustainable Business School</h3>
            <p className="text-gray-400 text-sm mb-4">MBA in Sustainable Management</p>
            <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
              Apply Today →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdsSection;