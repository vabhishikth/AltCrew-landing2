import React from 'react';
import { CreditCard, FileSignature, Users, CalendarCheck } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="features" className="bg-white text-black py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-8xl md:text-[10rem] leading-[0.8] tracking-tighter mb-20 text-center md:text-left">
                RUN YOUR <br/>
                <span className="italic text-transparent text-stroke-black">COMMUNITY.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                
                {/* Feature 1: Organise */}
                <div className="group border-l-4 border-black pl-8 hover:border-acid-lime transition-colors duration-300">
                    <div className="mb-6 bg-black text-white w-16 h-16 flex items-center justify-center rounded-full">
                        <CalendarCheck size={32} />
                    </div>
                    <h3 className="font-display text-5xl uppercase mb-4">Create & Organise</h3>
                    <p className="font-sans text-xl leading-relaxed text-gray-800">
                        Launch a run club, yoga series, or hybrid meetup in seconds. Set recurring schedules, locations, and details. We handle the boring admin.
                    </p>
                </div>

                {/* Feature 2: Guestlist */}
                 <div className="group border-l-4 border-black pl-8 hover:border-acid-blue transition-colors duration-300 md:mt-24">
                    <div className="mb-6 bg-black text-white w-16 h-16 flex items-center justify-center rounded-full">
                        <Users size={32} />
                    </div>
                    <h3 className="font-display text-5xl uppercase mb-4">Manage Guestlist</h3>
                    <p className="font-sans text-xl leading-relaxed text-gray-800">
                        Waitlists, approvals, and check-ins. Know exactly who is showing up. Send updates to your crew instantly via the app.
                    </p>
                </div>

                {/* Feature 3: Payments */}
                 <div className="group border-l-4 border-black pl-8 hover:border-acid-purple transition-colors duration-300">
                    <div className="mb-6 bg-black text-white w-16 h-16 flex items-center justify-center rounded-full">
                        <CreditCard size={32} />
                    </div>
                    <h3 className="font-display text-5xl uppercase mb-4">Zero-Worry Payments</h3>
                    <p className="font-sans text-xl leading-relaxed text-gray-800">
                        Stop chasing Venmo requests. Sell tickets, memberships, or accept donations seamlessly. We automate the cash flow so you can focus on the flow state.
                    </p>
                </div>

                 {/* Feature 4: Waivers */}
                 <div className="group border-l-4 border-black pl-8 hover:border-acid-lime transition-colors duration-300 md:mt-24">
                    <div className="mb-6 bg-black text-white w-16 h-16 flex items-center justify-center rounded-full">
                        <FileSignature size={32} />
                    </div>
                    <h3 className="font-display text-5xl uppercase mb-4">Liability Autopilot</h3>
                    <p className="font-sans text-xl leading-relaxed text-gray-800">
                        Waivers signed automatically upon booking. Protect your community and yourself without printing a single sheet of paper.
                    </p>
                </div>

            </div>
            
             <div className="mt-32 text-center">
                 <button className="bg-black text-white font-display text-3xl uppercase px-12 py-6 hover:bg-acid-lime hover:text-black transition-all shadow-[12px_12px_0px_0px_rgba(204,255,0,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]">
                    Start Your Community Free
                 </button>
             </div>
        </div>
    </section>
  );
};

export default Features;