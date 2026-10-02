# Plan: plantilla de ciudad V2 y correcciones SEO locales

## Alcance confirmado

Se modificarán únicamente estos 14 archivos:

1. `src/data/seoLocalCities.ts`
2. `src/components/cityseo/CityPageV2.tsx` — nuevo
3. `src/components/cityseo/CityMasterTemplate.tsx`
4. `src/components/sector/SectorMasterTemplate.tsx`
5. `src/components/sector/SectorHeroDark.tsx`
6. `src/components/sector/HeroVisual.tsx`
7. `src/lib/citySchema.ts`
8. `src/pages/SeoLocalSevilla.tsx`
9. `src/pages/SeoLocalMalaga.tsx`
10. `src/pages/SeoLocalZaragoza.tsx`
11. `src/pages/SeoLocalBilbao.tsx`
12. `src/pages/SeoLocalMurcia.tsx`
13. `src/pages/SeoLocalBarcelona.tsx`
14. `public/llms.txt`

No se tocarán Home, páginas de sector, rutas, títulos, canonicals, `AGENTS.md`, `roadmap.md`, `package.json` ni `bun.lock`.

## 1. Congelar Sevilla como referencia

- Antes de editar, guardar una referencia del HTML servido, textos, orden de secciones, encabezados, anclas, formularios y JSON-LD de `/seo-local-sevilla`.
- Registrar también el estado visual en escritorio y móvil.
- Usar esa referencia para comprobar el refactor. Sevilla conservará exactamente su texto, estructura, orden, identificadores y comportamiento actuales; las únicas diferencias autorizadas serán:
  - el nuevo texto alternativo del visual principal;
  - el nuevo `citiesBody` compartido;
  - los campos de datos centralizados, sin alterar su salida visible.
- Si aparece cualquier otra diferencia en el HTML servido o en pantalla, corregirla antes de cerrar y comunicarla expresamente si no pudiera eliminarse.

## 2. Centralizar los datos territoriales

En `src/data/seoLocalCities.ts`:

- Ampliar `SeoLocalCity` con `provinceName`, `municipiosTitle`, `coverageArea`, `municipios` y `gbp` opcional.
- Incorporar exactamente los valores facilitados para Madrid, Barcelona, Valencia, Sevilla, Málaga, Zaragoza, Bilbao, Murcia y Córdoba.
- Mover los 10 municipios actuales de Sevilla desde su página al registro central.
- Mantener sin cambios los datos existentes de población, competencia, plazo, barrios, búsquedas, mapas y oportunidad.

## 3. Extraer la plantilla CityPageV2

Crear `src/components/cityseo/CityPageV2.tsx` con todo lo que actualmente hace especial a Sevilla:

- banda de auditoría del hero;
- garantía de 60 días;
- manifiesto compacto;
- bloque sobre importancia del SEO local;
- cobertura por barrios y municipios;
- diagnóstico de ausencia en Google Maps;
- guía de Google Maps;
- contenidos de “Cómo posicionamos” y “Qué incluye”;
- FAQ adicional;
- cuadrícula de sectores en su posición actual;
- botón fijo móvil y sus observadores;
- todas las opciones enviadas a `CityMasterTemplate`.

La plantilla recibirá solo `{ city }` y derivará nombres, búsquedas, población, competencia, plazo, cobertura, municipios, formularios y schema desde ese objeto. Los índices de búsquedas y las sustituciones serán exactamente los indicados.

Después:

- `SeoLocalSevilla.tsx` quedará como envoltorio de `CityPageV2` con Sevilla.
- Málaga, Zaragoza, Bilbao y Murcia pasarán a usar la misma plantilla con sus datos.
- Madrid, Córdoba, Barcelona y Valencia seguirán usando `CityMasterTemplate`.

## 4. Corregir CityMasterTemplate sin afectar sectores

En `CityMasterTemplate`:

- hacer `hideCase` efectivo como `true` por defecto;
- sustituir `citiesBody` por el texto exacto indicado;
- usar la meta description estándar también en Valencia, manteniendo sus dos reseñas y `mapSubtitle`;
- asignar el nuevo alt específico de ciudad al visual principal;
- reemplazar siempre los cuatro schemas antiguos por `buildCitySchema`, usando el mismo array FAQ visible;
- construir las opciones por defecto desde `city`: solo ciudad en `areaServed`, catálogo únicamente para Madrid, GBP cuando exista.

En Barcelona:

- retirar `ServicesCTABlock` y `WhyUsBarcelona`, junto con sus props e imports;
- mantener intacto todo lo demás.

## 5. Añadir el alt opcional sin cambiar páginas de sector

- `HeroVisual`: aceptar `alt` opcional y conservar como valor por defecto el texto actual.
- `SectorHeroDark`: aceptar `visualAlt` opcional y pasarlo a `HeroVisual`.
- `SectorMasterTemplate`: añadir `heroVisualAlt` opcional y pasarlo al hero.
- Las páginas de sector no enviarán esta opción, por lo que conservarán exactamente su salida actual.

## 6. Ajustar el schema compartido

En `src/lib/citySchema.ts`:

- exportar `SCHEMA_DATE_MODIFIED = "2026-10-02"` con el comentario solicitado;
- añadir `includeZones` e `includeOfferCatalog`, ambas con valor efectivo `true` cuando no se indiquen;
- con `includeZones: false`, limitar `areaServed` al nodo de la ciudad;
- con `includeOfferCatalog: false`, omitir `hasOfferCatalog` del servicio;
- mantener intactos el resto de nodos, textos e identificadores.

`CityPageV2` activará zonas y catálogo. Las demás ciudades usarán las reglas por defecto descritas arriba.

## 7. Ajustar llms.txt

- Eliminar únicamente la frase “Cada página incluye barrios, municipios de la provincia, tipos de búsquedas locales, preguntas frecuentes y datos de cada mercado.” y la línea vacía asociada.
- No modificar ningún otro contenido.

## Verificación

- Comparar Sevilla antes y después mediante HTML servido normalizado, estructura DOM, texto visible y capturas en escritorio/móvil.
- Confirmar en Sevilla: un H1; mismos title y canonical; mismo orden, anclas `#auditoria-hero` y `#auditoria`, formularios y botón móvil; JSON-LD equivalente al previo salvo las opciones internas añadidas sin cambiar su resultado.
- Confirmar Málaga, Zaragoza, Bilbao y Murcia: un H1, mismo orden de Sevilla, FAQ visible idéntico al `FAQPage`, `areaServed` con ciudad + 6 barrios + sus municipios y formularios `auditoria_{slug}_hero` / `auditoria_{slug}`.
- Probar el envío con dobles controlados o inspección del payload, sin enviar solicitudes reales. `sendForm` acepta actualmente cualquier cadena `form_type` y la remite directamente a EmailJS; no existe una lista restrictiva adicional en el código.
- Confirmar Madrid, Córdoba, Barcelona y Valencia: sin caso ficticio ni enlace asociado, nuevo texto de ciudades, schema con una sola ciudad en `areaServed`; catálogo solo en Madrid; Barcelona sin los dos bloques retirados; Valencia con meta estándar y sus reseñas/mapa intactos.
- Confirmar que Home y una muestra representativa de páginas de sector mantienen su HTML y apariencia; el alt por defecto seguirá siendo el actual.
- Revisar SSR/hidratación, consola, desbordes móvil/escritorio y el registro de compilación.
- Confirmar al final que `package.json` y `bun.lock` no cambiaron y que siguen fijadas las versiones `1.170.18 / 1.168.32 / 1.168.23`.
