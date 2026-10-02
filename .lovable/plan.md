# Plan: Sevilla, schema y ajustes globales indicados

## Alcance confirmado

Modificaré únicamente:

1. `src/pages/SeoLocalSevilla.tsx`
2. `src/components/sector/SectorMasterTemplate.tsx`
3. `src/components/cityseo/CityMasterTemplate.tsx`
4. `src/lib/citySchema.ts` — archivo nuevo solicitado
5. `src/routes/__root.tsx`
6. `public/llms.txt`

No tocaré `SectorHeroDark.tsx` ni `CTASection.tsx`, porque los cambios pedidos no los requieren. Tampoco modificaré `AGENTS.md`, `roadmap.md`, otras páginas, rutas, datos de ciudades ni dependencias.

## Teléfono antiguo encontrado

La búsqueda completa por todos los formatos indicados encontró una sola aparición real:

- `public/llms.txt:69` — `Teléfono / WhatsApp (empresa): 684 780 063`

No hay apariciones del teléfono antiguo en componentes, enlaces `wa.me`, enlaces `tel:`, páginas, schema ni otros archivos de `public/`. La coincidencia `8dad1c7fd656458f868474d865808d38` es una clave de IndexNow y no un teléfono; no se tocará.

## Cambios por archivo

### `src/pages/SeoLocalSevilla.tsx`

- Importar los iconos necesarios desde `lucide-react`.
- Crear `GuaranteeStrip` con el texto y las clases exactas indicadas, y montarlo inmediatamente después de `HeroAuditBand` mediante un fragmento dentro de `afterHero`.
- Crear `WhyNotAppearSection` con las seis causas, iconos, tarjetas y banda oscura exactamente indicadas.
- Reordenar exclusivamente `SevillaServicesCta` a: cobertura, diagnóstico, guía de Google Maps.
- Corregir la frase final de `GoogleMapsGuideSection`, retirando la flecha del enlace y dejando el punto fuera.
- Pasar a `CityMasterTemplate` las `schemaOptions` exclusivas de Sevilla con provincia, municipios, fecha y ficha de Google especificadas.
- Mantener intactos el H1, title, meta description, canonical, formularios, IDs, anclas y botón fijo móvil.

### `src/components/sector/SectorMasterTemplate.tsx`

- Cambiar solo la nota de privacidad de la variante opcional `inline` de `AuditoriaLeadForm` a `text-sm text-white/90`; la variante normal conservará exactamente su salida actual.
- Añadir Córdoba al final del array compartido de ciudades: `{ name: "Córdoba", slug: "cordoba" }`.
- No alterar `citiesBody` ni el resto del render compartido.

### `src/components/cityseo/CityMasterTemplate.tsx`

- Añadir la prop opcional `schemaOptions?: CitySchemaOptions`.
- Calcular primero los mismos `seoTitle`, `seoDescription` y `faqs` que ya usa la página.
- Si existe `schemaOptions`, entregar un único objeto generado por `buildCitySchema(...)` en `jsonLd`.
- Si no existe, conservar exactamente los cuatro schemas actuales y su comportamiento.
- Solo Sevilla recibirá esta prop; las otras ocho ciudades no cambiarán su JSON-LD ni su HTML.

### `src/lib/citySchema.ts`

- Crear el archivo con el contenido exacto proporcionado: IDs estables, nodo Organization, WebSite, WebPage, BreadcrumbList, Service, ProfessionalService opcional y FAQPage.
- Usar el mismo array visible de preguntas y los mismos metadatos de Sevilla para evitar divergencias.

### `src/routes/__root.tsx`

- Sustituir únicamente el objeto Organization local por el `organizationNode` compartido, envuelto con `@context`.
- Mantener sin cambios `og:site_name`, idioma, estilos, iconos, CookieYes, analítica y resto del documento raíz.

### `public/llms.txt`

- Sustituir el archivo completo por el texto exacto facilitado, incluido el teléfono nuevo `+34 644 147 310`.

## Resultado estructurado esperado

Para Sevilla, el JSON-LD específico de página será un único `@graph` con:

- 7 nodos: Organization, WebSite, WebPage, BreadcrumbList, Service, ProfessionalService y FAQPage.
- 17 elementos en `areaServed`: Sevilla, 6 barrios y 10 municipios.
- 8 preguntas en FAQPage, idénticas a las 8 preguntas visibles.

El nodo Organization de raíz y el incluido en el grafo compartirán exactamente el mismo `@id`, evitando identidades distintas.

## Verificación

- Comparar Sevilla antes/después: un solo H1 y title, description y canonical sin cambios.
- Verificar orden visual, responsive y paleta de `GuaranteeStrip` y `WhyNotAppearSection`.
- Comprobar `#auditoria-hero`, `#auditoria`, ambos `form_type` y el botón fijo móvil.
- Inspeccionar el HTML servido y el JSON-LD: un `@graph`, 7 nodos, 17 áreas y 8 FAQ coincidentes.
- Revisar rutas representativas de Madrid, Córdoba, otra ciudad, Home y sector: solo aparecerán los cambios globales autorizados (Organization raíz, Córdoba en el listado y teléfono donde proceda).
- Confirmar ausencia total del teléfono antiguo en el proyecto.
- Confirmar compilación e hidratación sin errores.
- Confirmar que `package.json` mantiene `@tanstack/react-router` 1.170.18, `@tanstack/react-start` 1.168.32 y `@tanstack/router-plugin` 1.168.23. No ejecutaré ninguna actualización; si el sistema las altera, las revertiré y lo comunicaré.
