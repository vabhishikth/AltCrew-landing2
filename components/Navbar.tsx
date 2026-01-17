import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-40 px-6 flex justify-between items-start pointer-events-none">
        {/* Logo Area */}
        <div className="pointer-events-auto">
          <a href="#" className="block bg-alt-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full hover:border-acid-lime/50 transition-colors group">
            <span className="font-display font-bold text-2xl tracking-tighter italic uppercase">
              Alt<span className="text-acid-lime group-hover:text-white transition-colors">Crew</span>
            </span>
          </a>
        </div>

        {/* Desktop Menu - "Island" Style */}
        <div className="hidden md:flex pointer-events-auto bg-alt-black/80 backdrop-blur-md border border-white/10 rounded-full px-2 py-2 items-center gap-1">
          {['Discover', 'Features', 'Community'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-white hover:text-black transition-all"
            >
              {item}
            </a>
          ))}
          <button className="bg-acid-lime text-black px-6 py-2 rounded-full font-bold text-sm uppercase hover:bg-white transition-colors ml-2 flex items-center gap-1">
            Join <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden pointer-events-auto bg-alt-black border border-white/20 p-3 rounded-full text-white"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Full Screen Menu Overlay */}
      <div className={`fixed inset-0 bg-acid-lime z-50 flex flex-col p-6 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex justify-between items-center mb-12">
          <span className="font-display font-bold text-3xl tracking-tighter text-black">ALTCREW</span>
          <button onClick={() => setIsOpen(false)} className="text-black p-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
            <X size={32} />
          </button>
        </div>
        
        <div className="flex flex-col gap-4">
          {['Discover', 'Features', 'Community', 'Stories', 'Login'].map((item) => (
            <a 
              key={item} 
              href="#" 
              onClick={() => setIsOpen(false)}
              className="font-display text-6xl md:text-8xl font-bold text-black uppercase hover:text-white transition-colors leading-none"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="mt-auto border-t-2 border-black pt-6 flex justify-between text-black font-bold">
          <span>MUMBAI</span>
          <span>EST. 2024</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;