import * as Icons from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { securityPoints } from '../data/content'

export default function Security() {
  return (
    <section id="securite" className="py-24 md:py-32">
      <div className="container-nexus grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeading
            eyebrow="Confiance"
            title="Pensé pour protéger les informations qui comptent."
            body="La sécurité n'est pas une option ajoutée plus tard — c'est un principe de conception, présent à chaque niveau de la plateforme."
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {securityPoints.map((s, i) => {
            const Icon = Icons[s.icon]
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="rounded-xl2 border border-ink/8 bg-white p-6 h-full">
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-teal-soft text-teal mb-5">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display font-semibold text-[16px] text-ink mb-2">{s.title}</h3>
                  <p className="text-[13.5px] text-ink-muted leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
