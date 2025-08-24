import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Layout Components
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/common/LoadingScreen';
import WhatsAppChat from './components/WhatsAppChat';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Main App Routes component
const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-[#EAEFEF] font-serif">
        <ScrollToTop />
        <Navigation />
        <AppRoutes />
        <WhatsAppChat />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
