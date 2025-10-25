import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-400 mb-4">
              Study Sustainability Hub
            </h1>
            <p className="text-gray-600">
              Navbar component ready - waiting for next component...
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;