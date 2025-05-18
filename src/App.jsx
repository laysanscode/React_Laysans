import React, { useState, useEffect } from 'react';
import './Static/CSS/style.css';
import './Static/CSS/chat.css';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Elements/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Elements/Footer';
import MetaTags from './Elements/MetaTags';
import Clients from './pages/Client';
import Careers from './pages/Careers';
import Services from './pages/Services';
import CareerForm from './pages/CareerForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Preloader from './Elements/Preloader/Preloader';
import ReactGA from 'react-ga4';
import NotFound from './pages/NotFound';
function AppContent() {
  const location = useLocation();

  // Initialize Google Analytics only once
  useEffect(() => {
    ReactGA.initialize('G-GLJ5MXEQLR', { debug: true });
  }, []);

  // Track pageview on route change
  useEffect(() => {
    // For HashRouter, the location.pathname is usually always "/"
    // So track the full hash including pathname and search from window.location
    const currentPath = window.location.hash.replace('#', '') || '/';
    ReactGA.send({ hitType: 'pageview', page: currentPath });
  }, [location]);

  return (
    <>
      <MetaTags />
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="client" element={<Clients />} />
          <Route path="careers" element={<Careers />} />
          <Route path="services" element={<Services />} />
          <Route path="careerform" element={<CareerForm />} />
           <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <Router>
          <AppContent />
        </Router>
      )}
    </>
  );
}

export default App;
