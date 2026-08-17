import { Smartphone, Cloud, Puzzle } from 'lucide-react'
import Reveal from '../components/Reveal'

const items = [
  { icon: Smartphone, label: 'Accessible depuis tout appareil' },
  { icon: Cloud, label: 'Hébergé et maintenu pour vous' },
  { icon: Puzzle, label: 'Prêt pour de nouveaux usages' },
]

export default function CloudFuture() {
  return (
    <section className="py-24 md:py-32 bg-blue-deep relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-bright/20 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -left-16 w-96 h-96 rounded-full bg-amber/10 blur-3xl" aria-hidden="true" />

      <div className="container-nexus relative text-center">
        <Reveal>
          <span className="eyebrow text-amber">Évolutivité</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display font-semibold text-3xl md:text-section text-white mt-5 max-w-2xl mx-auto text-balance">
            Commencez simplement. Grandissez avec Nexus.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 text-lg text-white/70 max-w-lg mx-auto leading-relaxed">
            La plateforme évolue avec votre établissement — sans migration lourde,
            sans rupture, sans recommencer à zéro.
          </p>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={0.2 + i * 0.08}>
              <div className="rounded-xl2 bg-white/[0.06] border border-white/10 p-6">
                <span className="grid place-items-center w-11 h-11 rounded-lg bg-white/10 text-white mb-4 mx-auto">
                  <it.icon size={19} strokeWidth={1.8} />
                </span>
                <p className="text-[14px] text-white/85">{it.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
