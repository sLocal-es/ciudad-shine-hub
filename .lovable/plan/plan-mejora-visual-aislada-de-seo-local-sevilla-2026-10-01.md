# Plan: mejora visual aislada de SEO local Sevilla

## Alcance

Solo se modificarán:

- `src/pages/SeoLocalSevilla.tsx`
- `package.json`
- `bun.lock`

No se tocarán plantillas compartidas, Home, otras páginas, rutas, metadatos, JSON-LD, `AGENTS.md` ni `roadmap.md`.

## Cambios en `SeoLocalSevilla.tsx`

### 1. ¿Por qué es importante el SEO local en Sevilla?

- Mantener el eyebrow y todos los textos existentes, sin añadir contenido.
- Destacar “importante” en naranja dentro del H2.
- Dividir el párrafo actual en una entradilla grande y un segundo párrafo de lectura.
- Convertir el plazo de `city.plazo` en una cifra visual grande dentro de un panel azul tinta, conservando “meses”, la etiqueta y la nota actuales.
- Sustituir los chips de búsquedas por cuatro tarjetas visuales con iconos decorativos distintos y ejemplos presentados como barras de búsqueda.
- Mantener los dos ejemplos de “Servicio + zona” en barras independientes.

### 2. ¿Cómo aparecer en Google Maps en Sevilla?

- Añadir el eyebrow “— Google Maps”.
- Destacar “Google Maps” en naranja dentro del H2.
- Reorganizar el primer párrafo existente en una entradilla y tres filas con check naranja.
- Presentar relevancia, distancia y prominencia en tres teselas con iconos decorativos.
- Convertir el segundo párrafo en una banda visual y apuntar el enlace directamente a `/ficha-google-mi-negocio`.
- Conservar literalmente todas las palabras visibles actuales, salvo la reorganización indicada y la flecha solicitada del enlace.

### 3. Zonas de Sevilla

- Mantener textos y estructura.
- Elevar “Búsqueda tipo” a 11 px.
- Elevar cada búsqueda a 15 px con tinta al 80 %.
- Elevar los municipios a 15 px en blanco.

### 4. Responsive y accesibilidad

- Mantener una sola columna en móvil y activar las rejillas indicadas en pantallas mayores.
- Evitar desbordes en búsquedas largas y teselas.
- Marcar todos los iconos nuevos como decorativos.
- Preservar la jerarquía H2 → H3 y el único H1 de la página.
- Revisar que ningún texto de lectura de estas secciones quede por debajo de 15 px con opacidad inferior al 80 %.

## Reversión de dependencias

La reversión es posible. En `package.json` se restaurarán exactamente:

- `@tanstack/react-router`: `1.170.18`
- `@tanstack/react-start`: `1.168.32`
- `@tanstack/router-plugin`: `1.168.23`

Se regenerará `bun.lock` únicamente para reflejar esas tres versiones, sin actualizar ninguna otra dependencia. Si el gestor intentara modificar paquetes adicionales, se detendrá esa parte y se informará antes de aceptar cambios fuera del alcance.

## Verificación

- Comparar los textos renderizados antes y después para confirmar que solo cambia su presentación.
- Buscar precios y expresiones de permanencia en la salida de Sevilla.
- Revisar Sevilla en escritorio y móvil, incluyendo contraste, tamaños, desbordes y jerarquía.
- Confirmar que Madrid, Córdoba, Home y páginas de sector no presentan diferencias.
- Comprobar compilación, hidratación y consola sin errores con las versiones restauradas.
- Entregar la lista final de archivos modificados, limitada a los tres autorizados.
