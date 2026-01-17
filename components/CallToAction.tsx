import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-24 bg-acid-lime text-black border-t-4 border-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
             <h2 className="font-display text-[15vw] leading-[0.8] font-bold uppercase tracking-tighter mb-8">
                Join Us
             </h2>
             <p className="font-sans text-2xl md:text-3xl font-bold mb-12 max-w-2xl mx-auto">
                Stop training alone. Start moving with a purpose.
             </p>
             
             <div className="flex flex-col md:flex-row justify-center gap-6">
                 <button className="bg-black text-white font-display text-2xl uppercase px-12 py-6 hover:bg-white hover:text-black hover:scale-105 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                    Download App
                 </button>
                 <button className="border-4 border-black text-black font-display text-2xl uppercase px-12 py-6 hover:bg-black hover:text-white transition-all">
                    View Manifesto
                 </button>
             </div>
        </div>
    </section>
  );
};

export default CallToAction;