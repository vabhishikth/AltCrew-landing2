import React from 'react';

const categories = [
  { 
    title: 'Studios & Gyms', 
    desc: 'More than tools. Everything you need for growth.',
    image: 'https://picsum.photos/600/800?grayscale&random=60' 
  },
  { 
    title: 'Run Clubs', 
    desc: 'From 10 person gatherings to 1,000 person festivals.',
    image: 'https://picsum.photos/600/800?grayscale&random=61' 
  },
  { 
    title: 'Retreats', 
    desc: 'Payment plans, waivers, and multi-day schedules.',
    image: 'https://picsum.photos/600/800?grayscale&random=62' 
  },
];

const SportsGrid: React.FC = () => {
  return (
    <section className="bg-alt-black py-24 px-6 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-16 text-center">
            Built For Every Kind <br/>
            Of Fitness Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, idx) => (
                <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/10 hover:border-acid-lime transition-all">
                    <img 
                        src={cat.image} 
                        alt={cat.title} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                    
                    <div className="absolute bottom-0 left-0 p-8">
                        <h3 className="font-display text-4xl text-white uppercase mb-2">{cat.title}</h3>
                        <p className="font-sans text-gray-400 text-sm leading-relaxed">{cat.desc}</p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="text-center mt-12">
            <button className="text-acid-lime font-mono text-sm uppercase tracking-widest border-b border-acid-lime pb-1 hover:text-white hover:border-white transition-colors">
                View All Community Types
            </button>
        </div>
      </div>
    </section>
  );
};

export default SportsGrid;