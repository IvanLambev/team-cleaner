import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const serviceLinks = [
    { label: t('services.basic.title'), path: '/pricing' },
    { label: t('services.deep.title'), path: '/pricing' },
    { label: t('services.office.title'), path: '/office-cleaning' },
    { label: t('services.move.title'), path: '/pricing' },
  ];

  const companyLinks = [
    { label: t('about.label'), path: '/#about' },
    { label: t('testimonials.title'), path: '/#testimonials' },
    { label: t('faq.title'), path: '/#faq' },
    { label: t('nav.pricing'), path: '/pricing' },
  ];

  return (
    <footer className="bg-gray-900 text-white">


      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img
                src="/team-cleaner-logo.jpg"
                alt="Team Cleaner Logo"
                width={160}
                height={40}
                className="h-10 w-auto rounded-lg shadow-sm"
                loading="lazy"
                decoding="async"
              />
              <span className="font-bold text-xl text-white">Team Cleaner</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Professional cleaning services for homes and offices. We bring sparkle to every space.
            </p>

          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.column.services')}</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#10B981] transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#10B981] transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.column.company')}</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#10B981] transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-[#10B981] transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.column.support')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#10B981] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t('contact.info.phone')}</p>
                  <p className="text-white">{t('contact.info.phone.value')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#10B981] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t('contact.info.email')}</p>
                  <p className="text-white text-sm break-all">{t('contact.info.email.value')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#10B981] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t('contact.info.address')}</p>
                  <p className="text-white text-sm">{t('contact.info.address.value')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#10B981] mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">{t('contact.info.hours')}</p>
                  <p className="text-white">{t('contact.info.hours.value')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>

          </div>
        </div>
      </div>
    </footer>
  );
}
