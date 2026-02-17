import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building,
  Users,
  Sparkles,
  Shield,
  Clock,
  CheckCircle,
  Briefcase,
  Monitor,
  Coffee,
  Trash2,
  Flower2,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OfficeCleaning() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.office-hero-content', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.fromTo('.office-hero-image', {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Services
      gsap.fromTo('.office-service-card', {
        y: 60,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Benefits
      gsap.fromTo('.benefit-item', {
        x: -50,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: 'top 80%',
        },
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, { scope: heroRef });

    return () => ctx.revert();
  }, [language]); // Re-run on language change to ensure fresh animations

  const officeServices = [
    {
      icon: Building,
      title: t('office.services.daily.title'),
      description: t('office.services.daily.desc'),
    },
    {
      icon: Monitor,
      title: t('office.services.workstation.title'),
      description: t('office.services.workstation.desc'),
    },
    {
      icon: Coffee,
      title: t('office.services.common.title'),
      description: t('office.services.common.desc'),
    },
    {
      icon: Trash2,
      title: t('office.services.waste.title'),
      description: t('office.services.waste.desc'),
    },
    {
      icon: Sparkles,
      title: t('office.services.deep.title'),
      description: t('office.services.deep.desc'),
    },
    {
      icon: Flower2,
      title: t('office.services.plant.title'),
      description: t('office.services.plant.desc'),
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: t('office.benefit1.title'),
      description: t('office.benefit1.desc'),
    },
    {
      icon: Users,
      title: t('office.benefit2.title'),
      description: t('office.benefit2.desc'),
    },
    {
      icon: Briefcase,
      title: t('office.benefit3.title'),
      description: t('office.benefit3.desc'),
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-white to-[#10B981]/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="office-hero-content space-y-6">
              <span className="inline-block px-4 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm font-medium">
                {t('nav.office')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {t('office.hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                {t('office.hero.subtitle')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  <Link to="/contact">{t('office.cta.button')}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-[#10B981] text-gray-700 hover:text-[#10B981] px-8 py-6 rounded-full text-lg"
                >
                  <Link to="/pricing">{t('nav.pricing')}</Link>
                </Button>
              </div>
            </div>

            <div className="office-hero-image">
              <img
                src="/office-cleaning.jpg"
                alt="Office cleaning"
                width={960}
                height={720}
                className="rounded-3xl shadow-2xl w-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('office.services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('office.services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {officeServices.map((service, index) => (
              <Card
                key={index}
                className="office-service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#10B981] transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[#10B981] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('office.benefits.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('office.benefits.subtitle')}
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="benefit-item flex gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-[#10B981]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="/process-cleaner.jpg"
                alt="Professional cleaner"
                width={960}
                height={1200}
                className="rounded-3xl shadow-2xl w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-[#10B981] rounded-full flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">24/7</p>
                    <p className="text-gray-500 text-sm">
                      {t('office.available')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#10B981] to-[#059669] rounded-3xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  {t('office.why.title')}
                </h2>
                <div className="space-y-4">
                  {[
                    t('office.features.1'),
                    t('office.features.2'),
                    t('office.features.3'),
                    t('office.features.4'),
                    t('office.features.5'),
                    t('office.features.6'),
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 text-white">
                      <CheckCircle className="w-6 h-6 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('office.ready.title')}
                </h3>
                <p className="text-white mb-6">
                  {t('office.ready.desc')}
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-[#10B981] hover:bg-gray-100 px-8 py-6 rounded-full text-lg font-semibold w-full"
                >
                  <Link to="/contact" className="flex items-center justify-center gap-2">
                    {t('office.cta.button')}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('office.cta.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('office.cta.subtitle')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#10B981] hover:bg-[#059669] text-white px-10 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#10B981]/30"
          >
            <Link to="/contact">{t('office.cta.button')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
