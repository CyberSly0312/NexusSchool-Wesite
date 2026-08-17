import * as Icons from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { modules } from '../data/content'

export default function Solution() {
  return (
    <section id="plateforme" className="py-24 md:py-32 bg-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] grain" aria-hidden="true" />
      <div className="container-nexus relative">
        <SectionHeading
          eyebrow="La plateforme"
          title="Une seule plateforme. Une vision plus claire."
          body="Nexus School réunit les grands domaines de la vie de l'établissement dans un espace cohérent, pensé pour se parler naturellement."
          light
        />

        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {modules.map((m, i) => {
            const Icon = Icons[m.icon]
            return (
              <Reveal key={m.key} delay={i * 0.05}>
                <div className="group rounded-xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full">
                  <span className="grid place-items-center w-10 h-10 rounded-lg bg-white/10 text-white mb-6 group-hover:bg-blue-bright/20 group-hover:text-blue-bright transition-colors">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <h3 className="font-display font-medium text-[16px] text-white">{m.label}</h3>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
