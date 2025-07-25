const services = [
  {
    icon: '🌐',
    title: 'Custom Websites',
    description: 'Bespoke web solutions tailored to your brand and business goals with stunning visual appeal.'
  },
  {
    icon: '🤖',
    title: 'AI Automation',
    description: 'Intelligent automation solutions that streamline your workflow and enhance user experience.'
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    description: 'Strategic search optimization to help your business shine brighter in search results.'
  },
  {
    icon: '✨',
    title: 'Branding',
    description: 'Complete brand identity packages that capture your stellar vision and market presence.'
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-4">
            Our <span className="text-gradient">Stellar</span> Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We craft digital experiences that shine brighter than the stars
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeInUp"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}