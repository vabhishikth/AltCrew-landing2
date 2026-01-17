import React from 'react';

const CommunityProof: React.FC = () => {
  return (
    <section id="community" className="py-24 bg-black overflow-hidden relative border-t border-white/10">
      
      {/* Media Ticker */}
      <div className="mb-24 border-b border-white/10 pb-12">
        <p className="text-center font-mono text-gray-500 text-xs mb-8 tracking-[0.3em] uppercase">Featured In</p>
        <div className="flex justify-center items-center gap-12 md:gap-24 flex-wrap opacity-50 px-6 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Placeholders for Logos to maintain Brutalist style */}
            <span className="text-2xl font-display font-bold text-white">FORBES</span>
            <span className="text-2xl font-display font-bold text-white">HYPEBEAST</span>
            <span className="text-2xl font-display font-bold text-white">RUNNER'S WORLD</span>
            <span className="text-2xl font-display font-bold text-white">HIGHSNOBIETY</span>
            <span className="text-2xl font-display font-bold text-white">VOGUE</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-7xl text-white uppercase mb-4">
                Backed by <span className="text-acid-lime">Icons</span>
            </h2>
            <p className="font-sans text-gray-400">Trusted by the people shaping culture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-zinc-900 border border-white/10 p-8 hover:bg-zinc-800 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <img src="https://picsum.photos/100?random=88" className="w-16 h-16 rounded-full grayscale object-cover" alt="Profile" />
                    <div>
                        <h4 className="font-bold text-white uppercase">Brandon Schneider</h4>
                        <p className="font-mono text-xs text-acid-blue">STEEL CITY CLUB</p>
                    </div>
                </div>
                <p className="font-sans text-xl text-gray-300 leading-relaxed">
                    "AltCrew changed how we operate. No more spreadsheets. The guestlist feature alone saved us 10 hours a week."
                </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-zinc-900 border border-white/10 p-8 hover:bg-zinc-800 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <img src="https://picsum.photos/100?random=89" className="w-16 h-16 rounded-full grayscale object-cover" alt="Profile" />
                    <div>
                        <h4 className="font-bold text-white uppercase">Sarah Jenkins</h4>
                        <p className="font-mono text-xs text-acid-purple">YOGA COLLECTIVE</p>
                    </div>
                </div>
                <p className="font-sans text-xl text-gray-300 leading-relaxed">
                    "I was ready to cancel Sunday mornings. Too much admin. AltCrew automated payments and waivers. Now I just teach."
                </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-zinc-900 border border-white/10 p-8 hover:bg-zinc-800 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                    <img src="https://picsum.photos/100?random=90" className="w-16 h-16 rounded-full grayscale object-cover" alt="Profile" />
                    <div>
                        <h4 className="font-bold text-white uppercase">Marcus Dei</h4>
                        <p className="font-mono text-xs text-acid-lime">HYBRID ATHLETE</p>
                    </div>
                </div>
                <p className="font-sans text-xl text-gray-300 leading-relaxed">
                    "The community discovery is insane. I found my 5am crew in two days. It's not just an app, it's a movement."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CommunityProof;