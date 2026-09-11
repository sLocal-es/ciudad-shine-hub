import { createFileRoute } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { useState } from 'react'
import { syncIndexNow } from '@/lib/indexnow.functions'

export const Route = createFileRoute('/admin/indexnow')({
  component: AdminIndexNow,
  head: () => ({
    meta: [
      { title: 'Sincronizar con IndexNow | slocal' },
      { name: 'robots', content: 'noindex, nofollow' },
      { name: 'description', content: 'Panel interno para enviar el sitemap de slocal.es a IndexNow.' },
    ],
  }),
})

function AdminIndexNow() {
  const sync = useServerFn(syncIndexNow)
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setResult(null)
    try {
      const res = await sync({ data: { password } })
      setResult({ ok: res.ok, message: res.message })
    } catch {
      setResult({ ok: false, message: 'Error inesperado al enviar. Inténtalo de nuevo.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-white px-6 py-20">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-3xl font-bold tracking-tight text-black">Sincronizar con IndexNow</h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          Pulsa el botón después de cada publicación para avisar a los buscadores de todas las
          páginas del sitemap.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-black placeholder:text-neutral-400 focus:border-black focus:outline-none"
              placeholder="Introduce la contraseña"
            />
          </div>

          <button
            type="submit"
            disabled={loading || password.length === 0}
            className="w-full rounded-xl bg-[#E8541A] px-6 py-3 font-semibold text-white transition-colors hover:bg-black disabled:opacity-50"
          >
            {loading ? 'Enviando…' : 'Sincronizar con IndexNow'}
          </button>
        </form>

        {result && (
          <p
            className={`mt-6 rounded-xl border px-4 py-3 text-sm ${
              result.ok
                ? 'border-neutral-200 bg-neutral-50 text-black'
                : 'border-[#E8541A] bg-[#E8541A]/5 text-black'
            }`}
          >
            {result.message}
          </p>
        )}
      </div>
    </main>
  )
}
