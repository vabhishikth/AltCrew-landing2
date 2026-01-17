import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8 px-6 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24 border-b border-white/10 pb-12">
            <div>
                <h4 className="font-mono text-acid-lime mb-6">sitemap.xml</h4>
                <ul className="space-y-2 font-sans text-gray-400">
                    <li className="hover:text-white cursor-pointer">Home</li>
                    <li className="hover:text-white cursor-pointer">Discover</li>
                    <li className="hover:text-white cursor-pointer">Features</li>
                    <li className="hover:text-white cursor-pointer">Stories</li>
                </ul>
            </div>
            <div>
                 <h4 className="font-mono text-acid-lime mb-6">legal.txt</h4>
                <ul className="space-y-2 font-sans text-gray-400">
                    <li className="hover:text-white cursor-pointer">Privacy</li>
                    <li className="hover:text-white cursor-pointer">Terms</li>
                    <li className="hover:text-white cursor-pointer">Cookies</li>
                </ul>
            </div>
            <div className="md:col-span-2 text-right">
                 <h4 className="font-mono text-acid-lime mb-6">newsletter.sh</h4>
                 <div className="flex border-b border-white pb-2">
                    <input type="email" placeholder="ENTER EMAIL" className="bg-transparent w-full outline-none text-xl font-display uppercase placeholder:text-gray-600" />
                    <button className="font-bold uppercase hover:text-acid-lime">SUBMIT</button>
                 </div>
            </div>
        </div>

        {/* Massive Logo */}
        <div className="w-full overflow-hidden">
            <h1 className="font-display font-bold text-[24vw] leading-[0.7] tracking-tighter text-white/10 text-center select-none pointer-events-none">
                ALTCREW
            </h1>
        </div>

        <div className="flex justify-between items-end mt-12 font-mono text-xs text-gray-600">
            <div>
                DESIGNED FOR MOVEMENT <br/>
                BASED IN INDIA
            </div>
            <div>
                © {new Date().getFullYear()}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;