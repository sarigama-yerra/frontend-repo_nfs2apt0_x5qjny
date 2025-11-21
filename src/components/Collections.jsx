import { motion } from "framer-motion"

const blocks = [
  {
    id: "mens",
    title: "Men's Essentials",
    desc: "Jeans, shirts, tees and more",
    image: "https://images.unsplash.com/photo-1490111718993-d98654ce6cf7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "womens",
    title: "Women's Edit",
    desc: "Dresses, sarees and daily tops",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "wedding",
    title: "Wedding Ready",
    desc: "Sherwanis, suits, lehengas, gowns",
    image: "https://images.unsplash.com/photo-1684244177286-8625c54bce6d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWRkaW5nJTIwUmVhZHl8ZW58MHwwfHx8MTc2MzczODMwMnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
  {
    id: "shoes",
    title: "Stylish Shoes",
    desc: "Sneakers, loafers, heels, kids",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "accessories",
    title: "Accessories",
    desc: "Socks, glasses, rings, bracelets",
    image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBY2Nlc3Nvcmllc3xlbnwwfDB8fHwxNzYzNzM4MzAzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80",
  },
]

export default function Collections() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blocks.map((b, i) => (
          <motion.div
            key={b.id}
            className="rounded-3xl overflow-hidden relative group"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
          >
            <img src={b.image} alt={b.title} className="h-72 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-2xl font-semibold">{b.title}</h3>
              <p className="text-white/80">{b.desc}</p>
              <a href={`#${b.id}`} className="inline-block mt-3 text-sm px-3 py-1 rounded-full bg-white/90 text-black hover:bg-white">Explore</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
