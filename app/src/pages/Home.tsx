import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Sparkles,
  Home as HomeIcon,
  Building,
  Truck,
  Star,
  CheckCircle,
  Clock,
  Calendar,
  Shield,
  Smile,
  ChevronRight,
  Quote,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title-word', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.fromTo('.hero-subtitle', {
        y: 30,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.fromTo('.hero-cta', {
        y: 20,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
        ease: 'power3.out',
      });

      gsap.fromTo('.hero-image', {
        x: 100,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Services section
      gsap.fromTo('.services-title', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 85%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out',
      });

      gsap.fromTo('.service-card', {
        y: 60,
        opacity: 0,
        rotateY: -30
      }, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        rotateY: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // About section
      gsap.fromTo('.about-image', {
        x: -80,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.fromTo('.about-content', {
        x: 50,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
        },
        x: 0,
        opacity: 1,
        duration: 0.7,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Process section
      gsap.fromTo('.process-step', {
        y: 50,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // Testimonials
      gsap.fromTo('.testimonial-card', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      });

      // Pricing
      gsap.fromTo('.pricing-card', {
        y: 60,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: pricingRef.current,
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // FAQ
      gsap.fromTo('.faq-item', {
        x: 30,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: faqRef.current,
          start: 'top 85%',
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, { scope: heroRef });

    return () => ctx.revert();
  }, [language]); // Re-run when language changes to recalculate triggers if needed

  const services = [
    {
      icon: Sparkles,
      title: t('services.basic.title'),
      description: t('services.basic.desc'),
    },
    {
      icon: HomeIcon,
      title: t('services.deep.title'),
      description: t('services.deep.desc'),
    },
    {
      icon: Building,
      title: t('services.office.title'),
      description: t('services.office.desc'),
    },
    {
      icon: Truck,
      title: t('services.move.title'),
      description: t('services.move.desc'),
    },
  ];

  const processSteps = [
    {
      icon: Calendar,
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      icon: Sparkles,
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      icon: CheckCircle,
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
    {
      icon: Smile,
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
    },
  ];

  const testimonials = [
    {
      name: t('testimonials.1.name'),
      text: t('testimonials.1.text'),
      rating: 5,
    },
    {
      name: t('testimonials.2.name'),
      text: t('testimonials.2.text'),
      rating: 5,
    },
    {
      name: t('testimonials.3.name'),
      text: t('testimonials.3.text'),
      rating: 5,
    },
  ];

  const pricingPlans = [
    {
      name: t('pricing.basic.title'),
      price: t('pricing.basic.price'),
      description: t('pricing.basic.desc'),
      features: [t('pricing.basic.feature1'), t('pricing.basic.feature2'), t('pricing.basic.feature3')],
      popular: false,
    },
    {
      name: t('pricing.standard.title'),
      price: t('pricing.standard.price'),
      description: t('pricing.standard.desc'),
      features: [
        t('pricing.standard.feature1'),
        t('pricing.standard.feature2'),
        t('pricing.standard.feature3'),
        t('pricing.standard.feature4'),
      ],
      popular: true,
    },
    {
      name: t('pricing.premium.title'),
      price: t('pricing.premium.price'),
      description: t('pricing.premium.desc'),
      features: [
        t('pricing.premium.feature1'),
        t('pricing.premium.feature2'),
        t('pricing.premium.feature3'),
        t('pricing.premium.feature4'),
        t('pricing.premium.feature5'),
      ],
      popular: false,
    },
  ];

  const faqItems = [
    { q: t('faq.1.q'), a: t('faq.1.a') },
    { q: t('faq.2.q'), a: t('faq.2.a') },
    { q: t('faq.3.q'), a: t('faq.3.a') },
    { q: t('faq.4.q'), a: t('faq.4.a') },
    { q: t('faq.5.q'), a: t('faq.5.a') },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-white to-[#10B981]/10" />

        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#10B981]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="hero-title-word inline-block">{t('hero.title').toString().split(' ').slice(0, 3).join(' ')}</span>{' '}
                  <span className="hero-title-word inline-block text-[#10B981]">{t('hero.title').toString().split(' ').slice(3, 5).join(' ')}</span>{' '}
                  <span className="hero-title-word inline-block">{t('hero.title').toString().split(' ').slice(5).join(' ')}</span>
                </h1>
                <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-xl">
                  {t('hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-wrap gap-4 hero-cta">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#10B981]/30"
                >
                  <Link to="/contact">{t('hero.cta.primary')}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-[#10B981] text-gray-700 hover:text-[#10B981] px-8 py-6 rounded-full text-lg transition-all duration-300 group"
                >
                  <Link to="/pricing" className="flex items-center gap-2">
                    {t('hero.cta.secondary')}
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 hero-cta">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{t('hero.rating')}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                    {t('hero.insured')}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-[#10B981]" />
                    {t('hero.sameDay')}
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image / ASCII Animation */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="hero-image relative">
                <img
                  src="/hero-cleaners.jpg"
                  alt="Professional cleaners"
                  className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#10B981]" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-500">{t('about.stat3')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 services-title">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="service-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-[#10B981]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#10B981] transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-[#10B981] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="about-image relative">
              <img
                src="/about-cleaners.jpg"
                alt="About our team"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#10B981]/10 rounded-full blur-2xl" />
            </div>

            <div className="about-content space-y-6">
              <span className="inline-block px-4 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm font-medium">
                {t('about.label')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600">{t('about.desc')}</p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: '15+', label: t('about.stat1') },
                  { value: '50K+', label: t('about.stat2') },
                  { value: '100%', label: t('about.stat3') },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-[#10B981]">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Button
                asChild
                className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-6 rounded-full text-lg mt-4"
              >
                <Link to="/contact">{t('about.cta')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('process.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('process.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step relative">
                <div className="bg-gradient-to-br from-[#10B981]/5 to-[#10B981]/10 rounded-3xl p-8 h-full">
                  <div className="w-16 h-16 bg-[#10B981] rounded-2xl flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-5xl font-bold text-[#10B981]/20 absolute top-4 right-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-[#10B981]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} id="testimonials" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('testimonials.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="testimonial-card border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <Quote className="w-10 h-10 text-[#10B981]/30 mb-4" />
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`pricing-card relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'scale-105 shadow-2xl z-10' : ''
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#10B981] text-white px-4 py-1 rounded-full text-sm font-medium">
                      {t('pricing.standard.badge')}
                    </span>
                  </div>
                )}
                <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-5 h-5 text-[#10B981]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={`w-full py-6 rounded-full font-medium transition-all duration-300 ${plan.popular
                      ? 'bg-[#10B981] hover:bg-[#059669] text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                  >
                    <Link to="/contact">{t('pricing.cta')}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} id="faq" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                src="/faq-cleaner.jpg"
                alt="FAQ"
                className="rounded-3xl shadow-2xl w-full object-cover sticky top-24"
              />
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {t('faq.title')}
              </h2>
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="faq-item bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <span className="font-semibold text-gray-900">{item.q}</span>
                      <span className="ml-4 transition-transform duration-300 group-open:rotate-180">
                        <ChevronRight className="w-5 h-5 text-[#10B981] rotate-90" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-gray-600">
                      {item.a}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#10B981]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('office.cta.title')}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {t('office.cta.subtitle')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#10B981] hover:bg-gray-100 px-10 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">{t('office.cta.button')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
