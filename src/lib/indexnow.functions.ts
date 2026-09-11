import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const KEY_LOCATION = 'https://slocal.es/8dad1c7fd656458f868474d865808d38.txt'
const SITEMAP_URL = 'https://slocal.es/sitemap.xml'

export const syncIndexNow = createServerFn({ method: 'POST' })
  .inputValidator((data) => z.object({ password: z.string().min(1) }).parse(data))
  .handler(async ({ data }) => {
    const key = process.env['INDEXNOW_KEY']
    if (!key) {
      return { ok: false as const, message: 'La clave de IndexNow no está configurada.' }
    }
    if (data.password !== key) {
      return { ok: false as const, message: 'Contraseña incorrecta.' }
    }

    const sitemapRes = await fetch(SITEMAP_URL, { headers: { accept: 'application/xml' } })
    if (!sitemapRes.ok) {
      return {
        ok: false as const,
        message: `No se pudo leer el sitemap (código ${sitemapRes.status}).`,
      }
    }

    const xml = await sitemapRes.text()
    const urls = Array.from(xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)).map((m) => m[1]!)

    if (urls.length === 0) {
      return { ok: false as const, message: 'El sitemap no contiene direcciones.' }
    }

    const indexNowRes = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: 'slocal.es',
        key,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    })

    return {
      ok: indexNowRes.status < 300,
      status: indexNowRes.status,
      submitted: urls.length,
      message:
        indexNowRes.status < 300
          ? `${urls.length} direcciones enviadas correctamente (código ${indexNowRes.status}).`
          : `IndexNow devolvió el código ${indexNowRes.status}.`,
    }
  })
