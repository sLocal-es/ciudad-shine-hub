# Add "Ver análisis gratuito" CTA with premium popup modal

## Goal
Boost conversion on the Home page by adding a prominent **"Ver análisis gratuito"** button in the hero that opens a branded modal with a short lead-capture form. No redesign — reuse existing tokens, colors, radii, and form patterns.

## Changes

### 1. New component: `src/components/AnalisisGratuitoModal.tsx`
A self-contained modal that renders a trigger button and the popup.

- Built on existing shadcn `Dialog` (`src/components/ui/dialog.tsx`) — already supports backdrop, fade/zoom animations, and accessible close button. Adds `backdrop-blur-sm` to the overlay.
- Custom `DialogContent` styling to match brand: `bg-card`, `border-border`, `rounded-xl`, generous padding, no default shadow override needed.
- Smooth open/close (Radix transitions already configured in the project).
- Trap focus, ESC to close, screen-reader labels via `DialogTitle` / `DialogDescription`.

**Modal content:**
- Headline (h2, `font-heading`): "Descubre cómo te ve Google ahora mismo"
- Subheadline (`text-muted-foreground`): "Analizamos gratis tu ficha de Google Business Profile y te mostramos exactamente qué está limitando tu visibilidad."
- Lightweight form (4 fields, single column on mobile, 2-col on md+):
  - Nombre
  - WhatsApp o Email (single field, validated as either valid email OR phone ≥6 digits)
  - Nombre del negocio
  - Ciudad
- Submit button (full width, primary): "Quiero mi análisis gratuito"
- Below CTA, small muted row with two items: "Sin compromiso" · "Respuesta en menos de 24h"

**Form behavior:**
- Reuse `sendForm` from `src/lib/sendForm.ts` and `useToast` (same pattern as `LeadMagnetForm`).
- Zod schema validates all 4 fields; the contact field uses `z.string().refine(v => isEmail(v) || isPhone(v))`.
- `form_type: "Análisis gratuito — Modal Home"` so leads are distinguishable in EmailJS.
- On success: toast confirmation + close modal + reset form.
- On error: destructive toast pointing to info@slocal.es.

### 2. Update hero CTAs in `src/pages/Home.tsx`
In the hero button row (currently "Ver planes →" + "Cómo funciona"):

- Replace the secondary "Cómo funciona" link with the modal trigger button **"Ver análisis gratuito"**, styled identically to the existing outline/ghost CTA (`border border-dark-fg/20 text-dark-fg ... hover:border-primary hover:text-primary`) so it visually matches.
- Keep "Ver planes →" as the primary CTA exactly as it is.
- "Cómo funciona" remains accessible via the navbar — no content loss.

The modal lives once in `Home.tsx` and is controlled via local `useState` (open/close), with the trigger passed as the styled button.

## Out of scope
- No changes to other pages, navbar, or existing `LeadMagnetForm` further down the Home page.
- No new design tokens, no new dependencies.

## Files
- **Create**: `src/components/AnalisisGratuitoModal.tsx`
- **Edit**: `src/pages/Home.tsx` (hero button row + mount modal)
