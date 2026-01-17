import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col pt-32 pb-12 px-4 md:px-8 border-b border-white/10 bg-alt-black">
      
      {/* Background Gradients/Glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-acid-purple/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-acid-lime/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1800px] mx-auto w-full flex-grow flex flex-col justify-center relative z-10">
        
        {/* Top Tagline */}
        <div className="flex justify-between items-end mb-4 border-b border-white/20 pb-4">
          <span className="font-mono text-xs md:text-sm text-acid-lime uppercase tracking-widest">
            [ The Operating System for Community ]
          </span>
          <span className="hidden md:block font-mono text-xs text-gray-400">
            SCROLL TO EXPLORE
          </span>
        </div>

        {/* Main Headline */}
        <div className="relative">
          <h1 className="font-display font-bold text-[16vw] leading-[0.8] tracking-tighter text-white uppercase mix-blend-difference">
            BE THE
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 pl-2 md:pl-4">
            
            {/* Embedded Image Block */}
            <div className="w-32 h-20 md:w-64 md:h-40 bg-zinc-800 rounded-none border-2 border-acid-lime -mt-2 md:mt-0 -rotate-3 hover:rotate-0 transition-transform duration-300 overflow-hidden relative group">
              <img src="https://picsum.photos/600/400?grayscale&random=99" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform" alt="Runner" />
            </div>

            <h1 className="font-display font-bold text-[16vw] leading-[0.8] tracking-tighter text-acid-lime uppercase">
              MOVEMENT<span className="text-white">.</span>
            </h1>
          </div>
        </div>

        {/* Subtext & Dual CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 md:mt-20 items-end">
          <div className="md:col-span-6">
            <p className="font-sans text-xl md:text-2xl text-gray-300 leading-tight mb-8">
              Turn sweat into connections. AltCrew makes ordinary workouts extraordinary.
              <span className="text-white font-bold bg-white/10 px-2 ml-1">Build what moves you.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-acid-lime text-black font-display font-bold text-xl uppercase px-8 py-4 hover:bg-white transition-colors flex items-center gap-2">
                    Explore Crews <ArrowRight size={20} />
                </button>
                <button className="border-2 border-white text-white font-display font-bold text-xl uppercase px-8 py-4 hover:bg-white hover:text-black transition-colors flex items-center gap-2">
                    Host an Experience <Zap size={20} />
                </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;