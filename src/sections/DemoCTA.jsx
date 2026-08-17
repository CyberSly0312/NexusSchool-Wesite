import Reveal from '../components/Reveal'
import Button from '../components/Button'

export default function DemoCTA() {
  return (
    <section className="py-20 md:py-24">
      <div className="container-nexus">
        <Reveal>
          <div className="rounded-xl2 bg-paper-dim border border-ink/8 px-8 py-14 md:py-16 text-center">
            <h2 className="font-display font-semibold text-2xl md:text-4xl text-ink text-balance max-w-2xl mx-auto">
              Découvrez Nexus School en action.
            </h2>
            <p className="mt-5 text-[16px] text-ink-muted max-w-md mx-auto leading-relaxed">
              Chaque établissement a ses propres besoins. Voyons ensemble comment
              Nexus School peut s'adapter à votre organisation.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="#contact" variant="primary">
                Demander une démonstration
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
