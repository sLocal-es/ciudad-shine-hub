# Cambios solo en /seo-local-sevilla

## Archivos que se tocan (3)
1. `src/components/cityseo/CityMasterTemplate.tsx` — dos props opcionales nuevas: `seoTitleOverride?: string` y `heroSubtitleOverride?: ReactNode`. Sin valor, el title y el subtítulo siguen exactamente igual que ahora. El title también se pasa al JSON-LD (que ya usa `seoTitle`), así que coincide con la nueva etiqueta.
2. `src/components/cityseo/CityPageV2.tsx`
   - Las mismas props opcionales `seoTitleOverride`, `heroSubtitleOverride` y `afterManifestoBefore?: ReactNode`, que se pasan a CityMasterTemplate.
   - Con `afterManifestoBefore` presente, el hueco `afterManifesto` renderiza ese bloque primero y luego la sección actual «¿Por qué es importante el SEO local en {ciudad}?». Si no se pasa, todo queda igual.
   - Nuevo componente `SevillaPosicionamientoSection` (solo se usa en Sevilla): fondo blanco, borde superior y contenedor iguales a los del manifiesto, H2 «Posicionamiento SEO en Sevilla» con la misma tipografía y 3 párrafos con los textos exactos. En el párrafo 1, «agencia de SEO local» es un enlace a `/` con `text-primary hover:underline`. Sin imágenes ni tarjetas.
3. `src/pages/SeoLocalSevilla.tsx` — pasa:
   - `seoTitleOverride="SEO Local en Sevilla | Agencia SEO Sevilla | slocal.es"`
   - `heroSubtitleOverride` = «Agencia SEO en Sevilla especializada en SEO local. Optimizamos tu ficha de Google Business Profile y tu web para que aparezcas primero cuando alguien busca tu servicio en Sevilla.»
   - `afterManifestoBefore={<SevillaPosicionamientoSection />}`

## Qué no cambia
- H1 («SEO Local en Sevilla»), meta description, canonical y resto de textos de Sevilla.
- Las otras 8 páginas de ciudad, la Home, las páginas de sector, package.json y las dependencias (si la plataforma sube TanStack, revierto a 1.170.18 / 1.168.32 / 1.168.23 y aviso).
- Colores: se usa el naranja de la marca ya definido (`text-primary`), negro y blanco.

## Notas
- El bloque no lleva eyebrow porque pediste «solo H2 y 3 párrafos». Si quieres el eyebrow naranja como en el manifiesto, dime el texto exacto (no invento copy).
- Sevilla tendrá dos enlaces a la Home con ancla parecida: «agencia SEO local» (manifiesto) y «agencia de SEO local» (bloque nuevo). Lo dejo así porque es lo que pides.

## Verificación
- Title exacto en el HTML servido de Sevilla; las otras 8 ciudades conservan su title.
- Subtítulo nuevo solo en Sevilla; un único H1.
- Orden: manifiesto → «Posicionamiento SEO en Sevilla» → «¿Por qué es importante el SEO local en Sevilla?».
- Build e hidratación sin errores; package.json sin cambios.
