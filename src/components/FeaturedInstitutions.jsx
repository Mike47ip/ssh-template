import React from 'react';

const FeaturedInstitutions = () => {
  const institutions = [
    {
      name: "Kingston University",
      image: "/images/image-1.png",
      description: "Leading sustainability programs and research in environmental consciousness",
      link: "View More"
    },
    {
      name: "University of Liverpool",
      image: "/images/image-2.png", 
      description: "Excellence in environmental studies and sustainable development",
      link: "View More"
    },
    {
      name: "London South Bank University",
      image: "/images/image-3.png",
      description: "Innovation in sustainable technology and green engineering",
      link: "View More"
    },
    {
      name: "University of Greenwich",
      image: "/images/image-4.png",
      description: "Comprehensive sustainability education and climate research",
      link: "View More"
    }
  ];

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
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Institutions
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Building a sustainable pathway towards environmental consciousness and social responsibility. 
            Discover world-class institutions leading the way in sustainability education and research.
          </p>
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {institutions.map((institution, index) => (
            <div
              key={index}
              className="rounded-lg p-6 hover:opacity-90 transition-all duration-300 cursor-pointer group border border-gray-700"
              style={{ backgroundColor: '#141413' }}
            >
              {/* Institution Image */}
              <div className="w-full h-32 flex items-center justify-center mb-4 bg-white rounded-lg overflow-hidden">
                <img 
                  src={institution.image} 
                  alt={`${institution.name} Logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Institution Name */}
              <h3 className="text-white text-lg font-semibold mb-3 text-center">
                {institution.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4 text-center leading-relaxed">
                {institution.description}
              </p>

              {/* View More Link */}
              <div className="text-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors group-hover:scale-105 transform">
                  {institution.link}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-green-600 text-green-400 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All Institutions
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedInstitutions;