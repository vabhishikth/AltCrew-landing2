import React from 'react';

const Discovery: React.FC = () => {
  return (
    <section id="discover" className="py-0 bg-alt-black overflow-hidden">
      
      {/* Infinite Marquee */}
      <div className="bg-acid-lime py-4 border-y-4 border-black rotate-1 scale-105 z-20 relative">
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="animate-marquee flex gap-8 items-center">
             {Array(10).fill("RUN • RIDE • RECOVER • LIFT •").map((text, i) => (
               <span key={i} className="text-4xl md:text-6xl font-display font-bold text-black uppercase tracking-tight">
                 {text}
               </span>
             ))}
          </div>
          <div className="absolute top-0 animate-marquee2 flex gap-8 items-center">
             {Array(10).fill("RUN • RIDE • RECOVER • LIFT •").map((text, i) => (
               <span key={`dup-${i}`} className="text-4xl md:text-6xl font-display font-bold text-black uppercase tracking-tight">
                 {text}
               </span>
             ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1800px] mx-auto px-4 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-display text-6xl md:text-8xl text-white leading-[0.9] uppercase">
                Not Just <br />
                <span className="text-transparent text-stroke-white">Another App</span>
            </h2>
            <p className="font-mono text-acid-blue max-w-sm text-right">
                // 001<br/>
                DISCOVER LOCAL COMMUNITIES<br/>
                CONNECTING THE UNCONNECTED
            </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[800px]">
            
            {/* Card 1: Run Clubs */}
            <div className="group relative md:col-span-2 md:row-span-2 bg-zinc-900 rounded-none overflow-hidden border border-white/10 hover:border-acid-lime transition-colors">
                <img src="https://picsum.photos/1200/800?grayscale&random=2" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105" alt="Run Club" />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black to-transparent">
                    <h3 className="font-display text-6xl text-white uppercase mb-2">Run Clubs</h3>
                    <p className="font-sans text-gray-300">Join the city's best pavement pounders. 5K to Ultra.</p>
                </div>
                <div className="absolute top-4 right-4 bg-acid-lime text-black font-mono text-xs px-2 py-1 uppercase font-bold transform rotate-3">Popular</div>
            </div>

            {/* Card 2: Cycling */}
            <div className="group relative bg-zinc-900 overflow-hidden border border-white/10 hover:border-acid-blue transition-colors">
                <img src="https://picsum.photos/600/600?grayscale&random=3" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" alt="Cycling" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-all">
                    <h3 className="font-display text-4xl text-transparent text-stroke-white group-hover:text-acid-blue transition-colors uppercase">Cycling</h3>
                 </div>
            </div>

            {/* Card 3: Hybrid */}
            <div className="group relative bg-zinc-900 overflow-hidden border border-white/10 hover:border-acid-purple transition-colors">
                 <img src="https://picsum.photos/600/600?grayscale&random=4" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" alt="Hybrid" />
                 <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-transparent transition-all">
                    <h3 className="font-display text-4xl text-transparent text-stroke-white group-hover:text-acid-purple transition-colors uppercase">Hybrid</h3>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Discovery;