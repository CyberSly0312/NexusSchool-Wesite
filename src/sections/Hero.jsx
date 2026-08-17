import { motion } from 'framer-motion'
import { ShieldCheck, Globe2 } from 'lucide-react'
import Button from '../components/Button'
import HeroMock from '../components/HeroMock'

export default function Hero() {
  return (
    <section id="accueil" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-hero-radial">
      <div className="container-nexus grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3.5 py-1.5 mb-7"
          >
            <Globe2 size={14} className="text-blue" />
            <span className="text-[13px] font-medium text-ink-soft">Pensé pour l'Afrique francophone</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-semibold text-4xl sm:text-hero-md md:text-hero text-ink text-balance"
          >
            La gestion scolaire,
            <br />
            <span className="text-blue-deep">réinventée</span> pour l'Afrique.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-7 text-lg text-ink-muted max-w-xl leading-relaxed"
          >
            Une plateforme unique pour piloter votre établissement, connecter la
            direction, les enseignants, les élèves et les parents — et gagner enfin
            en clarté sur ce qui compte vraiment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-9 flex flex-col sm:flex-row gap-3.5"
          >
            <Button href="#contact" variant="primary">
              Demander une démonstration
            </Button>
            <Button href="#plateforme" variant="secondary" icon={false}>
              Découvrir la plateforme
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex items-center gap-2 text-[13px] text-ink-muted"
          >
            <ShieldCheck size={15} className="text-teal" />
            Sécurité et confidentialité pensées dès la conception
          </motion.div>
        </div>

        <HeroMock />
      </div>
    </section>
  )
}
