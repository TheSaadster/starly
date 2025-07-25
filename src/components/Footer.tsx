'use client'

import { motion } from 'framer-motion'

const footerLinks = {
  Services: ['Web Development', 'E-commerce', 'Branding', 'SEO Services', 'Maintenance'],
  Company: ['About Us', 'Our Process', 'Careers', 'Blog', 'Contact'],
  Resources: ['Portfolio', 'Case Studies', 'Testimonials', 'FAQ', 'Pricing'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
}

const socialLinks = [
  { name: 'Twitter', icon: '🐦', href: '#' },
  { name: 'LinkedIn', icon: '💼', href: '#' },
  { name: 'GitHub', icon: '👨‍💻', href: '#' },
  { name: 'Dribbble', icon: '🎨', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center relative">
                <span className="text-white font-bold text-xl">⭐</span>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg animate-pulse opacity-20"></div>
              </div>
              <span className="text-3xl font-playfair font-bold">Starly</span>
            </motion.div>
            
            <motion.p 
              className="text-slate-300 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're passionate about creating stellar digital experiences that help businesses shine brighter 
              in the digital universe. Let's build something amazing together.
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition-all duration-300 group"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.name}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gradient">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <motion.a
                      href="#"
                      className="text-slate-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div 
          className="mt-16 pt-8 border-t border-slate-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-slate-400">Get the latest web development trends and Starly updates.</p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 lg:w-80"
              />
              <motion.button
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe ✨
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>&copy; 2024 Starly. All rights reserved. Building stellar digital experiences.</p>
          <div className="flex items-center space-x-4">
            <span>Made with ❤️ and lots of ☕</span>
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs">All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
