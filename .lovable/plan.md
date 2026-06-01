## Objetivo

Eliminar todos los `ImagePlaceholder` (cajas con borde discontinuo y emoji 🖼) que aún quedan por la web y reemplazarlos por mockups vectoriales coherentes con la temática: Google Maps, Local Pack, fichas Google Business Profile, reseñas, métricas SEO local. La página debe quedar lista para producción, sin marcadores temporales.

## Placeholders detectados

- `src/pages/Home.tsx` (3): captura Local Pack del hero secundario, iconos por sector, mockup informe ficha Google.
- `src/pages/ServicePage.tsx` (1, dinámico por servicio): hero ilustración por servicio (fontaneros, dentistas, abogados, etc.).
- `src/pages/SeoNegociosLocales.tsx` (1): Local Pack con negocio destacado.
- `src/pages/AparecerEnGoogleMaps.tsx` (1): móvil con Maps + Local Pack.
- `src/pages/FichaGoogleMiNegocio.tsx` (1): ficha GBP optimizada.
- `src/pages/Contacto.tsx` (1): foto lateral del formulario.

`ComoFunciona.tsx` ya está cubierto (mockups creados en la iteración anterior).

## Plan de implementación

### 1. Crear librería compartida `src/components/visuals/SeoVisuals.tsx`

Componentes React+Tailwind+SVG, sin imágenes externas, usando tokens del design system (`--primary` naranja, `--secondary` beige, `--background` crema, `--foreground`). Iconos de `lucide-react`. Cada componente es responsive y autocontenido.

Componentes a crear:

- `LocalPackCard` — Tarjeta tipo resultado Google Maps con 3 negocios, el primero destacado en naranja con badge "Tu negocio", estrellas, nº de reseñas, distancia y categoría. Recibe props opcionales (`businessName`, `category`, `city`) para personalizar por página.
- `MapsMobileMockup` — Marco de móvil con barra de búsqueda, área de mapa con pines y Local Pack inferior. Para hero de "Aparecer en Google Maps".
- `GBPProfileMockup` — Mockup completo de ficha Google Business: nombre, categoría, rating con estrellas, horario, dirección, botones (Llamar, Cómo llegar, Web, Guardar), grid de fotos placeholder y lista de últimas reseñas con avatar + texto corto.
- `ReviewsWidget` — Resumen de reseñas: nota media grande (4,9), nº reseñas, barras de distribución 5★-1★, 2 reseñas destacadas.
- `RankingProgress` — Gráfico de evolución de posición media (similar al `PositionChart` de Córdoba) reutilizable para cualquier sector/ciudad. Usa recharts.
- `MetricsDashboard` — Tarjeta tipo informe mensual con 3 KPIs (Llamadas, Clics "Cómo llegar", Visitas a la web) con números grandes, flecha verde de tendencia y mini sparkline SVG.
- `SectorIconsGrid` — Grid 2×2 (o 4 en línea en desktop) de iconos lucide por sector: `Wrench` (fontaneros), `HeartPulse` (clínicas), `Scale` (abogados), `Dumbbell` (gimnasios), etc., dentro de tarjetas redondeadas beige con etiqueta.
- `ServiceHeroVisual` — Componente envolvente que recibe `slug` del servicio y elige el mockup más adecuado:
  - `fontaneros`, `reformas`, `cerrajeros` → `LocalPackCard` con su sector.
  - `dentistas`, `fisioterapeutas`, `psicologos` → `GBPProfileMockup` con su sector.
  - `gimnasios`, `abogados` → `ReviewsWidget`.
  - Fallback → `LocalPackCard` genérico.

### 2. Sustituciones por página

- `Home.tsx`
  - Hero secundario (línea 139) → `LocalPackCard` genérico mostrando 3 negocios locales reales-ficticios.
  - Iconos por sector (línea 189) → `SectorIconsGrid`.
  - Informe ficha Google (línea 288) → `GBPProfileMockup` (versión compacta).
- `ServicePage.tsx` (línea 72) → `ServiceHeroVisual slug={service.slug}`.
- `SeoNegociosLocales.tsx` → `LocalPackCard` con destacado.
- `AparecerEnGoogleMaps.tsx` → `MapsMobileMockup`.
- `FichaGoogleMiNegocio.tsx` → `GBPProfileMockup`.
- `Contacto.tsx` → `MetricsDashboard` con KPIs ejemplo + tagline "Lo que mides, mejora" (más coherente que una foto stock; mantiene la temática SEO local).

### 3. Limpieza

- No borrar `ImagePlaceholder.tsx` (puede seguir usándose en futuras iteraciones), pero retirar todos los imports no usados en las páginas modificadas.
- No tocar header, footer, textos, rutas, ni estilos globales.
- Verificación: `rg "ImagePlaceholder" src/pages` debe devolver 0 resultados tras los cambios.

## Detalles técnicos

- Tokens: usar siempre `bg-secondary`, `text-foreground`, `border-border`, `text-primary`, `bg-primary/10`, etc. Sin colores hardcodeados salvo gradientes sutiles para el "mapa" (`from-secondary via-background to-secondary`).
- Tipografía: `font-heading` para títulos de mockup, `font-body` para texto, tamaños `text-xs`/`text-sm` para realismo.
- Responsive: todos los mockups `max-w-full`, con `md:` breakpoints donde haga falta. Grid de iconos: `grid-cols-2 md:grid-cols-4`.
- Sin dependencias nuevas (recharts ya está instalado).
- Reseñas y nombres ficticios pero realistas, sin marcas reales protegidas.

## Resultado esperado

Ningún placeholder con borde discontinuo visible en la web. Cada hueco muestra una visualización temática (Maps, GBP, reseñas, métricas) que refuerza el mensaje SEO local de slocal.es.
