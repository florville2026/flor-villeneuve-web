# Agent Instructions & Project Conventions: flor-villeneuve-web

Este archivo es la memoria viva y guía operativa del proyecto **flor-villeneuve-web**. Está mantenido por agentes y define los estándares arquitectónicos, convenciones de código y flujos de trabajo específicos para este repositorio.

---

## 1. Contexto del Proyecto

- **Cliente / Identidad:** Florencia Villeneuve — mentora, guía en simbología, arte y psicología.
- **Público Objetivo:** Personas interesadas en autoconocimiento, transformación personal, tarot akáshico, astrología, numerología y arteterapia en Uruguay y Argentina (Montevideo, Buenos Aires, Rosario, Córdoba, Punta del Este y modalidad online internacional).
- **Dominio Principal:** `https://florenciavilleneuve.com` (anteriormente `florhesiendo.com`).
- **Contacto & Canales:**
  - WhatsApp (Consultas directas): `https://wa.me/59892497675` (+598 92 497 675)
  - Comunidad de WhatsApp: `https://chat.whatsapp.com/L7jnhxhIvqb6QbwnFN1PJo` (espacio abierto con más de 70 personas para reflexiones sobre vínculos, talleres y videos de YouTube)
  - Instagram: `https://www.instagram.com/florencia.villeneuve`
  - YouTube: `https://www.youtube.com/@florencia.villeneuve`
  - Email: `mailto:florencia.villeneuve@gmail.com`
  - No se publican precios directos en la web; las consultas se canalizan por WhatsApp o formulario.

---

## 2. Pila Tecnológica & Arquitectura

