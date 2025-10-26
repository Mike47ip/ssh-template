import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <main className="w-full">
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
          <div className="text-center px-4 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-600 mb-4">
              Study Sustainability Hub
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl mb-8">
              Components ready - continue building...
            </p>
            <div className="text-sm text-gray-500 bg-white p-4 rounded-lg shadow-sm">
              <p>✅ Responsive double-decker navbar</p>
              <p>✅ Hero section with background image</p>
              <p>✅ Proper color scheme and styling</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;