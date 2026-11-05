// Todo el contenido del portafolio vive aquí: edita este archivo para cambiar textos,
// proyectos, experiencia o enlaces sin tocar los componentes.

export type IconName =
  | "code"
  | "database"
  | "leaf"
  | "chart"
  | "dashboard"
  | "sun"
  | "wind";

export const profile = {
  name: "Edgar Quintana Pérez",
  tagline: "Desarrollo · Datos · Energía",
  location: "Gran Canaria, Islas Canarias",
  email: "edgarleonar86@gmail.com",
  linkedin: "https://www.linkedin.com/in/edgar-quintana-p%C3%A9rez-40a51599",
  github: "https://github.com/EdgarLeonardo86",
  // Coloca tu CV general en /public con este nombre (no el adaptado a una oferta concreta).
  cvPath: "/cv-edgar-quintana.pdf",
};

export const services: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "code",
    title: "Software de gestión a medida",
    text: "Aplicaciones web que se adaptan a cómo trabaja cada empresa.",
  },
  {
    icon: "database",
    title: "Análisis de datos y machine learning",
    text: "Modelos que anticipan lo que va a pasar y explican por qué.",
  },
  {
    icon: "leaf",
    title: "Soluciones para la transición energética",
    text: "Herramientas para entender y prever la generación renovable.",
  },
  {
    icon: "chart",
    title: "Dashboards y visualización",
    text: "La información clave a la vista para decidir más rápido.",
  },
];

