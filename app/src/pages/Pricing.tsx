import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  CheckCircle,
  Sparkles,
  Building,
  Sofa,
  Wind,
  Bath,
  Warehouse,
  DoorOpen,
  RefreshCw,
  Hammer,
  Calendar,
  ArrowRight,
  SquareDashedBottom,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.pricing-hero-content', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.fromTo('.pricing-table-container', {
        y: 60,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: tableRef.current,
          start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
      });

      gsap.fromTo('.service-item', {
        y: 40,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, { scope: heroRef });

    return () => ctx.revert();
  }, [language]);

  // Pricing data matching the image
  const pricingData = {
    en: {
      columns: [
        { name: 'Studio', price: '€135', suitable: 'Apartments', time: '2 hours' },
        { name: '1 Bedroom', price: '€145', suitable: 'Apartments', time: '2.5 hours' },
        { name: '2 Bedroom', price: '€170', suitable: 'Apartments', time: '3 hours' },
        { name: '3 Bedroom', price: '€225', suitable: 'Houses & Apartments', time: '3.5 hours' },
        { name: '4 Bedroom', price: '€315', suitable: 'Houses', time: '4 hours' },
        { name: '5 Bedroom', price: '€450', suitable: 'Houses', time: '5 hours' },
        { name: '6 Bedroom', price: '€540', suitable: 'Houses', time: '6 hours' },
        { name: 'Hourly Service', price: '€63/hr', suitable: 'Custom', time: '2 hours min.' },
      ],
    },
    bg: {
      columns: [
        { name: 'Студио', price: '135 €', suitable: 'Апартаменти', time: '2 часа' },
        { name: '1 Спалня', price: '145 €', suitable: 'Апартаменти', time: '2.5 часа' },
        { name: '2 Спални', price: '170 €', suitable: 'Апартаменти', time: '3 часа' },
        { name: '3 Спални', price: '225 €', suitable: 'Къщи и Апартаменти', time: '3.5 часа' },
        { name: '4 Спални', price: '315 €', suitable: 'Къщи', time: '4 часа' },
        { name: '5 Спални', price: '450 €', suitable: 'Къщи', time: '5 часа' },
        { name: '6 Спални', price: '540 €', suitable: 'Къщи', time: '6 часа' },
        { name: 'На Час', price: '63 €/ч', suitable: 'По избор', time: 'мин. 2 часа' },
      ],
    },
  };

  const currentPricing = pricingData[language];

  const allServices = [
    { icon: Sparkles, name: (t('pricingpage.services.list') as string[])[0] },
    { icon: Hammer, name: (t('pricingpage.services.list') as string[])[1] },
    { icon: SquareDashedBottom, name: (t('pricingpage.services.list') as string[])[2] },
    { icon: Sofa, name: (t('pricingpage.services.list') as string[])[3] },
    { icon: Wind, name: (t('pricingpage.services.list') as string[])[4] },
    { icon: Bath, name: (t('pricingpage.services.list') as string[])[5] },
    { icon: Warehouse, name: (t('pricingpage.services.list') as string[])[6] },
    { icon: Calendar, name: (t('pricingpage.services.list') as string[])[7] },
    { icon: DoorOpen, name: (t('pricingpage.services.list') as string[])[8] },
    { icon: Building, name: (t('pricingpage.services.list') as string[])[9] },
    { icon: RefreshCw, name: (t('pricingpage.services.list') as string[])[10] },
  ];

  const pricingPlans = [
    {
      name: t('pricing.basic.title'),
      price: isMonthly ? t('pricing.basic.price') : '€110',
      description: t('pricing.basic.desc'),
      features: [t('pricing.basic.feature1'), t('pricing.basic.feature2'), t('pricing.basic.feature3')],
      popular: false,
    },
    {
      name: t('pricing.standard.title'),
      price: isMonthly ? t('pricing.standard.price') : '€160',
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
      price: isMonthly ? t('pricing.premium.price') : '€270',
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

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 via-white to-[#10B981]/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pricing-hero-content">
            <span className="inline-block px-4 py-1 bg-[#10B981]/10 text-[#10B981] rounded-full text-sm font-medium mb-6">
              {t('nav.pricing')}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('pricingpage.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {t('pricingpage.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section ref={tableRef} className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('pricingpage.table.title')}
          </h2>

          <div className="pricing-table-container overflow-x-auto">
            <div className="min-w-[1000px]">
              {/* Table Header */}
              <div className="grid grid-cols-9 gap-0 border-b-2 border-gray-200">
                <div className="p-4 font-semibold text-gray-500"></div>
                {currentPricing.columns.map((col, index) => (
                  <div key={index} className="p-4 text-center">
                    <p className="font-bold text-gray-900">{col.name}</p>
                  </div>
                ))}
              </div>

              {/* Price Row */}
              <div className="grid grid-cols-9 gap-0 border-b border-gray-100 bg-gray-50/50">
                <div className="p-4 font-medium text-gray-500 flex items-center">
                  {t('table.price')}
                </div>
                {currentPricing.columns.map((col, index) => (
                  <div key={index} className="p-4 text-center">
                    <p className="font-bold text-[#10B981] text-lg">{col.price}</p>
                  </div>
                ))}
              </div>

              {/* Suitable For Row */}
              <div className="grid grid-cols-9 gap-0 border-b border-gray-100">
                <div className="p-4 font-medium text-gray-500 flex items-center">
                  {t('table.suitable')}
                </div>
                {currentPricing.columns.map((col, index) => (
                  <div key={index} className="p-4 text-center">
                    <p className="text-sm text-gray-600">{col.suitable}</p>
                  </div>
                ))}
              </div>

              {/* Time Row */}
              <div className="grid grid-cols-9 gap-0 border-b border-gray-100 bg-gray-50/50">
                <div className="p-4 font-medium text-gray-500 flex items-center">
                  {t('table.time')}
                </div>
                {currentPricing.columns.map((col, index) => (
                  <div key={index} className="p-4 text-center">
                    <p className="text-sm text-gray-600">{col.time}</p>
                  </div>
                ))}
              </div>

              {/* Book Now Row */}
              <div className="grid grid-cols-9 gap-0">
                <div className="p-4"></div>
                {currentPricing.columns.map((_, index) => (
                  <div key={index} className="p-4 text-center">
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#10B981] hover:bg-[#059669] text-white rounded transition-all duration-300 hover:scale-105"
                    >
                      <Link to="/contact">{t('table.book')}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            {t('pricing.indicative')}
          </p>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pricingpage.subscription.title')}
            </h2>

            {/* Toggle */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className={`text-sm font-medium ${isMonthly ? 'text-gray-900' : 'text-gray-500'}`}>
                {t('pricing.toggle.monthly')}
              </span>
              <button
                onClick={() => setIsMonthly(!isMonthly)}
                className="relative w-14 h-7 bg-[#10B981] rounded-full transition-colors"
              >
                <span
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${isMonthly ? 'left-1' : 'left-8'
                    }`}
                />
              </button>
              <span className={`text-sm font-medium ${!isMonthly ? 'text-gray-900' : 'text-gray-500'}`}>
                {t('pricing.toggle.onetime')}
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'scale-105 shadow-2xl z-10' : ''
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

      {/* All Services Section */}
      <section ref={servicesRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('pricingpage.services.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedService(index)}
                className="service-item flex items-center gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#10B981]/5 hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center group-hover:bg-[#10B981] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#10B981] group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="font-medium text-gray-900 group-hover:text-[#10B981] transition-colors">
                  {service.name}
                </span>
                <ArrowRight className="w-5 h-5 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-[#10B981]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('pricingpage.custom.title')}
          </h2>
          <p className="text-lg text-white/80 mb-8">
            {t('pricingpage.custom.desc')}
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-[#10B981] hover:bg-gray-100 px-10 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <Link to="/contact">{t('nav.contact')}</Link>
          </Button>
        </div>
      </section>

      {/* Service Details Modal */}
      <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {selectedService !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#10B981]/10 rounded-xl flex items-center justify-center">
                    {(() => {
                      const ServiceIcon = allServices[selectedService].icon;
                      return <ServiceIcon className="w-6 h-6 text-[#10B981]" />;
                    })()}
                  </div>
                  {(t('pricingpage.services.list') as string[])[selectedService]}
                </DialogTitle>
                <DialogDescription className="text-base text-gray-600 mt-4">
                  {(t('pricingpage.services.details') as any)[selectedService]?.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-6 mt-6">
                {/* Benefits Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t('service.modal.benefits.title')}
                  </h3>
                  <ul className="space-y-2">
                    {(t('pricingpage.services.details') as any)[selectedService]?.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Equipment Section */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {t('service.modal.equipment.title')}
                  </h3>
                  <p className="text-gray-700">
                    {(t('pricingpage.services.details') as any)[selectedService]?.equipment}
                  </p>
                </div>

                {/* Recommendation Section */}
                <div className="bg-[#10B981]/5 p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('service.modal.recommendation.title')}
                  </h3>
                  <p className="text-gray-700">
                    {(t('pricingpage.services.details') as any)[selectedService]?.recommendation}
                  </p>
                </div>

                {/* CTA Button */}
                <Button
                  asChild
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-white py-6 rounded-xl text-base font-medium"
                >
                  <Link to="/contact">{t('service.modal.cta')}</Link>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
