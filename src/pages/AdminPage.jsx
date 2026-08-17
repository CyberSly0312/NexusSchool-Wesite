import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Upload,
  FileUp,
  Trash2,
  Plus,
  Download,
  RotateCcw,
  Info,
  LogOut,
} from 'lucide-react'
import AdminGate from '../components/AdminGate'
import Logo from '../components/Logo'
import { useSiteConfig } from '../context/SiteConfigContext'
import { socialIconMap, socialIconOptions } from '../data/socialIcons'

const colorFields = [
  { key: 'blueDeep', label: 'Bleu profond', hint: 'Navigation, boutons principaux' },
  { key: 'blue', label: 'Bleu', hint: 'Liens, accents secondaires' },
  { key: 'blueBright', label: 'Bleu vif', hint: 'Notifications, mise en valeur' },
  { key: 'amber', label: 'Ambre', hint: 'Accent chaleureux, rare' },
  { key: 'teal', label: 'Sarcelle', hint: 'Indicateurs positifs' },
  { key: 'clay', label: 'Argile', hint: 'Alertes, accents rares' },
]

export default function AdminPage() {
  return (
    <AdminGate>
      <AdminDashboard />
    </AdminGate>
  )
}

function AdminDashboard() {
  const { config, setLogo, setColor, setSocialLinks, resetToDefaults, exportConfig, importConfig } =
    useSiteConfig()
  const [savedNotice, setSavedNotice] = useState(false)
  const importInputRef = useRef(null)

  const flashSaved = () => {
    setSavedNotice(true)
    setTimeout(() => setSavedNotice(false), 1800)
  }

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 300 * 1024) {
      alert("Le fichier dépasse 300 Ko. Utilisez de préférence un SVG ou un PNG optimisé.")
      return
    }
    const reader = new FileReader()
    reader.onload = () => {
      setLogo(reader.result)
      flashSaved()
    }
    reader.readAsDataURL(file)
  }

  const handleExport = () => {
    const blob = new Blob([exportConfig()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'site-config.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleImportFile = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result)
        importConfig(parsed)
        flashSaved()
      } catch {
        alert("Ce fichier n'est pas une configuration valide.")
      }
    }
    reader.readAsText(file)
    e.target.value = ''
  }

  const updateLink = (id, patch) => {
    setSocialLinks(config.socialLinks.map((l) => (l.id === id ? { ...l, ...patch } : l)))
  }

  const removeLink = (id) => {
    setSocialLinks(config.socialLinks.filter((l) => l.id !== id))
  }

  const addLink = () => {
    if (config.socialLinks.length >= 6) return
    setSocialLinks([
      ...config.socialLinks,
      { id: `link-${Date.now()}`, label: 'Nouveau lien', icon: 'Globe', url: '' },
    ])
  }

  const logout = () => {
    window.sessionStorage.removeItem('nexus-admin-unlocked')
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-paper-dim pb-24">
      <header className="sticky top-0 z-30 bg-white border-b border-ink/8">
        <div className="container-nexus flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-1.5 text-[14px] text-ink-muted hover:text-ink transition-colors">
              <ArrowLeft size={16} />
              Voir le site
            </Link>
            <span className="w-px h-5 bg-ink/10" />
            <span className="font-display font-semibold text-[15px] text-ink">Administration</span>
          </div>
          <div className="flex items-center gap-3">
            {savedNotice && (
              <span className="text-[13px] text-teal font-medium">Enregistré ✓</span>
            )}
            <button
              onClick={logout}
              className="flex items-center gap-1.5 text-[13.5px] text-ink-muted hover:text-ink transition-colors"
            >
              <LogOut size={15} /> Se déconnecter
            </button>
          </div>
        </div>
      </header>

      <div className="container-nexus pt-10">
        <div className="flex items-start gap-3 rounded-xl2 bg-blue-mist/50 border border-blue-mist p-5 mb-10">
          <Info size={18} className="text-blue-deep shrink-0 mt-0.5" />
          <p className="text-[13.5px] text-ink-soft leading-relaxed">
            Ce site est entièrement frontend : les changements ci-dessous
            s'appliquent immédiatement <strong>dans ce navigateur</strong> pour
            l'aperçu. Pour qu'ils soient visibles par tous les visiteurs,
            cliquez sur <strong>« Télécharger la configuration »</strong> en
            bas de page, remplacez <code className="font-mono text-[12.5px]">src/data/site-config.json</code> par
            le fichier téléchargé, puis relancez <code className="font-mono text-[12.5px]">npm run build</code> et
            redéployez le site.
          </p>
        </div>

        {/* Logo */}
        <Section title="Logo" description="Remplace le badge « N » par défaut sur le site.">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white px-5 py-4">
              <Logo />
              <span className="text-[13.5px] text-ink-muted">Aperçu actuel</span>
            </div>
            <div className="flex items-center gap-3">
              <label className="inline-flex items-center gap-2 rounded-full bg-blue-deep text-white text-[14px] font-medium px-5 py-2.5 cursor-pointer hover:bg-blue transition-colors">
                <Upload size={15} />
                Importer un logo
                <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
              </label>
              {config.logo && (
                <button
                  onClick={() => {
                    setLogo(null)
                    flashSaved()
                  }}
                  className="inline-flex items-center gap-1.5 text-[13.5px] text-clay hover:text-clay/80 transition-colors"
                >
                  <Trash2 size={14} /> Retirer
                </button>
              )}
            </div>
          </div>
          <p className="text-[12.5px] text-ink-muted mt-4">
            SVG recommandé (fond transparent), sinon PNG optimisé — 300 Ko maximum.
          </p>
        </Section>

        {/* Colors */}
        <Section title="Couleurs de marque" description="Pilotent la navigation, les boutons et les accents du site.">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorFields.map((f) => (
              <div key={f.key} className="rounded-xl border border-ink/10 bg-white p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[13.5px] font-medium text-ink">{f.label}</span>
                  <input
                    type="color"
                    value={config.colors[f.key]}
                    onChange={(e) => setColor(f.key, e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border border-ink/10"
                    aria-label={`Couleur ${f.label}`}
                  />
                </div>
                <input
                  type="text"
                  value={config.colors[f.key]}
                  onChange={(e) => setColor(f.key, e.target.value)}
                  className="w-full rounded-md border border-ink/10 bg-paper px-3 py-2 text-[13px] font-mono text-ink-soft"
                />
                <p className="text-[11.5px] text-ink-muted mt-2">{f.hint}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Social links */}
        <Section title="Liens & réseaux" description="Icônes affichées dans le pied de page. Un lien sans URL n'apparaît pas sur le site.">
          <div className="flex flex-col gap-3">
            {config.socialLinks.map((l) => {
              const Icon = socialIconMap[l.icon] || socialIconMap.Globe
              return (
                <div
                  key={l.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl border border-ink/10 bg-white p-4"
                >
                  <span className="grid place-items-center w-9 h-9 rounded-lg bg-paper-dim text-ink-soft shrink-0">
                    <Icon size={16} />
                  </span>
                  <select
                    value={l.icon}
                    onChange={(e) => updateLink(l.id, { icon: e.target.value })}
                    className="rounded-md border border-ink/10 bg-paper px-3 py-2 text-[13px] text-ink-soft sm:w-32"
                  >
                    {socialIconOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={l.label}
                    onChange={(e) => updateLink(l.id, { label: e.target.value })}
                    placeholder="Nom (ex. Facebook)"
                    className="rounded-md border border-ink/10 bg-paper px-3 py-2 text-[13.5px] text-ink sm:w-40"
                  />
                  <input
                    type="url"
                    value={l.url}
                    onChange={(e) => updateLink(l.id, { url: e.target.value })}
                    placeholder="https://…"
                    className="flex-1 rounded-md border border-ink/10 bg-paper px-3 py-2 text-[13.5px] text-ink"
                  />
                  <button
                    onClick={() => removeLink(l.id)}
                    aria-label="Supprimer ce lien"
                    className="text-ink-muted hover:text-clay transition-colors p-2 self-end sm:self-center"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              )
            })}
          </div>
          {config.socialLinks.length < 6 && (
            <button
              onClick={addLink}
              className="inline-flex items-center gap-1.5 text-[13.5px] font-medium text-blue-deep hover:text-blue mt-4"
            >
              <Plus size={15} /> Ajouter un lien
            </button>
          )}
        </Section>

        {/* Save / export */}
        <Section
          title="Publier les changements"
          description="Les modifications ci-dessus ne sont visibles que dans ce navigateur tant qu'elles n'ont pas été exportées et redéployées."
        >
          <div className="flex flex-wrap gap-3">
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-2 rounded-full bg-blue-deep text-white text-[14px] font-medium px-5 py-2.5 hover:bg-blue transition-colors"
            >
              <Download size={15} /> Télécharger la configuration
            </button>
            <label className="inline-flex items-center gap-2 rounded-full bg-white border border-ink/15 text-ink text-[14px] font-medium px-5 py-2.5 cursor-pointer hover:border-ink/25 transition-colors">
              <FileUp size={15} /> Importer une configuration
              <input
                ref={importInputRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={handleImportFile}
              />
            </label>
            <button
              onClick={() => {
                if (window.confirm('Réinitialiser le logo, les couleurs et les liens aux valeurs par défaut ?')) {
                  resetToDefaults()
                }
              }}
              className="inline-flex items-center gap-2 rounded-full text-[14px] font-medium px-5 py-2.5 text-clay hover:bg-clay-soft transition-colors"
            >
              <RotateCcw size={15} /> Réinitialiser tout
            </button>
          </div>
        </Section>
      </div>
    </div>
  )
}

function Section({ title, description, children }) {
  return (
    <section className="mb-10">
      <div className="mb-4">
        <h2 className="font-display font-semibold text-[18px] text-ink">{title}</h2>
        {description && <p className="text-[13.5px] text-ink-muted mt-1">{description}</p>}
      </div>
      {children}
    </section>
  )
}
