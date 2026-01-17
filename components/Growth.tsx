import React from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';

const Growth: React.FC = () => {
  return (
    <section className="bg-alt-black py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            
            {/* Text Content */}
            <div className="md:w-1/2 relative z-10">
                <h2 className="font-display text-7xl md:text-8xl text-white uppercase leading-none mb-8">
                    Fill Every <br/>
                    <span className="text-acid-blue">Experience.</span>
                </h2>
                <p className="font-sans text-xl text-gray-400 mb-8 max-w-lg">
                    Stop searching for participants. Get discovered by ready-to-move athletes instantly. We invest in your growth so you don't have to.
                </p>
                
                <ul className="space-y-4 font-mono text-sm text-gray-300 mb-10">
                    <li className="flex items-center gap-3">
                        <CheckCircle className="text-acid-lime" size={20} />
                        AUTOMATED DISCOVERY ALGORITHMS
                    </li>
                    <li className="flex items-center gap-3">
                         <CheckCircle className="text-acid-lime" size={20} />
                        INSTANT NOTIFICATIONS TO FOLLOWERS
                    </li>
                    <li className="flex items-center gap-3">
                         <CheckCircle className="text-acid-lime" size={20} />
                        REAL-TIME ANALYTICS DASHBOARD
                    </li>
                </ul>

                <button className="border border-white text-white px-8 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors">
                    Get Started For Free
                </button>
            </div>

            {/* Visual Abstract UI */}
            <div className="md:w-1/2 w-full relative">
                {/* Background Blob */}
                <div className="absolute inset-0 bg-gradient-to-tr from-acid-blue/20 to-acid-purple/20 blur-3xl"></div>

                {/* Main Card */}
                <div className="relative bg-zinc-900 border border-white/10 p-6 rounded-none shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <h4 className="text-gray-400 text-xs font-mono mb-1">EVENT STATUS</h4>
                            <h3 className="text-3xl font-bold text-white uppercase">Sunrise 5K</h3>
                        </div>
                        <div className="bg-acid-lime text-black px-2 py-1 text-xs font-bold font-mono">SOLD OUT</div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div className="h-full bg-acid-blue w-[92%]"></div>
                        </div>
                        <div className="flex justify-between text-sm font-mono">
                            <span className="text-gray-400">ATTENDEES</span>
                            <span className="text-white">92 / 100</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                        <div className="flex -space-x-4">
                             {[1,2,3,4].map(i => (
                                 <div key={i} className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-gray-700 overflow-hidden">
                                     <img src={`https://picsum.photos/100?random=${i+20}`} className="w-full h-full object-cover" />
                                 </div>
                             ))}
                        </div>
                        <div className="text-acid-lime flex items-center gap-1 font-bold">
                            <TrendingUp size={16} />
                            +12 today
                        </div>
                    </div>
                </div>

                {/* Floating Ticket */}
                <div className="absolute -bottom-8 -left-8 bg-white text-black p-4 w-48 shadow-xl transform -rotate-3 z-20 hidden md:block">
                     <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-lg">TICKET</span>
                        <span className="font-mono text-xs text-gray-500">#0492</span>
                     </div>
                     <div className="text-2xl font-display font-bold uppercase">$25.00</div>
                     <div className="text-xs font-mono text-gray-500 mt-1">PAID VIA ALTCREW</div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Growth;