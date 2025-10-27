import React, { useState } from 'react';

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState({});

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      number: "01",
      question: "What is sustainability",
      answer: "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
      number: "02", 
      question: "Why study sustainability?",
      answer: "You can study sustainability to understand environmental challenges and solutions."
    },
    {
      number: "03",
      question: "What careers are in sustainability?",
      answer: "Careers include environmental consulting, renewable energy, sustainable business, and more."
    },
    {
      number: "04",
      question: "How can I live more sustainably?",
      answer: "Start with small changes like reducing waste, using renewable energy, and sustainable transportation."
    },
    {
      number: "05",
      question: "What are renewable resources?",
      answer: "Renewable resources are natural resources that can be replenished naturally over time."
    },
    {
      number: "06",
      question: "What is carbon offsetting?",
      answer: "Carbon offsetting involves compensating for emissions by funding equivalent carbon dioxide savings."
    },
    {
      number: "07",
      question: "Why is sustainable agriculture important?",
      answer: "Sustainable agriculture ensures food security while protecting environmental resources."
    },
    {
      number: "08",
      question: "How can my community be more sustainable?",
      answer: "Communities can implement recycling programs, green spaces, and sustainable transportation."
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
            Explore Our Help Center
          </div>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Grid - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-0">
            {faqs.slice(0, 4).map((faq, index) => (
              <div key={index}>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-gray-800 text-white font-bold text-lg px-4 py-2 rounded-lg min-w-[60px] text-center">
                      {faq.number}
                    </div>
                    <h3 className="text-white text-lg font-medium">{faq.question}</h3>
                  </div>
                  <div className="text-white text-2xl font-light">
                    {openQuestions[index] ? '−' : '+'}
                  </div>
                </button>
                {openQuestions[index] && (
                  <div className="pb-6 ml-20">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
                {/* Gradient fading separator line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60"></div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-0">
            {faqs.slice(4, 8).map((faq, index) => (
              <div key={index + 4}>
                <button
                  onClick={() => toggleQuestion(index + 4)}
                  className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
                >
                  <div className="flex items-center space-x-6">
                    <div className="bg-gray-800 text-white font-bold text-lg px-4 py-2 rounded-lg min-w-[60px] text-center">
                      {faq.number}
                    </div>
                    <h3 className="text-white text-lg font-medium">{faq.question}</h3>
                  </div>
                  <div className="text-white text-2xl font-light">
                    {openQuestions[index + 4] ? '−' : '+'}
                  </div>
                </button>
                {openQuestions[index + 4] && (
                  <div className="pb-6 ml-20">
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
                {/* Gradient fading separator line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-60"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;