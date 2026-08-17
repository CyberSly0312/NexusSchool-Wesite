import { useSiteConfig } from '../context/SiteConfigContext'

export default function Logo({ light = false }) {
  const { config } = useSiteConfig()

  if (config.logo) {
    return <img src={config.logo} alt="Nexus School" className="h-8 w-auto object-contain" />
  }

  return (
    <span
      className={`grid place-items-center w-8 h-8 text-sm rounded-lg font-display font-semibold ${
        light ? 'bg-white text-ink' : 'bg-blue-deep text-white'
      }`}
    >
      N
    </span>
  )
}
