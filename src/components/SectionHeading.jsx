import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = 'left',
  light = false,
}) {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-5 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${light ? 'text-amber' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`font-display font-semibold text-3xl md:text-section text-balance ${
            light ? 'text-white' : 'text-ink'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.15}>
          <p className={`text-base md:text-lg leading-relaxed ${light ? 'text-white/70' : 'text-ink-muted'}`}>
            {body}
          </p>
        </Reveal>
      )}
    </div>
  )
}
