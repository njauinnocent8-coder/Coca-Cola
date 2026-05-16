import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play, ChevronRight, Star, Globe, TrendingUp, Leaf, Zap, RefreshCw, MessageSquare } from "lucide-react";
import CokeBottle from "../components/3d/CokeBottle";
import { Link } from "react-router-dom";

function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-coke-black pt-20">
      {/* Atmospheric Background */}
      <div className="atmospheric-glow" />
      <div className="atmospheric-glow-bottom" />
      
      {/* Background Animated Bubbles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-white rounded-full animate-bubble"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-coke-red rounded-full animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">New Campaign 2026</span>
          </motion.div>
          
          <h1 className="font-display font-black text-7xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter uppercase mb-8">
            Open <br />
            <span className="text-coke-red italic">Happiness</span>
          </h1>
          
          <p className="text-white/50 text-xl max-w-md mb-12 font-light leading-relaxed">
            Experience the crisp, refreshing taste of the original icon. Every bubble is a moment of pure magic.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <button className="bg-coke-red px-10 py-5 rounded-full font-display font-black uppercase text-sm tracking-wider hover:scale-105 transition-transform shadow-lg shadow-coke-red/20 group">
              Explore Flavors
            </button>
            <button className="bg-white text-coke-black px-10 py-5 rounded-full font-display font-black uppercase text-sm tracking-wider hover:bg-coke-red hover:text-white transition-colors">
              Our Story
            </button>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-coke-red/20 blur-[120px] rounded-full scale-150" />
          <CokeBottle />
          {/* Action Floating Cards */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -top-10 -right-10 glass p-6 rounded-2xl hidden lg:block"
          >
             <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-coke-red rounded-full flex items-center justify-center">
                  <TrendingUp size={20} />
                </div>
                <div>
                   <p className="text-[10px] text-white/50 uppercase tracking-widest">Trending Now</p>
                   <p className="font-bold text-sm">Coca-Cola Zero Sugar</p>
                </div>
             </div>
             <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-coke-black bg-white/10" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-coke-black bg-coke-red flex items-center justify-center text-[8px] font-bold">+12k</div>
             </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Scroll to explore</span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}

