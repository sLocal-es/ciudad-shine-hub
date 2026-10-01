# Plan: compactación aislada de `/seo-local-sevilla`

## Alcance confirmado

Se modificarán únicamente:

- `src/pages/SeoLocalSevilla.tsx`
- `src/components/sector/SectorMasterTemplate.tsx`
- `src/components/cityseo/CityMasterTemplate.tsx`

No se tocarán `package.json`, `bun.lock`, dependencias, Home, otras páginas, rutas, metadatos, JSON-LD, `AGENTS.md` ni `roadmap.md`. Las tres versiones solicitadas ya están fijadas en `package.json` y `bun.lock`: React Router `1.170.18`, React Start `1.168.32` y Router Plugin `1.168.23`.

## Cambios por archivo

### `src/pages/SeoLocalSevilla.tsx`

1. **Manifiesto compacto exclusivo de Sevilla**
   - Crear `SevillaManifestoSection` con el eyebrow y H2 actuales.
   - Reorganizar literalmente el contenido actual en entradilla, frase con borde naranja, nota GEO y dos tarjetas compactas.
   - Leer población y competencia desde `seoLocalCities.sevilla`; no duplicar esos datos.
   - Usar iconos SVG decorativos con `aria-hidden` y la paleta/clases indicadas.
   - Pasar este bloque mediante la nueva prop `manifestoSection`; así, solo Sevilla sustituirá el manifiesto completo y dejará de mostrar sus imágenes y listas de características.

2. **Banda compacta bajo el hero**
   - Reducir espaciado y radios de `HeroAuditBand` según las clases indicadas.
   - En escritorio, colocar texto, ventajas y formulario en una composición horizontal compacta.
   - En móvil, usar dos campos por fila y botón completo debajo, sin campos superiores a `h-11`.
   - Activar `inline` únicamente en este `AuditoriaLeadForm`, manteniendo los cuatro campos, el `form_type` `auditoria_sevilla_hero`, validación, envío con mensaje vacío, avisos y texto del botón.

3. **Mover la cuadrícula de sectores**
   - Activar `otherSectorsAfterAudit` solo en Sevilla.
   - La cuadrícula existente quedará inmediatamente después de la auditoría central y antes de “Cómo trabajamos”, sin duplicarse en su posición final actual.

4. **Contenido no afectado**
   - Mantener intactos hero, resto de secciones, FAQ/JSON-LD, formulario central, botón móvil y todos los textos no incluidos en esta reorganización.

### `src/components/sector/SectorMasterTemplate.tsx`

1. Añadir `manifestoSection?: ReactNode` a la configuración:
   - Si existe, renderizarla en lugar de todo el manifiesto estándar.
   - Si no existe, conservar exactamente el bloque actual, incluidas imágenes y listas.

2. Añadir `otherSectorsAfterAudit?: boolean`:
   - Con `true`, renderizar `otherSectorsSection` tras la auditoría central y antes de “Cómo trabajamos”.
   - Evitar su renderizado en la ubicación final.
   - Con `false` o ausente, mantener exactamente el orden actual.

3. Ampliar `AuditoriaLeadForm` con `inline?: boolean`:
   - `inline=false` conservará exactamente el marcado, estilos y comportamiento actuales, incluido el formulario central.
   - `inline=true` cambiará solo la disposición y tamaño visual: cinco columnas en escritorio; dos columnas para campos en móvil; botón completo debajo; texto de privacidad conservado debajo de la rejilla.
   - `compact` seguirá controlando únicamente la ausencia del textarea.

### `src/components/cityseo/CityMasterTemplate.tsx`

- Añadir y reenviar las props opcionales `manifestoSection` y `otherSectorsAfterAudit`.
- Sus valores ausentes mantendrán la salida actual de Madrid, Córdoba y todas las demás ciudades.

## Orden resultante exclusivo de Sevilla

```text
Hero actual
Banda de auditoría compacta
Herramientas
Manifiesto compacto de Sevilla
¿Por qué es importante el SEO local en Sevilla?
Cómo posicionamos
Qué incluye
Cobertura y Google Maps
Casos de éxito
Auditoría central sin cambios
Cuadrícula de sectores
Cómo trabajamos
Resto de secciones actuales, sin cuadrícula duplicada
CTA final
```

## Verificación

- Confirmar por comparación de HTML y capturas que Madrid, Córdoba, otra ciudad, Home y un sector no cambian.
- Revisar Sevilla en escritorio y móvil: manifiesto, banda, formulario en fila/rejilla, orden de sectores y ausencia de desbordes.
- Comprobar que el formulario superior envía `auditoria_sevilla_hero` con `message` vacío y que el central conserva `auditoria_sevilla` y su presentación actual.
- Confirmar un único H1, jerarquía H2 → H3, textos idénticos, ausencia de precios y de “permanencia”.
- Revisar HTML servido, hidratación, consola y compilación.
- Confirmar al terminar que `package.json` sigue fijando `1.170.18`, `1.168.32` y `1.168.23`; si alguna versión cambiara automáticamente, revertir solo ese cambio y avisar.
