import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import baseConfig from '../data/site-config.json'

const STORAGE_KEY = 'nexus-site-config-overrides'

const SiteConfigContext = createContext(null)

function hexToRgbTriplet(hex) {
  if (!/^#?[0-9a-fA-F]{3}$|^#?[0-9a-fA-F]{6}$/.test(hex)) return null
  const clean = hex.replace('#', '')
  const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean
  const r = parseInt(full.slice(0, 2), 16)
  const g = parseInt(full.slice(2, 4), 16)
  const b = parseInt(full.slice(4, 6), 16)
  return `${r} ${g} ${b}`
}

const cssVarByColorKey = {
  blueDeep: '--color-blue-deep',
  blue: '--color-blue',
  blueBright: '--color-blue-bright',
  amber: '--color-amber',
  teal: '--color-teal',
  clay: '--color-clay',
}

function loadOverrides() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function SiteConfigProvider({ children }) {
  const [config, setConfig] = useState(() => ({
    ...baseConfig,
    ...loadOverrides(),
  }))

  // Applique les couleurs de marque comme variables CSS dès que l'état change.
  useEffect(() => {
    Object.entries(cssVarByColorKey).forEach(([key, cssVar]) => {
      const triplet = hexToRgbTriplet(config.colors?.[key] || '')
      if (triplet) {
        document.documentElement.style.setProperty(cssVar, triplet)
      }
    })
  }, [config.colors])

  // Persiste l'état courant en local (aperçu propre à ce navigateur).
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
    } catch {
      // stockage indisponible (mode privé, quota…) — l'aperçu reste actif
      // en mémoire pour la session en cours.
    }
  }, [config])

  const api = useMemo(
    () => ({
      config,
      setLogo: (dataUrl) => setConfig((c) => ({ ...c, logo: dataUrl })),
      setColor: (key, hex) =>
        setConfig((c) => ({ ...c, colors: { ...c.colors, [key]: hex } })),
      setColors: (colors) => setConfig((c) => ({ ...c, colors: { ...c.colors, ...colors } })),
      setSocialLinks: (links) => setConfig((c) => ({ ...c, socialLinks: links })),
      resetToDefaults: () => {
        window.localStorage.removeItem(STORAGE_KEY)
        setConfig(baseConfig)
      },
      importConfig: (obj) => setConfig({ ...baseConfig, ...obj }),
      exportConfig: () => JSON.stringify(config, null, 2),
      hasUnsavedOverrides: JSON.stringify(config) !== JSON.stringify(baseConfig),
    }),
    [config]
  )

  return <SiteConfigContext.Provider value={api}>{children}</SiteConfigContext.Provider>
}

export function useSiteConfig() {
  const ctx = useContext(SiteConfigContext)
  if (!ctx) throw new Error('useSiteConfig doit être utilisé sous SiteConfigProvider')
  return ctx
}
