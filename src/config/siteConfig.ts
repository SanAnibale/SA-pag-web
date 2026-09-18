import { Project, ServiceItem, ProcessStep, SiteConfig } from '../types';

/**
 * CONFIGURACIÓN PRINCIPAL DEL SITIO
 * ============================================================================
 * Aquí puedes cambiar fácilmente tus enlaces de Calendly, tu número de WhatsApp,
 * tus datos de contacto y agregar todos los proyectos que desees.
 * ============================================================================
 */
export const siteConfig: SiteConfig = {
  consultant: {
    name: 'Santiago Anibale',
    brandName: 'SA Business Analytics & Consulting',
    tagline: 'Transformamos datos en información para tomar mejores decisiones de negocio.',
    role: 'Consultor Independiente de Business Analytics & Finanzas',
    email: 'santiagoanibale@hotmail.com',
    phoneDisplay: '+54 9 3573414164', // Modifica con tu número para mostrar en pantalla
    whatsappNumber: '5493573414164', // Formato internacional sin "+" ni espacios (ej: 54911XXXXXXXX)
    whatsappDefaultMessage: 'Hola Santiago, visité tu sitio web de Business Analytics y me gustaría conversar sobre mi empresa.',
    // Enlace a tu Calendly (puedes cambiarlo por tu URL real de reunión):
    calendlyUrl: 'https://calendly.com/santiagoanibale/20min',
    linkedinUrl: '',
    experienceYears: '+10 Años',
    corporateBackground: 'PwC · Arcor · Mabe',
    certifications: 'Certificado BI (Data Analytics & Business Intelligence)',
  },
};

/**
 * SERVICIOS PRINCIPALES
 * Basados en tu propuesta de valor y experiencia contable y analítica
 */
export const servicesList: ServiceItem[] = [
  {
    id: 'consultoria-integral',
    title: 'Consultoría integral de Business Analytics',
    description:
      'Diagnóstico, estructuración, modelado y definición de estrategias analíticas integrales: dashboards ejecutivos y por área, flujos de fondo, etc.',
    iconName: 'chart',
    features: ['Estrategia integral de datos', 'Dashboards ejecutivos', 'Alineación con objetivos de negocio']
  },
  {
    id: 'reportaje-soluciones',
    title: 'Reportaje y soluciones de Business Analytics por área',
    description:
      'Implementación de modelos y cuadros de mando específicos adaptados a comercial, operaciones, finanzas, marketing, recursos humanos, etc.',
    iconName: 'grid',
    features: ['Ventas y pipelines comerciales', 'Operaciones y logística', 'Control de gestión por sector']
  },
  {
    id: 'consultoria-financiera',
    title: 'Consultoría financiera y de costos',
    description:
      'Análisis detallado de flujos, rentabilidad y estructura de costos para optimizar márgenes e identificar ineficiencias.',
    iconName: 'calculator',
    features: ['Análisis de punto de equilibrio', 'Estructura de costos fijos y variables', 'Control de márgenes por producto']
  },
  {
    id: 'revision-contable',
    title: 'Revisión y análisis de información contable',
    description:
      'Conciliación, auditoría analítica y visualización de estados contables para garantizar consistencia y respaldo en auditorías.',
    iconName: 'file-check',
    features: ['Conciliaciones automáticas', 'Auditoría analítica', 'Consistencia contable e impositiva']
  },
];

/**
 * METODOLOGÍA DE TRABAJO (4 PASOS)
 */
export const processSteps: ProcessStep[] = [
  {
    step: 'Paso 01',
    title: 'Diagnóstico',
    description:
      'Entendemos tu negocio, relevamos tus fuentes de datos, alcance y KPIs a medir.',
    iconName: 'search',
  },
  {
    step: 'Paso 02',
    title: 'Diseño',
    description:
      'Auditoría de datos, recomendaciones y modelado de solución.',
    iconName: 'sliders',
  },
  {
    step: 'Paso 03',
    title: 'Desarrollo',
    description:
      'Construcción en conjunto mediante entregables definidos. Tu feedback modela el resultado.',
    iconName: 'layout',
  },
  {
    step: 'Paso 04',
    title: 'Entrega y capacitación',
    description:
      'Sesión de capacitación y entrega, con manual de uso y glosario.',
    iconName: 'award',
  },
];

/**
 * SECCIÓN DE PROYECTOS / CASOS DE ÉXITO
 * ============================================================================
 * CÓMO AGREGAR UN NUEVO PROYECTO:
 * 1. Duplica uno de los bloques `{ id: '...', ... }` a continuación.
 * 2. Cambia el `id`, `title`, `sectorTag`, `description`.
 * 3. En `metrics` pon los 2 resultados principales (ej: '+25%', 'Margen recuperado').
 * 4. En `imageUrl` puedes colocar un enlace directo a una imagen (ej: de Imgur, Cloudinary,
 *    Unsplash o tu propio servidor).
 * ============================================================================
 */
