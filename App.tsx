
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import InvestmentPhilosophy from './pages/InvestmentPhilosophy';
import RealEstate from './pages/RealEstate';
import Advisory from './pages/Advisory';
import RiskGovernance from './pages/RiskGovernance';
import Experience from './pages/Experience';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import { LanguageProvider } from './context/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/philosophy" element={<InvestmentPhilosophy />} />
              <Route path="/real-estate" element={<RealEstate />} />
              <Route path="/advisory" element={<Advisory />} />
              <Route path="/risk-governance" element={<RiskGovernance />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/insights" element={<Insights />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
