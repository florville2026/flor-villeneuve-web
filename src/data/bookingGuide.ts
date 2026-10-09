export interface GuideStep {
  number: string;
  title: string;
  description: string;
  bullets?: string[];
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
}

export interface PaymentOption {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const bookingGuideData = {
  title: 'Cómo reservar y pagar tu sesión',
  subtitle: 'Guía paso a paso · Proceso claro y transparente',
  intro:
    'Reservar tu sesión es muy simple. Elegí el tipo de sesión, seleccioná un horario disponible, completá tus datos y realizá el pago de forma segura para confirmar tu reserva.',
  importantNote: {
    title: 'Aclaración sobre el pago con tarjeta',
    highlight:
      'También podés pagar con tarjeta desde la opción disponible en la pantalla de pago, sin necesidad de iniciar sesión en PayPal.',
    details: [
      'Acepta tarjetas de crédito y débito internacionales (Visa, Mastercard, American Express, entre otras).',
      'No es necesario registrarse previamente ni contar con saldo en PayPal.',
      'Confirmación automática por email una vez completado el pago.',
    ],
  },
  currencyNotice: {
    title: 'Valores expresados en dólares estadounidenses (USD)',
    badge: 'Precios en USD',
    description:
      'Los valores de las sesiones están expresados en dólares estadounidenses (USD). Si pagás con una tarjeta o medio de pago en otra moneda, PayPal o la entidad emisora de tu tarjeta puede realizar la conversión a tu moneda local. Antes de confirmar el pago podrás revisar el importe correspondiente y las condiciones de conversión aplicables.',
  },
  steps: [
    {
      number: '01',
      title: 'Elegí la sesión que mejor se adapte a vos',
      description:
        'Podés elegir entre Sesión de Pareja, Sesión de Crianza o Familia, o Proceso Vincular Individual según la etapa y necesidad actual.',
      bullets: [
        'Sesión de Pareja: para revisar la intimidad, la dinámica de comunicación y destrabar bucles reactivos.',
        'Sesión de Crianza o Familia: para alinear pautas, límites y convivencia emocional en el hogar.',
        'Proceso Vincular Individual: para explorar tu matriz vincular y patrones afectivos personales.',
      ],
    },
    {
      number: '02',
      title: 'Seleccioná el día y horario disponible',
      description:
        'Al presionar el botón de reserva se abrirá el calendario. Podés revisar los días disponibles y elegir el horario que mejor coincida con tu rutina y tu zona horaria local.',
      imageSrc: '/img/guia/pantalla-seleccion-horario.png',
      imageAlt: 'Pantalla de selección de fecha y horario en el calendario de Cal.com',
      imageCaption: 'Vista del calendario donde podés elegir fecha, horario y ajustar tu zona horaria.',
    },
    {
      number: '03',
      title: 'Completá tus datos de contacto',
      description:
        'Ingresá tu nombre completo y correo electrónico (donde recibirás el comprobante y el enlace de acceso). Si querés, podés sumar una breve nota adicional con el contexto que consideres relevante.',
    },
    {
      number: '04',
      title: 'Hacé clic en “Pagar para reservar”',
      description:
        'Una vez ingresados tus datos, hacé clic en el botón “Pagar para reservar” para avanzar a la pantalla de procesamiento del pago.',
      imageSrc: '/img/guia/pantalla-datos-reserva.png',
      imageAlt: 'Formulario de reserva de Cal.com con el botón Pagar para reservar',
      imageCaption: 'Revisá tus datos y presioná el botón "Pagar para reservar".',
    },
    {
      number: '05',
      title: 'En la pantalla de pago, podés abonar de dos maneras',
      description:
        'Al acceder a la pantalla de pago verás dos opciones claras para abonar tu sesión:',
      imageSrc: '/img/guia/pantalla-pago-metodos.png',
      imageAlt: 'Pantalla de pago mostrando las opciones de PayPal y botón de pago con tarjeta',
      imageCaption: 'Pantalla de pago donde podés elegir entre PayPal o abonar con tarjeta sin iniciar sesión.',
    },
    {
      number: '06',
      title: 'Confirmación de tu reserva',
      description:
        'Una vez aprobado el pago, recibirás por email la confirmación de tu reserva y los detalles para acceder a la sesión.',
    },
  ] as GuideStep[],
  cardCallout: {
    text: '¿No tenés PayPal? Elegí esta opción para pagar con tarjeta.',
  },
  paymentOptions: [
    {
      title: 'Opción 1: pagar con PayPal',
      subtitle: 'Botón amarillo',
      description:
        'Ideal si ya disponés de una cuenta en PayPal y preferís abonar con tus fondos disponibles o tarjetas guardadas.',
      badge: 'Cuenta PayPal',
    },
    {
      title: 'Opción 2: pagar con tarjeta',
      subtitle: 'Botón oscuro con ícono de tarjeta',
      description:
        'Hacé clic en el botón con ícono de tarjeta para abonar directamente con tu tarjeta de crédito o débito, sin necesidad de iniciar sesión en PayPal.',
      badge: 'Tarjeta de crédito o débito',
    },
  ] as PaymentOption[],
  help: {
    title: '¿Tenés alguna duda antes de reservar?',
    text: 'Si tenés alguna duda antes de reservar, podés escribirme y te acompaño en el proceso.',
    whatsappMessage:
      'Hola Florencia, tengo una duda antes de reservar mi sesión y me gustaría consultarte.',
  },
};
