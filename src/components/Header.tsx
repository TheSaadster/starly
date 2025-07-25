'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⭐</span>
            </div>
            <span className="text-2xl font-playfair font-bold text-slate-800">Starly</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-600 hover:text-yellow-600 transition-colors">Services</a>
            <a href="#portfolio" className="text-slate-600 hover:text-yellow-600 transition-colors">Portfolio</a>
            <a href="#testimonials" className="text-slate-600 hover:text-yellow-600 transition-colors">Testimonials</a>
            <a href="#contact" className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}