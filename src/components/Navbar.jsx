import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 z-50" style={{ backgroundColor: '#0F0F0F' }}>
      {/* Top Row */}
      <div className="w-full px-4 lg:px-6 border-b border-gray-700">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo Section */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Logo Image */}
            <img 
              src="/images/ssh-logo.png.png" 
              alt="Study Sustainability Hub Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Center Message */}
          <div className="hidden md:flex items-center px-12 py-4 rounded-lg" style={{ backgroundColor: '#271E0D' }}>
            <span className="text-sm mr-3" style={{ color: '#FCA300' }}>●</span>
            <span className="text-base font-medium" style={{ color: '#FCA300' }}>Click to download your free sustainability dictionary</span>
            <span className="text-sm ml-3" style={{ color: '#FCA300' }}>●</span>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <button className="font-medium transition-colors text-sm px-6 py-2 rounded border-2 text-white" style={{ borderColor: '#00A650', color: '#00A650' }}>
              Sign up
            </button>
            <button className="font-medium transition-colors text-sm px-6 py-2 rounded text-white" style={{ backgroundColor: '#00A650' }}>
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row - Navigation */}
      <div className="w-full px-4 lg:px-6">
        <div className="flex justify-between items-center h-12">
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center w-full">
            <div className="flex items-center space-x-6 xl:space-x-8">
              <a href="#" className="text-green-400 hover:text-green-300 font-medium transition-colors text-sm whitespace-nowrap">
                Home
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                University Programmes
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Free Courses
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Professional Training
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Events
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Scholarships
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Grants
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Fellowships
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Jobs
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Career Catalogue
              </a>
              <a href="#" className="text-white hover:text-green-400 font-medium transition-colors text-sm whitespace-nowrap">
                Advertise with us
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden w-full flex justify-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-green-400 p-2 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile center message */}
              <div className="md:hidden px-6 py-3 rounded-lg mb-3" style={{ backgroundColor: '#271E0D' }}>
                <span className="text-base font-medium" style={{ color: '#FCA300' }}>Click to download your free sustainability dictionary</span>
              </div>
              
              <a href="#" className="text-green-400 hover:text-green-300 block px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                University Programmes
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Free Courses
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Professional Training
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Events
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Scholarships
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Grants
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Fellowships
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Jobs
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Career Catalogue
              </a>
              <a href="#" className="text-white hover:text-green-400 block px-3 py-2 text-sm font-medium">
                Advertise with us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;