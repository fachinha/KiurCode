import { NavLink, ProjectItem, FaqItem, ProcessStage } from '../types';

export const BRAND = {
  name: 'Kiur Code',
  founder: 'Lucas Hartung',
  role: 'Estudiante de Ingeniería en Computación y Desarrollador de Software',
  location: 'San Carlos de Bariloche, Río Negro, Argentina',
  phoneDisplay: '+54 9 2944 30-7681',
  phoneRaw: '5492944307681',
  instagramUrl: 'https://www.instagram.com/kiur.code/',
  instagramHandle: '@kiur.code',
  linkedinUrl: 'https://www.linkedin.com/in/lucas-hartung/',
  tagline: 'Buenas ideas. Tecnología útil. Negocios que evolucionan.',
  heroTagline: 'SOLUCIONES DIGITALES PARA COMERCIOS Y EMPRESAS · BARILOCHE',
  heroTitleLead: 'Tu negocio tiene potencial.',
  heroTitleAccent: 'Construyamos la tecnología para hacerlo crecer.',
  heroDescription: 'Desarrollamos soluciones digitales para comercios que quieren conectar con más clientes, multiplicar sus ventas y profesionalizar sus procesos con herramientas modernas y a medida.',
};

export const getWhatsAppUrl = (messageText: string = 'Hola, quiero conocer las soluciones digitales que ofrece Kiur Code.'): string => {
  return `https://wa.me/${BRAND.phoneRaw}?text=${encodeURIComponent(messageText)}`;
};

export const WHATSAPP_MESSAGES = {
  general: 'Hola, quiero conocer las soluciones digitales que ofrece Kiur Code.',
  cards: 'Hola, llegué desde la web de Kiur Code y quiero consultar por las tarjetas inteligentes.',
  web: 'Hola, llegué desde la web de Kiur Code y quiero una página web para mi negocio.',
  erp: 'Hola, llegué desde la web de Kiur Code y quiero consultar por un sistema de gestión o software a medida.',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Tarjetas NFC', href: '#tarjetas' },
  { label: 'Desarrollo Web', href: '#web' },
  { label: 'Software & ERP', href: '#software' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Conoceme', href: '#conoceme' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUST_PILLARS = [
  {
    title: 'Soporte Cercano y Real',
    subtitle: 'Base en Bariloche',
    description: 'Trato humano directo sin intermediarios ni mesas de ayuda interminables. Conocemos el mercado local y acompañamos cada etapa.',
    metric: '1 a 1',
    metricLabel: 'Atención personalizada',
  },
  {
    title: 'Cero Comisiones por Venta',
    subtitle: 'Tu plataforma es 100% tuya',
    description: 'A diferencia de plataformas enlatadas que cobran alquileres mensuales perpetuos y comisiones por transacción, tu web te pertenece.',
    metric: '0%',
    metricLabel: 'Comisiones ocultas',
  },
  {
    title: 'Arquitectura Escalable',
    subtitle: 'Preparado para crecer',
    description: 'Construimos sobre código limpio y estándares modernos para que tu presencia digital pueda evolucionar hacia sistemas internos de gestión.',
    metric: '100%',
    metricLabel: 'Código propio a medida',
  },
  {
    title: 'Foco en Conversión',
    subtitle: 'Menos pasos, más ventas',
    description: 'Diseños pensados para que el cliente encuentre lo que busca al instante y se contacte o compre por canales ágiles como WhatsApp.',
    metric: '< 3s',
    metricLabel: 'Carga ultrarrápida',
  },
];

export const CARD_GALLERY_IMAGES = [
  {
    src: '/cards/card-1.jpg',
    caption: 'Tarjeta inteligente con chip NFC integrado y acabado premium mate',
  },
  {
    src: '/cards/card-2.jpg',
    caption: 'Diseño personalizado con logotipo del comercio y QR de respaldo',
  },
  {
    src: '/cards/card-3.jpg',
    caption: 'Vista en primer plano de la tecnología de contacto rápido',
  },
  {
    src: '/cards/card-4.jpg',
    caption: 'Exhibidor de mostrador listo para acercar el teléfono de los clientes',
  },
  {
    src: '/cards/card-5.jpg',
    caption: 'Material rígido y duradero para uso continuo en caja y atención',
  },
  {
    src: '/cards/card-6.jpg',
    caption: 'Activación directa del perfil de reseñas de Google sin buscar en mapas',
  },
  {
    src: '/cards/card-7.jpg',
    caption: 'Pack de tarjetas inteligentes preparadas para comercios de Bariloche',
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: '01',
    title: 'Descubrimiento',
    description: 'Analizamos a fondo tu negocio, los hábitos de tus clientes, los canales de venta que ya utilizás y los problemas que necesitás resolver.',
    deliverables: ['Relevamiento de necesidades', 'Diagnóstico de presencia digital', 'Definición de objetivos comerciales'],
  },
  {
    step: '02',
    title: 'Planificación y Alcance',
    description: 'Definimos la arquitectura, los flujos clave del usuario y un plan de entrega realista con presupuesto transparente sin costos sorpresa.',
    deliverables: ['Estructura y contenido', 'Selección de tecnologías', 'Presupuesto cerrado'],
  },
  {
    step: '03',
    title: 'Diseño y Programación',
    description: 'Desarrollamos la solución con diseño a medida, pruebas en diferentes dispositivos, velocidad optimizada e integraciones seguras.',
    deliverables: ['Diseño responsive UI/UX', 'Código testeado y optimizado', 'Integración de WhatsApp / QR'],
  },
  {
    step: '04',
    title: 'Lanzamiento y Acompañamiento',
    description: 'Publicamos el proyecto y te acompañamos en la puesta en marcha, brindando soporte técnico para que continúe creciendo con tu negocio.',
    deliverables: ['Puesta en producción', 'Capacitación para autogestión', 'Mantenimiento y soporte evolutivo'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'tentaciones-belgrano',
    category: 'Desarrollo Web Comercial',
    title: 'Tentaciones Belgrano',
    subtitle: 'Fiambrería y picadas premium en San Carlos de Bariloche',
    description: 'Plataforma web con catálogo interactivo de tablas y productos gourmet, carrito adaptado a pedidos directos por WhatsApp, integración con Uber Eats y optimización de presencia local en Google.',
    tags: ['React', 'Tailwind CSS', 'Catálogo Digital', 'Pedidos WhatsApp', 'Bariloche'],
    image: '/projects/tentaciones-hero.jpg',
    liveUrl: 'https://maps.app.goo.gl/bU5CjLqwmyeeKugY6',
    verifiedBadge: 'Proyecto en producción · Bariloche',
  },
  {
    id: 'vinarte-vinoteca',
    category: 'Presencia Digital & Reseñas',
    title: 'Vinarte Vinoteca',
    subtitle: 'Vinoteca boutique y bebidas selectas',
    description: 'Estrategia integral de digitalización: catálogo de etiquetas categorizadas por cepa y bodega, derivación rápida a canales de delivery y botón de reseñas de Google para captura de clientes en punto de venta.',
    tags: ['Diseño Web', 'Catálogo de Vinos', 'Google Reviews', 'Delivery UberEats'],
    image: '/projects/tentaciones-hero.jpg',
    liveUrl: 'https://www.instagram.com/vinartevinoteca/',
    verifiedBadge: 'Caso real · Bariloche',
  },
  {
    id: 'tarjetas-nfc-bariloche',
    category: 'Producto Físico Tecnológico',
    title: 'Tarjetas Inteligentes de Reseñas y Contacto',
    subtitle: 'Solución NFC para mostradores y atención al público',
    description: 'Tarjetas físicas personalizadas con chip NFC y código QR dinámico que abren instantáneamente la pantalla de 5 estrellas en Google o el menú digital del negocio con solo apoyar el teléfono.',
    tags: ['Hardware NFC', 'Google My Business', 'Sin Contacto', 'QR Dinámico'],
    image: '/cards/card-1.jpg',
    verifiedBadge: 'Comercializado activamente',
  },
  {
    id: 'erp-gestion-modular',
    category: 'Software Empresarial a Medida',
    title: 'Sistema de Gestión y Control de Stock',
    subtitle: 'Arquitectura modular para digitalización operativa de pymes',
    description: 'Modelo de software a medida para control de inventario en tiempo real, registro de ventas y caja diaria, seguimiento de pedidos pendientes y panel analítico para toma de decisiones sin software genérico.',
    tags: ['Arquitectura Modular', 'Control de Stock', 'Dashboard Analítico', 'Multi-usuario'],
    image: '/cards/card-3.jpg',
    verifiedBadge: 'Línea de desarrollo a medida',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Qué son las tarjetas inteligentes y cómo funcionan exactamente?',
    answer: 'Son tarjetas físicas con un chip NFC integrado y un código QR de respaldo. Cuando un cliente acerca su teléfono (Android o iPhone con NFC activo), se le abre de forma automática el enlace configurado: por ejemplo, la pantalla para calificar tu negocio con 5 estrellas en Google, tu Instagram o el chat de WhatsApp. Si el teléfono no tiene NFC, basta con escanear el código QR impreso en el dorso.',
  },
  {
    question: '¿Las tarjetas inteligentes garantizan que los clientes dejen una reseña?',
    answer: 'Ninguna tarjeta ni tecnología puede forzar a una persona a escribir una opinión. Lo que hacen es eliminar toda la fricción técnica: el cliente no tiene que buscar el nombre del negocio en Google Maps ni navegar entre sucursales. Esto facilita que el personal del comercio invite a reseñar durante el momento de pago o despedida de forma natural y rápida.',
  },
  {
    question: '¿Puedo tener una página web si ya vendo por WhatsApp o plataformas de delivery?',
    answer: 'Totalmente. De hecho, es el complemento ideal. Una web propia te da una vidriera profesional donde podés exhibir tu catálogo completo con fotos de calidad y precios actualizados. Desde allí, el cliente arma su pedido y lo envía directo a tu WhatsApp listo para confirmar, o accede a tus enlaces de delivery (como Uber Eats o Pedidos Ya) sin que pierdas el control de tu marca.',
  },
  {
    question: '¿Puedo actualizar los productos, precios e imágenes de mi web?',
    answer: 'Sí. Según el tipo de proyecto, podemos implementar paneles de administración sencillos o estructuras autogestionables para que puedas cambiar precios, pausar productos sin stock o subir fotos nuevas sin depender de un programador cada vez que hay una modificación.',
  },
  {
    question: '¿Cuánto cuesta desarrollar una página web comercial?',
    answer: 'El costo depende del alcance exacto: no es lo mismo una página institucional de una sola sección que un catálogo interactivo con decenas de productos, integraciones de pago y panel administrativo. En Kiur Code cotizamos con claridad luego de entender tu necesidad puntual, con precios justos y sin costos de mantenimiento ocultos.',
  },
  {
    question: '¿Qué tipo de sistemas de gestión o ERP pueden desarrollar?',
    answer: 'Desarrollamos software adaptado a los procesos reales de cada comercio: control de stock con alertas de reposición, registro de ventas y arqueo de caja diaria, base de clientes y proveedores, emisión de comprobantes internos y reportes gráficos de rendimiento. No imponemos un sistema rígido: programamos lo que tu negocio necesita.',
  },
  {
    question: '¿Trabajan únicamente con comercios de Bariloche o también de otras ciudades?',
    answer: 'Aunque Kiur Code tiene base en San Carlos de Bariloche y brindamos atención presencial a comercios locales y de la región patagónica, también desarrollamos proyectos web y software para empresas de cualquier punto de la Argentina mediante reuniones virtuales y seguimiento continuo.',
  },
  {
    question: '¿Cómo solicito una cotización o consulta?',
    answer: 'Hacé clic en cualquiera de los botones de WhatsApp de la web o escribinos directamente al +54 9 2944 30-7681 contándonos qué tipo de solución estás buscando. Te responderemos a la brevedad para coordinar una charla y armar una propuesta adaptada.',
  },
];
