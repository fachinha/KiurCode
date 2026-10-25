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
  { label: 'Tarjetas NFC', href: '#tarjetas' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Conoceme', href: '#conoceme' },
];

export interface SmartCardOption {
  id: string;
  name: string;
  type: 'individual' | 'combo';
  platform: string;
  price: number;
  formattedPrice: string;
  originalPrice?: number;
  formattedOriginalPrice?: string;
  savings?: number;
  savingsText?: string;
  badge?: string;
  description: string;
  features: string[];
  waMessage: string;
  image: string;
}

export const SMART_CARD_OPTIONS: SmartCardOption[] = [
  {
    id: 'google',
    name: 'Google',
    type: 'individual',
    platform: 'Reseñas en Google Maps',
    price: 20000,
    formattedPrice: '$20.000',
    description: 'El cliente acerca su celular y se abre directo la ventana para dejarte 5 estrellas.',
    features: ['Chip NFC de alta velocidad', 'QR de respaldo grabado', 'Enlace directo a 5 estrellas', 'Personalizada con tu marca'],
    waMessage: 'Hola Lucas, quiero pedir la Tarjeta Inteligente NFC de Google ($20.000) para mi negocio.',
    image: '/cards/google.jpeg',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    type: 'individual',
    platform: 'Perfil de Instagram',
    price: 20000,
    formattedPrice: '$20.000',
    description: 'Sumá seguidores reales y mostrá tus publicaciones en tu mostrador al instante.',
    features: ['Abre tu perfil sin buscar nombres', 'Chip NFC + QR de respaldo', 'Ideal para gastronómicos y comercios', 'Personalizada con tu marca'],
    waMessage: 'Hola Lucas, quiero pedir la Tarjeta Inteligente NFC de Instagram ($20.000) para mi negocio.',
    image: '/cards/instagram.jpeg',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    type: 'individual',
    platform: 'Chat y Atención Directa',
    price: 20000,
    formattedPrice: '$20.000',
    description: 'Iniciá un chat de WhatsApp con tus clientes sin que tengan que agendar tu número.',
    features: ['Abre chat con saludo predefinido', 'Ideal para consultas y pedidos', 'Chip NFC + QR de respaldo', 'Personalizada con tu marca'],
    waMessage: 'Hola Lucas, quiero pedir la Tarjeta Inteligente NFC de WhatsApp ($20.000) para mi negocio.',
    image: '/cards/whatsapp.jpeg',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    type: 'individual',
    platform: 'Página / Fanpage de Facebook',
    price: 20000,
    formattedPrice: '$20.000',
    description: 'Conectá clientes directos a tu página comercial, promociones, fotos y comunidad.',
    features: ['Acceso directo a tu Fanpage', 'Chip NFC + QR de respaldo', 'Sin fricción para el usuario', 'Personalizada con tu marca'],
    waMessage: 'Hola Lucas, quiero pedir la Tarjeta Inteligente NFC de Facebook ($20.000) para mi negocio.',
    image: '/cards/facebook.jpeg',
  },
  {
    id: 'combo-x2',
    name: 'Combo x2',
    type: 'combo',
    platform: '2 Tarjetas Inteligentes a elección',
    price: 35000,
    formattedPrice: '$35.000',
    originalPrice: 40000,
    formattedOriginalPrice: '$40.000',
    savings: 5000,
    savingsText: 'Ahorrás $5.000',
    badge: 'Popular',
    description: 'Elegí 2 tarjetas (ej. Google + Instagram o 2 de Google para dos puestos de atención).',
    features: ['2 tarjetas configuradas y listas', 'Combiná las redes que quieras', 'Logo de tu negocio en ambas', 'Ahorro de $5.000'],
    waMessage: 'Hola Lucas, quiero pedir el Combo x2 de Tarjetas Inteligentes NFC ($35.000 con $5.000 de ahorro).',
    image: '/cards/combox2.jpeg',
  },
  {
    id: 'combo-x3',
    name: 'Combo x3',
    type: 'combo',
    platform: '3 Tarjetas Inteligentes a elección',
    price: 50000,
    formattedPrice: '$50.000',
    originalPrice: 60000,
    formattedOriginalPrice: '$60.000',
    savings: 10000,
    savingsText: 'Ahorrás $10.000',
    badge: 'Recomendado',
    description: 'La opción más elegida: cubrí Google Maps, Instagram y WhatsApp, o 3 mesas / mostradores.',
    features: ['3 tarjetas personalizadas', 'Cubre todo tu ecosistema comercial', 'Logo de tu negocio en todas', 'Ahorro de $10.000'],
    waMessage: 'Hola Lucas, quiero pedir el Combo x3 de Tarjetas Inteligentes NFC ($50.000 con $10.000 de ahorro).',
    image: '/cards/combox3.jpeg',
  },
  {
    id: 'combo-x4',
    name: 'Combo x4',
    type: 'combo',
    platform: '4 Tarjetas Inteligentes a elección',
    price: 65000,
    formattedPrice: '$65.000',
    originalPrice: 80000,
    formattedOriginalPrice: '$80.000',
    savings: 15000,
    savingsText: 'Ahorrás $15.000',
    badge: 'Máximo Ahorro',
    description: 'Pack completo para negocios con varias cajas, salones o para tener el kit total (Google + IG + FB + WA).',
    features: ['4 tarjetas listas para usar', 'Cobertura completa para tu local', 'Logo y diseño personalizado', 'Ahorro de $15.000'],
    waMessage: 'Hola Lucas, quiero pedir el Combo x4 de Tarjetas Inteligentes NFC ($65.000 con $15.000 de ahorro).',
    image: '/cards/combox4.jpeg',
  },
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
    name: 'Tentaciones Belgrano',
    short: 'Fiambrería & Picadas',
    category: 'Fiambrería, Quesos & Picadas · Bariloche',
    subtitle: 'Catálogo de tablas de picadas y pedidos a WhatsApp',
    description: 'Web comercial con catálogo interactivo de picadas artesanales, quesos y fiambres gourmet con armado de pedidos directos a WhatsApp sin intermediarios ni comisiones.',
    domain: 'tentacionesbelgrano.pages.dev',
    liveUrl: 'https://tentacionesbelgrano.pages.dev/#inicio',
    tags: ['Catálogo Digital', 'Pedidos a WhatsApp', 'Menú QR', 'Bariloche'],
    features: [
      'Catálogo interactivo con precios actualizados al día',
      'Armado de pedido personalizado directo a WhatsApp',
      'Optimizado para teléfonos con carga instantánea',
      'Cero comisiones por venta en el comercio',
    ],
    verifiedBadge: 'Web en Producción · Bariloche',
  },
  {
    id: 'vinoteca-vinarte',
    name: 'Vinoteca VinArte',
    short: 'Vinoteca & Vinos de Autor',
    category: 'Vinoteca & Vinos Selectos · Bariloche',
    subtitle: 'Catálogo boutique de vinos patagónicos y bodegas de autor',
    description: 'Catálogo digital y vidriera boutique para vinoteca local: selección clasificada por varietales y bodegas patagónicas, promociones por caja y atención personalizada.',
    domain: 'vinotecavinarte.pages.dev',
    liveUrl: 'https://vinotecavinarte.pages.dev/',
    tags: ['Tienda Online', 'Vinos de Autor', 'Pedidos WhatsApp', 'Bariloche'],
    features: [
      'Catálogo clasificado por varietales, cepas y bodegas',
      'Botón de pedido y consulta directa por WhatsApp',
      'Diseño visual sofisticado con estética vinícola',
      '100% autogestionable y adaptado a móviles',
    ],
    verifiedBadge: 'Web en Producción · Bariloche',
  },
  {
    id: 'polleria-belgrano',
    name: 'Pollería Belgrano',
    short: 'Granja & Productos Frescos',
    category: 'Granja & Carnes Blancas · Bariloche',
    subtitle: 'Pizarra de precios al día y pedidos rápidos para vecinos',
    description: 'Web ágil y cartelera de precios de granja en tiempo real para mostrador, promociones por kilo y pedidos express para vecinos y gastronomía local.',
    domain: 'polleriabelgrano.pages.dev',
    liveUrl: 'https://polleriabelgrano.pages.dev/',
    tags: ['Lista de Precios', 'Promociones Semanales', 'Pedidos WhatsApp', 'Bariloche'],
    features: [
      'Lista de precios y cortes frescos al instante',
      'Reserva rápida para retirar en mostrador',
      'Carga ultra rápida en celulares (0.5 segundos)',
      'Canal directo comercio-cliente sin intermediarios',
    ],
    verifiedBadge: 'Web en Producción · Bariloche',
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
