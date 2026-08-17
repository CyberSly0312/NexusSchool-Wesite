import { useState } from 'react'
import { Lock } from 'lucide-react'

const SESSION_KEY = 'nexus-admin-unlocked'
const ADMIN_CODE = 'nexus-admin'

export default function AdminGate({ children }) {
  const [unlocked, setUnlocked] = useState(() => window.sessionStorage.getItem(SESSION_KEY) === '1')
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return children

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value === ADMIN_CODE) {
      window.sessionStorage.setItem(SESSION_KEY, '1')
      setUnlocked(true)
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="grid place-items-center w-12 h-12 rounded-xl bg-white/10 text-white mb-6 mx-auto">
          <Lock size={20} strokeWidth={1.8} />
        </div>
        <h1 className="font-display font-semibold text-xl text-white text-center mb-2">
          Administration
        </h1>
        <p className="text-white/50 text-[13.5px] text-center mb-7 leading-relaxed">
          Accès réservé. Saisissez le code d'accès pour gérer le logo, les
          couleurs et les liens du site.
        </p>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
            setError(false)
          }}
          placeholder="Code d'accès"
          className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-[14.5px] text-white placeholder:text-white/40 focus:border-blue-bright outline-none"
        />
        {error && <p className="text-clay text-[13px] mt-2">Code incorrect.</p>}
        <button
          type="submit"
          className="w-full mt-4 rounded-full bg-white text-ink font-medium text-[14.5px] py-3 hover:bg-white/90 transition-colors"
        >
          Entrer
        </button>
        <p className="text-white/30 text-[12px] text-center mt-6 leading-relaxed">
          Ce code protège l'accès occasionnel, il ne remplace pas une vraie
          authentification. Voir le README pour sécuriser /admin en
          production.
        </p>
      </form>
    </div>
  )
}
