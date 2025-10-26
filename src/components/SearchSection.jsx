import React, { useState } from 'react';

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    discipline: '',
    studyType: '',
    qualification: '',
    institution: '',
    location: '',
    startTerm: '',
    delivery: ''
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const handleSearch = () => {
    console.log('Search term:', searchTerm);
    console.log('Filters:', filters);
    // Add your search logic here
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Main Search Bar */}
      <div className="rounded-lg p-4 mb-4" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search For courses"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-400 text-lg px-4 py-3 focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="text-white px-8 py-3 rounded-lg font-medium transition-colors ml-4"
            style={{ backgroundColor: '#00A650' }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter Dropdowns */}
      <div className="rounded-lg p-4" style={{ backgroundColor: '#0F0F0F' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          
          {/* Discipline */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">📚</span>
            </div>
            <select
              value={filters.discipline}
              onChange={(e) => handleFilterChange('discipline', e.target.value)}
              className="bg-transparent text-white text-sm flex-1 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Discipline</option>
              <option value="environmental" className="bg-gray-800">Environmental Science</option>
              <option value="renewable" className="bg-gray-800">Renewable Energy</option>
              <option value="sustainability" className="bg-gray-800">Sustainability Studies</option>
            </select>
            <span className="text-gray-400">▼</span>
          </div>

          {/* Study Type */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">📖</span>
            </div>
            <select
              value={filters.studyType}
              onChange={(e) => handleFilterChange('studyType', e.target.value)}
              className="bg-transparent text-white text-sm flex-1 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Study Type</option>
              <option value="fulltime" className="bg-gray-800">Full Time</option>
              <option value="parttime" className="bg-gray-800">Part Time</option>
              <option value="online" className="bg-gray-800">Online</option>
            </select>
            <span className="text-gray-400">▼</span>
          </div>

          {/* Qualification */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">🎓</span>
            </div>
            <select
              value={filters.qualification}
              onChange={(e) => handleFilterChange('qualification', e.target.value)}
              className="bg-transparent text-white text-sm flex-1 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Qualification</option>
              <option value="bachelor" className="bg-gray-800">Bachelor's</option>
              <option value="master" className="bg-gray-800">Master's</option>
              <option value="phd" className="bg-gray-800">PhD</option>
            </select>
            <span className="text-gray-400">▼</span>
          </div>

          {/* Institution */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">🏛️</span>
            </div>
            <select
              value={filters.institution}
              onChange={(e) => handleFilterChange('institution', e.target.value)}
              className="bg-transparent text-white text-sm flex-1 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Institution</option>
              <option value="harvard" className="bg-gray-800">Harvard University</option>
              <option value="mit" className="bg-gray-800">MIT</option>
              <option value="stanford" className="bg-gray-800">Stanford</option>
            </select>
            <span className="text-gray-400">▼</span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">📍</span>
            </div>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
              className="bg-transparent text-white text-sm flex-1 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Location</option>
              <option value="usa" className="bg-gray-800">United States</option>
              <option value="uk" className="bg-gray-800">United Kingdom</option>
              <option value="canada" className="bg-gray-800">Canada</option>
            </select>
            <span className="text-gray-400">▼</span>
          </div>

          {/* Start Term */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">📅</span>
            </div>
            <select
              value={filters.startTerm}
              onChange={(e) => handleFilterChange('startTerm', e.target.value)}
              className="bg-transparent text-white text-sm flex-1 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Start Term</option>
              <option value="fall2024" className="bg-gray-800">Fall 2024</option>
              <option value="spring2025" className="bg-gray-800">Spring 2025</option>
              <option value="summer2025" className="bg-gray-800">Summer 2025</option>
            </select>
            <span className="text-gray-400">▼</span>
          </div>

          {/* Delivery */}
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-600 rounded flex items-center justify-center">
              <span className="text-white text-xs">🚚</span>
            </div>
            <select
              value={filters.delivery}
              onChange={(e) => handleFilterChange('delivery', e.target.value)}
              className="bg-transparent text-white text-sm flex-1 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-gray-800">Delivery</option>
              <option value="campus" className="bg-gray-800">On Campus</option>
              <option value="online" className="bg-gray-800">Online</option>
              <option value="hybrid" className="bg-gray-800">Hybrid</option>
            </select>
            <span className="text-gray-400">▼</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchSection;