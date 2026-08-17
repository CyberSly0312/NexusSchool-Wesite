import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav } from '../data/content'
import Button from './Button'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-nexus">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-5 transition-all duration-300 ${
            scrolled ? 'glass shadow-card py-2.5' : 'py-1'
          }`}
        >
          <a href="#accueil" className="flex items-center gap-2.5 shrink-0">
            <Logo />
            <span className="font-display font-semibold text-[17px] tracking-tight text-ink">
              Nexus School
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[14.5px] font-medium text-ink-soft hover:text-blue-deep transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="primary" className="!py-2.5 !px-5 !text-[14px]">
              Demander une démo
            </Button>
          </div>

          <button
            aria-label="Ouvrir le menu"
            className="md:hidden p-2 -mr-2 text-ink"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 h-full w-[82%] max-w-sm bg-paper p-6 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display font-semibold text-lg">Nexus School</span>
                <button aria-label="Fermer le menu" onClick={() => setOpen(false)} className="p-2 -mr-2">
                  <X size={22} />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-[17px] font-medium text-ink py-3.5 border-b border-ink/8"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-8">
                <Button href="#contact" onClick={() => setOpen(false)} className="w-full">
                  Demander une démo
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
