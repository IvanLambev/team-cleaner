import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Home = lazy(() => import('@/pages/Home'));
const OfficeCleaning = lazy(() => import('@/pages/OfficeCleaning'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Contact = lazy(() => import('@/pages/Contact'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Suspense fallback={<div className="py-24 text-center text-gray-600">Loading...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/office-cleaning" element={<OfficeCleaning />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
