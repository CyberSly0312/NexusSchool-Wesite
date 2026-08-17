import { motion } from 'framer-motion'

export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className = '',
  once = true,
  amount = 0.3,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
