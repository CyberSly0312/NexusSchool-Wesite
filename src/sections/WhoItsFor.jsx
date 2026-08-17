import * as Icons from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { audiences } from '../data/content'

export default function WhoItsFor() {
  return (
    <section id="solutions" className="py-24 md:py-32">
      <div className="container-nexus">
        <SectionHeading
          eyebrow="Pour qui ?"
          title="Un espace pensé pour chaque acteur de l'établissement."
          body="Chaque profil retrouve exactement ce dont il a besoin — ni plus, ni moins — dans une expérience cohérente."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {audiences.map((a, i) => {
            const Icon = Icons[a.icon]
            return (
              <Reveal key={a.role} delay={i * 0.07} className={i === 0 ? 'lg:col-span-2 md:col-span-2' : ''}>
                <div className="group h-full rounded-xl2 bg-blue-mist/40 border border-blue-mist p-6 hover:bg-blue-deep hover:border-blue-deep transition-all duration-400 cursor-default">
                  <span className="grid place-items-center w-11 h-11 rounded-lg bg-white text-blue-deep mb-6 group-hover:bg-white/15 group-hover:text-white transition-colors duration-400">
                    <Icon size={19} strokeWidth={1.8} />
                  </span>
                  <div className="eyebrow mb-2 text-blue group-hover:text-amber transition-colors duration-400">
                    {a.role}
                  </div>
                  <h3 className="font-display font-semibold text-[16.5px] text-ink group-hover:text-white transition-colors duration-400 mb-2 leading-snug">
                    {a.line}
                  </h3>
                  <p className="text-[13.5px] text-ink-muted group-hover:text-white/70 transition-colors duration-400 leading-relaxed">
                    {a.detail}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
