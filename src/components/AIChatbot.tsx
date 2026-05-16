import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Minus, Maximize2 } from "lucide-react";

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "ai", content: "Welcome to the world of Coca-Cola! I'm your happiness assistant. How can I brighten your day today? ✨" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: "ai", content: "Oops! My carbonation levels are low. Can you try again? 🫧" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-[380px] h-[580px] mb-6 glass rounded-[40px] flex flex-col shadow-2xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="bg-coke-red p-6 flex justify-between items-center shrink-0">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-coke-red font-display font-black text-xl leading-none">C</span>
                  </div>
                  <div>
                    <h4 className="font-display font-black uppercase text-sm tracking-widest text-white">Coke AI</h4>
                    <span className="text-[10px] text-white/70 uppercase tracking-widest flex items-center gap-1">
                       <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" /> Online
                    </span>
                  </div>
               </div>
               <div className="flex gap-2">
                  <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white"><Minus size={18} /></button>
                  <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white"><X size={18} /></button>
               </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4">
               {messages.map((m, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: m.role === "user" ? 20 : -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                 >
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${m.role === "user" ? "bg-coke-red text-white rounded-tr-none" : "bg-white/10 text-white rounded-tl-none border border-white/10"}`}>
                       <p>{m.content}</p>
                    </div>
                 </motion.div>
               ))}
               {loading && (
                 <div className="flex justify-start">
                    <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
                       <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" />
                       <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                       <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                 </div>
               )}
            </div>

            {/* Input */}
            <div className="p-6 shrink-0 border-t border-white/10">
               <div className="bg-white/5 border border-white/10 rounded-full p-2 flex items-center">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Type a message..." 
                    className="bg-transparent border-none outline-none w-full px-4 text-xs font-medium"
                  />
                  <button 
                    onClick={handleSend}
                    className="w-10 h-10 bg-coke-red rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Send size={16} />
                  </button>
               </div>
               <p className="text-center text-[8px] text-white/30 uppercase tracking-[0.3em] mt-4">AI-powered by Gemini</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl relative transition-all duration-300 ${isOpen ? "bg-white text-coke-red" : "bg-coke-red text-white"}`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
              <MessageSquare size={24} />
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
            <span className="w-2.5 h-2.5 bg-coke-red rounded-full animate-ping" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
