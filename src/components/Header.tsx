'use client'

import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center relative">
              <span className="text-white font-bold text-lg">⭐</span>
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg animate-ping opacity-20"></div>
            </div>
            <span className="text-2xl font-playfair font-bold text-slate-800 dark:text-white">Starly</span>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#services" 
              className="text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Services
            </motion.a>
            <motion.a 
              href="#portfolio" 
              className="text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Portfolio
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="text-slate-600 dark:text-slate-300 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              whileHover={{ y: -2 }}
            >
              Testimonials
            </motion.a>
            
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </motion.button>
            
            <motion.a 
              href="#contact" 
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(247, 201, 72, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.a>
          </div>

          <motion.button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-slate-800 dark:bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-800 dark:bg-white mt-1 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-slate-800 dark:bg-white mt-1 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </motion.button>
        </div>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 py-4 border-t border-slate-200 dark:border-slate-700"
          >
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-slate-600 dark:text-slate-300">Services</a>
              <a href="#portfolio" className="text-slate-600 dark:text-slate-300">Portfolio</a>
              <a href="#testimonials" className="text-slate-600 dark:text-slate-300">Testimonials</a>
              <button onClick={toggleTheme} className="text-left text-slate-600 dark:text-slate-300">
                {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
              </button>
              <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full text-center">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}