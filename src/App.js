import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import PhysiotherapistsPage from './pages/ForPhysotherapist';
import Contact from './pages/Contact';
import BlogPage from './components/BlogPage';


function App() {
  return (
    <Router>
      <header className="w-full fixed top-1 z-41 bg-white/80 backdrop-blur-md shadow-sm">
        {/* Your header content here */}
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/physiotherapists" element={<PhysiotherapistsPage />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/BlogPage" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
