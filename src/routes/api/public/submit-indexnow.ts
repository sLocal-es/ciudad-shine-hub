import { createFileRoute } from '@tanstack/react-router'

const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'
const KEY_LOCATION = 'https://slocal.es/8dad1c7fd656458f868474d865808d38.txt'

export const Route = createFileRoute('/api/public/submit-indexnow')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const key = process.env['INDEXNOW_KEY']
        if (!key) {
          return Response.json({ error: 'INDEXNOW_KEY secret not configured' }, { status: 500 })
        }

        // Simple shared-secret auth so only you can trigger submissions.
        const auth = request.headers.get('authorization')
        if (auth !== `Bearer ${key}`) {
          return Response.json({ error: 'Unauthorized' }, { status: 401 })
        }

        let urls: unknown
        try {
          const body = await request.json()
          urls = body?.urls ?? body?.urlList
        } catch {
          return Response.json({ error: 'Invalid JSON body' }, { status: 400 })
        }

        if (
          !Array.isArray(urls) ||
          urls.length === 0 ||
          !urls.every((u) => typeof u === 'string')
        ) {
          return Response.json(
            { error: "Body must include 'urls' as a non-empty array of strings" },
            { status: 400 },
          )
        }

        const indexNowResponse = await fetch(INDEXNOW_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify({
            host: 'slocal.es',
            key,
            keyLocation: KEY_LOCATION,
            urlList: urls,
          }),
        })

        return Response.json({
          status: indexNowResponse.status,
          submitted: urls.length,
        })
      },
    },
  },
})
