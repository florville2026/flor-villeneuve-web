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
    id: 'pareja-se-aisla-vivir-reclamando',
    slug: 'pareja-se-aisla-vivir-reclamando',
    title:
      '¿Por qué siento que mi pareja se aísla y yo tengo que vivir reclamando?',
    category: 'pareja',
    categoryLabel: 'Pareja',
    tags: [
      'TerapiaDePareja',
      'ComunicacionEnPareja',
      'ProblemasDePareja',
      'SesionesDePareja',
    ],
    readingTime: '4 min de lectura',
    publishedDate: 'Reflexión de Pareja',
    excerpt:
      'En la dinámica cotidiana de la pareja, suele armarse una distancia silenciosa pero muy dolorosa: los dos se sienten solos, pero por razones totalmente opuestas.',
    sections: [
      {
        paragraphs: [
          'En la dinámica cotidiana de la pareja, suele armarse una distancia silenciosa pero muy dolorosa: los dos se sienten solos, pero por razones totalmente opuestas.',
          'Por un lado, quien suele sostener la casa o la estructura funcional siente una profunda invisibilidad. Siente que todo su esfuerzo, su presencia y lo que aporta a diario se dan por sentado, o que directamente son descalificados porque no sabe expresarse en el idioma emocional que la relación le exige.',
          'Por otro lado, quien lleva el registro del clima emocional de la casa suele sentirse invalidada. Siente que cada vez que intenta nombrar sus necesidades, su intuición o su malestar, el otro lo lee como "una exageración", "un desborde" o "un reclamo infundado".',
        ],
      },
      {
        title: 'No es falta de amor: es un choque de defensas',
        paragraphs: [
          'Cuando miramos esto en consulta, descubrimos que este bucle no nace porque se haya acabado el amor, sino porque cada uno activó un escudo defensivo diferente para protegerse:',
          'El refugio en el silencio (El distanciamiento): Ante la sensación de no ser visto ni valorado por lo que aporta, uno de los dos se repliega. Se vuelve puramente resolutivo, frío o distante para no salir herido. Pero al distanciarse, hace que la otra persona se sienta aún más sola.',
          'El reclamo que sube de tono (La demanda): Ante la frialdad y el muro de silencio del otro, la otra persona intensifica el reclamo. Siente que si no levanta el tono o insiste, sus emociones desaparecen y la relación se termina de apagar.',
          'Así se arma la trampa: cuanto más se aísla uno, más reclama la otra parte; y cuanto más se le reclama, más se aísla.',
        ],
      },
      {
        title: '¿Cómo se sale de este bucle?',
        paragraphs: [
          'Desarmar este nudo requiere entender que el silencio y el reclamo son dos caras de la misma herida.',
          'Sanar el vínculo no se trata de buscar un culpable, sino de aprender a comunicarse desde otro lugar: que quien se aísla pueda nombrar su vulnerabilidad más allá de "cumplir y resolver", y que quien reclama pueda expresar su dolor sin convertirlo en un ataque.',
        ],
      },
      {
        title: '¿Sienten que están atrapados en este circuito de discusiones y distancia?',
        paragraphs: [
          'En las sesiones de pareja trabajamos para destrabar estos canales de comunicación, comprender qué hay detrás del enojo o el silencio y recuperar la complicidad en la relación.',
        ],
      },
    ],
    relatedService: {
      serviceId: 'pareja',
      title: 'Sesión de Acompañamiento para la Pareja',
      slug: '/servicios/pareja',
      description:
        'En las sesiones de pareja trabajamos para destrabar estos canales de comunicación, comprender qué hay detrás del enojo o el silencio y recuperar la complicidad en la relación.',
      ctaText: 'Agenda tu primera sesión acá',
      whatsappMessage:
        'Hola Flor, leí el artículo sobre distancia y reclamos en la pareja y me gustaría agendar la primera Sesión de Acompañamiento para la Pareja.',
    },
  },
  {
    id: 'crianza-agota-dejar-reaccionar-culpa',
    slug: 'crianza-agota-dejar-reaccionar-culpa',
    title:
      '¿Por qué la crianza nos agota y cómo dejar de reaccionar desde la culpa?',
    category: 'crianza',
    categoryLabel: 'Crianza',
    tags: [
      'CrianzaConsciente',
      'Maternidad',
      'Paternidad',
      'AcompañamientoEnCrianza',
      'LimitesSinGritos',
    ],
    readingTime: '4 min de lectura',
    publishedDate: 'Reflexión de Crianza',
    excerpt:
      'Criar a un hijo es uno de los espejos más profundos y confrontativos que vamos a atravesar en la vida. Muchas veces nos preparamos con expectativas, pero en la convivencia cotidiana aparecen desbordes que nos dejan un sabor amargo de culpa y sobreexigencia.',
    sections: [
      {
        paragraphs: [
          'Criar a un hijo es uno de los espejos más profundos y confrontativos que vamos a atravesar en la vida. Muchas veces nos preparamos con libros y expectativas sobre el tipo de madre o padre que queremos ser, pero en la convivencia cotidiana aparecen reacciones, gritos o desbordes que no logramos controlar y que luego nos dejan un sabor amargo de culpa y sobreexigencia.',
          'El agotamiento en la crianza rara vez nace de un "problema de conducta" del niño o la niña; casi siempre nace del choque entre las necesidades reales del desarrollo infantil y nuestras propias reservas emocionales acumuladas.',
        ],
      },
      {
        title: 'Lo que no vemos cuando el síntoma aparece',
        paragraphs: [
          'Cuando un hijo desafía un límite, entra en un berrinche o se muestra distante, suele tocar fibra sensible en los puntos ciegos del adulto:',
          'La repetición de la historia personal: Sin darnos cuenta, tendemos a reaccionar desde la forma en que fuimos criados, o nos fuertemos al extremo opuesto por miedo a repetir los mismos errores.',
          'El agotamiento de la red de sostén: Pretender criar en soledad, sin tribu y bajo las exigencias de la vida moderna, satura el sistema nervioso del adulto, dejando muy poco margen para la paciencia.',
          'Las lealtades invisibles: Los niños son radares exquisitos del clima familiar. A menudo, lo que se manifiesta como una dificultad en el niño es la expresión de una tensión o un no-dicho que circula en la pareja o en la historia familiar.',
        ],
      },
      {
        title: 'Acompañar la crianza: de la reacción a la presencia',
        paragraphs: [
          'Criar con conciencia no significa ser padres perfectos ni tener el control absoluto de todo. Se trata de recuperar la calma interior para poder sostener a nuestros hijos en sus momentos más difíciles sin perdernos en el proceso.',
          'Sanar la dinámica de crianza implica:',
          'Desarmar los mandatos e ideales inalcanzables para habitar una maternidad o paternidad real y digna.',
          'Entender qué necesidad o emoción no nombrada hay detrás del síntoma de tu hijo/a.',
          'Poner límites claros y firmes desde el amor y la presencia, sin necesidad de recurrir a la amenaza, el aislamiento o el grito.',
        ],
      },
      {
        title:
          '¿Sentís que la crianza te está desbordando o quieres comprender mejor lo que vive tu hijo/a?',
        paragraphs: [
          'En las sesiones de acompañamiento en crianza trabajamos para descifrar las dinámicas del desarrollo, sanar las huellas de apego y construir un clima familiar más sereno y consciente.',
        ],
      },
    ],
    relatedService: {
      serviceId: 'crianza-familia',
      title: 'Sesión de Crianza y Dinámicas Familiares',
      slug: '/servicios/crianza-familia',
      description:
        'En las sesiones de acompañamiento en crianza trabajamos para descifrar las dinámicas del desarrollo, sanar las huellas de apego y construir un clima familiar más sereno y consciente.',
      ctaText: 'Agenda tu primera sesión acá',
      whatsappMessage:
        'Hola Flor, leí el artículo sobre crianza y culpa y me gustaría agendar la primera Sesión de Crianza y Dinámicas Familiares.',
    },
  },
  {
    id: 'doy-mas-de-lo-que-recibo-reciprocidad-limites',
    slug: 'doy-mas-de-lo-que-recibo-reciprocidad-limites',
    title:
      '¿Por qué siento que siempre doy más de lo que recibo? La reciprocidad y los límites en la amistad',
    category: 'vinculos',
    categoryLabel: 'Vínculos',
    tags: [
      'ProcesosVinculares',
      'AcompañamientoIndividual',
      'AmistadesSanas',
      'LimitesYAutonomia',
      'Reciprocidad',
    ],
    readingTime: '4 min de lectura',
    publishedDate: 'Reflexión Vincular',
    excerpt:
      'A diferencia de la familia de origen o la pareja, la amistad es el territorio de la libre elección. Cuando sentimos que un vínculo se vuelve desigual, lo que suele estar en juego es la dificultad para poner límites sin culpa.',
    sections: [
      {
        paragraphs: [
          'A diferencia de la familia de origen (donde la pertenencia viene dada desde el nacimiento) o de la pareja (donde suele haber un proyecto compartido), la amistad es el territorio de la libre elección. Precisamente por ser un vínculo voluntario, la forma en que nos relacionamos con nuestros amigos se convierte en uno de los espejos más sinceros de nuestra propia historia personal.',
          'Solemos pensar que la reciprocidad es una especie de contabilidad: "yo te di esto, ahora te toca a vos". Sin embargo, cuando sentimos que un vínculo se vuelve pesado, desigual o desgastante, el problema raras veces es el número de favores intercambiados. Lo que suele estar en juego es la dificultad para poner límites y sostener nuestra libertad sin sentir culpa.',
        ],
      },
      {
        title: 'La amistad como espejo: ¿Elección o necesidad de aprobación?',
        paragraphs: [
          'Nuestras relaciones nos muestran hasta qué punto somos dueños de nuestras elecciones o esclavos de nuestras necesidades no resueltas:',
          'El patrón de la complacencia: Si te amoldás a lo que el otro espera para evitar un conflicto o por miedo al distanciamiento, terminás actuando desde la necesidad de aprobación y no desde la libertad.',
          'La exigencia de validación: Si necesitás que tus vínculos aprueben cada decisión de tu vida, la amistad deja de ser un encuentro entre dos personas autónomas para convertirse en un refugio para el control o la inseguridad.',
          'El peso del peaje emocional: Cuando no sabemos nombrar lo que necesitamos o nos cuesta poner un "no" a tiempo, acumulamos resentimiento y terminamos sintiendo que el otro "se aprovecha" o "no da lo mismo".',
        ],
      },
      {
        title: 'La autoexploración: Aprender a ser libres en nuestros vínculos',
        paragraphs: [
          'Un vínculo sano funciona como un laboratorio de autonomía: nos permite explorar quiénes somos por fuera de los roles familiares o de pareja. Nos confronta con nuestros celos, con el miedo al abandono y con la capacidad de celebrar la vida del otro sin que eso amenace nuestro propio valor.',
          'Aprender a vincularte con libertad no significa distanciarte de los demás, sino aprender a sostenerte a vos mismo/a para poder elegir a los otros desde un lugar de madurez, sin corazas ni sometimientos.',
        ],
      },
      {
        title:
          '¿Estás atravesando un momento de revisión en tus vínculos o te cuesta poner límites en tus relaciones?',
        paragraphs: [
          'En las sesiones individuales de procesos vinculares trabajamos para identificar los patrones que repetís en tus relaciones, fortalecer tu autonomía y construir vínculos basados en una verdadera reciprocidad.',
        ],
      },
    ],
    relatedService: {
      serviceId: 'proceso-vincular',
      title: 'Sesión de Acompañamiento en Procesos Vinculares',
      slug: '/servicios/proceso-vincular',
      description:
        'En las sesiones individuales de procesos vinculares trabajamos para identificar los patrones que repetís en tus relaciones, fortalecer tu autonomía y construir vínculos basados en una verdadera reciprocidad.',
      ctaText: 'Agenda tu primera sesión acá',
      whatsappMessage:
        'Hola Flor, leí el artículo sobre reciprocidad y límites en la amistad y me gustaría agendar la primera Sesión de Acompañamiento en Procesos Vinculares.',
    },
  },
];
