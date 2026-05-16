import { motion } from "motion/react";
import { Play, Share2, Heart, MessageCircle, ArrowRight } from "lucide-react";

const campaigns = [
  { id: 1, title: "Real Magic", desc: "Discover the magic in every shared moment.", video: "/magic.mp4" },
  { id: 2, title: "Open Happiness", desc: "A call to action to find joy in the everyday.", video: "/happiness.mp4" },
  { id: 3, title: "Taste the Feeling", desc: "Capturing the simple pleasure of drinking a Coke.", video: "/taste.mp4" },
];

export default function Campaigns() {
  return (
    <div className="bg-coke-black">
      {campaigns.map((camp, i) => (
        <section key={camp.id} className="h-screen w-full relative flex items-center justify-center snap-start overflow-hidden">
          {/* Animated Background Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-coke-red/20 to-black z-0" />
          
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-20 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="text-coke-red font-display font-black uppercase tracking-widest text-xs">Featured Campaign</span>
              <h2 className="font-display font-black text-6xl md:text-9xl uppercase tracking-tighter leading-none">{camp.title}</h2>
              <p className="text-white/60 text-xl max-w-sm leading-relaxed">{camp.desc}</p>
              
              <div className="flex gap-6 items-center pt-8">
                 <button className="bg-white text-coke-black px-10 py-5 rounded-full font-display font-black uppercase text-xs tracking-widest hover:bg-coke-red hover:text-white transition-all flex items-center gap-3">
                   <Play fill="currentColor" size={16} /> Watch Now
                 </button>
                 <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"><Heart size={20} /></button>
                    <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"><MessageCircle size={20} /></button>
                    <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-white transition-colors"><Share2 size={20} /></button>
                 </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="aspect-[9/16] bg-white/5 border border-white/10 rounded-[60px] p-6 max-w-sm mx-auto shadow-2xl relative overflow-hidden group"
            >
               <div className="h-full w-full bg-gradient-to-b from-coke-red to-black rounded-[40px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                  <Play size={48} className="text-white z-20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <p className="absolute bottom-10 left-10 text-[10px] uppercase font-bold tracking-[0.4em] z-20">Click to Preview</p>
               </div>
            </motion.div>
          </div>
          
          <div className="absolute bottom-10 right-10 flex flex-col items-end gap-2">
             <span className="text-[10px] font-black">0{i+1} / 0{campaigns.length}</span>
             <div className="w-32 h-[1px] bg-white/20 relative">
                <motion.div 
                   className="absolute left-0 top-0 h-full bg-coke-red"
                   initial={{ width: 0 }}
                   whileInView={{ width: `${((i+1)/campaigns.length)*100}%` }}
                   transition={{ duration: 1 }}
                />
             </div>
          </div>
        </section>
      ))}
    </div>
  );
}
