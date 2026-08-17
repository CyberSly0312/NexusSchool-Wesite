// Les couleurs de marque (blue.deep/DEFAULT/bright, amber, teal, clay) sont
// pilotées par des variables CSS (--color-*) définies dans src/index.css et
// modifiables depuis la page /admin. `withOpacity` permet de garder le
// support des modificateurs d'opacité Tailwind (ex: bg-blue-bright/20) tout
// en lisant la couleur depuis la variable CSS courante.
function withOpacity(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) return `rgb(var(${variable}))`
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0F1E',
          soft: '#1B2438',
          muted: '#4A5468',
        },
        paper: {
          DEFAULT: '#F7F7F5',
          dim: '#EFEFEC',
        },
        blue: {
          deep: withOpacity('--color-blue-deep'),
          DEFAULT: withOpacity('--color-blue'),
          bright: withOpacity('--color-blue-bright'),
          mist: '#EAF0FE',
        },
        amber: {
          DEFAULT: withOpacity('--color-amber'),
          soft: '#F6E4C3',
        },
        teal: {
          DEFAULT: withOpacity('--color-teal'),
          soft: '#DCF1EC',
        },
        clay: {
          DEFAULT: withOpacity('--color-clay'),
          soft: '#F5DEDA',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        hero: ['4.5rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'hero-md': ['3rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        section: ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card: '0 1px 2px rgba(10,15,30,0.04), 0 12px 32px -12px rgba(10,15,30,0.12)',
        floating: '0 20px 60px -15px rgba(15,42,92,0.25)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-slower': 'float 9s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}
