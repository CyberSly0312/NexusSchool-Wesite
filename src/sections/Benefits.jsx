import * as Icons from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { benefits } from '../data/content'

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-paper-dim">
      <div className="container-nexus">
        <SectionHeading
          eyebrow="Ce que ça change"
          title="Au-delà des fonctionnalités, des résultats concrets."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((b, i) => {
            const Icon = Icons[b.icon]
            return (
              <Reveal key={b.title} delay={i * 0.07}>
                <div className="h-full rounded-xl2 bg-white p-6 border border-ink/8 hover:shadow-card transition-shadow duration-300">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-blue-mist text-blue-deep mb-5">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display font-semibold text-[16px] text-ink mb-2">{b.title}</h3>
                  <p className="text-[13.5px] text-ink-muted leading-relaxed">{b.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
