import { motion } from "motion/react";
import { Leaf, Droplets, Recycle, Wind, TrendingUp, BarChart3 } from "lucide-react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "2020", value: 45 },
  { name: "2021", value: 52 },
  { name: "2022", value: 61 },
  { name: "2023", value: 72 },
  { name: "2024", value: 85 },
];

const pieData = [
  { name: "Recycled Plastic", value: 60, color: "#E31937" },
  { name: "Plant-Based", value: 25, color: "#008B47" },
  { name: "Virgin Plastic", value: 15, color: "#717171" },
];

export default function Sustainability() {
  return (
    <div className="bg-coke-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-24">
         <motion.div 
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-20 h-20 bg-coke-red rounded-[20px] flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(227,25,55,0.4)]"
         >
            <Leaf size={40} className="text-white" />
         </motion.div>
         <h1 className="font-display font-black text-6xl md:text-8xl lg:text-[100px] leading-none uppercase tracking-tighter mb-8">World Without <br /> <span className="text-coke-red">Waste</span></h1>
         <p className="max-w-2xl mx-auto text-white/50 text-xl leading-relaxed italic">Our global goal is to collect and recycle every bottle or can we sell by 2030.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
         {/* Chart 1 */}
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="col-span-1 lg:col-span-2 glass rounded-[40px] p-12 overflow-hidden"
         >
            <div className="flex justify-between items-center mb-12">
               <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-white/30">Sustainability Impact</p>
                  <h3 className="text-2xl font-display font-bold uppercase mt-2">Recycled Packaging Progress</h3>
               </div>
               <BarChart3 className="text-coke-red" size={32} />
            </div>
            <div className="h-[300px] w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                     <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#E31937" stopOpacity={0.8}/>
                           <stop offset="95%" stopColor="#E31937" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <XAxis dataKey="name" stroke="#555" fontSize={10} axisLine={false} tickLine={false} />
                     <YAxis hide />
                     <Tooltip contentStyle={{ backgroundColor: "#111", border: "none", borderRadius: "10px", fontSize: "10px" }} />
                     <Area type="monotone" dataKey="value" stroke="#E31937" strokeWidth={4} fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </motion.div>

         {/* Stats */}
         <div className="space-y-6">
            <div className="bg-coke-silver/5 border border-white/10 p-10 rounded-[40px] flex flex-col justify-between group hover:border-coke-red transition-all cursor-default">
               <Droplets className="text-blue-400 mb-6" size={32} />
               <div>
                  <p className="text-4xl font-display font-black mb-2">100%</p>
                  <p className="text-xs uppercase tracking-widest text-white/40">Water Neutrality Reached</p>
               </div>
            </div>
            <div className="bg-coke-silver/5 border border-white/10 p-10 rounded-[40px] flex flex-col justify-between group hover:border-coke-red transition-all cursor-default">
               <Wind className="text-green-400 mb-6" size={32} />
               <div>
                  <p className="text-4xl font-display font-black mb-2">25k+</p>
                  <p className="text-xs uppercase tracking-widest text-white/40">Tons of plastic avoided</p>
               </div>
            </div>
            <div className="bg-coke-silver/10 p-10 rounded-[40px] border border-coke-red/20">
               <div className="flex items-center gap-4 mb-4">
                  <Recycle className="text-coke-red" size={24} />
                  <p className="text-[10px] uppercase font-black">2030 Vision</p>
               </div>
               <p className="text-xs text-white/60 leading-relaxed italic">"Climate change is a defining issue. We are accelerating our actions to reduce carbon footprint by 25%."</p>
            </div>
         </div>
      </div>

      {/* Distribution Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div>
            <h2 className="font-display font-black text-4xl uppercase tracking-tighter mb-8 italic">Packaging <br /> Composition</h2>
            <div className="space-y-6">
               {pieData.map((d) => (
                  <div key={d.name} className="flex items-center justify-between p-6 glass rounded-2xl">
                     <div className="flex items-center gap-4">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
                        <span className="text-sm font-bold uppercase tracking-widest">{d.name}</span>
                     </div>
                     <span className="font-display font-black text-xl">{d.value}%</span>
                  </div>
               ))}
            </div>
         </div>
         <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={140}
                    paddingAngle={10}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "#111", border: "none", borderRadius: "10px", fontSize: "10px" }} />
               </PieChart>
            </ResponsiveContainer>
         </div>
      </div>
    </div>
  );
}
