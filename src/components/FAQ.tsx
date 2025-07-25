'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Project timelines vary depending on complexity. A simple landing page takes 2-3 weeks, while complex e-commerce sites or web applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive maintenance packages including security updates, content updates, performance optimization, and 24/7 technical support. Our team ensures your website stays secure and up-to-date."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely! All our websites are built with SEO best practices. We also offer comprehensive digital marketing services including content strategy, social media management, PPC advertising, and conversion optimization."
  },
  {
    question: "What's included in your web development service?",
    answer: "Our service includes custom design, responsive development, SEO optimization, basic security setup, content management system, analytics integration, and initial training. We also provide post-launch support."
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes! We work with clients worldwide. Our remote collaboration process includes regular video calls, project management tools, and real-time progress updates to ensure seamless communication throughout the project."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, credit cards, PayPal, and cryptocurrency. We typically work with a 50% upfront payment and 50% upon project completion, with milestone payments for larger projects."
  }
]

export default function FAQ() {
  const [ref, isVisible] = useIntersectionObserver(0.2)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 dark:text-white mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Everything you need to know about working with Starly
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <motion.button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-yellow-50 dark:hover:bg-slate-800/50 transition-colors duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ x: 5 }}
              >
                <span className="font-semibold text-slate-800 dark:text-white pr-4">
                  {faq.question}
                </span>
                <motion.span
                  className="text-yellow-600 dark:text-yellow-400 text-2xl flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </motion.button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Still have questions? We'd love to help!
          </p>
          <motion.button
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Our Team 💬
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
