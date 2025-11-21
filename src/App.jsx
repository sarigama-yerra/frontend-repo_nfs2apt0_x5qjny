import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import Collections from './components/Collections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <CategoryGrid />

      {/* Anchored sections for smooth navigation */}
      <div id="mens" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Men's Wear</h2>
        <p className="text-slate-600">Jeans, shirts, T‑shirts, suits, kurtas and more curated for every mood.</p>
      </div>
      <div id="womens" className="max-w-7xl mx-auto px-6 py-12 bg-slate-50 rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Women's Wear</h2>
        <p className="text-slate-600">Sarees, lehengas, dresses, tops and denim for all occasions.</p>
      </div>
      <div id="kids" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Children</h2>
        <p className="text-slate-600">Comfort-first styles for boys and girls — tees, shorts, frocks and ethnic.</p>
      </div>
      <div id="wedding" className="max-w-7xl mx-auto px-6 py-12 bg-slate-50 rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Marriage Selection</h2>
        <p className="text-slate-600">Sherwanis, suits, lehengas, gowns — everything wedding ready.</p>
      </div>
      <div id="casual" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Casual Wear</h2>
        <p className="text-slate-600">Everyday fits — denim, tees, overshirts and joggers.</p>
      </div>
      <div id="shoes" className="max-w-7xl mx-auto px-6 py-12 bg-slate-50 rounded-3xl">
        <h2 className="text-2xl font-bold mb-4">Shoes</h2>
        <p className="text-slate-600">Sneakers, loafers, heels and more for men, women and kids.</p>
      </div>
      <div id="accessories" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-4">Accessories</h2>
        <p className="text-slate-600">Socks, glasses, rings, bracelets and more to complete your look.</p>
      </div>

      <Collections />
      <Footer />
    </div>
  )
}

export default App
