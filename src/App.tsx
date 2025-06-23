import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ValueProposition from './components/ValueProposition';
import FeaturesShowcase from './components/FeaturesShowcase';
import SocialProof from './components/SocialProof';
import Leadership from './components/Leadership';
import Inclusivity from './components/Inclusivity';
import FAQ from './components/FAQ';
import WaysToConnect from './components/WaysToConnect';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import IOSWaitlistModal from './components/IOSWaitlistModal';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <FeaturesShowcase />
        <SocialProof />
        <Leadership />
        <Inclusivity />
        <FAQ />
        <WaysToConnect />
        <FinalCTA />
      </main>
      <Footer />
      <IOSWaitlistModal />
    </div>
  );
}

export default App;