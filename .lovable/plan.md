# Plan: mejora aislada de `/seo-local-sevilla`

## Alcance confirmado

Solo cambiará la salida de `/seo-local-sevilla`. Los ajustes en piezas compartidas serán opcionales y conservarán exactamente su salida actual cuando Sevilla no active las nuevas opciones.

La ruta `/aparecer-en-google-maps` existe y redirige con 301 a `/ficha-google-mi-negocio`, por lo que se incluirá el enlace solicitado. `sendForm` ya convierte `message` ausente en cadena vacía, por lo que acepta el formulario compacto sin cambios.

## Archivos que se modificarán

1. **`src/pages/SeoLocalSevilla.tsx`**
   - Sustituir `WhyUsSevilla` por los bloques exclusivos solicitados: importancia del SEO local, zonas/barrios/provincia, guía de Google Maps y botón móvil fijo.
   - Usar `seoLocalCities.sevilla` como fuente de población, competencia, plazo y `barriosBusquedas`; los formatos textuales pedidos se derivarán de esos valores para conservar literalmente el texto visible.
   - Definir los textos exactos de `comoPosicionamos` y `queIncluye`.
   - Insertar la FAQ nueva en tercera posición mediante la opción específica de ciudad.
   - Activar solo aquí: `afterHero`, `afterManifesto`, formulario compacto, anclas, casos antes de auditoría, ocultación del caso de plantilla, cuadrícula de sectores de Home y CTA final a `#auditoria`.
   - Mantener sin cambios hero visual, metadatos, H1, subtítulo, manifiesto, GEO, GBP, Web, proceso, trabajo mensual, mapa, ciudades, complementarios, reseñas y JSON-LD restante.

2. **`src/components/cityseo/CityMasterTemplate.tsx`**
   - Añadir opciones de personalización estrictamente opcionales para pasar los slots y controles de Sevilla a la plantilla maestra.
   - Permitir insertar una FAQ adicional en una posición indicada; la lista resultante alimentará tanto el HTML como `FAQPage`.
   - Permitir sobrescribir solo para Sevilla `comoPosicionamos`, `queIncluye`, `hideCase` y el bloque de sectores.
   - Los valores por defecto conservarán el comportamiento actual de las nueve ciudades, incluido Madrid.

3. **`src/components/sector/SectorMasterTemplate.tsx`**
   - Añadir los slots opcionales `afterHero` y `afterManifesto` en las posiciones indicadas.
   - Exportar `AuditoriaLeadForm` y añadir `compact?: boolean`; por defecto conservará textarea, campos, textos y comportamiento actuales.
   - Añadir opciones para el destino del CTA principal, identificador de la auditoría central, desplazamiento para cabecera fija, colocación única de `CasosExitoSection` antes de la auditoría y sustitución opcional del bloque “Otros sectores”.
   - Mantener por defecto el caso real, los casos de éxito al final, el CTA a `/contacto` y todo el orden actual.

4. **`src/components/sector/SectorHeroDark.tsx`**
   - Renderizar el CTA como `<a>` únicamente cuando su destino empiece por `#`; seguir usando el enlace de navegación actual para cualquier otra URL.
   - No cambiar imagen, disposición, textos ni clases del hero.

5. **`src/components/CTASection.tsx`**
   - Añadir soporte opcional para anclas: `<a>` solo cuando `buttonTo` empiece por `#`; comportamiento actual sin cambios para rutas normales.

6. **`src/components/home/SectorsGridSection.tsx`** — nuevo
   - Extraer la cuadrícula abierta de nueve sectores con exactamente el mismo marcado, textos, iconos y clases que hoy usa Home.
   - Reutilizarla en Sevilla como sustitución completa de “Otros sectores”.

7. **`src/pages/Home.tsx`**
   - Reemplazar exclusivamente el bloque interno de sectores por el componente extraído, sin alterar su HTML renderizado, orden, textos, estilos ni comportamiento.

## Orden exclusivo de Sevilla

```text
Hero actual
Banda de auditoría compacta (#auditoria-hero)
Herramientas
Manifiesto actual
¿Por qué es importante el SEO local en Sevilla?
Cómo posicionamos
Qué incluye
Zonas de Sevilla + provincia
¿Cómo aparecer en Google Maps en Sevilla?
Casos de éxito
Auditoría central (#auditoria)
Cómo trabajamos
Resto de bloques actuales
Cuadrícula de 9 sectores de Home
CTA final → #auditoria
```

El “Caso real” de plantilla y `WhyUsSevilla` no se renderizarán en Sevilla.

## Comportamiento móvil

- Añadir un control móvil fijo, solo para Sevilla, enlazado a `#auditoria`.
- Se mostrará después de rebasar la banda superior y se ocultará mientras la auditoría central esté visible.
- La observación se iniciará dentro de `useEffect`, sin acceder a APIs del navegador durante SSR.
- Usará `safe-area-inset-bottom`, reservará separación al final y tendrá una capa inferior a banners/modales existentes.

## Verificación

- Comprobar el HTML servido de Sevilla: un solo H1, metadatos/canonical/H1 intactos, FAQ nueva en tercera posición y dentro de `FAQPage`.
- Comprobar orden de secciones, anclas `#auditoria-hero` y `#auditoria`, CTA del hero/final y ausencia del caso real duplicado.
- Enviar ambos formularios en prueba controlada y confirmar `form_type`: `auditoria_sevilla_hero` y `auditoria_sevilla`, incluido `message` vacío en el compacto.
- Revisar Sevilla en escritorio y móvil: hero intacto, banda, cuadrículas, chips no interactivos, botón fijo y ausencia de solapes.
- Comparar HTML y capturas representativas de Home, Madrid, Córdoba, otra ciudad y una página de sector para confirmar que no cambian.
- Revisar build, hidratación, consola y errores de ejecución.
