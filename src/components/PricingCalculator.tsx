'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const projectTypes = [
    { name: 'Landing Page', basePrice: 2500, multiplier: 1 },
    { name: 'Business Website', basePrice: 5000, multiplier: 1.5 },
    { name: 'E-commerce', basePrice: 8000, multiplier: 2 },
    { name: 'Web Application', basePrice: 12000, multiplier: 3 },
]

const features = [
    { name: 'Responsive Design', price: 0, default: true },
    { name: 'SEO Optimization', price: 500 },
    { name: 'CMS Integration', price: 1000 },
    { name: 'Payment Gateway', price: 1500 },
    { name: 'Custom Animations', price: 800 },
    { name: 'Multi-language', price: 1200 },
    { name: '24/7 Support', price: 600 },
]

const timelines = [
    { name: '2-3 weeks', multiplier: 1.3 },
    { name: '4-6 weeks', multiplier: 1 },
    { name: '2-3 months', multiplier: 0.9 },
]

export default function PricingCalculator() {
    const [ref, isVisible] = useIntersectionObserver(0.3)
    const [selectedType, setSelectedType] = useState(projectTypes[0])
    const [selectedFeatures, setSelectedFeatures] = useState([features[0]])
    const [selectedTimeline, setSelectedTimeline] = useState(timelines[1])

    const calculatePrice = () => {
        const basePrice = selectedType.basePrice * selectedType.multiplier
        const featuresPrice = selectedFeatures.reduce((sum, feature) => sum + feature.price, 0)
        const timelinePrice = (basePrice + featuresPrice) * selectedTimeline.multiplier
        return Math.round(timelinePrice)
    }

    const toggleFeature = (feature: any) => {
        if (feature.default) return

        setSelectedFeatures(prev =>
            prev.includes(feature)
                ? prev.filter(f => f !== feature)
                : [...prev, feature]
        )
    }

    return (
        <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-900 dark:to-purple-900/20">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 dark:text-white mb-4">
                        Project <span className="text-gradient">Price Calculator</span>
                    </h2>
                    <p className="text-xl text-slate-600 dark:text-slate-300">
                        Get an instant estimate for your dream project
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Calculator Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Project Type */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                                Project Type
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                {projectTypes.map((type) => (
                                    <motion.button
                                        key={type.name}
                                        onClick={() => setSelectedType(type)}
                                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${selectedType === type
                                            ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                                            : 'border-slate-200 dark:border-slate-700 hover:border-yellow-200 dark:hover:border-yellow-800'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="text-sm font-semibold">{type.name}</div>
                                        <div className="text-xs text-slate-500 dark:text-slate-400">
                                            From ${type.basePrice.toLocaleString()}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                                Additional Features
                            </h3>
                            <div className="space-y-2">
                                {features.map((feature) => (
                                    <motion.label
                                        key={feature.name}
                                        className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-all duration-300 ${selectedFeatures.includes(feature)
                                            ? 'bg-yellow-50 dark:bg-yellow-900/20'
                                            : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                                            } ${feature.default ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        whileHover={!feature.default ? { x: 5 } : {}}
                                    >
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={selectedFeatures.includes(feature)}
                                                onChange={() => toggleFeature(feature)}
                                                disabled={feature.default}
                                                className="mr-3 text-yellow-400 rounded focus:ring-yellow-400"
                                            />
                                            <span className="text-slate-700 dark:text-slate-300">
                                                {feature.name}
                                                {feature.default && <span className="text-green-600 text-xs ml-2">(Included)</span>}
                                            </span>
                                        </div>
                                        <span className="text-slate-500 dark:text-slate-400 text-sm">
                                            {feature.price > 0 ? `+${feature.price}` : 'Free'}
                                        </span>
                                    </motion.label>
                                ))}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                                Timeline
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                {timelines.map((timeline) => (
                                    <motion.button
                                        key={timeline.name}
                                        onClick={() => setSelectedTimeline(timeline)}
                                        className={`p-3 rounded-lg border-2 transition-all duration-300 text-sm ${selectedTimeline === timeline
                                            ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400'
                                            : 'border-slate-200 dark:border-slate-700 hover:border-yellow-200 dark:hover:border-yellow-800'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {timeline.name}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Price Display */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:sticky lg:top-8"
                    >
                        <div className="glass-card p-8 rounded-2xl text-center">
                            <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-6">
                                Project Estimate
                            </h3>

                            <motion.div
                                key={calculatePrice()}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="mb-8"
                            >
                                <div className="text-5xl font-bold text-gradient mb-2">
                                    ${calculatePrice().toLocaleString()}
                                </div>
                                <div className="text-slate-500 dark:text-slate-400">
                                    Estimated project cost
                                </div>
                            </motion.div>

                            <div className="space-y-3 mb-8 text-left">
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Base Price:</span>
                                    <span className="font-semibold">${selectedType.basePrice.toLocaleString()}</span>
                                </div>
                                {selectedFeatures.filter(f => f.price > 0).map((feature) => (
                                    <div key={feature.name} className="flex justify-between">
                                        <span className="text-slate-600 dark:text-slate-400">{feature.name}:</span>
                                        <span className="font-semibold">+${feature.price}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between">
                                    <span className="text-slate-600 dark:text-slate-400">Timeline Adjustment:</span>
                                    <span className="font-semibold">
                                        {selectedTimeline.multiplier > 1 ? '+' : selectedTimeline.multiplier < 1 ? '-' : ''}
                                        {Math.abs((selectedTimeline.multiplier - 1) * 100).toFixed(0)}%
                                    </span>
                                </div>
                            </div>


                            <motion.button
                                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Get Detailed Quote ✨
                            </motion.button>

                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
                                * Final pricing may vary based on specific requirements
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}