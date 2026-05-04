## Qué falla

En la captura se ve que el template de EmailJS usa estas variables:

- `{{title}}` en el asunto
- `{{name}}` en “From Name”
- `{{email}}` en “Reply To”
- En el contenido aparecen `{{FORM_TYPE}}`, `{{from_name}}`, `{{from_email}}`, `{{phone}}`, etc.

Pero el código actual de la web no está enviando `title`, `name`, `email` ni `FORM_TYPE`. Envía principalmente `form_type`, `from_name` y `from_email`.

Eso puede romper el envío si EmailJS necesita esas variables en campos críticos como el asunto, From Name o Reply To. En concreto, tu `Reply To` está configurado como `{{email}}`, pero la web envía `from_email`, no `email`.

## Plan de corrección

1. Crear una función común para enviar formularios a EmailJS
   - Centralizar el envío en un helper único para evitar que cada formulario tenga variables distintas.
   - Enviar siempre los aliases que tu template espera:
     - `title`
     - `name`
     - `email`
     - `FORM_TYPE`
     - `form_type`
     - `from_name`
     - `from_email`
     - `phone`
     - `business`
     - `sector`
     - `city`
     - `message`
   - Mantener `info@slocal.es` como email visible de respaldo en los errores.

2. Actualizar los 3 formularios actuales
   - `src/components/forms/LeadMagnetForm.tsx`
   - `src/components/forms/ContactForm.tsx`
   - `src/pages/Contacto.tsx`

   Los tres usarán el mismo helper para que funcionen igual y no haya diferencias entre Home y `/contacto`.

3. Ajustar los datos enviados según cada formulario
   - Lead magnet:
     - `title`: `Análisis gratuito solicitado`
     - `FORM_TYPE`: `Lead magnet — Análisis gratuito`
   - Formulario de contacto Home:
     - `title`: `Nuevo mensaje de contacto`
     - `FORM_TYPE`: `Contacto`
   - Formulario `/contacto`:
     - `title`: `Nuevo contacto desde /contacto`
     - `FORM_TYPE`: `Contacto (página /contacto)`

4. Mejorar el error para depuración sin exponer datos sensibles
   - Si EmailJS devuelve error, mostrar en consola solo estado/texto técnico del error, no datos del formulario.
   - El usuario seguirá viendo el mensaje claro: “Inténtalo de nuevo o escríbenos a info@slocal.es”.

## Qué no voy a tocar

- No cambiaré el diseño visual.
- No cambiaré secciones de la web.
- No cambiaré el template de EmailJS desde fuera, solo adaptaré la web a lo que ya se ve en tu captura.
- No cambiaré el destinatario: debe seguir siendo `info@slocal.es` en EmailJS.

## Nota importante sobre EmailJS

En tu captura el campo “To Email” ya está en `info@slocal.es`, eso está bien.

Lo más probable es que el fallo venga por variables no coincidentes en `From Name`, `Reply To` y asunto. La corrección será hacer que la web mande tanto los nombres antiguos como los que tu template actual está esperando.