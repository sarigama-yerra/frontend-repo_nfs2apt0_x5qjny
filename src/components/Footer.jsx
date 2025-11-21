export default function Footer() {
  return (
    <footer className="border-t border-black/5 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8 text-sm text-slate-600">
        <div>
          <p className="font-extrabold text-lg">SHIZ</p>
          <p className="mt-2">Clothing for every story — men, women, kids.</p>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Shop</p>
          <ul className="space-y-2 mt-3">
            <li><a href="#mens" className="hover:text-black">Men</a></li>
            <li><a href="#womens" className="hover:text-black">Women</a></li>
            <li><a href="#kids" className="hover:text-black">Children</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Edits</p>
          <ul className="space-y-2 mt-3">
            <li><a href="#wedding" className="hover:text-black">Marriage</a></li>
            <li><a href="#casual" className="hover:text-black">Casual</a></li>
            <li><a href="#shoes" className="hover:text-black">Shoes</a></li>
            <li><a href="#accessories" className="hover:text-black">Accessories</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-slate-800">Support</p>
          <ul className="space-y-2 mt-3">
            <li><a className="hover:text-black" href="#">Contact</a></li>
            <li><a className="hover:text-black" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-black" href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-slate-500 py-6">© {new Date().getFullYear()} SHIZ. All rights reserved.</div>
    </footer>
  )
}
