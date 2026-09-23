# Flor Villeneuve Web

Sitio web oficial de **Florencia Villeneuve** — mentora esotérica, astróloga, escritora y guía en simbología y arteterapia con base en Montevideo, Uruguay.

Plataforma moderna en producción en [florenciavilleneuve.com](https://florenciavilleneuve.com) (migrada desde WordPress).

---

## Stack Tecnológico

- **Framework:** [Astro 4](https://astro.build/) (Static Site Generation con `@astrojs/netlify`)
- **Estilos:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Lenguaje:** TypeScript (strict mode)
- **Fuentes:** `@fontsource` (Cormorant Garamond, Cormorant, Jost)
- **Testing:** [Vitest](https://vitest.dev/) con entorno `jsdom`
- **Formularios:** [Netlify Forms](https://docs.netlify.com/forms/setup/) con honeypot y envío asíncrono
- **Deploy:** [Netlify](https://www.netlify.com/)
- **Package Manager:** `pnpm`

---

## Estructura del Proyecto

```
flor-villeneuve-web/
├── public/
│   ├── .well-known/         # Verificaciones y configuraciones de dominio
│   ├── img/                 # Recursos multimedia estáticos
│   ├── favicon.svg          # Favicon SVG
│   └── robots.txt           # Directivas de rastreo e indexación
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Nav
│   │   ├── sections/        # Hero, Services, About, Mentoria, Testimonials, Contact
│   │   └── ui/              # Button, SectionTitle, ServiceCard
│   ├── layouts/
│   │   └── BaseLayout.astro # Layout base con SEO, metadatos y OpenGraph
│   ├── pages/
│   │   ├── index.astro          # Home principal con formulario en #contacto
│   │   ├── servicios/           # Servicios y acompañamiento vincular
│   │   │   ├── index.astro      # Visión general de los servicios
│   │   │   ├── pareja.astro     # Sesión de pareja
│   │   │   ├── crianza-familia.astro # Sesión de crianza o familia
│   │   │   └── proceso-vincular.astro# Proceso vincular individual
│   │   ├── tienda.astro         # Tienda mística (Próximamente)
│   │   ├── blog.astro           # Diario y reflexiones (Próximamente)
│   │   ├── bio.astro            # Biografía / Sobre mí
│   │   ├── preguntas.astro      # Preguntas frecuentes (FAQ)
│   │   ├── terminos-y-condiciones.astro # Términos legales
│   │   └── politica-de-cookies.astro    # Política de cookies
│   ├── scripts/
│   │   └── reveal.ts        # IntersectionObserver para animaciones de entrada (.reveal)
│   ├── styles/
│   │   └── global.css       # Fuentes, directivas Tailwind y clases utilitarias
│   └── types/
│       └── index.ts         # Tipos e interfaces TypeScript
└── tests/
    ├── base-layout.test.ts  # Pruebas de BaseLayout y SEO
    ├── footer-links.test.ts # Pruebas de enlaces de contacto en el Footer
    ├── page-metadata.test.ts# Pruebas de keywords en páginas principales
    └── seo-links.test.ts    # Validación de enlaces de Instagram y metadata
```

---

## Navegación Principal

| # | Sección | Ruta | Descripción |
|---|---|---|---|
| 1 | Inicio | `/` | Presentación general, servicios, bio breve, testimonios y contacto |
| 2 | Servicios | `/servicios` | Acompañamiento vincular (Pareja, Crianza/Familia, Proceso Individual) |
| 3 | Tienda | `/tienda` | Boutique de recursos y objetos simbólicos (Próximamente) |
| 4 | Blog | `/blog` | Diario de reflexiones, astrología y psicología simbólica (Próximamente) |
| 5 | Sobre mí | `/bio` | Historia de Florencia Villeneuve y trayectoria |
| 6 | Preguntas frecuentes | `/preguntas` | Respuestas a dudas frecuentes sobre sesiones y metodología |
| 7 | Contacto | `/#contacto` | Formulario de contacto directo |

---

## Desarrollo Local

### Requisitos

- [Node.js](https://nodejs.org/) 18 o superior
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

### Instalación

```bash
pnpm install
```

### Comandos Disponibles

| Comando | Acción |
|---|---|
| `pnpm dev` | Inicia el servidor de desarrollo local |
| `pnpm test` | Ejecuta la suite de pruebas unitarias con Vitest |
| `pnpm test:watch` | Ejecuta Vitest en modo interactivo/watch |
| `pnpm build` | Ejecuta pruebas (`prebuild`), typecheck de Astro y genera el build estático |
| `pnpm preview` | Previsualiza localmente la compilación de `dist/` |
| `pnpm astro ...` | Ejecuta la interfaz de línea de comandos de Astro |

---

## Sistema de Diseño

### Paleta de Colores

| Token | Hex | Propósito |
|---|---|---|
| `deep` | `#0D1429` | Fondo oscuro principal (dark mode por defecto) |
| `night` | `#1A1A2E` | Fondos secundarios para secciones y tarjetas |
| `gold` | `#C9A96E` | Color acento dorado, CTAs, bordes e interactividad |
| `goldLight` | `#E2C99A` | Estado hover de acentos dorados |
| `parchment` | `#E8DCC8` | Texto claro principal sobre fondos oscuros |
| `earth` | `#4A3728` | Texto oscuro sobre secciones claras |
| `mist` | `#F5F0E8` | Fondo claro alternativo para secciones de contraste |
| `ink` | `#1C1612` | Texto oscuro de contraste |

### Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Display / Headings | Cormorant Garamond | Titulares principales con estética editorial y mística |
| Subheadings | Cormorant | Subtítulos refinados y destaques |
| Body / UI | Jost | Texto de lectura fluido, botones y navegación |

---

## SEO y Metadatos

- Metatags individualizados por página (`title`, `description`, `keywords`, `robots: index, follow`).
- Open Graph y Twitter Cards completos con imagen optimizada (`/img/og-image.png`).
- Datos estructurados JSON-LD Schema.org (`Person`) en la página de inicio.
- Generación automática de sitemap mediante `@astrojs/sitemap`.
- Archivo `robots.txt` optimizado y canonical URL en todas las rutas.

---

## Redirecciones

Configuradas en `netlify.toml` con estado HTTP 301 para mantener la equidad de enlaces y preservar el posicionamiento del sitio anterior:

| Origen | Destino |
|---|---|
| `/mentoria` | `/servicios` |
| `/guias-y-acompanamientos` | `/servicios` |
| `/formacion` | `/servicios` |
| `/formaciones` | `/servicios` |
| `/formacion/*` | `/servicios` |
| `/arteterapia` | `/servicios` |
| `/about` | `/bio` |
| `/mi-libro` | `/bio` |
| `/contact` | `/#contacto` |
| `/contacto` | `/#contacto` |

---

## Formularios

El formulario de contacto utiliza **Netlify Forms** sin necesidad de API routes ni servicios de terceros:

- **Ubicación:** Sección `/#contacto` en la Home ([Contact.astro](file:///c:/Users/pablo/pablo/Documents/Coding/flor-villeneuve-web/src/components/sections/Contact.astro)).
- **Protección contra spam:** Campo honeypot oculto (`bot-field`).
- **Envío asíncrono:** Gestión de estados en el frontend mediante `fetch` (estados de envío, éxito y error con accesibilidad ARIA).

---

## Canales y Enlaces Oficiales

- **Sitio web:** [florenciavilleneuve.com](https://florenciavilleneuve.com)
- **WhatsApp:** [+598 92 497 675](https://wa.me/59892497675)
- **Instagram:** [@florencia.villeneuve](https://instagram.com/florencia.villeneuve)
- **YouTube:** [@florencia.villeneuve](https://www.youtube.com/@florencia.villeneuve)
- **Email:** [florencia.villeneuve@gmail.com](mailto:florencia.villeneuve@gmail.com)

---

## Licencia

Todos los derechos reservados — Florencia Villeneuve &copy; 2026.
