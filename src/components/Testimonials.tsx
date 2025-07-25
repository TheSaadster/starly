'use client'

import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Starly transformed our vision into a stunning digital reality. Their attention to detail is stellar!",
    name: "Sarah Chen",
    title: "CEO, TechStart",
    avatar: "SC",
    rating: 5,
    project: "E-commerce Platform"
  },
  {
    quote: "The team's creativity and technical expertise exceeded our expectations. Truly a stellar experience.",
    name: "Michael Rodriguez",
    title: "Founder, GrowthLab",
    avatar: "MR",
    rating: 5,
    project: "Brand Identity"
  },
  {
    quote: "Working with Starly was seamless. They delivered a website that perfectly captures our brand essence.",
    name: "Emily Watson",
    title: "Marketing Director, BrightFuture",
    avatar: "EW",
    rating: 5,
    project: "Corporate Website"
  },
  {
    quote: "Outstanding results! Our conversion rate increased by 300% after the website redesign.",
    name: "David Kim",
    title: "CTO, InnovateCorp",
    avatar: "DK",
    rating: 5,
    project: "Website Redesign"
  },
  {
    quote: "Professional, creative, and delivered exactly what we needed. Highly recommend Starly!",
    name: "Lisa Thompson",
    title: "Owner, CreativeStudio",
    avatar: "LT",
    rating: 5,
    project: "Portfolio Website"
  }
]

export default function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver(0.1)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-yellow-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200/20 dark:bg-yellow-800/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 dark:text-white mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our stellar clients
          </p>
        </motion.div>
        
        {/* Featured Testimonial */}
        <motion.div 
          className="text-center mb-16"
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-yellow-400 mb-4">💫</div>
            <blockquote className="text-2xl md:text-3xl font-light text-slate-700 dark:text-slate-300 mb-8 italic">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            <div className="flex items-center justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-yellow-400 text-2xl"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {testimonials[currentIndex].avatar}
              </div>
              <p className="font-semibold text-slate-800 dark:text-white text-lg">
                {testimonials[currentIndex].name}
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                {testimonials[currentIndex].title}
              </p>
              <p className="text-yellow-600 dark:text-yellow-400 text-sm mt-1">
                {testimonials[currentIndex].project}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className={`glass-card p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                index === currentIndex % 3 ? 'ring-2 ring-yellow-400' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="text-yellow-400 text-2xl mb-3">💫</div>
              <blockquote className="text-slate-700 dark:text-slate-300 mb-4 text-sm italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-slate-300 dark:bg-slate-600 hover:bg-yellow-200 dark:hover:bg-yellow-800'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}