import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Discovery from './components/Discovery';
import Features from './components/Features';
import Growth from './components/Growth';
import CommunityProof from './components/CommunityProof';
import SportsGrid from './components/SportsGrid';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-purple-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CommunityProof />
        <SportsGrid />
        <Features />
        <Growth />
        <Discovery />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;