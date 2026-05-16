import { motion } from "motion/react";
import { History, Globe, Users, Trophy } from "lucide-react";

const milestones = [
  { year: "1886", title: "The Beginning", desc: "Dr. John S. Pemberton creates the first Coca-Cola syrup in Atlanta." },
  { year: "1894", title: "First Bottling", desc: "Joseph Biedenharn begins bottling Coca-Cola for the first time." },
  { year: "1915", title: "Contour Bottle", desc: "The iconic Coca-Cola bottle design is patented." },
  { year: "1971", title: "I'd Like to Buy the World a Coke", desc: "One of the most famous commercials in history debuts." },
  { year: "2024", title: "Real Magic", desc: "A new brand philosophy celebrating the magic of human connection." },
];

export default function About() {
  return (
    <div className="bg-coke-black pt-32">
       <section className="min-h-screen relative flex items-center px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="order-2 md:order-1"
             >
                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-square bg-coke-red rounded-[40px] p-8 flex flex-col justify-end">
                      <History size={40} className="mb-4" />
                      <p className="font-display font-black text-2xl uppercase">130+ Years</p>
                   </div>
                   <div className="aspect-square bg-coke-silver/10 border border-white/10 rounded-[40px] p-8 flex flex-col justify-end">
                      <Globe size={40} className="mb-4 text-coke-red" />
                      <p className="font-display font-black text-2xl uppercase">Global Presence</p>
                   </div>
                   <div className="aspect-square bg-coke-silver/10 border border-white/10 rounded-[40px] p-8 flex flex-col justify-end">
                      <Users size={40} className="mb-4 text-coke-red" />
                      <p className="font-display font-black text-2xl uppercase">Community</p>
                   </div>
                   <div className="aspect-square bg-coke-red rounded-[40px] p-8 flex flex-col justify-end">
                      <Trophy size={40} className="mb-4" />
                      <p className="font-display font-black text-2xl uppercase">Excellence</p>
                   </div>
                </div>
             </motion.div>
             <div className="order-1 md:order-2">
                <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[100px] leading-none uppercase tracking-tighter mb-8">Refreshing <br /> the World</h1>
                <p className="text-white/60 text-xl leading-relaxed mb-12">
                  Our purpose is to refresh the world and make a difference. We've been doing it since 1886.
                </p>
                <div className="w-full h-[1px] bg-white/20 relative">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "100%" }}
                     transition={{ duration: 1.5, ease: "easeInOut" }}
                     className="absolute left-0 top-0 h-full bg-coke-red" 
                   />
                </div>
             </div>
          </div>
       </section>

       <section className="py-32 px-6">
          <div className="max-w-4xl mx-auto relative">
             <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
             
             {milestones.map((ms, i) => (
                <motion.div 
                  key={ms.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-12 mb-32 relative z-10 ${i % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                   <div className="flex-1 text-center md:text-left">
                      <span className="font-display font-black text-6xl md:text-8xl text-outline opacity-20 outline-text" 
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}>
                        {ms.year}
                      </span>
                      <h3 className="text-3xl font-display font-bold uppercase mt-[-40px] relative z-10">{ms.title}</h3>
                      <p className="text-white/50 mt-4 leading-relaxed max-w-sm mx-auto md:mx-0">{ms.desc}</p>
                   </div>
                   <div className="w-12 h-12 bg-coke-red rounded-full border-4 border-coke-black flex items-center justify-center shrink-0">
                      <div className="w-4 h-4 bg-white rounded-full" />
                   </div>
                   <div className="flex-1" />
                </motion.div>
             ))}
          </div>
       </section>
    </div>
  );
}