export const projectsList: Project[] = [
  {
    id: 'rentabilidad-comercial',
    title: 'Rentabilidad Comercial y Márgenes por Canal',
    sector: 'Comercial & Retail',
    sectorTag: 'SECTOR COMERCIAL / RETAIL',
    description:
      'Análisis granular de mix de productos, márgenes netos de contribución y detección de precios desactualizados por línea y canal de venta.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { value: '+18%', label: 'Margen bruto recuperado', isPositive: true },
      { value: '-25%', label: 'Productos margen negativo', isPositive: true },
    ],
    tools: ['Power BI', 'SQL Server', 'Modelado DAX', 'Excel Avanzado'],
    challenge: 'El cliente experimentaba un aumento en el volumen de ventas totales, pero el margen de ganancia final se reducía cada mes debido a costos ocultos y productos deficitarios.',
    solution: 'Desarrollamos un modelo de costeo granular y rentabilidad por SKU, canal comercial (mayorista, e-commerce, tiendas físicas) y zona geográfica.',
    impact: 'Se identificaron 38 productos con margen negativo que fueron descontinuados o reajustados, recuperando un 18% en el margen bruto en el primer trimestre.',
  },
  {
    id: 'tablero-flujo-fondos',
    title: 'Planificación y Tablero de Flujos de Fondos (Cash Flow)',
    sector: 'Finanzas & Distribución',
    sectorTag: 'SECTOR FINANCIERO / DISTRIBUCIÓN',
    description:
      'Implementación de visibilidad proyectada de tesorería a 90 días, control de cobranzas vs compromisos de pago y análisis de escenarios futuros.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { value: '90 Días', label: 'Visibilidad proyectada', isPositive: true },
      { value: '-40%', label: 'Desvíos en previsiones', isPositive: true },
    ],
    tools: ['Power BI', 'Excel / ERP', 'Modelado Financiero', 'DAX'],
    challenge: 'Empresa distribuidora con alta volatilidad financiera, sin previsión de baches de liquidez para pagos a proveedores clave.',
    solution: 'Tablero dinámico de Cash Flow proyectado a 30, 60 y 90 días conectando la información contable y de ventas de la empresa.',
    impact: 'Eliminación del pago de intereses por sobregiro y optimización del poder de negociación con proveedores gracias al control preventivo.',
  },
  {
    id: 'control-costos-operativos',
    title: 'Optimización Operativa y Control de Costos',
    sector: 'Servicios Profesionales / B2B',
    sectorTag: 'SERVICIOS PROFESIONALES / B2B',
    description:
      'Monitoreo de horas hombre, rentabilidad neta por cliente/proyecto y segregación precisa entre costos fijos y variables para fijación de tarifas.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { value: '+22%', label: 'Rentabilidad por cuenta', isPositive: true },
      { value: 'Tiempo real', label: 'Control de horas dedicadas', isPositive: true },
    ],
    tools: ['Power BI', 'Excel / Sistema de Gestión', 'KPIs Financieros', 'Control de Gestión'],
    challenge: 'Incapacidad de saber qué clientes generaban pérdidas reales por exceso de iteraciones y desvíos en horas de consultores senior.',
    solution: 'Sistema integrado de control de horas presupuestadas vs. reales, con alertas visuales de desviación de margen por proyecto.',
    impact: 'Reestructuración de tarifas de 14 clientes corporativos e incremento del 22% en la rentabilidad neta promedio por cuenta.',
  },
  {
    id: 'inventario-capital-trabajo',
    title: 'Gestión de Inventario y Capital de Trabajo',
    sector: 'Logística & Pyme Comercial',
    sectorTag: 'PYME COMERCIAL / LOGÍSTICA',
    description:
      'Reducción de stock inmovilizado, rotación de artículos críticos y cálculo de punto de reposición inteligente para liberar liquidez operativa.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { value: '-30%', label: 'Stock inmovilizado', isPositive: true },
      { value: '+35%', label: 'Rotación de inventario', isPositive: true },
    ],
    tools: ['Power BI', 'SQL Server / Excel', 'Modelos de Reabastecimiento'],
    challenge: 'Capital de trabajo excesivamente atrapado en almacén en productos de baja rotación mientras ocurrían quiebres de stock en artículos de alta demanda.',
    solution: 'Clasificación ABC multicriterio (valor, margen y velocidad de venta) con cálculo de días de inventario y puntos de reorden.',
    impact: 'Liberación de fondos de capital de trabajo por más de $120.000 USD y disminución de costos de almacenamiento.',
  },
];
