/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Search, Globe, Instagram, Twitter, Facebook, Youtube } from "lucide-react";

// Pages (to be created)
import Home from "./pages/Home";
import Products from "./pages/Products";
import Campaigns from "./pages/Campaigns";
import About from "./pages/About";
import StoreLocator from "./pages/StoreLocator";
import Sustainability from "./pages/Sustainability";
import AIChatbot from "./components/AIChatbot";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", path: "/products" },
    { name: "Campaigns", path: "/campaigns" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Brand Story", path: "/about" },
    { name: "Store Locator", path: "/store-locator" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-coke-black/90 backdrop-blur-lg py-4 border-b border-white/10" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
           <div className="w-10 h-10 bg-coke-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
             <span className="font-display font-bold text-white text-xl">C</span>
           </div>
           <span className="font-display font-black text-3xl tracking-tighter text-coke-red italic group-hover:text-white transition-colors">Coca-Cola</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-display text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-all ${location.pathname === link.path ? "text-white" : "text-white/50"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6 ml-4">
            <button className="px-6 py-2 border border-white/20 rounded-full text-[10px] font-bold tracking-widest uppercase items-center glass hover:bg-coke-red hover:border-coke-red transition-all">Shop Now</button>
            <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-coke-black border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden glass"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="font-display text-2xl font-bold tracking-tight uppercase"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-coke-black border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-8 group">
             <div className="w-10 h-10 bg-coke-red rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
               <span className="font-display font-bold text-white text-xl">C</span>
             </div>
             <span className="font-display font-black text-2xl tracking-tighter text-coke-red italic group-hover:text-white transition-colors">Coca-Cola</span>
          </Link>
          <p className="text-white/50 text-sm leading-relaxed mb-8">
            Experience the original taste that has brought joy and refreshment to the world for over 130 years. Open Happiness.
          </p>
          <div className="flex gap-4">
            <Instagram className="text-white/50 hover:text-coke-red cursor-pointer" size={20} />
            <Twitter className="text-white/50 hover:text-coke-red cursor-pointer" size={20} />
            <Facebook className="text-white/50 hover:text-coke-red cursor-pointer" size={20} />
            <Youtube className="text-white/50 hover:text-coke-red cursor-pointer" size={20} />
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Our Brands</h4>
          <ul className="space-y-4 text-white/50 text-xs">
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Coca-Cola Classic</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Coke Zero Sugar</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Diet Coke</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Sprite</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Fanta</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
          <ul className="space-y-4 text-white/50 text-xs">
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Sustainability</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Campaigns</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Careers</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Investors</li>
            <li className="hover:text-coke-red transition-colors cursor-pointer uppercase">Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold uppercase tracking-widest text-sm mb-6">Newsletter</h4>
          <p className="text-white/50 text-xs mb-6">Join our community for exclusive drops and happiness updates.</p>
          <div className="flex bg-white/5 border border-white/10 rounded-full overflow-hidden p-1">
            <input type="email" placeholder="Email Address" className="bg-transparent border-none outline-none px-4 text-xs w-full" />
            <button className="bg-coke-red px-6 py-2 rounded-full text-[10px] font-bold uppercase hover:bg-white hover:text-coke-red transition-all">Join</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-white/30 text-[10px] uppercase tracking-widest">© 2026 THE COCA-COLA COMPANY. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-4">
          <Globe size={12} className="text-white/30" />
          <span className="text-white/30 text-[10px] uppercase tracking-widest">Global | English</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-coke-red selection:text-white">
        <Navigation />
        <main className="flex-grow pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/about" element={<About />} />
            <Route path="/store-locator" element={<StoreLocator />} />
          </Routes>
        </main>
        <AIChatbot />
        <Footer />
      </div>
    </Router>
  );
}

