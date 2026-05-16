import { motion } from "motion/react";
import { useState } from "react";
import { Filter, ShoppingBag, Heart, Star, ChevronDown } from "lucide-react";
import CokeBottle from "../components/3d/CokeBottle";

const products = [
  { id: 1, name: "Coca-Cola Original", category: "Classic", color: "#E31937", price: "$1.99", rating: 4.9 },
  { id: 2, name: "Coke Zero Sugar", category: "Zero", color: "#141414", price: "$1.99", rating: 4.8 },
  { id: 3, name: "Diet Coke", category: "Diet", color: "#717171", price: "$1.89", rating: 4.7 },
  { id: 4, name: "Sprite", category: "Lemon-Lime", color: "#008B47", price: "$1.79", rating: 4.8 },
  { id: 5, name: "Fanta Orange", category: "Fruit", color: "#FF8200", price: "$1.79", rating: 4.6 },
  { id: 6, name: "Coca-Cola Cherry", category: "Classic", color: "#8B0000", price: "$2.19", rating: 4.9 },
];

export default function Products() {
  const [filter, setFilter] = useState("All");
  const filteredProducts = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-20 bg-coke-black min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter mb-8 bg-gradient-to-b from-white to-white/20 bg-clip-text text-transparent"
          >
            The Collection
          </motion.h1>
          <div className="flex flex-wrap justify-center gap-6">
            {["All", "Classic", "Zero", "Diet", "Lemon-Lime", "Fruit"].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-display font-bold uppercase text-[10px] tracking-widest border transition-all ${filter === cat ? "bg-white text-coke-black border-white" : "border-white/20 text-white/50 hover:border-white"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/5 rounded-[40px] p-8 group hover:bg-white/10 transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8">
                <button className="text-white/20 hover:text-coke-red transition-colors"><Heart /></button>
              </div>
              
              <div className="h-64 mb-8">
                <CokeBottle color={product.color} />
              </div>
              
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">{product.category}</p>
                  <h3 className="text-2xl font-display font-bold uppercase">{product.name}</h3>
                </div>
                <div className="text-right">
                  <p className="text-coke-red font-display font-bold text-xl">{product.price}</p>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs justify-end">
                    <Star size={10} fill="currentColor" /> {product.rating}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                 <button className="flex-grow bg-white text-coke-black py-4 rounded-2xl font-display font-bold uppercase text-[10px] tracking-widest hover:bg-coke-red hover:text-white transition-all flex items-center justify-center gap-2">
                   <ShoppingBag size={14} /> Add to Cart
                 </button>
                 <button className="px-6 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors">
                    <ChevronDown size={14} />
                 </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
