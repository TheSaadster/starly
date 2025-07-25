export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⭐</span>
            </div>
            <span className="text-2xl font-playfair font-bold">Starly</span>
          </div>
          
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
          <p>&copy; 2024 Starly. All rights reserved. Building stellar digital experiences.</p>
        </div>
      </div>
    </footer>
  )
}