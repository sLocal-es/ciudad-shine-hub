# slocal.es — Plan del Proyecto

## Descripción del negocio

slocal.es es un sistema de visibilidad local en Google para negocios españoles — no una agencia. Operado por Javi Soriano de forma unipersonal desde Córdoba. Posicionamiento "anti-agencia": atención personal, precios transparentes, sin intermediarios.

**Clientes objetivo**: autónomos y pequeñas empresas de servicios locales — fontaneros, electricistas, reformas, pintores, psicólogos, fisioterapeutas, entrenadores personales, estudios de yoga, clínicas.

**Propuesta de valor**: lo que una agencia cobra por atenderte (€800-1.200/mes), slocal.es lo hace por €150-250/mes con gestión personal real.

---

## Marca y diseño

- **Colores**: dark navy (#1A1D2E / #0B1120), burnt orange (#D96A28 / #F97316), blanco
- **Tono**: directo, humano, sin jerga de agencia, primera persona
- **Logo**: slocal.es en texto
- **Tagline**: "El sistema de visibilidad local para negocios españoles"

---

## Stack técnico

- **Framework**: React + Vite (construido con Lovable.dev)
- **Hosting**: Lovable (dominio custom slocal.es)
- **Pre-rendering**: lovablehtml.com — crítico para crawlabilidad de React SPA
- **Analytics**: GA4 (G-FM0CL24HP8) + Microsoft Clarity
- **Cookies**: CookieYes
- **Formularios/CTA**: WhatsApp + email hola@slocal.es
- **Router**: React Router v6

---

## Arquitectura de URLs

### Nivel 1 — Home

- `/`

### Nivel 2 — Servicio

- `/aparecer-en-google-maps`
- `/seo-para-negocios-locales`
- `/ficha-google-mi-negocio`
- `/como-salir-primero-en-google`

### Nivel 2 — Ciudades

- `/seo-local-madrid`
- `/seo-local-barcelona`
- `/seo-local-valencia`
- `/seo-local-sevilla`
- `/seo-local-malaga`
- `/seo-local-zaragoza`
- `/seo-local-bilbao`
- `/seo-local-murcia`

### Nivel 2 — Sectores (slugs definitivos — NO cambiar)

- `/seo-para-fontaneros`
- `/seo-para-reformas`
- `/seo-para-pintores`
- `/seo-para-clinicas`
- `/seo-para-fisioterapeutas`
- `/seo-para-entrenadores`
- `/seo-para-yoga`

**IMPORTANTE**: Los slugs anteriores (`/mas-clientes-para-fontaneros` etc.) tienen redirección 301 a los nuevos. No eliminar esas redirecciones.

### Nivel 3 — Sector + Ciudad (ruta dinámica)

- Patrón: `/:sector/:ciudad`
- Ejemplo: `/seo-para-fontaneros/bilbao`
- **Implementación**: React Router v6 con ruta `/:sector/:ciudad` — NO usar `/seo-para-:sector/:ciudad` porque React Router v6 no soporta parámetros parciales en segmentos
- El componente usa el slug completo (`seo-para-fontaneros`) desde `useParams()` para identificar el sector

### Blog

- Índice: `/blog`
- Artículos: `/blog/:slug`
- Datos gestionados desde `posts.ts` — añadir artículo = añadir objeto al array, sin tocar componentes ni rutas

---

## Decisiones técnicas importantes (NO revertir)

1. **React Router**: ruta dinámica declarada como `/:sector/:ciudad`, no como `/seo-para-:sector/:ciudad`
2. **posts.ts**: archivo único de datos para todos los artículos del blog. Estructura: `slug, title, metaDescription, category, date, featuredImage, altText, excerpt, content`
3. **Canonical**: cada página de tercer nivel tiene canonical propio — nunca heredado de la página padre
4. **Redirecciones 301**: activas para slugs de sector antiguos → nuevos
5. **Menú de navegación principal**: NO modificar sin instrucción explícita

---

## Enlazado interno (estructura actual)

- **Footer → sección Sectores**: enlaces a páginas de sector nivel 2 con nuevos slugs
- **Footer → sección Ciudades**: enlaces a páginas de ciudad nivel 2
- **Footer → sección Blog**: enlace a `/blog`
- **Footer → sección Empresa**: cómo funciona, analiza tu web, planes, contacto
- **Páginas de sector nivel 2**: sección "Ciudades donde trabajo" antes del footer con grid de ciudades → tercer nivel
- **Páginas de tercer nivel**: enlace de subida al sector padre + sección "También trabajo en" con ciudades hermanas + sección "Otros sectores en [Ciudad]"
- **Artículos de blog**: enlazan a página de sector o ciudad más relevante según slug

---

## Sitemap (prioridades)

- Home: 1.0
- Servicio y sector nivel 2: 0.8
- Ciudad nivel 2: 0.8
- Tercer nivel sector+ciudad: 0.6
- Blog índice: 0.7
- Artículos de blog: 0.6

---

## Planes y precios actuales

- **Setup inicial** (web + ficha): €497 + IVA — pago único
- **Plan Esencial**: €150 + IVA/mes — 2 artículos blog/mes, 4 posts GBP/mes, gestión ficha
- **Plan Pro**: €250 + IVA/mes — 4 artículos blog/mes, 8 posts GBP/mes, gestión ficha
- Sin permanencia mínima. Se cancela con 30 días de antelación.

---

## Lo que NO hacer

- No modificar el menú de navegación principal sin instrucción explícita
- No cambiar slugs de URLs ya indexadas sin crear redirección 301
- No usar placeholders con corchetes `[texto]` en producción
- No encadenar redirecciones 301 (A→B→C) — actualizar siempre al destino final
- No meter todas las ciudades en el footer (diluye PageRank)
- No solicitar indexación manual individual en Search Console para lotes grandes — usar sitemap
