import type { BlogCategory, BlogPost } from '../types';

export const blogIntro = {
  heading: 'Reflexiones sobre la Arquitectura de los Vínculos',
  badge: 'Blog & Archivo Vivo',
  description:
    'En este espacio la investigación se vuelve palabra escrita. El blog no es un catálogo de respuestas universales ni un decálogo de consejos de convivencia, sino un territorio de indagación sobre la trama oculta de nuestras relaciones.',
  secondaryDescription:
    'Aquí exploramos la pareja, la crianza y la matriz de nuestros vínculos personales desde una mirada integral: la psicología jungiana, el análisis de sistemas familiares, la educación y el lenguaje de los símbolos. Un archivo vivo de reflexiones diseñado para pausar la inercia del día a día, deconstruir las expectativas heredadas y ofrecerte marcos de percepción más claros, humanos y conscientes.',
};

export const blogCategories: BlogCategory[] = [
  {
    id: 'pareja',
    label: 'Pareja',
    description:
      'Indagación sobre dinámicas afectivas, polaridades, acuerdos tácitos y la deconstrucción de bucles defensivos en la relación de a dos.',
    anchor: '#pareja',
  },
  {
    id: 'crianza',
    label: 'Crianza',
    description:
      'Maternidad, paternidad y sistemas familiares. El desafío de desmantelar mandatos para educar desde el adulto real y no desde la herida.',
    anchor: '#crianza',
  },
  {
    id: 'vinculos',
    label: 'Vínculos',
    description:
      'Exploración de la matriz relacional individual desde todas sus perspectivas y vínculos.',
    anchor: '#vinculos',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'polaridad-masculina-femenina-pareja',
    slug: 'polaridad-masculina-femenina-pareja',
    title:
      '¿Qué hace que la polaridad masculina en la relación tienda a sentirse invisible y la polaridad femenina a sentirse invalidada?',
    category: 'pareja',
    categoryLabel: 'Pareja',
    tags: ['Pareja', 'Polaridad Masculina / Femenina', 'Sistemas Relacionales', 'Comunicación'],
    readingTime: '4 min de lectura',
    publishedDate: 'Reflexión de Pareja',
    excerpt:
      'En la dinámica cotidiana de la pareja, suele gestarse una brecha silenciosa donde ambas partes se sienten solas por razones aparentemente opuestas: la invisibilidad frente a la invalidación.',
    sections: [
      {
        paragraphs: [
          'En la dinámica cotidiana de la pareja, suele gestarse una brecha silenciosa pero profunda donde ambas partes se sienten solas, aunque por razones aparentemente opuestas. Por un lado, la polaridad masculina (independientemente del género de quien la encarne) suele experimentar una progresiva sensación de invisibilidad: la percepción de que su sostén, su esfuerzo tangible y su presencia funcional son dados por sentado o descalificados al no expresarse en el código emocional que la relación exige.',
          'Por otro lado, la polaridad femenina tiende a sentirse invalidada: experimenta que la manifestación de sus necesidades, su intuición o su registro del clima emocional del hogar es leída como "exageración", "desborde" o "reclamo infundado".',
          'Desde la psicología de sistemas, este bucle no nace de la falta de amor, sino de un choque de lenguajes defensivos:',
        ],
      },
      {
        title: 'El choque de lenguajes defensivos',
        paragraphs: [
          'El repliegue del sostén: Ante la percepción de no ser visto ni valorado en su forma de aportar, la polaridad masculina se repliega, se vuelve resolutiva o se distancia afectivamente para proteger su estructura, lo que incrementa la invisibilidad.',
          'El reclamo de la voz: Ante la frialdad o la falta de eco, la polaridad femenina intensifica su demanda de registro, sintiendo que si no eleva el tono o la insistencia, su vivencia interna desaparece.',
        ],
      },
      {
        title: 'La salida de la polaridad reactiva',
        paragraphs: [
          'Desarmar este nudo requiere reconocer que la invisibilidad y la invalidación son las dos caras de la misma moneda. Sanar el vínculo implica que la polaridad masculina aprenda a nombrar su vulnerabilidad más allá de la función proveedora, y que la polaridad femenina aprenda a dar cauce a su registro emocional sin convertirlo en un juicio sobre el otro.',
        ],
      },
    ],
    relatedService: {
      serviceId: 'pareja',
      title: 'Sesión de Acompañamiento para la Pareja',
      slug: '/servicios/pareja',
      description:
        'Si reconocés este bucle de invisibilidad o reclamo en tu relación, podemos desarmar la dinámica de origen y reconfigurar la comunicación de a dos.',
      ctaText: 'Ver detalles de la Sesión de Pareja',
      whatsappMessage:
        'Hola Flor, leí el artículo sobre polaridades en la pareja y me gustaría agendar la primera Sesión de Acompañamiento para la Pareja.',
    },
  },
  {
    id: 'padres-reales-crianza-consciente',
    slug: 'padres-reales-crianza-consciente',
    title: '¿Cómo ser el papá y la mamá que eres y no el que te dijeron que tenías que ser?',
    category: 'crianza',
    categoryLabel: 'Crianza',
    tags: ['Crianza', 'Paternidad Consciente', 'Mandatos Familiares', 'Límites'],
    readingTime: '3 min de lectura',
    publishedDate: 'Reflexión de Crianza',
    excerpt:
      'El verdadero desafío de la crianza consciente no es acumular técnicas rígidas, sino desmantelar la proyección del padre o madre ideal para darle paso al adulto real.',
    sections: [
      {
        paragraphs: [
          'Llegar a la maternidad o a la paternidad implica habitar un territorio habitado por fantasmas: las expectativas de nuestros propios padres, los mandatos de la cultura, los manuales de crianza "perfecta" y las voces invisibles del árbol familiar. Muy a menudo, los adultos no crían a los hijos que tienen frente a sí, sino que reaccionan o se sobreexigen en función del "modelo ideal" que se construyeron para no repetir la historia.',
          'El verdadero desafío de la crianza consciente no es acumular técnicas de disciplina o pautas rígidas, sino desmantelar la proyección del padre o la madre ideal para darle paso al adulto real.',
        ],
      },
      {
        title: 'Trampas y permisos en el rol parental',
        paragraphs: [
          'La trampa de la sobrecompensación: Cuando criamos desde el rechazo absoluto a la forma en que fuimos criados, caemos en la polaridad opuesta (de la rigidez a la permisividad extrema), dejando a los hijos sin el borde ni el contorno que necesitan para desarrollarse seguros.',
          'El permiso de la propia voz: Asumir la autoridad no significa encarnar un personaje infalible. La verdadera autoridad parental nace de la presencia auténtica, de la capacidad de sostener el límite desde la coherencia y de reconocer los propios límites humanos sin culpa.',
        ],
      },
      {
        paragraphs: [
          'Criar desde quien realmente eres le regala a tus hijos algo mucho más valioso que la perfección: les otorga el permiso de ser ellos mismos, al ver a un adulto que habita su lugar con dignidad, responsabilidad y verdad.',
        ],
      },
    ],
    relatedService: {
      serviceId: 'crianza-familia',
      title: 'Sesión de Crianza y Dinámicas Familiares',
      slug: '/servicios/crianza-familia',
      description:
        'Un espacio de alineación y sostén para construir un criterio compartido, comprender los síntomas del hogar y devolverle la calma al sistema familiar.',
      ctaText: 'Ver detalles de la Sesión de Crianza',
      whatsappMessage:
        'Hola Flor, leí el artículo sobre crianza consciente y me gustaría agendar la primera Sesión de Crianza y Dinámicas Familiares.',
    },
  },
  {
    id: 'reciprocidad-amistad-libertad-vinculos',
    slug: 'reciprocidad-amistad-libertad-vinculos',
    title:
      '¿Qué sabemos sobre reciprocidad y qué pasa cuando la amistad es un espacio de autoexploración de lo que significa ser libres o esclavos de nosotros mismos?',
    category: 'vinculos',
    categoryLabel: 'Vínculos',
    tags: ['Vínculos', 'Amistad & Libertad', 'Reciprocidad', 'Autonomía'],
    readingTime: '4 min de lectura',
    publishedDate: 'Reflexión Vincular',
    excerpt:
      'La amistad es el territorio de la libre elección: un espejo de libertad o servidumbre que nos revela hasta qué punto somos esclavos de nuestras necesidades no resueltas.',
    sections: [
      {
        paragraphs: [
          'A diferencia de la familia de origen (donde la pertenencia viene dada) o de la pareja (donde la convivencia y el proyecto suelen marcar el marco), la amistad es el territorio de la libre elección. Es precisamente por su carácter voluntario que la amistad se convierte en uno de los espejos más sutiles y reveladores de nuestra propia psique.',
          'Hablamos habitualmente de la reciprocidad como un intercambio equitativo de atenciones, tiempos o apoyos. Sin embargo, en un nivel más profundo, la verdadera reciprocidad no es una contabilidad de favores, sino la capacidad mutua de sostener la libertad del otro sin cobrar peaje emocional.',
        ],
      },
      {
        title: 'La amistad como espejo de libertad o servidumbre',
        paragraphs: [
          'Nuestras amistades revelan hasta qué punto somos libres o esclavos de nuestras propias necesidades no resueltas. Cuando exigimos que un amigo valide constantemente nuestras decisiones, o cuando nos amoldamos complacientemente a sus expectativas por miedo al distanciamiento, no estamos ejerciendo la amistad, sino actuando nuestra propia necesidad de control o aprobación.',
          'El espacio de autoexploración: Un vínculo de amistad sano funciona como un laboratorio de autonomía. Nos permite explorar quiénes somos fuera de los roles familiares y de pareja. Nos confronta con nuestros celos, nuestra capacidad de alegrarnos por el despliegue ajeno y nuestra madurez para tolerar las distancias y los procesos de cambio del otro.',
        ],
      },
      {
        paragraphs: [
          'Ser libres en la amistad significa celebrar la presencia del amigo sin necesitar que sea una extensión de nuestros deseos. Es en ese margen de respeto absoluto por la individualidad donde la reciprocidad deja de ser un contrato y se transforma en un encuentro genuino entre dos almas que se eligen.',
        ],
      },
    ],
    relatedService: {
      serviceId: 'proceso-vincular',
      title: 'Proceso Vincular Individual',
      slug: '/servicios/proceso-vincular',
      description:
        'Un espacio de inmersión y soberanía personal para descifrar tu matriz relacional, desarticular lealtades invisibles y habitar tus vínculos desde tu verdadera autonomía.',
      ctaText: 'Ver detalles del Proceso Vincular',
      whatsappMessage:
        'Hola Flor, leí el artículo sobre reciprocidad y amistad y me gustaría iniciar un Proceso Vincular Individual.',
    },
  },
];
