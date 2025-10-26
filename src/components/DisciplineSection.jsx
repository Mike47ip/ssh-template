import React from 'react';

const DisciplineSection = () => {
  const disciplines = [
    {
      icon: '🌍',
      title: 'Environment, Conservation and Biodiversity',
      description: 'Learn about practical ways to reduce your carbon footprint, from daily eco-friendly products.',
      color: 'bg-green-600'
    },
    {
      icon: '🎨',
      title: 'Creative Arts, Design and Fashion',
      description: 'Learn about conservation efforts and how you can contribute to preserving our natural world.',
      color: 'bg-gray-600'
    },
    {
      icon: '🏗️',
      title: 'Architecture, Built Environment and Planning',
      description: 'Learn about conservation efforts and how you can contribute to preserving our natural world.',
      color: 'bg-gray-600'
    },
    {
      icon: '💼',
      title: 'Business, Management and Economics',
      description: 'Learn about conservation efforts and how you can contribute to preserving our natural world.',
      color: 'bg-green-600'
    },
    {
      icon: '⚖️',
      title: 'Law, Social and Society',
      description: 'Learn about conservation efforts and how you can contribute to preserving our natural world.',
      color: 'bg-gray-600'
    },
    {
      icon: '📢',
      title: 'Marketing, Communications and Media',
      description: 'Learn about conservation efforts and how you can contribute to preserving our natural world.',
      color: 'bg-gray-600'
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
          <div className="inline-block bg-gray-700 text-white px-6 py-2 rounded-full text-sm mb-6">
            Find What You're Looking For
          </div>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Search by Discipline
          </h2>
        </div>

        {/* Discipline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
          {disciplines.map((discipline, index) => (
            <div
              key={index}
              className="text-center hover:opacity-80 transition-opacity cursor-pointer group"
              style={{ width: '361px' }}
            >
              {/* Icon Section */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform overflow-hidden">
                  <img 
                    src="/images/discipline-icons.png" 
                    alt="Discipline Icon" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Title */}
                <h3 
                  className="text-white font-semibold mb-6 leading-[150%] text-center"
                  style={{ 
                    fontSize: '24px',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: '600',
                    minHeight: '80px'
                  }}
                >
                  {discipline.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-center max-w-sm" style={{ fontSize: '16px', lineHeight: '150%' }}>
                  {discipline.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default DisciplineSection;