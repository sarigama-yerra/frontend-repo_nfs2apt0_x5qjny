import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-fuchsia-400/40 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-400/40 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-xs">
            <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
            Now Launching — The SHIZ Collection
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Style that speaks before you do
          </h1>
          <p className="text-slate-600 text-lg">
            Discover premium wear for men, women, and kids. From wedding edits to everyday casuals — plus shoes and accessories to finish the look.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#mens" className="px-5 py-3 rounded-full bg-black text-white font-medium hover:opacity-90">Shop Men</a>
            <a href="#womens" className="px-5 py-3 rounded-full border border-black/10 hover:bg-black/5 font-medium">Shop Women</a>
            <a href="#kids" className="px-5 py-3 rounded-full border border-black/10 hover:bg-black/5 font-medium">Shop Kids</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1520975922215-c4d118ce7a8e?q=80&w=1300&auto=format&fit=crop"
              alt="Shiz Hero"
              className="w-full h-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4"
          >
            <p className="text-sm font-medium">SHIZ — Crafted for every moment</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
