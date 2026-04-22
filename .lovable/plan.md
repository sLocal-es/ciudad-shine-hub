

## Sustituir sección de ciudades en `SectorPage.tsx`

La sección con enlaces a `/seo-para-[sector]/[ciudad]` ya fue eliminada en un paso anterior. Ahora añado en su lugar una nueva sección que enlaza a las páginas de ciudad de Nivel 2 existentes (`/seo-local-[ciudad]`), usando un diseño de chips.

### Cambio único en `src/pages/SectorPage.tsx`

Insertar una nueva sección entre la FAQ y "También trabajamos con otros sectores":

- **H2:** `Trabajamos con negocios en toda España`
- **Párrafo:** `Gestionamos el posicionamiento local de negocios en toda España. Estas son algunas de las ciudades donde trabajamos actualmente:`
- **Chips** (8 enlaces): Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao, Murcia → cada uno enlaza a `/seo-local-[ciudad]`.

### Diseño de los chips
- Estilo coherente con la marca: borde sutil, fondo `bg-card`, padding compacto, hover en color primario (`#E8622A`).
- Layout flex-wrap centrado.
- Sin cambios de tipografía ni paleta.

### Lo que NO se toca
- Footer.
- Resto de secciones de `SectorPage.tsx` (Hero, Problem, How it works, Visual proof, Plans, FAQ, Otros sectores, CTA final).
- Resto de páginas y componentes.

### Resultado
- Cero enlaces a URLs 404.
- Refuerzo de enlazado interno desde las 7 páginas de sector hacia las 8 páginas de ciudad de Nivel 2.

