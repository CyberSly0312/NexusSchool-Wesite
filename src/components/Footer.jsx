import { footerLinks } from '../data/content'
import { socialIconMap } from '../data/socialIcons'
import { useSiteConfig } from '../context/SiteConfigContext'
import Logo from './Logo'

export default function Footer() {
  const { config } = useSiteConfig()
  const links = (config.socialLinks || []).filter((l) => l.url)

  return (
    <footer id="apropos" className="bg-ink text-white pt-20 pb-10">
      <div className="container-nexus">
        <div className="grid md:grid-cols-[1.3fr_0.9fr_0.9fr_0.9fr] gap-12 pb-14 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <Logo light />
              <span className="font-display font-semibold text-[17px]">Nexus School</span>
            </div>
            <p className="text-white/55 text-[14.5px] max-w-xs leading-relaxed">
              La technologie au service d'une meilleure gestion scolaire.
            </p>
            {links.length > 0 && (
              <div className="flex items-center gap-3 mt-6">
                {links.map((l) => {
                  const Icon = socialIconMap[l.icon] || socialIconMap.Globe
                  return (
                    <a
                      key={l.id}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={l.label}
                      className="grid place-items-center w-9 h-9 rounded-full bg-white/8 hover:bg-white/15 transition-colors"
                    >
                      <Icon size={16} strokeWidth={1.8} />
                    </a>
                  )
                })}
              </div>
            )}
          </div>

          <FooterColumn title="Produit" links={footerLinks.produit} />
          <FooterColumn title="Entreprise" links={footerLinks.entreprise} />
          <FooterColumn title="Ressources" links={footerLinks.ressources} />
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-[13px]">
          <span>© 2026 Nexus School. Tous droits réservés.</span>
          <span>Fait avec soin pour l'éducation francophone en Afrique.</span>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-display text-[13px] tracking-wide uppercase text-white/50 mb-5">{title}</h4>
      <ul className="flex flex-col gap-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[14.5px] text-white/75 hover:text-white transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