- **Framework:** [Astro 4](https://astro.build/) (`astro: ^4.16.18`) en modo Static Site Generation (SSG) con `@astrojs/netlify`.
- **Integraciones:**
  - `@astrojs/tailwind` con Tailwind CSS v3 (`3.4.17`).
  - `@astrojs/sitemap` (versión fijada en `^3.2.1`).
  - `@astrojs/check` para validación estática de tipos de Astro.
- **Estilos:** Tailwind CSS v3 con `@fontsource` (Cormorant Garamond, Cormorant, Jost) y clases utilitarias en `src/styles/global.css`.
- **Testing:** [Vitest](https://vitest.dev/) con entorno `jsdom` para pruebas unitarias de metadatos, SEO, enlaces y componentes.
- **Formularios:** Netlify Forms con honeypot y envío asíncrono con JavaScript.
- **Package Manager:** `pnpm` (Node 18+).

---

## 3. Estructura del Repositorio

```
flor-villeneuve-web/
├── .astro/                     # Cache de compilación Astro
├── public/                     # Archivos estáticos directos
│   ├── .well-known/            # Verificaciones y configuraciones de dominio
│   ├── img/                    # Imágenes estáticas optimizadas
│   ├── favicon.svg             # Favicon SVG principal
│   └── robots.txt              # Configuración de rastreo y sitemap index
├── src/
│   ├── components/
│   │   ├── layout/             # Header.astro, Footer.astro, Nav.astro
│   │   ├── sections/           # Hero.astro, Identification.astro, Services.astro,
│   │   │                       # About.astro, Testimonials.astro, Contact.astro
│   │   └── ui/                 # Button.astro, BlogArticleCard.astro, SectionTitle.astro, ServiceCard.astro, WhatsAppFloating.astro
│   ├── data/
│   │   ├── blog.ts             # Artículos del blog, categorías (Pareja, Crianza, Vínculos) y llamadas de agenda
│   │   ├── faqs.ts             # Preguntas frecuentes estructuradas por servicio
│   │   └── services.ts         # Contenido de servicios, intro y temáticas concretas
│   ├── layouts/
│   │   └── BaseLayout.astro    # Layout HTML raíz, SEO, OpenGraph y tags de script
│   ├── pages/
│   │   ├── index.astro         # Home principal (con canales directos en /#contacto)
│   │   ├── servicios/          # Servicios y acompañamiento vincular
│   │   │   ├── index.astro     # Resumen general de servicios
│   │   │   ├── pareja.astro    # Sesión de pareja
│   │   │   ├── crianza-familia.astro # Sesión de crianza o familia
│   │   │   └── proceso-vincular.astro # Proceso vincular individual
│   │   ├── blog.astro          # Archivo de reflexiones con navegación por subsecciones
│   │   ├── blog/               # Páginas individuales de lectura y permalinks para SEO
│   │   │   └── [slug].astro    # Lectura completa de artículo con schema BlogPosting
│   │   ├── tienda.astro        # Tienda Online (Workshops, Ebooks, PDFs)
│   │   ├── bio.astro           # Biografía / Sobre mí
│   │   ├── politica-de-cookies.astro # Página legal de cookies
│   │   ├── preguntas.astro     # Preguntas frecuentes (FAQ)
│   │   └── terminos-y-condiciones.astro # Página legal de términos
│   ├── scripts/
│   │   └── reveal.ts           # IntersectionObserver para animaciones de entrada (.reveal)
│   ├── styles/
│   │   └── global.css          # Importación de fuentes, directivas Tailwind y clases utilitarias
│   ├── types/
│   │   └── index.ts            # Interfaces TypeScript compartidas (NavItem, BlogPost, Service, etc.)
│   └── env.d.ts                # Declaraciones de tipos para entorno Astro
├── tests/                      # Pruebas unitarias de regresión y SEO con Vitest
│   ├── base-layout.test.ts     # Valida props SEO, keywords y lang="es" en BaseLayout
│   ├── blog.test.ts            # Valida integridad de artículos, subsecciones y vinculación a servicios
│   ├── footer-links.test.ts    # Valida links de redes y contacto en Footer
│   ├── page-metadata.test.ts   # Valida presencia de meta keywords en páginas core
│   └── seo-links.test.ts       # Valida enlaces a Instagram en index.astro y README.md
├── astro.config.mjs            # Configuración de Astro, adapter Netlify y sitemap
├── netlify.toml                # Redirects 301 para preservar SEO del sitio anterior
├── package.json                # Scripts y dependencias
├── tailwind.config.ts          # Paleta personalizada y configuración tipográfica
├── tsconfig.json               # Configuración TypeScript estricta de Astro
└── vitest.config.ts            # Configuración de Vitest para pruebas con jsdom
```

---

## 4. Estándares de Código y TypeScript

1. **Lenguaje y Comunicación:**
   - Todo el código, nombres de variables, funciones, interfaces, clases y términos técnicos deben escribirse en **inglés**.
   - Respuestas de chat, explicaciones y comentarios en el código deben escribirse en **español**.
   - Sé conciso en las explicaciones; evita repeticiones innecesarias.

2. **Tipado Estricto:**
   - Siempre usar **TypeScript estricto** (`strict: true`).
   - El uso de `any` está **terminantemente prohibido**. Usar `unknown` con type guards si el valor es verdaderamente dinámico.
   - Centralizar tipos e interfaces en `src/types/index.ts` o en archivos `.types.ts` dedicados.

3. **Modularidad y Dimensiones:**
   - Funciones concisas: **máximo 25 líneas** por función.
   - Archivos modulares: **máximo 200 líneas** por archivo. Separar en componentes o utilidades si se supera este límite.
   - Principios **SOLID** y principio de responsabilidad única.
   - Separar lógica de negocio de los componentes visuales o páginas.

4. **Calidad y Manejo de Errores:**
   - Nunca silenciar errores (`try/catch` vacíos están prohibidos).
   - Usar clases de error tipadas (`class AppError extends Error`) para errores de aplicación.
   - Validar datos de entrada en límites (e.g. validación de formularios) antes de procesarlos.
   - Realizar cambios **atómicos**: un cambio lógico por edición.
   - Mantener explícito sobre implícito: evitar valores mágicos o fallbacks silenciosos.

---

## 5. Sistema de Diseño y Estilos

### Paleta de Colores (`tailwind.config.ts`)
| Token | Hex | Uso principal |
|---|---|---|
| `deep` | `#0D1429` | Fondo oscuro primario (espacio cósmico) |
| `night` | `#1A1A2E` | Fondos oscuros secundarios, tarjetas y footer |
| `gold` | `#C9A96E` | Acentos primarios, bordes sutiles, botones y enlaces |
| `goldLight` | `#E2C99A` | Estados hover de elementos dorados |
| `parchment` / `cream` | `#E8DCC8` | Texto principal sobre fondos oscuros |
| `earth` | `#4A3728` | Texto oscuro sobre secciones claras |
| `mist` | `#F5F0E8` | Fondo claro alternativo para secciones de contraste |
| `ink` | `#1C1612` | Texto oscuro profundo |

### Tipografías
- **Display / Titulares principales:** `"Cormorant Garamond"`, serif elegante con aire místico y literario (`font-display`).
- **Subtítulos y llamadas:** `"Cormorant"`, variante refinada (`font-heading`).
- **Cuerpo y UI:** `"Jost"`, sans-serif geométrica, moderna y legible (`font-body`).

### Clases Utilitarias Clave (`src/styles/global.css`)
- `.section-padding`: Espaciado vertical uniforme entre secciones (`py-24 md:py-32`).
- `.container-padding`: Contenedor responsivo centrado (`px-6 md:px-12 lg:px-24 max-w-7xl mx-auto`).
- `.gold-divider`: Separador horizontal con borde dorado translúcido (`border-t border-gold/30`).
- `.cta-button` & `.cta-button-outline`: Botones principales y secundarios con hover animado.
- `.reveal` & `.reveal-delay-[1-3]`: Animación de entrada suave controlada por `src/scripts/reveal.ts`.

---

## 6. Convenciones de SEO y Metadatos

- **BaseLayout:** Toda página debe utilizar [BaseLayout.astro](file:///c:/Users/pablo/pablo/Documents/Coding/flor-villeneuve-web/src/layouts/BaseLayout.astro) proporcionando:
  - `title`: Título conciso (se le añade automáticamente el prefijo `Florencia Villeneuve — `; para la Home genera `Florencia Villeneuve | Pareja, Crianza y Vínculos`).
  - `description`: Meta descripción clara y persuasiva centrada en parejas, crianza y vínculos.
  - `keywords`: Lista de palabras clave separadas por comas (validado en `page-metadata.test.ts`).
  - `canonical`: Ruta relativa canónica (ej. `/servicios`).
- **Datos Estructurados (JSON-LD):**
  - La página de inicio incluye el schema `Person` para Florencia Villeneuve indicando áreas servidas (Uruguay y Argentina) y redes sociales verificadas.
  - Asegurarse de agregar el atributo `is:inline` en scripts `<script type="application/ld+json" is:inline>` para evitar advertencias del compilador de Astro.
- **Redirecciones 301:** Configuradas en `netlify.toml` para preservar el SEO de URLs previas (`/mentoria` $\rightarrow$ `/servicios`, `/guias-y-acompanamientos` $\rightarrow$ `/servicios`, `/arteterapia` $\rightarrow$ `/servicios`, `/formacion` y `/formaciones` $\rightarrow$ `/servicios`, `/about` y `/mi-libro` $\rightarrow$ `/bio`, y enlaces heredados de WordPress).

---

## 7. Canales de Contacto, Comunidad y Botón Flotante de WhatsApp

- Las consultas y coordinaciones se canalizan de forma directa vía WhatsApp (+598 92 497 675), correo electrónico (`florencia.villeneuve@gmail.com`) y agendamiento online con Cal.com. No se utilizan formularios de entrada de texto en la web.
- **Integración con Cal.com (Popup Modal):** Para la reserva directa de sesiones online en las 3 terapias (Pareja, Crianza y Proceso Vincular), se utiliza la integración oficial de Cal.com en modo ventana emergente/popup modal mediante [CalEmbed.astro](file:///c:/Users/pablo/pablo/Documents/Coding/flor-villeneuve-web/src/components/ui/CalEmbed.astro) con atributos `data-cal-link`, `data-cal-namespace` y `data-cal-config`. Se prescinde de contenedores o acordeones inline para evitar ventanas emergentes duplicadas al finalizar una reserva.
- **Comunidad de WhatsApp:** Enlace de invitación (`https://chat.whatsapp.com/L7jnhxhIvqb6QbwnFN1PJo`) disponible en el Footer (`Footer.astro`) bajo la columna "Conectá", donde Florencia comparte reflexiones breves sobre vínculos, talleres y videos de YouTube con más de 70 personas.
- **Botón Flotante:** Implementado en [WhatsAppFloating.astro](file:///c:/Users/pablo/pablo/Documents/Coding/flor-villeneuve-web/src/components/ui/WhatsAppFloating.astro) e integrado globalmente en [BaseLayout.astro](file:///c:/Users/pablo/pablo/Documents/Coding/flor-villeneuve-web/src/layouts/BaseLayout.astro) (`fixed bottom-6 right-6 z-50`).
- **Sección `#contacto`:** En [Contact.astro](file:///c:/Users/pablo/pablo/Documents/Coding/flor-villeneuve-web/src/components/sections/Contact.astro) se presenta la invitación directa y botones de contacto a WhatsApp y Email, preservando el ancla de navegación sin necesidad de formularios.

---

## 8. Testing y Aseguramiento de Calidad

- Ejecutar las pruebas antes de cualquier commit:
  ```bash
  pnpm test
  ```
- **Nota Crítica sobre Tests:**
  - `tests/seo-links.test.ts` verifica explícitamente que tanto `src/pages/index.astro` como `README.md` contengan el link `https://instagram.com/florencia.villeneuve`. **No modificar ni remover este enlace en ningún documento sin actualizar el test correspondiente.**
  - `tests/page-metadata.test.ts` valida que las páginas esenciales (`index.astro`, `bio.astro`, `servicios/index.astro`, `servicios/pareja.astro`, `servicios/crianza-familia.astro`, `servicios/proceso-vincular.astro`, `tienda.astro`, `blog.astro`, `preguntas.astro`) incluyan la prop `keywords`.
  - El script `prebuild` en `package.json` ejecuta automáticamente `pnpm test` antes de `astro build`.

---

## 9. Flujo de Trabajo Git

- **Conventional Commits:** Usar siempre prefijos estándar:
  - `feat:` Nuevas funcionalidades o páginas.
  - `fix:` Corrección de errores o enlaces caídos.
  - `chore:` Mantenimiento de dependencias o configuración.
  - `docs:` Cambios en documentación (`AGENTS.md`, `README.md`).
  - `style:` Ajustes puramente visuales o de formato.
  - `test:` Inclusión o ajuste de pruebas unitarias.
- **Ramas:** Desarrollar en ramas de características (`feat/...`, `fix/...`), nunca commitear directamente a `main`.
- **Commits atómicos:** Mensajes descriptivos en inglés o según el estándar del proyecto.

---

---

## 10. Arquitectura del Blog y Reflexiones Vinculares

- **Identidad:** *Reflexiones sobre la Arquitectura de los Vínculos* con indagación sobre la trama oculta de las relaciones.
- **Subsecciones Oficiales:**
  - `pareja` (`#pareja`): Dinámica afectiva, polaridad masculina/femenina, bucles defensivos.
  - `crianza` (`#crianza`): Paternidad y maternidad consciente, deconstrucción del modelo ideal y límites con coherencia.
  - `vinculos` (`#vinculos`): Amistad, autonomía, reciprocidad y espacios de autoexploración.
- **Navegación en Menú Superior (`Header.astro`):**
  - En el dropdown de "Blog", cada tema (Pareja, Crianza, Vínculos) enlaza directamente a su artículo individual (`/blog/[slug]`) en vez de a la página de archivo general `#ancla`.
  - Si una categoría cuenta con múltiples artículos, el menú escala de manera dinámica mostrando los artículos específicos.
- **Llamadas a la Acción de Agenda y Comunidad:**
  - Todo artículo del blog se vincula a una sesión diagnóstica en `vincularServices`:
    - Pareja $\rightarrow$ `/servicios/pareja` + WhatsApp específico de pareja.
    - Crianza $\rightarrow$ `/servicios/crianza-familia` + WhatsApp específico de crianza.
    - Vínculos $\rightarrow$ `/servicios/proceso-vincular` + WhatsApp específico de proceso vincular.
  - Se integra un bloque de invitación a la **Comunidad de WhatsApp** (+70 personas de todo el mundo) para recibir reflexiones cotidianas, talleres y videos de YouTube tanto en la página principal del Blog (`/blog`) como al pie de cada artículo individual (`/blog/[slug]`).
- **Páginas Individuales (`src/pages/blog/[slug].astro`):**
  - Generadas estáticamente con `getStaticPaths`.
  - Incluyen schema JSON-LD estructurado (`BlogPosting`), canonical único, tarjeta de invitación a la comunidad y tarjetas de lecturas recomendadas.
- **Tarjetas de Listado (`BlogArticleCard.astro`):**
  - En la vista de archivo/listado (`/blog`), se presenta un extracto ágil con el párrafo introductorio y un enlace directo `Leer más →` para invitar a la lectura completa.
  - Se eliminó el texto técnico *"permalink"* para simplificar la comprensión del usuario final.

---

## 11. Mantenimiento de este Archivo

- Este archivo es mantenido activamente por agentes de IA.
- Cada vez que se agregue una nueva página, componente, servicio, integración o convención arquitectónica, este documento debe actualizarse para preservar la memoria del proyecto.
- Nunca modificar el archivo global `C:\Users\pablo\.gemini\GEMINI.md`, ya que es de mantenimiento exclusivo del usuario.
