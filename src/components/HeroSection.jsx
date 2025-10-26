import React from 'react';
import SearchSection from './SearchSection';

const HeroSection = () => {
  return (
    <section 
      className="w-full h-[500px] relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/hero-bg-img.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Heading */}
      <div className="absolute top-16 left-0 right-0 text-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
          The World's largest directory on Sustainability Education
        </h1>
      </div>

      {/* Search Section */}
      <div className="absolute bottom-8 left-0 right-0">
        <SearchSection />
      </div>
    </section>
  );
};

export default HeroSection;