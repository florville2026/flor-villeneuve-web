import type { VincularService } from '../types';

export const servicesIntro = {
  heading: 'Acompañamiento Vincular',
  badge: 'Servicios y Sesiones',
  paragraphs: [
    'Entiendo que nuestras relaciones más cercanas —la pareja, la familia, la crianza— son el escenario donde se manifiestan nuestras mayores luces y también nuestras heridas más profundas. A menudo, nos encontramos repitiendo patrones de comunicación, asumiendo roles rígidos o sintiendo nudos que parecen imposibles de desatar, sin comprender de dónde vienen.',
    'Mi enfoque combina la escucha atenta, la comprensión profunda de la historia que habita tu sistema familiar y un análisis riguroso de las dinámicas de tus vínculos actuales.',
    'Mi propósito no es solo ayudarte a encontrar alivio inmediato, sino acompañarte a revelar lo que está oculto en la trama de la relación. Al comprender los pactos invisibles, los miedos compartidos y los espejos que activamos en el otro, podemos transformar el conflicto en claridad y construir un suelo firme de confianza, seguridad y autonomía para todos los integrantes del sistema.',
    'Te ofrezco un espacio seguro y contenido para habitar tus relaciones desde un lugar más consciente, íntegro y libre.',
  ],
};

export const vincularServices: VincularService[] = [
  {
    id: 'pareja',
    title: 'Sesión de Acompañamiento para la Pareja',
    subtitle: 'Acompañamiento para Parejas',
    slug: '/servicios/pareja',
    description:
      'Un espacio de análisis y abordaje directo para detener la inercia del conflicto, comprender la arquitectura del vínculo y destrabar la dinámica de a dos.',
    duration: '1 hora y 30 minutos',
    note: 'Luego de esta primera sesión diagnóstica, la continuidad de los encuentros se coordina y agendan de forma directa a través de WhatsApp según las necesidades del proceso.',
    whatsappMessage:
      'Hola Flor, me gustaría reservar lugar para la primera Sesión de Acompañamiento para la Pareja.',
    topics: [
      {
        title: 'Comunicación y Dinámica de Discusión',
        desc: 'Bucle de reproches, escaladas de enojo, silencios castigadores, desconexión verbal y dificultad para expresar necesidades claras.',
      },
      {
        title: 'Distribución de Cargas y Roles',
        desc: 'Polarización entre quien gestiona/exige y quien se distancia/relaja, desequilibrio en las tareas del hogar, resentimiento por falta de reciprocidad.',
      },
      {
        title: 'Afecto, Intimidad y Deseo',
        desc: 'Distanciamiento físico, falta de momentos a solas, pérdida de la complicidad, diferencia de ritmos del deseo sexual.',
      },
      {
        title: 'Límites con Terceros y Familias de Origen',
        desc: 'Injerencia de los suegros o familias natales, dificultad para priorizar el núcleo de la pareja frente a presiones externas.',
      },
      {
        title: 'Manejo de Crisis y Proyectos',
        desc: 'Acuerdos económicos y financieros, planes de vida en conflicto, gestión de infidelidades, dudas sobre la continuidad o reorganización de la convivencia.',
      },
    ],
  },
  {
    id: 'crianza-familia',
    title: 'Sesión de Crianza y Dinámicas Familiares',
    subtitle: 'Acompañamiento en Crianza y Familia',
    slug: '/servicios/crianza-familia',
    description:
      'Un espacio de alineación para madres, padres y adultos a cargo que buscan construir un criterio unificado, descomprimir la convivencia y traer calma al sistema familiar.',
    duration: '1 hora y 30 minutos',
    note: 'Luego de esta primera sesión diagnóstica, la continuidad de los encuentros se coordina y agendan de forma directa a través de WhatsApp según las necesidades del proceso.',
    whatsappMessage:
      'Hola Flor, me gustaría reservar lugar para la primera Sesión de Crianza y Dinámicas Familiares.',
    topics: [
      {
        title: 'Autoridad, Límites y Reglas',
        desc: 'Desacuerdo entre los padres sobre el nivel de firmeza o permisividad, negociaciones difíciles, inconsistencia en los límites.',
      },
      {
        title: 'Gestión Emocional de los Hijos',
        desc: 'Abordaje de berrinches, desbordes, pataletas, miedos nocturnos, ansiedad infantil y cambios de conducta en las distintas etapas del desarrollo.',
      },
      {
        title: 'Desgaste Cotidiano y Clima Familiar',
        desc: 'Rutinas del sueño, alimentación, uso de pantallas, organización del colegio y la carga mental del día a día.',
      },
      {
        title: 'Dinámicas entre Hermanos',
        desc: 'Rivalidad, celos, peleas constantes, comparación entre hijos y búsqueda de equidad en el trato.',
      },
      {
        title: 'Impacto en la Pareja y Coparentalidad',
        desc: 'Crianza en parejas separadas o ensambladas, culpa parental, falta de tiempo personal y sobrecarga de uno o ambos cuidadores.',
      },
    ],
  },
  {
    id: 'proceso-vincular',
    title: 'Proceso Vincular Individual',
    subtitle: 'Acompañamiento Vincular Individual',
    slug: '/servicios/proceso-vincular',
    description:
      'Un trabajo en profundidad sobre tu matriz relacional para comprender tus patrones de elección, sanar tu historia familiar y transformar la manera en que te entregas al amor.',
    duration: '1 hora y 30 minutos',
    note: 'Luego de esta primera sesión diagnóstica, la continuidad de los encuentros se coordina y agendan de forma directa a través de WhatsApp según las necesidades del proceso.',
    whatsappMessage:
      'Hola Flor, me gustaría reservar lugar para el Proceso Vincular Individual.',
    topics: [
      {
        title: 'Estilos de Apego y Elección de Pareja',
        desc: 'Tendencia a la dependencia emocional, miedo al abandono, atracción por personas evasivas/indisponibles o repetición de historias de rechazo.',
      },
      {
        title: 'Límites, Autonomía y Autoestima',
        desc: 'Dificultad para decir "no", complacencia excesiva, miedo al conflicto, postergar los propios deseos para sostener el vínculo.',
      },
      {
        title: 'Procesamiento de Historias Familiares',
        desc: 'Lealtades invisibles con los padres, repetición de mandatos transgeneracionales, duelos no resueltos en el árbol familiar.',
      },
      {
        title: 'Rupturas y Transiciones',
        desc: 'Cierre de ciclos de pareja, gestión del divorcio o separación, reconstrucción de la identidad personal tras una relación larga.',
      },
      {
        title: 'Comunicación y Confianza Interna',
        desc: 'Sanar heridas de traición, trabajo con la voz propia y expresión de necesidades emocionales en cualquier tipo de relación.',
      },
    ],
  },
];
