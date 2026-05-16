import { motion } from "motion/react";
import { Search, MapPin, Navigation, Phone, Clock } from "lucide-react";
import { useState } from "react";

const stores = [
  { id: 1, name: "Coca-Cola World Atlanta", address: "121 Baker St NW, Atlanta, GA 30313", type: "Experience Center" },
  { id: 2, name: "Flagship Store Las Vegas", address: "3785 S Las Vegas Blvd, Las Vegas, NV 89109", type: "Retail Store" },
  { id: 3, name: "Coke Store Orlando", address: "1512 E Buena Vista Dr, Lake Buena Vista, FL 32830", type: "Retail Store" },
];

export default function StoreLocator() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-coke-black pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 py-12">
           <h1 className="font-display font-black text-6xl uppercase tracking-tighter mb-8 italic">Find Happiness <br /> <span className="text-coke-red">Near You</span></h1>
           
           <div className="bg-white/5 border border-white/10 p-2 rounded-full flex items-center mb-12">
              <div className="w-12 h-12 flex items-center justify-center"><Search className="text-white/30" /></div>
              <input 
                type="text" 
                placeholder="City, State or Zip Code" 
                className="bg-transparent border-none outline-none w-full text-sm font-bold uppercase tracking-widest"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-coke-red p-4 rounded-full hover:scale-105 transition-transform"><Navigation size={20} /></button>
           </div>

           <div className="space-y-6">
              {stores.map((store) => (
                <motion.div 
                  key={store.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-8 rounded-[30px] bg-white/5 border border-white/10 hover:border-coke-red transition-all group cursor-pointer"
                >
                   <span className="text-[10px] uppercase tracking-widest font-black text-coke-red mb-4 block">{store.type}</span>
                   <h3 className="text-xl font-display font-bold uppercase mb-4">{store.name}</h3>
                   <p className="text-white/50 text-sm mb-6 flex items-start gap-2"><MapPin size={16} className="shrink-0 mt-1" /> {store.address}</p>
                   
                   <div className="flex gap-4">
                      <button className="flex-grow bg-white text-coke-black py-3 rounded-xl font-display font-bold uppercase text-[10px] tracking-widest hover:bg-coke-red hover:text-white transition-all">Directions</button>
                      <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"><Phone size={18} /></button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        <div className="lg:col-span-2 relative h-[500px] lg:h-auto py-12">
           {/* Mock Map with stylized UI */}
           <div className="w-full h-full bg-white/5 rounded-[60px] border border-white/10 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 {/* Stylized Grid */}
                 <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              </div>

              <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-96 h-96 bg-coke-red/10 rounded-full blur-[80px]"
              />

              <div className="relative z-10 text-center">
                 <div className="w-20 h-20 bg-coke-red rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(227,25,55,0.6)]">
                    <MapPin size={32} />
                 </div>
                 <p className="font-display font-black uppercase tracking-[0.4em] text-[10px]">Your Selection Map Displayed Here</p>
              </div>
              
              {/* Floating Tooltips */}
              <div className="absolute top-1/4 left-1/4 p-4 glass rounded-2xl animate-float">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-coke-red" />
                    <span className="text-[10px] font-bold uppercase">Hapiness Spot #1</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
