/**
 * Samati — Cambio de idioma ES / EN
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'samati-lang';
  /* Número móvil con WhatsApp activo (código país + número, sin + ni espacios).
     Ejemplo Costa Rica: 50688881234 — NO usar línea fija (2222-xxxx). */
  var WHATSAPP_PHONE = '50622223333';

  function getWhatsAppHref(lang) {
    var message = translations[lang] && translations[lang]['whatsapp.message']
      ? translations[lang]['whatsapp.message']
      : translations.es['whatsapp.message'];
    return 'https://api.whatsapp.com/send?phone=' + WHATSAPP_PHONE + '&text=' + encodeURIComponent(message);
  }

  var translations = {
    es: {
      'meta.home.title': 'Samati | Soluciones Financieras',
      'meta.home.desc': 'Samati — Soluciones financieras integrales para empresas y personas. Confianza, innovación y solidez financiera.',
      'meta.contact.title': 'Contacto | Samati — Soluciones Financieras',
      'meta.contact.desc': 'Agenda tu consulta con Samati — Soluciones financieras integrales en Torre de Santa Ana, Costa Rica. Asesoría para personas y empresas.',
      'meta.services.title': 'Servicios | Samati — Soluciones Financieras',
      'meta.services.desc': 'Conoce todos los servicios de Samati — Asesoría financiera, inversiones, planificación fiscal, consultoría empresarial y más.',

      'lang.aria': 'Switch to English',
      'lang.label': 'EN',

      'logo.aria': 'Samati — Inicio',
      'logo.alt': 'Samati — Soluciones Financieras',
      'nav.label': 'Navegación principal',
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.contact': 'Contacto',
      'nav.cta': 'Contáctanos',
      'nav.cta.contact': 'Agendar consulta',
      'nav.toggle.open': 'Abrir menú de navegación',
      'nav.toggle.close': 'Cerrar menú de navegación',

      'hero.title': 'Soluciones financieras que impulsan tu <span class="hero__title-highlight">crecimiento</span>',
      'hero.subtitle': 'En Samati combinamos experiencia, tecnología y cercanía para ofrecerte asesoría financiera integral, segura y adaptada a tus objetivos.',
      'hero.cta.services': 'Conoce nuestros servicios',
      'hero.cta.contact': 'Contáctanos',
      'hero.scroll': 'Desplázate',
      'hero.scroll.aria': 'Desplázate a la sección Quiénes somos',

      'about.label.who': '¿Quiénes',
      'about.label.are': ' somos?',
      'about.tagline': 'Tu aliado de confianza en soluciones financieras integrales.',
      'about.content.title': 'Somos tu aliado estratégico en <span class="about__content-title-accent">finanzas</span>',
      'about.p1': 'Samati es una firma dedicada a brindar soluciones financieras integrales para personas y empresas. Combinamos rigor profesional con un enfoque humano para acompañarte en cada decisión importante.',
      'about.p2': 'Nuestro compromiso es ofrecerte asesoría clara, segura y personalizada, con la transparencia y solidez que el sector financiero exige y la cercanía que mereces.',
      'about.p3': 'Contamos con un equipo especializado en finanzas corporativas, inversiones y planificación fiscal. Diseñamos estrategias adaptadas a tus metas, con procesos transparentes y comunicación constante en cada etapa.',
      'about.years': 'Años de experiencia',
      'about.advice': 'Asesoría integral',
      'about.personal': 'Enfoque personalizado',
      'about.cta': 'Conoce nuestros servicios',

      'team.title': 'Equipo de <span class="team__title-accent">trabajo</span>',
      'team.intro': 'Acompañamos a empresas y personas en procesos de crecimiento y fortalecimiento financiero.<br>Lo hacemos con rigor profesional, cercanía y resultados concretos.',
      'team.carousel.aria': 'Miembros del equipo — desliza para ver más',
      'team.role.director': 'Directora',
      'team.role.consulting': 'Gerente de Consultoría',
      'team.role.audit': 'Gerente de Auditoría',
      'team.role.advisor': 'Asesor Financiero Senior',
      'team.role.analyst': 'Analista Financiero',
      'team.role.coordinator': 'Coordinador de Proyectos',
      'team.alt.1': 'Directora Samati',
      'team.alt.2': 'Gerente de Consultoría Samati',
      'team.alt.3': 'Gerente de Auditoría Samati',
      'team.alt.4': 'Asesor Financiero Samati',
      'team.alt.5': 'Analista Financiero Samati',
      'team.alt.6': 'Coordinador de Proyectos Samati',

      'services.eyebrow': 'Servicios',
      'services.page.title': 'Todos nuestros servicios',
      'services.title': 'Soluciones financieras a tu medida',
      'services.desc': 'Descubre nuestras principales líneas de servicio. Cada solución está pensada para adaptarse a las necesidades de empresas y personas.',
      'services.slider.prev': 'Servicio anterior',
      'services.slider.next': 'Siguiente servicio',
      'services.slider.cta': 'Solicitar consulta',
      'services.slider.contact': 'Agenda tu consulta',
      'services.promo.1.title': '¿Primera consulta?',
      'services.promo.1.text': 'Agenda una sesión con nuestros asesores y conoce cómo podemos ayudarte.',
      'services.promo.1.cta': 'Solicitar consulta →',
      'services.promo.2.title': 'Encuéntranos',
      'services.promo.2.text': 'Visítanos en Torre de Santa Ana, San José, Costa Rica.',
      'services.promo.2.cta': 'Ver ubicación →',
      'services.promo.3.title': 'Asesoría personalizada',
      'services.promo.3.text': 'Soluciones integrales para personas y empresas con enfoque humano.',
      'services.promo.3.cta': 'Conoce más →',
      'service.advisory.label': 'Asesoría Financiera',
      'service.advisory.teaser': 'Orientación experta para optimizar recursos y reducir riesgos.',
      'service.advisory.headline': 'Decisiones con confianza.',
      'service.invest.label': 'Gestión de Inversiones',
      'service.invest.teaser': 'Portafolios diversificados alineados a tu perfil de riesgo.',
      'service.invest.headline': 'Crece tu patrimonio.',
      'service.tax.label': 'Planificación Fiscal',
      'service.tax.teaser': 'Estrategias legales de optimización tributaria.',
      'service.tax.headline': 'Optimización inteligente.',
      'service.consulting.label': 'Consultoría Empresarial',
      'service.consulting.teaser': 'Análisis corporativo y decisiones estratégicas.',
      'service.consulting.headline': 'Estrategia empresarial.',
      'service.wealth.label': 'Planificación Patrimonial',
      'service.wealth.teaser': 'Protección y transferencia de patrimonio.',
      'service.wealth.headline': 'Protege tu legado.',
      'service.intl.label': 'Finanzas Internacionales',
      'service.intl.teaser': 'Operaciones transfronterizas y estructuras globales.',
      'service.intl.headline': 'Alcance global.',
      'service.advisory.title': 'Asesoría Financiera',
      'service.advisory.text': 'Orientación experta para optimizar recursos, reducir riesgos y alcanzar tus metas financieras a corto y largo plazo.',
      'service.invest.title': 'Gestión de Inversiones',
      'service.invest.text': 'Portafolios diversificados y estrategias de inversión alineadas con tu perfil de riesgo y objetivos de rendimiento.',
      'service.tax.title': 'Planificación Fiscal',
      'service.tax.text': 'Estrategias legales de optimización tributaria para personas y empresas, maximizando eficiencia y cumplimiento.',
      'service.consulting.title': 'Consultoría Empresarial',
      'service.consulting.text': 'Análisis financiero corporativo, reestructuración, fusiones y apoyo en la toma de decisiones estratégicas.',
      'service.wealth.title': 'Planificación Patrimonial',
      'service.wealth.text': 'Protección y transferencia de patrimonio con visión integral para familias y empresas familiares.',
      'service.intl.title': 'Finanzas Internacionales',
      'service.intl.text': 'Asesoría en operaciones transfronterizas, cambio de divisas y estructuras financieras globales.',
      'service.link': 'Más información',

      'footer.tagline': 'Soluciones financieras con confianza e innovación.',
      'footer.nav.aria': 'Enlaces del pie de página',
      'footer.nav.title': 'Navegación',
      'footer.contact.title': 'Contacto',
      'footer.cta': 'Agendar consulta',
      'footer.address': 'Torre de Santa Ana, Santa Ana, San José, Costa Rica',
      'footer.copy': 'Samati. Todos los derechos reservados.',

      'whatsapp.aria': 'Escríbenos por WhatsApp',
      'whatsapp.title': 'Chatea con Samati en WhatsApp',
      'whatsapp.message': 'Hola, me gustaría recibir más información sobre los servicios de Samati.',

      'contact.hero.title': 'Tu próxima decisión financiera merece <span class="contact-hero__title-highlight">asesoría experta</span>',
      'contact.hero.subtitle': 'En Samati acompañamos a personas y empresas con soluciones financieras claras, seguras y alineadas a sus objetivos. Cuéntanos tu situación y diseñemos juntos el camino.',
      'contact.hero.cta': 'Solicitar consulta',
      'contact.hero.areas': 'Ver áreas de asesoría',

      'process.eyebrow': 'Cómo trabajamos',
      'process.title': 'Un proceso claro, de la consulta a la estrategia',
      'process.desc': 'Cada contacto inicia un acompañamiento estructurado. Así convertimos tu consulta en un plan financiero concreto.',
      'process.1.title': 'Cuéntanos tu situación',
      'process.1.text': 'Comparte tus objetivos, plazos y contexto financiero. Escuchamos con atención para entender qué necesitas resolver.',
      'process.2.title': 'Analizamos con rigor',
      'process.2.text': 'Nuestro equipo evalúa escenarios, riesgos y oportunidades con criterios profesionales y transparencia total.',
      'process.3.title': 'Proponemos tu estrategia',
      'process.3.text': 'Recibes recomendaciones claras y un plan de acción adaptado — ya sea para invertir, optimizar recursos o fortalecer tu patrimonio.',

      'areas.eyebrow': 'Áreas de asesoría',
      'areas.title': '¿En qué podemos orientarte?',
      'areas.desc': 'Selecciona el área que más se acerca a tu necesidad. Precargaremos tu solicitud para agilizar la consulta.',
      'consult.advisory.text': 'Optimización de recursos, reducción de riesgos y metas a corto y largo plazo.',
      'consult.invest.text': 'Portafolios diversificados alineados a tu perfil de riesgo y rendimiento.',
      'consult.tax.text': 'Estrategias legales de optimización tributaria para personas y empresas.',
      'consult.consulting.text': 'Análisis corporativo, reestructuración y decisiones estratégicas.',
      'consult.wealth.text': 'Protección y transferencia de patrimonio con visión integral.',
      'consult.intl.text': 'Operaciones transfronterizas, divisas y estructuras financieras globales.',
      'consult.cta': 'Solicitar consulta',

      'form.eyebrow': 'Tu consulta',
      'form.title': 'Agenda tu sesión con Samati',
      'form.desc': 'Completa el formulario y un asesor financiero se comunicará contigo para entender tu situación y proponer los siguientes pasos.',
      'trust.1': 'Información tratada con estricta confidencialidad',
      'trust.2': 'Respuesta en un plazo máximo de 24 horas hábiles',
      'trust.3': 'Atención personalizada para personas y empresas',
      'info.email': 'Correo',
      'info.phone': 'Teléfono',
      'form.clientType': 'Tipo de cliente',
      'form.person': 'Persona',
      'form.company': 'Empresa',
      'form.name': 'Nombre completo',
      'form.name.ph': 'Tu nombre o razón social',
      'form.email': 'Correo electrónico',
      'form.email.ph': 'tu@correo.com',
      'form.phone': 'Teléfono',
      'form.area': 'Área de consulta',
      'form.area.placeholder': 'Selecciona un área de asesoría',
      'form.area.other': 'Otra consulta',
      'form.message': 'Cuéntanos tu situación',
      'form.message.ph': 'Describe brevemente tus objetivos financieros, plazos o la situación que deseas resolver...',
      'form.submit': 'Enviar solicitud de consulta',
      'form.sending': 'Enviando...',

      'form.error.nombre.required': 'El nombre completo es obligatorio.',
      'form.error.nombre.short': 'El nombre debe tener al menos 3 caracteres.',
      'form.error.email.required': 'El correo electrónico es obligatorio.',
      'form.error.email.invalid': 'Ingresa un correo electrónico válido.',
      'form.error.telefono.required': 'El teléfono es obligatorio.',
      'form.error.telefono.invalid': 'Ingresa un número de teléfono válido.',
      'form.error.asunto.required': 'El asunto es obligatorio.',
      'form.error.servicio.required': 'Selecciona un área de consulta.',
      'form.error.mensaje.required': 'El mensaje es obligatorio.',
      'form.error.mensaje.short': 'El mensaje debe tener al menos 10 caracteres.',
      'form.feedback.invalid': 'Por favor, corrige los errores en el formulario.',
      'form.feedback.success': '¡Solicitud enviada con éxito! Un asesor de Samati se comunicará contigo pronto.',
      'form.feedback.error': 'Ocurrió un error al enviar el mensaje. Intenta de nuevo más tarde.',

      'location.eyebrow': 'Oficinas Samati',
      'location.title': 'Visítanos en Torre de Santa Ana',
      'location.desc': 'Prefieres una reunión presencial. Agenda tu cita en nuestras oficinas en Santa Ana, San José, Costa Rica.',
      'location.caption': 'Reuniones presenciales con total discreción',
      'location.address': 'Dirección',
      'location.hours': 'Horario',
      'location.hours.text': 'Lun — Vie: 9:00 — 18:00<br>Sáb: 10:00 — 14:00',
      'location.cta': 'Cómo llegar',
      'location.photo.alt': 'Vista aérea de Santa Ana, San José — Costa Rica',
      'location.map.title': 'Ubicación de Samati — Torre de Santa Ana, Costa Rica'
    },
    en: {
      'meta.home.title': 'Samati | Financial Solutions',
      'meta.home.desc': 'Samati — Comprehensive financial solutions for companies and individuals. Trust, innovation, and financial strength.',
      'meta.contact.title': 'Contact | Samati — Financial Solutions',
      'meta.contact.desc': 'Book a consultation with Samati — Comprehensive financial solutions at Torre de Santa Ana, Costa Rica. Advisory for individuals and companies.',
      'meta.services.title': 'Services | Samati — Financial Solutions',
      'meta.services.desc': 'Explore all Samati services — Financial advisory, investments, tax planning, business consulting, and more.',

      'lang.aria': 'Cambiar a español',
      'lang.label': 'ES',

      'logo.aria': 'Samati — Home',
      'logo.alt': 'Samati — Financial Solutions',
      'nav.label': 'Main navigation',
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.cta': 'Contact us',
      'nav.cta.contact': 'Book a consultation',
      'nav.toggle.open': 'Open navigation menu',
      'nav.toggle.close': 'Close navigation menu',

      'hero.title': 'Financial solutions that drive your <span class="hero__title-highlight">growth</span>',
      'hero.subtitle': 'At Samati we combine experience, technology, and a personal approach to offer comprehensive, secure financial advice tailored to your goals.',
      'hero.cta.services': 'Explore our services',
      'hero.cta.contact': 'Contact us',
      'hero.scroll': 'Scroll',
      'hero.scroll.aria': 'Scroll to the Who we are section',

      'about.label.who': 'Who',
      'about.label.are': ' we are',
      'about.tagline': 'Your trusted partner in comprehensive financial solutions.',
      'about.content.title': 'We are your strategic partner in <span class="about__content-title-accent">finance</span>',
      'about.p1': 'Samati is a firm dedicated to providing comprehensive financial solutions for individuals and companies. We combine professional rigor with a human approach to support you in every important decision.',
      'about.p2': 'Our commitment is to offer clear, secure, and personalized advice, with the transparency and strength the financial sector demands and the closeness you deserve.',
      'about.p3': 'We have a team specialized in corporate finance, investments, and tax planning. We design strategies tailored to your goals, with transparent processes and constant communication at every stage.',
      'about.years': 'Years of experience',
      'about.advice': 'End-to-end advice',
      'about.personal': 'Personalized approach',
      'about.cta': 'Explore our services',

      'team.title': 'Our <span class="team__title-accent">team</span>',
      'team.intro': 'We support companies and individuals through growth and financial strengthening.<br>We do it with professional rigor, closeness, and concrete results.',
      'team.carousel.aria': 'Team members — swipe to see more',
      'team.role.director': 'Director',
      'team.role.consulting': 'Consulting Manager',
      'team.role.audit': 'Audit Manager',
      'team.role.advisor': 'Senior Financial Advisor',
      'team.role.analyst': 'Financial Analyst',
      'team.role.coordinator': 'Project Coordinator',
      'team.alt.1': 'Samati Director',
      'team.alt.2': 'Samati Consulting Manager',
      'team.alt.3': 'Samati Audit Manager',
      'team.alt.4': 'Samati Financial Advisor',
      'team.alt.5': 'Samati Financial Analyst',
      'team.alt.6': 'Samati Project Coordinator',

      'services.eyebrow': 'Services',
      'services.page.title': 'All our services',
      'services.title': 'Financial solutions tailored to you',
      'services.desc': 'Discover our main service lines. Each solution is designed to adapt to the needs of companies and individuals.',
      'services.slider.prev': 'Previous service',
      'services.slider.next': 'Next service',
      'services.slider.cta': 'Request a consultation',
      'services.slider.contact': 'Book your consultation',
      'services.promo.1.title': 'First consultation?',
      'services.promo.1.text': 'Book a session with our advisors and learn how we can help you.',
      'services.promo.1.cta': 'Request a consultation →',
      'services.promo.2.title': 'Find us',
      'services.promo.2.text': 'Visit us at Torre de Santa Ana, San José, Costa Rica.',
      'services.promo.2.cta': 'View location →',
      'services.promo.3.title': 'Personalized advisory',
      'services.promo.3.text': 'Comprehensive solutions for individuals and companies with a human approach.',
      'services.promo.3.cta': 'Learn more →',
      'service.advisory.label': 'Financial Advisory',
      'service.advisory.teaser': 'Expert guidance to optimize resources and reduce risk.',
      'service.advisory.headline': 'Decisions with confidence.',
      'service.invest.label': 'Investment Management',
      'service.invest.teaser': 'Diversified portfolios aligned with your risk profile.',
      'service.invest.headline': 'Grow your wealth.',
      'service.tax.label': 'Tax Planning',
      'service.tax.teaser': 'Legal tax optimization strategies.',
      'service.tax.headline': 'Smart optimization.',
      'service.consulting.label': 'Business Consulting',
      'service.consulting.teaser': 'Corporate analysis and strategic decisions.',
      'service.consulting.headline': 'Business strategy.',
      'service.wealth.label': 'Wealth Planning',
      'service.wealth.teaser': 'Protection and transfer of wealth.',
      'service.wealth.headline': 'Protect your legacy.',
      'service.intl.label': 'International Finance',
      'service.intl.teaser': 'Cross-border operations and global structures.',
      'service.intl.headline': 'Global reach.',
      'service.advisory.title': 'Financial Advisory',
      'service.advisory.text': 'Expert guidance to optimize resources, reduce risk, and reach your short- and long-term financial goals.',
      'service.invest.title': 'Investment Management',
      'service.invest.text': 'Diversified portfolios and investment strategies aligned with your risk profile and return objectives.',
      'service.tax.title': 'Tax Planning',
      'service.tax.text': 'Legal tax optimization strategies for individuals and companies, maximizing efficiency and compliance.',
      'service.consulting.title': 'Business Consulting',
      'service.consulting.text': 'Corporate financial analysis, restructuring, mergers, and support in strategic decision-making.',
      'service.wealth.title': 'Wealth Planning',
      'service.wealth.text': 'Protection and transfer of wealth with a comprehensive view for families and family businesses.',
      'service.intl.title': 'International Finance',
      'service.intl.text': 'Advice on cross-border operations, currency exchange, and global financial structures.',
      'service.link': 'Learn more',

      'footer.tagline': 'Financial solutions with trust and innovation.',
      'footer.nav.aria': 'Footer links',
      'footer.nav.title': 'Navigation',
      'footer.contact.title': 'Contact',
      'footer.cta': 'Book a consultation',
      'footer.address': 'Torre de Santa Ana, Santa Ana, San José, Costa Rica',
      'footer.copy': 'Samati. All rights reserved.',

      'whatsapp.aria': 'Message us on WhatsApp',
      'whatsapp.title': 'Chat with Samati on WhatsApp',
      'whatsapp.message': 'Hello, I would like to receive more information about Samati\'s services.',

      'contact.hero.title': 'Your next financial decision deserves <span class="contact-hero__title-highlight">expert advice</span>',
      'contact.hero.subtitle': 'At Samati we support individuals and companies with clear, secure financial solutions aligned with their goals. Tell us about your situation and let’s design the path together.',
      'contact.hero.cta': 'Request a consultation',
      'contact.hero.areas': 'View advisory areas',

      'process.eyebrow': 'How we work',
      'process.title': 'A clear process, from consultation to strategy',
      'process.desc': 'Every contact starts structured support. That is how we turn your inquiry into a concrete financial plan.',
      'process.1.title': 'Tell us about your situation',
      'process.1.text': 'Share your goals, timelines, and financial context. We listen closely to understand what you need to resolve.',
      'process.2.title': 'We analyze with rigor',
      'process.2.text': 'Our team evaluates scenarios, risks, and opportunities with professional criteria and full transparency.',
      'process.3.title': 'We propose your strategy',
      'process.3.text': 'You receive clear recommendations and a tailored action plan — whether to invest, optimize resources, or strengthen your wealth.',

      'areas.eyebrow': 'Advisory areas',
      'areas.title': 'How can we help you?',
      'areas.desc': 'Select the area closest to your need. We will preload your request to speed up the consultation.',
      'consult.advisory.text': 'Resource optimization, risk reduction, and short- and long-term goals.',
      'consult.invest.text': 'Diversified portfolios aligned with your risk profile and returns.',
      'consult.tax.text': 'Legal tax optimization strategies for individuals and companies.',
      'consult.consulting.text': 'Corporate analysis, restructuring, and strategic decisions.',
      'consult.wealth.text': 'Protection and transfer of wealth with a comprehensive view.',
      'consult.intl.text': 'Cross-border operations, currencies, and global financial structures.',
      'consult.cta': 'Request a consultation',

      'form.eyebrow': 'Your inquiry',
      'form.title': 'Book your session with Samati',
      'form.desc': 'Complete the form and a financial advisor will contact you to understand your situation and propose next steps.',
      'trust.1': 'Information handled with strict confidentiality',
      'trust.2': 'Response within a maximum of 24 business hours',
      'trust.3': 'Personalized attention for individuals and companies',
      'info.email': 'Email',
      'info.phone': 'Phone',
      'form.clientType': 'Client type',
      'form.person': 'Individual',
      'form.company': 'Company',
      'form.name': 'Full name',
      'form.name.ph': 'Your name or company name',
      'form.email': 'Email',
      'form.email.ph': 'you@email.com',
      'form.phone': 'Phone',
      'form.area': 'Area of inquiry',
      'form.area.placeholder': 'Select an advisory area',
      'form.area.other': 'Other inquiry',
      'form.message': 'Tell us about your situation',
      'form.message.ph': 'Briefly describe your financial goals, timelines, or the situation you want to resolve...',
      'form.submit': 'Submit consultation request',
      'form.sending': 'Sending...',

      'form.error.nombre.required': 'Full name is required.',
      'form.error.nombre.short': 'The name must be at least 3 characters.',
      'form.error.email.required': 'Email is required.',
      'form.error.email.invalid': 'Enter a valid email address.',
      'form.error.telefono.required': 'Phone number is required.',
      'form.error.telefono.invalid': 'Enter a valid phone number.',
      'form.error.asunto.required': 'Subject is required.',
      'form.error.servicio.required': 'Select an area of inquiry.',
      'form.error.mensaje.required': 'The message is required.',
      'form.error.mensaje.short': 'The message must be at least 10 characters.',
      'form.feedback.invalid': 'Please correct the errors in the form.',
      'form.feedback.success': 'Request sent successfully! A Samati advisor will contact you soon.',
      'form.feedback.error': 'There was an error sending the message. Please try again later.',

      'location.eyebrow': 'Samati offices',
      'location.title': 'Visit us at Torre de Santa Ana',
      'location.desc': 'Prefer an in-person meeting? Book your appointment at our offices in Santa Ana, San José, Costa Rica.',
      'location.caption': 'In-person meetings with complete discretion',
      'location.address': 'Address',
      'location.hours': 'Hours',
      'location.hours.text': 'Mon — Fri: 9:00 — 18:00<br>Sat: 10:00 — 14:00',
      'location.cta': 'Get directions',
      'location.photo.alt': 'Aerial view of Santa Ana, San José — Costa Rica',
      'location.map.title': 'Samati location — Torre de Santa Ana, Costa Rica'
    }
  };

  function getStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'es') return stored;
    } catch (e) { /* ignore */ }
    return 'es';
  }

  function t(key) {
    var lang = window.SamatiI18n.lang;
    var dict = translations[lang] || translations.es;
    if (dict[key] !== undefined) return dict[key];
    if (translations.es[key] !== undefined) return translations.es[key];
    return key;
  }

  function apply(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'es';
    window.SamatiI18n.lang = lang;

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }

    document.documentElement.lang = lang;

    var isContact = document.body.classList.contains('page-contact');
    var isServices = document.body.classList.contains('page-services');
    var titleKey = isContact ? 'meta.contact.title' : (isServices ? 'meta.services.title' : 'meta.home.title');
    var descKey = isContact ? 'meta.contact.desc' : (isServices ? 'meta.services.desc' : 'meta.home.desc');
    document.title = t(titleKey);

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t(descKey));

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      el.textContent = t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria')));
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      el.setAttribute('alt', t(el.getAttribute('data-i18n-alt')));
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      el.setAttribute('title', t(el.getAttribute('data-i18n-title')));
    });

    var whatsappBtn = document.getElementById('whatsappFloat');
    if (whatsappBtn) {
      whatsappBtn.href = getWhatsAppHref(lang);
    }

    var map = document.querySelector('.contact__map iframe');
    if (map && map.src && map.src.indexOf('hl=' + lang) === -1) {
      if (/[?&]hl=(es|en)/.test(map.src)) {
        map.src = map.src.replace(/([?&])hl=(es|en)/, '$1hl=' + lang);
      } else {
        map.src += (map.src.indexOf('?') === -1 ? '?' : '&') + 'hl=' + lang;
      }
    }

    var switchBtn = document.getElementById('langSwitch');
    if (switchBtn) {
      switchBtn.setAttribute('aria-label', t('lang.aria'));
      var label = switchBtn.querySelector('.lang-switch__label');
      if (label) label.textContent = t('lang.label');
      switchBtn.setAttribute('data-lang', lang);
    }

    document.dispatchEvent(new CustomEvent('samati:langchange', { detail: { lang: lang } }));
  }

  function toggle() {
    apply(window.SamatiI18n.lang === 'en' ? 'es' : 'en');
  }

  window.SamatiI18n = {
    lang: getStoredLang(),
    t: t,
    apply: apply,
    toggle: toggle
  };

  apply(window.SamatiI18n.lang);

  var switchBtn = document.getElementById('langSwitch');
  if (switchBtn) {
    switchBtn.addEventListener('click', toggle);
  }
})();
