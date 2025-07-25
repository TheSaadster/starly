'use client'

import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    setEmail('')
    alert('Thank you! We\'ll be in touch soon.')
  }

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
            Ready to Build Something <span className="text-gradient">Stellar?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Let's turn your vision into a brilliant digital reality. Get your free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-yellow-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started ⭐
              </button>
            </form>
          </div>
          
          <div className="flex justify-center items-center space-x-4 text-slate-600">
            <span>📧 hello@starly.com</span>
            <span>|</span>
            <span>📞 (555) 123-STAR</span>
          </div>
        </div>
      </div>
    </section>
  )
}