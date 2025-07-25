'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useCounter } from '../hooks/useCounter'

const stats = [
  { number: 500, suffix: '+', label: 'Projects Completed', icon: '🚀' },
  { number: 150, suffix: '+', label: 'Happy Clients', icon: '😊' },
  { number: 5, suffix: '', label: 'Years Experience', icon: '⭐' },
  { number: 24, suffix: '/7', label: 'Support Available', icon: '🛟' },
]

export default function StatsCounter() {
  const [ref, isVisible] = useIntersectionObserver(0.5)

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} isVisible={isVisible} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, isVisible, delay }: { stat: any, isVisible: boolean, delay: number }) {
  const count = useCounter(isVisible ? stat.number : 0, 2000)

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      <div className="text-4xl mb-4">{stat.icon}</div>
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-slate-600 dark:text-slate-300 font-semibold">{stat.label}</div>
    </motion.div>
  )
}
