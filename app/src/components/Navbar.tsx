import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: t('nav.home') as string },
    { path: '/office-cleaning', label: t('nav.office') as string },
    { path: '/pricing', label: t('nav.pricing') as string },
    { path: '/contact', label: t('nav.contact') as string },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bg' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group transition-transform duration-200"
          >
            <img
              src="/team-cleaner-logo.jpg"
              alt="Team Cleaner Logo"
              width={160}
              height={40}
              className="h-10 w-auto rounded-md shadow-sm"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              Team Cleaner
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-medium transition-colors duration-200 ${location.pathname === link.path
                  ? 'text-[#10B981]'
                  : isScrolled
                    ? 'text-gray-700 hover:text-[#10B981]'
                    : 'text-gray-700 hover:text-[#10B981]'
                  } group`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[#10B981] transition-all duration-250 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone */}
            <a
              href="tel:0876971625"
              className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#10B981] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0876 971 625</span>
            </a>

            {/* Language Toggle */}
            <button
              type="button"
              onClick={toggleLanguage}
              className="relative flex items-center gap-1 px-3 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label={language === 'en' ? 'Switch language to Bulgarian' : 'Switch language to English'}
            >
              <span
                className={`text-sm font-medium transition-colors ${language === 'en' ? 'text-[#10B981]' : 'text-gray-500'
                  }`}
              >
                EN
              </span>
              <span className="text-gray-400">|</span>
              <span
                className={`text-sm font-medium transition-colors ${language === 'bg' ? 'text-[#10B981]' : 'text-gray-500'
                  }`}
              >
                BG
              </span>
              <span
                className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-sm transition-all duration-300 ${language === 'en' ? 'left-1.5' : 'left-[calc(100%-1.75rem)]'
                  }`}
              />
            </button>

            {/* CTA Button */}
            <Button
              asChild
              className="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#10B981]/30"
            >
              <Link to="/contact">{t('nav.quote')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
            }`}
        >
          <div className="bg-white rounded-2xl shadow-lg p-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname === link.path
                  ? 'bg-[#10B981]/10 text-[#10B981]'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              {/* Language Toggle Mobile */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100"
                aria-label={language === 'en' ? 'Switch language to Bulgarian' : 'Switch language to English'}
              >
                <span className={language === 'en' ? 'text-[#10B981] font-medium' : 'text-gray-500'}>
                  EN
                </span>
                <span className="text-gray-400">|</span>
                <span className={language === 'bg' ? 'text-[#10B981] font-medium' : 'text-gray-500'}>
                  BG
                </span>
              </button>

              <Button
                asChild
                className="bg-[#10B981] hover:bg-[#059669] text-white rounded-full"
              >
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('nav.quote')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
