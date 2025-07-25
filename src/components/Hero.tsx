export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
        <div className="star-particle"></div>
        <div className="star-particle"></div>
        <div className="star-particle"></div>
        <div className="star-particle"></div>
        <div className="star-particle"></div>
        <div className="star-particle"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-slate-800 mb-6 animate-fadeInUp">
          Build Brighter
          <span className="block text-gradient">Futures</span>
          on the Web
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fadeInUp" style={{animationDelay: '0.2s'}}>
          Custom websites and digital solutions with a stellar edge
        </p>
        
        <button className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
          Get a Free Consultation ✨
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}