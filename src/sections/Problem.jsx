import * as Icons from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { problems } from '../data/content'

export default function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-nexus">
        <SectionHeading
          eyebrow="Le constat"
          title="La gestion d'une école ne devrait pas être compliquée."
          body="La plupart des établissements ne manquent ni de rigueur ni d'ambition — ils manquent d'un outil qui rassemble tout ce qu'ils font déjà."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((p, i) => {
            const Icon = Icons[p.icon]
            return (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-xl2 border border-ink/8 bg-white p-6 hover:border-ink/15 hover:-translate-y-1 transition-all duration-300">
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-paper-dim text-ink-soft mb-5">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display font-semibold text-[17px] text-ink mb-2">{p.title}</h3>
                  <p className="text-[14.5px] text-ink-muted leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
