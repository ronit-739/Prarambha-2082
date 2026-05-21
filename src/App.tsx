import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SponsorPage from './pages/SponsorPage';
import SchedulePage from './pages/SchedulePage';
import NoticesPage from './pages/NoticesPage';
import ArchivesPage from './pages/ArchivesPage';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    // Force layout recalculation when viewport changes
    const handleViewportChange = () => {
      window.dispatchEvent(new Event('resize'));
    };

    window.addEventListener('orientationchange', handleViewportChange);
    window.addEventListener('resize', handleViewportChange);

    return () => {
      window.removeEventListener('orientationchange', handleViewportChange);
      window.removeEventListener('resize', handleViewportChange);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <Router>
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/sponsor" element={<SponsorPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/notices" element={<NoticesPage />} />
                <Route path="/archives" element={<ArchivesPage />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
