import { ArrowRight } from 'lucide-react'

export default function Button({
  children,
  href = '#',
  variant = 'primary',
  icon = true,
  className = '',
  onClick,
  type = 'button',
}) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-blue focus-visible:outline-offset-2'

  const variants = {
    primary:
      'bg-blue-deep text-white hover:bg-blue shadow-[0_1px_2px_rgba(15,42,92,0.1)] hover:shadow-floating hover:-translate-y-0.5',
    secondary:
      'bg-white text-ink border border-ink/10 hover:border-ink/20 hover:-translate-y-0.5',
    ghost: 'text-ink hover:text-blue',
  }

  const content = (
    <>
      {children}
      {icon && (
        <ArrowRight
          size={17}
          strokeWidth={2.25}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  )

  if (onClick && type !== 'submit') {
    return (
      <button type={type} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </button>
    )
  }

  if (type === 'submit') {
    return (
      <button type="submit" className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </button>
    )
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </a>
  )
}
