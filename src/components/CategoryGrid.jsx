import { motion } from "framer-motion"

const categories = [
  { id: "mens", title: "Men's Wear", items: ["Jeans", "Shirts", "T‑Shirts", "Suits", "Kurta"], image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop" },
  { id: "womens", title: "Women's Wear", items: ["Sarees", "Lehengas", "Dresses", "Tops", "Jeans"], image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZW58ZW58MHwwfHx8MTc2MzczODMwMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: "kids", title: "Children", items: ["Tees", "Shorts", "Frocks", "Ethnic"], image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop" },
  { id: "wedding", title: "Marriage Selection", items: ["Sherwani", "Suits", "Lehenga", "Gowns"], image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNZW58ZW58MHwwfHx8MTc2MzczODMwMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { id: "casual", title: "Casual Wear", items: ["Denim", "Tees", "Overshirts", "Joggers"], image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop" },
  { id: "shoes", title: "Shoes", items: ["Sneakers", "Loafers", "Heels", "Kids"], image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" },
  { id: "accessories", title: "Accessories", items: ["Socks", "Glasses", "Rings", "Bracelets"], image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=1200&auto=format&fit=crop" },
]

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Shop by Category</h2>
        <a href="#" className="text-sm text-indigo-600">View all</a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.a
            key={cat.id}
            href={`#${cat.id}`}
            className="group relative rounded-3xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <img src={cat.image} alt={cat.title} className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white text-xl font-semibold">{cat.title}</h3>
              <p className="text-white/80 text-sm">{cat.items.join(" • ")}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
