import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LayoutGrid, GraduationCap, ClipboardList, MessageCircle } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { productTabs } from '../data/content'

const tabIcons = {
  pilotage: LayoutGrid,
  academique: GraduationCap,
  administration: ClipboardList,
  communication: MessageCircle,
}

// Aperçus marketing — compositions illustratives, données fictives.
const mockRows = {
  pilotage: [
    { label: 'Effectif global', value: '1 248' },
    { label: 'Présence moyenne', value: '94,6 %' },
    { label: 'Classes actives', value: '42' },
  ],
  academique: [
    { label: 'Bulletins générés', value: '38 / 42' },
    { label: 'Moyenne générale', value: '13,8 / 20' },
    { label: 'Conseils planifiés', value: '3' },
  ],
  administration: [
    { label: 'Dossiers à jour', value: '96 %' },
    { label: 'Paiements du mois', value: '+12,4 %' },
    { label: 'Relances en attente', value: '7' },
  ],
  communication: [
    { label: 'Messages envoyés', value: '312' },
    { label: 'Taux de lecture', value: '89 %' },
    { label: 'Annonces actives', value: '4' },
  ],
}

export default function ProductExperience() {
  const [active, setActive] = useState(productTabs[0].key)
  const current = productTabs.find((t) => t.key === active)

  return (
    <section className="py-24 md:py-32">
      <div className="container-nexus">
        <SectionHeading
          eyebrow="À l'intérieur"
          title="Une expérience pensée pour chaque usage."
          body="Quelques aperçus de ce que représente l'utilisation quotidienne de Nexus School — au-delà des fonctionnalités, une manière de travailler."
          align="center"
        />

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {productTabs.map((t) => {
              const Icon = tabIcons[t.key]
              const isActive = active === t.key
              return (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`inline-flex items-center gap-2 rounded-full px-4.5 py-2.5 text-[14px] font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-deep text-white shadow-card'
                      : 'bg-white text-ink-soft border border-ink/10 hover:border-ink/20'
                  }`}
                >
                  <Icon size={15} strokeWidth={2} />
                  {t.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink mb-4 text-balance">
                {current.heading}
              </h3>
              <p className="text-[16px] text-ink-muted leading-relaxed max-w-md">{current.body}</p>
            </motion.div>
          </AnimatePresence>

          <div className="relative rounded-xl2 bg-ink p-3 shadow-floating">
            <div className="rounded-xl bg-paper overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-ink/8">
                <span className="w-2.5 h-2.5 rounded-full bg-clay/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-teal/60" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="p-6 md:p-8"
                >
                  <div className="grid sm:grid-cols-3 gap-3">
                    {mockRows[active].map((row) => (
                      <div key={row.label} className="rounded-lg bg-white border border-ink/8 p-4">
                        <div className="text-[11.5px] text-ink-muted mb-1.5">{row.label}</div>
                        <div className="font-display font-semibold text-xl text-ink">{row.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 rounded-lg bg-white border border-ink/8 p-4">
                    <div className="flex items-end gap-1.5 h-20">
                      {[40, 55, 48, 70, 62, 80, 74, 90, 66, 58].map((h, idx) => (
                        <div
                          key={idx}
                          style={{ height: `${h}%` }}
                          className={`flex-1 rounded-sm ${idx % 3 === 0 ? 'bg-blue' : 'bg-blue-mist'}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
