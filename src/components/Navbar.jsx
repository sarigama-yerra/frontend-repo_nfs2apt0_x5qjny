import { Menu, ShoppingBag, Search, User } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-black/5">
            <Menu className="w-5 h-5" />
          </button>
          <a href="/" className="font-extrabold tracking-tight text-xl">
            <span className="bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">SHIZ</span>
          </a>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#mens" className="hover:text-black">Men</a>
          <a href="#womens" className="hover:text-black">Women</a>
          <a href="#kids" className="hover:text-black">Children</a>
          <a href="#wedding" className="hover:text-black">Marriage</a>
          <a href="#casual" className="hover:text-black">Casual</a>
          <a href="#shoes" className="hover:text-black">Shoes</a>
          <a href="#accessories" className="hover:text-black">Accessories</a>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-black/5">
            <Search className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-black/5">
            <User className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-black/5 relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] bg-black text-white rounded-full grid place-items-center">0</span>
          </button>
        </div>
      </div>
    </motion.header>
  )
}