export type Project = {
  slug: string;
  icon: IconName;
  title: string;
  summary: string;
  tags: string[];
  status?: string;
  problem: string;
  solution: string;
  features: string[];
  learnings: string[];
  note?: string;
  // Añade enlaces públicos (demo, GitHub) solo cuando decidas mostrarlos.
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "energia-canarias",
    icon: "leaf",
    title: "Generación renovable en Canarias",
    summary:
      "Análisis y predicción diaria de la generación eólica de las islas con datos públicos de REE y Open-Meteo.",
    tags: ["Python", "pandas", "scikit-learn", "Streamlit"],
    status: "Actualizado a diario",
    problem:
      "En 2026 la renovable cubrió de media el 21,8 % de la generación de Canarias, pero con días por debajo del 5 % y otros por encima del 41 %. Para integrar más renovables en un sistema aislado hay que entender de qué depende esa variación y anticiparla.",
    solution:
      "Un pipeline en Python que descarga cada día la generación por tecnología (REE) y el viento y la radiación de las cuatro principales zonas eólicas (Open-Meteo), y un modelo de regresión que predice el porcentaje de eólica del día siguiente.",
    features: [
      "Dataset propio de generación y meteorología desde el 1 de enero de 2026, sin huecos ni duplicados",
      "Hallazgo: el viento explica el 85 % de la variación del porcentaje renovable (r = 0,92); la eólica es el 73 % de la renovable",
      "Modelo con R² de 0,90 en validación y un 66 % menos de error que la persistencia",
      "Predicción diaria automática comparada al día siguiente con el valor real",
      "Recuperación automática de los días que REE publica con retraso",
    ],
    learnings: [
      "Comparar con una referencia sencilla (la persistencia) es lo que demuestra que un modelo aporta valor.",
      "Los datos públicos fallan: un pipeline útil tiene que detectar huecos y recuperarlos solo.",
    ],
    links: [{ label: "Ver en GitHub", href: "https://github.com/EdgarLeonardo86/energia-canarias" }],
  },
  {
    slug: "prediccion-eolica",
    icon: "wind",
    title: "Predicción de caídas eólicas",
    summary:
      "Modelos que anticipan con horas de antelación las bajadas bruscas de generación eólica. Trabajo Fin de Bachelor.",
    tags: ["Python", "LightGBM", "SHAP", "Machine Learning"],
    problem:
      "Las caídas bruscas de producción eólica (ramp events) complican la operación de la red. Son muy poco frecuentes (1 caso por cada 258), lo que las hace difíciles de predecir.",
    solution:
      "Un pipeline de machine learning con datos SCADA que anticipa estos eventos de 1 a 6 horas antes, compara cinco modelos y explica cada predicción con SHAP.",
    features: [
      "Predicción en seis horizontes temporales, de 1 a 6 horas",
      "Comparación de cinco modelos de machine learning",
      "AUC-ROC de 0,94 a 1 hora (MLP) y F1 de 0,42 a 6 horas (LightGBM)",
      "Explicabilidad con SHAP: qué variables pesan en cada predicción",
      "Métricas adaptadas a eventos poco frecuentes (F1, recall), no la exactitud",
    ],
    learnings: [
      "Ningún modelo gana en todo: el mejor a 1 hora no es el mejor a 6.",
      "Con eventos tan raros, la exactitud engaña: un modelo que nunca avisa acertaría el 99,6 % de las veces.",
    ],
    links: [],
  },
  {
    slug: "oficina-agentes-ia",
    icon: "code",
    title: "Oficina de agentes de IA",
    summary:
      "Agentes de IA que trabajan 24/7 en un servidor Linux: recogen datos, generan informes y predicciones, y avisan si algo falla.",
    tags: ["Linux", "Python", "Agentes de IA", "Automatización"],
    status: "En funcionamiento",
    problem:
      "Los agentes de IA prometen automatizar tareas repetitivas, pero dicen haber terminado cuando no es así, se saturan y pueden borrar lo que no deben. Sin control, no se puede confiar en ellos.",
    solution:
      "Un sistema de agentes con Hermes Agent en un servidor Linux, organizado por roles con normas escritas, tareas programadas y varias capas de control: lo que no necesita un modelo de IA se ejecuta como script.",
    features: [
      "Rutinas diarias de datos, informes y predicciones sin intervención manual",
      "Cadena de modelos de reserva: si un proveedor se satura, el sistema pasa al siguiente",
      "Copias de seguridad diarias y comprobación automática de que cada rutina ha funcionado",
      "Seguridad: servicios aislados por usuario, tokens con el permiso mínimo y búsqueda de claves antes de cada publicación",
    ],
    learnings: [
      "Que un agente diga que ha terminado no significa que haya terminado: la verificación forma parte del sistema.",
      "Si una tarea no necesita un modelo de IA, un script es más fiable, más rápido y no cuesta nada.",
    ],
    links: [],
  },
  {
    slug: "aplicacion-gestion",
    icon: "dashboard",
    title: "Aplicación de gestión a medida",
    summary:
      "Software web para controlar trabajos, incidencias e informes de una empresa de servicios.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    problem:
      "Muchas empresas gestionan su día a día con hojas de cálculo, correos y llamadas. Los avisos se pierden, nadie sabe en qué estado está cada trabajo y preparar un informe lleva horas.",
    solution:
      "Una aplicación web que centraliza la información y sigue cada trabajo de principio a fin, con paneles, informes automáticos y acceso por usuario y rol.",
    features: [
      "Seguimiento de trabajos e incidencias de principio a fin",
      "Paneles con la información clave y vista en mapa",
      "Informes y documentos PDF generados automáticamente",
      "Usuarios, roles y acceso seguro",
      "Simulador de casos realistas para probar el flujo completo antes de entregar",
    ],
    learnings: [
      "Probar con escenarios realistas descubre más errores que probar funciones sueltas.",
      "Una mejora que el usuario no entiende no es una mejora: la documentación forma parte del producto.",
    ],
    note: "Proyecto desarrollado para un cliente. Por confidencialidad no se muestran capturas ni datos.",
    links: [],
  },
  {
    slug: "prevision-fotovoltaica",
    icon: "sun",
    title: "Previsión fotovoltaica en Canarias",
    summary:
      "Sistema que predice la generación solar de las islas con machine learning y datos públicos.",
    tags: ["Python", "XGBoost", "Prophet", "Streamlit"],
    problem:
      "En un sistema eléctrico aislado como el canario, saber cuánta energía solar habrá mañana es clave para integrar más renovables sin poner en riesgo la red.",
    solution:
      "Un sistema en Python dividido en cinco módulos que trabajan en cadena: recogida de datos, preparación de variables, entrenamiento y comparación de modelos, validación automática y alertas.",
    features: [
      "Comparación de varios modelos de predicción",
      "Validación automática antes de dar un resultado por bueno",
      "Alertas cuando algo se sale de lo esperado",
      "Dashboard en Streamlit para consultar las previsiones",
    ],
    learnings: [
      "La validación es tan importante como el modelo: una predicción sin comprobar es solo un número.",
      "Dividir el problema en módulos facilita probar, corregir y mejorar cada parte.",
    ],
    links: [],
  },
  {
    slug: "dashboard-energetico",
    icon: "chart",
    title: "Dashboard energético",
    summary: "Cuadro de mando para seguir la evolución del mix renovable de Canarias.",
    tags: ["Power BI", "KPIs", "Visualización"],
    status: "En curso",
    problem:
      "Los datos de generación existen, pero cuesta verlos de un vistazo y comparar cómo evoluciona cada tecnología.",
    solution:
      "Un cuadro de mando en Power BI con indicadores clave y la evolución del mix renovable de las islas.",
    features: [
      "Indicadores clave de generación renovable",
      "Evolución temporal por tecnología",
      "Diseño pensado para leerse en segundos",
    ],
    learnings: [
      "Un buen dashboard responde una pregunta concreta, no enseña todos los datos posibles.",
    ],
    links: [],
  },
];

export const experience = [
  {
    role: "Técnico Logístico y Gestor de Área",
    company: "Zelenza",
    period: "2021 – actualidad",
    text: "Soporte técnico y resolución de incidencias, gestión de activos IT, informes para la toma de decisiones y coordinación de equipo.",
  },
  {
    role: "Técnico Informático",
    company: "Dihova",
    period: "2018 – 2020",
    text: "Instalación y mantenimiento de software, copias de seguridad, seguridad informática y soporte a usuarios.",
  },
];

export const education = [
  { title: "Bachelor en Informática", place: "UNIPRO", period: "2024 – 2026" },
  { title: "CFGS Desarrollo de Aplicaciones Multiplataforma", place: "IES El Rincón", period: "2020 – 2023" },
  { title: "CFGS Eficiencia Energética y Energía Solar Térmica", place: "IES Villa de Agüimes", period: "2013 – 2015" },
  { title: "Bootcamp UX/UI", place: "Reboot Academy", period: "2024" },
];

export const technologies = [
  "Python",
  "pandas",
  "scikit-learn",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Power BI",
  "Docker",
  "Linux",
  "Git / GitHub",
];
