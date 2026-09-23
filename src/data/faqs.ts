export interface FaqItem {
  question: string;
  paragraphs: string[];
  bullets?: string[];
  closingParagraph?: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  badge: string;
  icon: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'pareja',
    title: '1. Sesiones de Pareja',
    badge: '01 · Pareja',
    icon: '👩‍❤️‍👨',
    items: [
      {
        question: '¿Cómo es una sesión de pareja? ¿Qué pasa si terminamos discutiendo ahí?',
        paragraphs: [
          'Es un espacio neutral, seguro y de contención. La sesión de 1 hora y 30 minutos no está diseñada para "arbitrar" una pelea ni para buscar quién tiene la razón, sino para pausar la inercia del conflicto.',
          'Si surge la tensión, intervengo para desarmar el bucle reactivo, revelar qué herida o miedo hay debajo de ese enojo y ayudarlos a hablar desde un lugar donde realmente se puedan escuchar.',
        ],
      },
      {
        question: '¿Este espacio es terapia de pareja?',
        paragraphs: [
          'Sí, es un trabajo profundamente terapéutico, especialmente cuando se sostiene en el tiempo. Sin embargo, no es una terapia de pareja tradicional de encuadre clínico clásico.',
          'Desde la psicología junguiana, abordamos la psique a través del lenguaje de la simbología y herramientas como la astrología o las dinámicas simbólicas para acceder a la arquitectura del vínculo de forma directa. Esta primera instancia es plenamente útil para visibilizar el mapa de la relación y comprender la función que cada uno interpreta dentro del sistema.',
        ],
      },
      {
        question: '¿Qué pasa si quiero hacer el proceso pero mi compañero/a no quiere venir?',
        paragraphs: [
          'Es una situación muy común y no se recomienda forzar a la otra persona. Si tu pareja no desea o no puede participar en este momento, podés agendar el Proceso Vincular Individual.',
          'Al mover y comprender tu propio lugar en el mapa, la dinámica de la relación cambia inevitablemente, ya que al transformar una parte del sistema, la interacción completa se reorganiza.',
        ],
      },
    ],
  },
  {
    id: 'crianza-familia',
    title: '2. Sesiones de Crianza y Vínculos Familiares',
    badge: '02 · Crianza y Familia',
    icon: '🏡',
    items: [
      {
        question: 'En las sesiones de crianza, ¿asisten los hijos o solo los adultos?',
        paragraphs: [
          'Para las instancias de crianza de niños pequeños, la sesión es exclusivamente con los padres o adultos a cargo, para poder hablar con libertad sobre las pautas, la carga mental y las diferencias de criterio sin exponer a los más chicos.',
          'Sin embargo, cuando se trata de adolescentes (a partir de los 15 años) o de hijos adultos que desean revisar su relación con alguno de sus padres, el espacio se transforma en una Sesión Vincular. Del mismo modo que dos adultos asisten a una sesión de pareja, dos integrantes de un sistema familiar (padre/madre e hijo/a) pueden trabajar juntos sobre su propia dinámica para destrabar la comunicación y respetar la individualidad de cada uno.',
        ],
      },
      {
        question: '¿Qué diferencia hay entre una sesión de pareja y una de crianza?',
        paragraphs: [
          'En la de pareja el foco está en la intimidad, la comunicación de a dos y la relación de pares. En la de crianza el foco se desplaza hacia la alineación de límites, la gestión emocional dentro del hogar, la distribución de tareas y el impacto que el clima familiar tiene en los hijos.',
        ],
      },
    ],
  },
  {
    id: 'proceso-vincular',
    title: '3. Proceso Vincular Individual',
    badge: '03 · Proceso Individual',
    icon: '👤',
    items: [
      {
        question: '¿Necesito preparar algo antes de mi primera sesión?',
        paragraphs: [
          'No enviamos cuestionarios previos ni necesitás traer nada estructurado. Solo es recomendable que antes del encuentro reflexiones brevemente sobre:',
        ],
        bullets: [
          '¿Cuál es la situación o relación que más energía y recursos te ha demandado en este último tiempo?',
          '¿Cuál es ese tema del que más hablás (o ese tema tabú del que sabés que querés hablar pero no te has animado)?',
        ],
        closingParagraph:
          'Con tener clara esa inquietud principal es más que suficiente para empezar a tirar del hilo en la sesión.',
      },
      {
        question: '¿Qué me voy a llevar de este proceso individual?',
        paragraphs: [
          'Una comprensión clara sobre tu matriz relacional. Identificamos tus patrones de apego, tus lealtades familiares invisibles y los roles que solés asumir en tus vínculos (pareja, familia o amistades), dándote herramientas concretas para posicionarte desde tu propia autonomía y no desde la reacción o la herida.',
        ],
      },
    ],
  },
  {
    id: 'dinamica-general',
    title: '4. Dinámica General y Continuidad',
    badge: '04 · Dinámica General',
    icon: '🔄',
    items: [
      {
        question: '¿Cuántas sesiones necesitamos para ver un cambio?',
        paragraphs: [
          'Cada persona y cada vínculo tiene sus propios ritmos. La primera sesión de 1h 30m es diagnóstica y reveladora en sí misma: te llevás un mapa claro de la dinámica oculta y comprensiones profundas para empezar a aplicar. A partir de allí no hay paquetes cerrados; la continuidad del proceso la vamos evaluando juntos y los encuentros siguientes se agendan de forma directa a través de WhatsApp según las necesidades del proceso.',
        ],
      },
    ],
  },
];
