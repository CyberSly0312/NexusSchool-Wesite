import { motion } from 'framer-motion'
import { CalendarCheck, Wallet, Bell, TrendingUp } from 'lucide-react'
import CountUp from './CountUp'
import { heroStats } from '../data/content'

// Toutes les valeurs affichées ici sont fictives (données de démonstration).
const bars = [38, 52, 46, 64, 58, 74, 69, 82]

export default function HeroMock() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 aspect-[10/11] select-none">
      {/* connective lines converging to the center — represents centralization */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 500 550"
        fill="none"
      >
        <path d="M60 120 C 180 160, 220 220, 250 275" stroke="#2A5CDB" strokeWidth="1.2" strokeDasharray="3 5" />
        <path d="M460 90 C 340 150, 280 210, 250 275" stroke="#2A5CDB" strokeWidth="1.2" strokeDasharray="3 5" />
        <path d="M50 430 C 160 380, 210 330, 250 275" stroke="#2A5CDB" strokeWidth="1.2" strokeDasharray="3 5" />
        <path d="M450 470 C 340 410, 290 340, 250 275" stroke="#2A5CDB" strokeWidth="1.2" strokeDasharray="3 5" />
      </svg>

      {/* central pulsing node */}
      <div className="absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2">
        <div className="relative w-4 h-4">
          <div className="absolute inset-0 rounded-full bg-blue-bright animate-pulse-soft" />
          <div className="absolute -inset-3 rounded-full border border-blue-bright/30" />
        </div>
      </div>

      {/* main overview card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] glass rounded-xl2 shadow-floating p-5 z-10"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="eyebrow text-blue-deep">Vue d'ensemble</span>
          <span className="flex items-center gap-1 text-[11px] font-mono text-teal">
            <TrendingUp size={13} /> en direct
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {heroStats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-semibold text-2xl text-ink">
                <CountUp value={s.value} suffix={s.suffix} decimals={s.suffix === '%' ? 1 : 0} />
              </div>
              <div className="text-[11.5px] text-ink-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 h-16">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.05, ease: 'easeOut' }}
              className={`flex-1 rounded-sm ${i === bars.length - 1 ? 'bg-amber' : 'bg-blue-mist'}`}
            />
          ))}
        </div>
      </motion.div>

      {/* floating card — présences */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute left-0 top-[10%] w-[190px] glass rounded-xl shadow-card p-3.5 animate-float-slow z-20"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-teal-soft text-teal shrink-0">
            <CalendarCheck size={16} />
          </span>
          <div>
            <div className="text-[11px] text-ink-muted leading-tight">Présence · aujourd'hui</div>
            <div className="font-display font-semibold text-sm text-ink">94,6 %</div>
          </div>
        </div>
      </motion.div>

      {/* floating card — finances */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="absolute right-0 top-[2%] w-[178px] glass rounded-xl shadow-card p-3.5 animate-float-slower z-20"
      >
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-amber-soft text-amber shrink-0">
            <Wallet size={16} />
          </span>
          <div>
            <div className="text-[11px] text-ink-muted leading-tight">Encaissements</div>
            <div className="font-display font-semibold text-sm text-ink">+12,4 %</div>
          </div>
        </div>
      </motion.div>

      {/* floating notification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute right-2 bottom-[6%] w-[210px] glass rounded-xl shadow-card p-3.5 animate-float-slow z-20"
      >
        <div className="flex items-start gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-lg bg-blue-mist text-blue shrink-0">
            <Bell size={15} />
          </span>
          <div>
            <div className="font-medium text-[12.5px] text-ink leading-tight">Bulletins générés</div>
            <div className="text-[11px] text-ink-muted mt-0.5">Terminale C · Trimestre 2</div>
          </div>
        </div>
      </motion.div>

      {/* small floating pill */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.95 }}
        className="absolute left-3 bottom-[16%] glass rounded-full shadow-card px-3.5 py-2 animate-float-slower z-20 flex items-center gap-1.5"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-teal" />
        <span className="text-[11.5px] font-medium text-ink">42 classes actives</span>
      </motion.div>
    </div>
  )
}
