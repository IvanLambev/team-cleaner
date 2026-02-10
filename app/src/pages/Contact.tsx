import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const ctx = gsap.context(() => {
      gsap.from('.contact-hero-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.calendly-container', {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 70%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 70%',
        },
        x: 50,
        opacity: 0,
        duration: 0.7,
        delay: 0.2,
        ease: 'power3.out',
      });
    });

    return () => {
      ctx.revert();
      document.body.removeChild(script);
    };
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: t('contact.info.phone.value'),
      href: `tel:${(t('contact.info.phone.value') as string).replace(/\s/g, '')}`,
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: t('contact.info.email.value'),
      href: `mailto:${t('contact.info.email.value')}`,
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: t('contact.info.address.value'),
      href: '#',
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: t('contact.info.hours.value'),
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-white to-[#10B981]/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center contact-hero-content">
            <span className="inline-block px-4 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm font-medium mb-6">
              {t('nav.contact')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div ref={formRef} className="lg:col-span-3">
              <div className="calendly-container bg-white rounded-3xl shadow-xl overflow-hidden min-h-[700px]">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/teamcleaner-info/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=10b981"
                  style={{ minWidth: '320px', height: '700px' }}
                />
              </div>
            </div>

            {/* Contact Info */}
            <div ref={infoRef} className="lg:col-span-2">
              <div className="contact-info space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#10B981]/5 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#10B981] transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-[#10B981] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                      <p className="font-medium text-gray-900 group-hover:text-[#10B981] transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-96 bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11728.32431666661!2d23.2458!3d42.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa9aeb4bb2009f%3A0xc3f8e580e06006e8!2z0LvRjtC70LjQvSAy!5e0!3m2!1sen!2sbg!4v1707074000000!5m2!1sen!2sbg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location"
          />
        </div>
      </section>
    </div>
  );
}
