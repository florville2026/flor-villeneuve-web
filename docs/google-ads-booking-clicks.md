# Seguimiento de clics en los botones de reserva

La etiqueta base de Google Ads ya se carga e inicializa una sola vez desde `src/layouts/BaseLayout.astro` con `AW-18527963098`. `CalEmbed.astro` escucha clics confiables sobre botones `data-cal-link` y, si la acción de conversión está configurada, envía `gtag('event', 'conversion', { send_to })`. El listener no cancela el clic ni cambia cómo se abre el modal.

El valor de `src/config/googleAds.ts` queda vacío hasta que Florencia comparta el valor `send_to` exacto que Google Ads muestra en el fragmento del evento de conversión, con formato `AW-ID/ETIQUETA`. El ID base `AW-18527963098` por sí solo no identifica una acción. No reemplazar la configuración con un valor supuesto.

## Configuración recomendada en Google Ads

1. Crear o seleccionar una acción de conversión de sitio web que describa el clic en los botones de reserva, no una reserva confirmada ni un pago.
2. Copiar el `send_to` del fragmento de evento de esa acción y pasárselo a quien mantiene el sitio. Se completará `googleAdsBookingClickSendTo` con ese valor exacto.
3. Configurar la acción como **Secundaria (solo observación)** y no incluirla en objetivos personalizados usados para pujas. Así se registra como interacción de interés, sin presentarla como reserva pagada ni optimizar las campañas como si lo fuera.

## Validación con Google Tag Assistant

Después de configurar el valor en un entorno publicado de prueba, conectar Tag Assistant al sitio y abrir una página de servicios. Hacer un clic real en cada tipo de botón de reserva y confirmar que:

- se observa un evento `conversion` enviado al `send_to` de la acción configurada;
- se observa un solo evento por clic real;
- el modal de Cal.com se abre normalmente y la página no navega;
- el evento aparece solo al hacer clic: no depende de `bookingSuccessfulV2`, de completar la reserva ni del pago.

Mientras `googleAdsBookingClickSendTo` esté vacío, no se envía el evento de conversión. Tag Assistant puede confirmar la etiqueta base existente, pero no mostrará una conversión de clic hasta completar la configuración.
