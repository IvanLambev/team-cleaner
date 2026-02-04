import React, { createContext, useContext, useState, useCallback } from 'react';

type Language = 'en' | 'bg';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.office': 'Office Cleaning',
    'nav.pricing': 'Pricing & Services',
    'nav.contact': 'Contact Us',
    'nav.quote': 'Get a Quote',

    // Hero
    'hero.title': 'Professional Cleaning Services for Your Home & Office',
    'hero.subtitle': 'Experience the difference with our trained professionals. We bring sparkle to every space with eco-friendly products and attention to detail.',
    'hero.cta.primary': 'Get a Free Quote',
    'hero.cta.secondary': 'Our Services',
    'hero.rating': '4.9/5 from 2,000+ reviews',
    'hero.insured': 'Fully Insured',
    'hero.sameDay': 'Same Day Service',

    // Services
    'services.title': 'Our Cleaning Services',
    'services.subtitle': 'From regular maintenance to deep cleaning, we have you covered',
    'services.basic.title': 'Basic Cleaning',
    'services.basic.desc': 'Regular maintenance cleaning to keep your space fresh and tidy.',
    'services.deep.title': 'Deep Cleaning',
    'services.deep.desc': 'Thorough cleaning for special occasions or seasonal refresh.',
    'services.office.title': 'Office Cleaning',
    'services.office.desc': 'Professional cleaning services for workplaces of all sizes.',
    'services.move.title': 'Move In/Out Cleaning',
    'services.move.desc': 'Complete cleaning service for smooth transitions.',

    // About
    'about.label': 'About Us',
    'about.title': 'Trusted Cleaning Professionals Since 2010',
    'about.desc': 'With over a decade of experience, Team Cleaner has been transforming spaces across the city. Our team of vetted professionals uses eco-friendly products and proven techniques to deliver exceptional results every time.',
    'about.cta': 'Learn More About Us',
    'about.stat1': '15+ Years Experience',
    'about.stat2': '50K+ Happy Clients',
    'about.stat3': '100% Satisfaction Guarantee',

    // Process
    'process.title': 'How It Works',
    'process.subtitle': 'Four simple steps to a cleaner space',
    'process.step1.title': 'Book Online',
    'process.step1.desc': 'Choose your service and schedule a time that works for you.',
    'process.step2.title': 'We Clean',
    'process.step2.desc': 'Our professional team arrives fully equipped and ready.',
    'process.step3.title': 'Quality Check',
    'process.step3.desc': 'We ensure every detail meets our high standards.',
    'process.step4.title': 'Enjoy',
    'process.step4.desc': 'Relax in your freshly cleaned space.',

    // Testimonials
    'testimonials.title': 'What Our Clients Say',
    'testimonials.1.name': 'Sarah M.',
    'testimonials.1.text': 'Absolutely fantastic service! My apartment has never looked better.',
    'testimonials.2.name': 'John D.',
    'testimonials.2.text': 'Professional, punctual, and thorough. Highly recommend!',
    'testimonials.3.name': 'Emily R.',
    'testimonials.3.text': 'The team went above and beyond. Will definitely book again.',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that fits your needs',
    'pricing.toggle.monthly': 'Monthly',
    'pricing.toggle.onetime': 'One-time',
    'pricing.basic.title': 'Basic',
    'pricing.basic.price': '$99',
    'pricing.basic.desc': 'Perfect for regular maintenance',
    'pricing.basic.feature1': '3 hours cleaning',
    'pricing.basic.feature2': '1 professional cleaner',
    'pricing.basic.feature3': 'Basic supplies included',
    'pricing.standard.title': 'Standard',
    'pricing.standard.price': '$149',
    'pricing.standard.desc': 'Most popular choice',
    'pricing.standard.feature1': '5 hours cleaning',
    'pricing.standard.feature2': '2 professional cleaners',
    'pricing.standard.feature3': 'All supplies included',
    'pricing.standard.feature4': 'Deep cleaning included',
    'pricing.standard.badge': 'Most Popular',
    'pricing.premium.title': 'Premium',
    'pricing.premium.price': '$249',
    'pricing.premium.desc': 'For complete transformation',
    'pricing.premium.feature1': '8 hours cleaning',
    'pricing.premium.feature2': '3 professional cleaners',
    'pricing.premium.feature3': 'Premium supplies included',
    'pricing.premium.feature4': 'Deep cleaning included',
    'pricing.premium.feature5': 'Organization service',
    'pricing.cta': 'Get Started',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.1.q': 'What areas do you service?',
    'faq.1.a': 'We provide cleaning services throughout the greater metropolitan area.',
    'faq.2.q': 'Do you bring your own supplies?',
    'faq.2.a': 'Yes, our team comes fully equipped with all necessary supplies.',
    'faq.3.q': 'How do I reschedule a booking?',
    'faq.3.a': 'You can reschedule through your account or by calling us.',
    'faq.4.q': 'Are your cleaners insured?',
    'faq.4.a': 'Absolutely. All our cleaners are fully vetted and insured.',
    'faq.5.q': "What's your cancellation policy?",
    'faq.5.a': 'Free cancellation up to 24 hours before your scheduled cleaning.',

    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready for a cleaner space? Contact us today.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Select Service',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.address': 'Address',
    'contact.info.hours': 'Working Hours',
    'contact.info.hours.value': 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
    'contact.info.phone.value': '0876 971 625',
    'contact.info.email.value': 'teamcleaner@mail.bg',
    'contact.info.address.value': 'Гр. София, жк. Люлин 2',

    // Footer
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.desc': 'Get cleaning tips and exclusive offers.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.cta': 'Subscribe',
    'footer.column.services': 'Services',
    'footer.column.company': 'Company',
    'footer.column.support': 'Support',
    'footer.copyright': '© 2026 Team Cleaner. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Office Cleaning Page
    'office.hero.title': 'Professional Office Cleaning Services',
    'office.hero.subtitle': 'Create a healthier, more productive workplace with our comprehensive office cleaning solutions.',
    'office.services.daily.title': 'Daily Cleaning',
    'office.services.daily.desc': 'Regular maintenance cleaning for office spaces',
    'office.services.workstation.title': 'Workstation Cleaning',
    'office.services.workstation.desc': 'Disinfection and cleaning of desks, computers, and equipment',
    'office.services.common.title': 'Common Area Cleaning',
    'office.services.common.desc': 'Cleaning kitchens, restrooms, and break areas',
    'office.services.waste.title': 'Waste Removal',
    'office.services.waste.desc': 'Regular garbage disposal and recycling',
    'office.services.deep.title': 'Deep Cleaning',
    'office.services.deep.desc': 'Thorough cleaning for special occasions',
    'office.services.plant.title': 'Plant Care',
    'office.services.plant.desc': 'Maintenance of office plants and greenery',

    'office.benefits.title': 'Why Choose Our Office Cleaning?',
    'office.benefits.subtitle': 'We understand the importance of a clean work environment',
    'office.benefit1.title': 'Healthier Workplace',
    'office.benefit1.desc': 'Reduce sick days with thorough sanitization and disinfection.',
    'office.benefit2.title': 'Increased Productivity',
    'office.benefit2.desc': 'A clean environment boosts employee morale and focus.',
    'office.benefit3.title': 'Professional Image',
    'office.benefit3.desc': 'Impress clients and visitors with a spotless office.',
    'office.cta.title': 'Ready to Transform Your Office?',
    'office.cta.subtitle': 'Get a customized quote for your business',
    'office.cta.button': 'Request a Quote',

    // Pricing Page
    'pricingpage.title': 'Pricing & Services',
    'pricingpage.subtitle': 'Transparent pricing for all your cleaning needs',
    'pricingpage.table.title': 'Home Cleaning Pricing',
    'pricingpage.services.title': 'All Our Services',
    'pricingpage.services.list': [
      'Basic cleaning',
      'Cleaning after renovation',
      'Carpet cleaning',
      'Washing sofas, chairs, etc.',
      'Window washing',
      'Bathroom cleaning',
      'Cleaning of attics and ceilings',
      'Subscription cleaning',
      'Entrance cleaning',
      'Cleaning of offices and warehouses',
      'Refreshing cleaning'
    ],

    // Table headers
    'table.studio': 'Studio',
    'table.1bed': '1 Bedroom',
    'table.2bed': '2 Bedroom',
    'table.3bed': '3 Bedroom',
    'table.4bed': '4 Bedroom',
    'table.5bed': '5 Bedroom',
    'table.6bed': '6 Bedroom',
    'table.hourly': 'Hourly Service',
    'table.price': 'Price',
    'table.suitable': 'Suitable for',
    'table.time': 'Est. Time',
    'table.book': 'Book Now',
    'table.apartments': 'Apartments',
    'table.houses': 'Houses',
    'table.housesApt': 'Houses & Apartments',
    'table.custom': 'Custom',
    'table.hours': 'hours',
    'table.hoursMin': '2 hours min.',

    // Additional
    'pricingpage.subscription.title': 'Subscription Plans',
    'pricingpage.custom.title': 'Need a Custom Quote?',
    'pricingpage.custom.desc': 'Contact us for a free consultation and customized quote for your needs.',
    'office.why.title': 'Why Choose Team Cleaner for Your Office?',
    'office.features.1': 'Trained and vetted professionals',
    'office.features.2': 'Eco-friendly cleaning products',
    'office.features.3': 'Flexible cleaning schedules',
    'office.features.4': 'Insurance and guarantee',
    'office.features.5': 'Competitive pricing',
    'office.features.6': 'Customized plans',
    'office.ready.title': 'Ready to get started?',
    'office.ready.desc': 'Contact us today for a free consultation and customized quote for your office.',
    'office.available': 'Available',
    'contact.success.title': 'Message Sent!',
    'contact.success.desc': 'Thank you! We will contact you soon.',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.phone.placeholder': '+1 (555) 123-4567',
    'contact.form.service.placeholder': 'Select service',
    'contact.form.message.placeholder': 'Describe your needs...',
    'contact.social.follow': 'Follow us on social media',
    'pricing.indicative': '* Prices are indicative and may vary depending on the condition of the premises.',
  },
  bg: {
    // Navigation
    'nav.home': 'Начало',
    'nav.office': 'Офис Почистване',
    'nav.pricing': 'Цени & Услуги',
    'nav.contact': 'Контакти',
    'nav.quote': 'Запитване',

    // Hero
    'hero.title': 'Професионални Почистващи Услуги за Вашия Дом и Офис',
    'hero.subtitle': 'Изпитайте разликата с нашите обучени професионалисти. Носим блясък във всяко пространство с екологични продукти и внимание към детайла.',
    'hero.cta.primary': 'Безплатна Оферта',
    'hero.cta.secondary': 'Нашите Услуги',
    'hero.rating': '4.9/5 от 2000+ отзива',
    'hero.insured': 'Застраховани',
    'hero.sameDay': 'В Същия Ден',

    // Services
    'services.title': 'Нашите Почистващи Услуги',
    'services.subtitle': 'От редовна поддръжка до дълбоко почистване, ние сме насреща',
    'services.basic.title': 'Основно Почистване',
    'services.basic.desc': 'Редовно поддържащо почистване за свежо и подредено пространство.',
    'services.deep.title': 'Дълбоко Почистване',
    'services.deep.desc': 'Задълбочено почистване за специални поводи или сезонно обновяване.',
    'services.office.title': 'Офис Почистване',
    'services.office.desc': 'Професионални почистващи услуги за работни места от всякакъв размер.',
    'services.move.title': 'Почистване При Настаняване/Напускане',
    'services.move.desc': 'Пълна почистваща услуга за гладки преходи.',

    // About
    'about.label': 'За Нас',
    'about.title': 'Надеждни Почистващи Професионалисти от 2010',
    'about.desc': 'С повече от десетилетие опит, Team Cleaner трансформира пространства из целия град. Нашият екип от проверени професионалисти използва екологични продукти и доказани техники за постигане на изключителни резултати всеки път.',
    'about.cta': 'Научете Повече',
    'about.stat1': '15+ Години Опит',
    'about.stat2': '50K+ Доволни Клиенти',
    'about.stat3': '100% Гаранция',

    // Process
    'process.title': 'Как Работим',
    'process.subtitle': 'Четири прости стъпки към по-чисто пространство',
    'process.step1.title': 'Резервирайте Онлайн',
    'process.step1.desc': 'Изберете услугата и удобно за вас време.',
    'process.step2.title': 'Ние Почистваме',
    'process.step2.desc': 'Нашият професионален екип пристига напълно екипиран.',
    'process.step3.title': 'Проверка на Качеството',
    'process.step3.desc': 'Уверяваме се, че всеки детайл отговаря на високите ни стандарти.',
    'process.step4.title': 'Наслаждавайте Се',
    'process.step4.desc': 'Отпуснете се в прясно почистеното си пространство.',

    // Testimonials
    'testimonials.title': 'Какво Казват Нашите Клиенти',
    'testimonials.1.name': 'Сара М.',
    'testimonials.1.text': 'Абсолютно фантастична услуга! Апартаментът ми никога не е изглеждал по-добре.',
    'testimonials.2.name': 'Йон Д.',
    'testimonials.2.text': 'Професионални, точни и задълбочени. Силно препоръчвам!',
    'testimonials.3.name': 'Емили Р.',
    'testimonials.3.text': 'Екипът надмина очакванията. Определено ще резервирам отново.',

    // Pricing
    'pricing.title': 'Прости, Прозрачни Цени',
    'pricing.subtitle': 'Изберете плана, който отговаря на вашите нужди',
    'pricing.toggle.monthly': 'Месечно',
    'pricing.toggle.onetime': 'Еднократно',
    'pricing.basic.title': 'Основен',
    'pricing.basic.price': '99 лв.',
    'pricing.basic.desc': 'Идеален за редовна поддръжка',
    'pricing.basic.feature1': '3 часа почистване',
    'pricing.basic.feature2': '1 професионален чистач',
    'pricing.basic.feature3': 'Основни консумативи',
    'pricing.standard.title': 'Стандартен',
    'pricing.standard.price': '149 лв.',
    'pricing.standard.desc': 'Най-популярен избор',
    'pricing.standard.feature1': '5 часа почистване',
    'pricing.standard.feature2': '2 професионални чистача',
    'pricing.standard.feature3': 'Всички консумативи',
    'pricing.standard.feature4': 'Дълбоко почистване',
    'pricing.standard.badge': 'Най-Популярен',
    'pricing.premium.title': 'Премиум',
    'pricing.premium.price': '249 лв.',
    'pricing.premium.desc': 'За пълна трансформация',
    'pricing.premium.feature1': '8 часа почистване',
    'pricing.premium.feature2': '3 професионални чистача',
    'pricing.premium.feature3': 'Премиум консумативи',
    'pricing.premium.feature4': 'Дълбоко почистване',
    'pricing.premium.feature5': 'Организация',
    'pricing.cta': 'Започнете',

    // FAQ
    'faq.title': 'Често Задавани Въпроси',
    'faq.1.q': 'Кои райони обслужвате?',
    'faq.1.a': 'Предоставяме почистващи услуги в целия град и околностите.',
    'faq.2.q': 'Носите ли си консумативи?',
    'faq.2.a': 'Да, нашият екип идва напълно екипиран с всички необходими консумативи.',
    'faq.3.q': 'Как мога да променя резервация?',
    'faq.3.a': 'Можете да промените резервацията през акаунта си или като ни се обадите.',
    'faq.4.q': 'Застраховани ли са чистачите?',
    'faq.4.a': 'Абсолютно. Всички наши чистачи са проверени и застраховани.',
    'faq.5.q': 'Каква е политиката за анулиране?',
    'faq.5.a': 'Безплатно анулиране до 24 часа преди насроченото почистване.',

    // Contact
    'contact.title': 'Свържете Се С Нас',
    'contact.subtitle': 'Готови за по-чисто пространство? Свържете се с нас днес.',
    'contact.form.name': 'Вашето Име',
    'contact.form.email': 'Имейл Адрес',
    'contact.form.phone': 'Телефонен Номер',
    'contact.form.service': 'Изберете Услуга',
    'contact.form.message': 'Вашето Съобщение',
    'contact.form.submit': 'Изпрати Съобщение',
    'contact.info.phone': 'Телефон',
    'contact.info.email': 'Имейл',
    'contact.info.address': 'Адрес',
    'contact.info.hours': 'Работно Време',
    'contact.info.hours.value': 'Пон-Пет: 8-18ч, Съб: 9-16ч',
    'contact.info.phone.value': '0876 971 625',
    'contact.info.email.value': 'teamcleaner@mail.bg',
    'contact.info.address.value': 'Гр. София, жк. Люлин 2',

    // Footer
    'footer.newsletter.title': 'Бъдете Информирани',
    'footer.newsletter.desc': 'Получавайте съвети за почистване и ексклузивни оферти.',
    'footer.newsletter.placeholder': 'Въведете имейл',
    'footer.newsletter.cta': 'Абонирайте се',
    'footer.column.services': 'Услуги',
    'footer.column.company': 'Компания',
    'footer.column.support': 'Поддръжка',
    'footer.copyright': '© 2026 Team Cleaner. Всички права запазени.',
    'footer.privacy': 'Политика за Поверителност',
    'footer.terms': 'Общи Условия',

    // Office Cleaning Page
    'office.hero.title': 'Професионални Офис Почистващи Услуги',
    'office.hero.subtitle': 'Създайте по-здравословно и продуктивно работно място с нашите комплексни решения за офис почистване.',
    'office.services.daily.title': 'Ежедневно Почистване',
    'office.services.daily.desc': 'Редовно поддържащо почистване на офис пространства',
    'office.services.workstation.title': 'Почистване на Работни Места',
    'office.services.workstation.desc': 'Дезинфекция и почистване на бюра, компютри и оборудване',
    'office.services.common.title': 'Почистване на Общи Помещения',
    'office.services.common.desc': 'Почистване на кухни, санитарни помещения и зони за почивка',
    'office.services.waste.title': 'Извозване на Отпадъци',
    'office.services.waste.desc': 'Редовно извозване на боклук и рециклиране',
    'office.services.deep.title': 'Дълбоко Почистване',
    'office.services.deep.desc': 'Задълбочено почистване за специални случаи',
    'office.services.plant.title': 'Грижа за Растения',
    'office.services.plant.desc': 'Поддръжка на офис растения и зеленина',

    'office.services.title': 'Нашите Офис Услуги',
    'office.services.subtitle': 'Персонализирани решения за бизнеси от всякакъв размер',
    'office.benefits.title': 'Защо Да Изберете Нашето Офис Почистване?',
    'office.benefits.subtitle': 'Разбираме важността на чистата работна среда',
    'office.benefit1.title': 'По-Здравословно Работно Място',
    'office.benefit1.desc': 'Намалете болничните дни със задълбочена дезинфекция.',
    'office.benefit2.title': 'Повишена Продуктивност',
    'office.benefit2.desc': 'Чистата среда повишава морала и фокуса на служителите.',
    'office.benefit3.title': 'Професионален Имидж',
    'office.benefit3.desc': 'Впечатлете клиенти и посетители с безупречен офис.',
    'office.cta.title': 'Готови Да Трансформирате Вашия Офис?',
    'office.cta.subtitle': 'Получете персонализирана оферта за вашия бизнес',
    'office.cta.button': 'Заявка за Оферта',

    // Pricing Page
    'pricingpage.title': 'Цени и Услуги',
    'pricingpage.subtitle': 'Прозрачни цени за всички ваши нужди от почистване',
    'pricingpage.table.title': 'Цени за Домашно Почистване',
    'pricingpage.services.title': 'Всички Наши Услуги',
    'pricingpage.services.list': [
      'Основно почистване',
      'Почистване след ремонт',
      'Почистване на килими',
      'Изпиране на дивани, столове и др.',
      'Измиване на прозорци',
      'Почистване на бани',
      'Почистване на тавани и мазета',
      'Абонаментно почистване',
      'Почистване на входове',
      'Почистване на офиси и складове',
      'Освежаващо почистване'
    ],

    // Table headers
    'table.studio': 'Студио',
    'table.1bed': '1 Спалня',
    'table.2bed': '2 Спални',
    'table.3bed': '3 Спални',
    'table.4bed': '4 Спални',
    'table.5bed': '5 Спални',
    'table.6bed': '6 Спални',
    'table.hourly': 'На Час',
    'table.price': 'Цена',
    'table.suitable': 'Подходящо за',
    'table.time': 'Време',
    'table.book': 'Резервирай',
    'table.apartments': 'Апартаменти',
    'table.houses': 'Къщи',
    'table.housesApt': 'Къщи и Апартаменти',
    'table.custom': 'По избор',
    'table.hours': 'часа',
    'table.hoursMin': 'мин. 2 часа',

    // Допълнителни
    'pricingpage.subscription.title': 'Абонаментни Планове',
    'pricingpage.custom.title': 'Нуждаете се от персонализирана оферта?',
    'pricingpage.custom.desc': 'Свържете се с нас за безплатна консултация и персонализирана оферта за вашите нужди.',
    'office.why.title': 'Защо да изберете Team Cleaner за вашия офис?',
    'office.features.1': 'Обучени и проверени професионалисти',
    'office.features.2': 'Екологични почистващи продукти',
    'office.features.3': 'Гъвкави графици за почистване',
    'office.features.4': 'Застраховка и гаранция',
    'office.features.5': 'Конкурентни цени',
    'office.features.6': 'Персонализирани планове',
    'office.ready.title': 'Готови ли сте да започнете?',
    'office.ready.desc': 'Свържете се с нас днес за безплатна консултация и персонализирана оферта за вашия офис.',
    'office.available': 'Налични сме',
    'contact.success.title': 'Съобщението е изпратено!',
    'contact.success.desc': 'Благодарим ви! Ще се свържем с вас скоро.',
    'contact.form.name.placeholder': 'Вашето име',
    'contact.form.email.placeholder': 'вашият@имейл.com',
    'contact.form.phone.placeholder': '0876 971 625',
    'contact.form.service.placeholder': 'Изберете услуга',
    'contact.form.message.placeholder': 'Опишете вашите нужди...',
    'contact.social.follow': 'Последвайте ни в социалните мрежи',
    'pricing.indicative': '* Цените са ориентировъчни и могат да варират в зависимост от състоянието на помещението.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('bg');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const t = useCallback((key: string): string | string[] => {
    const currentTranslations = translations[language] as Record<string, unknown>;

    // First, try direct lookup (for flat keys with dots)
    if (key in currentTranslations) {
      return currentTranslations[key] as string | string[];
    }

    // Fallback to nested lookup if not found as a direct key
    const keys = key.split('.');
    let value: unknown = currentTranslations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return value as string | string[];
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