function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState("Coca-Cola Original");
  const categories = [
    { name: "Coca-Cola Original", color: "#E31937" },
    { name: "Coke Zero Sugar", color: "#141414" },
    { name: "Diet Coke", color: "#717171" },
    { name: "Sprite", color: "#008B47" },
    { name: "Fanta", color: "#FF8200" }
  ];

  return (
    <section className="py-32 bg-coke-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-6 underline decoration-coke-red decoration-8 underline-offset-8">Choose Your Flavor</h2>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {categories.map((cat) => (
              <button 
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`px-8 py-3 rounded-full font-display font-bold uppercase text-[10px] tracking-widest transition-all ${activeCategory === cat.name ? "bg-white text-coke-black scale-110" : "bg-white/5 text-white/50 hover:bg-white/10"}`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          <div className="order-2 lg:order-1">
            <h3 className="font-display font-black text-6xl md:text-8xl lg:text-[100px] leading-none uppercase mb-8 tracking-tighter text-white/10 outline-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
              {activeCategory}
            </h3>
            <div className="space-y-8">
              <div className="flex gap-12">
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Calories</p>
                   <p className="text-2xl font-display font-bold">140 kcal</p>
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Sugar</p>
                   <p className="text-2xl font-display font-bold">39g</p>
                </div>
                <div>
                   <p className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Fat</p>
                   <p className="text-2xl font-display font-bold">0g</p>
                </div>
              </div>
              <p className="text-white/60 text-lg leading-relaxed max-w-md">
                The iconic taste you know and love, delivering refreshment in every sip. Perfect for any occasion where happiness is shared.
              </p>
              <div className="flex items-center gap-6 pt-8">
                <button className="bg-white text-coke-black px-10 py-4 rounded-full font-display font-black uppercase text-xs tracking-widest hover:bg-coke-red hover:text-white transition-all">Buy Now</button>
                <Link to="/products" className="font-display font-bold uppercase text-[10px] tracking-widest text-white/50 hover:text-coke-red">Full Details</Link>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 h-[600px] relative">
             <div className="absolute inset-0 bg-white/5 rounded-full blur-[100px]" />
             <CokeBottle color={categories.find(c => c.name === activeCategory)?.color} />
          </div>
        </div>
      </div>
    </section>
  );
}

function FlavorFinderIA() {
  const [profile, setProfile] = useState("");
  const [recommendation, setRecommendation] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const getRecommendation = async () => {
    if (!profile) return;
    setLoading(true);
    try {
      const res = await fetch("/api/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profile }),
      });
      const data = await res.json();
      setRecommendation(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-32 bg-white text-coke-black relative">
       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-black text-coke-red mb-4 block">AI Flavor Discovery</span>
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8 italic">Find Your Perfect <br /> Match</h2>
            <p className="text-coke-black/60 text-lg mb-12">Tell us about your vibe today, and our AI will suggest the perfect Coca-Cola experience for you.</p>
            
            <div className="space-y-6">
              <div className="bg-coke-black/5 p-8 rounded-3xl border border-coke-black/10">
                <textarea 
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  placeholder="E.g. Feeling energetic, ready to party with friends, looking for legacy vibes..."
                  className="w-full bg-transparent border-none outline-none text-lg resize-none h-32"
                />
                <button 
                  onClick={getRecommendation}
                  disabled={loading}
                  className="mt-6 bg-coke-red text-white px-8 py-4 rounded-full font-display font-black uppercase text-xs tracking-widest w-full hover:scale-105 transition-all shadow-xl disabled:opacity-50"
                >
                  {loading ? "Discovering..." : "Discover Flavor"}
                </button>
              </div>

              {recommendation && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-coke-black text-white p-8 rounded-3xl relative overflow-hidden"
                >
                   <div className="absolute top-0 right-0 w-32 h-32 bg-coke-red blur-[60px] opacity-20" />
                   <h4 className="text-coke-red font-display font-black uppercase tracking-widest text-xs mb-4">Recommended for you:</h4>
                   <p className="text-3xl font-display font-black uppercase mb-4">{recommendation.product}</p>
                   <p className="text-white/60 leading-relaxed text-sm">{recommendation.reason}</p>
                </motion.div>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-coke-red rounded-[60px] rotate-12 absolute inset-0 opacity-10" />
             <div className="aspect-square bg-coke-silver rounded-[60px] -rotate-6 flex items-center justify-center border border-coke-black/5 p-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-coke-black rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <MessageSquare className="text-white" size={32} />
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-48 bg-coke-black/10 rounded-full mx-auto" />
                    <div className="h-4 w-32 bg-coke-black/10 rounded-full mx-auto" />
                    <div className="h-4 w-40 bg-coke-black/10 rounded-full mx-auto" />
                  </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}

function ExperienceGrid() {
  return (
    <section className="py-32 bg-coke-black px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-coke-red to-red-900 rounded-[40px] p-12 flex flex-col justify-between min-h-[400px] group overflow-hidden relative">
              <div className="relative z-10">
                <h4 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-4">Brand Story</h4>
                <p className="max-w-xs text-white/80 font-medium italic">From a small pharmacy in Atlanta to the world's most iconic brand. Explore our 130 year journey.</p>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                 <button className="bg-white text-coke-red px-8 py-3 rounded-full font-bold uppercase text-[10px] tracking-widest hover:scale-110 transition-transform">Explore Milestones</button>
                 <Globe size={100} className="text-white/10 absolute -right-10 -bottom-10" />
              </div>
           </div>
           
           <div className="bg-coke-silver/5 border border-white/10 rounded-[40px] p-12 flex flex-col justify-between min-h-[400px]">
              <div className="w-16 h-16 bg-coke-red rounded-2xl flex items-center justify-center mb-8">
                <Leaf className="text-white" size={32} />
              </div>
              <div>
                <h4 className="font-display font-black text-4xl uppercase tracking-tighter mb-4">World Without Waste</h4>
                <p className="text-white/50 text-sm leading-relaxed mb-8">Our commitment to sustainable packaging and a better shared future for all.</p>
                <div className="flex items-center gap-3">
                   <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="w-[61%] h-full bg-coke-red" />
                   </div>
                   <span className="text-[10px] font-bold">61% Recycled</span>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ProductShowcase />
      <ExperienceGrid />
      <FlavorFinderIA />
    </div>
  );
}
