

## Plan: Actualizar límites de páginas web en los planes

### Cambios necesarios

**1. `src/components/PlanCards.tsx`**
- Nivel 2: Cambiar "Web multipágina (hasta 5 páginas)" → "Web multipágina (hasta 20 páginas de servicios y áreas)"
- Nivel 3: Cambiar "Web completa (hasta 10 páginas)" → "Web completa (sin límite de páginas)"

**2. `src/pages/Planes.tsx`** — Tabla comparativa
- Fila "Web optimizada SEO": Cambiar "Hasta 5 páginas" → "Hasta 20 páginas" y "Hasta 10 páginas" → "Sin límite"

**3. `src/pages/Planes.tsx`** — FAQ
- Actualizar la respuesta de "¿El precio incluye la creación de la web?" para reflejar "hasta 20 páginas" en Nivel 2 y "sin límite" en Nivel 3.

**4. Revisar `src/data/services.ts` y `src/pages/ServicePage.tsx`** — Si las descripciones de los planes en las páginas de servicio o ciudad repiten estos datos, actualizarlos también.

