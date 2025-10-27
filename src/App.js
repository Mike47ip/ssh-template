import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AdsSection from './components/AdsSection';
import DisciplineSection from './components/DisciplineSection';
import FeaturedInstitutions from './components/FeaturedInstitutions';
import FeaturedCourses from './components/FeaturedCourses';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <AdsSection />
      <DisciplineSection />
      <FeaturedInstitutions />
      <FeaturedCourses />
      <FAQ />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;