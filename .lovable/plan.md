# Cambios solo en /seo-local-malaga

## Archivos que se tocan (2)
1. `src/components/cityseo/CityPageV2.tsx` — se añade un componente nuevo `MalagaPosicionamientoSection`, al lado del de Sevilla y con el mismo diseño (fondo blanco, borde superior, misma tipografía del H2 y de los párrafos). H2 «Posicionamiento local en Málaga» y 3 párrafos con los textos exactos; en el párrafo 1, «agencia de SEO local» enlaza a `/` con `text-primary hover:underline`. Sin imágenes ni tarjetas. El componente de Sevilla y las props existentes no cambian.
2. `src/pages/SeoLocalMalaga.tsx` — pasa a CityPageV2 las props que ya existen:
   - `seoTitleOverride="SEO Local en Málaga | Agencia SEO Local Málaga | slocal.es"`
   - `afterManifestoBefore={<MalagaPosicionamientoSection />}`

## Qué no cambia
- El subtítulo del hero, el H1, la meta description y el canonical de Málaga.
- Sevilla y las otras ciudades, la Home, las páginas de sector, package.json y las dependencias.

## Verificación
- El title exacto aparece en el código que envía el servidor para Málaga; Sevilla y otra ciudad conservan su title.
- Orden: manifiesto → «Posicionamiento local en Málaga» → «¿Por qué es importante el SEO local en Málaga?».
- Un único H1; el build pasa sin errores.
