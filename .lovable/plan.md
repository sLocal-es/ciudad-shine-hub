## Problema

El formulario de la página **`/contacto`** (`src/pages/Contacto.tsx`) no envía emails. Su `handleSubmit` solo ejecuta:

```
alert("Formulario enviado (integración pendiente)")
```

Es un placeholder antiguo que nunca se conectó. Los formularios del Home (`LeadMagnetForm` y `ContactForm`) sí funcionan correctamente con EmailJS usando la configuración de `src/lib/emailjs.ts`.

## Solución

Reemplazar el formulario casero de `Contacto.tsx` para que use EmailJS con la misma configuración que ya funciona en el resto del sitio:

- Service ID: `service_v3qydbe`
- Template ID: `9dh4jtg`
- Public Key: `1cwUJ3NQK_iwLaJLD`

### Cambios en `src/pages/Contacto.tsx`

1. Importar `emailjs`, `EMAILJS_CONFIG`, `useToast` y `zod` (mismo patrón que `ContactForm.tsx`).
2. Validar los campos con zod antes de enviar (nombre, email obligatorios; resto opcionales).
3. En el `handleSubmit`:
   - Llamar a `emailjs.send(...)` con `form_type: "Contacto (página /contacto)"` y todos los campos del formulario (nombre, negocio, ciudad, email, teléfono, tieneWeb, mensaje).
   - Mostrar toast de éxito ("¡Mensaje enviado! Te respondemos en menos de 24 horas.") o error.
   - Limpiar el formulario al enviar con éxito.
4. Mantener intacto el diseño visual, los labels y los campos actuales — solo cambia la lógica de envío.
5. Mostrar estado `Enviando...` en el botón mientras se envía.

### Archivos modificados

- `src/pages/Contacto.tsx` — reemplazar `handleSubmit` y añadir imports.

### Sin cambios

- Los formularios del Home siguen igual (ya funcionan).
- La configuración de EmailJS no se toca.
- No hace falta tocar ningún otro archivo.

## Verificación tras aplicar

1. Ir a `/contacto`, rellenar el formulario y enviar.
2. Debe aparecer un toast verde "¡Mensaje enviado!" y llegar el email a la cuenta configurada en EmailJS.
3. Si hay error de red, debe aparecer toast de error con el email de contacto de respaldo.