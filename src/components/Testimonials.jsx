import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Exceptional service! The team went above and beyond to meet our needs and provided invaluable guidance.",
      name: "Honya Bright Selasie",
      role: "UI/UX Designer",
      avatar: "/images/avatar-1.jpg"
    },
    {
      quote: "Exceptional service! The team went above and beyond to meet our needs and provided invaluable guidance.",
      name: "Honya Bright Selasie", 
      role: "UI/UX Designer",
      avatar: "/images/avatar-2.jpg"
    },
    {
      quote: "Exceptional service! The team went above and beyond to meet our needs and provided invaluable guidance.",
      name: "Honya Bright Selasie",
      role: "UI/UX Designer", 
      avatar: "/images/avatar-3.jpg"
    },
    {
      quote: "Exceptional service! The team went above and beyond to meet our needs and provided invaluable guidance.",
      name: "Honya Bright Selasie",
      role: "UI/UX Designer",
      avatar: "/images/avatar-4.jpg"
    },
    {
      quote: "Exceptional service! The team went above and beyond to meet our needs and provided invaluable guidance.",
      name: "Honya Bright Selasie",
      role: "UI/UX Designer",
      avatar: "/images/avatar-5.jpg"
    },
    {
      quote: "Exceptional service! The team went above and beyond to meet our needs and provided invaluable guidance.",
      name: "Honya Bright Selasie",
      role: "UI/UX Designer",
      avatar: "/images/avatar-6.jpg"
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
          <div className="inline-block bg-gray-700 text-white px-4 py-2 rounded text-sm mb-6">
            Testimonials
          </div>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Speech Bubble Card */}
              <div 
                className="relative p-8 rounded-2xl shadow-lg"
                style={{ 
                  minHeight: '200px',
                  position: 'relative'
                }}
              >
                {/* Background with opacity */}
                <div 
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: 'radial-gradient(ellipse at top, #6B6B6B 0%, #3A3A3A 50%, #1F1F1F 100%)',
                    opacity: 0.6,  // BACKGROUND OPACITY CONTROL: Adjust this value (0.1 to 1.0)
                    border: '1px solid #262626'  // BORDER CONTROL: Thin border added here
                  }}
                ></div>
                
                {/* Content with full opacity */}
                <div className="relative z-10">
                  {/* Quote Text */}
                  <p className="text-white text-sm leading-relaxed mb-6" style={{ opacity: 1 }}>
                    "{testimonial.quote}"
                  </p>
                </div>
                
                {/* Speech Bubble Arrow with matching opacity */}
                <div 
                  className="absolute bottom-0 left-8 transform translate-y-full"
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '15px solid transparent',
                    borderRight: '15px solid transparent',
                    borderTop: '15px solid #1F1F1F',
                    opacity: 0.6  // ARROW OPACITY: Should match background opacity above
                  }}
                ></div>
              </div>
              
              {/* User Info Below Arrow */}
              <div className="flex items-center mt-6 ml-2">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-gray-600 flex items-center justify-center">
                  <img 
                    src="/images/image-testimonials.png" 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                  <p className="text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;