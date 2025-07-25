'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useState } from 'react'

const services = [
  {
    icon: '🌐',
    title: 'Custom Websites',
    description: 'Bespoke web solutions tailored to your brand and business goals with stunning visual appeal.',
    features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
    color: 'from-blue-400 to-blue-600'
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Intelligent automation solutions that streamline your workflow and enhance user experience.',
    features: ['Chatbots', 'Process Automation', 'Data Analysis', 'Smart Workflows'],
    color: 'from-purple-400 to-purple-600'
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    description: 'Strategic search optimization to help your business shine brighter in search results.',
    features: ['Keyword Research', 'On-page SEO', 'Link Building', 'Analytics'],
    color: 'from-green-400 to-green-600'
  },
  {
    icon: '✨',
    title: 'Branding',
    description: 'Complete brand identity packages that capture your stellar vision and market presence.',
    features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials', 'Brand Strategy'],
    color: 'from-pink-400 to-pink-600'
  }
]

export default function Services() {
  const [ref, isVisible] = useIntersectionObserver(0.1)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="services" ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 dark:text-white mb-4">
            Our <span className="text-gradient">Stellar</span> Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We craft digital experiences that shine brighter than the stars
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                initial={{ scale: 0 }}
                animate={hoveredCard === index ? { scale: 1 } : { scale: 0 }}
              />
              
              <motion.div 
                className="text-4xl mb-4 relative z-10"
                animate={hoveredCard === index ? { scale: 1.2, rotate: 360 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 relative z-10">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 relative z-10">
                {service.description}
              </p>
              
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, height: 0 }}
                animate={hoveredCard === index ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                                <ul className="text-sm text-slate-500 dark:text-slate-400 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}