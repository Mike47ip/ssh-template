import React from 'react';

const FeaturedCourses = () => {
  const courses = [
    {
      title: "MSc Sustainable Finance and Accounting",
      description: "Dive into data analytics, machine learning, and visualization with hands-on projects.",
      icon: "🎓"
    },
    {
      title: "MSc in Biodiversity, Conservation and Nature Recovery",
      description: "Dive into data analytics, machine learning, and visualization with hands-on projects.",
      icon: "🎓"
    },
    {
      title: "MSc in Environmental Change and Management",
      description: "Dive into data analytics, machine learning, and visualization with hands-on projects.",
      icon: "🎓"
    },
    {
      title: "BSc Sustainable Land and Business Management",
      description: "Dive into data analytics, machine learning, and visualization with hands-on projects.",
      icon: "🎓"
    },
    {
      title: "LLM Law, Environment, Sustainability and Business",
      description: "Dive into data analytics, machine learning, and visualization with hands-on projects.",
      icon: "🎓"
    },
    {
      title: "BSc Sustainable Land and Business Management",
      description: "Dive into data analytics, machine learning, and visualization with hands-on projects.",
      icon: "🎓"
    }
  ];

  return (
    <section 
      className="w-full py-20 relative"
      style={{ 
        backgroundColor: '#0F0F0F',
        backgroundImage: "url('/images/bg-elipse.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className='flex-col text-center'>

                  <div className="inline-block bg-gray-700 text-white px-6 py-2 rounded-full text-sm mb-6">
            Courses
          </div>
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured Courses
          </h2>
        </div>
        </div>



        {/* Course Cards Grid - Even wider spacing to match Figma exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-20 justify-items-center max-w-7xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="rounded-lg p-8 hover:opacity-90 transition-all duration-300 cursor-pointer group border border-gray-600 flex flex-col"
              style={{ 
                backgroundColor: '#141413',
                width: '400px',
                height: '280px',
                minWidth: '400px'
              }}
            >
              {/* Course Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <img 
                    src="/images/course-hat.png" 
                    alt="Course Icon"
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = '<span class="text-white text-2xl">🎓</span>';
                    }}
                  />
                </div>
              </div>

              {/* Course Title */}
              <h3 
                className="text-white font-medium text-center mb-6 leading-tight flex-shrink-0"
                style={{ 
                  fontSize: '20px',
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: '500',
                  minHeight: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {course.title}
              </h3>

              {/* Course Description */}
              <div className="text-center flex-grow flex items-center justify-center">
                <p 
                  className="text-gray-400 leading-relaxed max-w-xs"
                  style={{ 
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '1.5'
                  }}
                >
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-16">
          <button className="bg-transparent border-2 border-gray-600 text-gray-400 hover:border-green-600 hover:text-green-400 px-8 py-3 rounded-lg font-medium transition-colors">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;