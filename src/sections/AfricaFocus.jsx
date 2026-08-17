import Reveal from '../components/Reveal'
import { africaPoints } from '../data/content'

export default function AfricaFocus() {
  return (
    <section className="py-24 md:py-32 bg-paper-dim">
      <div className="container-nexus grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <span className="eyebrow">Ancrage local</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-semibold text-3xl md:text-section text-ink mt-5 text-balance">
              Une technologie internationale.
              <br />
              Une compréhension locale.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-lg">
              Nexus School est construit pour les réalités concrètes des
              établissements francophones d'Afrique — pas adapté après coup pour
              elles.
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {africaPoints.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="rounded-xl2 bg-white border border-ink/8 p-6 h-full">
                <div className="font-display font-semibold text-[16px] text-blue-deep mb-2">{p.label}</div>
                <p className="text-[13.5px] text-ink-muted leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
