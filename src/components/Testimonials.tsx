const testimonials = [
  {
    quote: "Starly transformed our vision into a stunning digital reality. Their attention to detail is stellar!",
    name: "Sarah Chen",
    title: "CEO, TechStart"
  },
  {
    quote: "The team's creativity and technical expertise exceeded our expectations. Truly a stellar experience.",
    name: "Michael Rodriguez",
    title: "Founder, GrowthLab"
  },
  {
    quote: "Working with Starly was seamless. They delivered a website that perfectly captures our brand essence.",
    name: "Emily Watson",
    title: "Marketing Director, BrightFuture"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our stellar clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="text-yellow-400 text-3xl mb-4">💫</div>
              <blockquote className="text-slate-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{testimonial.name}</p>
                  <p className="text-slate-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}